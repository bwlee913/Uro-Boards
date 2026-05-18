import { useState } from 'react'

export default function FillBlank({ question, onAnswer, onNext, answered, result }) {
  const [revealed, setRevealed] = useState(false)
  const [graded, setGraded] = useState(false)

  const handleReveal = () => setRevealed(true)

  const handleGrade = (correct) => {
    setGraded(true)
    onAnswer(correct)
  }

  return (
    <div className="fib-card">
      {!revealed && !answered && (
        <button className="fib-reveal-btn" onClick={handleReveal}>
          <span>👁</span>
          <span>Tap to reveal answer</span>
        </button>
      )}

      {(revealed || answered) && (
        <div className="fib-answer anim-slide-up">
          <div className="fib-answer__label">Answer</div>
          <div className="fib-answer__text">{question.answer}</div>
        </div>
      )}

      {revealed && !graded && !answered && (
        <div className="fib-grade-btns">
          <button
            className="grade-btn grade-btn--correct"
            onClick={() => handleGrade(true)}
          >
            ✓ Got it
          </button>
          <button
            className="grade-btn grade-btn--incorrect"
            onClick={() => handleGrade(false)}
          >
            ✗ Missed it
          </button>
        </div>
      )}

      {answered && (
        <div className="explanation anim-slide-up" style={{ marginTop: 16 }}>
          <div className="explanation__label">
            {result?.correct ? '✓ Correct — ' : '✗ Missed — '}Explanation
          </div>
          <div className="explanation__text">{question.explanation}</div>
          {question.guideline && (
            <div className="explanation__guideline">
              📋 <span>{question.guideline}</span>
            </div>
          )}
          <div className="next-btn-row">
            <button className="btn btn-primary" onClick={onNext}>
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
