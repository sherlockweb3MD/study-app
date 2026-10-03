export interface PastQuestion {
  course: string;
  question_number: number;
  lecturer: string;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
}

export const newPastQuestionsV5: PastQuestion[] = [
  {
    course: "Pharmacology",
    question_number: 47,
    lecturer: "Dr. Ekeke",
    topic_area: "General Pharmacology",
    question_text: `a) State 4 advantages and 4 disadvantages of the oral route of drug administration. (5 marks)
b) What is 1st Pass effect? (5 marks)
c) List factors that affect absorption of drugs. (5 marks)
d) Distinguish between competitive and non-competitive antagonism. (5 marks)`,
    model_answer: `a) Advantages and Disadvantages of Oral Route

Advantages:
• It is convenient
• It is the cheapest available route
• It is easy to use
• It is safe and acceptable

Disadvantages:
• Less amount of drug reaches the target tissue
• Some drugs are destroyed by gastric juices (e.g., adrenaline, insulin, oxytocin)
• Absorption is slow, so not preferred during emergency
• May cause gastric irritation
• May be objectionable in taste
• May cause discoloration of teeth (iron, tetracyclines)
• Aspiration into lungs in seriously ill or uncooperative patients

b) First-pass effect

First-pass effect: After oral administration, a drug may be metabolized extensively in the gut wall and liver before reaching systemic circulation. This reduces bioavailability. Example: morphine requires a higher oral dose due to first-pass metabolism.

c) Factors that affect absorption of drugs

• Aqueous solubility – drugs must dissolve in aqueous biophase before absorption
• Concentration – concentrated solutions absorbed faster
• Area of absorbing surface – larger area = faster absorption
• Vascularity of absorbing surface – increased blood flow hastens absorption
• Route of administration – parenteral routes better absorbed than enteral

d) Competitive vs Non-competitive antagonism

Feature | Competitive (Surmountable) | Non-Competitive (Unsurmountable)
Reaction | Reversible with same receptor as agonist | Forms stable covalent bond with receptor
Displacement | High agonist concentration can displace antagonist | Not displaced by high agonist concentration
Effect on dose-response | Parallel rightward shift | Suppression of maximal response
Examples | Acetylcholine–atropine; Noradrenaline–phentolamine | Noradrenaline–phenoxybenzamine; Organophosphorus–cholinesterase`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 48,
    lecturer: "Dr. Ekeke",
    topic_area: "General Pharmacology",
    question_text: `a) What is Protein binding of drugs and its consequences? (5 marks)
b) Discuss the factors that affect Biotransformation of drugs. (5 marks)
c) Write concisely on Dose–Response relationship. (5 marks)
d) Write short note on clinical trials. (5 marks)`,
    model_answer: `a) Protein binding of drugs and its consequences

Drugs bind to plasma proteins (albumin, α1-acid glycoprotein) with varying affinity. The bound fraction is pharmacologically inactive. Consequences:
• Bound drug is restricted to vascular compartment → lower Vd
• Reduces availability of drug to target organ
• Serves as temporary storage
• Higher binding → longer duration of action
• Plasma protein binding decreases availability of drug to organ

b) Factors that affect Biotransformation of drugs

• Age – neonates have immature enzyme systems; elderly have reduced hepatic function
• Genetic factors (pharmacogenomics) – polymorphisms (e.g., CYP2D6 poor vs ultra-rapid metabolizers)
• Enzyme induction – rifampin, carbamazepine, alcohol increase enzyme synthesis
• Enzyme inhibition – ketoconazole, erythromycin, cimetidine inhibit enzymes
• Disease states – liver disease, renal disease
• Diet and environmental factors – charcoal-broiled meat, smoking (inducers); grapefruit juice (inhibitor)

c) Dose–Response relationship

The dose-response relationship describes how the magnitude of a biological or toxic effect changes with the amount (dose) of a drug or chemical administered.

Types:
• Graded dose-response – in an individual; greater magnitude of response as dose increases
• Quantal dose-response – in a population; percentage affected increases as dose is raised

Important parameters:
• ED50 – dose effective in 50% of population
• TD50 – dose toxic to 50% of population
• LD50 – dose lethal to 50% of population

d) Clinical trials

Clinical trials are human testing phases (Phase I–IV) to prove safety and efficacy of new drugs.

Phase I: Safety, tolerability in healthy volunteers
Phase II: Efficacy and safety in patients
Phase III: Large-scale efficacy and safety
Phase IV: Post-marketing surveillance`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 49,
    lecturer: "Dr. Ekeke",
    topic_area: "General Pharmacology",
    question_text: `a) Discuss BRIEFLY prescription writing in: (i) Superscription (ii) Inscription (iii) Subscription (iv) Signa (5 marks)
b) Define: (i) Hazard (ii) Risk (iii) Exposure (5 marks)
c) Define vitamins and write short note on Vitamin E. (5 marks)
d) Classify antibiotics according to mode of action with examples. (5 marks)`,
    model_answer: `a) Prescription writing

Component | Description
Superscription | The Rx symbol at the top of the prescription; abbreviation for Latin "take thou of"; Roman symbol for Jupiter
Inscription | The drug name, concentration, and type of preparation
Subscription | Dispensing instructions to the pharmacist – quantity to dispense and form
Signa | Patient instructions – how to take medication (directions, quantity, frequency)

b) Definitions

Hazard: The inherent capability of a substance to cause harm
Risk: The probability that a hazard will cause harm under specific conditions of use or exposure
Exposure: The contact between an agent and a person or organism (inhalation, ingestion, skin/eye contact)

c) Vitamins and Vitamin E

Definition: Vitamins are non-energy producing organic compounds essential for normal human metabolism that must be supplied in small quantities in the diet.

Vitamin E (Tocopherol):
• Source: Wheat germ oil, vegetables, eggs, fruits, meat
• Daily requirement: ~10 mg
• Physiological roles: Antioxidant protecting unsaturated lipids in cell membranes; neurological and immune functions
• Deficiency: Haemolytic and hypoplastic anemia; sterility in males; degenerative changes in spinal cord; degenerative lesions in skeletal muscles and heart
• Therapeutic uses: Supplemental doses (10-30 mg/day); acanthocytosis (100mg/wk); retrolental fibroplasia (100mg/kg/day); with Vitamin A to enhance absorption; large doses (400-600mg/day) for intermittent claudication
• Toxicity: Large doses for long periods have not produced significant toxicity; may cause abdominal cramps, loose motions, lethargy; can interfere with iron therapy

d) Classification of antibiotics by mode of action

• Inhibitors of bacterial cell wall synthesis – penicillins, cephalosporins, bacitracin, cycloserine, carbapenem, monobactam, β-lactamase inhibitors
• Inhibitors of protein synthesis – aminoglycosides, tetracyclines, chloramphenicol, macrolides, lincosamides, clindamycin, oxazolidinones, streptogramins
• Inhibitors of bacterial cell membrane function – polymyxins, nystatin, amphotericin B
• Inhibitors of nucleic acid synthesis or metabolism – griseofulvin, actinomycin
• Inhibition of growth by analogue of essential metabolites – sulphonamides (PABA analogue)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 50,
    lecturer: "Dr. Ekeke",
    topic_area: "General Pharmacology",
    question_text: `a) Explain the general principles of antibiotic therapy (list at least 5). (5 marks)
b) What is superinfection? Give an example. (5 marks)
c) What are beta-lactamase inhibitors? Give examples. (5 marks)
d) What is the mechanism of action of penicillin? State its therapeutic uses and adverse effects. (5 marks)`,
    model_answer: `a) General principles of antibiotic therapy

• Selective toxicity – toxic to pathogens, non-toxic to host cells
• Bacteriostatic or bactericidal – inhibit growth vs kill microorganisms
• Range of activity – narrow vs broad spectrum
• Effects in body fluid/blood components – can activate or inactivate drugs
• Toxicity/adverse effects – must not lead to discontinuation
• Pharmacokinetic processes – absorption, distribution, excretion within normal range
• Development of resistance – combination therapy to delay resistance
• Contraindication – allergy/hypersensitivity

b) Superinfection

Superinfection occurs when antibiotics disturb normal body flora, allowing overgrowth of resistant organisms. Example: Candida albicans overgrowth in oropharynx with penicillin use.

c) Beta-lactamase inhibitors

Beta-lactamase inhibitors are molecules that bind to β-lactamases and inactivate them, preventing destruction of the β-lactam ring.

Examples: Clavulanic acid, Sulbactam
• Clavulanic acid + amoxicillin = Amoxiclav (Augmentin)
• Sulbactam + ampicillin = Unasyn

d) Penicillin – MOA, therapeutic uses, adverse effects

MOA: β-lactam antibiotics prevent normal synthesis of bacterial cell wall by selectively inhibiting synthesis of mucopeptide in susceptible multiplying bacteria.

Therapeutic Uses:
• Penicillin G is drug of choice for all pneumococcal infections
• Streptococcal infections (pharyngitis, tonsillitis, scarlet fever, endocarditis)
• Staphylococcal infections and pneumococcal meningitis
• Anaerobic infections and clostridial infections (gas gangrene)
• Venereal diseases (gonorrhoea, syphilis)
• Gram-negative infections (E. coli, Salmonella, Shigella, Proteus)

Adverse Effects:
• Hypersensitivity reactions
• Direct toxicity → neurotoxicity → CNS irritation + convulsion + coma
• Superinfection of oropharynx with Candida albicans
• Hyperkalaemia and hypernatremia with fluid retention
• Diarrhea (oral formulations)
• Acute interstitial nephritis and blood dyscrasias (rare)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 51,
    lecturer: "Dr. Ekeke",
    topic_area: "Antibiotics",
    question_text: `a) Write short note on bacterial resistance to Penicillin. (5 marks)
b) Classify penicillins into 5 groups with examples. (5 marks)
c) Classify cephalosporins by generation with examples and antibacterial spectrum. (5 marks)
d) What is the mechanism of action and toxicity of aminoglycosides? (5 marks)`,
    model_answer: `a) Bacterial resistance to Penicillin

• Beta-lactamase (penicillinase) production – splits β-lactam ring, rendering penicillin inactive
• Modification of target PBPs – basis of methicillin resistance in staphylococci and penicillin resistance in pneumococci and enterococci
• Impaired penetration – occurs in gram-negative species due to impermeable outer cell wall membrane
• Efflux pumps – gram-negative organisms produce efflux pumps that transport β-lactam antibiotics from periplasm back across outer membrane

b) Classification of penicillins

Group | Type | Examples
I | Penicillinase-sensitive | Benzylpenicillin (penicillin G), procaine penicillin, benzathine penicillin, phenoxymethyl-penicillin (penicillin V)
II | Penicillinase-resistant | Oxacillin, cloxacillin, dicloxacillin, methicillin
III | Broad spectrum | Amoxicillin, ampicillin, bacampicillin, cyclacillin
IV | Extended spectrum (anti-pseudomonal) | Azlocillin, carbenicillin, mezlocillin, piperacillin, ticarcillin
V | Amidopenicillin | Amidinocillin

c) Classification of cephalosporins

Generation | Examples | Spectrum
1st | Cefaclor, cephalexin, cefadroxil, cephalothin, cefazolin | Appreciable activity against gram-positive; modest against gram-negative
2nd | Cefamandole, cefoxitin, cefuroxime | Increased activity against gram-negative (less than 3rd)
3rd | Cefotaxime, ceftriaxone, ceftazidime, cefoperazone | Less active against gram-positive cocci; much more active against enterobacteriaceae

d) Aminoglycosides – MOA and toxicity

MOA: Inhibit bacterial protein synthesis (bactericidal). Act on bacterial 30S ribosomal subunit → distort mRNA translation → prevent formation of normal initiation complex.

Toxicity: Ototoxicity, Nephrotoxicity, Neuromuscular blockade → paralysis and fatal respiratory arrest, Hypersensitivity reactions.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 52,
    lecturer: "Dr. Ekeke",
    topic_area: "Antibiotics",
    question_text: `a) What is the mechanism of action and toxicity of tetracyclines? (5 marks)
b) Explain the brown staining of teeth by tetracycline toxicity. (5 marks)
c) What is the mechanism of action of chloramphenicol? (5 marks)
d) Explain the grey baby syndrome of chloramphenicol toxicity. (5 marks)`,
    model_answer: `a) Tetracyclines – MOA and toxicity

