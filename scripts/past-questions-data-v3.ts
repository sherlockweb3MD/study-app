export interface PastQuestion {
  course: string;
  question_number: number;
  lecturer: string;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
}

export const newPastQuestionsV3: PastQuestion[] = [
  {
    course: "Pharmacology",
    question_number: 35,
    lecturer: "Dr. Anele",
    topic_area: "Antimicrobials & Toxicology",
    question_text: `1a) Precautions in Albendazole therapy & adverse effects of Moxidectin (5 marks)
1b) Mushroom poisoning (5 marks)
1c) Drug of choice in Leprosy therapy – MOA & adverse effects (5 marks)
1d) Therapeutic uses and adverse effects of Oxytocin (5 marks)`,
    model_answer: `1a) Precautions in Albendazole therapy & adverse effects of Moxidectin

Precautions in Albendazole therapy:
• Blood counts and liver function should be monitored during long-term therapy
• Should not be given to patients with known hypersensitivity to benzimidazole drugs
• Should not be given to patients with liver cirrhosis
• Exposure to Albendazole is increased by: Dexamethasone, Praziquantel, Cimetidine
• Exposure is decreased by: Phenytoin, Phenobarbital, Carbamazepine, Ritonavir

Adverse effects of Moxidectin:
• Pruritus
• Musculoskeletal pain
• Headache
• Tachycardia
• Rash

1b) Mushroom poisoning

Mushroom poisoning occurs after ingestion of toxic mushrooms, often misidentified as edible species. The most lethal toxins are from Amanita phalloides (death cap) and Amanita virosa, containing amatoxins (α-amanitin) which inhibit RNA polymerase II.

Clinical features:
• Phase 1 (6–12 hours): Severe gastrointestinal symptoms – nausea, vomiting, diarrhoea, abdominal cramps
• Phase 2 (12–24 hours): Apparent recovery ("honeymoon phase") – patient appears to improve
• Phase 3 (24–72 hours): Hepatic and renal failure – jaundice, coagulopathy, hypoglycaemia, encephalopathy, acute tubular necrosis

Management:
• Gastric decontamination (activated charcoal)
• Aggressive fluid resuscitation
• Intravenous N-acetylcysteine
• Silibinin (from milk thistle) – may reduce toxin uptake
• Penicillin G (high dose) – may have protective effect
• Haemodialysis or liver transplantation in severe cases

Prognosis: Mortality is high without early intervention; liver transplantation may be life-saving.

1c) Drug of choice in Leprosy therapy – MOA & adverse effects

Drug of choice in leprosy (multibacillary): Dapsone + Rifampin + Clofazimine (WHO regimen)

Dapsone mechanism of action:
• Structurally related to sulfonamides
• Inhibits dihydropteroate synthase in the folate synthesis pathway
• Bacteriostatic against Mycobacterium leprae

Adverse effects of Dapsone:
• Haemolysis (especially in G6PD deficiency)
• Methemoglobinemia
• Peripheral neuropathy
• GI intolerance (nausea, vomiting)
• Fever, pruritus, rash
• Erythema nodosum leprosum (immune-mediated inflammatory reaction – suppressed by thalidomide)

Adverse effects of Clofazimine:
• Pink to brownish-black discolouration of the skin (patients must be informed)
• GI effects (common)
• Eosinophilic enteritis (rare)

Adverse effects of Rifampin in leprosy:
• Same as for TB: orange-red discolouration of urine, tears, sweat; nausea, vomiting; hepatitis; thrombocytopenia; flu-like symptoms

1d) Therapeutic uses and adverse effects of Oxytocin

Therapeutic uses of Oxytocin:
• Induction of labour
• Augmentation of labour
• Control of postpartum haemorrhage (uterine atony)
• Milk ejection (let-down reflex)

Adverse effects of Oxytocin:
• Fetal distress from excessive uterine contractions
• Fluid retention / water intoxication → hyponatremia, heart failure, seizures, death
• Hypotension (from bolus injection – must be given as dilute IV infusion at controlled rate)
• Uterine rupture (if contraindications are ignored)

Contraindications:
• Fetal distress
• Fetal malpresentation
• Abruptio placenta
• Risk of uterine rupture (previous extensive uterine surgery)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 36,
    lecturer: "Prof. Clinton",
    topic_area: "Reproductive & General Pharmacology",
    question_text: `2a) 5 3rd generation synthetic progestins & 5 therapeutic uses (5 marks)
2b) Prescription writing – Superscription, Inscription, Subscription, Signa (5 marks)
2c) 5 organophosphorus pesticides & mechanism of intoxication (5 marks)
2d) Hazard, Risk, Exposure & Contraindications of Estrogen therapy (5 marks)`,
    model_answer: `2a) 5 3rd generation synthetic progestins & 5 therapeutic uses

