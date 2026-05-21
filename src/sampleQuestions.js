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
      'Per the 2026 AUA/SUO Early Detection of Prostate Cancer guideline, for which age group should clinicians offer regular PSA screening every 2–4 years? (Strong Recommendation, Grade A)',
    options: [
      'Ages 40–49',
      'Ages 45–54',
      'Ages 50–69',
      'Ages 55–74',
    ],
    answer: 2,
    explanation:
      'The 2026 AUA/SUO guideline (Statement 6) recommends offering regular PSA screening every 2–4 years to people aged 50–69 years (Strong Recommendation, Grade A). A baseline PSA may be offered at ages 45–50 (Conditional Recommendation). Screening should begin at 40–45 for those at elevated risk (Black race, germline mutations, strong family history).',
    guideline: 'AUA/SUO Early Detection of Prostate Cancer Guideline (2023, amended 2026), Statements 4–6',
  },

  {
    id: 'pca-003',
    type: 'mc',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Repeat Biopsy',
    question:
      'A 62-year-old man had a negative 12-core systematic prostate biopsy 2 years ago. PSA has risen from 5.8 to 7.2 ng/mL. Per the 2026 AUA/SUO guideline, what should be performed before repeat biopsy?',
    options: [
      'Repeat PSA in 6 weeks to confirm elevation',
      'Prostate MRI prior to biopsy',
      'Serum PCA3 biomarker test',
      'Immediate systematic repeat biopsy without further workup',
    ],
    answer: 1,
    explanation:
      'Per Statement 30 of the 2026 AUA/SUO Early Detection guideline, in patients undergoing repeat biopsy with no prior prostate MRI, clinicians should obtain a prostate MRI prior to biopsy (Strong Recommendation, Grade C). MRI improves detection of Grade Group 2+ cancer and allows for targeted biopsies of suspicious lesions.',
    guideline: 'AUA/SUO Early Detection of Prostate Cancer Guideline (2023, amended 2026), Statement 30',
  },

  {
    id: 'pca-004',
    type: 'fib',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — PSA Screening',
    question:
      'Per the 2026 AUA/SUO guideline, PSA velocity should ___ be used as the sole indication for secondary biomarker testing, imaging, or biopsy.',
    answer: 'NOT (should not)',
    explanation:
      'Statement 9 of the 2026 guideline states clinicians should NOT use PSA velocity as the sole indication for a secondary biomarker, imaging, or biopsy (Strong Recommendation, Grade B). PSA velocity in isolation has poor specificity and should not drive decision-making without integrating other clinical data.',
    guideline: 'AUA/SUO Early Detection of Prostate Cancer Guideline (2023, amended 2026), Statement 9',
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
    {
  id: 'oab-001',
  type: 'mc',
  topic: 'Overactive Bladder',
  topicFull: 'Overactive Bladder',
  question:
    'The 2024 AUA/SUFU OAB guideline made a major departure from prior guidelines by eliminating step therapy in favor of:',
  options: [
    'Antimuscarinics as mandatory first-line pharmacotherapy',
    'Shared decision-making with a menu of treatment options offered simultaneously',
    'Onabotulinumtoxin A as preferred initial treatment',
    'Mandatory urodynamics before any pharmacotherapy',
  ],
  answer: 1,
  explanation:
    'The 2024 AUA/SUFU OAB guideline eliminated the prior step-therapy approach. Clinicians now offer patients a personalized "menu" of options — behavioral/lifestyle interventions, antimuscarinics, beta-3 agonists (mirabegron), onabotulinumtoxin A, and neuromodulation — through shared decision-making based on patient goals, preferences, and tolerance. No single treatment is mandated as first-line.',
  guideline: 'AUA/SUFU Idiopathic OAB Guideline (2024), Cameron et al., J Urol 2024',
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

  // ── KIDNEY ONCOLOGY — TRIALS (Dropkin 2024) ────────────────────────

  {
    id: 'rcc-003',
    type: 'mc',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Metastatic RCC — Cytoreductive Nephrectomy',
    question:
      'The CARMENA trial (NEJM, 2018) compared cytoreductive nephrectomy + sunitinib versus sunitinib alone in patients with intermediate- or poor-risk metastatic clear-cell RCC. What was the key finding?',
    options: [
      'cNx + sunitinib had significantly superior overall survival',
      'Sunitinib alone was non-inferior to cNx + sunitinib (OS favored sunitinib alone)',
      'cNx + sunitinib had superior PFS but equivalent OS',
      'Both arms had equivalent OS and PFS with no significant differences',
    ],
    answer: 1,
    explanation:
      'CARMENA showed sunitinib alone was non-inferior to cNx + sunitinib (median OS 18.4 vs. 13.9 months), with OS actually favoring sunitinib alone. This challenged the prior dogma of upfront cNx. SURTIME further showed delayed cNx (after sunitinib) had better OS than immediate cNx when cNx is still planned.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology; CARMENA (NEJM, 2018)',
  },

  {
    id: 'rcc-004',
    type: 'mc',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Metastatic RCC — Cytoreductive Nephrectomy Criteria',
    question:
      'Which of the following patients with metastatic RCC is LEAST likely to benefit from cytoreductive nephrectomy?',
    options: [
      'ECOG PS 0, clear cell histology, > 75% tumor resectable',
      'Disease stable on sunitinib, no brain metastases',
      'ECOG PS 2 with brain metastases',
      'Previously untreated, no evidence of progression on systemic therapy',
    ],
    answer: 2,
    explanation:
      'Criteria supporting cNx: ability to resect > 75% of tumor, no brain metastases, adequate cardiopulmonary reserve, ECOG PS 0–1, predominantly clear cell histology, no progression through systemic therapy. Poor PS and brain metastases are the key disqualifiers — these patients did not benefit in historical trials.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology',
  },

  {
    id: 'rcc-005',
    type: 'fib',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'RCC — IVC Tumor Thrombus Levels',
    question:
      'In RCC tumor thrombus staging, Level ___ indicates thrombus above the hepatic veins but below the diaphragm, potentially requiring veno-venous bypass during thrombectomy.',
    answer: 'III (Level 3)',
    explanation:
      'RCC thrombus levels: 0 = within renal vein; I = < 2 cm into IVC; II = > 2 cm into IVC but below hepatic veins; III = above hepatic veins but below diaphragm (may require veno-venous bypass); IV = above diaphragm (may require cardiopulmonary bypass). Knowing the level drives preoperative planning.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology',
  },

  {
    id: 'rcc-006',
    type: 'mc',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Metastatic RCC — Adjuvant Therapy',
    question:
      'The KEYNOTE-564 trial established which adjuvant therapy as improving both DFS and OS after radical nephrectomy for high-risk clear-cell RCC?',
    options: [
      'Sunitinib',
      'Sorafenib',
      'Pembrolizumab (anti-PD-1)',
      'Nivolumab + ipilimumab',
    ],
    answer: 2,
    explanation:
      'KEYNOTE-564 (NEJM, 2021) showed adjuvant pembrolizumab improved DFS and OS vs. placebo in high-risk clear-cell RCC after rNx. ASSURE showed adjuvant sunitinib/sorafenib did NOT improve DFS. S-TRAC showed DFS benefit with sunitinib but no OS benefit. Pembrolizumab is the only adjuvant agent with proven OS benefit.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology; KEYNOTE-564 (NEJM, 2021)',
  },

  {
    id: 'rcc-007',
    type: 'fib',
    topic: 'Renal Cell Carcinoma',
    topicFull: 'Metastatic RCC — IMDC Risk Stratification',
    question:
      'In the IMDC (Heng) risk model for metastatic RCC, a patient with 0 risk factors (favorable risk) has a median overall survival of approximately ___ months.',
    answer: '44 months',
    explanation:
      'IMDC risk factors: poor PS, time to systemic therapy < 1 year, low Hgb, high Ca++, high neutrophils, high platelets. Median OS: favorable (0 RF) = 44 months; intermediate (1–2 RF) = 27 months; poor (≥3 RF) = 9 months. This replaced MSKCC criteria in the targeted therapy era.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology; IMDC Risk Model',
  },

  // ── TESTIS ONCOLOGY (Dropkin 2024) ────────────────────────

  {
    id: 'testis-002',
    type: 'mc',
    topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Post-Chemo Residual Mass',
    question:
      'A patient with pure seminoma completes BEP chemotherapy. CT shows a 4 cm retroperitoneal residual mass with avid FDG uptake on PET scan. What is the next step?',
    options: [
      'Observation with repeat CT in 3 months',
      'RPLND',
      'Second-line chemotherapy (TIP regimen)',
      'Radiation therapy to the retroperitoneal mass',
    ],
    answer: 1,
    explanation:
      'For post-chemo seminomatous masses > 3 cm, PET is used to assess for viable tumor. PET-avid (enhancing) masses > 3 cm → RPLND. Non-enhancing lesions or masses < 3 cm can be observed (> 90% fibrosis). For NSGCT, PET = CT (both unreliable for residual disease), so residual masses go to RPLND regardless of PET.',
    guideline: 'Dropkin High-Yield Urology 2024 — Testis Oncology',
  },

  {
    id: 'testis-003',
    type: 'fib',
    topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — RPLND Template',
    question:
      'For a right-sided testicular primary tumor, the modified template RPLND extends all the way to the ___ because lymphatic spread occurs in an R→L direction.',
    answer: 'left ureter',
    explanation:
      'Lymphatic drainage from right testicular tumors can cross to the left (R→L spread), so right-sided modified template RPLND extends to the left ureter. Left primary tumors drain only to the left and interaortocaval region, so the left-sided template only extends to the lateral edge of the IVC.',
    guideline: 'Dropkin High-Yield Urology 2024 — Testis Oncology; RPLND Template',
  },

  {
    id: 'testis-004',
    type: 'mc',
    topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — CAIS',
    question:
      'A patient with Complete Androgen Insensitivity Syndrome (CAIS) is 46,XY with female external genitalia. When is bilateral gonadectomy recommended and why?',
    options: [
      'Immediately at diagnosis due to 50% malignancy risk',
      'Before puberty to allow natural feminization',
      'After puberty — ~20% gonadal malignancy risk by age 30, and puberty occurs naturally via aromatization',
      'Not recommended — malignancy risk is too low to justify surgery',
    ],
    answer: 2,
    explanation:
      'CAIS (46,XY, nonfunctional androgen receptor) carries ~20% risk of gonadal malignancy (primarily seminoma) by age 30. Bilateral orchiectomy is recommended after puberty, allowing natural feminizing puberty via aromatization of androgens to estrogen. Earlier removal would require exogenous estrogen for puberty induction.',
    guideline: 'Dropkin High-Yield Urology 2024 — Testis Oncology; CAIS',
  },

  // ── PRIAPISM (Dropkin 2024) ────────────────────────────────

  {
    id: 'penis-001',
    type: 'mc',
    topic: 'Penile/Erectile',
    topicFull: 'Priapism — Ischemic vs. Non-Ischemic',
    question:
      'A man has a painful rigid erection of 6 hours. Corporal blood gas: PO₂ 22 mmHg, PCO₂ 68 mmHg, pH 7.19. What type of priapism and first-line treatment?',
    options: [
      'Non-ischemic priapism; observation and ice packs',
      'Ischemic priapism; intracavernosal phenylephrine + aspiration',
      'Non-ischemic priapism; angioembolization',
      'Ischemic priapism; immediate penile prosthesis placement',
    ],
    answer: 1,
    explanation:
      'Ischemic priapism blood gas: PO₂ < 30, PCO₂ > 60, pH < 7.25. Initial management: cardiac monitor + intracavernosal phenylephrine (100–500 mcg/mL; pure alpha-agonist, best CV safety profile) + aspiration ± irrigation. Prosthesis is reserved for priapism > 36 hours or failure of shunting/tunneling.',
    guideline: 'Dropkin High-Yield Urology 2024 — Penis; AUA/SMSNA Priapism Guideline (2022)',
  },

  {
    id: 'penis-002',
    type: 'fib',
    topic: 'Penile/Erectile',
    topicFull: 'Priapism — ICI Counseling Threshold',
    question:
      'Per AUA guidelines, patients using intracavernosal injection (ICI) therapy must be counseled to return to the ED if their erection lasts more than ___ hours.',
    answer: '4 hours',
    explanation:
      'Erections ≥ 4 hours following ICI should be treated with intracavernosal phenylephrine as initial therapy. Patients must be counseled about this risk before their first ICI injection — this is a mandatory part of ICI consent per AUA priapism guidelines.',
    guideline: 'Dropkin High-Yield Urology 2024; AUA/SMSNA Priapism Guideline (2022)',
  },

  // ── URETHRAL ANATOMY (Dropkin 2024) ───────────────────────

  {
    id: 'urethra-001',
    type: 'mc',
    topic: 'Urethral Anatomy',
    topicFull: 'Male Urethral Segments',
    question:
      'Which segments make up the posterior urethra in the male, and what distinguishes them anatomically?',
    options: [
      'Bulbar + penile urethra — both surrounded by corpus spongiosum',
      'Prostatic + membranous urethra — neither surrounded by corpus spongiosum',
      'Membranous + bulbar urethra — separated by the external urethral sphincter',
      'Penile + fossa navicularis — lined by stratified squamous epithelium',
    ],
    answer: 1,
    explanation:
      'Posterior urethra = prostatic + membranous urethra (NOT surrounded by corpus spongiosum). Anterior urethra = bulbar + penile (pendulous) urethra (surrounded by corpus spongiosum). The designation "posterior/anterior" refers to position relative to the urogenital diaphragm, not anatomic direction.',
    guideline: 'Dropkin High-Yield Urology 2024 — Urethra; Testing Pearl',
  },

  // ── PERIOPERATIVE (Dropkin 2024) ──────────────────────────

  {
    id: 'periop-001',
    type: 'mc',
    topic: 'Perioperative Management',
    topicFull: 'Clavien-Dindo Complication Classification',
    question:
      'A patient requires return to the OR under general anesthesia for repair of a ureteral injury discovered on postoperative day 2. What Clavien-Dindo grade is this?',
    options: [
      'Grade II',
      'Grade IIIa',
      'Grade IIIb',
      'Grade IVa',
    ],
    answer: 2,
    explanation:
      'Clavien-Dindo: Grade I = deviation from normal, no pharmacologic/procedural intervention; Grade II = pharmacologic Tx (antibiotics, TPN, blood); Grade IIIa = procedural intervention without GA; Grade IIIb = intervention requiring GA (return to OR); Grade IVa = single-organ life-threatening dysfunction (ICU); Grade V = death.',
    guideline: 'Dropkin High-Yield Urology 2024 — Perioperative Management; Clavien-Dindo',
  },

  {
    id: 'periop-002',
    type: 'mc',
    topic: 'Perioperative Management',
    topicFull: 'Post-Splenectomy Vaccinations',
    question:
      'Following splenectomy during radical nephrectomy, which three vaccines are required to protect against encapsulated organisms (SHiN mnemonic)?',
    options: [
      'Hepatitis B, influenza, Tdap',
      'Pneumococcal, H. influenzae type b, meningococcal',
      'Pneumococcal and meningococcal only',
      'MMR, varicella, pneumococcal',
    ],
    answer: 1,
    explanation:
      'Post-splenectomy SHiN vaccines: Streptococcus pneumoniae (pneumococcal), Haemophilus influenzae type b, and Neisseria meningitidis (meningococcal). These protect against the encapsulated organisms responsible for overwhelming post-splenectomy infection (OPSI), which carries high mortality.',
    guideline: 'Dropkin High-Yield Urology 2024 — Kidney Oncology; Post-Splenectomy Protocol',
  },

  // ── STONE DISEASE (Dropkin 2024) ──────────────────────────

  {
    id: 'stones-003',
    type: 'mc',
    topic: 'Urolithiasis',
    topicFull: 'Drug-Induced Kidney Stones — Direct Precipitation',
    question:
      'Which medication forms kidney stones directly from its drug metabolite, and produces the only non-dense (radiolucent) stone on CT?',
    options: [
      'Furosemide',
      'Topiramate',
      'Indinavir',
      'Triamterene',
    ],
    answer: 2,
    explanation:
      'The TIME drugs form stones directly from their metabolite: Triamterene, Indinavir, Magnesium trisilicate, Ephedrine. Indinavir (HIV protease inhibitor) is unique — it is the only drug-induced stone that is radiolucent (non-dense) on CT. Furosemide and topiramate cause stones via metabolic effects (hypercalciuria and hypocitraturia, respectively).',
    guideline: 'Dropkin High-Yield Urology 2024 — Renal Pathophysiology; Drug-Induced Stones',
  },

  {
    id: 'stones-004',
    type: 'mc',
    topic: 'Urolithiasis',
    topicFull: 'Renal Tubular Acidosis Type I',
    question:
      'A patient with recurrent calcium phosphate stones has: low serum bicarb, urine pH consistently > 5.5, hypercalciuria, and hypocitraturia. What is the diagnosis and treatment?',
    options: [
      'Type II (proximal) RTA; sodium bicarbonate alone',
      'Type I (distal) RTA; potassium citrate + bicarbonate, add thiazide if recurrent stones persist',
      'Type IV RTA; fludrocortisone',
      'Primary hyperparathyroidism; parathyroidectomy',
    ],
    answer: 1,
    explanation:
      'Type I (distal) RTA: distal tubule cannot excrete H+ → systemic metabolic acidosis + alkaline urine (pH > 5.5) + hypercalciuria + hypocitraturia → CaPhos stones (75% of Type I RTA patients form stones). Treatment: potassium citrate + bicarbonate to correct systemic acidosis; add thiazide for recurrent stones with persistent hypercalciuria.',
    guideline: 'Dropkin High-Yield Urology 2024 — Renal Pathophysiology; RTA Type I',
  },

  // ── MIBC (Dropkin 2024) ───────────────────────────────────

  {
    id: 'mibc-001',
    type: 'mc',
    topic: 'Bladder Cancer',
    topicFull: 'Muscle-Invasive Bladder Cancer — Staging Workup',
    question:
      'Per AUA guidelines, which of the following is included in the staging workup for newly diagnosed muscle-invasive bladder cancer?',
    options: [
      'PET-CT of whole body as first-line staging',
      'CT urogram, CBC, CMP, chest imaging, bimanual exam; bone scan only if clinically indicated',
      'Bone scan and brain MRI for all patients',
      'MRI abdomen/pelvis as first-line staging modality',
    ],
    answer: 1,
    explanation:
      'MIBC staging includes: CT urogram, CBC, CMP (including LFTs), chest imaging, and bimanual examination under anesthesia to assess clinical stage. Bone scan is indicated only if there is clinical suspicion (elevated ALP, bone pain). PET-CT is not standard first-line. The bimanual exam under anesthesia is specifically listed as a staging requirement.',
    guideline: 'Dropkin High-Yield Urology 2024; AUA Non-Metastatic MIBC Guideline (2020)',
  },

  {
    id: 'mibc-002',
    type: 'fib',
    topic: 'Bladder Cancer',
    topicFull: 'Muscle-Invasive Bladder Cancer — Neoadjuvant Chemo',
    question:
      'Per AUA guidelines, neoadjuvant chemotherapy for MIBC should be ___ based.',
    answer: 'Cisplatin-based',
    explanation:
      'Cisplatin-based neoadjuvant chemotherapy (e.g., dose-dense MVAC or gemcitabine/cisplatin) is the standard of care for cisplatin-eligible patients prior to radical cystectomy for MIBC. Carboplatin is NOT an acceptable neoadjuvant substitute. Ineligibility criteria for cisplatin include: CrCl < 60, ECOG PS ≥ 2, significant hearing loss, neuropathy, heart failure.',
    guideline: 'Dropkin High-Yield Urology 2024; AUA MIBC Guideline (2020)',
  },

  // ── PROSTATE — RADIATION (Dropkin 2024) ────────────────────

  {
    id: 'pca-005',
    type: 'mc',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Hypofractionated EBRT',
    question:
      'Per AUA Hypofractionation Guideline, which patients are candidates for moderate hypofractionation?',
    options: [
      'Low-risk patients only — too toxic for intermediate/high-risk',
      'Low-risk (declining AS), intermediate-risk, and high-risk patients getting EBRT to prostate ± SV',
      'Intermediate-risk only',
      'Only patients with prostate volume < 50 cc',
    ],
    answer: 1,
    explanation:
      'Moderate hypofractionation is appropriate for: low-risk patients declining AS wanting EBRT, intermediate-risk patients getting EBRT to prostate ± SV, and high-risk patients getting EBRT to prostate (but NOT pelvic LNs). IGRT is universally required. Suggested regimens: 60 Gy/20 fractions or 70 Gy/28 fractions. Counsel about small increase in acute (not late) GI toxicity.',
    guideline: 'Dropkin High-Yield Urology 2024; AUA Hypofractionated Radiation Guideline (2018)',
  },

  {
    id: 'pca-006',
    type: 'fib',
    topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — BCR Predictor',
    question:
      'The best predictor of prostate cancer-specific mortality in the setting of biochemical recurrence after definitive local therapy is a short PSA ___.',
    answer: 'doubling time (PSA-DT < 10 months)',
    explanation:
      'A short PSA doubling time (PSA-DT < 10 months) is the strongest predictor of prostate cancer-specific mortality following biochemical recurrence after RP or radiation. Metastasis-free survival (MFS) is also an accepted surrogate endpoint for OS in PCa trials.',
    guideline: 'Dropkin High-Yield Urology 2024 — Prostate Oncology; Testing Pearl',
  },

  // ── PEDIATRIC UROLOGY (Dropkin 2024) ──────────────────────

  {
    id: 'peds-002',
    type: 'mc',
    topic: 'Pediatric Urology',
    topicFull: 'Pediatric Urology — UPJ Obstruction',
    question:
      'Which congenital anomaly is most commonly associated with ureteropelvic junction (UPJ) obstruction?',
    options: [
      'Multicystic dysplastic kidney',
      'Horseshoe kidney',
      'Crossed fused renal ectopia',
      'Duplex collecting system',
    ],
    answer: 1,
    explanation:
      'UPJ obstruction is associated with horseshoe kidney due to high insertion of the ureter. Most UPJ obstructions are incomplete. Typically presents with asymptomatic hydronephrosis or flank pain — NOT UTI. Workup: hydro on RUS → VCUG to rule out VUR → MAG-3 scan for differential renal function.',
    guideline: 'Dropkin High-Yield Urology 2024 — Pediatric Urology; UPJ Obstruction',
  },

  // ── NEUROGENIC BLADDER (Dropkin 2024) ─────────────────────

  {
    id: 'neuro-001',
    type: 'mc',
    topic: 'Neurogenic Bladder',
    topicFull: 'Neurogenic Bladder — Autonomic Dysreflexia',
    question:
      'A patient with T4 spinal cord injury develops sudden severe hypertension, diaphoresis, and headache during urodynamics. What is the most likely trigger and first intervention?',
    options: [
      'Detrusor overactivity alone; start oxybutynin',
      'Autonomic dysreflexia from bladder distension; immediately sit patient upright and drain the bladder',
      'Sympathetic storm from DESD; IV labetalol first',
      'Vasovagal response; place supine and give IV fluids',
    ],
    answer: 1,
    explanation:
      'Autonomic dysreflexia: afferent stimuli below T6 (most commonly bladder distension) in patients with SCI above T6 → massive reflex sympathetic discharge → vasoconstriction + severe hypertension. Management: sit patient upright (orthostatic BP drop), then immediately identify and remove the trigger. Bladder distension is the most common cause — drain immediately.',
    guideline: 'Dropkin High-Yield Urology 2024 — Bladder Neurourology',
  },

  // ── VASECTOMY (Dropkin 2024) ──────────────────────────────

  {
    id: 'vasec-001',
    type: 'fib',
    topic: 'Male Reproductive',
    topicFull: 'Vasectomy — Counseling',
    question:
      'Per AUA Vasectomy guidelines, the risk of pregnancy even with a negative post-vasectomy semen analysis (PVSA) is approximately 1 in ___.',
    answer: '2000',
    explanation:
      'Required vasectomy counseling per AUA: intended for permanent sterility; sterility is NOT immediate (use contraception until PVSA negative); never 100% reliable (1/2000 risk of pregnancy even with negative PVSA); repeat vasectomy needed in < 1% of cases. These points must all be discussed preoperatively.',
    guideline: 'Dropkin High-Yield Urology 2024; AUA Vasectomy Guideline (2015)',
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
  'Priapism',
  'Neurogenic Bladder',
  'Perioperative Management',
  'Drug-Induced Kidney Stones',
  'Renal Tubular Acidosis',
  'Metastatic Renal Cell Carcinoma Systemic Therapy',
  'Hypofractionated Radiation for Prostate Cancer',
];

// ============================================================
//  BATCH 2 — Zanki-Style FIB Cards from Dropkin 2024
//  Sections: NMIBC · Kidney Oncology · Prostate · Stones
// ============================================================

export const DROPKIN_CARDS = [

  // ══════════════════════════════════════════════════════════
  //  NMIBC
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-nmibc-001', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Per AUA NMIBC guidelines, BCG maintenance should be given for ___ year(s) in intermediate-risk and ___ year(s) in high-risk disease.',
    answer: '1 year (IR) / 3 years (HR)',
    explanation: 'Induction BCG is 6 weekly instillations. If induction works, maintenance = 3 weekly doses starting 3 months after induction. Duration: 1 yr for IR, 3 yrs for HR (per EORTC 30692, which showed 3 yrs only helped HR patients).',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  {
    id: 'd-nmibc-002', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Re-TURBT is recommended within ___ weeks of initial TURBT when the specimen shows HG Ta or T1 disease, or when muscularis propria was absent.',
    answer: '6 weeks',
    explanation: 'Re-staging TURBT within 6 weeks is required for incomplete resection or HG Ta/T1 disease. It upstages ~30% of T1 cases. Consider upfront RC if re-TURBT shows HG T1 with CIS, LVI, or variant histology.',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  {
    id: 'd-nmibc-003', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Single postoperative intravesical Mitomycin C or Gemcitabine should be instilled within ___ hours of TURBT to reduce recurrence in low/intermediate-risk NMIBC.',
    answer: '24 hours',
    explanation: 'Postoperative intravesical chemo only reduces recurrence if given within 24 hours of surgery. It is contraindicated if perforation is suspected or if resection was extensive. SWOG S0337 showed immediate post-TURBT gemcitabine reduced 4-yr recurrence from 47% to 35% in low-grade NMIBC.',
    guideline: 'Dropkin 2024 — NMIBC; SWOG S0337 (JAMA, 2018)',
  },

  {
    id: 'd-nmibc-004', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'BCG fever > 38.5°C lasting more than 12–24 hours should be treated with ___ 300 mg daily for 3 months.',
    answer: 'Isoniazid (INH)',
    explanation: 'BCG fever management: < 38.5°C → hold BCG until resolved. > 38.5°C for 12–24 hrs → INH 300 mg daily × 3 months, resume BCG when asymptomatic. Acute severe illness → INH + rifampin + ethambutol × 6 months, no further BCG. Sepsis → add prednisone 40 mg.',
    guideline: 'Dropkin 2024 — NMIBC; BCG Complications (J Urol, 1992)',
  },

  {
    id: 'd-nmibc-005', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'A patient is considered "BCG-unresponsive" when HG NMIBC recurs within ___ months of adequate BCG (defined as at least 2 induction courses or 1 induction + 1 maintenance course).',
    answer: '12 months',
    explanation: 'BCG-unresponsive definition: persistent/recurrent HG +/- CIS NMIBC within 12 months of adequate BCG (iBCG×2 or iBCG + mBCG). Within 6 months = no more BCG. Treatment options: RC (preferred), clinical trial, nadofaragene firadenovec, gemcitabine/docetaxel, or pembrolizumab (for CIS).',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  {
    id: 'd-nmibc-006', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'KEYNOTE-057 showed pembrolizumab achieved a complete response rate of ~___% in BCG-unresponsive CIS, with no patients progressing to MIBC at 3 months.',
    answer: '40%',
    explanation: 'KEYNOTE-057 (Lancet Oncol, 2021): 101 patients with BCG-unresponsive CIS ± papillary tumors who declined or were ineligible for RC → pembrolizumab 200 mg IV q3 weeks → 40% CR at 3 months, 1-yr PFS 83%, OS 98%. Established systemic pembrolizumab as an option for BCG-unresponsive CIS.',
    guideline: 'Dropkin 2024 — NMIBC; KEYNOTE-057 (Lancet Oncol, 2021)',
  },

  {
    id: 'd-nmibc-007', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Nadofaragene firadenovec (Adstiladrin®) works by delivering ___ cDNA to bladder epithelium, activating the immune system.',
    answer: 'IFN alpha/2beta (interferon alpha-2b)',
    explanation: 'Nadofaragene firadenovec is a recombinant adenoviral vector (rAd-IFNα/Syn3) that delivers IFN-alpha/2b cDNA to bladder epithelium. In BCG-unresponsive NMIBC (Lancet Oncol, 2021): 55% of CIS ± Ta/T1 patients had CR by 3 months, 25/55 maintained CR at 12 months. FDA approved 2022.',
    guideline: 'Dropkin 2024 — NMIBC; Lancet Oncol 2021',
  },

  {
    id: 'd-nmibc-008', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'After initial TURBT and treatment, the first surveillance cystoscopy for NMIBC should occur within ___ months, regardless of risk group.',
    answer: '3–4 months',
    explanation: 'The first post-treatment surveillance cystoscopy is within 3–4 months for all risk groups. After a negative first cysto: LR → cysto 6–9 months later, then yearly. IR → cysto/cytology q3–6 months × 2 yrs, then q6–12 months × 2 yrs, then yearly. HR → q3–4 months × 2 yrs, then q6 months × 2 yrs, then yearly.',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  {
    id: 'd-nmibc-009', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'To optimize MMC effectiveness: void before instillation, dehydrate, alkalinize urine with ___, and use a concentration of 40 mg/20 mL.',
    answer: 'Sodium bicarbonate (Na-bicarb)',
    explanation: 'MMC optimization: void/CIC prior (to minimize dilution), dehydrate, alkalinize with Na-bicarb (to improve drug stability), use 40 mg/20 mL concentration. Main side effects: 9% rash (contact dermatitis) and 6–41% chemical cystitis. NSAIDs, antibiotics, and antimuscarinics do NOT improve effectiveness.',
    guideline: 'Dropkin 2024 — NMIBC; Testing Pearls',
  },

  {
    id: 'd-nmibc-010', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Per AUA BCG Shortage guidelines, the preferred intravesical alternative to BCG in intermediate-risk NMIBC is ___.',
    answer: 'Mitomycin C (MMC)',
    explanation: 'BCG shortage priorities: do NOT use BCG in low-risk; use intravesical chemo (MMC preferred, or gemcitabine, epirubicin, docetaxel) for IR NMIBC; reserve available BCG for HR NMIBC induction. If truly unavailable: MMC induction then monthly maintenance up to 1 year is the preferred alternative.',
    guideline: 'Dropkin 2024 — NMIBC; AUA BCG Shortage Recommendations (2020)',
  },

  {
    id: 'd-nmibc-011', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'SWOG 8507 (J Urol, 2000) demonstrated that maintenance BCG doubled RFS compared to induction BCG alone, with median RFS of ___ vs. 36 months in HR NMIBC.',
    answer: '77 months',
    explanation: 'SWOG 8507: 550 patients with HR NMIBC (CIS or recurrent Ta/T1) → all got iBCG × 6 weeks → mBCG arm (3-week courses at months 3, 6, 12, 18, 24, 30, 36) had median RFS 77 vs. 36 months (p < 0.001) and longer time to progression. 5-yr OS was similar (83 vs. 78%). This established maintenance BCG as standard of care.',
    guideline: 'Dropkin 2024 — NMIBC; SWOG 8507 (J Urol, 2000)',
  },

  {
    id: 'd-nmibc-012', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Variant histology, extensive squamous/glandular differentiation, or LVI in NMIBC should prompt GU pathologist review and re-staging TURBT within ___ weeks (if attempting bladder preservation) vs. upfront RC.',
    answer: '4–6 weeks',
    explanation: 'These high-risk features significantly increase progression risk. Upfront RC should be considered over bladder-sparing approaches. If bladder preservation is attempted, re-staging TURBT within 4–6 weeks of diagnostic TURBT is required to accurately assess depth of invasion.',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  {
    id: 'd-nmibc-013', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'Microhematuria (MH) is defined as ≥ ___ RBC/hpf on a properly collected urine specimen.',
    answer: '3 RBC/hpf',
    explanation: 'Per AUA/SUFU Microhematuria Guideline (2020): MH = ≥3 RBC/hpf. A positive dipstick should prompt formal microscopic evaluation. Risk stratification (low/intermediate/high) determines workup: low risk = SDM for repeat UA or cysto + RUS; high risk = cysto + CTU + MRU.',
    guideline: 'Dropkin 2024 — Bladder; AUA/SUFU Microhematuria Guideline (2020)',
  },

  {
    id: 'd-nmibc-014', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'EORTC 30692 demonstrated that 3 years (vs. 1 year) of maintenance BCG reduces 5-yr recurrence in ___ risk NMIBC but NOT in intermediate-risk disease.',
    answer: 'High-risk (HR)',
    explanation: 'EORTC 30692 (Eur Urol, 2013): 1355 patients with IR or HR NMIBC → all got iBCG → HR patients who received 3 yrs mBCG had lower 5-yr recurrence (34 vs. 50%, p < 0.05). IR patients had similar recurrence rates regardless of maintenance duration. Full-dose BCG outperformed 1/3 dose throughout.',
    guideline: 'Dropkin 2024 — NMIBC; EORTC 30692 (Eur Urol, 2013)',
  },

  {
    id: 'd-nmibc-015', type: 'fib', topic: 'NMIBC',
    topicFull: 'Non-Muscle Invasive Bladder Cancer',
    question: 'UroVysion FISH detects aneuploidy from chromosomes 3, 7, and 17, and homozygous loss of chromosome ___.',
    answer: '9p21',
    explanation: 'UroVysion FISH is FDA-approved for NMIBC surveillance and to adjudicate equivocal cytology. It detects copy number changes in chromosomes 3, 7, 17 and homozygous deletion of 9p21 (CDKN2A/p16). It should NOT be used in lieu of cystoscopy or for surveillance of low-risk patients with normal cystoscopy.',
    guideline: 'Dropkin 2024 — NMIBC; Testing Pearls',
  },

  // ══════════════════════════════════════════════════════════
  //  KIDNEY ONCOLOGY
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-rcc-001', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Genetics',
    question: 'Von Hippel-Lindau (VHL) syndrome is caused by deletion of the tumor suppressor gene VHL on chromosome ___, leading to constitutive HIF expression and VEGF activation.',
    answer: '3p',
    explanation: 'VHL (AD inheritance): hemangioblastomas of retina/cerebellum/medulla, cavernous hemangiomas, pancreatic masses, and bilateral multifocal RCCs. VHL deletion → constitutive HIF → VEGF, cyclin D1, EPO upregulation. Kidney cancer is the leading cause of death in VHL. Annual screening starts at age 16.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Genetic Syndromes',
  },

  {
    id: 'd-rcc-002', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Belzutifan',
    question: 'Belzutifan (Welireg®) is a ___ inhibitor that is FDA-approved for VHL-associated RCC. Its most common side effects are anemia and fatigue.',
    answer: 'HIF-2α (HIF-2 alpha)',
    explanation: 'Belzutifan inhibits HIF-2α, reducing angiogenic growth factor production. In a phase II trial (NEJM, 2021): 49% objective response rate in VHL patients with RCC ≤10–29 mm. Anemia (90%) and fatigue (66%) are the most common adverse effects, with anemia caused by reduced erythropoietin production.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Belzutifan (NEJM, 2021)',
  },

  {
    id: 'd-rcc-003', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Hereditary Syndromes',
    question: 'Hereditary Leiomyomatosis RCC (HLRCC) is caused by a mutation in the ___ gene (fumarate hydratase, Krebs cycle), and RCC screening starts at age ___.',
    answer: 'FH gene / age 8',
    explanation: 'HLRCC: FH mutation → painful leiomyomas (cutaneous, uterine) + papillary RCC with aggressive behavior (patients may die young). Annual contrasted MRI screening starts at age 8. Active surveillance of tumors is NOT recommended — early intervention is preferred due to aggressive biology.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Genetic Syndromes',
  },

  {
    id: 'd-rcc-004', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Birt-Hogg-Dubé',
    question: 'Birt-Hogg-Dubé syndrome is caused by a mutation in the gene coding for ___, and is associated with painless fibrofolliculomas, bilateral RCCs (most commonly chromophobe/oncocytoma), and spontaneous pneumothorax from lung cysts.',
    answer: 'Folliculin',
    explanation: 'BHD (AD): folliculin gene mutation → characteristic skin fibrofolliculomas, bilateral/multifocal RCCs (chromophobe and oncocytoma most common), and pulmonary cysts with risk of spontaneous pneumothorax. Oncocytomas specifically stain negative with Hale\'s colloidal iron stain.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Genetic Syndromes',
  },

  {
    id: 'd-rcc-005', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Angiomyolipoma',
    question: 'Renal angiomyolipomas (AMLs) appear as high signal on ___ MRI sequence due to fat content. They are associated with tuberous sclerosis and are typically treated when > 4 cm.',
    answer: 'T1',
    explanation: 'AML is a benign perivascular epithelioid cell tumor. High T1 signal = fat = AML. MRI T2 with fat suppression confirms the diagnosis. AMLs rarely cause problems when small but rupture risk increases > 4 cm. Everolimus can shrink AMLs but growth resumes when stopped. Angioembolization is effective for acute bleeding.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Tumors',
  },

  {
    id: 'd-rcc-006', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Rare Subtypes',
    question: 'Renal medullary carcinoma is associated with ___ trait (not disease), arises from the collecting duct, is extremely aggressive (mean survival < 6 months), and is ¾ right-sided.',
    answer: 'Sickle cell trait',
    explanation: 'Renal medullary carcinoma (RMC): < 100 cases ever reported. Associated with sickle cell TRAIT. It is central/infiltrative, not amenable to partial nephrectomy. Does not respond to standard RCC therapies. First-line treatment for metastatic RMC: carboplatin + paclitaxel. Second-line: gemcitabine + adriamycin.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Tumors',
  },

  {
    id: 'd-rcc-007', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Oncocytoma',
    question: 'Oncocytomas stain ___ (negative/positive) with Hale\'s colloidal iron stain, which helps distinguish them from chromophobe RCC.',
    answer: 'Negative',
    explanation: 'Hale\'s colloidal iron stain: oncocytoma = negative; chromophobe RCC = diffusely positive. On imaging, Sestamibi nuclear scan (99mTc-Sestamibi) shows HIGH radiotracer uptake in oncocytoma and LOW uptake in RCC. An indeterminate biopsy showing oncocytoma should be followed with same imaging protocols as untreated low-risk RCC due to biopsy inaccuracy.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Tumors',
  },

  {
    id: 'd-rcc-008', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Active Surveillance Triggers',
    question: 'Potential triggers for intervention in small renal masses on active surveillance in healthier patients include growth to > ___ cm OR growth rate > ___ mm/year.',
    answer: '3 cm / 5 mm/year',
    explanation: 'Active surveillance for SRM < 2 cm: repeat imaging at 3–6 months, consider RMB for solid components. Growth > 3 cm or > 5 mm/year warrants consideration of intervention. Active surveillance requires at least annual HP, BUN/Cr, UA, abdominal imaging, and CXR.',
    guideline: 'Dropkin 2024 — Kidney Oncology; AUA Renal Mass Guideline (2021)',
  },

  {
    id: 'd-rcc-009', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — LND at rNx',
    question: 'The EORTC rNx ± LND trial (Eur Urol, 2009) demonstrated that complete lymph node dissection during radical nephrectomy for N0M0 RCC ___ (does/does not) improve OS, PFS, or time to progression.',
    answer: 'Does NOT',
    explanation: 'EORTC (Eur Urol, 2009): 772 patients with N0M0 resectable RCC → rNx with vs. without complete LND → OS, PFS, time to progression, and complication rates did NOT differ. Only 4% of the LND cohort had positive nodes. Complete LND is therefore not routinely required at the time of radical nephrectomy for clinical N0M0 disease.',
    guideline: 'Dropkin 2024 — Kidney Oncology; EORTC LND Trial (Eur Urol, 2009)',
  },

  {
    id: 'd-rcc-010', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Metastatic RCC — CheckMate 214',
    question: 'CheckMate 214 (NEJM, 2018) showed nivolumab + ipilimumab had superior 18-month OS vs. sunitinib in ___ and ___ risk metastatic clear-cell RCC (18-month OS: 75 vs. 60%).',
    answer: 'Intermediate and poor risk',
    explanation: 'CheckMate 214: ~800 patients with previously untreated intermediate/poor-risk advanced RCC → nivolumab (anti-PD-1) + ipilimumab (anti-CTLA-4) vs. sunitinib → 18-month OS 75 vs. 60% (p < 0.05), response rate 42 vs. 27%, CR rate 9 vs. 1%. Nivo/ipi also had a better overall AE profile. High-dose glucocorticoids needed in 35% for immune-mediated inflammation.',
    guideline: 'Dropkin 2024 — Kidney Oncology; CheckMate 214 (NEJM, 2018)',
  },

  {
    id: 'd-rcc-011', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Metastatic RCC — Favorable vs. Worst Prognosis',
    question: 'In metastatic clear-cell RCC, the metastatic site with the worst prognosis is ___, followed by liver, bone, and lymph nodes. The best prognosis site is ___.',
    answer: 'Brain (worst) / Adrenal or lung (best)',
    explanation: 'Metastatic site prognosis in ccRCC, worst to best: brain > liver > bone > LNs > lung > adrenal. 50% of multi-organ metastatic RCC patients have skeletal involvement, 80% of which is in the axial skeleton. Long bone mets tend to be in proximal portions. Orthopedic surgery indicated for weight-bearing bones with lytic lesions > 3 cm.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Advanced RCC',
  },

  {
    id: 'd-rcc-012', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Favorable Molecular Markers',
    question: 'Favorable molecular markers for survival in RCC are high ___, absent vimentin, and absent p53.',
    answer: 'CAIX (carbonic anhydrase IX)',
    explanation: 'The favorable prognostic triad in RCC: high CAIX (a HIF-target gene, marker of VHL pathway activation), absent vimentin (mesenchymal marker), and absent p53 (tumor suppressor). These are associated with better outcomes and are sometimes used in prognostic models.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Miscellaneous',
  },

  {
    id: 'd-rcc-013', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Post-Cryoablation',
    question: '"Persistent central enhancement" at a prior tumor site after renal cryoablation indicates ___.',
    answer: 'Tumor recurrence',
    explanation: 'After cryoablation, the ablation zone should become progressively less enhancing (fibrotic/necrotic). "Persistent central enhancement" = viable tumor = recurrence. New lesion with early enhancement + prompt washout at prior pNx site → ultrasound with Doppler to differentiate recurrence vs. pseudoaneurysm.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Small Renal Mass',
  },

  {
    id: 'd-rcc-014', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Cell Carcinoma — Sunitinib Side Effect',
    question: 'Sunitinib is associated with ___ early in the treatment course, requiring monitoring of thyroid labs.',
    answer: 'Hypothyroidism',
    explanation: 'Sunitinib (TKI → VEGF and PDGFR) causes hypothyroidism via multiple mechanisms including inhibition of thyroid iodine uptake. This occurs early in treatment. Thyroid function should be monitored regularly. Other notable sunitinib side effects: myelosuppression, nephrotoxicity, hand-foot syndrome, HTN, and diarrhea.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Advanced RCC Systemic Agents',
  },

  // ══════════════════════════════════════════════════════════
  //  PROSTATE ONCOLOGY
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-pca-001', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Surgical Anatomy',
    question: 'The neurovascular bundle (NVB) is located ___ to the prostate, between the prostatic fascia and levator ani fascia.',
    answer: 'Posterolateral',
    explanation: 'The NVB contains the cavernous nerves and is located posterolateral to the prostate between the prostatic and levator ani fascias. Nerve sparing during radical prostatectomy involves careful dissection in this plane. The endopelvic fascia and ligaments of the pelvis are extensions of the transversalis fascia.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Prostatectomy Complications',
  },

  {
    id: 'd-pca-002', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Venous Drainage',
    question: 'The Plexus of Santorini drains via the internal iliac vein and Batson\'s (paravertebral) venous plexus, explaining the predilection of prostate cancer metastases to the ___.',
    answer: 'Spine (vertebral column)',
    explanation: 'The Plexus of Santorini lies in the puboprostatic space and receives the deep dorsal vein, then drains through the vesical plexus into (1) the internal iliac vein and (2) Batson\'s paravertebral venous plexus. This valveless paravertebral plexus allows direct hematogenous spread to vertebral bodies, explaining the high frequency of spinal metastases in PCa.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Prostatectomy Anatomy',
  },

  {
    id: 'd-pca-003', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Nodal Drainage',
    question: 'High-risk prostate cancer nodal metastases are most likely to land in the ___ nodal packet.',
    answer: 'Internal iliac',
    explanation: 'The internal iliac nodal packet is the primary landing zone for PCa nodal metastases. PSMA-PET/CT is highly sensitive (96% sensitivity in OSPREY-B) for detecting recurrent PCa. Standard imaging (bone scan + CT) has poor sensitivity for nodal disease at low PSA levels — PSMA-PET changed management in 64% of BCR patients with negative conventional imaging (CONDOR trial).',
    guideline: 'Dropkin 2024 — Prostate Oncology; Anatomy',
  },

  {
    id: 'd-pca-004', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Genomic Testing',
    question: 'The Decipher® test analyzes mRNA from ___ genes and predicts the likelihood of PCa metastasis and PCa-specific survival.',
    answer: '22 genes',
    explanation: 'Genomic tests: Oncotype Dx = 17 genes (predicts GG4+3 or EPE on RP pathology); Decipher = 22 genes (predicts PCa mets and PCa-specific survival); Prolaris = cell cycle genes (predicts 10-yr PCa-specific survival); Confirm MDx = hypermethylation of 3 genes (predicts PCa on repeat biopsy).',
    guideline: 'Dropkin 2024 — Prostate Oncology; Biopsy-based Genomic Tests',
  },

  {
    id: 'd-pca-005', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Staging: Bone Scan',
    question: 'Per AUA Best Practice Statement, a bone scan is NOT routinely required for staging asymptomatic, clinically localized prostate cancer with PSA ≤ ___ ng/mL.',
    answer: '20 ng/mL',
    explanation: 'AUA Best Practice Statement on PSA Testing: routine bone scan is not required for staging asymptomatic men with clinically localized PCa with PSA ≤ 20 ng/mL. Consider CT or MRI for staging HR disease with PSA > 20 or Gleason ≥ 8. PLND may not be necessary for localized PCa with PSA < 10 and GS ≤ 6.',
    guideline: 'Dropkin 2024 — Prostate Oncology; AUA PSA Testing Statement (2013)',
  },

  {
    id: 'd-pca-006', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Natural History after BCR',
    question: 'In the natural history of progression after post-prostatectomy BCR (JAMA, 1999), the three key predictors of developing metastases were: time to BCR after surgery, Gleason score, and PSA-DT < ___ months.',
    answer: '10 months',
    explanation: 'Walsh\'s landmark study (2000 men after RP, 304 BCR): 34% developed mets (median time to mets 8 years; median time to death after mets 5 years). Predictors of mets: short time to BCR, high Gleason score, PSA-DT < 10 months. Predictor of PCa death: time from surgery to development of mets. This established PSA-DT < 10 months as the key high-risk BCR feature.',
    guideline: 'Dropkin 2024 — Prostate Oncology; JAMA 1999',
  },

  {
    id: 'd-pca-007', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — ProtecT Trial',
    question: 'ProtecT 15-year follow-up (NEJM, 2023): Active monitoring, surgery, and radiation showed no significant difference in ___, but active monitoring was associated with significantly higher rates of metastases and clinical progression.',
    answer: 'PCa-specific mortality (or overall survival)',
    explanation: 'ProtecT (1610 men, 15-yr median f/u): 45 PCa deaths — 11 AM, 12 surgery, 16 RT (p = 0.53). No significant difference in OS or cancer-specific survival. However, mets: 51 AM vs. 26 surgery vs. 27 RT. Clinical progression significantly higher with AM (141 vs. 58 vs. 60). Radical treatment protects against progression but has not yet shown OS benefit.',
    guideline: 'Dropkin 2024 — Prostate Oncology; ProtecT 15-yr (NEJM, 2023)',
  },

  {
    id: 'd-pca-008', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — SPCG-4 Trial',
    question: 'SPCG-4 (NEJM, 2018) showed that after 23 years of follow-up, surgery vs. watchful waiting required a NNT of ___ to prevent 1 prostate cancer death.',
    answer: '8',
    explanation: 'SPCG-4 ("Scandinavians 4 Prostatectomy"): 700 Scandinavian men → RP vs. watchful waiting. At 23 years, surgery showed significant benefits, especially for younger men with intermediate-risk disease. NNT = 8 to prevent one PCa death. Men who had surgery lived 2.9 years longer per patient. Surgery reduced PCa mortality by 11.7% and decreased rates of mets and ADT use.',
    guideline: 'Dropkin 2024 — Prostate Oncology; SPCG-4 (NEJM, 2018)',
  },

  {
    id: 'd-pca-009', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Rectal Injury',
    question: 'Rectal injury recognized intraoperatively during prostatectomy in a previously non-radiated patient should be managed with ___ repair. If in a salvage (radiated) setting, ___ is required.',
    answer: 'Primary repair / Diverting colostomy',
    explanation: 'Rectal injury during prostatectomy: if recognized intraoperatively in non-radiated patient → primary repair (get cystogram before catheter removal). If recognized post-op as vesico-rectal or rectourethral fistula (RUF) → diverting colostomy prior to definitive repair. In salvage prostatectomy setting (radiated field) → colostomy required regardless of when injury recognized.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Prostatectomy Complications',
  },

  {
    id: 'd-pca-010', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — EMBARK Trial',
    question: 'EMBARK (NEJM, 2023) showed enzalutamide ± ADT extended 5-year MFS vs. leuprolide alone in patients with high-risk BCR, defined as PSA-DT < ___ months.',
    answer: '9 months',
    explanation: 'EMBARK: 1068 men with HR BCR (PSA-DT < 9 months) → enzalutamide vs. leuprolide vs. combination → 5-yr MFS: 80 vs. 71 vs. 87% (p < 0.01 for enzalutamide and combination vs. leuprolide). Intermittent Tx initiated after 3 years if PSA < 0.2 ng/mL. QoL was similar across groups.',
    guideline: 'Dropkin 2024 — Prostate Oncology; EMBARK (NEJM, 2023)',
  },

  {
    id: 'd-pca-011', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Intermittent ADT',
    question: 'Per the Crook et al. trial (NEJM, 2012), intermittent ADT is ___ to continuous ADT for overall survival in MO CSPC with rising PSA after radiation, and is associated with better ___.',
    answer: 'Non-inferior / Quality of life (QoL)',
    explanation: 'Crook RCT (1300 MO CSPC patients with PSA > 3 after XRT): intermittent ADT (8-month cycles, restart if PSA > 10 ng/mL) vs. continuous ADT → median OS 8.8 vs. 9.1 years (not statistically different = positive non-inferiority trial). QoL favored intermittent ADT. This supports offering intermittent ADT to appropriate patients to reduce toxicity.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Crook et al. (NEJM, 2012)',
  },

  {
    id: 'd-pca-012', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Salvage XRT + ADT',
    question: 'Shipley et al. (NEJM, 2017) showed that adding 24 months of ___ to salvage XRT significantly improved OS (76 vs. 71%), reduced PCa-specific death (6 vs. 13%), and reduced metastasis rates.',
    answer: 'Bicalutamide (antiandrogen / ADT)',
    explanation: 'RTOG 9601/Shipley (NEJM, 2017): 760 men with BCR getting salvage XRT → bicalutamide vs. placebo × 24 months → OS, PCa death, and MFS all significantly improved with ADT. Gynecomastia was dramatically more common with bicalutamide (70 vs. 11%). This established ADT as standard co-treatment with salvage XRT.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Shipley et al. (NEJM, 2017)',
  },

  {
    id: 'd-pca-013', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — SPPORT Trial',
    question: 'SPPORT (Lancet, 2022) showed that adding pelvic lymph node XRT to prostate bed + ADT salvage RT improved 5-yr PFS to ___% vs. 81% (PBRT + ADT) vs. 71% (PBRT alone).',
    answer: '87%',
    explanation: 'SPPORT (1716 men with BCR or persistent PSA after RP): prostate bed RT vs. + ADT vs. + ADT + PLN XRT → 5-yr PFS 71 vs. 81 vs. 87% (p < 0.05 for each comparison). Expanding the field to include pelvic lymph nodes improved outcomes but was associated with higher rates of blood and bone marrow adverse events.',
    guideline: 'Dropkin 2024 — Prostate Oncology; SPPORT (Lancet, 2022)',
  },

  // ══════════════════════════════════════════════════════════
  //  STONE DISEASE / METABOLIC
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-stone-001', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Metabolic Evaluation',
    question: 'Hypercalciuria is defined as urinary calcium > ___ mg/L on a 24-hour urine study and is the most common metabolic risk factor for calcium-containing stones.',
    answer: '200 mg/L',
    explanation: 'Hypercalciuria (> 200 mg Ca²⁺/L on 24-hr urine) is the most common metabolic abnormality in calcium stone formers. The 4 types: absorptive (↑ GI absorption), renal calcium leak (↑ urinary loss), renal phosphate leak, and resorptive (hyperPTH). Treatment: thiazides ± K-citrate (for all types except resorptive, which requires parathyroidectomy).',
    guideline: 'Dropkin 2024 — Kidney Stones; AUA Medical Management of Kidney Stones (2019)',
  },

  {
    id: 'd-stone-002', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Citrate Mechanism',
    question: 'Citrate prevents stone formation by binding Ca²⁺ in urine/intestines, raising urine pH, and decreasing spontaneous nucleation of ___. In an acidotic state, citrate is metabolized to bicarbonate.',
    answer: 'Calcium oxalate (CaOx)',
    explanation: 'K-Citrate is first-line for: recurrent Ca²⁺ stones with low urinary citrate, uric acid stones (to raise urine pH > 6), and cystine stones (to raise pH > 7). K-Cit tablets use a wax matrix for sustained release — patients will see wax casts in stool, which is normal. Liquid preparations are available for patients with rapid GI transit.',
    guideline: 'Dropkin 2024 — Kidney Stones; Medical Treatment',
  },

  {
    id: 'd-stone-003', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Allopurinol Indication',
    question: 'Allopurinol is indicated for recurrent calcium ___ stones with hyperuricosuria and normal urinary calcium. It should NOT be used as first-line for uric acid stones.',
    answer: 'Oxalate (CaOx)',
    explanation: 'This is a frequently tested concept: allopurinol (xanthine oxidase inhibitor → ↓ uric acid production) is used for recurrent CaOx stones + hyperuricosuria + normal urinary Ca²⁺ — NOT for uric acid stones (where K-Cit to alkalinize urine is first-line). For uric acid stones, only use allopurinol if serum uric acid is elevated or purines can\'t be restricted.',
    guideline: 'Dropkin 2024 — Kidney Stones; AUA Medical Management (2019)',
  },

  {
    id: 'd-stone-004', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Cystinuria',
    question: 'Cystinuria (mnemonic: COLA-R) is an AR disorder causing inability to reabsorb cystine, ornithine, lysine, and ___. Mutations in SLC7A9 or SLC3A1 transporters are responsible.',
    answer: 'Arginine',
    explanation: 'COLA-R: Cystine, Ornithine, Lysine, Arginine — all fail to be reabsorbed in the proximal tubule. Cystine is insoluble in urine → stones. Treatment: hydrate + alkalinize (pH > 7) → if stones continue → cysteine-binding thiol drugs (α-MPG = tiopronin = Thiola®, better tolerated than D-penicillamine). D-penicillamine requires pyridoxine (Vit B6) supplementation.',
    guideline: 'Dropkin 2024 — Kidney Stones; Cystinuria',
  },

  {
    id: 'd-stone-005', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Struvite Treatment',
    question: 'Acetohydroxamic acid (AHA, Lithostat®) is a urease inhibitor used for residual struvite stones after surgery is exhausted. CBC must be checked every ___ months due to risk of hemolytic anemia.',
    answer: '3 months (quarterly)',
    explanation: 'AHA is the only medication shown to decrease struvite stone GROWTH rate (not recurrence). Dose: 250 mg TID. Risks include hemolytic anemia (15%, especially in renal failure), superficial phlebitis, and severe depression/anxiety. It should not be used until surgical options are exhausted. Renacidin is used for dissolution of residual struvite fragments.',
    guideline: 'Dropkin 2024 — Kidney Stones; Medical Treatment',
  },

  {
    id: 'd-stone-006', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Enteric Hyperoxaluria',
    question: 'Enteric (acquired) hyperoxaluria in IBD/short-gut syndrome occurs because unabsorbed fat binds Ca²⁺ in the gut → oxalate goes unbound → absorbed in colon → high urinary oxalate. Treatment: ___ supplementation at mealtimes.',
    answer: 'Calcium (Ca²⁺)',
    explanation: 'Unabsorbed fat causes "soap formation" (saponification) with Ca²⁺, leaving oxalate free to be absorbed. Crohn\'s specifically: low urine volume + low pH/hypocitraturia (metabolic acidosis) + hyperoxaluria → CaOx stones. 24-hr urine: low Ca²⁺, high oxalate, low Mg²⁺. Treatment: dietary Ca²⁺ at mealtime (to bind oxalate in gut) + low-oxalate diet.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-007', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Roux-en-Y and Stones',
    question: 'Roux-en-Y gastric bypass increases stone risk via: (1) ___ hyperoxaluria from unabsorbed fat binding Ca²⁺ and (2) dehydration in the first year from small stomach limiting fluid intake.',
    answer: 'Enteric (increased intestinal oxalate absorption)',
    explanation: 'Post-RYGB stone mechanisms: unabsorbed fatty acids bind Ca²⁺ (saponification) → unbound oxalate absorbed by colon → hyperoxaluria → CaOx stones. Manage with dietary Ca²⁺ at mealtime ± PO Ca²⁺ citrate/carbonate, limit high-oxalate foods. Also: metabolic acidosis → ↓ urinary citrate → managed with K-Cit.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-008', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Diabetes and Uric Acid',
    question: 'Diabetes/insulin resistance increases uric acid stone risk through impaired ___, causing low urine pH despite normal serum uric acid.',
    answer: 'Ammoniagenesis',
    explanation: 'Insulin normally stimulates ammoniagenesis (from glutamine) in renal tubule cells via gluconeogenesis and Na⁺/H⁺ exchanger. Insulin resistance impairs this process → ↓ ammonium excretion → low urine pH → uric acid crystallization. This is distinct from hyperuricemia-related gout. Obesity also ↑ uric acid excretion via hyperuricosuria.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-009', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Randall\'s Plaques',
    question: 'Randall\'s plaques are ___ deposits that form on the basement membrane of the thin loops of Henle, progress to the suburothelium, erode through the papillary surface, and serve as anchor sites for CaOx stone formation.',
    answer: 'Calcium phosphate (CaPhos/apatite)',
    explanation: 'Randall\'s plaques are subepithelial CaPhos (apatite) deposits that form the nidus for idiopathic CaOx stone formation. This is the primary mechanism for recurrent CaOx stones in otherwise metabolically normal patients. Stone crystallization inhibitors include: citrate, magnesium, Tamm-Horsfall protein, pyrophosphate, and osteopontin.',
    guideline: 'Dropkin 2024 — Kidney Stones; Stone Crystallization',
  },

  {
    id: 'd-stone-010', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Primary Hyperoxaluria Treatment',
    question: 'Lumasiran (Oxlumo®) is a ___ (mechanism) approved for Type 1 Primary Hyperoxaluria, reducing glycolate oxidase activity to decrease oxalate production.',
    answer: 'siRNA (small interfering RNA)',
    explanation: 'Primary hyperoxaluria Type 1 is an AR disease from mutations in glyoxylate metabolism genes → ↑ oxalate production → oxalate stones + nephrocalcinosis. Lumasiran (siRNA targeting glycolate oxidase → ↓ glyoxylate → ↓ oxalate) is FDA-approved. Chronic antibiotic use also increases CaOx stone risk by depleting intestinal oxalobacter formigenes.',
    guideline: 'Dropkin 2024 — Kidney Stones; Primary Hyperoxaluria',
  },

  {
    id: 'd-stone-011', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Lesch-Nyhan Syndrome',
    question: 'Lesch-Nyhan syndrome is caused by inherited absence of ___, causing the classic triad of neurologic dysfunction, self-mutilation, and uric acid overproduction with hyperuricosuria.',
    answer: 'HGPRT (hypoxanthine-guanine phosphoribosyltransferase)',
    explanation: 'HGPRT deficiency → failure to recycle purines → uric acid overproduction → uric acid stones. Treatment: K-Cit (to alkalinize urine), allopurinol (to reduce uric acid production). If allopurinol is started, xanthine stones may form → do not discontinue allopurinol, but add K-Cit.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-012', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Ammonium Acid Urate',
    question: 'Ammonium acid urate (AAU) stones are associated with chronic diarrhea and laxative abuse. They are radiolucent but unlike uric acid stones (which form in pH < 5.5), AAU stones ___ dissolve with alkalinization.',
    answer: 'Do NOT',
    explanation: 'AAU stones: rare, radiolucent, associated with chronic diarrhea, laxative abuse/↓ urinary Na⁺, and ileal/large-volume colon resection. They form in urine pH > 6.3 (unlike uric acid stones which form in acidic urine). Critical distinction: AAU stones do NOT dissolve with alkalinization, whereas uric acid stones do. Can be mistaken for uric acid stones on imaging.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-013', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Thiazide Complications',
    question: 'After initiating thiazide diuretics for hypercalciuria, ~30% of patients develop ___, which itself causes hypocitraturia and impairs insulin secretion (3–5% develop new-onset hyperglycemia).',
    answer: 'Hypokalemia',
    explanation: 'Thiazide-induced hypokalemia leads to hypocitraturia (citrate is a key stone inhibitor) and impairs pancreatic beta-cell insulin secretion → hyperglycemia risk. To prevent: correct hypokalemia with K-Cit (which also helps with stone prevention) or dietary potassium. Thiazides also cause hyperuricemia and hypertriglyceridemia.',
    guideline: 'Dropkin 2024 — Kidney Stones; Thiazide Diuretics',
  },

  {
    id: 'd-stone-014', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Vitamin C',
    question: '10–20% of dietary Vitamin C (ascorbate) is metabolized to ___, which is excreted in urine. CaOx stone formers should NOT take high-dose Vitamin C supplementation.',
    answer: 'Oxalic acid (oxalate)',
    explanation: 'Vitamin C → oxalate in vivo. Unlike some dietary components, ascorbate does NOT change urinary pH, citrate, calcium, or magnesium — its stone-forming risk is purely through increased urinary oxalate. High-dose Vit C supplementation is contraindicated in CaOx stone formers.',
    guideline: 'Dropkin 2024 — Kidney Stones; Testing Pearls',
  },

  {
    id: 'd-stone-015', type: 'fib', topic: 'Urolithiasis',
    topicFull: 'Kidney Stones — Topiramate and Stones',
    question: 'Topiramate (Topamax®) causes a chronic intracellular acidosis → high urine pH, SEVERE hypocitraturia, and hypercalciuria → predominantly ___ stones in ~2% of chronic users.',
    answer: 'Calcium phosphate (CaPhos)',
    explanation: 'Topiramate creates a urinary milieu identical to distal RTA: high urine pH, hypercalciuria, severe hypocitraturia. Treatment: either stop topiramate or start K-Cit. Similarly, zonisamide (sulfonamide anticonvulsant) affects 4% of long-term users with CaPhos stones by the same mechanism.',
    guideline: 'Dropkin 2024 — Kidney Stones; Drug-Induced Stones',
  },
// ══════════════════════════════════════════════════════════
  //  TESTIS ONCOLOGY
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-testis-001', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Tumor Marker Half-Lives',
    question: 'Tumor marker half-lives in testicular cancer (mnemonic BLA-246): B-hCG = ___ days, LDH = ___ days, AFP = ___ days.',
    answer: 'B-hCG = 2 days, LDH = 4 days, AFP = 6 days',
    explanation: 'Markers should normalize within 4 half-lives of effective treatment. If AFP or hCG remains borderline elevated (within 3× upper limit), a rising trend must be established before using this for treatment decisions. LDH alone should never be used to determine stage or guide treatment.',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Early Stage Testicular Cancer Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-002', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — AFP and Tumor Type',
    question: 'AFP is produced by cells of the yolk sac. Seminoma ___ (can/cannot) make AFP — so any AFP elevation confirms at least partial ___ component.',
    answer: 'Cannot / NSGCT (non-seminomatous germ cell tumor)',
    explanation: 'Pure seminoma cannot produce AFP. Any AFP elevation in a testicular tumor rules out pure seminoma and confirms NSGCT, even if pathology appears to show seminoma. Non-malignant AFP elevations can occur with liver damage (drugs, hepatitis, alcohol).',
    guideline: 'Dropkin 2024 — Testis Oncology; Testing Pearls',
  },

  {
    id: 'd-testis-003', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — False Positive B-hCG',
    question: 'Two causes of non-malignant B-hCG elevation are ___ (because elevated LH cross-reacts with the assay) and marijuana use.',
    answer: 'Hypogonadism',
    explanation: 'Hypogonadism causes elevated LH, which can cross-react with B-hCG assays giving a false positive. This should normalize within 48–72 hours of starting exogenous testosterone. Marijuana is the other non-malignant cause. Both must be excluded before attributing B-hCG elevation to tumor.',
    guideline: 'Dropkin 2024 — Testis Oncology; Testing Pearls',
  },

  {
    id: 'd-testis-004', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Initial Imaging',
    question: 'For newly diagnosed GCT, initial imaging should be ___ abdomen/pelvis with contrast. PET scan should ___ (always/never) be obtained at initial staging.',
    answer: 'CT (CTAP) / Never (do not get PET)',
    explanation: 'PET is not used in initial GCT staging. Chest imaging is also required — CXR is sufficient for clinical stage I seminoma (low risk), but CT chest is preferred for NSGCT and mandatory if STMs are elevated/rising post-op or if any metastatic disease is seen on CTAP/CXR/PE.',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-005', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Testis-Sparing Surgery',
    question: 'Testis-sparing surgery (TSS) is indicated for masses < ___ cm plus one of: equivocal US with negative markers, congenital/functional solitary testis, or bilateral synchronous tumors.',
    answer: '2 cm',
    explanation: 'TSS is primarily intended to preserve testosterone production — consider radical orchiectomy more strongly when severe hypogonadism is already present. Ipsilateral biopsies must be performed in addition to mass excision and reviewed by an experienced GU pathologist. XRT contraindicated in Crohn\'s disease patients.',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-006', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — GCNIS',
    question: 'Germ Cell Neoplasia In Situ (GCNIS) on testis biopsy carries approximately a ___% risk of progressing to invasive GCT within 5 years.',
    answer: '50%',
    explanation: 'GCNIS (formerly ITGCN) options: surveillance (if fertility/androgen production are priorities), XRT 18–20 Gy (lower risk of hypogonadism than orchiectomy), or orchiectomy (if cancer control prioritized). GCNIS found on infertility workup: 50+% develop invasive GCT by 5 years.',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-007', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Stage I Seminoma Management',
    question: 'For stage I seminoma, ___ is the preferred management over adjuvant XRT or single-dose carboplatin, per the SWENOTECA trial which showed 14% relapse rate but 99.8% disease-specific survival.',
    answer: 'Surveillance',
    explanation: 'SWENOTECA seminoma trial (J Clin Oncol, 2011): 1181 men with stage I seminoma → surveillance vs. aXRT vs. carboplatin → relapse rates 14 vs. 4 vs. 1% but disease-specific survival 99.8 vs. 100 vs. 100%. Adjuvant XRT is no longer favored due to risk of secondary malignancy. Both XRT and carboplatin are non-inferior to each other (Lancet, 2005).',
    guideline: 'Dropkin 2024 — Testis Oncology; SWENOTECA (J Clin Oncol, 2011)',
  },

  {
    id: 'd-testis-008', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Adjuvant XRT Dose',
    question: 'When adjuvant XRT is used for stage I seminoma, ___ Gy is better tolerated than 30 Gy with only 0.7% higher absolute risk of relapse at 2 years.',
    answer: '20 Gy',
    explanation: 'MRC TE18 trial: 625 men randomized to 20 vs. 30 Gy adjuvant XRT for stage I seminoma → 20 Gy was better tolerated with only a marginal increase in relapse risk. This established 20 Gy as the preferred dose when adjuvant XRT is chosen.',
    guideline: 'Dropkin 2024 — Testis Oncology; J Clin Oncol 2005',
  },

  {
    id: 'd-testis-009', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Stage IIA/IIB Seminoma',
    question: 'For stage IIB seminoma with lymph nodes > 3 cm, ___ is the preferred treatment. For LN ≤ 3 cm (IIA), XRT, chemotherapy, or RPLND are all options via shared decision-making.',
    answer: 'Chemotherapy (3 cycles BEP or 4 cycles EP)',
    explanation: 'Stage IIA seminoma (LN ≤ 3 cm): SDM between XRT, chemo (3 BEP or 4 EP), or RPLND (added as option in 2023 update per SEMS/PRIMETEST trials). Stage IIB (LN > 3 cm): chemotherapy preferred. RPLND for seminoma is very technically difficult due to tissue fibrosis.',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-010', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Stage IA NSGCT',
    question: 'For stage IA NSGCT with normal post-orchiectomy markers, ___ is the preferred management. RPLND or 1 cycle of BEP are appropriate alternatives for patients who decline surveillance.',
    answer: 'Surveillance',
    explanation: 'Stage IA NSGCT: surveillance preferred. Stage IB: recommend surveillance, RPLND, or 1–2 cycles BEP. Stage I NSGCT with somatic malignancy (teratoma with malignant transformation) in primary tumor → RPLND. SWENOTECA NSGCT trial: LVI(+) has 42% relapse on surveillance vs. 13% for LVI(–).',
    guideline: 'Dropkin 2024 — Testis Oncology; AUA Guideline (2019, amended 2023)',
  },

  {
    id: 'd-testis-011', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Stage I NSGCT Relapse Predictors',
    question: 'In stage I NSGCT after orchiectomy, the presence of both embryonal histology and lymphovascular invasion (pT2) carries a ___% relapse risk, while neither factor carries ___% risk. Median time to relapse is ___ months.',
    answer: '45% / 15% / 6 months',
    explanation: 'LVI and embryonal cell carcinoma are the two strongest predictors of relapse in stage I NSGCT. Patients with LVI(+) have 42% relapse on surveillance (SWENOTECA). Median time to relapse is 6 months — the vast majority of relapses occur in the first 2 years, supporting intensive early surveillance.',
    guideline: 'Dropkin 2024 — Testis Oncology; Miscellaneous',
  },

  {
    id: 'd-testis-012', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Post-Chemo NSGCT RP Mass',
    question: 'After chemotherapy for NSGCT, a residual RP mass should go to RPLND UNLESS the mass has shrunk to < ___% of its original size AND all nodes are < ___ cm at time of marker normalization.',
    answer: '10% of original size / 1 cm',
    explanation: 'There is NO role for PET in NSGCT — PET, CT, and tumor markers all perform equally poorly (~55%) in predicting residual viable tumor. Teratoma is not FDG-avid. Even when predictors of fibrosis are present (>90% size reduction, pure embryonal primary), false-negative rate remains 20% — so surgery is still needed when a mass is present.',
    guideline: 'Dropkin 2024 — Testis Oncology; Post-Chemo RP Mass (Very High Yield)',
  },

  {
    id: 'd-testis-013', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Post-Chemo Lung Masses',
    question: 'Post-chemo lung and retroperitoneal masses have only ___% pathology concordance, so lung masses require resection even if the RP mass shows only fibrosis.',
    answer: '75%',
    explanation: 'Because of 25% discordance between lung and RP pathology, lung masses cannot be assumed to be fibrotic just because the RP mass was fibrotic. However, if the RP mass is fibrosis only, small (e.g., 1 cm) non-RP residual masses can be monitored with surveillance rather than resected.',
    guideline: 'Dropkin 2024 — Testis Oncology; RPLND Related',
  },

  {
    id: 'd-testis-014', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — RPLND Sympathetic Chain',
    question: 'The biggest risk of damage to the sympathetic chain during RPLND is injury to the ___ plexus, which lies anterior to the aortic bifurcation.',
    answer: 'Hypogastric plexus',
    explanation: 'The hypogastric plexus (also called the superior hypogastric plexus) lies anterior to the aortic bifurcation and contains the sympathetic fibers responsible for emission and ejaculation. Nerve-sparing RPLND preserves these fibers. Full bilateral template boundaries: renal vessels (superiorly), ureters bilaterally, common iliacs (inferiorly).',
    guideline: 'Dropkin 2024 — Testis Oncology; RPLND Related',
  },

  {
    id: 'd-testis-015', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — IMA Sacrifice',
    question: 'If the inferior mesenteric artery (IMA) is sacrificed during RPLND, the colon gets its blood supply via the internal iliac → ___ arteries → marginal artery.',
    answer: 'Middle and inferior hemorrhoidal (rectal) arteries',
    explanation: 'This is also relevant during pyeloplasty where the IMA may be accidentally injured. The collateral blood supply via the internal iliac → hemorrhoidal → marginal artery of Drummond is generally sufficient to prevent ischemia, but surgeons must be aware of this anatomy.',
    guideline: 'Dropkin 2024 — Testis Oncology; RPLND Related',
  },

  {
    id: 'd-testis-016', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Paratesticular RMS',
    question: 'For paratesticular rhabdomyosarcoma: boys < 10 get chemo alone (if cN0). Boys ≥ 10 get ipsilateral RPLND prior to chemo because of a ___% false-negative rate on RP imaging.',
    answer: '50%',
    explanation: 'Paratesticular RMS (>90% embryonal type, excellent survival): boys ≥ 10 → orchiectomy + CTAP to assess LNs → ipsilateral RPLND regardless of LN status (because 50% FN rate on imaging). If disease found on RPLND → XRT. Boys < 10 with cN0 → chemo (vincristine + dactinomycin) without RPLND.',
    guideline: 'Dropkin 2024 — Testis Oncology; RPLND Related',
  },

  {
    id: 'd-testis-017', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Chemotherapy Side Effects',
    question: 'In testicular cancer chemotherapy: Bleomycin → ___, Cisplatin → nephrotoxicity + ___, Ifosfamide → hemorrhagic cystitis (prevent with ___).',
    answer: 'Pulmonary fibrosis / Ototoxicity / Mesna',
    explanation: 'High-yield chemo side effects: Bleomycin (glycopeptide) → pulmonary fibrosis → limit perioperative fluids and FiO₂. Cisplatin → nephrotoxicity + ototoxicity. Ifosfamide → hemorrhagic cystitis (mesna is mandatory) + encephalopathy. Carboplatin and etoposide → myelosuppression. BEP = bleomycin/etoposide/cisplatin; TIP = paclitaxel/ifosfamide/cisplatin (salvage).',
    guideline: 'Dropkin 2024 — Testis Oncology; Chemotherapy Side Effects',
  },

  {
    id: 'd-testis-018', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — TRISST Trial',
    question: 'The TRISST trial (J Clin Oncol, 2022) showed that surveillance for stage I seminoma with ___ scans over 36 months and ___ imaging is non-inferior to 7 scans over 60 months with CT.',
    answer: '3 scans / MRI',
    explanation: 'TRISST (669 men, factorial RCT): 3 vs. 7 scans AND CT vs. MRI for stage I seminoma surveillance. Stage ≥IIC relapse was non-inferior for 3 scans vs. 7 (2.8 vs. 0.3%, p > 0.05) and for MRI vs. CT (0.6 vs. 2.6%, p > 0.05). OS was similar (99%) with no tumor-related deaths. This supports less-frequent MRI surveillance.',
    guideline: 'Dropkin 2024 — Testis Oncology; TRISST (J Clin Oncol, 2022)',
  },

  {
    id: 'd-testis-019', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Miscellaneous',
    question: 'The most common testicular tumor in men > 50 years old is ___, not germ cell tumor.',
    answer: 'Lymphoma',
    explanation: 'In men over 50, testicular lymphoma (typically diffuse large B-cell lymphoma) is the most common testicular malignancy. GCTs predominate in younger men (peak: seminoma 30s–40s, NSGCT 20s–30s). Gynecomastia occurs in 5% of men with GCTs and 30–50% of men with Sertoli or Leydig cell tumors.',
    guideline: 'Dropkin 2024 — Testis Oncology; Miscellaneous',
  },

  {
    id: 'd-testis-020', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — GI Complications: Chylous Ascites',
    question: 'Chylous ascites after major abdominal surgery presents with painless high-output milky fluid with TG > ___ mg/dL. Initial management is low TG diet ± percutaneous drainage → NPO + TPN → somatostatin.',
    answer: '150 mg/dL',
    explanation: 'Chylous ascites treatment ladder: low TG diet ± perc drainage → NPO + TPN → somatostatin (↓ fat absorption, ↓ motor activity of intestines) → invasive closure of lymphatic channels. High-output enterocutaneous fistula (> 500 mL/day): NPO/TPN → bowel motility meds → octreotide (weakest evidence) → surgery.',
    guideline: 'Dropkin 2024 — Testis Oncology; GI Complications after Major Abdominal Surgery',
  },

  {
    id: 'd-testis-021', type: 'fib', topic: 'Testicular Cancer',
    topicFull: 'Testicular Cancer — Accidental Scrotal Approach',
    question: 'After accidental transscrotal orchiectomy for low-stage NSGCT requiring subsequent primary RPLND: wide excision of the ___ and removal of the spermatic cord remnant are required.',
    answer: 'Scrotal scar',
    explanation: 'Transscrotal approach disrupts lymphatic drainage to inguinal nodes (instead of retroperitoneal). For primary RPLND: wide excision of scrotal scar + spermatic cord remnant removal. For post-chemo RPLND: no need for scar excision unless local recurrence; only remove spermatic cord remnant. High threshold for additional therapy beyond scar excision if metastatic evaluation is normal.',
    guideline: 'Dropkin 2024 — Testis Oncology; Testing Pearls',
  },// ══════════════════════════════════════════════════════════
  //  KIDNEY ONCOLOGY — GAPS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-rcc-g001', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Mass Staging — T Sizes',
    question: 'Renal mass T-staging size thresholds: T1a ≤ ___ cm, T1b ≤ ___ cm, T2a ≤ ___ cm, T2b > ___ cm.',
    answer: '4 cm / 7 cm / 10 cm / 10 cm',
    explanation: 'T1a ≤ 4 cm, T1b ≤ 7 cm, T2a ≤ 10 cm, T2b > 10 cm — all confined to kidney. T3a = renal vein/pelvicalyceal/perirenal fat within Gerota. T3b = IVC below diaphragm. T3c = IVC above diaphragm. T4 = beyond Gerota or involving adrenal. Stage III = T3N0-1M0 or T1-2N1M0.',
    guideline: 'Dropkin 2024 — Kidney; AUA Renal Mass Guideline (2021)',
  },

  {
    id: 'd-rcc-g002', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Mass — Evaluation Rule',
    question: 'Initial evaluation of a renal mass requires "___ images + ___ labs": multi-phase cross-sectional abdominal imaging (enhancing = ↑ 20 HU), CBC, UA, and CMP + chest imaging.',
    answer: '2 images + 3 labs',
    explanation: 'The 2+3 rule: 2 imaging studies (multi-phase abdominal CT/MRI; consider MRI if IVC thrombus suspected) + 3 labs (CBC, UA, CMP) + chest imaging if malignancy suspected. For Bosniak 3/4 or solid masses, use GFR to assign CKD stage (90+, 60+, 30+, 15+, <15 or dialysis).',
    guideline: 'Dropkin 2024 — Kidney; AUA Renal Mass Guideline (2021)',
  },

  {
    id: 'd-rcc-g003', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Mass Biopsy — Predictive Values',
    question: 'Renal mass biopsy (RMB) has a PPV of ___%, NPV of ~___%, and a non-diagnostic rate of ~___%. Multiple cores are preferred over FNA for solid masses.',
    answer: 'PPV 100% / NPV ~60% / Non-Dx ~15%',
    explanation: 'RMB is most useful when results would change management (e.g., before ablation, active surveillance, or when hematologic/metastatic/inflammatory etiology is suspected). The ~15% non-diagnostic rate is clinically important — a non-diagnostic biopsy does not exclude malignancy.',
    guideline: 'Dropkin 2024 — Kidney; AUA Renal Mass Guideline (2021)',
  },

  {
    id: 'd-rcc-g004', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Mass — Genetics Consult',
    question: 'A genetics consult is recommended for patients with renal masses who are age ≤ ___, have multifocal/bilateral masses, or have a personal/family history suggesting a familial renal neoplastic syndrome.',
    answer: '46 years old',
    explanation: 'Young age (≤46), bilaterality, multifocality, or pathology suggesting a hereditary syndrome (VHL, HLRCC, BHD, TSC) should trigger genetics referral. Nephrology consult is indicated when eGFR < 45 mL/min/1.73m², expected post-op eGFR < 30, proteinuria, or DM with CKD.',
    guideline: 'Dropkin 2024 — Kidney; AUA Renal Mass Guideline (2021)',
  },

  {
    id: 'd-rcc-g005', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Renal Artery Vasospasm',
    question: 'Renal artery vasospasm during hilar dissection causes reduced perfusion and a pale kidney. Treatment is topical ___ applied to the renal hilar vessels.',
    answer: 'Papaverine (opium alkaloid antispasmodic vasodilator)',
    explanation: 'Papaverine relaxes vascular smooth muscle and reverses renal artery vasospasm during partial or radical nephrectomy. Insufflation pressure is then reduced. This is a common intraoperative complication during hilar dissection and is easily managed with topical papaverine.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Surgery Testing Pearls',
  },

  {
    id: 'd-rcc-g006', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Lumbar Vein',
    question: 'Acute bleed following ligation/division of the LEFT renal hilum should raise concern for disruption of the ___ vein, which inserts into the renal vein posteriorly.',
    answer: 'Lumbar vein',
    explanation: 'The lumbar vein inserts posteriorly into the left renal vein near the hilum. Inadvertent avulsion during left renal hilum dissection can cause significant hemorrhage. Interaortocaval nodes primarily drain the right kidney and drain the left kidney only with advanced disease.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Surgery Testing Pearls',
  },

  {
    id: 'd-rcc-g007', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Urine Leak',
    question: 'A urine leak after partial nephrectomy should be managed with percutaneous drain placement first. If it persists, place a ___ and ureteral stent → PCNT if stent cannot be placed.',
    answer: 'Retrograde pyelogram (RPG)',
    explanation: 'Urine leak management after pNx: start with percutaneous drain (if not already present) → ensure drain is not directly on the leak site and not on active suction → RPG + ureteral stent → PCNT if stent cannot be placed. Most leaks resolve with adequate drainage and stenting.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Surgery Testing Pearls',
  },

  {
    id: 'd-rcc-g008', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Post-op Back Pain',
    question: 'Severe persistent back pain after left-sided renal surgery that is resistant to NSAIDs/opioids should raise concern for ___ (check CK) on the ipsilateral side and ___ injury (check amylase/lipase).',
    answer: 'Rhabdomyolysis / Pancreatic injury',
    explanation: 'After left-sided renal surgery: rhabdomyolysis if pain is contralateral to the surgical side (from positioning); pancreatic injury if pain is on the left (the pancreatic tail is at risk). Check CK for rhabdo and amylase/lipase for pancreatic injury. This is a high-yield surgical complication pearl.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Surgery Testing Pearls',
  },

  {
    id: 'd-rcc-g009', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Juxtaglomerular Tumor',
    question: 'Juxtaglomerular cell tumors are benign, rare, typically occur in patients < ___ years old, and present with elevated peripheral ___ causing hypertension. They are cured with surgery.',
    answer: '20 years old / Renin',
    explanation: 'Juxtaglomerular (renin-secreting) tumors are benign neoplasms of renin-producing cells. They cause secondary hyperaldosteronism and refractory hypertension. Diagnosis: elevated peripheral renin + imaging showing a small renal mass. Surgical excision is curative.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Tumors',
  },

  {
    id: 'd-rcc-g010', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Mass — Renal Pseudotumor',
    question: 'A renal pseudotumor (column of Bertin or focal cortical hyperplasia) is best confirmed with a ___ scan, which shows normal renal function in the pseudo-mass.',
    answer: 'DMSA (dimercaptosuccinic acid) scan',
    explanation: 'Renal pseudotumors are normal renal parenchyma (column of Bertin) that bulge into the collecting system or renal sinus and can mimic a mass on CT/US. DMSA scan shows normal radiotracer uptake in the "mass," confirming normal renal tissue rather than neoplasm.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Renal Tumors',
  },

  {
    id: 'd-rcc-g011', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — Cryoablation Optimization',
    question: 'Optimal renal cryoablation requires: real-time intraoperative U/S, cryoprobe tip at the ___ margin of the tumor, target temperature below ___°C, cryo lesion extended ~1 cm beyond tumor margin, and active double freeze-thaw cycle.',
    answer: 'Deepest margin / –40°C',
    explanation: 'The cryoprobe tip should be placed at the deepest margin of the tumor to ensure adequate treatment. Target temperature must reach below –40°C to achieve lethal iceball temperatures. The cryo lesion should extend ~1 cm beyond the tumor margin. The double freeze-thaw cycle maximizes cell death.',
    guideline: 'Dropkin 2024 — Kidney Oncology; Small Renal Mass Related',
  },

  {
    id: 'd-rcc-g012', type: 'fib', topic: 'Kidney Oncology',
    topicFull: 'Renal Surgery — EORTC Partial vs Radical Nx',
    question: 'The EORTC pNx vs. rNx trial (Eur Urol, 2014) showed that pNx substantially reduced the incidence of moderate renal dysfunction (eGFR < 60) — ___ vs. 86% of patients. However, OS was ___.',
    answer: '65% / Similar (no OS benefit)',
    explanation: 'EORTC (550 patients, renal tumors ≤5 cm): pNx vs. rNx → at 6.7 yr median f/u, 65 vs. 86% developed eGFR < 60 (p < 0.05), but advanced CKD (eGFR < 30) and kidney failure rates were similar. The renal function benefit of pNx did not translate to improved survival in this population.',
    guideline: 'Dropkin 2024 — Kidney Oncology; EORTC pNx vs. rNx (Eur Urol, 2014)',
  },

  // ══════════════════════════════════════════════════════════
  //  ADRENAL ONCOLOGY
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-adrenal-001', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal Incidentaloma — Workup',
    question: 'Biochemical workup for an adrenal incidentaloma includes: ___ dexamethasone suppression test, plasma fractionated ___, and (if hypertensive) aldosterone + renin.',
    answer: '1-mg overnight / Metanephrines/normetanephrines',
    explanation: 'The 1-mg overnight dexamethasone suppression test screens for cortisol-producing adenoma (Cushing\'s). Plasma fractionated metanephrines/normetanephrines screen for pheochromocytoma and should be done BEFORE any biopsy. If hypertensive, aldosterone-to-renin ratio (ARR) screens for primary hyperaldosteronism.',
    guideline: 'Dropkin 2024 — Adrenal; AACE/AAES Guideline (2009)',
  },

  {
    id: 'd-adrenal-002', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal — Primary Hyperaldosteronism Workup',
    question: 'A positive screen for primary hyperaldosteronism is ARR > ___. Confirmation requires demonstrating lack of aldosterone suppression despite ___ loading.',
    answer: 'ARR > 20 / Salt loading',
    explanation: 'Workup: ARR > 20 → confirm with 24-hr urine salt loading test → high-resolution CT for all confirmed cases → adrenal venous sampling (AVS) for patients > 40 years old. Unilateral lesions → adrenalectomy. Bilateral lesions or surgical candidates who decline → mineralocorticoid receptor blockers (spironolactone, eplerenone).',
    guideline: 'Dropkin 2024 — Adrenal; AACE/AAES Guideline (2009)',
  },

  {
    id: 'd-adrenal-003', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal — Adrenalectomy Indications',
    question: 'Adrenalectomy is indicated for ANY lesion with concerning radiographic features AND most lesions ≥ ___ cm due to increased risk of adrenal cortical carcinoma.',
    answer: '4 cm',
    explanation: 'Lesions ≥ 4 cm carry increased ACC risk and warrant adrenalectomy. Always perform biochemical workup preoperatively to rule out pheochromocytoma, guide perioperative management, and identify tumor markers. Incidentalomas managed with observation get repeat imaging at 3–6 months, then annually × 1–2 years, with biochemical re-evaluation annually × 5 years.',
    guideline: 'Dropkin 2024 — Adrenal; AACE/AAES Guideline (2009)',
  },

  {
    id: 'd-adrenal-004', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal — Pheochromocytoma Preop',
    question: 'Preoperative management of pheochromocytoma: start with ___ (e.g., phenoxybenzamine). Beta-blockers should NOT be given first because they can cause increased ___ stimulation.',
    answer: 'Alpha-blocker / Alpha-receptor (unopposed alpha stimulation)',
    explanation: 'Alpha-blockade first is mandatory — beta-blockers alone can cause unopposed alpha-stimulation and hypertensive crisis. If alpha-blockade is inadequate, add metyrosine (Demser®; inhibits tyrosine hydroxylase, the rate-limiting step in catecholamine synthesis), then Ca²⁺ channel blocker. Beta-blockers are used only in the context of tachyarrhythmias after alpha blockade is established.',
    guideline: 'Dropkin 2024 — Adrenal; Periop Management for Adrenalectomy',
  },

  {
    id: 'd-adrenal-005', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal — Post-Adrenalectomy Hypotension',
    question: 'If blood pressure drops after adrenal vein ligation during pheochromocytoma resection, first-line treatment is ___ bolus. Vasopressors are rarely required.',
    answer: 'Normal saline (NS) volume expansion',
    explanation: 'Post-ligation hypotension occurs due to sudden withdrawal of catecholamines. Management: NS bolus first. Vasopressors (norepinephrine if needed) are rarely required. Postoperative steroids may be needed in any patient due to preoperative contralateral adrenal suppression (from cortisol-producing tumors or surgical stress).',
    guideline: 'Dropkin 2024 — Adrenal; Periop Management',
  },

  {
    id: 'd-adrenal-006', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal — Neuroblastoma',
    question: 'Neuroblastoma is the MC malignant tumor of infancy (6 months – 2.5 years), arises from ___ cells, and is diagnosed with elevated urinary catecholamines, imaging (including ___), and tissue biopsy.',
    answer: 'Neural crest cells / MIBG scan',
    explanation: 'Neuroblastoma: 70% are metastatic at presentation. Unlike Wilms\', these children look ILL. Poor risk factors: n-myc amplification, 1p deletion, unfavorable histology. Favorable: age < 1 year, non-adrenal primary, diagnosed by prenatal US. Key: mets + age < 1 year → spontaneous regression may occur → start with observation.',
    guideline: 'Dropkin 2024 — Pediatric GU Malignancy; Neuroblastoma',
  },

  {
    id: 'd-adrenal-007', type: 'fib', topic: 'Adrenal',
    topicFull: 'Adrenal Hemorrhage',
    question: 'The classic triad of adrenal hemorrhage in newborns is mass, ___, and jaundice (from blood reabsorption in the retroperitoneum). Males may also have scrotal hemorrhage.',
    answer: 'Anemia',
    explanation: 'Adrenal hemorrhage in neonates: triad = mass + anemia + jaundice. Adrenal US should be performed to exclude neuroblastoma. Most adrenal hemorrhages completely resolve with observation and serial imaging. No intervention is needed unless neuroblastoma is suspected.',
    guideline: 'Dropkin 2024 — Adrenal; Adrenal Hemorrhage',
  },

  // ══════════════════════════════════════════════════════════
  //  WILMS' TUMOR / PEDIATRIC RENAL
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-wilms-001', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric Renal Tumors — Age Mnemonic',
    question: 'Pediatric renal tumors by age (mnemonic C0_5yN2_5yW): Congenital Mesoblastic Nephroma = MC in infants < ___ months; Neuroblastoma = MC malignant tumor at ___ months to 2.5 years; Wilms\' = MC primary renal cancer in children age ___ years+.',
    answer: '6 months / 6 months–2.5 years / 2.5 years',
    explanation: 'Age-based mnemonic: CMN < 6 months (spindle cells, rNx almost always curative), Neuroblastoma 6 mo–2.5 yrs (neural crest, 70% metastatic), Wilms\' 2.5 yrs+ (80% between ages 3–5). Wilms\' presents with palpable mass ± GH, HTN, abdominal pain.',
    guideline: 'Dropkin 2024 — Pediatric GU Malignancy; Testing Pearls',
  },

  {
    id: 'd-wilms-002', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Wilms\' Tumor — Syndromes',
    question: 'WAGR syndrome (WT-1 mutation on 11p13) includes: Wilms\' tumor, ___, Genital abnormalities, and mental Retardation. Denys-Drash adds ___ and membranoproliferative glomerulonephritis.',
    answer: 'Aniridia / Hypospadias or cryptorchidism (DSD)',
    explanation: 'Non-overgrowth WT syndromes (WT-1, 11p13): WAGR and Denys-Drash. Overgrowth syndromes (WT-2, 11p15): Beckwith-Wiedemann (macroglossia, nephromegaly, hepatomegaly, hemihypertrophy). Survey children at increased risk with RUS q3 months until age 10. Perilobar nephrogenic rests → abd US q3 months × 5 years.',
    guideline: 'Dropkin 2024 — Pediatric GU Malignancy; Wilms\' Tumor',
  },

  {
    id: 'd-wilms-003', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Wilms\' Tumor — Treatment',
    question: 'Wilms\' treatment is radical nephrectomy with LND (goal ___ LNs). NAC (vincristine + actinomycin) is used ONLY for bilateral disease (stage V), IVC extension above hepatic veins, solitary kidney, inoperable tumor, or predisposition syndrome.',
    answer: '6–10 lymph nodes',
    explanation: 'Do NOT biopsy bilateral Wilms\' masses — biopsy upstages disease and necessitates doxorubicin (which carries cardiac toxicity risk). Tumor spillage, positive LNs, or positive margins = Stage III → adjuvant chemo (dactinomycin + vincristine + doxorubicin) + XRT. Doxorubicin cardiac toxicity is the major dose-limiting side effect.',
    guideline: 'Dropkin 2024 — Pediatric GU Malignancy; Wilms\' Treatment',
  },

  {
    id: 'd-wilms-004', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Wilms\' Tumor — Staging',
    question: 'Wilms\' Stage III includes incomplete resection with residual abdominal disease AND any case with ___ (which automatically upstages to Stage III).',
    answer: 'Preoperative biopsy',
    explanation: 'Wilms\' staging: I = confined to kidney, completely resected. II = beyond kidney but completely resected. III = incomplete resection OR any biopsy (biopsy = Stage III). IV = metastatic. V = bilateral at diagnosis. This is why biopsy is contraindicated in bilateral Wilms\' — it upstages and mandates more intensive therapy including doxorubicin.',
    guideline: 'Dropkin 2024 — Pediatric GU Malignancy; Wilms\' Tumor Staging',
  },

  // ══════════════════════════════════════════════════════════
  //  NMIBC / BLADDER — GAPS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-nmibc-g001', type: 'fib', topic: 'NMIBC',
    topicFull: 'Bladder Cancer — Risk of Upper Tract UC',
    question: 'The risk of upper tract UC in patients with a bladder cancer diagnosis is ~___%. Conversely, the risk of bladder cancer in patients with a UTUC diagnosis is ~___%, warranting lifelong bladder surveillance.',
    answer: '~10% / ~40%',
    explanation: 'This bidirectional risk is important for surveillance planning. Patients with UTUC have a ~40% risk of developing bladder cancer and require regular cystoscopy. Patients with bladder cancer have ~10% risk of upper tract involvement. For IR/HR NMIBC, upper tract imaging is recommended q1–2 years.',
    guideline: 'Dropkin 2024 — NMIBC; Miscellaneous',
  },

  {
    id: 'd-nmibc-g002', type: 'fib', topic: 'NMIBC',
    topicFull: 'Bladder Cancer — Ileal Conduit Urine Cultures',
    question: 'Asymptomatic ileal conduit urine cultures are generally positive in ~___% of cases. Treatment is only indicated if the culture grows ___ or ___, due to the risk of stone formation.',
    answer: '75% / Proteus / Pseudomonas',
    explanation: 'Asymptomatic bacteriuria in ileal conduits should NOT be routinely treated — the exception is Proteus or Pseudomonas, which produce urease and alkalize urine, creating struvite stones. Treating all positive cultures leads to antibiotic resistance without clinical benefit.',
    guideline: 'Dropkin 2024 — NMIBC; Major Surgery Related',
  },

  {
    id: 'd-nmibc-g003', type: 'fib', topic: 'NMIBC',
    topicFull: 'Bladder Cancer — Positive Cytology Normal Cystoscopy',
    question: 'Positive urinary cytology with a normal cystoscopy in a patient with NMIBC history should prompt: upper tract imaging, prostatic urethral biopsies, ___ cystoscopy, ureteroscopy, and random bladder biopsies.',
    answer: 'Blue light (fluorescence) cystoscopy',
    explanation: 'Blue light cystoscopy (using hexaminolevulinate) increases detection of CIS and papillary tumors and should be offered at TURBT when available. Narrow-band imaging (NBI) is an alternative. In the setting of positive cytology with negative white light cystoscopy, blue light cysto and upper tract evaluation are essential.',
    guideline: 'Dropkin 2024 — NMIBC; AUA/SUO NMIBC Guideline (2024)',
  },

  // ══════════════════════════════════════════════════════════
  //  PROSTATE — GAPS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-pca-g001', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Active Surveillance and Transplant',
    question: 'Men with prostate cancer who qualify for active surveillance can undergo organ transplant ___. Those with high-risk disease require treatment (surgery or XRT) and recovery (~___ months) prior to transplant.',
    answer: 'Immediately (without delay) / 6 months',
    explanation: 'This is a practical clinical pearl: AS-eligible PCa patients do not need to delay transplant. However, high-risk PCa requires definitive treatment and ~6 months of recovery before transplant can proceed, due to immunosuppression risks with uncontrolled high-risk disease.',
    guideline: 'Dropkin 2024 — Prostate Oncology',
  },

  {
    id: 'd-pca-g002', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Obturator Nerve Injury',
    question: 'Obturator nerve injury during prostatectomy requires debridement of thermally injured ends followed by end-to-end repair with interrupted, fine, ___ (absorbable/non-absorbable), monofilament suture.',
    answer: 'Non-absorbable',
    explanation: 'Obturator nerve injury → debride thermally injured areas → primary end-to-end repair with interrupted, fine, non-absorbable, monofilament suture. Recognized intraoperative rectal injury in non-radiated patients → primary repair (get cystogram before catheter removal). In radiated field → diverting colostomy.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Prostatectomy Complications',
  },

  {
    id: 'd-pca-g003', type: 'fib', topic: 'Prostate Cancer',
    topicFull: 'Prostate Cancer — Seminal Vesicle Invasion',
    question: '___ invasion (but NOT bladder neck invasion) is an independent predictor of poor outcome after robot-assisted laparoscopic prostatectomy (RALP).',
    answer: 'Seminal vesicle',
    explanation: 'Seminal vesicle invasion (pT3b) is an independent adverse pathological feature after RALP. Bladder neck invasion alone does not carry the same independent prognostic weight. The Rocco stitch is a stabilizing suture thrown between Denonvilliers\' fascia and tissue posterior to the urethra to reduce tension on the vesicourethral anastomosis.',
    guideline: 'Dropkin 2024 — Prostate Oncology; Prostatectomy',
  },// ══════════════════════════════════════════════════════════
  //  SEXUAL MEDICINE — ED, PEYRONIE'S, EJACULATION
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-ed-001', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Smooth Muscle Physiology',
    question: 'Baseline penile flaccidity is maintained by tonic contraction of penile vascular smooth muscle via ___ release from postganglionic sympathetic nerves.',
    answer: 'Norepinephrine',
    explanation: 'Erection requires parasympathetic stimulation → NOx release from NANC nerves → guanylyl cyclase → ↑cGMP → protein kinase → opens K+ channels, closes Ca++ channels → ↓intracellular Ca++ → smooth muscle relaxation → ↑arterial blood flow. PDE5 breaks down cGMP → detumescence.',
    guideline: 'Dropkin 2024 — Penis; Erectile SM Physiology Testing Pearls',
  },

  {
    id: 'd-ed-002', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Alprostadil Mechanism',
    question: 'PGE1 (alprostadil) causes smooth muscle relaxation by increasing conversion of ___ to cAMP via adenylate cyclase, reducing intracellular Ca²⁺.',
    answer: 'ATP',
    explanation: 'PGE1 (alprostadil = MUSE® intraurethral, Caverject®/Edex® intracorporeal) works via the cAMP pathway, distinct from the NOx/cGMP pathway used by PDE5 inhibitors. This is why alprostadil can be effective when PDE5 inhibitors fail — it bypasses the guanylyl cyclase pathway entirely.',
    guideline: 'Dropkin 2024 — Penis; Erectile SM Physiology Testing Pearls',
  },

  {
    id: 'd-ed-003', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Penile Duplex Ultrasound',
    question: 'On penile duplex ultrasound: cavernous arterial insufficiency = PSV < ___ cm/s. Veno-occlusive dysfunction (venous leak) = EDV > ___ cm/s with normal PSV.',
    answer: 'PSV < 25 cm/s / EDV > 5 cm/s',
    explanation: 'Normal PSV > 35 cm/s (some use > 25). PSV < 25 → cavernous arterial insufficiency → consider cardiology referral (higher CAD risk). EDV > 5 with normal PSV → venous leak. Resistive Index = (PSV–EDV)/PSV; RI < 0.75 → venous leak. Psychogenic ED = normal PSV + EDV < 5 (or negative).',
    guideline: 'Dropkin 2024 — Penis; Penile Duplex Ultrasound Testing Pearls',
  },

  {
    id: 'd-ed-004', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Not Recommended Treatments',
    question: 'Per AUA ED guidelines, ___, testosterone (if serum level is normal), ___, herbal therapies, and penile venous surgeries are NOT recommended for erectile dysfunction.',
    answer: 'Trazodone / Yohimbine',
    explanation: 'Any ED treatment CAN be offered at any time per the 2018 AUA guideline — a mandatory step-therapy progression is not required. Experimental (not yet recommended): ESWT, intracavernosal stem cell therapy, PRP. Arterial reconstruction: only for healthy patients with recently acquired ED from focal arterial occlusion without generalized vascular disease or veno-occlusive dysfunction.',
    guideline: 'Dropkin 2024 — Penis; AUA ED Guideline (2018)',
  },

  {
    id: 'd-ed-005', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Penile Prosthesis Contraindications',
    question: 'Penile prosthesis implantation should NOT be performed in the setting of systemic, cutaneous, or ___ infection. Perioperative antibiotics must cover both Gram-___ and Gram-___ organisms.',
    answer: 'Urinary tract (UTI) / Gram-negative and Gram-positive',
    explanation: 'Penile prosthesis infection is a devastating complication. Antibiotic-impregnated prostheses reduce infection risk. Periop coverage must include Gram-negative (e.g., gentamicin) and Gram-positive (e.g., vancomycin) organisms. Patients must understand risks of infection, erosion, mechanical failure, penile shortening, and reduced response if the device is removed.',
    guideline: 'Dropkin 2024 — Penis; AUA ED Guideline (2018)',
  },

  {
    id: 'd-ed-006', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Ejaculation Physiology',
    question: 'Emission is mediated by ___ (T10–L2) sympathetics → hypogastric plexus → epididymis/vas/prostate/SVs. Ejection is mediated by ___ (S2–S4) via the pudendal nerve → bulbospongiosus + ischiocavernosus contractions.',
    answer: 'Sympathetic / Somatic (pudendal nerve)',
    explanation: 'The bulbospongiosus muscle is MOST responsible for antegrade ejaculation through rhythmic contractions that compress the bulb. Orgasm is the pleasurable cerebral processing of sensory input from pelvic muscle contraction and seminal fluid ejection — it is separate from ejaculation physiologically.',
    guideline: 'Dropkin 2024 — Sexual Dysfunction; Ejaculation Physiology Testing Pearls',
  },

  {
    id: 'd-ed-007', type: 'fib', topic: 'Erectile Dysfunction',
    topicFull: 'ED — Erection Neural Pathways',
    question: 'Psychogenic erections: visual/sensory → cerebral cortex → parasympathetic ___ nerves → cavernosal nerves → NOx release. Reflexogenic erections: penile stimulation → dorsal nerve → pudendal nerve → spinal cord via ___ sensory nerves → parasympathetics.',
    answer: 'S2–S4 (both psychogenic and reflexogenic use S2–S4)',
    explanation: 'Both psychogenic and reflexogenic erections ultimately activate the same S2–S4 parasympathetic pathway and release NOx from NANC nerves. This is why patients with upper spinal cord injuries (above S2–S4) may still have reflexogenic erections (preserved by the sacral reflex arc) but lose psychogenic erections.',
    guideline: 'Dropkin 2024 — Penis; Neural Pathways for Sexual Function',
  },

  // ── PREMATURE EJACULATION ──────────────────────────────────

  {
    id: 'd-pree-001', type: 'fib', topic: 'Sexual Dysfunction',
    topicFull: 'Premature Ejaculation — Definitions',
    question: 'Lifelong premature ejaculation is defined as IELT < approximately ___ minute(s) since onset of sexual activity. Acquired PreE is IELT < ~___ minutes, markedly reduced from prior experience.',
    answer: '1 minute / 3 minutes',
    explanation: 'Lifelong PreE is caused by variation in sensitivity of two serotonin receptor classes. Acquired PreE causes: performance anxiety, psychological concerns, ED, prostatitis, hyperthyroidism, drug withdrawal/detox. In patients with PE + ED → treat ED first. Ejaculatory latency is NOT affected by circumcision status.',
    guideline: 'Dropkin 2024 — Sexual Dysfunction; AUA/SMSNA Disorders of Ejaculation Guideline (2020)',
  },

  {
    id: 'd-pree-002', type: 'fib', topic: 'Sexual Dysfunction',
    topicFull: 'Premature Ejaculation — First-Line Treatment',
    question: 'First-line pharmacotherapy for premature ejaculation: daily ___, on-demand clomipramine or dapoxetine, and topical penile anesthetics. All SSRIs are contraindicated with ___ due to serotonin syndrome risk.',
    answer: 'SSRIs / MAOIs (monoamine oxidase inhibitors)',
    explanation: 'SSRIs that delay ejaculation: fluoxetine, paroxetine, sertraline, clomipramine. SSRIs that do NOT work for PreE: nefazodone, citalopram, fluvoxamine. Paroxetine has the most evidence. Second-line: tramadol or alpha-1 blockers. Combining behavioral therapy + pharmacotherapy increases IELT by ~1 minute. Surgical options (bulking agents) are experimental only.',
    guideline: 'Dropkin 2024 — Sexual Dysfunction; AUA Premature Ejaculation Guideline (2010)',
  },

  // ── PEYRONIE'S DISEASE ────────────────────────────────────

  {
    id: 'd-pd-001', type: 'fib', topic: "Peyronie's Disease",
    topicFull: "Peyronie's Disease — Pathophysiology",
    question: "Peyronie's disease is caused by ___ without typical scar remodeling. While curvature rarely resolves spontaneously, ___ virtually always resolves within 12 months of onset.",
    answer: 'Abnormal wound healing / Penile pain',
    explanation: "PD associated conditions: aging, DM, ED, psychological distress, prostatectomy, hypogonadism, Dupuytren's contracture, Ledderhose's plantar contracture, tympanosclerosis. Most common curve direction: dorsal (70%), lateral (15–20%), ventral (10–15%). ICI is NOT recommended in PD as it may worsen scarring.",
    guideline: "Dropkin 2024 — Penis; PD Testing Pearls; AUA PD Guideline (2015)",
  },

  {
    id: 'd-pd-002', type: 'fib', topic: "Peyronie's Disease",
    topicFull: "Peyronie's Disease — Natural History",
    question: "The natural history of active-phase PD follows the '15/40/45 rule': ___% improve (avg 15°), ___% stay the same, and ___% worsen (avg 22°).",
    answer: '12% improve / 40% stable / 48% worsen',
    explanation: "Mulhall natural history study (J Urol, 2006): patients followed ≥12 months from symptom onset. Average stretched penile length declined from 12.2 to 11.4 cm. Pain always resolves with time in the active phase. Complete spontaneous resolution of curvature is extremely rare.",
    guideline: "Dropkin 2024 — Penis; Natural History of PD (J Urol, 2006)",
  },

  {
    id: 'd-pd-003', type: 'fib', topic: "Peyronie's Disease",
    topicFull: "Peyronie's Disease — Collagenase (Xiaflex)",
    question: "Clostridial collagenase (Xiaflex®) is the only FDA-approved injection for PD. It is indicated for stable disease with curvature between ___ and ___ degrees, with up to ___ total injections approved.",
    answer: '31° and 89° / 8 injections',
    explanation: "Xiaflex selectively degrades Type I and Type III collagen. IMPRESS I+II trials: collagenase reduced curvature by 17° vs. 9° for placebo (p < 0.01). 0.5% of patients experience penile fracture after injections — maintain high index of suspicion. Interferon alpha-2b is also an option (not FDA-approved for PD) — can continue despite flu-like side effects.",
    guideline: "Dropkin 2024 — Penis; AUA PD Guideline (2015); IMPRESS I+II (J Urol, 2013)",
  },

  {
    id: 'd-pd-004', type: 'fib', topic: "Peyronie's Disease",
    topicFull: "Peyronie's Disease — Surgical Options",
    question: "The most common patient complaint after penile plication for PD is ___. Plaque incision and grafting (PIG/PEG) is reserved for non-ventral curves > ___° with hinging, shaft narrowing, or extensive calcification.",
    answer: 'Perception of penile shortening / 60°',
    explanation: "Plication goal: shorten the convex side to straighten the penis. Nesbit = transverse ellipse of tunica excised; Yachia = vertical incision. PIG/PEG risk: de novo ED and sensation changes. IPP indications: ED + PD present ≥12 months, deformity stable ≥6 months, failed conservative therapy, unable to have intercourse. Residual curve > 60° after IPP → PIG vs. plication.",
    guideline: "Dropkin 2024 — Penis; AUA PD Guideline (2015)",
  },

  {
    id: 'd-pd-005', type: 'fib', topic: "Peyronie's Disease",
    topicFull: "Peyronie's Disease — Medical Therapy",
    question: "Pentoxifylline (Trental®) is used in PD as a xanthine derivative that reduces TGF-β → ↓ ___ collagen deposition + ↑ fibrinolysis. Oral vitamin E, tamoxifen, and omega-3 fatty acids are ___ (recommended/not recommended) by AUA.",
    answer: 'Type I collagen / NOT recommended',
    explanation: "The AUA does not recommend oral therapies other than NSAIDs (for pain) in routine practice. Pentoxifylline, colchicine (for acute pain only), and low-dose daily tadalafil (inhibits collagen synthesis) are sometimes used but not formally recommended. Shock wave therapy should NOT be offered for curvature/plaque reduction but CAN be offered for pain relief.",
    guideline: "Dropkin 2024 — Penis; AUA PD Guideline (2015)",
  },

  // ── MALE INFERTILITY ──────────────────────────────────────

  {
    id: 'd-inf-001', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Semen Analysis Reference Values',
    question: 'Reference semen analysis values: volume ___ mL, pH > ___, concentration > ___ million/mL, total sperm > ___ million/ejaculate, motility > ___%, forward progression > ___ (scale 0–4).',
    answer: '1.5–5.0 mL / 7.2 / 20 million/mL / 40 million / 40% / 2',
    explanation: 'Full evaluation requires PMH, PE, and two semen analyses. Initial endocrine evaluation (T and FSH) is indicated for: sperm concentration < 10 million/mL, impaired sexual function, or clinical signs of endocrinopathy. Sperm morphology by strict criteria alone should NOT be used in isolation for prognostic or therapeutic decisions.',
    guideline: 'Dropkin 2024 — Testis; AUA Infertility Best Practice Statement (2011)',
  },

  {
    id: 'd-inf-002', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Low Ejaculate Volume',
    question: 'Ejaculate volume < ___ mL without CBAVD or hypogonadism should prompt a post-ejaculatory urinalysis to evaluate for retrograde ejaculation (any sperm in urine = diagnostic).',
    answer: '1 mL',
    explanation: 'Low ejaculate volume differential: retrograde ejaculation (check post-ejaculatory UA), ejaculatory duct obstruction (TRUS in azoospermic patients with palpable vasa and low volume), CBAVD, or hypogonadism. CBAVD patients must be offered CFTR mutation testing + renal imaging (renal anomalies in ~25% with CBAVD without CFTR mutations).',
    guideline: 'Dropkin 2024 — Testis; AUA Infertility Best Practice Statement (2011)',
  },

  {
    id: 'd-inf-003', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Azoospermia Workup',
    question: 'Azoospermia + normal T and LH + elevated FSH + Sertoli-only histology on biopsy → ___ to identify and retrieve sperm, with approximately ___% success rate.',
    answer: 'Micro-TESE (microsurgical testicular sperm extraction) / 50%',
    explanation: 'Elevated FSH with Sertoli-only pattern indicates NON-obstructive azoospermia. Micro-TESE finds focal sperm production in ~50% of these patients. Obstructive azoospermia (normal FSH, palpable vasa, normal testis volume) → TRUS to look for ejaculatory duct obstruction → vasovasostomy or vasoepididymostomy.',
    guideline: 'Dropkin 2024 — Testis; AUA Azoospermic Male Best Practice Statement (2011)',
  },

  {
    id: 'd-inf-004', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Anabolic Steroids',
    question: 'In a former anabolic steroid user with infertility, the most effective way to restore testosterone production is ___. Testosterone supplementation itself should NOT be used because it increases ___ feedback and ↓ LH/FSH.',
    answer: 'hCG (human chorionic gonadotropin) / Negative feedback',
    explanation: 'Exogenous testosterone suppresses the hypothalamic-pituitary axis via negative feedback → ↓ LH and FSH → testicular atrophy and azoospermia. hCG mimics LH and directly stimulates Leydig cells to produce testosterone without suppressing the axis. Clomiphene citrate (SERM) can also be used to block negative feedback at the hypothalamus/AP.',
    guideline: 'Dropkin 2024 — Testis; Male Infertility',
  },

  {
    id: 'd-inf-005', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Varicocele + Vasovasostomy',
    question: 'Varicocelectomy and vasovasostomy should NOT be performed simultaneously because venous outflow after varicocele repair is dependent on the ___ vessels, which are divided during vasectomy/vasovasostomy → risk of testicular atrophy.',
    answer: 'Vassal (vas deferens) vessels',
    explanation: 'After varicocele repair, the testicular venous drainage becomes dependent on collateral vessels including the vassal veins. Simultaneously dividing these during vasovasostomy eliminates this collateral → venous hypertension → testicular atrophy. These procedures must be staged. Varicocele grading: I = Valsalva only; II = palpable at rest; III = visible at rest.',
    guideline: 'Dropkin 2024 — Testis; Male Infertility',
  },

  {
    id: 'd-inf-006', type: 'fib', topic: 'Male Infertility',
    topicFull: 'Male Infertility — Antisperm Antibodies',
    question: 'Antisperm antibody (ASA) testing should be considered when there is isolated ___ (reduced motility) with normal sperm concentration. Risk factors include ductal obstruction, genital infection, testicular trauma, and prior vasovasostomy.',
    answer: 'Asthenospermia',
    explanation: 'ASA testing is indicated for isolated asthenospermia with normal concentration, agglutination, or abnormal postcoital test. ASA forms when the blood-testis barrier is disrupted. Cryptozoospermia and extremely severe oligozoospermia can both be treated with ICSI (intracytoplasmic sperm injection).',
    guideline: 'Dropkin 2024 — Testis; AUA Infertility Best Practice Statement (2011)',
  },

  // ── PENILE CANCER ─────────────────────────────────────────

  {
    id: 'd-penca-001', type: 'fib', topic: 'Penile Cancer',
    topicFull: 'Penile Cancer — Staging',
    question: 'Penile cancer staging: Ta = SCC not invaded deep to epidermis (~10% progress). T1a = through epidermis, no LVI/PNI, not HG. T1b = through epidermis + ___ of: LVI, PNI, or HG (G3 or sarcomatoid). T2 = corpus ___.',
    answer: '1 or more / Corpus spongiosum',
    explanation: 'T1b requires only 1 of: LVI, PNI, or high grade (G3/sarcomatoid) to be present. T2 = corpus spongiosum ± urethra. T3 = corpus cavernosum (including TA) ± urethra. T4 = adjacent structures. TIP chemotherapy for advanced/metastatic disease = Paclitaxel, Ifosfamide, Cisplatin.',
    guideline: 'Dropkin 2024 — Penis; NCCN Penile Cancer Guideline (2024)',
  },// ══════════════════════════════════════════════════════════
  //  PEDIATRIC UROLOGY — VUR
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-ped-001', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'VUR — Grading',
    question: 'VUR grading: I = ureteral reflux only → II = reflux into renal pelvis → III = mild dilation of ureter + pelvicalyceal system → IV = tortuous ureter, fornices blunted but ___ → V = severe dilation everywhere, loss of ___.',
    answer: 'Preserved / Fornices',
    explanation: 'Key distinction: Grade IV has blunted but PRESERVED fornices; Grade V has LOST fornices with severe dilation everywhere. Risk of VUR in offspring ~1/2; in siblings ~1/4. Renal scarring after UTI can be prevented with early initiation of antibiotics — the CUTIE study showed median fever duration before antibiotics was longer (72 vs. 48 hrs) in those who developed new scarring.',
    guideline: 'Dropkin 2024 — Pediatric; AUA VUR Guideline (2017); Testing Pearls',
  },

  {
    id: 'd-ped-002', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'VUR — CAP Indications',
    question: 'In children < 1 year old, continuous antibiotic prophylaxis (CAP) is required for: any VUR + prior febrile UTI, OR grade ___–___ VUR without prior fUTI. CAP is optional for grade I–II VUR without prior fUTI.',
    answer: 'III–V',
    explanation: 'AUA VUR Guideline: < 1 yr + (prior fUTI OR grade III-V) → CAP mandatory. < 1 yr + grade I-II + no fUTI → CAP optional. > 1 yr with VUR + BBD, recurrent fUTI, or renal cortical abnormalities → CAP + BBD treatment required (observation not recommended). Starting CAP after recent infection: don\'t use the same antibiotic just used (resistance risk).',
    guideline: 'Dropkin 2024 — Pediatric; AUA VUR Guideline (2017)',
  },

  {
    id: 'd-ped-003', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'VUR — RIVUR Trial',
    question: 'RIVUR (NEJM, 2014): Bactrim prophylaxis in children with VUR + prior UTIs reduced rUTIs (13 vs. 24%) but did ___ reduce renal scarring. Bactrim-resistant UTI was much more common in the prophylaxis group (___% vs. 19%).',
    answer: 'Did NOT / 63%',
    explanation: 'RIVUR (607 children, age 2–71 months, grade I–IV VUR): Bactrim prophylaxis for 2 years reduced rUTIs especially in children with prior febrile UTI or BBD, but renal scarring rates were not significantly different. The key takeaway: no intervention for VUR has been shown to improve or reduce renal scarring.',
    guideline: 'Dropkin 2024 — Pediatric; RIVUR (NEJM, 2014)',
  },

  {
    id: 'd-ped-004', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'VUR — Surgical Pearls',
    question: 'Bilateral ___ (intravesical/extravesical) ureteral reimplant risks bladder denervation and should NOT be performed. Bulking agents are more effective for ___ (lower/higher) grades of VUR.',
    answer: 'Extravesical / Lower grades',
    explanation: 'Robotic ureteral reimplant is typically extravesical; open can use either approach. Bilateral extravesical → risk of bilateral bladder denervation (urinary retention). Bulking agents (Deflux) are instilled into or beneath the ureteral orifice — effective for grade I–III but less so for higher grades where reimplant is preferred.',
    guideline: 'Dropkin 2024 — Pediatric; VUR Surgery Testing Pearls',
  },

  // ── PEDIATRIC — HYDRONEPHROSIS / UTD ──────────────────────

  {
    id: 'd-ped-005', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — UTD Classification',
    question: 'Antenatal UTD: A-1 (APRPD 4–7mm at 16–28 wks OR 7–10mm at 28+ wks) → first postnatal US at ___ weeks. A2-3 (APRPD > 7mm at 16–28 wks OR > 10mm at 28+ wks) → first postnatal US at ___ hours or prior to discharge.',
    answer: '4 weeks / 48 hours',
    explanation: 'The UTD classification (J Ped Urol, 2014) uses APRPD and SFU grading. P3 (high risk, SFU grade 4 + APRPD > 14mm + abnl parenchyma/bladder) → US at 1 month + VCUG + consider DMSA. A male with prenatal hydroureter + thickened bladder wall (even if amniotic fluid is normal) → RUS + VCUG prior to discharge to rule out PUV.',
    guideline: 'Dropkin 2024 — Pediatric; UTD Classification (J Ped Urol, 2014)',
  },

  {
    id: 'd-ped-006', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Oligohydramnios',
    question: 'Oligohydramnios (< ___ cc) is the biggest predictor of poor outcome in bilateral prenatal hydronephrosis and is highly associated with GU abnormalities. Earlier onset is associated with more severe symptoms.',
    answer: '500 cc',
    explanation: 'Oligohydramnios reflects inadequate fetal urine production — a major marker of renal compromise. Bilateral renal agenesis (Potter sequence) = oligohydramnios, pulmonary hypoplasia, limb deformities, characteristic facies. Prenatal intervention (vesico-amniotic shunting) may be considered for severe bilateral obstruction causing oligohydramnios.',
    guideline: 'Dropkin 2024 — Pediatric; Hydronephrosis Testing Pearls',
  },

  // ── PEDIATRIC — POSTERIOR URETHRAL VALVES ──────────────────

  {
    id: 'd-ped-007', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Posterior Urethral Valves — Initial Management',
    question: 'PUV management: place urethral catheter (~ ___ Fr) after birth → diagnose with VCUG → treat with endoscopic valve ablation vs. temporary vesicostomy. Vesicostomy prolapse avoided by stoma ~ ___ Fr at the bladder dome (Blocksom technique).',
    answer: '5 Fr / 24 Fr',
    explanation: 'VURD syndrome (Valves, Unilateral Reflux, renal Dysplasia) — these patients generally do WELL because the unilateral dysplastic kidney acts as a "pop-off" valve. After vesicostomy, UDS findings (e.g. low capacity) do NOT predict failure of vesicostomy closure — just close the bladder without augmentation based on UDS alone.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; PUV',
  },

  {
    id: 'd-ped-008', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Posterior Urethral Valves — Bladder Dysfunction by Age',
    question: 'PUV bladder dysfunction by age: infants = decreased capacity/compliance. Childhood/prepubertal = normal voiding with ___. Post-pubertal/adolescence = ___ failure + nephrogenic DI.',
    answer: 'Detrusor overactivity (DO) / Myogenic failure',
    explanation: '"Valve bladder syndrome": nephrogenic DI → progressive hydronephrosis, high UOP, poorly compliant bladder. The "safe zone" of urine capacity = the capacity associated with 15 mmHg of bladder pressure. Management: timed voiding, anticholinergics, alpha-blockers, CIC, overnight bladder drainage → augmentation rarely needed as bladder may become more compliant over time.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; PUV',
  },

  // ── PEDIATRIC — ENURESIS ────────────────────────────────────

  {
    id: 'd-ped-009', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Nocturnal Enuresis',
    question: 'Pediatric bladder capacity formula: (age + 2) × ___. When nocturnal voided volume > ___% of this capacity → ddAVP preferred. When < 70% → ___.',
    answer: '30 cc / 70% / Anticholinergics',
    explanation: 'Primary nocturnal enuresis: still 10% of healthy 10-year-olds. Start treatment at age ≥ 6. Bedwetting alarm is the BEST treatment but labor-intensive. If alarm fails → collect voiding diary → calculate nocturnal voided volume as % of (age+2)×30. ddAVP: risk of hyponatremia → check BMP, restrict fluids at bedtime, oral formulation preferred. Secondary enuresis (develops 6+ months after dry period) → psychological stress RF → evaluate for trauma/abuse.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; Enuresis',
  },

  // ── PEDIATRIC — ANATOMY / MISC ──────────────────────────────

  {
    id: 'd-ped-010', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Duplicated Ureter (Weigert-Meyer)',
    question: 'Weigert-Meyer rule for duplicated ureters (mnemonic UPIM): Upper pole → ___ (inferior and medial UO) → prone to obstruction (ectopic ureter, ureterocele). Lower pole → ___ (superior and lateral UO) → prone to VUR and UPJ-O.',
    answer: 'Inferior and medial / Superior and lateral',
    explanation: 'UPIM: Upper Pole Inferior Medial. The upper pole moiety drains lower and more medially — prone to obstruction (ectopic ureter below verumontanum in boys causing epididymitis; beyond bladder neck in girls causing continuous wetness). Lower pole drains higher and laterally — prone to reflux and UPJ-O. Ureterocele = MC cause of BOO in female infants.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; Duplicated Ureter',
  },

  {
    id: 'd-ped-011', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Tethered Cord',
    question: 'Tethered cord classic presentation: UUI + fecal soiling + foot/gait abnormality. Conus medullaris normally terminates at ___ in newborns and ___ in adults. MC UDS finding in tethered cord is detrusor ___.',
    answer: 'L2–L3 in newborns / L1–L2 in adults / Overactivity',
    explanation: 'Suspected tethered cord → spinal MRI (US if < 3 months old, as ossification hasn\'t rendered US inadequate). Absolute diagnosis: conus medullaris below L3 (suspected if below L2). Risk factors: early infancy + puberty (periods of rapid linear growth), spina bifida. Tethered cord can recur after release. Neurosurgical decompression is indicated.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; Tethered Cord',
  },

  {
    id: 'd-ped-012', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Ectopic Ureter',
    question: 'Constant urine leakage in a young girl suggests ectopic ureter draining below the external sphincter. The most sensitive diagnostic test is ___, which is more sensitive than RUS.',
    answer: 'MR Urogram (MRU)',
    explanation: 'In a girl who is constantly wet (true incontinence between normal voids), suspect an ectopic ureter from the upper pole of a duplicated system inserting beyond the external sphincter (bladder neck, vagina, or perineum). MR urogram is more sensitive than CT or ultrasound for identifying a small, poorly functioning upper pole moiety. RUS may be completely normal.',
    guideline: 'Dropkin 2024 — Pediatric; Ectopic Ureter Testing Pearl',
  },

  {
    id: 'd-ped-013', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — UTI Pearls',
    question: 'Bagged urine specimens in infants: if negative → > ___% chance no UTI. If positive → unreliable due to contamination. Bactrim is contraindicated in infants < ___ months due to risk of kernicterus and hematopoietic dysfunction.',
    answer: '99% / 6 months',
    explanation: 'A negative bagged specimen reliably rules out UTI. A positive bagged specimen must be confirmed by catheterization or suprapubic aspiration before treating. Spinning top urethra on VCUG → external sphincter overactivity → in young (< 5) child with OAB try antimuscarinics → consider biofeedback in older child after uroflow-CMG confirms DESD.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; UTI Related Testing Pearls',
  },

  {
    id: 'd-ped-014', type: 'fib', topic: 'Pediatric Urology',
    topicFull: 'Pediatric — Sacral Agenesis and Prune Belly',
    question: 'Sacral agenesis: congenital absence of 1+ sacral vertebrae associated with chromosome ___ deletion and maternal ___. Prune Belly (Eagle-Barrett) syndrome = abdominal wall laxity + ___ + urinary tract abnormalities.',
    answer: 'Chromosome 7 / Maternal DM (diabetes mellitus) / Cryptorchidism',
    explanation: 'Sacral agenesis: ALL have voiding dysfunction (DO with DESD vs. detrusor areflexia with denervated outlet). Prune Belly: abdominal wall laxity (from weak musculature) + bilateral cryptorchidism + wide bladder neck + bilateral megaureters. Treatment individualized: vesicostomy, CIC, orchiopexy, abdominal wall reconstruction.',
    guideline: 'Dropkin 2024 — Pediatric Bladder; Sacral Agenesis, Prune Belly',
  },

  // ══════════════════════════════════════════════════════════
  //  URETHRAL STRICTURE DISEASE
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-ureths-001', type: 'fib', topic: 'Urethral Stricture',
    topicFull: 'Urethral Stricture — First-Choice Graft Material',
    question: 'The first-choice material for substitution urethroplasty is ___ mucosa (buccal and lingual grafts are equivalent). Allograft, xenograft, synthetic materials, single-stage tubularized graft urethroplasty, and ___ skin should NOT be used.',
    answer: 'Oral (buccal or lingual) / Hair-bearing skin',
    explanation: 'Oral mucosa is first-choice because it is hairless, moist, resistant to infection, and has a rich submucosal vascular plexus enabling good graft take. Buccal mucosa harvest sites do NOT need primary closure — non-closure is non-inferior for pain and morbidity (Eur Urol, 2018). Lichen sclerosus: biopsy suspected LS and urethral cancer; do NOT use genital skin for reconstruction.',
    guideline: 'Dropkin 2024 — Urethra; AUA Urethral Stricture Guideline (2023)',
  },

  {
    id: 'd-ureths-002', type: 'fib', topic: 'Urethral Stricture',
    topicFull: 'Urethral Stricture — DVIU Success Rate',
    question: 'Per Santucci (J Urol, 2010): with each successive DVIU the time to recurrence is shorter. By DVIU #___, no patient was stricture-free at 10 months post-procedure.',
    answer: '5 (fifth DVIU)',
    explanation: 'DVIU success rate is much lower than previously reported. OPEN trial (Eur Urol, 2020): urethroplasty superior to DVIU for recurrent short bulbar strictures — recurrence HR 0.46 and re-intervention HR 0.52, both favoring urethroplasty. Foley catheter should be removed after 72 hours if DVIU is uncomplicated.',
    guideline: 'Dropkin 2024 — Urethra; Santucci J Urol 2010; OPEN Trial Eur Urol 2020',
  },

  {
    id: 'd-ureths-003', type: 'fib', topic: 'Urethral Stricture',
    topicFull: 'Urethral Stricture — ROBUST III Trial',
    question: 'ROBUST III (J Urol, 2022): ___ (Optilume®) balloon dilation was superior to standard dilation for recurrent anterior strictures ≤ 3 cm (anatomical success 75 vs. 27%). Patients should use condoms × ___ days and avoid pregnancy × ___ months post-procedure.',
    answer: 'Paclitaxel-coated / 30 days / 6 months',
    explanation: 'Paclitaxel is a fibroblast inhibitor that reduces scar formation after balloon dilation. ROBUST III (127 men, mean 3.6 prior treatments): freedom from additional intervention at 1 year: 83 vs. 22% (p < 0.001). Systemic absorption was low — not detectable in urine by 30 days or semen by 6 months.',
    guideline: 'Dropkin 2024 — Urethra; ROBUST III (J Urol, 2022)',
  },

  {
    id: 'd-ureths-004', type: 'fib', topic: 'Urethral Stricture',
    topicFull: 'Urethral Stricture — Graft Take Phases',
    question: 'Graft take phases: Imbibition (___ hours) → Inosculation (___–___ hours) → Revascularization (96 hours to ___ days).',
    answer: '0–48 hours / 48–96 hours / 7 days',
    explanation: 'Imbibition (0–48h): graft directly absorbs nutrients from host bed. Inosculation (48–96h): fine capillaries begin to align, initiating microcirculation. Revascularization (96h–7d): completed vascular network established. Wound healing: Hemostasis → Inflammation (D0–3-5) → Proliferation (D3-5 to 7) → Remodeling (D7–365); ~80% tensile strength by ~6 weeks.',
    guideline: 'Dropkin 2024 — Urethra; Graft Take and Wound Healing',
  },

  {
    id: 'd-ureths-005', type: 'fib', topic: 'Urethral Stricture',
    topicFull: 'Urethral Stricture — PFUI Management',
    question: 'Pelvic fracture urethral injury (PFUI): delay definitive repair until major injuries are stabilized and patient can safely be positioned in ___. Avoid ___ endoscopic stricture management after PFUI.',
    answer: 'Dorsal lithotomy / Delayed',
    explanation: 'Operative planning for PFUI requires RUG + VCUG and/or RUG + antegrade cystoscopy — critical to confirm the urethra is patent proximal to the injury before planning repair. Delayed endoscopic management (DVIU) after PFUI has poor outcomes and should be avoided. Perineal urethrostomy is a long-term option for patients with long penile or panurethral strictures who are poor urethroplasty candidates.',
    guideline: 'Dropkin 2024 — Urethra; AUA Urethral Stricture Guideline (2023)',
  },

  // ══════════════════════════════════════════════════════════
  //  INTERSTITIAL CYSTITIS / BLADDER PAIN SYNDROME
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-ic-001', type: 'fib', topic: 'IC/BPS',
    topicFull: 'IC/BPS — Definition and FDA-Approved Treatments',
    question: 'IC/BPS = unpleasant sensation related to the bladder + LUTS of more than ___ weeks, in the absence of infection or other identifiable causes. The only two FDA-approved therapies are intravesical ___ and PO ___ (Elmiron®).',
    answer: '6 weeks / DMSO (hold 20 minutes) / Pentosan polysulfate',
    explanation: 'Pentosan polysulfate (Elmiron): "coats" the bladder mucosa, low benefits in clinical trials, but carries real risk of serious pigmentary maculopathy — contraindicated in patients with macular degeneration. K+ sensitivity testing is no longer used (poor sensitivity/specificity). The 2022 guideline eliminated "lines" of therapy — treatment should be individualized.',
    guideline: 'Dropkin 2024 — Bladder; AUA IC/BPS Guideline (2022)',
  },

  {
    id: 'd-ic-002', type: 'fib', topic: 'IC/BPS',
    topicFull: 'IC/BPS — Contraindicated Treatments',
    question: 'Four contraindicated treatments in IC/BPS: long-term PO ___, intravesical ___, high-pressure + long-duration hydrodistention, and systemic (oral) long-term ___.',
    answer: 'Antibiotics / BCG / Glucocorticoids',
    explanation: 'Physical therapy should be offered (if trained clinicians available) but AVOID pelvic floor strengthening (Kegel) exercises in IC/BPS — these can worsen pelvic floor hypertonia. Hunner lesion IC: initial treatment CAN be surgical (fulguration or triamcinolone injection); cyclosporine A is an option for Hunner lesion patients. SNM is FDA-approved for IC/BPS.',
    guideline: 'Dropkin 2024 — Bladder; AUA IC/BPS Guideline (2022)',
  },

  {
    id: 'd-ic-003', type: 'fib', topic: 'IC/BPS',
    topicFull: 'IC/BPS — Ketamine Cystitis',
    question: 'Ketamine cystitis shares similar symptomatology, cystoscopy, and biopsy findings with non-Hunner\'s IC and is distinguished by ___. Severe fibrosis often leads to ___, though intravesical therapies can be tried first.',
    answer: 'Patient history (recreational ketamine use) / Cystectomy',
    explanation: 'Ketamine (dissociative anesthetic, common recreational drug) causes severe bladder fibrosis — a contracted, fibrotic bladder that may ultimately require cystectomy or urinary diversion. First try intravesical chondroitin sulfate or hyaluronic acid. Cessation of ketamine use is essential but may not fully reverse established fibrosis.',
    guideline: 'Dropkin 2024 — Bladder; IC/BPS Testing Pearls',
  },

  // ══════════════════════════════════════════════════════════
  //  UTI PEARLS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-uti-001', type: 'fib', topic: 'UTI',
    topicFull: 'UTI — Intravaginal Estrogen for rUTI',
    question: 'In postmenopausal women with recurrent UTIs, intravaginal estrogen is very effective because it ↑ ___ concentrations and ↓ vaginal pH → ↓ UTIs. Unlike systemic estrogen, intravaginal estrogen ___ (can/cannot) be used in women with a history of breast cancer.',
    answer: 'Lactobacillus / Can',
    explanation: 'Intravaginal estrogen restores the premenopausal vaginal flora (lactobacillus dominant, acidic pH) that protects against uropathogens. It has minimal systemic absorption and is NOT contraindicated in breast cancer survivors. Low-dose prophylactic antibiotics are an alternative. Lactobacillus probiotics can be tried but evidence is lacking.',
    guideline: 'Dropkin 2024 — Bladder; rUTI Testing Pearls',
  },

  {
    id: 'd-uti-002', type: 'fib', topic: 'UTI',
    topicFull: 'UTI — Key Pearls',
    question: 'Pseudomonas produces a ___ (positive/negative) nitrite on UA despite being gram-negative, because it lacks the machinery to convert nitrates to nitrites. The most common bacteria in emphysematous cystitis are ___ and Klebsiella.',
    answer: 'Negative nitrite / E. coli',
    explanation: 'Emphysematous cystitis: fermentation of glucose → gas formation in bladder wall — more common in diabetics. XGP kidney: E. coli + Proteus most common → treatment is nephrectomy. After starting antibiotics, urine is sterile within hours even though fever and flank pain may continue for days. Spermicide use IS a RF for rUTI (alters vaginal flora); tampon use, parity, hot tub use are NOT RFs.',
    guideline: 'Dropkin 2024 — Bladder; UTI Testing Pearls',
  },

  {
    id: 'd-uti-003', type: 'fib', topic: 'UTI',
    topicFull: 'UTI — Uncomplicated vs. Recurrent Treatment',
    question: 'Uncomplicated UTI → ___ days of Bactrim (quinolones reserved for rUTI or Bactrim resistance). For rUTI in young women → trial of cranberry supplement or nightly/post-coital prophylaxis with Bactrim, Macrobid, or cephalexin for ___ months.',
    answer: '3 days / 6 months',
    explanation: 'Fluoroquinolones are reserved for resistant bacteria on culture — not first-line for uncomplicated UTI due to resistance concerns. Complicated UTI in an older man → higher risk of obstructive/malignant etiology → warrants urologic workup (CTU + cystoscopy) in delayed fashion after treatment/resolution. Asymptomatic candiduria in a neonate → IV fluconazole to decrease risk of candidemia.',
    guideline: 'Dropkin 2024 — Bladder; UTI Testing Pearls; AUA/CUA/SUFU rUTI Guideline (2022)',
  },

  // ══════════════════════════════════════════════════════════
  //  NEUROGENIC BLADDER / UDS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-neuro-003', type: 'fib', topic: 'Neurogenic Bladder',
    topicFull: 'Neurogenic Bladder — UDS Findings by Lesion Level',
    question: 'SCI at T6–8 to S2: causes DO + DESD but ___ autonomic dysreflexia and ___ intact bladder sensation. Injury below S2: ___ DO + detrusor areflexia.',
    answer: 'No autonomic dysreflexia / No intact sensation / No DO',
    explanation: 'UDS by level: CVA/Parkinson\'s → DO, no DESD, intact sensation. Pons to T6 → DO + DESD + DISD + autonomic dysreflexia + intact sensation. T6-8 to S2 → DO + DESD, NO dysreflexia, NO intact sensation. Below S2 → NO DO, areflexia, may have fixed EUS tone or open/contracted IS. MS → DO, maybe DESD, intact sensation. Multiple System Atrophy → DO, EUS denervation, open bladder neck at rest.',
    guideline: 'Dropkin 2024 — Bladder; Neurologic Insults and UDS Findings Table',
  },

  {
    id: 'd-neuro-004', type: 'fib', topic: 'Neurogenic Bladder',
    topicFull: 'Neurogenic Bladder — SCI Bladder Compliance',
    question: 'In SCI patients managed with CIC, bladder compliance < ___ mL/cmH₂O is the most predictive finding for new hydronephrosis development.',
    answer: '10 mL/cmH₂O',
    explanation: 'Poor bladder compliance in SCI → high intravesical pressures → impaired upper tract drainage → hydronephrosis → renal deterioration. Management: anticholinergics, beta-3 agonists, intravesical Botox. Renal stones are 8× more likely after SCI — remove all nidi for infection and maximize urinary drainage. Prophylactic antibiotics should be avoided in chronically catheterized SCI patients.',
    guideline: 'Dropkin 2024 — Bladder; SCI Neurogenic Bladder Testing Pearls',
  },

  {
    id: 'd-neuro-005', type: 'fib', topic: 'Neurogenic Bladder',
    topicFull: 'Sacral Neuromodulation — Nerve Roots',
    question: 'Correct SNM placement at S3 produces: great toe ___ AND ___ (anal bellows = rhythmic pelvic floor contractions). S2 stimulation produces foot plantar flexion + internal rotation.',
    answer: 'Plantarflexion / Anal bellows',
    explanation: 'S3 is the target for SNM because it produces anal bellows without lower extremity movement. Tibial nerve (L4-S3) stimulation: needle 3–4 cm cephalad to medial malleolus → correct placement: great toe plantarflexion + tickling sensation in sole of foot. SNM is FDA-approved for: non-obstructive retention, UUI, urgency/frequency, chronic fecal incontinence, IC/BPS. NOT FDA-approved for neurogenic bladder.',
    guideline: 'Dropkin 2024 — Bladder; SNM Testing Pearls',
  },

  {
    id: 'd-neuro-006', type: 'fib', topic: 'Neurogenic Bladder',
    topicFull: 'Sacral Neuromodulation — Troubleshooting',
    question: 'Elevated impedance in ___ electrodes of an SNM device suggests the lead needs replacement. Elevated impedance in ___ (one/all) electrode but others functioning normally → reprogram the device first.',
    answer: 'All electrodes / One electrode',
    explanation: 'SNM troubleshooting: recurrent voiding symptoms after prior success → interrogate device. If one electrode has elevated impedance but others are normal → reprogram first (electrode reassignment). If all electrodes have elevated impedance → lead replacement likely needed. Device infection: remove BOTH lead and generator; re-insertion can be attempted later. Contemporary SNM devices (Axonics®, InterStim II®) are MR Conditional for 1.5T and 3T full-body scans.',
    guideline: 'Dropkin 2024 — Bladder; SNM Testing Pearls',
  },

  // ══════════════════════════════════════════════════════════
  //  PERIOPERATIVE MANAGEMENT
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-periop-003', type: 'fib', topic: 'Perioperative Management',
    topicFull: 'Perioperative — Antimicrobial Prophylaxis Principles',
    question: 'Per AUA Best Practice Statement, routine cystoscopy and urodynamic studies ___ (do/do not) require antimicrobial prophylaxis in healthy adults without infectious signs/symptoms. Single-dose AMP is appropriate for ___ uncomplicated urologic cases.',
    answer: 'Do NOT / The majority of',
    explanation: 'AMP should only be used where medically indicated — systemic antimicrobial use is the primary driver of resistance in both the index patient and community. Class IV wounds are by definition infected → empiric AMP until cultures inform targeted therapy. Transrectal prostate biopsy = Class III/contaminated → requires AMP. Single-dose is preferred; prolonged post-urethroplasty antibiotics were shown to be unnecessary (J Urol, 2022).',
    guideline: 'Dropkin 2024 — Perioperative; AUA Antimicrobial Prophylaxis Best Practice Statement (2019)',
  },

  {
    id: 'd-periop-004', type: 'fib', topic: 'Perioperative Management',
    topicFull: 'Perioperative — Chlorhexidine vs. Povidone-Iodine',
    question: 'Chlorhexidine-alcohol is significantly more protective than povidone-iodine for ___ and ___ incisional infections, but NOT for organ-space infections (NEJM, 2010). Chlorhexidine mechanism: cation binds to ___ charged bacterial cell wall → bactericidal at high concentrations.',
    answer: 'Superficial (4 vs. 9%) / Deep (1 vs. 3%) / Negatively',
    explanation: 'Chlorhexidine-alcohol (NEJM, 2010, 800 patients): significantly fewer superficial (4 vs. 9%, p=0.008) and deep (1 vs. 3%, p=0.05) incisional SSIs vs. povidone-iodine. Isopropyl alcohol: membrane damage and protein degeneration, primarily Gram(+). Povidone-iodine: oxidation of lipids + salt formation with proteins, broad spectrum.',
    guideline: 'Dropkin 2024 — Perioperative; Chlorhexidine vs. Povidone-Iodine (NEJM, 2010)',
  },

  {
    id: 'd-periop-005', type: 'fib', topic: 'Perioperative Management',
    topicFull: 'Perioperative — Infective Endocarditis Prophylaxis',
    question: 'Per AHA guideline: antimicrobial prophylaxis solely to prevent infective endocarditis is ___ recommended for GU procedures. If a high IE-risk patient has enterococcal UTI/colonization → "may be reasonable" to give ___ or ampicillin prior to elective procedure.',
    answer: 'NOT / Amoxicillin',
    explanation: 'IE is much more likely from random bacteremias of daily life than from GU procedures. AMP is unlikely to prevent IE and potential harms outweigh benefits. The only time AMP is reasonable is for high-risk patients undergoing DENTAL procedures. AUA does NOT recommend prophylactic antibiotics to prevent bacterial endocarditis associated with UDS or other GU procedures presuming negative UA and sterile technique.',
    guideline: 'Dropkin 2024 — Perioperative; AHA IE Prevention Guideline (2007)',
  },

  {
    id: 'd-periop-006', type: 'fib', topic: 'Perioperative Management',
    topicFull: 'Perioperative — Inhibizone IPP',
    question: 'Inhibizone® (rifampin + minocycline) antibiotic-impregnated IPP reduces infection rate in virgin IPP insertions from ___% to ___% at 180 days (J Urol, 2004).',
    answer: '1.6% to 0.7%',
    explanation: 'Carson retrospective cohort (J Urol, 2004): 2261 IPPs with Inhibizone vs. 1944 without → infection rate 0.7 vs. 1.6% (p < 0.01). Within each group, DM, Peyronie\'s, and SCI were associated with higher infection rates. Antibiotic-impregnated prostheses are now standard of care for primary IPP implantation.',
    guideline: 'Dropkin 2024 — Perioperative; Inhibizone (J Urol, 2004)',
  },// ══════════════════════════════════════════════════════════
  //  UROTRAUMA — RENAL
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-trauma-001', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Renal Trauma — AAST Grading',
    question: 'AAST Renal Trauma: Grade II = < ___ cm laceration without urinary extravasation. Grade III = > ___ cm laceration. Grade IV = laceration through parenchyma into collecting system OR main renal artery/vein with ___ hemorrhage.',
    answer: '1 cm / 1 cm / Contained hemorrhage',
    explanation: 'Key distinction: Grade II vs. III = 1 cm. Grade V = shattered kidney OR renal hilum avulsion. Imaging: CTAP with contrast (~30 sec delay) AND delayed (~10 min) images for any suspected renal injury. CT gold standard for radiologic staging. Stable patients → prefer non-invasive management regardless of grade.',
    guideline: 'Dropkin 2024 — Trauma; AAST Renal Trauma Classification (J Am Coll Surg, 2008)',
  },

  {
    id: 'd-trauma-002', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Renal Trauma — Intervention Threshold',
    question: 'Hemodynamically unstable patients with renal trauma who fail resuscitation AND have a perirenal hematoma > ___ cm and/or vascular contrast extravasation with deep/complex laceration (AAST Grade ___–___) → immediate surgery or angioembolization.',
    answer: '4 cm / Grade 3–5',
    explanation: 'Stable patients with any grade renal injury (including urinary extravasation) can initially be observed. Follow-up CT at ≥ 48 hours is needed for Grade IV–V or if clinical complications arise (fever, worsening flank pain, ongoing blood loss, abdominal distension). Ureteral stent ± PCN ± percutaneous drain: indicated for enlarging urinoma, fever, increasing pain, ileus, fistula, or infection.',
    guideline: 'Dropkin 2024 — Trauma; AUA Urotrauma Guideline (2020)',
  },

  {
    id: 'd-trauma-003', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Renal Trauma — Pediatric Thresholds',
    question: 'In pediatric blunt renal trauma, the threshold to intervene is > ___ RBC/hpf OR a deceleration injury. For penetrating pediatric renal trauma, the intervention threshold is > ___ RBC/hpf.',
    answer: '50 RBC/hpf (blunt) / 5 RBC/hpf (penetrating)',
    explanation: '25-year pediatric renal injury experience (J Urol, 2004): 374 pediatric renal injuries → 90% blunt (2% exploration rate), 10% penetrating (76% exploration rate). 99% renal preservation rate overall — observation and renal preservation are prioritized whenever possible. Children\'s kidneys are more susceptible to injury due to less retroperitoneal fat and relatively larger kidney size.',
    guideline: 'Dropkin 2024 — Trauma; Pediatric Renal Injuries (J Urol, 2004)',
  },

  {
    id: 'd-trauma-004', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Renal Trauma — Predictors of Bleeding',
    question: 'Predictors of persistent bleeding requiring intervention in renal trauma include: depth of parenchymal injury, presence of ___, Grade III–IV injury, medial hematoma, and hematoma > ___ cm thick.',
    answer: 'Arterial blush (intravascular contrast extravasation) / 3.5 cm',
    explanation: 'MiGUTS nomogram (J Trauma, 2019): identified factors predicting need for bleeding intervention — shock (SBP < 90), concomitant injuries, penetrating mechanism, intravascular contrast extravasation, hematoma extension (para-renal > peri-renal > none/subcapsular), and hematoma rim distance. Stable patient with flank pain + microhematuria alone → no imaging needed (low risk).',
    guideline: 'Dropkin 2024 — Trauma; MiGUTS (J Trauma, 2019)',
  },

  // ── URETERAL TRAUMA ────────────────────────────────────────

  {
    id: 'd-trauma-005', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Ureteral Trauma — Gynecologic Anatomy',
    question: 'The MC site of ureteral injury during hysterectomy is under the ___ (which houses the uterine artery inferiorly and round ligament superiorly). The ureter crosses ___ over the common iliac bifurcation at the pelvic brim.',
    answer: 'Broad Ligament / Anteriorly',
    explanation: 'Female pelvic anatomy pearls: ureter crosses anteriorly over the common iliac bifurcation at the pelvic brim → runs under the Broad Ligament → enters bladder medial to the medial umbilical ligament (remnant of umbilical artery). The round ligament is the homologue of the gubernaculum. Ovarian arteries come off aorta below renal arteries. Left ovarian vein → left renal vein; right ovarian vein → IVC.',
    guideline: 'Dropkin 2024 — Trauma; Female Pelvic Anatomy Testing Pearls',
  },

  {
    id: 'd-trauma-006', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Ureteral Trauma — Management by Location',
    question: 'Ureteral injuries ___ (proximal/distal) to the iliac vessels → primary repair over stent when possible. Injuries ___ to the iliac vessels → ureteral reimplant or primary repair over stent.',
    answer: 'Proximal / Distal',
    explanation: 'Stable patient at laparotomy: repair lacerations at time of surgery; traumatic contusion → stenting vs. resection and primary repair depending on viability. Unstable patient → temporary drainage ± ureteral ligation (if HDUS) followed by PCN → delayed definitive management. Post-op incomplete injury → attempt retrograde stent → if fails → PCN + delayed repair.',
    guideline: 'Dropkin 2024 — Trauma; AUA Urotrauma Guideline (2020)',
  },

  {
    id: 'd-trauma-007', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Ureteral Trauma — Arterioureteral Fistula',
    question: 'Suspect arterioureteral fistula (AUF) if a patient bleeds significantly from a ureteral orifice after a long-term stent exchange. Initial management: ___ ± endovascular graft if stable. AUF is associated with chronic indwelling stent → endovascular repair is ___ morbid and ___ effective as open repair.',
    answer: 'Angiography / Less morbid / As effective',
    explanation: 'AUF is an uncommon but life-threatening complication of long-term ureteral stenting (often in patients with prior pelvic radiation, vascular surgery, or malignancy). Attempt to tamponade bleed with ureteral dilation balloon while patient is transported to IR. Surgical exploration if unstable or if endovascular attempts fail.',
    guideline: 'Dropkin 2024 — Trauma; AUF Testing Pearls',
  },

  {
    id: 'd-trauma-008', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Ureteral — Retroperitoneal Fibrosis',
    question: 'Retroperitoneal fibrosis (Ormond\'s disease) is treated with ureteral stent(s) → ___ or tamoxifen monotherapy as first-line → ___ (e.g., mycophenolate mofetil) in conjunction with steroids as salvage → ureterolysis ± omental wrapping if medical management fails.',
    answer: 'Steroids / Immunomodulators',
    explanation: 'RPF can be idiopathic or secondary to malignancy, medication (methysergide), aortic aneurysm, infection, or chemical exposure. It can involve the collecting system and present without hydronephrosis. Peri-aortic fibrosis triggered by aortic aneurysm → regression occurs slowly after aneurysm exclusion (open or endovascular repair).',
    guideline: 'Dropkin 2024 — Trauma; Retroperitoneal Fibrosis',
  },

  // ── BLADDER TRAUMA ─────────────────────────────────────────

  {
    id: 'd-trauma-009', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Bladder Trauma — Cystogram Protocol',
    question: 'Retrograde cystography for suspected bladder injury requires instillation of ___ mL of contrast — lower volumes miss small injuries. Augmented bladder rupture: static cystogram is negative in ___% of cases → CT cystogram preferred.',
    answer: '300 mL / 50%',
    explanation: 'Indications: GH + pelvic fracture or mechanism concerning for bladder injury → retrograde cystography (static plain film or CT cystogram). CT cystogram with 300 mL of contrast preferred for augmented bladder (to dislodge bowel/omentum from perforation). Bladder neck injuries are rare but devastating for continence — high index of suspicion required as many are not detected on CT cystogram.',
    guideline: 'Dropkin 2024 — Trauma; Bladder Trauma Testing Pearls',
  },

  {
    id: 'd-trauma-010', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Bladder Trauma — Management',
    question: 'All ___ bladder ruptures → surgical repair. Uncomplicated ___ bladder injury → catheter drainage alone. GSW involving bladder → always ___ and repair, even if extraperitoneal; rule out rectal injury.',
    answer: 'Intraperitoneal / Extraperitoneal / Explore',
    explanation: 'Complicated extraperitoneal injuries requiring surgical repair: concomitant bladder neck injury, rectal injury (also needs diverting colostomy), bone fragments in bladder, clot retention, or ongoing extravasation despite catheter. Intraperitoneal perforation during TURBT → exploratory laparotomy and cystorrhaphy. VVF repair with omental flap is based off the RIGHT gastroepiploic artery.',
    guideline: 'Dropkin 2024 — Trauma; AUA Urotrauma Guideline (2020)',
  },

  // ── URETHRAL TRAUMA ────────────────────────────────────────

  {
    id: 'd-trauma-011', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Urethral Trauma — Initial Assessment',
    question: 'Pelvic trauma with blood at the urethral meatus in a man → perform ___ before any catheter attempt. Initial management for most PFUI cases is ___ (SPT/urethral catheter) followed by delayed urethroplasty.',
    answer: 'RUG (retrograde urethrogram) / Suprapubic tube (SPT)',
    explanation: 'SPT is preferred initial management for most PFUI. A HDS patient with PFUI may have primary endoscopic realignment, but prolonged attempts should be avoided — place SPT → delayed urethroplasty. EUR vs. SPT trial (J Trauma, 2022): rates of urethral obstruction (97 vs. 94%) and urethroplasty (87 vs. 91%) were similar, supporting SPT + delayed repair as the preferred strategy.',
    guideline: 'Dropkin 2024 — Trauma; AUA Urotrauma Guideline (2020)',
  },

  {
    id: 'd-trauma-012', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Urethral Trauma — AAST Grades',
    question: 'AAST Urethral Injury Scale: Grade I = contusion (blood at meatus, normal RUG). Grade III = ___ disruption (extravasation on RUG, some contrast makes it into bladder). Grade V = complete transection with > ___ cm separation OR extension into prostate/vagina.',
    answer: 'Partial / 2 cm',
    explanation: 'Grade I: blood at meatus, normal RUG → no treatment. Grade II: stretch injury, elongated urethra without extravasation → conservative management. Grade III-IV: partial or complete disruption → endoscopic realignment or SPT. Grade V: complete transection > 2 cm or proximal extension → SPT + delayed urethroplasty. Post-PFUI with 1 cm bulbomembranous stricture → EPA (excision and primary anastomosis) best — NOT DVIU (traumatic etiology, low success).',
    guideline: 'Dropkin 2024 — Trauma; AAST Urethral Injury Scale',
  },

  {
    id: 'd-trauma-013', type: 'fib', topic: 'Urotrauma',
    topicFull: 'Genital Trauma — Penile Fracture',
    question: 'Penile fracture classic triad: penile ___ (eggplant deformity), ___ sound during intercourse/masturbation, and immediate detumescence. Management: ___.',
    answer: 'Ecchymosis / Cracking or snapping / Prompt surgical exploration and repair',
    explanation: 'Equivocal signs/symptoms → penile US; if still uncertain → MRI or surgical exploration. Any penile fracture or penetrating trauma + blood at meatus, GH, or inability to void → evaluate for concomitant urethral injury (RUG or cystoscopy). Traumatic penile amputation: wrap in saline-soaked gauze + plastic bag on ice → warm ischemia time 6 hours, cold ischemia 16 hours → replantation.',
    guideline: 'Dropkin 2024 — Trauma; AUA Urotrauma Guideline (2020)',
  },

  // ══════════════════════════════════════════════════════════
  //  UPPER TRACT UROTHELIAL CARCINOMA (UTUC)
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-utuc-001', type: 'fib', topic: 'UTUC',
    topicFull: 'Upper Tract UC — POUT Trial',
    question: 'POUT trial (Lancet Oncol, 2020): adjuvant gemcitabine/cisplatin initiated within ___ days of nephroureterectomy (NUx) for pT2-T4 or pN+ UTUC improved 3-yr event-free survival from ___% to ___% (HR 0.45).',
    answer: '90 days / 46% to 71%',
    explanation: 'POUT (261 patients, MO UTUC): surveillance vs. adjuvant gem/cis → DFS HR 0.45 (p = 0.0001), 3-yr event-free 71 vs. 46%. Grade 3 AEs significantly more common with chemo (44 vs. 4%). This established adjuvant platinum-based chemotherapy as standard after NUx for advanced UTUC. Note: offer adjuvant nivolumab if patient had NAC but is still pT2-4 or pN+ at surgery.',
    guideline: 'Dropkin 2024 — UTUC; POUT Trial (Lancet Oncol, 2020)',
  },

  {
    id: 'd-utuc-002', type: 'fib', topic: 'UTUC',
    topicFull: 'Upper Tract UC — OLYMPUS Trial / Jelmyto',
    question: 'OLYMPUS trial (Lancet Oncol, 2020): MMC-containing reverse thermal gel (Jelmyto®/UGN-101) instilled into the renal pelvis weekly × 6 achieved ___% complete response in LG UTUC, but was associated with ureteral stenosis in ___% of patients.',
    answer: '60% complete response / 44% ureteral stenosis',
    explanation: 'Jelmyto (UGN-101) is a mitomycin-containing reverse thermal gel (liquid at room temp, gels at body temp) that allows sustained contact with upper tract mucosa. Of 41 complete responders, 23 maintained CR at 12 months with monthly maintenance. Ureteral stenosis is the major limiting side effect — must counsel patients. This is the first FDA-approved topical therapy for LG UTUC.',
    guideline: 'Dropkin 2024 — UTUC; OLYMPUS Trial (Lancet Oncol, 2020)',
  },

  {
    id: 'd-utuc-003', type: 'fib', topic: 'UTUC',
    topicFull: 'Upper Tract UC — Key Pearls',
    question: 'UTUC diagnosed before age ___ → genetic counseling/testing for Lynch syndrome (HNPCC). ___ nephropathy (from aristolochic acid consumption) increases risk of UTUC and ESRD.',
    answer: '55 years / Balkan nephropathy',
    explanation: 'Lynch syndrome (HNPCC): autosomal dominant mismatch repair gene mutations → elevated lifetime risk of UTUC, CRC, endometrial, ovarian, and other cancers. Balkan nephropathy is endemic in parts of Eastern Europe. Aristolochic acid is found in some herbal medicines. At NUx, always remove the entire distal ureter including the intramural tunnel and UO (to prevent local recurrence in the ureteral stump).',
    guideline: 'Dropkin 2024 — UTUC; Testing Pearls',
  },

  {
    id: 'd-utuc-004', type: 'fib', topic: 'UTUC',
    topicFull: 'Upper Tract UC — LND Templates',
    question: 'UTUC LND templates by tumor location: pyelocaliceal tumors → ipsilateral great vessel LNs from hilum to ___. Distal ½ of ureter → ipsilateral ___ LNs.',
    answer: 'IMA (inferior mesenteric artery) / Pelvic LNs',
    explanation: 'Proximal 2/3 of ureter → same as pyelocaliceal (hilum to aortic bifurcation). Distal ½ → ipsilateral pelvic LNs. Single-dose MMC after NUx reduces bladder recurrence in patients with no prior history of bladder cancer. Upper tract CIS with low nephron reserve → PCN + antegrade BCG more effective than stent + bladder BCG instillation.',
    guideline: 'Dropkin 2024 — UTUC; AUA/SUO UTUC Guideline (2023)',
  },

  // ══════════════════════════════════════════════════════════
  //  STRESS URINARY INCONTINENCE — KEY TRIALS
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-sui-001', type: 'fib', topic: 'Urinary Incontinence',
    topicFull: 'SUI — SISTEr Trial',
    question: 'SISTEr trial (NEJM, 2007): fascial pubovaginal sling vs. Burch colposuspension for SUI → fascial sling slightly more likely to achieve continence (___ vs. 25%) and satisfaction (___ vs. 73%) at 5 years, but associated with more post-op UTI, voiding difficulty, and UUI.',
    answer: '30% continence / 83% satisfaction',
    explanation: 'SISTEr (655 women): fascial sling modestly superior for long-term continence and satisfaction, but at cost of higher rates of UTI, voiding dysfunction, and UUI in the sling group. Both had similar AE rates (~10%) at 5 years. This established fascial sling as the preferred surgical option over Burch for women with SUI.',
    guideline: 'Dropkin 2024 — Bladder; SISTEr Trial (NEJM, 2007)',
  },

  {
    id: 'd-sui-002', type: 'fib', topic: 'Urinary Incontinence',
    topicFull: 'SUI — TOMUS Trial',
    question: 'TOMUS trial (NEJM, 2010): retropubic (RP) vs. transobturator (TO) mid-urethral slings — objective efficacy at 12 months was ___. TO slings → more ___ complications (9 vs. 4%). RP slings → more ___ dysfunction (2.7 vs. 0%).',
    answer: 'Similar / Neurologic complications / Bladder dysfunction (high PVR, UTI, erosion)',
    explanation: 'At 5 years, RP slings had higher success (51 vs. 43%) though statistical equivalence was not demonstrated. Satisfaction was similar (79 vs. 85%). Mesh erosions were rare in both groups. The different complication profiles guide selection: TO preferred when concerned about bladder injury; RP preferred for long-term efficacy. Note: No VALUE trial (NEJM, 2012) showed UDS had NO effect on treatment selection or outcome for uncomplicated SUI.',
    guideline: 'Dropkin 2024 — Bladder; TOMUS Trial (NEJM, 2010)',
  },

  {
    id: 'd-sui-003', type: 'fib', topic: 'Urinary Incontinence',
    topicFull: 'SUI — Weight Loss and Incontinence',
    question: 'PRIDE trial (NEJM, 2009): a 6-month weight loss program achieving ___% body mass reduction in overweight/obese women led to a ___% reduction in weekly incontinence episodes (significant for SUI, not significant for UUI).',
    answer: '8% body mass reduction / 47% reduction in incontinence episodes',
    explanation: 'PRIDE (338 women): intervention group lost 8% body mass vs. 2% control → 47% reduction in weekly incontinence events (p < 0.05 for SUI). This is important counseling for overweight/obese women with SUI — weight loss is a meaningful non-surgical intervention that should be recommended. OPUS trial (NEJM, 2012): adding MUS at time of anterior prolapse repair improved continence but increased AEs.',
    guideline: 'Dropkin 2024 — Bladder; PRIDE Trial (NEJM, 2009)',
  },

  // ══════════════════════════════════════════════════════════
  //  FEMALE SEXUAL DYSFUNCTION
  // ══════════════════════════════════════════════════════════

  {
    id: 'd-fsd-001', type: 'fib', topic: 'Sexual Dysfunction',
    topicFull: 'Female Sexual Dysfunction — HSDD Treatment',
    question: 'Two FDA-approved treatments for hypoactive sexual desire disorder (HSDD) in premenopausal women: ___ (Addyi®; daily oral serotonin modulator) and ___ (Vyleesi®; on-demand SC melanocortin receptor agonist). Both are contraindicated with ___.',
    answer: 'Flibanserin / Bremelanotide / Alcohol (flibanserin) and uncontrolled HTN (bremelanotide)',
    explanation: 'Flibanserin (DAISY, VIOLET, BEGONIA, SNOWDROP trials): daily oral, works on 5-HT1A/2A receptors and D4 receptors → modest increase in satisfying sexual events. Major SE: somnolence, dizziness — contraindicated with alcohol and CYP3A4 inhibitors. Bremelanotide: on-demand SC injection, α-MSH analogue (melanocortin receptor agonist) → causes nausea in ~40%. Contraindicated in uncontrolled HTN.',
    guideline: 'Dropkin 2024 — Testis; Female Sexual Dysfunction Trials',
  },
];