MOA: Bind specifically to 30S ribosomes → block binding of tRNA to mRNA-ribosome complex → inhibit protein synthesis (bacteriostatic).

Toxicity: GI upset, Superinfection (Candida, C. difficile), Hypersensitivity, Photosensitivity, Deposition in growing teeth and bones (brown staining, stunted growth), Renal damage, Metabolic effects (fatty degeneration of liver).

b) Brown staining of teeth by tetracycline

Tetracyclines form non-absorbable chelates with heavy metals and are laid down in growing bones and teeth due to chelating action with calcium. Children may show brown staining of teeth if administered before appearance of 1st teeth; pigmentation of permanent teeth results if given between ages 2 months to 8 years.

c) Chloramphenicol – MOA

Chloramphenicol is primarily bacteriostatic and inhibits bacterial protein synthesis. It binds to 50S subunit of bacterial 70S ribosomes, inhibiting peptidyltransferase, thereby blocking protein synthesis.

d) Grey baby syndrome

Cause: Newborn infants lack effective glucuronic acid conjugation mechanism for degradation and detoxification of chloramphenicol. When infants are given dosages above 50mg/kg/d, drug accumulates.

Symptoms: Vomiting, flaccidity, hypothermia, gray colour (cyanosis), shock, vascular collapse. Death occurs in ~50% within 4-5 days.

Prevention: Full-term infants (50mg/kg/d or less in 1st week); Premature infants (25mg/kg/d).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 53,
    lecturer: "Dr. Ekeke",
    topic_area: "Antibiotics",
    question_text: `a) What is the mechanism of action of macrolides? State their PK and toxicity. (5 marks)
b) What is the mechanism of action of sulphonamides? State their adverse effects and drug interactions. (5 marks)
c) Briefly explain with diagram, the sequential blockade of folic acid by Sulphonamide & Trimethoprim. (5 marks)
d) What is the mechanism of action of fluoroquinolones? (5 marks)`,
    model_answer: `a) Macrolides – MOA, PK, toxicity

MOA: Inhibition of protein synthesis via binding to 50S ribosomal RNA.

PK: Acid-resistant salts (stearate, estolate) well absorbed orally; peak plasma levels 2-4 hrs; distributed to most tissues except brain; t½ 1.5-3 hrs; only 20% excreted by kidneys.

Toxicity: GI disturbances (nausea, anorexia, diarrhea, glossitis, stomatitis); Superinfection with Candida albicans; Hypersensitivity reactions (fever, eosinophilia, rash).

b) Sulphonamides – MOA, adverse effects, drug interactions

MOA: Primarily bacteriostatic; structural analogues/competitive antagonists of PABA. Prevent normal bacterial utilization of PABA for synthesis of folic acid; inhibit DNA synthesis.

Adverse Effects: Hypersensitivity (Stevens-Johnson syndrome), Renal damage (crystalluria), Blood dyscrasias, Kernicterus in fetus, Goiter/hypothyroidism, Arthritis, Cardiomyopathy.

Drug Interactions: Sulphonamides increase effects of oral anticoagulants, methotrexate, oral sulphonylurea hypoglycaemic agents, thiazides, uricosuric agents.

c) Sequential blockade of folic acid

PABA → (sulphonamide inhibits dihydropteroate synthase) → Dihydrofolic acid → (trimethoprim inhibits dihydrofolate reductase) → Tetrahydrofolic acid → Purine synthesis → DNA synthesis.

The two drugs act on sequential steps leading to folate deficiency in susceptible organisms, producing synergistic effect.

d) Fluoroquinolones – MOA

Fluoroquinolones enter bacterium by passive diffusion through porins. Once inside, they inhibit replication of bacterial DNA by interfering with action of DNA gyrase (topoisomerase II) and topoisomerase IV during bacterial growth and reproduction.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 54,
    lecturer: "Dr. Ekeke",
    topic_area: "Antibiotics",
    question_text: `a) List the generations of fluoroquinolones and their clinical uses. (5 marks)
b) What is the mechanism of action of polymyxin B? State its uses and toxicity. (5 marks)
c) What is spectinomycin used for? (5 marks)
d) Define urinary antiseptics. State 3 notable examples. (5 marks)`,
    model_answer: `a) Generations of fluoroquinolones and clinical uses

Generation | Examples
1st | Nalidixic acid
2nd | Ciprofloxacin, Norfloxacin, Ofloxacin
3rd | Gatifloxacin, Levofloxacin, Moxifloxacin, Sparfloxacin
4th | Trovafloxacin

Uses: UTI, Gonorrhea, Chancroid, Bacterial gastroenteritis, Typhoid, Bone/soft tissue infections, Respiratory infections, Tuberculosis, Meningitis, Conjunctivitis.

b) Polymyxin B – MOA, uses, toxicity

MOA: Bactericidal; binds with phospholipid components of cytoplasmic membrane → impairs membrane function → leakage of small molecules.

Uses: 2nd choice for Pseudomonas aeruginosa infections (UTI, external ear, conjunctiva, meninges); septicaemia when other drugs ineffective.

Toxicity: Pain at IM injection site, Parasthesias, Facial flushing, Drug fever, Skin rashes, Neuromuscular paralysis, Kidney damage (proteinuria, haematuria).

c) Spectinomycin

Spectinomycin is used to treat acute genital and rectal gonorrhea. It becomes drug of 1st choice in pregnant women with gonorrhea who are allergic to penicillin or probenecid.

d) Urinary antiseptics

Definition: Oral agents that exert antibacterial activity in urine but have little or no systemic antibacterial effect. Usefulness limited to lower urinary tract infections.

Examples: Nitrofurantoin, Methenamine mandelate, Methenamine hippurate.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 55,
    lecturer: "Dr. Ekeke",
    topic_area: "Antibiotics & Disinfectants",
    question_text: `a) What is the mechanism of action of nitrofurantoin? (5 marks)
b) What is the mechanism of action of methenamine? (5 marks)
c) List 20 disinfectants of pharmacological importance. (5 marks)
d) What are the properties of a good disinfectant? (5 marks)`,
    model_answer: `a) Nitrofurantoin – MOA

Unique and complex. Drug works by damaging bacterial DNA since its reduced form is highly reactive. Rapid reduction inside bacterial cell by flavoproteins (nitrofuran reductase) to multiple reactive intermediates that attack ribosomal proteins, DNA, respiration, pyruvate metabolism, and other macromolecules.

b) Methenamine – MOA

Below pH 5.5, methenamine releases formaldehyde, which is antibacterial. Mandelic acid or hippuric acid taken orally is excreted unchanged in urine, bactericidal for some gram-negative bacteria at pH < 5.5.

c) 20 Disinfectants

Phenol, Cresol, Resorcinol, Hexylresorcinol, Chloroxylenol, Hexachlorophene, Potassium permanganate, Hydrogen peroxide, Benzoyl peroxide, Iodine, Iodophores, Chlorine, Chlorophores, Chlorhexidine, Cetrimide, Cetylpyridinium chloride, Benzalkonium chloride, Soaps of sodium/potassium, Ethanol, Isopropanol.

d) Properties of a good disinfectant

• Complete/full microbiological disinfection without harming humans
• Must be inexpensive and non-corrosive
• May contain bitrex (bitter substance to discourage ingestion)
• Active even in presence of blood, pus, and excreta
• Non-staining with agreeable colour and odour
• Either narrow spectrum or broad spectrum depending on situation`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 56,
    lecturer: "Dr. Ekeke",
    topic_area: "Antifungal Drugs",
    question_text: `a) List 5 classes of Antifungal drugs with examples of each class. (5 marks)
b) What is the mechanism of action of polyenes? (5 marks)
c) What is the mechanism of action of azoles? (5 marks)
d) What is the mechanism of action of allylamines? (5 marks)`,
    model_answer: `a) 5 classes of Antifungal drugs

Class | Examples
Polyenes | Amphotericin B, Nystatin
Azoles | Fluconazole, Ketoconazole, Itraconazole
Echinocandins | Caspofungin, Micafungin, Anidulafungin
Allylamines | Terbinafine, Naftifine
Antimetabolites | Flucytosine (5-FC)

b) Polyenes – MOA

Polyenes (Amphotericin B, Nystatin) bind to ergosterol in fungal cell membrane → increase permeability → leakage of intracellular contents → cell death.

c) Azoles – MOA

Azoles affect permeability of fungal cell by interfering with sterol biosynthesis pathway.

d) Allylamines – MOA

Allylamines (Terbinafine, Naftifine) inhibit squalene epoxidase → block ergosterol synthesis.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 57,
    lecturer: "Dr. Ekeke",
    topic_area: "Antimycobacterial Drugs",
    question_text: `a) List the first-line antituberculosis drugs and state the mechanism of action of each. (5 marks)
b) State 3 reasons why you would consider second-line TB drugs. (5 marks)
c) State the adverse effects of first-line TB drugs. (5 marks)
d) What is the mechanism of action of isoniazid and how does resistance develop? (5 marks)`,
    model_answer: `a) First-line antituberculosis drugs and MOA

Isoniazid (INH): Inhibits synthesis of mycolic acids. Prodrug activated by KatG.
Rifampin (RIF): Binds to β subunits of bacterial DNA-dependent RNA polymerase → inhibits RNA synthesis.
Pyrazinamide (PZA): Prodrug hydrolyzed to pyrazinoic acid by pyrazinamidase → disrupts mycobacterial cell membrane metabolism and transport.
Ethambutol (EMB): Inhibits mycobacterial arabinosyl transferase → blocks arabinoglycan polymerization.

b) 3 reasons for second-line TB drugs

• Resistance to first-line agents
• Failure of clinical response to conventional therapy
• Serious treatment-limiting adverse drug reactions

c) Adverse effects of first-line TB drugs

Isoniazid: Hepatitis, peripheral neuropathy, CNS toxicity, drug-induced SLE
Rifampin: Orange-red discolouration of body fluids, thrombocytopenia, nephritis, cholestatic jaundice, hepatitis
Pyrazinamide: Hepatotoxicity, hyperuricemia, photosensitivity, nausea, vomiting
Ethambutol: Retrobulbar (optic) neuritis, loss of visual acuity, red-green colour blindness

d) Isoniazid – MOA and resistance

MOA: Inhibits synthesis of mycolic acids. Prodrug activated by KatG (catalase-peroxidase). Activated form forms covalent complex with AcpM and KasA → blocks mycolic acid synthesis.

Resistance: Chromosomal mutations: mutation/deletion of KatG; overexpression of inhA; varying mutations of acyl carrier protein. KatG mutants = high-level resistance, no cross-resistance to ethionamide. inhA overexpression = low-level resistance, cross-resistance to ethionamide.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 58,
    lecturer: "Dr. Ekeke",
    topic_area: "Antimycobacterial Drugs",
    question_text: `a) What is the mechanism of action of rifampin? State its adverse effects. (5 marks)
b) What is the mechanism of action of ethambutol and its dose-related adverse effect? (5 marks)
c) What is the mechanism of action of pyrazinamide? (5 marks)
d) Describe the MOA of leprosy drugs (dapsone, rifampin, clofazimine) with side effects. (5 marks)`,
    model_answer: `a) Rifampin – MOA and adverse effects

MOA: Binds to β subunits of bacterial DNA-dependent RNA polymerase → inhibits RNA synthesis.

Adverse Effects: Nausea, vomiting, rashes, orange colour to urine/sweat/tears, thrombocytopenia, nephritis, cholestatic jaundice, hepatitis, light chain proteinuria, myalgia, hemolytic anemia, acute tubular necrosis, flu-like symptoms.

b) Ethambutol – MOA and dose-related adverse effect

MOA: Inhibits mycobacterial arabinosyl transferase (embCAB operon) → blocks arabinoglycan polymerization.

Dose-related ADR: Retrobulbar (optic) neuritis – loss of visual acuity and red-green colour blindness. More common at higher doses (25mg/kg/d).

c) Pyrazinamide – MOA

Prodrug hydrolyzed to pyrazinoic acid (active form) by mycobacterial pyrazinamidase (pncA). Pyrazinoic acid disrupts mycobacterial cell membrane metabolism and transport functions.

d) Leprosy drugs – MOA and side effects

Dapsone: Inhibits dihydropteroate synthase (folate synthesis). A/E: Hemolysis (G6PD), methemoglobinemia, peripheral neuropathy, ENL.

Rifampin: Inhibits DNA-dependent RNA polymerase. A/E: Orange-red body fluids, hepatotoxicity.

Clofazimine: Binds to DNA; generates cytotoxic oxygen radicals. A/E: Pink to brownish-black skin discolouration, GIT effects.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 59,
    lecturer: "Dr. Ekeke",
    topic_area: "Antiretroviral Drugs",
    question_text: `a) Classify Antiretroviral drugs with examples of each class. (5 marks)