Third-generation progestins:
• Desogestrel
• Gestodene
• Norgestimate
• Drospirenone
• Dienogest

Therapeutic uses of progestins (any 5):
• Combined oral contraceptives
• Hormone replacement therapy
• Endometriosis
• Abnormal uterine bleeding
• Amenorrhoea
• Dysmenorrhoea
• Acne (in females)

2b) Prescription writing – Superscription, Inscription, Subscription, Signa

i) Superscription: The symbol ℞ (recipe – "take thou") followed by the patient's name, address, date, and other administrative details at the top of the prescription.

ii) Inscription: The body of the prescription – contains the names and quantities of the drugs to be dispensed. It includes the active ingredients and adjuvants.

iii) Subscription: The directions to the pharmacist – includes the form of the drug (tablets, capsules, solution), the quantity to be dispensed, and any special instructions for preparation.

iv) Signa (Sig): The directions to the patient – instructions on how to take the medication (route, dose, frequency, duration, and any special instructions). Often preceded by the symbol "Sig:" or "S:".

2c) 5 organophosphorus pesticides & mechanism of intoxication

Organophosphorus pesticides (5):
• Malathion
• Parathion
• Chlorpyrifos
• Diazinon
• Dichlorvos (DDVP)

Mechanism of intoxication:
• Organophosphates irreversibly inhibit acetylcholinesterase (AChE) enzyme
• This prevents breakdown of acetylcholine (ACh) at cholinergic synapses
• Leads to accumulation of ACh → overstimulation of muscarinic and nicotinic receptors
• Results in cholinergic crisis: miosis, salivation, lacrimation, urination, defecation, gastrointestinal cramping, emesis, bronchospasm, bradycardia, muscle fasciculations, paralysis, respiratory failure

Treatment:
• Atropine (muscarinic antagonist) – reverses muscarinic effects
• Pralidoxime (2-PAM) – reactivates AChE if given early (before "aging")

2d) Hazard, Risk, Exposure & Contraindications of Estrogen therapy

Definitions:
• Hazard: A substance or situation that has the potential to cause harm (e.g., a toxic chemical, a slippery floor).
• Risk: The likelihood that harm will actually occur, considering the hazard and the level of exposure (e.g., high risk if exposure is high and protection is absent).
• Exposure: Contact with a hazardous substance through various routes (inhalation, ingestion, dermal absorption, injection). The degree of exposure determines the severity of the effect.

Contraindications of Estrogen therapy:
• Pregnancy (teratogenic risk)
• History of thromboembolic disorders (DVT, PE)
• Breast cancer (hormone-sensitive)
• Endometrial cancer (hormone-sensitive)
• Hepatic dysfunction (liver disease)
• Undiagnosed vaginal bleeding
• Cardiovascular disease / stroke
• Porphyria`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 37,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Antibiotics & Dermatologic Pharmacology",
    question_text: `3a) Bacterial resistance to Penicillin (5 marks)
