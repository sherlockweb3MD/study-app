export interface PastQuestion {
  course: string;
  question_number: number;
  lecturer: string;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
}

export const newPastQuestions: PastQuestion[] = [
  {
    course: "Pharmacology",
    question_number: 21,
    lecturer: "Dr. Ekeke",
    topic_area: "Toxicology & Hematinics",
    question_text: `a) Discuss briefly the 3 major areas of toxicology (descriptive, mechanistic, regulatory). (5 marks)
b) Define anaemia and list 6 symptoms of anaemia. (5 marks)
c) Write short notes on acute iron toxicity (causes, features, treatment). (5 marks)
d) Write short notes on the chemistry, pharmacokinetics, and pharmacodynamics of vitamin B12. (5 marks)`,
    model_answer: `17a) Three major areas of toxicology

Descriptive toxicology: Performs toxicity tests to evaluate risk to humans and environment
Mechanistic toxicology: Determines how chemicals exert deleterious effects → essential for risk prediction and rational treatment
Regulatory toxicology: Judges whether a drug/chemical has low enough risk to justify its intended use

17b) Anaemia – definition and 6 symptoms

Definition: Clinical condition with decline in RBC count or haemoglobin concentration from excessive blood loss, haemolysis, or ineffective RBC formation

Symptoms (6):
• Fatigue
• Dizziness
• Headache
• Fainting
• Pale skin/conjunctivae
• Palpitations
• Exertional dyspnoea

17c) Acute iron toxicity – causes, features, treatment

Causes: Accidental ingestion of iron tablets (young children)

Features: Necrotising gastroenteritis with vomiting, abdominal pain, bloody diarrhoea → shock, lethargy, dyspnoea, metabolic acidosis, death

Treatment:
• Whole bowel irrigation
• Deferoxamine (IV chelator)
• Supportive therapy (GI bleeding, acidosis, shock)

17d) Vitamin B12 – chemistry, pharmacokinetics, pharmacodynamics

Chemistry: Cobalamin – water-soluble vitamin. Active forms: deoxyadenosylcobalamin and methylcobalamin. Cyanocobalamin and hydroxocobalamin are therapeutic forms.

Pharmacokinetics:
• Daily intake 5-30 ng (dietary sources: meat, liver, eggs)
• Daily absorption 1-5 ng (requires intrinsic factor from parietal cells)
• Absorbed in distal ileum
• Stored in liver (3000-5000 ng)
• Takes up to 5 years to exhaust stores

Pharmacodynamics (2 reactions):
• Methyl transfer: N⁵-methylTHF → THF (methylcobalamin intermediate)
• Isomerisation: methylmalonyl-CoA → succinyl-CoA (methylmalonyl-CoA mutase)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 22,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) List 6 endocrine effects of insulin on: (i) liver, (ii) muscle, (iii) adipose tissue. (5 marks)
b) List the types of insulin preparations with their onset and duration (rapid, short, intermediate, long, ultra-long). (5 marks)
c) State the complications of insulin therapy. (5 marks)
d) State the mechanism of action of insulin at the cellular level (GLUT4). (5 marks)`,
    model_answer: `18a) Six endocrine effects of insulin

Liver:
• Inhibits glycogenolysis
• Inhibits gluconeogenesis
• Inhibits ketogenesis
• Promotes glycogenesis
• Increases triglyceride synthesis

Muscle:
• Increases protein synthesis
• Increases amino acid transport
• Increases glycogen synthesis
• Increases glucose transport

Adipose tissue:
• Increases triglyceride storage
• Activates lipoprotein lipase
• Increases glucose transport
• Inhibits intracellular lipase

18b) Insulin types with onset and duration

Type | Examples | Onset | Duration
Rapid-acting | Aspart, glulisine, lispro | 4-20 min | 3-5 hours
Short-acting | Regular | 15 min | 17-24 hours
Intermediate | NPH | 1-3 hours | Up to 18 hours
Long-acting | Detemir, glargine | 90 min | 16-24 hours
Ultra long-acting | Degludec | 90 min | 30-42 hours

18c) Complications of insulin therapy

• Hypoglycaemia
• Lipodystrophy (atrophy of subcutaneous fat at injection site)
• Weight gain
• Local injection site reactions

18d) Insulin MOA at cellular level (GLUT4)

• Insulin stimulates translocation of GLUT4-containing storage vesicles to plasma membrane
• Increases intracellular glucose-6-phosphate production
• Coordinates dephosphorylation of glycogen metabolic proteins
• Enables net glycogen synthesis`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 23,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematology & Clinical Trials",
    question_text: `a) Write short notes on clinical trials (phases I to IV). (5 marks)
b) Enumerate the pharmacodynamics of erythropoietin. (5 marks)
c) State the adverse effects of erythropoietin. (5 marks)
d) Write short notes on acute toxicity studies (definition, purpose, information provided). (5 marks)`,
    model_answer: `19a) Clinical trials – phases I to IV

Phase | Purpose | Subjects
I | Safety, tolerability, pharmacokinetics | 20-80 healthy volunteers
II | Efficacy, side effects, dose-ranging | 100-300 patients with disease
III | Confirmation of efficacy, comparison to standard treatment | 1000-3000 patients
IV | Post-marketing surveillance, long-term safety | Large population after approval

19b) Pharmacodynamics of erythropoietin

• Stimulates erythroid proliferation and differentiation
• Interacts with erythropoietin receptors on red cell progenitors
• Induces release of reticulocytes from bone marrow
• Endogenous production primarily in kidney (in response to tissue hypoxia)

19c) Adverse effects of erythropoietin

• Hypertension
• Thromboembolic events (stroke, myocardial infarction)
• Allergic reactions

19d) Acute toxicity studies – definition, purpose, information provided

Definition: Determine short-term adverse effects of a drug administered in a single dose or multiple doses within 24 hours

Purpose:
• Estimate safe acute doses for humans
• Identify potential target organs
• Determine time course of clinical observations

Information provided:
• Potential for acute toxicity in humans
• Appropriate dosage for multiple-dose toxicity studies
• Species differences in toxicity`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 24,
    lecturer: "Dr. Ekeke",
    topic_area: "Integrative Pharmacology",
    question_text: `a) State the mechanism of action of metronidazole and pentamidine (antiprotozoal agents). (5 marks)
b) State the mechanism of action of methimazole and its clinical use. (5 marks)
c) State the mechanism of action of chlorhexidine and list 2 adverse effects of biguanides (as antiseptics). (5 marks)
d) State the mechanism of action of dapsone and list 2 adverse effects specific to G6PD deficiency. (5 marks)`,
    model_answer: `20a) Mechanism of action of metronidazole and pentamidine

Metronidazole: Prodrug reduced by bacterial nitroreductases → toxic intermediates → damage DNA and inhibit nucleic acid synthesis (anaerobes and protozoa)

Pentamidine: Binds to kinetoplast DNA, inhibits DNA replication and RNA transcription (antiprotozoal – Pneumocystis jirovecii, Leishmania)

20b) Methimazole – mechanism of action and clinical use

MOA: Inhibits thyroid peroxidase → blocks iodination of tyrosine and coupling of iodotyrosines → inhibits synthesis of thyroxine (T4) and triiodothyronine (T3)

Clinical use: Hyperthyroidism (Graves' disease)

20c) Chlorhexidine – MOA and 2 adverse effects of biguanides (as antiseptics)

Chlorhexidine MOA: Disrupts bacterial cell membrane (antiseptic/disinfectant)

Adverse effects of biguanides (antiseptic):
• Skin irritation
• Staining of teeth (long-term use)
• Hypersensitivity reactions (rare)

20d) Dapsone – MOA and 2 adverse effects specific to G6PD deficiency

MOA: Structurally related to sulfonamides → inhibits dihydropteroate synthase in folate synthesis pathway

Adverse effects in G6PD deficiency:
• Haemolytic anaemia
• Methemoglobinemia`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 25,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Antibiotics",
    question_text: `a) State the mechanism of action and toxicity effects of aminoglycosides. (5 marks)
b) State the mechanism of action and toxicity effects of tetracyclines (include the most important toxicity in children). (5 marks)
c) Define urinary antiseptics and state 3 notable examples. (5 marks)
d) Explain what is responsible for the toxic effects of paracetamol and its treatment. (5 marks)`,
    model_answer: `7a) Aminoglycosides – MOA and toxicity

Mechanism of Action:
• Inhibit bacterial protein synthesis (bactericidal)
• Act on bacterial 30S ribosomal subunit
• Distort mRNA translation of genetic code

Toxicity (all dose-related):
• Ototoxicity (hearing loss, vertigo)
• Nephrotoxicity
• Neuromuscular blockade → paralysis and fatal respiratory arrest
• Hypersensitivity reactions

7b) Tetracyclines – MOA and toxicity

Mechanism of Action:
• Bind specifically to 30S ribosomes
• Block binding of transfer RNA (tRNA) to mRNA-ribosome complex
• Inhibit protein synthesis (bacteriostatic)

Toxicity:
• GI upset (anorexia, nausea, vomiting, flatulence, diarrhoea)
• Superinfection (Candida albicans, Clostridium difficile)
• Photosensitivity (phototoxic dermatitis)
• Deposition in teeth and bones → brown staining of teeth, stunted growth
• Most important toxicity in children: Brown staining of teeth (both deciduous and permanent)

7c) Urinary antiseptics – definition and 3 examples

Definition:
• Oral agents that exert antibacterial activity in the urine
• Have little or no systemic antibacterial effect
• Usefulness limited to lower urinary tract infections

Three examples:
• Nitrofurantoin
• Methenamine mandelate
• Methenamine hippurate

7d) Paracetamol toxicity

Mechanism: Overdose → depletion of glutathione → toxic metabolite NAPQI causes hepatocyte necrosis
Treatment: N-acetylcysteine (IV or oral)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 26,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Anthelmintics",
    question_text: `a) State the mechanism of action of albendazole and list 4 clinical uses. (5 marks)
b) State the mechanism of action of praziquantel and list 3 clinical uses. (5 marks)
c) State the drug of choice for onchocerciasis, its mechanism of action, and adverse effects. (5 marks)
d) State the mechanism of action of niclosamide. (5 marks)`,
    model_answer: `8a) Albendazole – MOA and clinical uses