b) Match the drug to its class: Tenofovir, Efavirenz, Ritonavir, Dolutegravir, Maraviroc. (5 marks)
c) What is the mechanism of action of NRTIs? (5 marks)
d) What is the mechanism of action of NNRTIs? (5 marks)`,
    model_answer: `a) Classification of Antiretroviral drugs

Class | Examples
NRTIs | Abacavir, Tenofovir, Lamivudine, Zidovudine
NNRTIs | Efavirenz, Nevirapine, Etravirine, Rilpivirine
Protease Inhibitors | Ritonavir, Lopinavir, Atazanavir, Darunavir
Integrase Inhibitors | Dolutegravir, Raltegravir, Elvitegravir
Entry Inhibitors | Maraviroc, Enfuvirtide

b) Match drug to class

Tenofovir = NRTI
Efavirenz = NNRTI
Ritonavir = Protease Inhibitor
Dolutegravir = Integrase Inhibitor
Maraviroc = Entry Inhibitor

c) NRTIs – MOA

Competitively inhibit nucleoside binding to reverse transcriptase. NRTIs need thymidine kinase to be activated (except Tenofovir).

d) NNRTIs – MOA

Similar mechanism to NRTIs except they bind at different site and do not need thymidine kinase.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 60,
    lecturer: "Dr. Ekeke",
    topic_area: "Antiretroviral & Antimalarial Drugs",
    question_text: `a) What is the mechanism of action of protease inhibitors? (5 marks)
b) What is the mechanism of action of integrase inhibitors? (5 marks)
c) What is the mechanism of action of entry/fusion inhibitors? (5 marks)
d) List 10 antimalarial drugs and state the mechanism of action of Lumefantrine. (5 marks)`,
    model_answer: `a) Protease inhibitors – MOA

Inhibits pol gene and prevents maturation. Pol gene codes for polyprotein containing enzymes responsible for viral replication.

b) Integrase inhibitors – MOA

Reversibly inhibits HIV integrase → inhibits HIV from integrating into host cell.

c) Entry/fusion inhibitors – MOA

Blocks viral attachment and entry. Maraviroc = CCR5 antagonist. Enfuvirtide = fusion inhibitor.

d) 10 Antimalarial drugs and MOA of Lumefantrine

10 Antimalarial Drugs: Chloroquine, Hydroxychloroquine, Mefloquine, Primaquine, Pyrimethamine, Quinine, Artemether, Artesunate, Halofantrine, Lumefantrine.

MOA of Lumefantrine: Available only as fixed-dose combination with artemether (Coartem). Highly effective for treatment of falciparum malaria. Administration improved with food (especially fatty meal).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 61,
    lecturer: "Dr. Ekeke",
    topic_area: "Antimalarial Drugs",
    question_text: `a) List the classes of antimalarial drugs with 1 example each. (5 marks)
b) What is the mechanism of action of halofantrine? State 2 adverse effects and 2 contraindications. (5 marks)
c) State 3 adverse effects of lumefantrine. What is the fixed-dose combination it is available as? (5 marks)
d) State the precautions in Albendazole therapy and list the adverse effects of Moxidectin. (5 marks)`,
    model_answer: `a) Classes of antimalarial drugs

4-Aminoquinolines – Chloroquine
Quinoline methanols – Mefloquine
8-Aminoquinolines – Primaquine
Artemisinin derivatives – Artesunate
Antifolates – Pyrimethamine
Antibiotics – Doxycycline

b) Halofantrine – MOA, adverse effects, contraindications

Halofantrine is effective against erythrocytic stages of all forms of human malaria. Rapidly effective against chloroquine-resistant P. falciparum. Use limited by irregular absorption and cardiac toxicity.

Adverse Effects: Abdominal pain, diarrhea, vomiting, cough, rash, headache, pruritus, elevated liver enzymes, QT and PR prolongation.

Contraindications: Cardiac conduction defects, recent mefloquine therapy, pregnancy.

c) Lumefantrine – adverse effects and fixed-dose combination

Adverse Effects: Expensive, requires three daily dosing, administration improved with food.

Fixed-dose combination: Artemether + Lumefantrine (Coartem or Riamet).

d) Albendazole precautions and Moxidectin adverse effects

Albendazole Precautions: Monitor blood counts and liver function during long-term therapy; avoid in benzimidazole hypersensitivity or liver cirrhosis; exposure increased by dexamethasone, praziquantel, cimetidine; decreased by phenytoin, phenobarbital, carbamazepine, ritonavir.

Moxidectin Adverse Effects: Pruritus, musculoskeletal pain, headache, tachycardia, rash.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 62,
    lecturer: "Dr. Ekeke",
    topic_area: "Anthelmintics",
    question_text: `a) What is the mechanism of action of albendazole? (5 marks)
b) What is the mechanism of action of mebendazole? (5 marks)
c) What is the mechanism of action of praziquantel? (5 marks)
d) What is the mechanism of action of ivermectin? (5 marks)`,
    model_answer: `a) Albendazole – MOA

Benzimidazoles inhibit microtubule synthesis. Albendazole has larvicidal effects in hydatid disease, cysticercosis, ascariasis, hookworm; ovicidal effects in ascariasis, ancylostomiasis, trichuriasis.

b) Mebendazole – MOA

Mebendazole acts by inhibiting microtubule synthesis. Parent drug is active form.

c) Praziquantel – MOA

Praziquantel increases permeability of trematode and cestode cell membranes to calcium → paralysis, dislodgement, and death.

d) Ivermectin – MOA

Ivermectin paralyzes nematodes and arthropods by intensifying GABA-mediated transmission of signals in peripheral nerves.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 63,
    lecturer: "Dr. Ekeke",
    topic_area: "Anthelmintics & Antiprotozoals",
    question_text: `a) What is the mechanism of action of niclosamide? (5 marks)
b) What is the drug of choice for schistosomiasis? What is its mechanism of action? (5 marks)
c) What is the drug of choice for onchocerciasis? What is its mechanism of action? (5 marks)
d) What is the drug of choice for strongyloidiasis? (5 marks)`,
    model_answer: `a) Niclosamide – MOA

Adult worms (not ova) are rapidly killed by inhibition of oxidative phosphorylation or stimulation of ATPase activity.

b) Drug of choice for schistosomiasis

Drug of Choice: Praziquantel

MOA: Increases permeability of trematode and cestode cell membranes to calcium → paralysis, dislodgement, and death.

c) Drug of choice for onchocerciasis

Drug of Choice: Ivermectin

MOA: Paralyzes nematodes and arthropods by intensifying GABA-mediated transmission in peripheral nerves. Microfilaricidal; does not effectively kill adult worms.

d) Drug of choice for strongyloidiasis

Ivermectin (200mcg/kg once daily for 2 days).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 64,
    lecturer: "Dr. Ekeke",
    topic_area: "Anthelmintics & Antiprotozoals",
    question_text: `a) What is the drug of choice for hydatid disease? (5 marks)
b) What is the mechanism of action of diethylcarbamazine? (5 marks)
c) What is the mechanism of action of pyrantel pamoate? (5 marks)
d) What is the mechanism of action of metrifonate? (5 marks)`,
    model_answer: `a) Drug of choice for hydatid disease

Albendazole (400mg twice daily with meals for 1 month or more).

b) Diethylcarbamazine – MOA

Immobilizes microfilariae and alters their surface structure, displacing them from tissues and making them more susceptible to destruction by host defence mechanisms.

c) Pyrantel pamoate – MOA

Neuromuscular blocking agent that causes release of acetylcholine and inhibition of cholinesterase → paralysis of worms → expulsion.

d) Metrifonate – MOA

Cholinesterase inhibition → temporarily paralyzing adult worms → transit from bladder vasculature to small arterioles in lungs where they are killed.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 65,
    lecturer: "Dr. Ekeke",
    topic_area: "Antiprotozoals",
    question_text: `a) What is the mechanism of action of oxamniquine? (5 marks)
b) What is the mechanism of action of metronidazole? State 3 pharmacological uses. (5 marks)
c) What is the mechanism of action of pentamidine? State 3 pharmacological uses. (5 marks)
d) What is the use of iodoquinol? State 2 adverse effects. (5 marks)`,
    model_answer: `a) Oxamniquine – MOA

Active against mature and immature stages of S. mansoni. Contraction and paralysis of worms → detachment from terminal venules in mesentery → transit to liver where many die.

b) Metronidazole – MOA and uses

MOA: Disrupts DNA synthesis and inhibits nucleic acid synthesis.

Uses: Trichomoniasis, Amebiasis, Giardiasis, Anaerobic infections, Antibiotic-associated pseudomembranous colitis.

c) Pentamidine – MOA and uses

MOA: Inhibits production of nucleic acids (DNA, RNA); binds to and aggregates single strands; inhibits nucleo-metabolism, protein and RNA synthesis, and intracellular amino acid transport.

Uses: P. carinii pneumonia, Leishmaniasis, Trypanosomiasis.

d) Iodoquinol – use and adverse effects

Use: Luminal or contact amebicide; acts primarily in intestinal lumen; used for intestinal amoebiasis in asymptomatic carriers.

