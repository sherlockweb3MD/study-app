export interface PastQuestion {
  course: string;
  question_number: number;
  lecturer: string;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
}

export const newPastQuestionsV4: PastQuestion[] = [
  {
    course: "Pharmacology",
    question_number: 41,
    lecturer: "Dr. Anele",
    topic_area: "Neuropharmacology & Antimicrobials",
    question_text: `1a. State the mechanism of action and contraindications of Opioids. (5 marks)
1b. Mention the drug interactions of Non-Depolarising Neuromuscular Blockers. (5 marks)
1c. What is the mechanism of action & side effects of the drug of choice of Leprosy treatment. (5 marks)
1d. List the precautions of Albendazole therapy & its adverse effects. (5 marks)`,
    model_answer: `1a) Mechanism of Action and Contraindications of Opioids

Mechanism of Action:
Opioid agonists produce analgesia by binding to specific G-protein-coupled receptors (GPCRs) located in the brain and spinal cord.
• They close voltage-gated Ca²⁺ channels on presynaptic nerve terminals → reduce transmitter release.
• They open K⁺ channels → hyperpolarize postsynaptic neurons → inhibit them.

Contraindications:
• Head injury (CO₂ retention from respiratory depression → ↑ ICP, lethal brain alterations)
• Pregnancy (fetal dependence and withdrawal symptoms in early postpartum period)
• Impaired pulmonary function
• Impaired hepatic or renal function
• Endocrine disease
• Concurrent use of pure agonist with weak partial agonist (e.g., Pentazocine + Morphine → diminishes analgesia)

1b) Drug interactions of Non-Depolarising Neuromuscular Blockers

• AChE Inhibitors (Neostigmine, Physostigmine, Pyridostigmine, Edrophonium): Can overcome the action of non-depolarizing NMBs. However, with increased dosage, they can cause depolarizing block.
• Halogenated Hydrocarbon Anaesthetics (Desflurane): Enhance NM blockade by stabilizing the NMJ.
• Aminoglycosides (Gentamicin, Tobramycin): Inhibit ACh release by competing with calcium ions; synergize with competitive blockers → enhanced NM blockade.
• Calcium Channel Blockers: May increase the NM blockade of competitive blockers.

1c) Mechanism of action & side effects of the drug of choice of Leprosy treatment

Drug of Choice: Dapsone

Mechanism of Action:
Dapsone is structurally related to sulfonamides and similarly inhibits dihydropteroate synthase in the folate synthesis pathway. It is bacteriostatic for M. leprae.

Side Effects:
• Hemolysis (especially in patients with G6PD deficiency)
• Methemoglobinemia
• Peripheral neuropathy
• GIT intolerance
• Fever, pruritus, and rash
• Erythema nodosum leprosum (an immune-mediated inflammatory reaction, often develops during therapy of lepromatous leprosy; may be suppressed by thalidomide)

1d) Precautions of Albendazole therapy & its adverse effects

Precautions:
• Blood counts and liver function should be monitored during long-term therapy (e.g., hydatid disease).
• Should not be given to patients with known hypersensitivity to benzimidazole drugs or those with liver cirrhosis.
• Exposure is increased by Dexamethasone, Praziquantel, and Cimetidine; decreased by Phenytoin, Phenobarbital, Carbamazepine, and Ritonavir.

Adverse Effects (Long-term use for hydatid disease):
• Abdominal distress
• Headache
• Fever
• Fatigue
• Alopecia
• Increased liver enzymes
• Pancytopenia`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 42,
    lecturer: "Prof. Clinton",
    topic_area: "Cardiovascular & General Pharmacology",
    question_text: `2a. State the mechanism of action & side effects of the diuretic of choice in heart failure. (5 marks)
2b. Discuss prescription writing briefly on: i) Signa, ii) Subscription, iii) Inscription, iv) Superscription. (5 marks)
2c. Mention 5 organophosphorus pesticides & state their mechanism of intoxication. (5 marks)
2d. Discuss the factors that affect biotransformation of drugs. (5 marks)`,
    model_answer: `2a) Mechanism of action & side effects of the diuretic of choice in heart failure

Diuretic of Choice: Furosemide (Loop Diuretic)

Mechanism of Action:
Blocks the Na⁺/K⁺/2Cl⁻ transporter in the thick ascending limb of the Loop of Henle → strong diuresis → reduces preload (venous return to the heart) → reduces cardiac workload.

Side Effects:
• Hypokalemia
• Dehydration
• Ototoxicity (especially with rapid IV administration)
• Hypotension
• Metabolic alkalosis

2b) Prescription writing – Superscription, Inscription, Subscription, Signa

Component | Description
Superscription | The Rx symbol at the top of the prescription. It is an abbreviation for the Latin phrase "take thou of" and is the Roman symbol for Jupiter.
Inscription | The drug name, concentration, and type of preparation. This is the main body of the prescription (e.g., Amoxicillin 500mg capsules).
Subscription | The dispensing instructions to the pharmacist — how much medication to dispense and in what form (e.g., Dispense 28 tablets).
Signa | The patient instructions — how to take the medication (directions, quantity, frequency; e.g., Take 1 tablet by mouth every 6 hours).

2c) 5 organophosphorus pesticides & mechanism of intoxication

5 Organophosphorus Pesticides:
• Parathion
• Malathion
• Chlorpyrifos
• Diazinon
• Echothiophate

Mechanism of Intoxication:
Organophosphates irreversibly inhibit acetylcholinesterase (AChE) by phosphorylating the serine hydroxyl group at the active site of the enzyme. This prevents the breakdown of acetylcholine (ACh), leading to accumulation of ACh at all cholinergic synapses (muscarinic, nicotinic, and CNS). This causes cholinergic crisis — SLUDGE syndrome (salivation, lacrimation, urination, diarrhea, GI cramps, emesis), miosis, bradycardia, bronchoconstriction, muscle fasciculations, paralysis, and respiratory failure.

2d) Factors that affect biotransformation of drugs

• Age: Neonates have immature enzyme systems; elderly have reduced hepatic function.
• Genetic factors (Pharmacogenomics): Genetic polymorphisms (e.g., CYP2D6 poor vs. ultra-rapid metabolizers).
• Enzyme induction: Chronic use of drugs like rifampin, carbamazepine, or alcohol increases enzyme synthesis → faster metabolism.
• Enzyme inhibition: Drugs like ketoconazole, erythromycin, or cimetidine inhibit enzymes → slower metabolism.
• Disease states: Liver disease (cirrhosis, hepatitis) and renal disease impair metabolism.
• Diet and environmental factors: Charcoal-broiled meat, cigarette smoking (inducers); grapefruit juice (inhibitor).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 43,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Pharmacokinetics & Antibiotics",
    question_text: `3a. Outline & define with precision, ALL the pharmacokinetic parameters. (5 marks)
3b. State the differences between Efficacy and Potency. (5 marks)
3c. Define concisely urinary antiseptics and state 3 notable examples. (5 marks)
3d. Write short note on bacterial resistance to Penicillin. (5 marks)`,
    model_answer: `3a) Pharmacokinetic parameters

Bioavailability (f): The amount of drug administered that is unbound to plasma proteins (free in circulation) and reaches the systemic circulation. IV bioavailability = 100%.
Volume of Distribution (Vd): The apparent space available in the body to contain the administered drug.
Clearance (CL): The rate of elimination of administered drug through any route of drug excretion.
Half-life (t½): The time taken for a particular amount of drug administered to be reduced to half (50%) in the systemic circulation.

3b) Differences between Efficacy and Potency