3b) Sequential blockade of folic acid by Sulphonamide & Trimethoprim (5 marks)
3c) Mechanism of Lactation & 5 inducers and 5 inhibitors (5 marks)
3d) Dermatological agents – 2 examples each (5 marks)`,
    model_answer: `3a) Bacterial resistance to Penicillin

Mechanisms of penicillin resistance (4):
• Elaboration of β-lactamases (penicillinases): Bacteria produce enzymes that split the β-lactam ring, rendering penicillin inactive. This is the most common mechanism.
• Modification of target penicillin-binding proteins (PBPs): Mutation or alteration of PBPs reduces the affinity of penicillin for its target. This is the basis of methicillin resistance in staphylococci and penicillin resistance in pneumococci and enterococci.
• Impaired penetration: Occurs in gram-negative species because of their impermeable outer cell wall membrane, preventing penicillin from reaching PBPs.
• Efflux pump: Gram-negative organisms produce an efflux pump consisting of cytoplasmic and periplasmic components that efficiently transport β-lactam antibiotics from the periplasm back across the outer membrane.

3b) Sequential blockade of folic acid by Sulphonamide & Trimethoprim

Sequential blockade of folinic acid production:

PABA (para-aminobenzoic acid)
     |
     | ← Sulphonamide inhibits this step
     |   (inhibits dihydropteroate synthase)
     ↓
Dihydropteroic acid
     |
     ↓
Dihydrofolate
     |
     | ← Trimethoprim inhibits this step
     |   (inhibits dihydrofolate reductase)
     ↓
Tetrahydrofolate (THF)
     |
     ↓
Folinic acid → Purine synthesis → DNA synthesis

Summary:
• Sulphonamide inhibits dihydropteroate synthase – blocks conversion of PABA to dihydropteroic acid
• Trimethoprim inhibits dihydrofolate reductase – blocks conversion of dihydrofolate to tetrahydrofolate (THF)
• Synergistic effect: Sequential blockade of two steps in folate synthesis → bactericidal action

3c) Mechanism of Lactation & 5 inducers and 5 inhibitors

Mechanism of lactation (let-down reflex):
• Suckling by the baby stimulates paraventricular and supraoptic nuclei in the hypothalamus
• Signals are sent to the posterior pituitary to release oxytocin
• Oxytocin causes contraction of myoepithelial cells surrounding the alveoli
• Increased pressure forces milk through the duct system and out of the nipple
• This reflex can be conditioned by the baby's cry or even the mother's thoughts
• The reflex is enhanced by oxytocin and inhibited by stress or anxiety

Inducers of lactation (5):
• Metoclopramide
• Domperidone
• Human growth hormone (HGH)
• Thyrotropin-releasing hormone (TRH)
• Oxytocin / Prolactin

Inhibitors of lactation (5):
• Bromocriptine
• Cabergoline
• Levodopa
• Apomorphine
• Clonidine

3d) Dermatological agents – 2 examples each

Group | Examples
i) Ectoparasiticides | Permethrin, Crotamiton
ii) Topical antifungal | Clotrimazole, Terbinafine
iii) Topical antiviral | Acyclovir, Penciclovir
iv) Immunomodulators | Imiquimod, Tacrolimus
v) Trichogenic agents | Minoxidil, Finasteride`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 38,
    lecturer: "Dr. Asika",
    topic_area: "Reproductive & Toxicology",
    question_text: `4a) Short notes on Clomiphene Citrate and Metformin (5 marks)
4b) Steps in the management of Scorpion bite/sting (5 marks)
4c) 10 antimalarial drugs & mechanism of action of Lumefantrine (5 marks)
4d) Mechanism of action of one anti-fertility agent (5 marks)`,
    model_answer: `4a) Short notes on Clomiphene Citrate and Metformin