Adverse Effects: Agranulocytosis, Rash/pruritus, Peripheral neuropathy, Blurred vision, Optic neuritis.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 66,
    lecturer: "Dr. Ekeke",
    topic_area: "Antiprotozoals",
    question_text: `a) State the drug treatment for intestinal amoebiasis (luminal and tissue amebicides). (5 marks)
b) Define ACUTE and CHRONIC toxicity studies and list 4 characteristics of each. (5 marks)
c) Define LD50 and state its significance. (5 marks)
d) List 5 factors that affect LD50. (5 marks)`,
    model_answer: `a) Drug treatment for intestinal amoebiasis

Luminal amebicides: Iodoquinol, Paromomycin
Tissue amebicides: Metronidazole, Tinidazole

b) Acute and Chronic toxicity studies

Acute toxicity studies: Determine short-term adverse effects of a drug when administered in a single dose or multiple doses within 24 hrs. Mammals used.

Characteristics of Acute Toxicity:
• Toxicity is sudden in onset
• Problems rapidly change
• Toxicity is severe in nature
• Relatively short duration
• Caused by large dose of weak toxin or small dose of potent toxin

Chronic toxicity studies: Provide information on health hazards from repeated exposure over considerable part of lifespan. Duration: 6 months to 1 year.

Characteristics of Chronic Toxicity Studies:
• Conducted with minimum one rodent and one non-rodent species
• Test compound administered over more than 90 days
• Provides information about long-term effects
• Expensive and time-consuming
• Used to extrapolate human safety

c) LD50 – definition and significance

LD50 = amount of material, given all at once, which causes death of 50% of a group of test animals. Statistically derived dose expected to cause death in 50% of treated animals in a given period.

Significance: Imprecise value; not a biological constant; approximate LD50 values sufficient for practical purposes; more emphasis should be placed on signs of toxicity, target organs, and other factors.

d) 5 factors that affect LD50

Route of exposure
Species (rat, mouse)
Personnel handling
Time of experiment
Laboratory equipment and chemicals used`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 67,
    lecturer: "Dr. Ekeke",
    topic_area: "Toxicology",
    question_text: `a) What are the 3 principles of toxicology? (5 marks)
b) What are the 2 specialised areas of toxicology? (5 marks)
c) What is the difference between graded and quantal dose-response? (5 marks)
d) Discuss the management of poisoning in a patient. (5 marks)`,
    model_answer: `a) 3 principles of toxicology

Descriptive Toxicologist: Performs toxicity tests to evaluate risk
Mechanistic Toxicologist: Determines how chemicals exert deleterious effects
Regulatory Toxicologist: Judges whether drug/chemical has low enough risk for availability

b) 2 specialised areas of toxicology

Forensic Toxicology: Medicolegal aspects; postmortem investigations
Clinical Toxicology: Diseases caused by toxic substances; treatment of poisoned patients

c) Graded vs quantal dose-response

Graded: In an individual; greater magnitude of response as dose increases
Quantal: In a population; percentage affected increases as dose is raised; effect present or absent

d) Management of poisoning in a patient

• Withdrawal of patient from suspected sources and retarding absorption of poison (gastric lavage, emesis, activated charcoal, whole bowel irrigation)
• Maintenance of vital organs – airway, ventilation, vital signs
• Treatment with specific antidotes – antagonism of pharmacological effect, reversal of physiological effect, alteration of tissue distribution, chelation
• Supportive care`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 68,
    lecturer: "Dr. Ekeke",
    topic_area: "Toxicology & Antidotes",
    question_text: `a) List 10 poisons and their antidotes. (5 marks)
b) Discuss in less than 300 words, Mushroom poisoning. (5 marks)
c) Mention 5 organophosphorus pesticides & state their mechanism of intoxication. (5 marks)
d) Explain briefly what is responsible for the hepatotoxicity of acetaminophen and its pharmacological intervention. (5 marks)`,
    model_answer: `a) 10 poisons and their antidotes

Poison | Antidote
Opiates | Naloxone
Ethylene glycol | Ethanol
Anticholinergics | Physostigmine
Organophosphates | Atropine
Isoniazid | Pyridoxine
Beta blockers | Glucagon
Tricyclic antidepressants | Bicarbonate
Digitalis | Digoxin-specific antibody
Benzodiazepines | Flumazenil
Calcium channel blockers | Calcium
Methanol | Absolute alcohol
Cyanide | Hydroxocobalamine
Mercury | N-acetyl penicillamine
Arsenical | Dimercaprol
Heavy metals | EDTA
Copper | D-penicillamine
Thallium | Prussian blue

b) Mushroom poisoning

Mushroom poisoning is divided into rapid-onset and delayed-onset. Rapid onset: apparent within 30 min–2 hrs. Some produce stomach upset; others have disulfiram-like effects; some cause hallucinations; a few (Inocybe species) produce signs of muscarinic excess: nausea, vomiting, diarrhea, urinary urgency, sweating, salivation, bronchoconstriction. Parenteral atropine (1–2 mg) is effective treatment. Delayed onset: usually by Amanita phalloides, Amanita virosa, Galerina autumnalis; first symptoms 6–12 hrs after ingestion. Major toxicity involves hepatic and renal cellular injury by amatoxins that inhibit RNA polymerase. Atropine is of no value in this form.

c) 5 organophosphorus pesticides & mechanism of intoxication

5 Organophosphorus Pesticides: Parathion, Malathion, Chlorpyrifos, Diazinon, Echothiophate.

Mechanism: Irreversibly inhibit acetylcholinesterase by phosphorylating serine hydroxyl group at active site → accumulation of ACh at all cholinergic synapses → cholinergic crisis (SLUDGE syndrome, miosis, bradycardia, bronchoconstriction, muscle fasciculations, paralysis, respiratory failure).

d) Hepatotoxicity of acetaminophen and treatment

When high doses of acetaminophen are ingested, it undergoes N-hydroxylation followed by dehydration to form N-acetyl parabenzoquinone (NAPQI) – toxic metabolite. Normally inactivated by conjugation with hepatic glutathione. In overdose, glutathione depleted → NAPQI accumulates → necrosis of liver cells and kidney damage.

Treatment: Administer agents that increase glutathione (acetylcysteine) or increase conjugation reactions (methionine, cysteamine).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 69,
    lecturer: "Dr. Ekeke",
    topic_area: "Heavy Metal Poisoning",
    question_text: `a) State the treatment of lead poisoning in symptomatic children. (5 marks)
b) State the treatment of mercury poisoning. Why is dimercaprol contraindicated in methyl mercury poisoning? (5 marks)
c) State the treatment of arsenic poisoning. (5 marks)
d) State the treatment of cadmium poisoning. (5 marks)`,
    model_answer: `a) Treatment of lead poisoning in symptomatic children

Therapy started with dimercaprol 75mg/m² every 4 hourly IM. Dimercaprol stopped after 48 hours; calcium edetic acid (EDTA) used for another 3 days.

b) Treatment of mercury poisoning

Treatment: Acute poisoning – gastric lavage/emesis, catharsis; Dimercaprol (IM) as antidote (most useful within 2 hours); Acetylpenicillamine orally (as effective and less toxic); Raw white of egg in water/milk; Activated charcoal.

Contraindication in methyl mercury: Dimercaprol may increase brain concentration of methyl mercury.

c) Treatment of arsenic poisoning

Bowel irrigation with polyethylene glycol; Dimercaprol should be started immediately; Manage renal complications in acute arsine exposure with hemolytic anemia.

d) Treatment of cadmium poisoning

If ingested, give milk or beaten eggs to relieve GIT irritation. Catharsis with sodium sulphate removes unabsorbed cadmium. Value of chelating agents doubtful. CaNa₂ EDTA still recommended.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 70,
    lecturer: "Dr. Ekeke",
    topic_area: "Heavy Metal Poisoning & Envenomation",
    question_text: `a) State the treatment of chromium poisoning. (5 marks)
b) State the treatment of manganese poisoning. (5 marks)
c) State the treatment of antimony poisoning. (5 marks)
d) State the antidote for thallium poisoning and its mechanism. (5 marks)`,
    model_answer: `a) Treatment of chromium poisoning

Treatment is purely symptomatic. Gastric lavage or emesis removes ingested poison.

b) Treatment of manganese poisoning

Stopping exposure to manganese and treating symptoms. CaNa₂ EDTA may be used. Levodopa effective for parkinsonian-like symptoms.

c) Treatment of antimony poisoning

Treatment for ingested poison: gastric lavage and catharsis. Dimercaprol is effective chelating agent.

d) Antidote for thallium poisoning and its mechanism

Antidote: Prussian Blue

Mechanism: Enhances thallium excretion and may speed recovery by exchanging potassium for thallium in the gastrointestinal tract.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 71,
    lecturer: "Dr. Ekeke",
    topic_area: "Envenomation",
    question_text: `a) What is the antidote for lead? Mercury? Arsenic? Thallium? (5 marks)
b) State the steps taken in the management/treatment of Scorpion bite/sting. (5 marks)
c) State the emergency measures for a snake bite. Why is a tourniquet not recommended? (5 marks)
d) Explain briefly the main trigger and process of generation of action potential in the presynaptic neuron. What is the end product of the entire process? (5 marks)`,
    model_answer: `a) Antidotes for heavy metals

Lead: Dimercaprol + Calcium EDTA
Mercury: Dimercaprol, Acetylpenicillamine
Arsenic: Dimercaprol
Thallium: Prussian Blue

b) Management of Scorpion bite/sting

• Immobilize patient and bitten part
• Apply constriction band (as in snake bite)
• Cold pack (10-15°C) applied to affected part for a few hours
• Arterial respiration with O₂ if necessary
• Calcium gluconate 10 ml of 10% solution by slow IV for muscle pain
• Diazepam for convulsions
• Specific antitoxin (after sensitivity test)
• Smaller the patient, greater the effect

c) Emergency measures for snake bite

Emergency Measures:
• Immobilize patient and bitten part in horizontal position
• Tie bandage/tourniquet around limb above bite site (occlude lymph drainage and superficial veins only)
• Loosen band for 1 minute every 10 minutes
• Making incision through fang marks and sucking (within 30 minutes)
• Transfer patient to hospital
• Remove band 1-2 hours after administering antiserum
• Take killed snake for identification

Tourniquet not recommended: A tourniquet occludes deep veins and arteries, which can cause ischemia and necrosis. It should only occlude lymph drainage and superficial veins, not anterior and deep veins.

d) Action potential in presynaptic neuron

Trigger: Action potential propagates down axon of presynaptic neuron into synaptic terminal → activates voltage-sensitive calcium channels in membrane of terminal.

Process: As calcium flows into terminal, increase in intraterminal calcium concentration promotes fusion of synaptic vesicles with presynaptic membrane → neurotransmitter contained in vesicle is released into synaptic cleft → diffuses to receptors on postsynaptic membrane.

End Product: Neurotransmitter release into synaptic cleft → binding to postsynaptic receptors → generation of excitatory postsynaptic potential (EPSP) or inhibitory postsynaptic potential (IPSP).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 72,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) List the types of insulin preparations with onset and duration. (5 marks)
b) State the endocrine effects of insulin on the liver. (5 marks)
c) State the endocrine effects of insulin on muscle. (5 marks)
d) State the endocrine effects of insulin on adipose tissue. (5 marks)`,
    model_answer: `a) Types of insulin preparations

Type | Examples | Onset | Duration
Rapid-acting | Insulin aspart, glulisine, lispro | 4-20 min | 3-5 hrs
Short-acting | Insulin regular | 15 min | 17-24 hrs
Intermediate-acting | NPH (Humulin-N) | 1-3 hrs | Up to 18 hrs
Long-acting | Insulin detemir, glargine | 90 min | 16-24 hrs
Ultra-long-acting | Degludec, glargine | 90 min | 30-42 hrs

b) Endocrine effects of insulin on the liver

• Reversal of catabolic features of insulin deficiency
• Inhibits glycogenolysis
• Inhibits conversion of amino acids to glucose
• Inhibits conversion of fatty acids and amino acids to ketoacids
• Promotes glucose storage as glycogen
• Increases triglyceride synthesis and VLDL formation

c) Endocrine effects of insulin on muscle

• Increased protein synthesis
• Increases amino acid transport
• Increased glycogen synthesis
• Increases ribosomal protein synthesis
• Increases glucose transport
• Induces glycogen synthase and inhibits phosphorylase

d) Endocrine effects of insulin on adipose tissue

