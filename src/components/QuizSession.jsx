import { useState, useEffect, useRef } from 'react'
import { SAMPLE_QUESTIONS, DROPKIN_CARDS, AUA_TOPICS } from '../sampleQuestions.js'

import MultipleChoice from './MultipleChoice.jsx'
import FillBlank from './FillBlank.jsx'

const SESSION_SIZE = 3

// Track shown question IDs across sessions (within page load)
const SHOWN_KEY = 'uro-boards-shown'

function getShownIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(SHOWN_KEY) || '[]'))
  } catch { return new Set() }
}

function saveShownIds(set) {
  localStorage.setItem(SHOWN_KEY, JSON.stringify([...set]))
}

const shownIds = getShownIds()

function pickQuestions(count) {
  const guidelineCount = Math.ceil(count / 3) // 1 per 3 questions
  const dropkinCount = count - guidelineCount

  // Pick from SAMPLE_QUESTIONS (guideline/MC questions)
  const unseenGuideline = SAMPLE_QUESTIONS.filter(q => !shownIds.has(q.id))
  const guidelineSource = unseenGuideline.length >= guidelineCount
    ? unseenGuideline
    : SAMPLE_QUESTIONS
  const picked1 = [...guidelineSource]
    .sort(() => Math.random() - 0.5)
    .slice(0, guidelineCount)

  // Pick from DROPKIN_CARDS (textbook Zanki cards)
  const unseenDropkin = DROPKIN_CARDS.filter(q => !shownIds.has(q.id))
  const dropkinSource = unseenDropkin.length >= dropkinCount
    ? unseenDropkin
    : DROPKIN_CARDS
  const picked2 = [...dropkinSource]
    .sort(() => Math.random() - 0.5)
    .slice(0, dropkinCount)

  // Combine and shuffle so guideline questions don't always appear first
  return [...picked1, ...picked2].sort(() => Math.random() - 0.5)
}

async function fetchAIQuestion(topic) {
  try {
    const res = await fetch('/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.question || null
  } catch {
    return null
  }
}

export default function QuizSession({ userName, onComplete }) {
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(true)
  const [aiLoading, setAiLoading] = useState(false)

  const fetchedAI = useRef(false)

  // ── Load questions on mount ──────────────────────────────

  useEffect(() => {
   const load = async () => {
  setLoading(true)
  try {
    const samples = pickQuestions(SESSION_SIZE)
    setQuestions(samples)
  } catch (e) {
    console.error('pickQuestions failed:', e)
  }
  setLoading(false)

  // AI question fetch is completely fire-and-forget
  if (!fetchedAI.current) {
    fetchedAI.current = true
    setTimeout(async () => {
      setAiLoading(true)
      const topic = AUA_TOPICS[Math.floor(Math.random() * AUA_TOPICS.length)]
      const aiQ = await fetchAIQuestion(topic)
      if (aiQ) {
        setQuestions(prev => {
          if (answers.length < SESSION_SIZE - 1) {
            const next = [...prev]
            next[SESSION_SIZE - 1] = aiQ
            return next
          }
          return prev
        })
      }
      setAiLoading(false)
    }, 0)
  }
}

    load()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Handle answer submission ─────────────────────────────

  const handleAnswer = (isCorrect) => {
    const q = questions[currentIdx]
    shownIds.add(q.id)
     saveShownIds(shownIds)

    setAnswers(prev => [
      ...prev,
      { questionId: q.id, correct: isCorrect, question: q },
    ])
  }

 const handleNext = () => {
    const nextIdx = currentIdx + 1
    if (nextIdx < SESSION_SIZE) {
      setCurrentIdx(nextIdx)
    } else {
      onComplete({ answers: [...answers], questions })
    }
  }


  // ── Render ───────────────────────────────────────────────

  if (loading || questions.length === 0) {
    return (
      <div className="loading-spinner">
        <div className="spinner-dots">
          <span /><span /><span />
        </div>
        <div className="spinner-label">Loading questions...</div>
      </div>
    )
  }

  const q = questions[currentIdx]
  const answered = answers.length > currentIdx
  const currentAnswer = answers[currentIdx]
  const progress = ((currentIdx) / SESSION_SIZE) * 100

  return (
    <div className="quiz-session">
      {/* Progress + meta */}
      <div className="quiz-meta">
        <span>
          {userName && (
            <span style={{ color: 'var(--text-2)', marginRight: 8 }}>
              {userName} /
            </span>
          )}
          <span className="quiz-meta__count">
            Q{currentIdx + 1} of {SESSION_SIZE}
          </span>
        </span>
        <span>
          {aiLoading && (
            <span style={{ color: 'var(--text-3)', fontSize: 10 }}>
              ◦ AI generating next...
            </span>
          )}
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Score so far */}
      {answers.length > 0 && (
        <div className="flex gap-8" style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.1em' }}>
          <span className="text-correct">✓ {answers.filter(a => a.correct).length}</span>
          <span>·</span>
          <span className="text-incorrect">✗ {answers.filter(a => !a.correct).length}</span>
        </div>
      )}

      {/* Question card */}
      <div className="question-card" key={q.id}>
        <div className="question-card__header">
          <span className="tag">{q.topic}</span>
          <span className="label">{q.type === 'mc' ? 'Multiple Choice' : 'Guideline Recall'}</span>
        </div>

        <div className="question-card__body">
          <p className="question-text">{q.question}</p>

          {q.type === 'mc' ? (
            <MultipleChoice
              question={q}
              onAnswer={handleAnswer}
              onNext={handleNext}
              answered={answered}
              result={currentAnswer}
            />
          ) : (
            <FillBlank
              question={q}
              onAnswer={handleAnswer}
              onNext={handleNext}
              answered={answered}
              result={currentAnswer}
            />
          )}
        </div>
      </div>
    </div>
  )
}
