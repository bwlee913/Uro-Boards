import { useState, useEffect } from 'react'
import { loadScores, FIREBASE_ENABLED } from '../firebase.js'

const MEDALS = ['🥇', '🥈', '🥉']
const RANK_CLASSES = ['lb-row--gold', 'lb-row--silver', 'lb-row--bronze']

function timeAgo(ts) {
  const diff = Date.now() - ts
  const mins  = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days  = Math.floor(diff / 86400000)
  if (mins < 2)   return 'just now'
  if (mins < 60)  return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export default function Leaderboard({ currentUser }) {
  const [scores, setScores] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetch = async () => {
      try {
        const data = await loadScores()
        if (!cancelled) setScores(data)
      } catch (e) {
        if (!cancelled) setError('Could not load scores.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetch()
    return () => { cancelled = true }
  }, [])

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner-dots"><span /><span /><span /></div>
        <div className="spinner-label">Loading scores...</div>
      </div>
    )
  }

  return (
    <div className="leaderboard anim-fade-in">
      <div className="leaderboard-header">
        <div className="leaderboard-title">Leaderboard</div>
        {!FIREBASE_ENABLED && (
          <div style={{
            fontSize: 10,
            color: 'var(--text-3)',
            letterSpacing: '0.08em',
            fontFamily: 'var(--font-mono)',
          }}>
            Local only — configure Firebase to share
          </div>
        )}
      </div>

      {error && (
        <div style={{ color: 'var(--incorrect)', fontSize: 12, marginBottom: 16 }}>{error}</div>
      )}

      {scores.length === 0 ? (
        <div className="lb-empty">
          No scores yet — complete a session to appear here.
        </div>
      ) : (
        scores.map((entry, i) => {
          const isCurrent = entry.name === currentUser
          const rankClass = RANK_CLASSES[i] || ''
          return (
            <div
              key={entry.id || i}
              className={`lb-row ${rankClass}`}
              style={isCurrent ? { borderColor: 'var(--accent)', background: 'var(--accent-dim)' } : {}}
            >
              <div className={`lb-rank ${rankClass}`}>
                {i < 3 ? MEDALS[i] : `#${i + 1}`}
              </div>

              <div className="lb-name">
                {entry.name}
                {isCurrent && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    marginLeft: 8,
                    textTransform: 'uppercase',
                  }}>
                    you
                  </span>
                )}
              </div>

              <div style={{ textAlign: 'right' }}>
                <div className="lb-score">{entry.correct}/{entry.total}</div>
                <div className="lb-pct">{entry.pct}%</div>
              </div>

              {entry.timestamp && (
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 9,
                  color: 'var(--text-3)',
                  minWidth: 48,
                  textAlign: 'right',
                }}>
                  {timeAgo(entry.timestamp)}
                </div>
              )}
            </div>
          )
        })
      )}
    </div>
  )
}