• Increased triglyceride storage
• Lipoprotein lipase is induced and activated by insulin to hydrolyze triglycerides from lipoproteins
• Glucose transport into cells provides glycerol phosphate to permit esterification of fatty acids
• Intracellular lipase is inhibited by insulin`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 73,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) List 5 complications of insulin therapy. (5 marks)
b) What are the species of insulin? (5 marks)
c) What is the mechanism of action of insulin at the cellular level (GLUT4)? (5 marks)
d) What is the significance of C-peptide? (5 marks)`,
    model_answer: `a) 5 complications of insulin therapy

• Hypoglycemia
• Lipodystrophy (atrophy of subcutaneous fatty tissue at injection site)
• Weight gain
• Local injection site reactions
• Insulin resistance

b) Species of insulin

Beef and pork insulins
Human insulins (recombinant DNA techniques using E. coli or yeast)

c) Insulin MOA at cellular level (GLUT4)

Insulin stimulation of glucose uptake occurs through translocation of GLUT4 (Glucose transporter Type 4)-containing storage vesicles (GSVs) to plasma membrane. Resultant increase in intracellular glucose-6-phosphate production, together with coordinated dephosphorylation of glycogen metabolic proteins, enables net glycogen synthesis.

d) Significance of C-peptide

Measurement of C-peptide provides a better index of insulin levels because insulin undergoes significant hepatic and renal extraction, so plasma insulin levels may not accurately reflect insulin production. C-peptide is co-secreted with insulin.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 74,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) What are the functions of glucagon? (5 marks)
b) What are the clinical uses of glucagon? (5 marks)
c) What is the mechanism of action of glucagon? (5 marks)
d) Discuss briefly, sulfonylureas under: (i) Classification (ii) Mechanism of action (iii) Adverse effects. (5 marks)`,
    model_answer: `a) Functions of glucagon

• Major function: help regulate blood glucose levels
• Increases blood sugar level and prevents it from dropping too low
• Triggers liver to convert stored glucose (glycogen) into usable form and release it into bloodstream

b) Clinical uses of glucagon

• Severe hypoglycemia: Emergency treatment of severe hypoglycemic reactions in Type 1 diabetes when unconsciousness precludes oral feedings and IV glucose not possible
• Endocrine diagnosis: Test of pancreatic β cell secretory reserve (measure C-peptide)
• Beta-blocker poisoning: Reversing cardiac effects of β-blocking agent overdose
• Radiology of the bowel: Aid to x-ray visualization (relaxes intestine)

c) Mechanism of action of glucagon

First six amino acids of amino terminal bind to specific receptors on liver cells → Gs protein-linked increase in adenylyl cyclase activity → production of cAMP → catabolism of stored glycogen, increased gluconeogenesis and ketogenesis.

d) Sulfonylureas

Classification: Second-generation: Glyburide, Glipizide, Glimepiride.

MOA: Stimulate insulin release from β cells of pancreas. Block ATP-sensitive K⁺ channels → depolarization → Ca²⁺ influx → insulin exocytosis.

Adverse Effects: Weight gain, hyperinsulinemia, hypoglycemia. Caution in hepatic/renal insufficiency.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 75,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) State the mechanism of action of biguanides (metformin). State their pharmacokinetics and adverse effects. (5 marks)
b) Write short note on: Metformin. (5 marks)
c) State the mechanism of action of glinides. (5 marks)
d) State the mechanism of action of thiazolidinediones (TZDs). (5 marks)`,
    model_answer: `a) Biguanides (metformin) – MOA, PK, adverse effects

MOA: Reduction of hepatic gluconeogenesis; slows intestinal absorption of sugars; improves peripheral glucose uptake and utilization.

PK: Well absorbed orally, not bound to serum proteins, not metabolized, excreted via urine.

Adverse Effects: Largely gastrointestinal. Contraindicated in renal dysfunction (lactic acidosis risk). Discontinue in acute MI, exacerbation of heart failure, sepsis. Long-term use may interfere with vitamin B12 absorption.

b) Metformin

Metformin is the only biguanide, classified as an insulin sensitizer. It increases glucose uptake and use by target tissues, decreasing insulin resistance. Unlike sulfonylureas, it does not promote insulin secretion. ADA recommends metformin as initial drug of choice for Type 2 diabetes. Also effective in PCOS (lowers insulin resistance, can result in ovulation and pregnancy).

c) Glinides – MOA

Stimulate insulin secretion. Bind to distinct site on β cell, closing ATP-sensitive K⁺ channels → release of insulin. Rapid onset and short duration of action. Postprandial glucose regulators. Should not be used with sulfonylureas (overlapping mechanisms → serious hypoglycemia).

d) Thiazolidinediones (TZDs) – MOA

Lower insulin resistance by acting as agonists for peroxisome proliferator-activated receptor-γ (PPARγ), a nuclear hormone receptor. Activation regulates transcription of insulin-responsive genes → increased insulin sensitivity in adipose tissue, liver, skeletal muscle.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 76,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) State the mechanism of action of α-glucosidase inhibitors and their adverse effects. (5 marks)
b) State the mechanism of action of DPP-4 inhibitors. (5 marks)
c) State the mechanism of action of SGLT2 inhibitors and their adverse effects. (5 marks)
d) List 3 pharmacological uses of levothyroxine. (5 marks)`,
    model_answer: `a) α-glucosidase inhibitors – MOA and adverse effects

MOA: Reversibly inhibit glycosidase enzymes in intestine brush border. When taken at start of meal, delay digestion of carbohydrates → lower postprandial glucose levels.

Adverse Effects: Flatulence, diarrhea, abdominal cramping.

b) DPP-4 inhibitors – MOA

Inhibit enzyme DPP-4, responsible for inactivation of incretin hormones such as GLP-1. Prolonging activity of incretin hormones increases release in response to meal and reduces inappropriate secretion of glucagon.

c) SGLT2 inhibitors – MOA and adverse effects

MOA: Inhibit SGLT2 in kidney → decrease reabsorption of glucose → increase urinary glucose excretion → lower blood glucose. Also decreases sodium reabsorption → osmotic diuresis.

Adverse Effects: Female genital mycotic infections, urinary tract infections, urinary frequency, hypotension.

d) 3 pharmacological uses of levothyroxine

• Treatment of hypothyroidism
• Hormone replacement therapy
• Long-term replacement (once-daily dosing)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 77,
    lecturer: "Dr. Ekeke",
    topic_area: "Thyroid & Antithyroid Drugs",
    question_text: `a) State the mechanism of action and 2 uses of methimazole. (5 marks)
b) What is the mechanism of action of propylthiouracil (PTU)? Why is it preferred in pregnancy? (5 marks)
c) List 2 thyroid agents and 2 antithyroid agents. (5 marks)
d) List the hormones secreted by the anterior pituitary gland. (5 marks)`,
    model_answer: `a) Methimazole – MOA and uses

MOA: Inhibits incorporation of iodine into amino acids through tyrosine → blocks T3/T4 synthesis.

Uses: Palliation of hyperthyroidism; prevention of thyroid hormone surge after surgery or radioactive iodine therapy.

b) Propylthiouracil (PTU) – MOA and why preferred in pregnancy

MOA: Inhibits incorporation of iodine into tyrosine → blocks T3/T4 synthesis; also inhibits peripheral conversion of T4 to T3.

Preferred in pregnancy: Because it also inhibits peripheral conversion of T4 to T3, which is beneficial in thyroid storm.

c) Thyroid and antithyroid agents

Thyroid Agents: Levothyroxine, Liothyronine
Antithyroid Agents: Propylthiouracil (PTU), Methimazole

d) Hormones secreted by anterior pituitary

GH (Growth hormone), TSH (Thyroid stimulating hormone), ACTH (Adrenocorticotropin hormone), LH (Leutenizing hormone), FSH (Follicle stimulating hormone), Prolactin.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 78,
    lecturer: "Dr. Ekeke",
    topic_area: "Pituitary Hormones",
    question_text: `a) Which hormone is released by the anterior pituitary in response to GHRH? (5 marks)
b) Which hypothalamic hormone inhibits growth hormone release? (5 marks)
c) List the hormones secreted by the posterior pituitary gland. (5 marks)
d) What is the function of oxytocin? (5 marks)`,
    model_answer: `a) Hormone released in response to GHRH

Growth hormone (GH).

b) Hypothalamic hormone that inhibits GH release

Somatostatin.

c) Hormones secreted by posterior pituitary

Oxytocin, Antidiuretic hormone (ADH/vasopressin).

d) Function of oxytocin

Stimulates muscular contractions in uterus and myoepithelial contractions in breast; involved in parturition and milk let-down.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 79,
    lecturer: "Dr. Ekeke",
    topic_area: "Pituitary Hormones",
    question_text: `a) Mention the therapeutic uses and adverse effects of Oxytocin therapy. (5 marks)
b) What is the function of ADH (vasopressin)? (5 marks)
c) What is the difference between diabetes insipidus and diabetes mellitus? (5 marks)
d) What is the therapeutic use of octreotide? (5 marks)`,
    model_answer: `a) Therapeutic uses and adverse effects of Oxytocin

Uses: Induction of labour, augmentation of labour, control of postpartum hemorrhage.

Adverse Effects: Fetal distress from excessive contraction, fluid retention/water intoxication (hyponatremia, heart failure, seizure), hypotension from bolus injection.

b) Function of ADH (vasopressin)

Possesses antidiuretic and vasopressor properties. Released in response to rising plasma tonicity or falling BP. Deficiency results in central diabetes insipidus.

c) Difference between diabetes insipidus and diabetes mellitus

Diabetes insipidus: Deficiency of ADH → excessive urination without hyperglycemia.
Diabetes mellitus: Deficiency of insulin or insulin resistance → hyperglycemia and glycosuria.

d) Therapeutic use of octreotide

Reduces symptoms caused by hormone-secreting conditions: acromegaly, carcinoid tumor, gastrinoma, glucagonoma, insulinoma, secretory diarrhea associated with HIV.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 80,
    lecturer: "Dr. Ekeke",
    topic_area: "Pituitary Hormones",
    question_text: `a) What is the mechanism of action of octreotide? (5 marks)
b) What is the mechanism of action of pegvisomant? (5 marks)
c) What are the adverse effects of octreotide therapy? (5 marks)
d) What is the mechanism of action of desmopressin? Why is it preferred over vasopressin? (5 marks)`,
    model_answer: `a) Octreotide – MOA

Somatostatin analog; 45 times more potent than somatostatin in inhibiting GH release.

b) Pegvisomant – MOA

GH receptor antagonist used to treat acromegaly. PEG derivative of mutant GH, B2036. Pegylation reduces clearance. Has two GH receptor binding sites with differential affinity, allowing initial GH receptor dimerization but blocking conformational changes required for signal transduction.

c) Adverse effects of octreotide therapy

Nausea, vomiting, abdominal cramps, flatulence, steatorrhea, biliary sludge/gallstones, Vitamin B12 deficiency (long-term).

d) Desmopressin – MOA and why preferred

MOA: Long-acting synthetic analog of vasopressin with minimal pressor activity. Acts on V₂ receptors in renal tubule → increases water permeability and reabsorption.

Preferred: Minimal V₁ activity (largely free of pressor effects); longer acting than vasopressin.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 81,
    lecturer: "Dr. Ekeke",
    topic_area: "Pituitary & Calcium Metabolism",
    question_text: `a) What are the clinical uses of growth hormone (somatotropin)? (5 marks)
b) What are the 3 principal hormones controlling serum calcium and phosphorus? (5 marks)
c) What is the mechanism of action of calcitonin? (5 marks)
d) What is the mechanism of action of vitamin D? (5 marks)`,
    model_answer: `a) Clinical uses of growth hormone

GH deficiency, Growth failure in children, Treatment of HIV patients with cachexia, Prader-Willi syndrome, Turner's syndrome.

b) 3 principal hormones controlling serum calcium and phosphorus

1,25-dihydroxyvitamin D
Fibroblast growth factor (FGF 23)
Parathyroid hormone (PTH)

c) Calcitonin – MOA

Reduces serum calcium and phosphorus by inhibiting bone resorption and stimulating their renal excretion.

d) Vitamin D – MOA

Active form binds to intracellular receptors that function as transcription factors to modulate gene expression. Enhances absorption of calcium and phosphate from intestines; enhances reabsorption from bone; enhances proximal tubular reabsorption in kidney.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 82,
    lecturer: "Dr. Ekeke",
    topic_area: "Calcium Metabolism & Fertility",
    question_text: `a) What is the mechanism of action of PTH? (5 marks)
b) List the gonadotropin preparations. (5 marks)
c) What are the adverse effects of gonadotropin preparations (MOHDGP)? (5 marks)
d) What are the effects of ovarian hyperstimulation syndrome (OHSS – OATHEL)? (5 marks)`,
    model_answer: `a) PTH – MOA

Increases calcium and phosphate absorption from gut; in kidney, reduces calcium but increases phosphorus excretion.

b) Gonadotropin preparations

Menotropins (FSH+LH), Urofollitropin (FSH), Follitropin alfa/beta (recombinant FSH), Lutropin alfa (recombinant LH), hCG (human chorionic gonadotropin).

c) Adverse effects of gonadotropin preparations (MOHDGP)

Ovarian Hyperstimulation Syndrome (OHSS), Multiple pregnancy, Ovarian enlargement, Hypovolemia, Ascites, Liver dysfunction, Electrolyte imbalance, Thromboembolic events, Pulmonary edema, Headache, Depression, Edema, Precocious puberty, Production of antibodies to hCG.

d) Effects of ovarian hyperstimulation syndrome (OHSS – OATHEL)

Ovarian enlargement, Ascites, Thromboembolic events, Hypovolemia, Electrolyte imbalance, Liver dysfunction.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 83,
    lecturer: "Dr. Ekeke",
    topic_area: "Fertility & Lactation",
    question_text: `a) Write short note on: Clomiphene Citrate. (5 marks)
b) What is the mechanism of action of metformin in PCOS? (5 marks)
c) DISCUSS the mechanism of action of one anti-fertility agent. (5 marks)
d) What is the mechanism of action of norethindrone as an antifertility agent? (3 mechanisms) (5 marks)`,
    model_answer: `a) Clomiphene Citrate

Clomiphene Citrate is a fertility agent. It binds to estrogen receptors in the hypothalamus → blocks estrogen negative feedback → ↑ GnRH release → ↑ FSH and LH → stimulates ovulation. Used for ovulation induction in anovulatory infertility, especially PCOS. Effective only when pituitary and ovaries are functional.

b) Metformin in PCOS – MOA

Reduces insulin resistance → lowers androgen levels → restores ovulation.

c) Mechanism of action of one anti-fertility agent

Norethindrone (Progestin):
• Thickens cervical mucus → forms mucus plug preventing sperm passage
• Inhibits ovulation → suppresses LH surge
• Alters endometrium → prevents implantation

d) Norethindrone as antifertility agent (3 mechanisms)

• Thickens cervical mucus (mucus plug) → prevents sperm passage
• Inhibits ovulation (suppresses LH surge)
• Alters endometrium → prevents implantation`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 84,
    lecturer: "Dr. Ekeke",
    topic_area: "Fertility & Lactation",
    question_text: `a) What is the mechanism of action of ethinylestradiol as an antifertility agent? (5 marks)