Feature | Efficacy | Potency
Definition | The maximal or peak response produced by a drug. | The dose of the drug needed to produce a certain degree of response.
Clinical Significance | Important determinant in drug selection. | Important for determining appropriate dosage level; relatively unimportant in deciding which drug to prefer.
Example | Hydromorphone has greater efficacy than propoxyphene. | Drug A is more potent than Drug B if it produces the same response at a lower dose.

3c) Urinary antiseptics – definition and 3 examples

Definition: Urinary antiseptics are oral agents that exert antibacterial activity in the urine but have little or no systemic antibacterial effect. Their usefulness is limited to lower urinary tract infections.

3 Examples:
• Nitrofurantoin
• Methenamine mandelate
• Methenamine hippurate

3d) Bacterial resistance to Penicillin

Mechanisms:
• Beta-lactamase (penicillinase) production: Enzymes that split the β-lactam ring, rendering penicillin inactive.
• Modification of target Penicillin Binding Proteins (PBPs): Basis of methicillin resistance in staphylococci and penicillin resistance in pneumococci and enterococci.
• Impaired penetration of antibiotic to target PBP: Occurs in gram-negative species due to impermeable outer cell wall membrane.
• Efflux pumps: Gram-negative organisms produce efflux pumps that transport β-lactam antibiotics from the periplasm back across the outer membrane.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 44,
    lecturer: "Dr. Asika",
    topic_area: "Cardiovascular & Antimalarial Pharmacology",
    question_text: `4a. Classify anticoagulants & state their therapeutic uses. (5 marks)
4b. Write short notes on: i) Amphetamine, ii) Ritodrine, iii) Ergonovine maleate, iv) Xanthines. (5 marks)
4c. Classify antimalarial agents and state the mechanism of action of Lumefantrine. (5 marks)
4d. Discuss briefly on: i) Oxytocin, ii) Metformin, iii) Clomiphene Citrate. (5 marks)`,
    model_answer: `4a) Classification of anticoagulants & therapeutic uses

Class | Examples | Therapeutic Uses
Heparin | Unfractionated heparin | Fast-acting anticoagulant; PE, DVT, ACS
Warfarin | Warfarin | Long-term anticoagulant; AF, mechanical valves, DVT prophylaxis
DOACs | Rivaroxaban, Apixaban, Dabigatran | Factor Xa inhibitors (Rivaroxaban, Apixaban); Direct thrombin inhibitor (Dabigatran)

4b) Short notes on: Amphetamine, Ritodrine, Ergonovine maleate, Xanthines

Amphetamine: CNS stimulant. Used for ADHD and narcolepsy. Releases dopamine, NE, serotonin. ADRs: insomnia, weight loss, CV issues, addiction.

Ritodrine: β₂-adrenergic agonist; Tocolytic agent. Relaxes uterine smooth muscle. Used for premature labor. ADRs: tachycardia, hypotension, pulmonary edema.

Ergonovine maleate: Ergot alkaloid; Oxytocic. Acts directly on uterine smooth muscle → rapid, sustained tetanic contraction. Used for postpartum hemorrhage. ADRs: hypertension, nausea, vasoconstriction.

Xanthines: Theophylline, Caffeine. Bronchodilators (inhibit phosphodiesterase → ↑ cAMP; block adenosine receptors). Used for asthma, COPD. ADRs: seizures, arrhythmias, nervousness.

4c) Classification of antimalarial agents and mechanism of Lumefantrine

Classification:
• 4-Aminoquinolines (Chloroquine, Amodiaquine)
• Quinoline methanols (Mefloquine, Quinine)
• 8-Aminoquinolines (Primaquine)
• Artemisinin derivatives (Artesunate, Artemether)
• Antifolates (Pyrimethamine, Proguanil)
• Antibiotics (Doxycycline)

Mechanism of Action of Lumefantrine:
Lumefantrine is an aryl alcohol related to halofantrine. It is available only as a fixed-dose combination with artemether (Coartem). It is highly effective for the treatment of falciparum malaria. Administration is improved when taken with food (especially a fatty meal).

4d) Brief discussion on: Oxytocin, Metformin, Clomiphene Citrate

Oxytocin: Posterior pituitary hormone; Oxytocic. Induces/augments labor, controls postpartum hemorrhage, stimulates milk let-down. ADRs: fetal distress, water intoxication, hypotension.

Metformin: Biguanide; Insulin sensitizer. First-line for Type 2 Diabetes (ADA). Reduces hepatic gluconeogenesis. Used in PCOS. ADRs: GI upset, lactic acidosis (contraindicated in renal failure).

Clomiphene Citrate: SERM; Fertility agent. Blocks estrogen receptors in hypothalamus → ↑ GnRH → ↑ FSH/LH → ovulation. Used for ovulation induction (especially PCOS).`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 45,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Local Anaesthetics & Antifungals",
    question_text: `5a. List the drugs under Ester local anaesthetic agents & state their mechanism of action. (5 marks)
5b. Classify antiarrhythmic drugs with examples of each class. (5 marks)
5c. Mention 5 classes of antifungal drugs, giving examples of each class. (5 marks)
5d. Mention the adrenocortical antagonist drugs & state the mechanism of action of one. (5 marks)`,
    model_answer: `5a) Ester local anaesthetic agents & mechanism of action

Drugs:
• Procaine
• Cocaine
• Tetracaine
• Amethocaine
• Benzocaine

Mechanism of Action:
Local anaesthetics reversibly bind to fast sodium channels from within nerve fibres, preventing sodium from entering the fibres. This stabilises the cell membrane and prevents action potential propagation.

5b) Classification of antiarrhythmic drugs

Class | Mechanism | Examples
Ia | Na⁺ channel block (moderate) | Quinidine, Procainamide, Disopyramide
Ib | Na⁺ channel block (fast) | Lidocaine, Phenytoin, Mexiletine
Ic | Na⁺ channel block (strong) | Flecainide, Propafenone
II | Beta-blockers | Propranolol, Timolol, Metoprolol
III | K⁺ channel blockers | Amiodarone, Sotalol, Dronedarone, Ibutilide
IV | Ca²⁺ channel blockers | Verapamil, Diltiazem
V | Other/unknown | Digoxin, Magnesium sulfate

5c) 5 classes of antifungal drugs with examples

Class | Examples
Polyenes | Amphotericin B, Nystatin
Azoles | Fluconazole, Ketoconazole, Itraconazole
Echinocandins | Caspofungin, Micafungin, Anidulafungin
Allylamines | Terbinafine, Naftifine
Antimetabolites | Flucytosine (5-FC)

5d) Adrenocortical antagonist drugs & mechanism of one

Glucocorticoid antagonists / synthesis inhibitors:
• Metyrapone
• Aminoglutethimide
• Ketoconazole
• Mifepristone
• Mitotane
• Trilostane

Mineralocorticoid antagonists:
• Spironolactone
• Eplerenone
• Drospirenone

MOA of Spironolactone:
Spironolactone is an aldosterone antagonist at the mineralocorticoid receptor in the distal convoluted tubule. It reduces sodium reabsorption and potassium loss, producing diuresis and antihypertensive effects.`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 46,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine & Toxicology",
    question_text: `6a. Classify sulfonylureas & state their mechanism of action & adverse effects. (5 marks)
6b. Discuss briefly HMGCoA Reductase Inhibitors. (5 marks)
6c. Write short note on clinical uses of Prostaglandins. (5 marks)
6d. State 5 differences between COX-1 and COX-2 pathway. (5 marks)`,
    model_answer: `6a) Classification of sulfonylureas & mechanism of action & adverse effects

Classification: Second-generation drugs: Glyburide, Glipizide, Glimepiride.

Mechanism of Action:
Stimulation of insulin release from the β cells of the pancreas. Sulfonylureas block ATP-sensitive K⁺ channels → depolarization → Ca²⁺ influx → insulin exocytosis.

Adverse Effects:
• Weight gain
• Hyperinsulinemia
• Hypoglycemia
(Renal impairment is a particular problem for glyburide; glipizide or glimepiride are safer options in renal dysfunction and in elderly patients.)

6b) HMGCoA Reductase Inhibitors

Class: Statins (Lovastatin, Simvastatin, Atorvastatin, Rosuvastatin).

Mechanism of Action:
Competitively inhibit the enzyme HMG-CoA reductase, which catalyzes the first reaction, a rate-limiting step in the biosynthesis of cholesterol in the liver. This inhibition reduces the conversion of HMG-CoA to mevalonate, ultimately lowering LDL and triglyceride levels.

Adverse Effects:
GI upset, hepatitis, insomnia, myopathy, hepatotoxicity, teratogenic effect (contraindicated in pregnancy).

6c) Clinical uses of Prostaglandins

• Abortion: PGE2 and PGF2α have potent oxytocic actions; used to terminate pregnancy at any stage.
• Cervical ripening and labor induction: Dinoprostone (PGE2) administered vaginally.
• Peptic ulcer prevention: Misoprostol (PGE1 derivative) is cytoprotective and reduces NSAID-induced ulcers.
• Glaucoma: Latanoprost (PGF derivative) reduces intraocular pressure in open-angle glaucoma.
• Erectile dysfunction: Alprostadil (PGE1) enhances penile erection.
• Pulmonary hypertension: Prostacyclin is a powerful vasodilator and inhibitor of platelet aggregation.

6d) 5 differences between COX-1 and COX-2 pathway

Feature | COX-1 | COX-2
Name | Constitutive enzyme | Inducible enzyme
Location | Kidney, stomach, platelets | Macrophages, leukocytes, fibroblasts
Functions | Housekeeping (protects gastric mucosa, regulates gastric acid, maintains renal function) | Involved in synthesis of prostaglandins that cause pain and inflammation
Production | Stimulated continuously by the body | Produced only at the time of need; dependent on cytokines
Inhibition | Protective; no need to inhibit | Involved in inflammation and pyrexia; useful to inhibit (e.g., celecoxib)`,
    total_marks: 20,
  },
];