Mechanism of Action:
• Benzimidazole carbamate
• Inhibits microtubule synthesis (binds to β-tubulin)
• Larvicidal and ovicidal effects

Clinical uses:
• Ascariasis, trichuriasis, hookworm, pinworm (400mg single dose)
• Hydatid disease (drug of choice – 400mg twice daily with meals for 1 month or more)
• Neurocysticercosis (drug of choice – 400mg twice daily for 21 days)
• Cutaneous larva migrans, visceral larva migrans

8b) Praziquantel – MOA and clinical uses

Mechanism of Action:
• Increases permeability of trematode and cestode cell membranes to calcium
• Results in paralysis, dislodgement, and death

Clinical uses (drug of choice for):
• Schistosomiasis (all species)
• Taeniasis and diphyllobothriasis
• Hymenolepsis nana

8c) Ivermectin – MOA and adverse effects

Mechanism of Action:
• Intensifies GABA-mediated transmission in peripheral nerves
• Paralyzes nematodes and arthropods
• Microfilaricidal (blocks release of microfilariae for months)

Adverse effects (any 4):
• Fatigue, dizziness, nausea, vomiting
• Abdominal pain, rash, fever, headache
• Pruritus, joint/muscle pains
• Hypotension, tachycardia, lymphadenitis, corneal opacities