b) Explain the mechanism of Lactation & state 5 inducers and 5 inhibitors of lactation. (5 marks)
c) Describe the mechanism of milk ejection (let-down reflex) including the hormone involved. (5 marks)
d) What is the mechanism of action of cabergoline? (5 marks)`,
    model_answer: `a) Ethinylestradiol as antifertility agent – MOA

Inhibits ovulation → suppresses FSH secretion → prevents follicular development. Stabilizes endometrium.

b) Mechanism of Lactation & inducers and inhibitors

Mechanism: Suckling → paraventricular and supraoptic nuclei (hypothalamus) → posterior pituitary releases oxytocin → contraction of myoepithelial cells → milk ejection (let-down reflex). Prolactin required for milk synthesis.

Inducers (5): Metoclopramide, Domperidone, Sulpiride, Oxytocin, Prolactin/HGH/TRH.

Inhibitors (5): Bromocriptine, Cabergoline, Selegiline, Levodopa, Clonidine.

c) Mechanism of milk ejection (let-down reflex)

Suckling → paraventricular/supraoptic nuclei → posterior pituitary releases oxytocin → oxytocin stimulates contraction of myoepithelial cells surrounding alveoli → increased pressure → milk flows through duct system → released through nipple. Enhanced by oxytocin. Stress/anxiety can cause difficulties.

d) Cabergoline – MOA

Ergot derivative and potent dopamine receptor agonist on D₂ receptors. Frequently used as 1st line agent in management of prolactinomas due to higher affinity for D₂ receptor sites and less severe side effects than bromocriptine.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 85,
    lecturer: "Dr. Ekeke",
    topic_area: "Adrenocortical Antagonists",
    question_text: `a) Mention the Adrenocortical Antagonist drugs/agents. (5 marks)
b) What are the 2 subclasses of adrenocortical antagonists? (5 marks)
c) Give 2 examples of mineralocorticoid antagonists. (5 marks)
d) Give 2 examples of glucocorticoid antagonists/synthesis inhibitors. (5 marks)`,
    model_answer: `a) Adrenocortical Antagonist drugs/agents

Glucocorticoid antagonists/synthesis inhibitors: Metyrapone, Aminoglutethimide, Ketoconazole, Mifepristone, Mitotane, Trilostane.

Mineralocorticoid antagonists: Spironolactone, Eplerenone, Drospirenone.

b) 2 subclasses of adrenocortical antagonists

Mineralocorticoid antagonists
Glucocorticoid antagonists/synthesis inhibitors

c) 2 examples of mineralocorticoid antagonists

Spironolactone, Eplerenone (also Drospirenone).

d) 2 examples of glucocorticoid antagonists/synthesis inhibitors

Metyrapone, Aminoglutethimide (also Ketoconazole, Mifepristone, Mitotane, Trilostane).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 86,
    lecturer: "Dr. Ekeke",
    topic_area: "Adrenocortical Antagonists & Estrogen",
    question_text: `a) What is the mechanism of action of spironolactone? (5 marks)
b) What is the mechanism of action of mifepristone? (5 marks)
c) List 5 3rd generation synthetic progestins and any 5 of their therapeutic uses. (5 marks)
d) List the contraindications of Estrogen therapy. (5 marks)`,
    model_answer: `a) Spironolactone – MOA

Aldosterone antagonist → ↓ Na⁺ retention, ↓ K⁺ loss.

b) Mifepristone – MOA

Glucocorticoid receptor antagonist.

c) 5 3rd generation synthetic progestins and therapeutic uses

3rd Generation Progestins: Gestodene, Desogestrel, Norgestimate, Norelgestromin, Etonogestrel.

Therapeutic Uses:
• Contraception
• Hormone Replacement Therapy (HRT)
• Infertility & Pregnancy support
• Endometriosis & Dysmenorrhea
• Diagnostic test (progesterone challenge test)

d) Contraindications of Estrogen therapy

History of breast cancer
Undiagnosed genital bleeding
Liver disease
History of thromboembolic disorders (DVT, PE)
Heavy smokers`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 87,
    lecturer: "Dr. Ekeke",
    topic_area: "Estrogen & Progestins",
    question_text: `a) State 4 pharmacological effects of estrogen. (5 marks)
b) State 3 mechanisms of action and 2 uses of progestin. (5 marks)
c) Enumerate six (6) classes of drugs used in the treatment of Bronchial Asthma. (5 marks)
d) Write on the Pharmacology of a named Anti-epileptic drug. (5 marks)`,
    model_answer: `a) 4 pharmacological effects of estrogen

• Female maturation (development of uterus, uterine tubes, vagina, secondary sexual characteristics)
• Endometrial effects (development of endometrial lining; continuous exposure → hyperplasia)
• Postmenopausal hormonal therapy (beneficial effect on circulating lipids)
• Other effects (nausea, breast tenderness, hyperpigmentation, migraine, hypertension, gallbladder disease)

b) Progestin – MOA and uses

MOA:
• Enters cell → binds progesterone receptors → ligand-receptor complex binds PRE → activates gene transcription
• Metabolites like allopregnanolone are positive allosteric modulators of GABA_A receptor → anxiolysis, sedation, anticonvulsant
• Potent antimineralocorticoid activity (competing with aldosterone)

Uses: Hormone Replacement Therapy (prevent estrogen-induced endometrial hyperplasia), Contraception.

c) 6 classes of drugs used in Bronchial Asthma

• Sympathomimetic agonists (β₂ agonists: salbutamol, terbutaline)
• Methylxanthines (theophylline, aminophylline)
• Antimuscarinic/muscarinic antagonists (ipratropium bromide)
• Corticosteroids (beclomethasone, prednisolone)
• Cromolyn & Nedocromil sodium
• Leukotriene pathway inhibitors (zileuton, zafirlukast, montelukast)
• Others: Anti-IgE monoclonal antibodies, calcium channel blockers, nitric oxide donors

d) Phenytoin – Pharmacology

MOA: Inhibits sodium channel function.
Spectrum: Effective in many forms of epilepsy but NOT absence seizures.
PK: Metabolism shows saturation kinetics; plasma concentration varies widely; monitoring needed. Drug interactions common.
Adverse Effects: Confusion, gum hyperplasia, skin rashes, anemia, teratogenesis.
Uses: Epilepsy, antidysrhythmic agent.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 88,
    lecturer: "Dr. Ekeke",
    topic_area: "CNS Pharmacology",
    question_text: `a) List 4 main drugs that belong to the first generation antipsychotics. (5 marks)
b) Classify drugs used in the treatment of depression with two examples of each. (5 marks)
c) Define general anesthesia and list 4 major divisions with examples. (5 marks)
d) List how convulsants are identified according to areas where they act. (5 marks)`,
    model_answer: `a) 4 first generation antipsychotics

Haloperidol
Fluphenazine
Prochlorperazine
Trifluoperazine
(Also: Chlorpromazine, Thioridazine)

b) Classification of antidepressants

Class | Examples
SSRIs | Fluoxetine, Sertraline
SNRIs | Venlafaxine, Duloxetine
TCAs | Amitriptyline, Imipramine
MAOIs | Phenelzine, Tranylcypromine
Atypical | Bupropion, Mirtazapine

c) General anesthesia – definition and 4 major divisions

Definition: Result in reversible loss of consciousness.

4 Major Divisions:
• Inhaled agents (Halothane, Isoflurane, Sevoflurane, Nitrous oxide)
• IV agents non-opioid (Thiopental, Propofol, Ketamine, Etomidate)
• IV opioid analgesics (Fentanyl, Alfentanil, Remifentanil)
• Muscle relaxants (Succinylcholine, Rocuronium, Vecuronium)

d) Convulsants – identification by area of action

• GABA receptor antagonists (Gabazine, Bemegride, Flumazenil)
• GABA synthesis inhibitors (3-Mercaptopropionic acid, Allylglycine)
• Glycine receptor antagonists (Strychnine, Bicuculline)
• Ionotropic glutamate receptor agonists (NMDA, AMPA, Kainic acid)
• Acetylcholine receptor agonists (Anatoxin, Pilocarpine)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 89,
    lecturer: "Dr. Ekeke",
    topic_area: "CNS Pharmacology",
    question_text: `a) What are tocolytic agents? Classify them based on the ones in common use in your environment. (5 marks)
b) What is a Diuretic agent? (5 marks)
c) Classify Diuretic agents with specific examples. (5 marks)
d) Define Angina pectoris and write short note on its pathology. (5 marks)`,
    model_answer: `a) Tocolytic agents – definition and classification

Definition: Drugs given to inhibit labour and maintain pregnancy (uterine relaxants).

Classification:
• β₂-adrenergic agonists (Ritodrine)
• Oxytocin receptor antagonists (Atosiban)
• Calcium channel blockers (Nifedipine)
• COX inhibitors (Indomethacin)
• Magnesium sulfate

b) Diuretic agent

A diuretic is an agent that increases the rate of urine flow.

c) Classification of Diuretic agents

Class | Examples | Site of Action
Loop diuretics | Furosemide | Thick ascending limb
Thiazides | Hydrochlorothiazide | Distal convoluted tubule
K⁺-sparing | Spironolactone | Collecting duct
CA inhibitors | Acetazolamide | Proximal tubule
Osmotic | Mannitol | Proximal tubule/descending limb

d) Angina pectoris – definition and pathology

Definition: Chest or heart pain caused by accumulation of metabolites resulting from myocardial ischemia.

Pathology: Follows three determinant factor groups:
• Determinants of myocardial oxygen demand (heart rate, contractility, arterial pressure, ventricular volume)
• Determinants of coronary blood flow and myocardial oxygen supply (aortic diastolic pressure, duration of diastole, coronary vascular resistance)
• Determinants of vascular tone (peripheral arteriolar and venous tone)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 90,
    lecturer: "Dr. Ekeke",
    topic_area: "Cardiovascular & Autacoids",
    question_text: `a) Write short note on HMG-CoA reductase inhibitors. (5 marks)
b) Mention the clinical applications of Helium gas in the respiratory system and state the neuroprotective effects. (5 marks)
c) Write short note on Anti-histamines. (5 marks)
d) State the effects of Histamine on the GIT, the heart and the blood vessels. (5 marks)`,
    model_answer: `a) HMG-CoA reductase inhibitors

Statins (Lovastatin, Simvastatin, Atorvastatin, Rosuvastatin) competitively inhibit HMG-CoA reductase, the rate-limiting step in cholesterol synthesis. ↓ LDL cholesterol → stabilize plaques → prevent MI & stroke. Adverse effects: GI upset, hepatitis, insomnia, myopathy, hepatotoxicity, teratogenic effect (contraindicated in pregnancy).

b) Helium gas – clinical applications and neuroprotective effects

Respiratory applications: COPD, ARDS, Acute Asthma exacerbation, Post exhibition obstruction, Pulmonary function testing.

Neuroprotective effects: Induction of Hypothermia, Infarct volume reduction, Neuroprotection in traumatic brain injury.

c) Anti-histamines

H1 antagonists are competitive blockers; action reversible. Classified into first and second generation.

First Generation: Antimuscarinic, local anesthetic, antiemetic, anti-motion sickness, antiparkinsonian, CNS depressants. Examples: Diphenhydramine, Promethazine, Chlorpheniramine, Meclizine.

Second Generation: Do not cross BBB; no antimuscarinic effect; no anti-motion/sedation; mainly used in allergies. Examples: Cetirizine, Loratadine, Fexofenadine.

d) Effects of Histamine

GIT: Increases parietal gastric acid secretion (H₂)
Heart: Increases SA nodal rate, positive inotropy, increases automaticity (H₂)
Blood vessels: Increases capillary dilatation via nitric oxide release; increases capillary permeability (H₁)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 91,
    lecturer: "Dr. Ekeke",
    topic_area: "Autacoids & Inflammation",
    question_text: `a) State the mechanism of action of antihistamine H2 receptor antagonist and mention the common adverse effects of IV administration of Cimetidine. (5 marks)
b) Discuss briefly the Pharmacological uses of Kinins and Anticoagulants. (5 marks)
c) Briefly outline the major receptors of Serotonin (5-HT). (5 marks)
d) Discuss briefly the synthesis of Eicosanoids. (5 marks)`,
    model_answer: `a) H2 receptor antagonists – MOA and adverse effects of IV Cimetidine

MOA: Competitively block binding of histamine to H₂ receptors → reduce secretion of gastric acid.

