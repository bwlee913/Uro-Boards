// ============================================================
//  Firebase Configuration
//  Used for: Firestore (leaderboard) + FCM (push notifications)
//
//  Setup:
//  1. Create a project at console.firebase.google.com
//  2. Add a web app, copy your config values below
//  3. Enable Firestore Database in the Firebase console
//  4. Enable Cloud Messaging for push notifications
//  5. Add VITE_FIREBASE_* env vars to Vercel dashboard
// ============================================================

const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
}

// Check if Firebase is configured
export const FIREBASE_ENABLED = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
)

let db = null
let messaging = null

if (FIREBASE_ENABLED) {
  try {
    const { initializeApp } = await import('firebase/app')
    const { getFirestore } = await import('firebase/firestore')

    const app = initializeApp(firebaseConfig)
    db = getFirestore(app)

    // Messaging only works in supported browsers
    if ('Notification' in window) {
      try {
        const { getMessaging } = await import('firebase/messaging')
        messaging = getMessaging(app)
      } catch {
        console.log('FCM not supported in this environment')
      }
    }
  } catch (err) {
    console.warn('Firebase initialization failed:', err)
  }
}

export { db, messaging }

// ── Leaderboard helpers ──────────────────────────────────────

const LOCAL_KEY = 'uro-boards-leaderboard'

/**
 * Save a score entry to Firestore (if configured) or localStorage.
 */
export async function saveScore({ name, correct, total }) {
  const entry = {
    name: name.trim(),
    correct,
    total,
    pct: total > 0 ? Math.round((correct / total) * 100) : 0,
    timestamp: Date.now(),
  }

  if (FIREBASE_ENABLED && db) {
    try {
      const { collection, addDoc } = await import('firebase/firestore')
      await addDoc(collection(db, 'scores'), entry)
      return
    } catch (err) {
      console.warn('Firestore save failed, falling back to localStorage:', err)
    }
  }

  // localStorage fallback
  const existing = getLocalScores()
  existing.push(entry)
  localStorage.setItem(LOCAL_KEY, JSON.stringify(existing))
}

/**
 * Load all scores, sorted by pct desc then total questions desc.
 */
export async function loadScores() {
  if (FIREBASE_ENABLED && db) {
    try {
      const { collection, getDocs, orderBy, query, limit } = await import('firebase/firestore')
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

function getLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]')
  } catch {
    return []
  }
}
