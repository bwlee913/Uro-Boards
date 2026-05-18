import { useState } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

export default function MultipleChoice({ question, onAnswer, onNext, answered, result }) {
  const [selected, setSelected] = useState(null)

  const handleSelect = (idx) => {
    if (answered) return
    setSelected(idx)
    const correct = idx === question.answer
    onAnswer(correct)
  }

  const getOptionClass = (idx) => {
    let cls = 'mc-option'
    if (!answered) return cls
    if (idx === question.answer) return cls + ' mc-option--correct'
    if (idx === selected && idx !== question.answer) return cls + ' mc-option--incorrect'
    return cls
  }

  return (
    <div>
      <div className="mc-options">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className={getOptionClass(idx)}
            onClick={() => handleSelect(idx)}
            disabled={answered}
          >
            <span className="mc-letter">{LETTERS[idx]}</span>
            <span>{opt}</span>
          </button>
        ))}
      </div>

      {answered && (
        <div className="explanation anim-slide-up">
          <div className="explanation__label">
            {result?.correct ? '✓ Correct' : '✗ Incorrect'} — Explanation
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