Adverse Effects of IV Cimetidine: Confusion, hallucination, agitation in elderly ICU patients, renal or hepatic impairment patients.

b) Pharmacological uses of Kinins and Anticoagulants

Kinins: Potent vasodilators (via nitric oxide & prostacyclin release); increase capillary permeability → edema; stimulate secretions; induce pain; enhance neutrophil migration; smooth muscle contraction.

Anticoagulants: Heparin activates antithrombin III → inhibits thrombin and factor Xa. Warfarin inhibits Vitamin K epoxide reductase (factors II, VII, IX, X). DOACs: Rivaroxaban (Factor Xa inhibitor), Dabigatran (direct thrombin inhibitor).

c) Major receptors of Serotonin (5-HT)

5-HT1 (Gi-coupled; CNS autoreceptors, smooth muscle), 5-HT2 (5-HT2a: visceral/vascular smooth muscle contraction, platelet aggregation; 5-HT2b: stomach contraction; 5-HT2c: choroid plexus, increases CSF), 5-HT3 (CTZ, NTS, parasympathetic, GIT), 5-HT4 (GIT peristalsis, CNS), 5-HT5-7 (CNS).

d) Synthesis of Eicosanoids

Arachidonic acid released from membrane phospholipids by phospholipase A2. Metabolized by three major enzyme systems:
• Cyclooxygenase (COX): produces prostaglandins and thromboxanes
• Lipoxygenase (LOX): produces leukotrienes and lipoxins
• Cytochrome P450 epoxygenase: produces EETs and HETEs

Two COX isoenzymes: COX-1 (constitutive, housekeeping) and COX-2 (inducible, inflammation).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 92,
    lecturer: "Dr. Ekeke",
    topic_area: "Autacoids & Cancer Chemotherapy",
    question_text: `a) List 5 classes of laxatives giving ONE example of each and state the adverse effects of serotonin (5HT3) antagonists group. (5 marks)
b) Write the 9 treatment strategies for cancer patients with explanations. (5 marks)
c) What is the difference between combined chemotherapy and combination chemotherapy? (5 marks)
d) What is the difference between neoadjuvant and adjuvant chemotherapy? (5 marks)`,
    model_answer: `a) 5 classes of laxatives and adverse effects of 5-HT3 antagonists

5 Classes of Laxatives:
• Bulk-forming laxatives – Psyllium
• Stool surfactant agents (softeners) – Docusate
• Osmotic laxatives – Lactulose
• Stimulant laxatives – Senna
• Castor oil – Ricinoleic acid

Adverse Effects of 5-HT3 Antagonists: Headache, dizziness, constipation.

b) 9 treatment strategies for cancer patients

• Induction chemotherapy – First-line treatment; mainly curative
• Combined chemotherapy – Use of drugs with other cancer treatments (surgery, radiation, hyperthermia)
• Consolidation chemotherapy – Given after remission to prolong disease-free time and survival
• Intensification chemotherapy – Identical to consolidation but uses different drug than induction
• Combination chemotherapy – Treatment with a number of different drugs simultaneously; chances of resistance minimal
• Neo-adjuvant chemotherapy – Given before local treatment (surgery/radiotherapy)
• Adjuvant chemotherapy – Given after local treatment (surgery/radiotherapy)
• Maintenance chemotherapy – Repeated low-dose treatment to prolong remission
• Salvage/Palliative chemotherapy – Given without curative intent; reduces tumour load and increases life expectancy

c) Combined vs combination chemotherapy

Combined chemotherapy: Use of drugs with other cancer treatments such as surgery, radiation therapy, or hyperthermia therapy.
Combination chemotherapy: Treatment with a number of different drugs simultaneously; chances of resistance are minimal.

d) Neoadjuvant vs adjuvant chemotherapy

Neoadjuvant: Given before local treatment (surgery or radiotherapy) when there is evidence of cancer present.
Adjuvant: Given after local treatment (surgery or radiotherapy).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 93,
    lecturer: "Dr. Ekeke",
    topic_area: "Cancer Chemotherapy",
    question_text: `a) What is induction chemotherapy? (5 marks)
b) What is consolidation chemotherapy? (5 marks)
c) What is intensification chemotherapy? (5 marks)
d) What is maintenance chemotherapy? (5 marks)`,
    model_answer: `a) Induction chemotherapy

First line of treatment of cancer with a chemotherapeutic drug. Mainly curative.

b) Consolidation chemotherapy

Given after remission in order to prolong disease-free time and survival.

c) Intensification chemotherapy

Identical to consolidation CT but a different drug than induction CT is used.

d) Maintenance chemotherapy

Repeated low dose treatment to prolong remission.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 94,
    lecturer: "Dr. Ekeke",
    topic_area: "Cancer Chemotherapy",
    question_text: `a) What is salvage/palliative chemotherapy? (5 marks)
b) List the Cytotoxic antibiotic drugs with examples. (5 marks)
c) What is the mechanism of action of anthracyclines? (5 marks)
d) What is the mechanism of action of bleomycin? (5 marks)`,
    model_answer: `a) Salvage/palliative chemotherapy

Given without curative intent but simply to reduce tumor load and increase life expectancy.

b) Cytotoxic antibiotic drugs

Anthracyclines: Doxorubicin, Daunorubicin
Bleomycin: Bleomycin
Actinomycins: Actinomycin D (Dactinomycin)
Mitomycins: Mitomycin C

c) Anthracyclines – MOA

Intercalation into DNA → inhibits topoisomerase II → blocks DNA replication and transcription.

d) Bleomycin – MOA

Induces DNA strand breaks by generating free radicals.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 95,
    lecturer: "Dr. Ekeke",
    topic_area: "Cancer Chemotherapy & Dermatologic Pharmacology",
    question_text: `a) What is the mechanism of action of actinomycin D? (5 marks)
b) What is the mechanism of action of mitomycin C? (5 marks)
c) List 2 examples of each group of these dermatological agents. (5 marks)
d) What is a dermatologic vehicle? Give 4 examples. (5 marks)`,
    model_answer: `a) Actinomycin D – MOA

Intercalates into DNA → inhibits RNA polymerase → blocks transcription.

b) Mitomycin C – MOA

Alkylating agent → cross-links DNA → inhibits DNA synthesis.

c) 2 examples of each dermatological agent group

Category | Examples
Ectoparasiticide | Permethrin, Lindane
Topical antifungal | Clotrimazole, Ketoconazole
Topical antiviral | Acyclovir, Penciclovir
Immunomodulators | Imiquimod, Tacrolimus
Trichogenic agents | Minoxidil, Finasteride

d) Dermatologic vehicle – definition and examples

Definition: Medium which facilitates cutaneous application.

Examples: Tinctures, creams, ointments, lotions.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 96,
    lecturer: "Dr. Ekeke",
    topic_area: "Dermatologic Pharmacology",
    question_text: `a) What is the difference in vehicle selection for acute inflammation vs chronic inflammation? (5 marks)
b) List 3 topical antibiotics used in acne vulgaris. (5 marks)
c) State the mechanism of action of imiquimod. (5 marks)
d) List 3 immunomodulatory agents used in dermatology. (5 marks)`,
    model_answer: `a) Vehicle selection for acute vs chronic inflammation

Acute inflammation with oozing, vesiculation, crusting: drying preparations (tinctures, wet dressings, lotions)
Chronic inflammation with xerosis, scaling, lichenification: lubricating preparations (creams, ointments)

b) 3 topical antibiotics used in acne vulgaris

Clindamycin, Erythromycin, Metronidazole (also Sodium sulfacetamide, Dapsone).

c) Imiquimod – MOA

Related to imiquimod's ability to stimulate peripheral mononuclear cells to release interferon α and to stimulate macrophage to produce interleukins 1, 6, 8 and tumor necrosis factor α (TNF-α).

d) 3 immunomodulatory agents used in dermatology

Imiquimod, Tacrolimus, Pimecrolimus.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 97,
    lecturer: "Dr. Ekeke",
    topic_area: "Dermatologic Pharmacology",
    question_text: `a) What is the drug of choice for scabies? What is its mechanism of action? (5 marks)
b) List 3 depigmentation agents. (5 marks)
c) What are psoralens used for? What must they be combined with to be effective? (5 marks)
d) What does SPF stand for? How is it determined? (5 marks)`,
    model_answer: `a) Drug of choice for scabies and MOA

Drug of Choice: Permethrin

MOA: Toxic to Sarcoptes scabei; less than 2% absorbed percutaneously; residual drug persists up to 10 days.

b) 3 depigmentation agents

Hydroquinone, Monobenzone, Mequinol.

c) Psoralens – use and combination

Used for repigmentation of depigmented macules of vitiligo. Must be photoactivated by long wavelength UV light (320-400 nm) to produce beneficial effect.

d) SPF – definition and determination

SPF: Sun Protection Factor. Measure of effectiveness in absorbing erythrogenic UV light. Determined by measuring minimal erythema dose with or without sunscreen in a group of normal people. Ratio of minimal erythema dose with sunscreen to minimal erythema dose without sunscreen is the SPF.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 98,
    lecturer: "Dr. Ekeke",
    topic_area: "Dermatologic Pharmacology",
    question_text: `a) State the mechanism of action of benzoyl peroxide. (5 marks)
b) List 3 drugs used for psoriasis. (5 marks)
c) State the mechanism of action of topical corticosteroids. (5 marks)
d) List 4 adverse effects of topical corticosteroids. (5 marks)`,
    model_answer: `a) Benzoyl peroxide – MOA

Penetrates stratum corneum or follicular openings unchanged and is converted metabolically to benzoic acid within epidermis and dermis.

b) 3 drugs used for psoriasis

Acitretin, Tazarotene, Calcipotriene (also biologic agents: etanercept, infliximab, adalimumab).

c) Topical corticosteroids – MOA

Based primarily on anti-inflammatory activity and secondarily on antimitotic effects of corticosteroids on human epidermis.

d) 4 adverse effects of topical corticosteroids

Atrophy, purpura, steroid rosacea, persistent erythema (also pustules, papules, perioral dermatitis, steroid acne, hypopigmentation, hypertrichosis, increased IOP, allergic contact dermatitis).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 99,
    lecturer: "Dr. Ekeke",
    topic_area: "Dermatologic & Ophthalmic Pharmacology",
    question_text: `a) What is minoxidil used for? State its mechanism of action. (5 marks)
b) What is the mechanism of action of eflornithine? What is it used for? (5 marks)
c) What is the vehicle classification in order of increasing ability to retard evaporation? (5 marks)
d) Name 2 oral antifungal agents. (5 marks)`,
    model_answer: `a) Minoxidil – use and MOA

Use: Trichogenic agent; effective in reversing terminal scalp hair loss associated with androgen alopecia.

MOA: Unknown.

b) Eflornithine – MOA and use

MOA: Irreversible inhibitor of ornithine decarboxylase that catalyzes rate-limiting step in biosynthesis of polyamines, required for cell division and differentiation. Inhibition affects rate of hair growth.

Use: Antitrichogenic agent; reduces facial hair growth in women.

c) Vehicle classification in order of increasing ability to retard evaporation

Tinctures < pastes < wet dressings < creams < gels < foams < aerosols < ointments < powders < lotions (least in tincture, greatest in ointment).

d) 2 oral antifungal agents

Fluconazole (Diflucan), Itraconazole (Sporanox), Ketoconazole (Nizoral), Griseofulvin, Terbinafine.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 100,
    lecturer: "Dr. Ekeke",
    topic_area: "Ophthalmic Pharmacology",
    question_text: `a) What is the mechanism of action of azoles? (5 marks)
b) What is the adverse effect of monobenzone that distinguishes it from hydroquinone and mequinol? (5 marks)
c) What are the 5 main categories of ophthalmic topical agents? (5 marks)
d) What is the mechanism of action of pilocarpine? What is its ocular effect? (5 marks)`,
    model_answer: `a) Azoles – MOA

Affect permeability of fungal cell by interfering with sterol biosynthesis pathway.

b) Adverse effect of monobenzone

Monobenzone causes irreversible depigmentation (permanent loss of melanocytes), whereas hydroquinone and mequinol cause temporary lightening.

c) 5 main categories of ophthalmic topical agents

Antivirals
Antibacterials
Antifungal
Autonomic agents (cholinergic agonists, anticholinesterases, muscarinic antagonists, sympathomimetics, adrenergic antagonists)
Immunomodulatory & antimitotic agents

d) Pilocarpine – MOA and ocular effect

MOA: Alkaloid with tertiary amine structure; stable to hydrolysis by AChE; exhibits muscarinic activity.

Ocular Effect: Miosis, contraction of ciliary muscle, spasm of accommodation.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 101,
    lecturer: "Dr. Ekeke",
    topic_area: "Ophthalmic Pharmacology",
    question_text: `a) What is the mechanism of action of timolol? What is its use in glaucoma? (5 marks)
