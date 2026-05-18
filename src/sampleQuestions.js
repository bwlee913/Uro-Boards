// ============================================================
//  SAMPLE QUESTIONS — Urology Boards
//  Sources: AUA Clinical Guidelines (2019-2024)
//  Format: Multiple Choice (mc) and Fill-in-the-Blank (fib)
// ============================================================

export const SAMPLE_QUESTIONS = [

  // ── NMIBC ──────────────────────────────────────────────

  {
    id: 'nmibc-001',
    type: 'mc',
    topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question:
      'A 58-year-old man undergoes TURBT for a solitary 2 cm low-grade Ta bladder tumor with no prior history of bladder cancer. Per AUA/SUO guidelines, how should this patient be risk-stratified?',
    options: [
      'Low risk',
      'Intermediate risk',
      'High risk',
      'Very high risk',
    ],
    answer: 0,
    explanation:
      'Low-risk NMIBC includes: low-grade Ta, solitary lesion <3 cm, and no prior history. This patient meets all criteria. Low-risk disease is managed with surveillance cystoscopy at 3 months — intravesical BCG is not indicated.',
    guideline: 'AUA/SUO Non-Muscle Invasive Bladder Cancer Guideline (2022), Statement 1',
  },

  {
    id: 'nmibc-002',
    type: 'mc',
    topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question:
      'A patient undergoes TURBT for high-grade T1 bladder cancer. Per AUA guidelines, what is the recommended next step?',
    options: [
      'Immediate radical cystectomy',
      'Intravesical BCG induction followed by maintenance',
      'Repeat TURBT within 6 weeks, then risk-stratify',
      'Gemcitabine instillation and surveillance cystoscopy at 3 months',
    ],
    answer: 2,
    explanation:
      'Re-TURBT is recommended within 6 weeks for all T1 high-grade tumors when muscularis propria was absent or initial resection was incomplete. Re-staging TURBT upstages approximately 30% of cases and changes management. After re-staging, high-risk NMIBC is treated with BCG induction + maintenance.',
    guideline: 'AUA/SUO NMIBC Guideline (2022), Statements 16–18',
  },

  {
    id: 'nmibc-003',
    type: 'fib',
    topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question:
      'Per AUA guidelines, following TURBT for low-risk NMIBC, the first surveillance cystoscopy should be performed at ___ months.',
    answer: '3 months',
    explanation:
      'The first surveillance cystoscopy after TURBT for NMIBC — regardless of risk group — is performed at 3 months. For low-risk disease, if negative, the next cystoscopy is at 12 months, then annually for up to 5 years.',
    guideline: 'AUA/SUO NMIBC Guideline (2022), Statement 30',
  },

  // ── PROSTATE CANCER ────────────────────────────────────

  {
    id: 'pca-001',
    type: 'mc',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Detection & Early Management',
    question:
      'Per the AUA Early Detection of Prostate Cancer guideline, for which age group is routine PSA screening recommended as a shared decision-making discussion?',
    options: [
      'Ages 40–54 at average risk',
      'Ages 55–69',
      'Ages 70 and older',
      'All men regardless of age',
    ],
    answer: 1,
    explanation:
      'For men ages 55–69, the AUA recommends shared decision-making regarding PSA-based screening. For men ≥70 or with <10–15 year life expectancy, routine screening is not recommended. Younger men (40–54) at elevated risk (family history, Black race) may be offered screening after SDM.',
    guideline: 'AUA Early Detection of Prostate Cancer Guideline (2023), Statements 3–5',
  },

  {
    id: 'pca-002',
    type: 'fib',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Biochemical Recurrence',
    question:
      'After radiation therapy for prostate cancer, biochemical recurrence is defined by the Phoenix definition as PSA nadir plus ___ ng/mL.',
    answer: '2 ng/mL',
    explanation:
      'The Phoenix definition (nadir + 2 ng/mL) is the standard definition of biochemical recurrence after radiation therapy. After radical prostatectomy, PSA ≥0.2 ng/mL on two consecutive measurements defines PSA persistence/recurrence.',
    guideline: 'AUA Clinically Localized Prostate Cancer Guideline (2022)',
  },

  // ── KIDNEY STONES ──────────────────────────────────────

  {
    id: 'stones-001',
    type: 'mc',
    topic: 'Urolithiasis',
    topicFull: 'Medical Management of Kidney Stones',
    question:
      'A 35-year-old woman presents with a 7 mm distal ureteral stone. She is afebrile, has adequate pain control, and is passing urine. Per AUA guidelines, what is the most appropriate initial management?',
    options: [
      'Immediate ureteroscopy',
      'Medical expulsive therapy with an alpha-blocker + observation',
      'ESWL within 24 hours',
      'Percutaneous nephrostomy tube placement',
    ],
    answer: 1,
    explanation:
      'Stones 5–10 mm in the distal ureter in a clinically stable patient are candidates for medical expulsive therapy (MET) with an alpha-blocker (e.g., tamsulosin). MET is most effective for distal ureteral stones in this size range, increasing passage rates by ~29%. Observation is appropriate for up to 4–6 weeks.',
    guideline: 'AUA Medical Management of Kidney Stones Guideline (2019), Statements 8–10',
  },

  {
    id: 'stones-002',
    type: 'fib',
    topic: 'Urolithiasis',
    topicFull: 'Urolithiasis — Stone Passage',
    question:
      'Per AUA guidelines, a ureteral stone ___ mm or smaller has a high probability of spontaneous passage and can be observed in a clinically stable, non-obstructed patient.',
    answer: '≤5 mm (5 mm or less)',
    explanation:
      'Stones ≤5 mm have a >50–70% spontaneous passage rate and can be managed expectantly. Stones 5–10 mm may pass with MET. Stones >10 mm typically require intervention (ureteroscopy or ESWL).',
    guideline: 'AUA Surgical Management of Stones Guideline (2021)',
  },

  // ── BPH / LUTS ─────────────────────────────────────────

  {
    id: 'bph-001',
    type: 'mc',
    topic: 'BPH/LUTS',
    topicFull: 'Benign Prostatic Hyperplasia / Lower Urinary Tract Symptoms',
    question:
      'A 65-year-old man with LUTS secondary to BPH has an IPSS of 22, prostate volume of 55 cc, and PSA of 3.2 ng/mL. He is bothered by his symptoms. Per AUA guidelines, which medication combination is most appropriate for this patient?',
    options: [
      'Alpha-blocker alone',
      '5-alpha-reductase inhibitor alone',
      'Alpha-blocker + 5-alpha-reductase inhibitor (combination therapy)',
      'Anticholinergic alone',
    ],
    answer: 2,
    explanation:
      'Combination therapy with an alpha-blocker and 5-ARI (e.g., dutasteride) is indicated for men with moderate-severe LUTS AND prostate volume ≥30–40 cc or PSA ≥1.5 ng/mL, as they are at elevated risk for disease progression. Combination therapy is more effective than either agent alone in this population (MTOPS, CombAT trials).',
    guideline: 'AUA BPH/LUTS Guideline (2021, amended 2023), Statement 17',
  },

  {
    id: 'bph-002',
    type: 'fib',
    topic: 'BPH/LUTS',
    topicFull: 'Benign Prostatic Hyperplasia',
    question:
      'Per AUA BPH guidelines, an IPSS score of ___ or greater indicates severe lower urinary tract symptoms.',
    answer: '20',
    explanation:
      'IPSS scoring: 0–7 = mild; 8–19 = moderate; 20–35 = severe. The IPSS (International Prostate Symptom Score) is used to assess symptom burden and guide treatment decisions in BPH.',
    guideline: 'AUA BPH Clinical Care Pathway',
  },

  // ── OVERACTIVE BLADDER ─────────────────────────────────

  {
    id: 'oab-001',
    type: 'mc',
    topic: 'Overactive Bladder',
    topicFull: 'Overactive Bladder',
    question:
      'A 52-year-old woman presents with urgency, frequency, and urge incontinence. Urinalysis is negative. Per AUA/SUFU guidelines, what is the first-line treatment?',
    options: [
      'Oxybutynin (anticholinergic)',
      'Mirabegron (beta-3 agonist)',
      'Behavioral and lifestyle therapies (bladder training, PFMT, fluid management)',
      'Onabotulinumtoxin A 100 units intravesical',
    ],
    answer: 2,
    explanation:
      'Behavioral therapies — including bladder training, scheduled voiding, pelvic floor muscle training (PFMT), and fluid/caffeine modification — are first-line for OAB. Pharmacotherapy (antimuscarinics, beta-3 agonists) is second-line. Onabotulinumtoxin A and neuromodulation are third-line.',
    guideline: 'AUA/SUFU OAB Guideline (2019, amended 2023), Statements 5–11',
  },

  // ── ERECTILE DYSFUNCTION ────────────────────────────────

  {
    id: 'ed-001',
    type: 'mc',
    topic: 'Erectile Dysfunction',
    topicFull: 'Erectile Dysfunction',
    question:
      'Per AUA guidelines, which of the following is first-line pharmacotherapy for erectile dysfunction in a man without contraindications?',
    options: [
      'Intracavernosal alprostadil injection',
      'Testosterone replacement therapy',
      'PDE-5 inhibitor (e.g., sildenafil, tadalafil)',
      'Vacuum erection device',
    ],
    answer: 2,
    explanation:
      'PDE-5 inhibitors are the preferred first-line pharmacotherapy for ED. They enhance nitric oxide–mediated cGMP accumulation, promoting smooth muscle relaxation. Contraindications include concurrent nitrate use. Testosterone therapy is indicated only if hypogonadism is confirmed — it improves sexual desire more than erectile function.',
    guideline: 'AUA Erectile Dysfunction Guideline (2018, amended 2022), Statements 17–19',
  },

  // ── PEDIATRIC UROLOGY ──────────────────────────────────

  {
    id: 'peds-001',
    type: 'mc',
    topic: 'Pediatric Urology',
    topicFull: 'Cryptorchidism',
    question:
      'Per AUA guidelines, at what age should surgical correction (orchiopexy) be performed for a palpable undescended testis that does not descend spontaneously?',
    options: [
      'Immediately at birth',
      'By 3 months of age',
      'Between 6 and 18 months of age',
      'After 2 years of age, when anesthesia risk is lower',
    ],
    answer: 2,
    explanation:
      'Orchiopexy should be performed between 6 and 18 months. Testes rarely descend spontaneously after 6 months. Early correction optimizes spermatogonial development and reduces (but does not eliminate) malignancy risk. Waiting beyond 18 months is associated with worse fertility outcomes.',
    guideline: 'AUA Cryptorchidism Guideline (2014, amended 2020), Statement 12',
  },

  // ── RENAL MASS / RCC ───────────────────────────────────

  {
    id: 'rcc-001',
    type: 'mc',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Renal Mass and Localized RCC',
    question:
      'A 70-year-old man with multiple comorbidities is found to have a 2.8 cm enhancing solid renal mass. Per AUA guidelines, what management option is most appropriate to discuss?',
    options: [
      'Radical nephrectomy',
      'Partial nephrectomy (imperative)',
      'Active surveillance or percutaneous ablation, with partial nephrectomy as an option',
      'Systemic targeted therapy without biopsy',
    ],
    answer: 2,
    explanation:
      'For small renal masses (≤4 cm) in older or comorbid patients, active surveillance and ablative therapy are acceptable alternatives to surgery. Partial nephrectomy remains the gold standard oncologic treatment for cT1a/b masses when feasible. AUA guidelines emphasize shared decision-making — particularly for older patients where competing mortality risks may exceed cancer mortality risk.',
    guideline: 'AUA Renal Mass and Localized RCC Guideline (2021), Statements 14–17',
  },

  {
    id: 'rcc-002',
    type: 'fib',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Renal Cell Carcinoma — Staging',
    question:
      'A renal tumor that extends into the renal vein or its segmental branches but does not extend beyond the Gerota fascia is classified as stage ___.',
    answer: 'T3a',
    explanation:
      'T3a includes tumor grossly extending into the renal vein or its segmental branches, invasion of the pelvicalyceal system, or invasion of perirenal or renal sinus fat — but confined within Gerota fascia. T3b = IVC below diaphragm; T3c = IVC above diaphragm or involving IVC wall; T4 = beyond Gerota fascia.',
    guideline: 'AJCC Staging Manual (8th Ed.) — used in AUA RCC Guideline risk stratification',
  },

  // ── INCONTINENCE ───────────────────────────────────────

  {
    id: 'incon-001',
    type: 'mc',
    topic: 'Urinary Incontinence',
    topicFull: 'Stress Urinary Incontinence',
    question:
      'A 55-year-old woman with stress urinary incontinence has failed 3 months of pelvic floor muscle training. She is counseled on surgical options. Per AUA guidelines, what is the most effective surgical treatment for stress urinary incontinence?',
    options: [
      'Periurethral bulking agent injection',
      'Burch colposuspension',
      'Mid-urethral sling (retropubic or transobturator)',
      'Artificial urinary sphincter',
    ],
    answer: 2,
    explanation:
      'Mid-urethral slings (MUS) — either retropubic (TVT) or transobturator (TOT) — are the most commonly performed and guideline-endorsed procedures for female stress urinary incontinence. Both approaches have comparable cure rates (~80%). The choice between them depends on patient anatomy, prior surgery, and surgeon experience.',
    guideline: 'AUA/SUFU Surgical Treatment of Female SUI Guideline (2017, amended 2023)',
  },

  // ── TRAUMA ─────────────────────────────────────────────

  {
    id: 'trauma-001',
    type: 'fib',
    topic: 'Urologic Trauma',
    topicFull: 'Renal Trauma',
    question:
      'Per AUA guidelines, hemodynamically stable patients with blunt renal trauma Grade ___ or lower can be managed nonoperatively.',
    answer: 'IV (Grade 4 and below)',
    explanation:
      'Hemodynamically stable patients with renal trauma up to Grade IV (including injuries involving the collecting system or renal artery/vein with contained hemorrhage) can be managed nonoperatively. Grade V injuries (shattered kidney or renal pedicle avulsion) may still be managed nonoperatively if the patient is stable, but exploration rates are higher.',
    guideline: 'AUA Urotrauma Guideline (2020), Statement 14',
  },

  // ── TESTICULAR CANCER ──────────────────────────────────

  {
    id: 'testis-001',
    type: 'mc',
    topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Initial Management',
    question:
      'A 28-year-old man is found to have a solid intratesticular mass on ultrasound. Serum AFP is 480 ng/mL, LDH is normal, beta-hCG is normal. Chest X-ray is clear. What is the most appropriate next step?',
    options: [
      'CT-guided core biopsy of the testis',
      'Radical orchiectomy via inguinal approach',
      'Bilateral orchiectomy (in case of bilaterality)',
      'Surveillance with repeat ultrasound in 6 weeks',
    ],
    answer: 1,
    explanation:
      'Radical orchiectomy via an inguinal approach is the diagnostic and therapeutic procedure of choice for a suspected testicular tumor. Transscrotal biopsy or scrotal orchiectomy is contraindicated due to risk of altering lymphatic drainage. Elevated AFP strongly suggests a non-seminomatous germ cell tumor (NSGCT) component.',
    guideline: 'AUA Testicular Cancer Guideline (2019, amended 2023), Statement 1',
  },

];

// AUA topic domains — used for AI question generation targeting
export const AUA_TOPICS = [
  'Non-Muscle Invasive Bladder Cancer',
  'Muscle Invasive and Metastatic Bladder Cancer',
  'Prostate Cancer Screening and Detection',
  'Localized Prostate Cancer Treatment',
  'Castration Resistant Prostate Cancer',
  'Kidney Stones and Urolithiasis',
  'BPH and Lower Urinary Tract Symptoms',
  'Overactive Bladder',
  'Urinary Incontinence',
  'Erectile Dysfunction',
  'Male Infertility',
  'Peyronie Disease',
  'Renal Cell Carcinoma',
  'Upper Tract Urothelial Carcinoma',
  'Testicular Cancer',
  'Penile Cancer',
  'Cryptorchidism',
  'Vesicoureteral Reflux',
  'Urinary Tract Infections',
  'Recurrent UTI in Women',
  'Urologic Trauma',
  'Interstitial Cystitis / Bladder Pain Syndrome',
  'Male Hypogonadism and Testosterone Therapy',
  'Adrenal Masses',
  'Pediatric Voiding Dysfunction',
];