8d) Niclosamide – mechanism of action

• Inhibits oxidative phosphorylation OR
• Stimulates ATPase activity
• Results in rapid killing of adult tapeworms (not ova)
• Minimally absorbed from GIT`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 27,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Dermatologic Pharmacology",
    question_text: `a) State the mechanism of action and adverse effects of topical corticosteroids when used on the eye. (5 marks)
b) State the mechanism of action of minoxidil and its clinical use. (5 marks)
c) List 4 oral antifungal agents and state the mechanism of action of one. (5 marks)
d) State the mechanism of action of benzoyl peroxide in acne vulgaris. (5 marks)`,
    model_answer: `9a) Topical corticosteroids – MOA and ocular adverse effects

MOA: Anti-inflammatory activity; antimitotic effects on epidermis

Ocular adverse effects:
• Posterior subcapsular cataracts
• Secondary infections
• Secondary open-angle glaucoma
• Raised intraocular pressure (IOP)

9b) Minoxidil – mechanism and use

Classification: Trichogenic agent (enhances hair growth)

Use: Reverses terminal scalp hair loss associated with androgenetic alopecia

Mechanism of action: Unknown

Note: Vertex balding more responsive than frontal balding. Cessation of treatment leads to hair loss in 4-6 months.

9c) Oral antifungal agents

