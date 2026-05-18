// ============================================================
//  Firebase Configuration
//  Leaderboard: Firestore (if configured) or localStorage
// ============================================================

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

export const FIREBASE_ENABLED = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
)

// ── Leaderboard helpers ──────────────────────────────────────

const LOCAL_KEY = 'uro-boards-leaderboard'

function getLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]')
  } catch {
    return []
  }
}

export async function saveScore({ name, correct, total }) {
  const entry = {
    name: name.trim(),
    correct,
    total,
    pct: total > 0 ? Math.round((correct / total) * 100) : 0,
    timestamp: Date.now(),
  }

  if (FIREBASE_ENABLED) {
    try {
      const { initializeApp, getApps } = await import('firebase/app')
      const { getFirestore, collection, addDoc } = await import('firebase/firestore')
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
      const db = getFirestore(app)
      await addDoc(collection(db, 'scores'), entry)
      return
    } catch (err) {
      console.warn('Firestore save failed, using localStorage:', err)
    }
  }

  const existing = getLocalScores()
  existing.push(entry)
  localStorage.setItem(LOCAL_KEY, JSON.stringify(existing))
}

export async function loadScores() {
  if (FIREBASE_ENABLED) {
    try {
      const { initializeApp, getApps } = await import('firebase/app')
      const { getFirestore, collection, getDocs, orderBy, query, limit } = await import('firebase/firestore')
      const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
      const db = getFirestore(app)
      const q = query(
        collection(db, 'scores'),
        orderBy('pct', 'desc'),
        orderBy('total', 'desc'),
        limit(50)
      )
      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    } catch (err) {
      console.warn('Firestore load failed, using localStorage:', err)
    }
  }

  return getLocalScores().sort((a, b) => b.pct - a.pct || b.total - a.total)
}