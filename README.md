# Uro Boards — Urology Board Exam Prep

A flashcard-style quiz app for urology residents preparing for AUA boards. 3 questions at a time, built for short bursts between cases.

**Stack:** React + Vite → GitHub → Vercel (auto-deploy) · Anthropic API · Firebase (optional)

---

## What's Built

- **Quiz sessions** — 3 questions per session, randomized across AUA domains
- **Two question types** — Multiple choice (A–D) and fill-in-the-blank guideline recall
- **AI question generation** — Claude generates new questions from AUA topics on each session
- **Explanations** — Guideline-cited rationale after every answer
- **Leaderboard** — Tracks scores locally; upgrades to shared once Firebase is configured
- **PWA** — Installable on phone (Add to Home Screen), works offline with cached questions

---

## First-Time Setup

### 1. Prerequisites

Install these if you don't have them:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/)
- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account (free, sign in with GitHub)

### 2. Create a GitHub repository

1. Go to github.com → click **New repository**
2. Name it `urology-quiz` (or anything you like)
3. Leave it **Public** (Vercel free tier works best with public repos)
4. Don't add a README (we already have one)
5. Click **Create repository**

### 3. Push this code to GitHub

Open Terminal (Mac) or Command Prompt (Windows) in the `urology-quiz` folder:

```bash
git init
git add .
git commit -m "Initial build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/urology-quiz.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 4. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your `urology-quiz` GitHub repository
3. Vercel will auto-detect it as a Vite project — click **Deploy**
4. Your app is live in ~2 minutes at `your-project.vercel.app`

### 5. Add your Anthropic API key (required for AI questions)

Without this, the app works but only shows the 17 built-in sample questions.

1. Go to [console.anthropic.com](https://console.anthropic.com) → API Keys → Create new key
2. In Vercel: your project → **Settings** → **Environment Variables**
3. Add: `ANTHROPIC_API_KEY` = your key
4. Go to **Deployments** → click the three dots on your latest → **Redeploy**

---

## Making Changes

The workflow is:
1. Edit files locally (or bring code to Claude for changes)
2. `git add . && git commit -m "describe your change" && git push`
3. Vercel automatically redeploys — live in ~60 seconds

---

## Adding Questions

### From your textbook PDF

Upload the PDF in this Claude Project and ask:
> "Generate 20 high-yield board questions from this PDF"

Claude will output question objects in the right format. Paste them into `src/sampleQuestions.js` inside the `SAMPLE_QUESTIONS` array.

### Adding a question manually

Questions go in `src/sampleQuestions.js`. Copy this template:

```js
// Multiple choice
{
  id: 'unique-id-here',        // must be unique
  type: 'mc',
  topic: 'Short Topic',
  topicFull: 'Full Topic Name',
  question: 'Your question text here?',
  options: [
    'Option A',
    'Option B',
    'Option C',
    'Option D',
  ],
  answer: 0,                   // 0 = A, 1 = B, 2 = C, 3 = D
  explanation: 'Why this is correct, per guidelines...',
  guideline: 'AUA XYZ Guideline (Year), Statement N',
},

// Fill-in-the-blank
{
  id: 'another-unique-id',
  type: 'fib',
  topic: 'Short Topic',
  topicFull: 'Full Topic Name',
  question: 'Per AUA guidelines, the recommended ___ is...',
  answer: 'the answer',
  explanation: 'Why this answer is correct...',
  guideline: 'AUA XYZ Guideline (Year)',
},
```

---

## Setting Up the Shared Leaderboard (Firebase)

Without Firebase, each user's scores are stored locally on their device — not shared.

To make the leaderboard shared across all users:

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project (call it `urology-quiz`)
3. Add a **Web app** → copy your config values
4. Enable **Firestore Database** → Start in **test mode** (update security rules later)
5. Add all `VITE_FIREBASE_*` values to Vercel Environment Variables (see `.env.example`)
6. Redeploy

---

## Setting Up Push Notifications (Phase 2)

Coming soon — this requires Firebase Cloud Messaging. Will be added after core app is stable.

---

## File Structure

```
urology-quiz/
├── src/
│   ├── App.jsx                 # Main app state machine
│   ├── sampleQuestions.js      # ← Add questions here
│   ├── firebase.js             # Leaderboard + FCM config
│   └── components/
│       ├── NameEntry.jsx       # Landing/name screen
│       ├── QuizSession.jsx     # Quiz orchestration
│       ├── MultipleChoice.jsx  # MC question UI
│       ├── FillBlank.jsx       # Fill-blank UI
│       ├── Results.jsx         # Session results
│       └── Leaderboard.jsx     # Score rankings
├── api/
│   └── generate-question.js   # Vercel serverless: AI question gen
├── public/
│   └── favicon.svg
├── .env.example               # Copy to .env.local for local dev
└── vercel.json
```

---

## Local Development

```bash
npm install
cp .env.example .env.local     # then fill in your API key
npm run dev
# → open http://localhost:5173
```

---

## Sharing with Co-Residents

Once deployed, just share your Vercel URL. No login required. Everyone sees the same leaderboard once Firebase is configured.

To add a custom domain (optional):
- Vercel dashboard → your project → **Settings** → **Domains**
- Add a domain you own, or use the free `.vercel.app` subdomain

---

*Built for Brennan and co-residents preparing for AUA boards — July 2026.*