• Ketoconazole
• Fluconazole
• Itraconazole
• Griseofulvin
• Terbinafine

9d) Benzoyl peroxide – MOA in acne vulgaris

• Penetrates stratum corneum or follicular openings unchanged
• Converted metabolically to benzoic acid within epidermis and dermis
• Less than 5% of an applied dose is absorbed from the skin in 8 hours
• To decrease irritation: start with low concentration (2.5%) once daily for first week`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 28,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Lactation & Pituitary",
    question_text: `a) Describe the mechanism of milk ejection (let-down reflex) including the hormone involved. (5 marks)
b) List 4 inducers of lactation and state the side effects of metoclopramide. (5 marks)
c) List 4 inhibitors of lactation and state the mechanism of action of cabergoline. (5 marks)
d) State the clinical uses of glucagon (any 3). (5 marks)`,
    model_answer: `10a) Mechanism of milk ejection (let-down reflex)

• Suckling stimulates paraventricular and supraoptic nuclei in hypothalamus
• Signals sent to posterior pituitary to release oxytocin
• Oxytocin causes contraction of myoepithelial cells surrounding alveoli
• Increased pressure forces milk through ducts to nipple
• Reflex can be conditioned by baby's cry or mother's thoughts
• Inhibited by stress or anxiety

10b) Inducers of lactation (4) and side effects of metoclopramide

Inducers: Metoclopramide, domperidone, human growth hormone (HGH), thyrotropin-releasing hormone (TRH), oxytocin, prolactin (any 4)

Side effects of metoclopramide (dose-dependent):
• Anxiety
• Diarrhoea
• Depression
• Headache
• Restlessness
• Fatigue

10c) Inhibitors of lactation (4) and mechanism of cabergoline

Inhibitors: Bromocriptine, cabergoline, levodopa, apomorphine, clonidine, selegiline (MAOI) (any 4)

Cabergoline mechanism:
• Ergot derivative
• Potent dopamine D2 receptor agonist
• Inhibits prolactin release from anterior pituitary
• Longer acting (half-life ~65 hours) than bromocriptine

10d) Clinical uses of glucagon (3)