Clomiphene Citrate:
• Introduction: Fertility agent / ovulation stimulant; stimulates release of FSH and LH
• Mechanism of action: Stimulates hypothalamus, pituitary gland, and ovaries → development and maturation of ovarian follicles → induces ovulation by releasing FSH and LH → works when pituitary and ovaries are normal but stimulus is absent → also causes development of corpus luteum
• Adverse effects: Ovarian enlargement, hot flushes, visual disturbances, multiple pregnancy, abdominal discomfort

Metformin:
• Introduction: Biguanide (insulin sensitizer) – oral hypoglycaemic agent; also used in PCOS
• Mechanism of action in PCOS: Lowers insulin resistance → reduces circulating insulin levels → restores ovulation → possible pregnancy
• Mechanism in diabetes: Reduces hepatic gluconeogenesis, slows intestinal glucose absorption, improves peripheral glucose uptake
• Adverse effects: GI disturbances, lactic acidosis (rare), vitamin B12 deficiency (long-term)

4b) Steps in the management of Scorpion bite/sting

• Immobilise the patient
• Immobilise the bitten part using constriction bands
• Apply cold packs (10–15°C) to the affected part – reduces rate of venom absorption
• Administer oxygen therapy if necessary (respiratory distress)
• Give IV calcium gluconate (10 ml of 10% solution slow IV) – relieves muscle pain
• Give diazepam if the patient is convulsing
• Give specific antiserum after antisensitivity test is done

4c) 10 antimalarial drugs & mechanism of action of Lumefantrine

10 Antimalarial drugs:
• Artesunate
• Artemether
• Dihydroartemisinin
• Chloroquine
• Amodiaquine
• Primaquine
• Tafenoquine
• Quinine
• Mefloquine
• Lumefantrine

Mechanism of action of Lumefantrine:
• Phenanthrene methanol related to halofantrine
• Blood schizonticide acting on erythrocytic stages of all 4 human Plasmodium species
• Inhibits conversion of toxic free haem to non-toxic haemozoin in the food vacuole
• Leads to accumulation of toxic haem → death of the malaria parasite
• Available only as fixed-dose combination with artemether (Coartem)

4d) Mechanism of action of one anti-fertility agent

Norethindrone (synthetic progestin):

Mechanism of action (3 mechanisms):
• Suppresses ovulation – by inhibiting the LH surge
• Thickens cervical mucus – impedes sperm penetration
• Alters the endometrium – makes it unsuitable for implantation

Alternative: Ethinylestradiol (synthetic oestrogen):
• Inhibits follicular development by preventing FSH secretion
• Stabilises the endometrium
• Works with progestin in combined oral contraceptives`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 39,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Antifungals & Antiretrovirals",
    question_text: `5a) 5 classes of antifungal drugs with examples (5 marks)
5b) Adrenocortical Antagonist drugs/agents (5 marks)
5c) Classification of Antiretroviral drugs with examples (5 marks)
5d) Cytotoxic antibiotic drugs with examples (5 marks)`,
    model_answer: `5a) 5 classes of antifungal drugs with examples

Class | Examples
Polyenes | Amphotericin B, Nystatin
Echinocandins | Caspofungin, Micafungin, Anidulafungin
Azoles | Fluconazole, Itraconazole, Ketoconazole
Allylamines | Terbinafine, Naftifine
Antimetabolites | Flucytosine (5-FC)

5b) Adrenocortical Antagonist drugs/agents

Glucocorticoid antagonists / synthesis inhibitors:
• Metyrapone
• Aminoglutethimide
• Ketoconazole
• Mifepristone

Mineralocorticoid antagonists:
• Spironolactone
• Eplerenone

5c) Classification of Antiretroviral drugs with examples

Class | Examples
NRTI (nucleoside RT inhibitors) | Tenofovir, Abacavir, Zidovudine, Lamivudine
NNRTI (non-nucleoside RT inhibitors) | Efavirenz, Nevirapine, Rilpivirine
Protease inhibitors (PI) | Darunavir, Atazanavir, Ritonavir
Integrase inhibitors (INSTI) | Dolutegravir, Raltegravir, Elvitegravir
Entry / Fusion inhibitors | Maraviroc, Enfuvirtide

