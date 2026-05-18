// ============================================================
//  /api/generate-question.js
//  Vercel Serverless Function — AI Question Generator
//
//  POST { topic: string, pdfContent?: string }
//  Returns { question: QuestionObject }
//
//  Env var required: ANTHROPIC_API_KEY
// ============================================================

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { topic, pdfContent } = req.body || {}

  if (!topic) {
    return res.status(400).json({ error: 'topic is required' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' })
  }

  // ── Build the prompt ────────────────────────────────────────

  const systemPrompt = `You are an expert urology educator creating board exam review questions for urology residents preparing for the American Urological Association (AUA) board certification exam.

Generate questions that are:
- Clinically accurate and guideline-concordant (AUA guidelines take precedence)
- Board-exam difficulty (not too easy, not obscure trivia)
- Either multiple choice (4 options, A–D) OR fill-in-the-blank guideline recall
- Based on current AUA clinical practice guidelines where applicable

You must respond with ONLY a valid JSON object matching this exact schema — no markdown, no preamble:

For multiple choice:
{
  "id": "ai-<random 8 char hex>",
  "type": "mc",
  "topic": "<short topic name>",
  "topicFull": "<full topic name>",
  "question": "<full question text>",
  "options": ["<option A>", "<option B>", "<option C>", "<option D>"],
  "answer": <0-3 integer index of correct option>,
  "explanation": "<concise rationale, 2-4 sentences>",
  "guideline": "<specific AUA guideline name, year, statement number if applicable>"
}

For fill-in-the-blank:
{
  "id": "ai-<random 8 char hex>",
  "type": "fib",
  "topic": "<short topic name>",
  "topicFull": "<full topic name>",
  "question": "<question with ___ for the blank>",
  "answer": "<the answer to fill in the blank>",
  "explanation": "<concise rationale, 2-4 sentences>",
  "guideline": "<specific AUA guideline name, year, statement number if applicable>"
}`

  const userContent = pdfContent
    ? `Generate one board-style question about: ${topic}\n\nAdditional context from the urology textbook:\n\n${pdfContent.slice(0, 8000)}`
    : `Generate one board-style question about: ${topic}\n\nBase it on current AUA clinical practice guidelines. Choose randomly between multiple choice or fill-in-the-blank format.`

  // ── Call Anthropic API ──────────────────────────────────────

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          { role: 'user', content: userContent },
        ],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic API error:', err)
      return res.status(502).json({ error: 'AI generation failed' })
    }

    const data = await response.json()
    const rawText = data.content?.[0]?.text || ''

    // ── Parse the JSON response ─────────────────────────────

    let question
    try {
      // Strip any accidental markdown fences
      const cleaned = rawText.replace(/```json\n?|```\n?/g, '').trim()
      question = JSON.parse(cleaned)
    } catch (parseErr) {
      console.error('Failed to parse AI response:', rawText)
      return res.status(502).json({ error: 'Failed to parse AI question' })
    }

    // ── Validate the question object ────────────────────────

    if (!question.type || !question.question || !question.answer === undefined) {
      return res.status(502).json({ error: 'Malformed AI question response' })
    }

    if (question.type === 'mc') {
      if (!Array.isArray(question.options) || question.options.length !== 4) {
        return res.status(502).json({ error: 'MC question must have 4 options' })
      }
      if (typeof question.answer !== 'number' || question.answer < 0 || question.answer > 3) {
        return res.status(502).json({ error: 'MC answer must be 0–3' })
      }
    }

    // Ensure a unique ID
    if (!question.id) {
      question.id = 'ai-' + Math.random().toString(16).slice(2, 10)
    }

    return res.status(200).json({ question })
  } catch (err) {
    console.error('generate-question error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
