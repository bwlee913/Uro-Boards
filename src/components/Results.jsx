const MESSAGES = {
  perfect: ['Perfect score. Boards ready.', 'Clean sweep. Keep that up.', '100%. No notes.'],
  great:   ['Strong session.', 'Sharp. Keep reviewing.', 'Above average. Good work.'],
  okay:    ['Room to grow — review those guidelines.', 'Getting there. Keep drilling.', 'Half-credit. More reps needed.'],
  rough:   ['Rough one. That\'s what studying is for.', 'The guidelines don\'t memorize themselves.', 'Use the explanations. Come back stronger.'],
}

function getMessage(pct) {
  const pool = pct === 100 ? MESSAGES.perfect
    : pct >= 67 ? MESSAGES.great
    : pct >= 34 ? MESSAGES.okay
    : MESSAGES.rough
  return pool[Math.floor(Math.random() * pool.length)]
}

export default function Results({ userName, sessionData, onKeepGoing, onHome, onLeaderboard }) {
  const { answers } = sessionData
  const correct = answers.filter(a => a.correct).length
  const total   = answers.length
  const pct     = total > 0 ? Math.round((correct / total) * 100) : 0
  const message = getMessage(pct)

  return (
    <div className="results">

      {/* Score hero */}
      <div className="results-hero">
        <div className="label label-accent" style={{ marginBottom: 12 }}>
          {userName ? `${userName} — ` : ''}Session Complete
        </div>
        <div className="results-score">
          {correct}
          <span className="results-score-denom"> / {total}</span>
        </div>
        <div className="results-pct">{pct}%</div>
        <div className="results-label">{message}</div>
      </div>

      {/* Per-question breakdown */}
      <div className="results-breakdown">
        <div className="results-breakdown__header">Question Review</div>
        {answers.map((ans, i) => {
          const q = ans.question
          return (
            <div key={q.id} className="breakdown-item">
              <div className={`breakdown-dot breakdown-dot--${ans.correct ? 'correct' : 'incorrect'}`} />
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-3)',
                  marginBottom: 4,
                }}>
                  Q{i + 1} · {q.topic} · {q.type === 'mc' ? 'MC' : 'Recall'}
                </div>
                <div style={{ color: ans.correct ? 'var(--correct)' : 'var(--incorrect)', fontSize: 13 }}>
                  {ans.correct ? '✓ Correct' : '✗ Incorrect'}
                </div>
                {!ans.correct && q.type === 'mc' && (
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>
                    Correct: {q.options[q.answer]}
                  </div>
                )}
                {!ans.correct && q.type === 'fib' && (
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 4 }}>
                    Answer: {q.answer}
                  </div>
                )}
                {q.guideline && (
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    color: 'var(--text-3)',
                    marginTop: 6,
                  }}>
                    {q.guideline}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="results-actions">
        <button className="btn btn-primary btn-lg" onClick={onKeepGoing}>
          Keep Going →
        </button>
        <button className="btn btn-secondary" onClick={onLeaderboard}>
          View Scores
        </button>
        <button className="btn btn-ghost" onClick={onHome}>
          Home
        </button>
      </div>

    </div>
  )
}