• Emergency treatment of severe hypoglycaemia (unconscious patient, no IV glucose)
• Beta-blocker overdose (reverses cardiac effects via cAMP)
• Radiology of the bowel (relaxes intestine for X-ray visualisation)
• Endocrine diagnosis (tests of pancreatic β-cell reserve – measures C-peptide)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 29,
    lecturer: "Dr. Asika",
    topic_area: "Pituitary & Calcium",
    question_text: `a) State the mechanism of action of growth hormone and list 3 adverse effects. (5 marks)
b) List the 3 principal hormones controlling serum calcium and phosphorus and state one action of each on bone, gut, or kidney. (5 marks)
c) State the mechanism of action of calcitonin. (5 marks)
d) State the mechanism of action of vasopressin (ADH) and name one synthetic analogue with its advantage. (5 marks)`,
    model_answer: `11a) Growth hormone – MOA and 3 adverse effects

MOA:
• Mediated through insulin-like growth factor 1 (IGF-1, somatomedin C)
• Binds JAK/STAT cytokine receptor superfamily
• Dimerisation of 2 GH receptors activates signalling cascades

Adverse effects (3):
• Pain at injection site
• Oedema
• Arthralgias, myalgias
• Nausea
• Increased risk of diabetes mellitus
• Pseudotumour cerebri
• Slipped capital femoral epiphyses

11b) Three hormones controlling calcium & phosphorus – one action each

Hormone | Action
1,25-dihydroxyvitamin D | Increases calcium and phosphate absorption from gut
PTH | Reduces calcium excretion but increases phosphorus excretion in kidney
FGF23 | Stimulates renal excretion of phosphate

11c) Calcitonin – mechanism of action

Less critical regulator of calcium homeostasis

In pharmacologic concentrations:
• Reduces serum calcium and phosphorus
• Inhibits bone resorption
• Stimulates renal excretion of calcium and phosphorus

11d) Vasopressin (ADH) – MOA, synthetic analogue, advantage

MOA:
• Activates V2 receptors on renal tubule cells
• Gs protein → adenylyl cyclase → cAMP
• Increases water permeability and reabsorption in collecting tubules → reduces diuresis

Synthetic analogue: Desmopressin (DDAVP)

Advantage over vasopressin:
• Longer acting (half-life 1.5-2.5 hours)
• Minimal pressor activity (antidiuretic-to-pressor ratio 4000× vasopressin)
• Can be given IV, SC, intranasal, or orally`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 30,
    lecturer: "Dr. Asika",
    topic_area: "Ocular Pharmacology",
    question_text: `a) State the mechanism of action of pilocarpine and its ocular effect (including the correct term: miosis or cycloplegia?). (5 marks)
b) State the mechanism of action of timolol and its use in glaucoma. (5 marks)
c) State the adverse effects of topical glucocorticoids in the eye (any 4). (5 marks)
d) State the mechanism of action of acetazolamide in glaucoma. (5 marks)`,
    model_answer: `12a) Pilocarpine – MOA and ocular effect

MOA: Cholinergic agonist (muscarinic M3 receptor) → contracts iris sphincter muscle

Ocular effect: Miosis (pupillary constriction) – NOT cycloplegia

12b) Timolol – MOA and use in glaucoma

MOA: Non-selective β-adrenergic antagonist (β1+β2) → reduces aqueous humour production by ciliary epithelium

Use: Reduces intraocular pressure in glaucoma (0.25% and 0.5% solution/gel)

12c) Adverse effects of topical glucocorticoids in the eye (4)

• Posterior subcapsular cataracts
• Secondary infections
• Secondary open-angle glaucoma
• Raised intraocular pressure (IOP)

12d) Acetazolamide – MOA in glaucoma

• Carbonic anhydrase inhibitor
• Reduces aqueous humour production
• Decreases intraocular pressure`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 31,
    lecturer: "Dr. Anele",
    topic_area: "Antimicrobials",
    question_text: `a) List 4 first-line antituberculosis drugs and state the mechanism of action of isoniazid and rifampin. (5 marks)
b) State 4 adverse effects of isoniazid. (5 marks)
c) State the mechanism of action of ivermectin and name 2 clinical uses. (5 marks)
d) State the mechanism of action of pyrantel pamoate. (5 marks)`,
    model_answer: `13a) Four first-line TB drugs – MOA of isoniazid and rifampin

Drug | MOA
Isoniazid | Prodrug activated by KatG → inhibits mycolic acid synthesis
Rifampin | Binds β subunit of RNA polymerase → inhibits RNA synthesis
Pyrazinamide | Activated to pyrazinoic acid → disrupts cell membrane
Ethambutol | Inhibits arabinosyl transferase

13b) Four adverse effects of isoniazid

• Hepatitis (drug-induced)
• Peripheral neuropathy (give pyridoxine 25-50 mg/day)
• CNS toxicity (memory loss, psychosis, ataxia, seizures – less common)
• Hypersensitivity reactions (fever, skin rashes, lupus-like syndrome)
• Haematologic abnormalities (rare)

13c) Ivermectin – MOA and 2 clinical uses

MOA: Intensifies GABA-mediated transmission in peripheral nerves → paralysis of nematodes and arthropods

Uses:
• Onchocerciasis (drug of choice)
• Strongyloidiasis (drug of choice)
• Scabies, lice

13d) Pyrantel pamoate – MOA

• Neuromuscular blocking agent
• Causes release of acetylcholine and inhibition of cholinesterase
• Results in paralysis of worms → expulsion`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 32,
    lecturer: "Dr. Anele",
    topic_area: "Ocular & Growth Hormone",
    question_text: `a) List 3 ophthalmic adrenergic antagonists and state one indication for each. (5 marks)
b) State the adverse effects of long-term albendazole (when used for hydatid disease). (5 marks)
c) State the mechanism of action of ACTH and its diagnostic use. (5 marks)
d) List 4 gonadotropin preparations and state one adverse effect of gonadotropins. (5 marks)`,
    model_answer: `14a) Three ophthalmic adrenergic antagonists with indications

Drug | Indication
Timolol | Glaucoma, ocular hypertension
Betaxolol (β1-selective) | Glaucoma
Levobunolol | Glaucoma

14b) Adverse effects of long-term albendazole (hydatid disease)

• Abdominal distress
• Headache
• Fever
• Fatigue
• Alopecia
• Increased liver enzymes
• Pancytopenia

14c) ACTH – MOA and diagnostic use

MOA: Binds receptors on adrenal cortex → G-protein coupled → increases cAMP → stimulates rate-limiting step (cholesterol → pregnenolone) → increases adrenocorticosteroids and adrenal androgens

Diagnostic use: Differentiating primary adrenal insufficiency (Addison's) from secondary adrenal insufficiency (pituitary cause)

14d) Four gonadotropin preparations and one adverse effect

Preparations:
• Menotropins (hMG – FSH+LH)
• Urofollitropin (FSH)
• Follitropin alfa / beta (recombinant FSH)
• Lutropin alfa (recombinant LH)
• hCG (human chorionic gonadotropin)

Adverse effect (any one):
• Ovarian hyperstimulation syndrome (OHSS)
• Multiple pregnancy
• Headache, depression, oedema
• Precocious puberty
• Gynaecomastia in men`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 33,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Antiretrovirals & Oncology",
    question_text: `a) What is HAART? List 5 classes of antiretroviral agents with 2 examples each. (5 marks)
b) Outline the pharmacological treatment options in neoplastic diseases (drug categories, not specific drugs). (5 marks)
c) Write short notes on the adverse effects of local anaesthetics (systemic and local). (5 marks)
d) Outline the treatment strategies for an infant with Clostridium botulism toxicity. (5 marks)`,
    model_answer: `15a) HAART definition and 5 antiretroviral classes with 2 examples each

HAART: Highly Active Antiretroviral Therapy – combination of drugs to suppress HIV replication

Class | Examples
NRTI (nucleoside reverse transcriptase inhibitors) | Zidovudine, lamivudine, tenofovir
NNRTI (non-nucleoside reverse transcriptase inhibitors) | Efavirenz, nevirapine
Protease inhibitors | Ritonavir, lopinavir
Integrase strand transfer inhibitors | Dolutegravir, raltegravir
Entry inhibitors (CCR5 antagonists) | Maraviroc
Fusion inhibitors | Enfuvirtide

15b) Pharmacological treatment options in neoplastic diseases (drug categories)

• Cytotoxic antibiotics (e.g., doxorubicin, bleomycin)
• Alkylating agents (e.g., cyclophosphamide)
• Antimetabolites (e.g., methotrexate, 5-fluorouracil)
• Plant alkaloids (e.g., vincristine, paclitaxel)
• Hormonal agents (e.g., tamoxifen)
• Targeted therapies (e.g., tyrosine kinase inhibitors)
• Immunomodulators (e.g., rituximab)
• Corticosteroids

15c) Adverse effects of local anaesthetics

Local:
• Burning and stinging on injection
• Tissue irritation

Systemic (CNS and CVS):
• CNS: dizziness, tinnitus, metallic taste, perioral paraesthesia, seizures, coma
• CVS: hypotension, bradycardia, cardiac arrest (at high doses)
• Allergic reactions (rare)

15d) Treatment strategies for an infant with Clostridium botulism toxicity

• Immediate respiratory support (ventilation if needed)
• Administration of botulism immune globulin (BIG-IV) – neutralises toxin
• Supportive care (hydration, nutrition)
• Avoid aminoglycosides (may potentiate neuromuscular blockade)
• Monitor for secondary infections`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 34,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Adrenocortical & Antidotes",
    question_text: `a) List 3 antagonists of adrenocortical agents and state the mechanism of action of one. (5 marks)
b) Define chemotherapy and list 3 drugs that belong to cytotoxic antibiotics. (5 marks)
c) Classify antiviral drugs with 2 examples for each class. (5 marks)
d) In a tabular form, list 5 poisons and their specific antidotes (from your slides). (5 marks)`,
    model_answer: `16a) Three antagonists of adrenocortical agents and mechanism of one

Antagonists:
• Spironolactone (aldosterone antagonist)
• Eplerenone (aldosterone antagonist)
• Mifepristone (glucocorticoid receptor antagonist)
• Ketoconazole (inhibits steroid synthesis)
• Metyrapone (inhibits 11β-hydroxylase)

Mechanism of spironolactone: Competitive antagonist of aldosterone at mineralocorticoid receptors → blocks sodium reabsorption and potassium excretion in distal tubule

16b) Definition of chemotherapy and 3 cytotoxic antibiotics

Chemotherapy: Use of chemical agents to treat cancer by killing rapidly dividing cells

Cytotoxic antibiotics (3):
• Doxorubicin
• Bleomycin
• Mitomycin
• Actinomycin D

16c) Classification of antiviral drugs with 2 examples per class

Class | Examples
Anti-herpes (nucleoside analogues) | Acyclovir, valacyclovir, famciclovir
Anti-influenza | Oseltamivir, zanamivir
Anti-HIV (NRTI) | Zidovudine, lamivudine
Anti-HIV (NNRTI) | Efavirenz, nevirapine
Anti-HIV (protease inhibitors) | Ritonavir, lopinavir
Anti-HIV (integrase inhibitors) | Dolutegravir, raltegravir
Anti-HCV (direct-acting antivirals) | Sofosbuvir, ledipasvir

16d) Table of 5 poisons and their specific antidotes

Poison | Antidote
Opiates | Naloxone
Benzodiazepines | Flumazenil
Paracetamol | N-acetylcysteine
Organophosphates | Atropine + pralidoxime
Warfarin | Vitamin K
Heparin | Protamine sulfate
Lead | Dimercaprol + EDTA
Mercury | Dimercaprol
Arsenic | Dimercaprol
Thallium | Prussian Blue`,
    total_marks: 20,
  },
];