b) List 4 adverse effects of topical glucocorticoids in the eye. (5 marks)
c) What is the mechanism of action of acetazolamide in glaucoma? (5 marks)
d) Outline the absorption pathway of an ophthalmic drug following topical application. (5 marks)`,
    model_answer: `a) Timolol – MOA and use in glaucoma

MOA: β-adrenergic antagonist; reduces aqueous humor production.

Use: Glaucoma, ocular hypertension.

b) 4 adverse effects of topical glucocorticoids in the eye

Development of posterior subcapsular cataracts
Secondary infections
Secondary open-angle glaucoma
Raised intraocular pressure (IOP)

c) Acetazolamide – MOA in glaucoma

Carbonic anhydrase inhibitor → reduces aqueous humor production → lowers IOP.

d) Absorption pathway of ophthalmic drug

Tears → cornea/conjunctiva → aqueous humour → intraocular tissues. Also: Tears → nasolacrimal duct → nasal mucosa → systemic circulation.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 102,
    lecturer: "Dr. Ekeke",
    topic_area: "Ophthalmic Pharmacology",
    question_text: `a) Outline the receptors present in the different parts of the eye. (5 marks)
b) What is the difference between a cholinergic agonist and an anticholinesterase in the eye? (5 marks)
c) Define anaemia. List 7 symptoms. (5 marks)
d) What is the distribution of iron in the body (percentages)? (5 marks)`,
    model_answer: `a) Receptors in different parts of the eye

Structure | Receptors
Corneal epithelium | β₂
Iris radial muscle | α₁ (mydriasis)
Iris sphincter muscle | M₃ (miosis)
Ciliary muscle | β₂ (relaxation), M₃ (accommodation)
Lacrimal gland | α₁ (secretion), M₂/M₃ (secretion)
Retinal pigment epithelium | α₁, β₂ (water transport)

b) Cholinergic agonist vs anticholinesterase in the eye

Cholinergic agonist (e.g., pilocarpine): Directly binds and activates muscarinic receptors → miosis, spasm of accommodation.
Anticholinesterase (e.g., echothiophate): Inhibits AChE → prevents breakdown of ACh → indirectly increases ACh at receptors → miosis, ↓ IOP.

c) Anaemia – definition and 7 symptoms

Definition: Clinical condition in which there is a decline in number of RBCs or hemoglobin concentration (or both) resulting from excessive blood loss, hemolysis, ineffective formation of RBCs, or combination.

Symptoms: Fatigue, Dizziness, Headache, Fainting, Pale skin/conjunctiva, Palpitation, Exertional dyspnea.

d) Distribution of iron in the body

70% in form of RBC
10-20% in storage form (ferritin, hemosiderin) in liver, spleen, marrow
10% in form of myoglobin
Less than 1% in cytochromes, enzymes, and transport iron (transferrin)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 103,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematinics",
    question_text: `a) What are the indications for parenteral iron therapy? (5 marks)
b) List 4 adverse effects of parenteral iron therapy. (5 marks)
c) Describe acute iron toxicity (causes, features, treatment). (5 marks)
d) Describe chronic iron toxicity (causes, features, treatment). (5 marks)`,
    model_answer: `a) Indications for parenteral iron therapy

Patients who cannot genuinely take oral preparations: Pain, vomiting, diarrhea (chronic), post-gastrectomy care, small gut resection, GIT upset, malabsorption syndrome, inflammatory bowel disease.

b) 4 adverse effects of parenteral iron therapy

Local pain, Tissue staining (brown discoloration), Headache, Light headedness, Fever, Arthralgia, Nausea & vomiting, Backache, Flushing, Urticaria.

c) Acute iron toxicity

Causes: Accidental ingestion of iron tablets in young children.

Features: Necrotizing gastroenteritis with vomiting, abdominal pain, bloody diarrhea, shock, lethargy, dyspnea, metabolic acidosis, death.

Treatment: Whole bowel irrigation (flush out unabsorbed pills); Deferoxamine (iron chelating compound); Supportive therapy.

d) Chronic iron toxicity

Causes: Inherited hemochromatosis; multiple red cell transfusions over long period (e.g., β-thalassemia).

Features: Excess iron deposited in heart, liver, pancreas, other organs → organ failure, death.

Treatment: Intermittent bleeding via phlebotomy (unit of blood removed every week until excess iron removed).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 104,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematinics",
    question_text: `a) What is the mechanism of action of iron in treating anaemia? (5 marks)
b) What is the chemistry, pharmacokinetics, and pharmacodynamics of vitamin B12? (5 marks)
c) List 4 causes of vitamin B12 deficiency. (5 marks)
d) What are the clinical features of vitamin B12 deficiency (neurological and haematological)? (5 marks)`,
    model_answer: `a) Iron in treating anaemia – MOA

Iron forms nucleus of iron porphyrin heme rings which together with globin chains forms hemoglobin. Hemoglobin reversibly binds oxygen and provides critical mechanism for oxygen delivery.

b) Vitamin B12 – chemistry, PK, PD

Chemistry: Active forms: Deoxyadenosylcobalamin, Methylcobalamin. Therapeutic: Cyanocobalamin, Hydroxocobalamin.

PK: Daily intake 5-30 ng; absorption 1-5 ng; daily loss 2 ng (takes up to 5 years to exhaust stores); liver storage 3000-5000 ng; absorbed in distal ileum with intrinsic factor.

PD: 1) Methyl transfer: N⁵-methyltetrahydrofolate → tetrahydrofolate. 2) Isomerization: L-methylmalonyl-CoA → succinyl-CoA.

c) 4 causes of vitamin B12 deficiency

Pernicious anemia (autoimmune destruction of parietal cells), Malabsorption, Malnutrition, Receptor defects, Gastrectomy, Resection of terminal ileum, Inflammatory bowel diseases.

d) Clinical features of vitamin B12 deficiency

Hematological: Megaloblastic anemia, Macrocytic anemia, Leukopenia, Thrombocytopenia, Hypercellular bone marrow with megaloblasts.

Neurological: Paresthesias in peripheral nerves, Weakness, Spasticity, Ataxia, Other CNS dysfunctions.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 105,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematinics",
    question_text: `a) What is the methylfolate trap? (5 marks)
b) What is the chemistry, pharmacokinetics, functions, and deficiency causes of folic acid? (5 marks)
c) What is the mechanism of action of erythropoietin? State its adverse effects. (5 marks)
d) What is the mechanism of action of G-CSF and GM-CSF? (5 marks)`,
    model_answer: `a) Methylfolate trap

Accumulation of folate as N⁵-methyltetrahydrofolate and associated depletion of tetrahydrofolate cofactors in vitamin B12 deficiency.

b) Folic acid – chemistry, PK, functions, deficiency causes

Chemistry: Composed of pteridine, para-aminobenzoic acid, glutamic acid.

PK: Administered orally/parenterally; absorbed from proximal jejunum; widely distributed, stored in liver; small storage levels; stoppage of intake in 1-6 months → megaloblastic anemia.

Functions: Cofactor in formation of purine and pyrimidine; needed for thymidylic acid formation.

Deficiency Causes: Poor intake (old age, starvation), GIT disease (celiac, Crohn's), Partial gastrectomy, Hemolytic disease, Inflammatory disease, Malabsorption, Drugs (phenytoin, methotrexate, trimethoprim, sulfonamides).

c) Erythropoietin – MOA and adverse effects

MOA: Stimulates erythroid proliferation and differentiation by interacting with erythropoietin receptors on red cell progenitors. Induces release of reticulocytes from bone marrow.

Adverse Effects: Hypertension, Thrombotic complications (thromboembolic events like stroke), Allergic reactions.

d) G-CSF and GM-CSF – MOA

Myeloid growth factors stimulate proliferation & differentiation by interacting with specific receptors found in myeloid progenitor cells. Activate phagocytic activity of mature neutrophils and prolong their survival in circulation.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 106,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematinics & Growth Factors",
    question_text: `a) What are the haematopoietic growth factors? (5 marks)
b) What are megakaryocyte growth factors? (5 marks)
c) Write the formula for Young's rule. (5 marks)
d) Write the formula for Clark's rule. (5 marks)`,
    model_answer: `a) Haematopoietic growth factors

Erythropoietin, Granulocyte colony-stimulating factor (G-CSF), Granulocyte-macrophage colony-stimulating factor (GM-CSF), Interleukin II (IL-2), Thrombopoietin receptor agonists (romiplostim, eltrombopag).

b) Megakaryocyte growth factors

Thrombopoietin receptor agonists (romiplostim, eltrombopag) – stimulate platelet production.

c) Young's rule

Child's Dose = (Age in years / (Age + 12)) × Adult dose

d) Clark's rule

Child's Dose = (Weight in pounds / 150) × Adult dose`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 107,
    lecturer: "Dr. Ekeke",
    topic_area: "Paediatric Pharmacology",
    question_text: `a) Write the formula for Hamburger's rule. (5 marks)
b) Write the formula for Body Surface Area (BSA) rule. (5 marks)
c) What are the core principles/challenges of paediatric pharmacology? (5 marks)
d) What are the pharmacokinetic differences in paediatric pharmacology (ADME)? (5 marks)`,
    model_answer: `a) Hamburger's rule

Child's Dose = (Weight in kg / 70) × Adult dose

b) Body Surface Area (BSA) rule

Child's Dose = (BSA in m² of child / 1.7) × Adult dose

c) Core principles/challenges of paediatric pharmacology

Premature and Newborns (Neonates): Immature liver/kidney function, different body water/fat composition, blood-brain barrier not fully developed.
Infants and Toddlers (1 month - 2 years): Rapid growth, organ maturation, metabolic rates change quickly.
Children (2-12 years): Higher metabolic rates per kg than adults.
Adolescents (12-18 years): May reach adult physiology, but face issues of adherence, risk-taking behavior, psychosocial influences.

d) Pharmacokinetic differences in paediatric pharmacology (ADME)

Absorption: Higher gastric pH in neonates; slower gastric emptying; thinner skin (higher risk of systemic toxicity from topicals)
Distribution: Higher body water; lower body fat; lower plasma proteins (more free drug)
Metabolism: Immature liver enzymes at birth; metabolic rate exceeds adult rates in children 1-12
Excretion: Renal function low at birth; reaches adult values by 6-12 months`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 108,
    lecturer: "Dr. Ekeke",
    topic_area: "Paediatric Pharmacology",
    question_text: `a) What are the pharmacodynamic differences in paediatric pharmacology? (5 marks)
b) What are the major drug categories and specific considerations in paediatric pharmacology? (5 marks)
c) What are the golden rules for safe paediatric prescribing? (5 marks)
d) What are the pharmacodynamic differences in paediatric pharmacology? (5 marks)`,
    model_answer: `a) Pharmacodynamic differences in paediatric pharmacology

Receptor sensitivity and end-organ responses can differ
Unique adverse effects: Growth suppression (corticosteroids), teeth discoloration (tetracyclines), CNS effects
Paradoxical reactions common (e.g., diphenhydramine causing agitation)

b) Major drug categories and specific considerations

Antibiotics: Aminoglycosides require TDM; beta-lactams can cause neurotoxicity/nephrotoxicity in neonates
Analgesics: Acetaminophen safe but narrow therapeutic window; Ibuprofen avoided in infants <6 months; Opioids require careful titration
Psychotropic: ADHD medications weight-based; SSRIs have black box warning for suicidal ideation
Antiasthmatics: Inhaled corticosteroids monitor growth; use spacer device

c) Golden rules for safe paediatric prescribing

Know the child's weight and age
Use pediatric-specific formularies and references
Calculate dose carefully and double-check
Consider formulation and route of administration
Communicate clearly with caregivers
"Start low and go slow" when possible

d) Pharmacodynamic differences in paediatric pharmacology

Receptor sensitivity and end-organ responses can differ
Unique adverse effects: Growth suppression (corticosteroids), teeth discoloration (tetracyclines), CNS effects
Paradoxical reactions common (e.g., diphenhydramine causing agitation)`,
    total_marks: 20,
  },
];