5d) Cytotoxic antibiotic drugs with examples

Class | Examples
Anthracyclines | Doxorubicin, Daunorubicin
Bleomycins | Bleomycin
Actinomycins | Actinomycin D (Dactinomycin)
Mitomycins | Mitomycin C`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 40,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine & Toxicology",
    question_text: `6a) Sulfonylureas – Classification, Mechanism of action, Adverse effects (5 marks)
6b) Dose-Response relationship (5 marks)
6c) Acute and Chronic toxicity studies – definition & 4 characteristics each (5 marks)
6d) Management of poisoning in a patient (5 marks)`,
    model_answer: `6a) Sulfonylureas – Classification, Mechanism of action, Adverse effects

Classification:
• First-generation: Tolbutamide, Chlorpropamide (less used)
• Second-generation (current use): Glyburide, Glipizide, Glimepiride

Mechanism of action:
• Block ATP-sensitive K⁺ channels in pancreatic β-cells
• Causes depolarisation → Ca²⁺ influx
• Stimulates insulin exocytosis (insulin secretagogues)

Adverse effects:
• Weight gain
• Hyperinsulinemia
• Hypoglycaemia
• Use with caution in hepatic/renal insufficiency

6b) Dose-Response relationship

Definition: Correlation between the dose of a substance and the intensity or frequency of the biological response it produces. As the dose increases, the response changes.

Types:
Type | Description
Graded dose-response | In an individual – as dose increases, the magnitude of response increases (e.g., blood pressure, heart rate)
Quantal dose-response | In a population – as dose increases, the percentage of individuals affected increases; effect is either present or absent (e.g., death, seizure)

Important parameters from quantal dose-response:
• ED50: Dose effective in 50% of the population
• TD50: Dose toxic to 50% of the population
• LD50: Dose lethal to 50% of the population

Importance:
• Determines safe dose of drugs
• Helps calculate therapeutic index
• Identifies toxic dose levels
• Guides drug development and clinical trials
• Used in risk assessment

6c) Acute and Chronic toxicity studies – definition & 4 characteristics each

Acute toxicity studies:
Definition: Short-term adverse effects of a drug after single dose or multiple doses within 24 hours

4 characteristics:
• Sudden onset
• Severe
• Short duration (<2 weeks)
• Mammalian species used

Chronic toxicity studies:
Definition: Health hazards from repeated exposure over a considerable part of the lifespan

4 characteristics:
• Slow, insidious onset
• Duration: 6–12 months
• One rodent + one non-rodent species used
• Expensive and time-consuming

6d) Management of poisoning in a patient

1. Withdrawal from source and retarding absorption:
• Remove patient from source of poison
• Wash skin with water (external decontamination)
• Gastrointestinal decontamination: Induced emesis (patient must be conscious), Gastric lavage, Whole bowel irrigation, Activated charcoal

2. Maintenance of vital organs (stabilisation):
• Establish airway
• Provide ventilation
• Maintain adequate vital signs (oxygen, IV fluids)

3. Treatment with specific antidotes:
• Use specific pharmacological antagonist if available
• True antagonism (e.g., naloxone for opioids, flumazenil for benzodiazepines)
• Reversal of physiological effects
• Chelation of poisons (e.g., deferoxamine for iron, dimercaprol for heavy metals)
• Alteration of pathological response

Common antidotes (from slides):
• Opiates – Naloxone
• Benzodiazepines – Flumazenil
• Organophosphates – Atropine
• Beta-blockers – Glucagon
• Methanol – Absolute ethanol
• Thallium – Prussian blue
• Arsenic/Lead/Mercury – Dimercaprol
• Iron – Deferoxamine`,
    total_marks: 20,
  },
];
