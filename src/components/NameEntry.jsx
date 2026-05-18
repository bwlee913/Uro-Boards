import { useState, useEffect } from 'react'

const NAME_KEY = 'uro-boards-name'

export default function NameEntry({ onStart, initialName }) {
  const [name, setName] = useState(initialName || '')
  const [error, setError] = useState('')

  // Restore saved name
  useEffect(() => {
    if (!initialName) {
      const saved = localStorage.getItem(NAME_KEY)
      if (saved) setName(saved)
    }
  }, [initialName])

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Enter your name to track your score.')
      return
    }
    localStorage.setItem(NAME_KEY, trimmed)
    onStart(trimmed)
  }

  return (
    <div className="name-entry">
      <div className="name-entry__hero">
        <div className="name-entry__title">
          Uro<span>.</span>Boards
        </div>
        <div className="name-entry__subtitle">
          AUA guideline recall — 3 questions at a time
        </div>

        <div className="name-entry__stats">
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Per session</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">AUA domains</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Question types</div>
          </div>
        </div>
      </div>

      <form className="name-entry__form" onSubmit={handleSubmit}>
        <div className="label" style={{ textAlign: 'left', marginBottom: 6 }}>
          Your name
        </div>
        <input
          className="input"
          type="text"
          placeholder="e.g. Brennan"
          value={name}
          onChange={e => { setName(e.target.value); setError('') }}
          autoFocus
          autoComplete="given-name"
          maxLength={40}
        />

        {error && (
          <div style={{
            fontSize: 11,
            color: 'var(--incorrect)',
            letterSpacing: '0.06em',
            marginTop: -4,
          }}>
            {error}
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: 8 }}>
          Start Quiz →
        </button>

        <div className="name-entry__divider">or</div>

        <div style={{
          fontSize: 11,
          color: 'var(--text-3)',
          letterSpacing: '0.06em',
          textAlign: 'center',
          lineHeight: 1.7,
        }}>
          Questions are AI-generated from AUA guidelines.
          <br />
          Upload your textbook PDF to generate domain-specific questions.
        </div>
      </form>
    </div>
  )
}
