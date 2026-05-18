import { useState, useCallback } from 'react'
import NameEntry from './components/NameEntry.jsx'
import QuizSession from './components/QuizSession.jsx'
import Results from './components/Results.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import { saveScore } from './firebase.js'

// Screens: 'home' | 'quiz' | 'results' | 'leaderboard'

export default function App() {
  const [screen, setScreen] = useState('home')
  const [userName, setUserName] = useState('')
  const [sessionData, setSessionData] = useState(null) // {answers, questions}

  const handleStartQuiz = useCallback((name) => {
    setUserName(name)
    setScreen('quiz')
  }, [])

  const handleSessionComplete = useCallback(async (data) => {
    // data = { answers: [{questionId, correct, question}], questions: [...] }
    setSessionData(data)

    const correct = data.answers.filter(a => a.correct).length
    const total   = data.answers.length

    // Save to leaderboard
    if (userName && total > 0) {
      await saveScore({ name: userName, correct, total })
    }

    setScreen('results')
  }, [userName])

  const handleKeepGoing = useCallback(() => {
    // Reset quiz state, start new session with same name
    setSessionData(null)
    setScreen('quiz')
  }, [])

  const handleReturnHome = useCallback(() => {
    setSessionData(null)
    setScreen('home')
  }, [])

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <div className="logo">Uro Boards</div>
          <div className="logo-sub">AUA Guideline Exam Prep</div>
        </div>
        <nav className="header-nav">
          {screen !== 'home' && (
            <button className="nav-btn" onClick={handleReturnHome}>
              ← Home
            </button>
          )}
          <button
            className="nav-btn"
            onClick={() => setScreen('leaderboard')}
            style={{ color: screen === 'leaderboard' ? 'var(--accent)' : undefined }}
          >
            Scores
          </button>
        </nav>
      </header>

      <main style={{ flex: 1, paddingBottom: 48 }}>
        {screen === 'home' && (
          <NameEntry onStart={handleStartQuiz} initialName={userName} />
        )}

        {screen === 'quiz' && (
          <QuizSession
            userName={userName}
            onComplete={handleSessionComplete}
            key={Date.now()} // remount on "Keep Going"
          />
        )}

        {screen === 'results' && sessionData && (
          <Results
            userName={userName}
            sessionData={sessionData}
            onKeepGoing={handleKeepGoing}
            onHome={handleReturnHome}
            onLeaderboard={() => setScreen('leaderboard')}
          />
        )}

        {screen === 'leaderboard' && (
          <Leaderboard currentUser={userName} />
        )}
      </main>
    </div>
  )
}
