// ============================================================
//  /api/generate-question.js
//  Vercel Serverless Function — AI Question Generator
//  Uses web search to pull from live AUA guideline pages
// ============================================================

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { topic } = req.body || {}

  if (!topic) {
    return res.status(400).json({ error: 'topic is required' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' })
  }

  const systemPrompt = `You are an expert urology educator creating board exam questions for urology residents preparing for the AUA board certification exam.

Your job:
1. Use web search to find the current AUA clinical practice guideline for the given topic at auanet.org
2. Read the actual guideline statements
3. Pick ONE specific, testable guideline statement
4. Write a single fill-in-the-blank flashcard question from that exact statement

Rules:
- The blank should test the single most important fact in the statement (a number, a drug, a timeframe, a classification)
- Keep the question concise — one sentence with one blank (___)
- The answer should be short and precise (a number, name, or brief phrase)
- The explanation should be 2-3 sentences max
- Always cite the exact guideline name, year, and statement number
- If the guideline has been recently amended, use the most current version

You must respond with ONLY valid JSON — no markdown, no preamble:

{
  "id": "ai-<random 8 char hex>",
  "type": "fib",
  "topic": "<short topic name>",
  "topicFull": "<full topic name>",
  "question": "<one sentence with ___ for the blank>",
  "answer": "<short precise answer>",
  "explanation": "<2-3 sentence rationale>",
  "guideline": "<AUA Guideline Name (Year), Statement N>"
}`

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
        max_tokens: 1024,
        system: systemPrompt,
        tools: [
          {
            type: 'web_search_20250305',
            name: 'web_search',
          }
        ],
        messages: [
          {
            role: 'user',
            content: `Search the AUA website (auanet.org) for the current clinical practice guideline on: ${topic}

Find a specific numbered guideline statement that would make a good board exam question. Then write a fill-in-the-blank flashcard from it. Focus on testable facts: specific numbers, thresholds, drug names, timeframes, or classifications that appear directly in the guideline text.`
          }
        ],
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic API error:', err)
      return res.status(502).json({ error: 'AI generation failed' })
    }

    const data = await response.json()

    // Extract the final text response (after web search tool use)
    const textBlock = data.content?.find(block => block.type === 'text')
    const rawText = textBlock?.text || ''

    if (!rawText) {
      console.error('No text in response:', JSON.stringify(data.content))
      return res.status(502).json({ error: 'No text response from AI' })
    }

    // Parse JSON
    let question
    try {
      const cleaned = rawText.replace(/```json\n?|```\n?/g, '').trim()
      question = JSON.parse(cleaned)
    } catch (parseErr) {
      console.error('Failed to parse AI response:', rawText)
      return res.status(502).json({ error: 'Failed to parse AI question' })
    }

    // Validate
    if (!question.type || !question.question || question.answer === undefined) {
      return res.status(502).json({ error: 'Malformed AI question response' })
    }

    if (!question.id) {
      question.id = 'ai-' + Math.random().toString(16).slice(2, 10)
    }

    return res.status(200).json({ question })

  } catch (err) {
    console.error('generate-question error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}