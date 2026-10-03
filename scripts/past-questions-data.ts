export interface PastQuestion {
  course: string;
  question_number: number;
  lecturer: string;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
}

export const pastQuestions: PastQuestion[] = [
  {
    course: "Pharmacology",
    question_number: 1,
    lecturer: "Dr. Ekeke",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) Explain the mechanism of action, pharmacokinetics, and adverse effects of Biguanides (Metformin). (5 marks)
b) State the mechanism of action of Sulphonylureas and list 3 adverse effects. (5 marks)
c) List 5 differences between Acute Toxicity and Chronic Toxicity in tabular form. (5 marks)
d) State 5 differences between COX-1 and COX-2 pathways/enzymes. (5 marks)`,
    model_answer: `1a) Biguanides (Metformin) – MOA, PK, adverse effects

Mechanism of Action:
• Reduces hepatic gluconeogenesis (main mechanism)
• Slows intestinal absorption of sugars
• Improves peripheral glucose uptake and utilization

Pharmacokinetics:
• Well absorbed orally
• Not bound to serum proteins
• Not metabolized
• Excreted unchanged in urine

Adverse effects:
• Gastrointestinal disturbances (nausea, vomiting, diarrhoea)
• Lactic acidosis (rare but serious – contraindicated in renal dysfunction)
• May interfere with vitamin B12 absorption (long-term use)
• Weight loss (loss of appetite)

1b) Sulphonylureas – MOA and adverse effects

Mechanism of Action:
• Block ATP-sensitive K⁺ channels in pancreatic β-cells
• Causes depolarisation → Ca²⁺ influx
• Stimulates insulin exocytosis (insulin secretagogues)

Adverse effects:
• Weight gain
• Hyperinsulinemia
• Hypoglycaemia
• Use with caution in hepatic/renal insufficiency

1c) Acute vs Chronic Toxicity (tabular form)

Feature | Acute Toxicity | Chronic Toxicity
Onset | Sudden, rapid | Slow, insidious
Duration | Short (days to <2 weeks) | Long (months to years; 6-12 months)
Severity | Severe | Progressive
Dose | Large dose of weak toxin OR small dose of potent toxin | Repeated exposure over considerable part of lifespan
Species used | Mammalian | Minimum one rodent + one non-rodent
Other features | Single or multiple doses within 24 hours | Expensive, time-consuming
Information provided | LD50, target organs, safe dose estimate | Long-term effects, accumulation, target organs

1d) 5 differences between COX-1 and COX-2 pathways

Feature | COX-1 | COX-2
Expression | Constitutive (always present) | Inducible (at sites of inflammation)
Function | Physiological (GI protection, platelet aggregation, renal blood flow) | Pathological (inflammation, pain, fever)
Location | Stomach, kidneys, platelets, endothelium | Macrophages, fibroblasts, inflammatory cells
Inhibition by aspirin | Inhibited at low doses | Less sensitive
Clinical effects of inhibition | GI ulceration, bleeding | Reduced inflammation, pain, fever`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 2,
    lecturer: "Dr. Ekeke",
    topic_area: "Toxicology & Hematinics",
    question_text: `a) Define LD50 and state its significance. (5 marks)
b) List 5 factors that affect LD50. (5 marks)
c) Explain the mechanism of action of Iron in treating anaemia. (5 marks)
d) State the adverse effects of Parenteral Iron therapy. (5 marks)`,
    model_answer: `2a) LD50 – definition and significance

Definition:
• Dose that causes death in 50% of treated animals
• Expressed in mg/kg body weight
• Statistically derived, not a biological constant

Significance:
• Imprecise value – not a constant
• Approximate LD50 sufficient for practical purposes
• More emphasis on signs of toxicity, target organs, and other factors

2b) Five factors that affect LD50

• Route of exposure
• Species (e.g., rat, mouse)
• Personnel handling
• Time of experiment (eating food in between)
• Laboratory equipment and chemicals used in the studies

2c) Mechanism of action of Iron in treating anaemia

• Iron forms the nucleus of iron porphyrin heme rings
• Together with globin chains forms haemoglobin
• Haemoglobin reversibly binds oxygen for delivery from lungs to tissues
• Deficiency leads to microcytic hypochromic anaemia (small RBCs with insufficient haemoglobin)

2d) Adverse effects of Parenteral Iron therapy

• Local pain at injection site
• Tissue staining – brown discolouration
• Headache
• Light-headedness
• Fever
• Arthralgia (joint pain)
• Nausea and vomiting
• Backache
• Flushing
• Urticaria (hives)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 3,
    lecturer: "Dr. Ekeke",
    topic_area: "Hematology",
    question_text: `a) Explain the mechanism of action, pharmacokinetics, and adverse effects of Vitamin B12. (5 marks)
b) List the causes of Vitamin B12 deficiency. (5 marks)
c) State the mechanism of action of Folic Acid and causes of its deficiency. (5 marks)
d) Describe the methylfolate trap in Vitamin B12 deficiency. (5 marks)`,
    model_answer: `3a) Vitamin B12 – MOA, PK, adverse effects

Mechanism of Action (two essential enzymatic reactions):
• Methyl transfer: N⁵-methyltetrahydrofolate → tetrahydrofolate (methylcobalamin as intermediate)
• Isomerisation: L-methylmalonyl-CoA → succinyl-CoA (via methylmalonyl-CoA mutase)

Pharmacokinetics:
• Daily intake via food: 5-30 ng
• Daily absorption: 1-5 ng (requires intrinsic factor from parietal cells)
• Daily loss: 2 ng
• Storage in liver: 3000-5000 ng (takes up to 5 years to exhaust)
• Chief dietary sources: liver, egg, meat

Adverse effects:
• Generally well tolerated
• Rare hypersensitivity reactions

3b) Causes of Vitamin B12 deficiency

• Pernicious anaemia (autoimmune destruction of parietal cells)
• Malabsorption
• Malnutrition
• Receptor defects
• Gastrectomy
• Resection of terminal ileum (e.g., cancer surgery)
• Inflammatory bowel disease (especially affecting terminal ileum)

3c) Folic Acid – MOA and causes of deficiency

Mechanism of Action:
• Parent compound of folates
• Acts as a cofactor in formation of purine and pyrimidine (essential for DNA synthesis)
• Needed for formation of thymidylic acid

Causes of deficiency:
• Poor intake (old age, starvation, anorexia)
• GIT disease (coeliac disease, Crohn's disease)
• Partial gastrectomy
• Haemolytic disease (excess RBC production)
• Inflammatory disease
• Malignancy
• Malabsorption
• Drugs (phenytoin, primidone, methotrexate, pyrimethamine, trimethoprim, sulfonamides)

3d) Methylfolate trap in Vitamin B12 deficiency

• In vitamin B12 deficiency, conversion of N⁵-methyltetrahydrofolate to tetrahydrofolate cannot occur
• Folate accumulates as N⁵-methylTHF (the "trap")
• This leads to depletion of tetrahydrofolate cofactors
• Results in deficiency of deoxythymidylate (dTMP) and purines required for DNA synthesis
• This explains why B12 deficiency causes megaloblastic anaemia (same as folate deficiency)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 4,
    lecturer: "Dr. Ekeke",
    topic_area: "Antimicrobials",
    question_text: `a) State the mechanism of action of the following: (i) Antiseptic (ii) Anthelmintic (iii) Antifungal (iv) Antiviral (v) Antiparasitic. (5 marks)
b) Write short notes on clinical trials (phases I–IV). (5 marks)
c) List the first-line antituberculosis drugs and state their mechanisms of action. (5 marks)
d) State the mechanism of action and adverse effects of Rifampin. (5 marks)`,
    model_answer: `4a) First-line antituberculosis drugs and their mechanisms of action

Drug | Mechanism of Action
Isoniazid (INH) | Prodrug activated by KatG (catalase-peroxidase) → inhibits mycolic acid synthesis (cell wall)
Rifampin (RIF) | Binds β subunit of bacterial DNA-dependent RNA polymerase → inhibits RNA synthesis
Pyrazinamide (PZA) | Activated by pyrazinamidase to pyrazinoic acid → disrupts mycobacterial cell membrane metabolism
Ethambutol (EMB) | Inhibits mycobacterial arabinosyl transferase (embCAB operon) → disrupts arabinoglycan synthesis (cell wall)

4b) Rifampin – MOA and adverse effects

Mechanism of Action:
• Binds to β subunits of bacterial DNA-dependent RNA polymerase
• Inhibits RNA synthesis
• Bactericidal for mycobacteria

Adverse effects:
• Nausea, vomiting
• Rashes
• Harmless orange-red colouration of urine, sweat, tears (stains soft contact lenses)
• Thrombocytopenia
• Nephritis
• Cholestatic jaundice
• Hepatitis (occasionally)
• Light chain proteinuria
• Myalgia
• Haemolytic anaemia
• Chills, fever, flu-like symptoms
• Acute tubular necrosis
• Shock

4c) Isoniazid – MOA and resistance

Mechanism of Action:
• Prodrug activated by KatG (mycobacterial catalase-peroxidase)
• Activated form forms covalent complex with acyl carrier protein (AcpM) and KasA
• Blocks mycolic acid synthesis → disrupts bacterial cell wall

Resistance mechanisms:
• Mutation or deletion of KatG gene (no activation – high-level resistance)
• Overexpression of inhA (encodes NADH-dependent acyl carrier protein reductase – low-level resistance)
• Mutation of the acyl carrier protein

4d) Ethambutol – MOA and dose-related adverse effect

Mechanism of Action:
• Inhibits mycobacterial arabinosyl transferase (encoded by embCAB operon)
• Disrupts polymerization reaction of arabinoglycan (essential component of mycobacterial cell wall)

Dose-related adverse effect:
• Retrobulbar (optic) neuritis – loss of visual acuity and red-green colour blindness
• Dose-related: more common at higher doses (25 mg/kg/day)
• Visual acuity and colour discrimination testing recommended before treatment
• Relatively contraindicated in children too young for visual testing`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 5,
    lecturer: "Dr. Ogbuagu",
    topic_area: "General Pharmacology",
    question_text: `a) Distinguish between competitive and non-competitive antagonism. (5 marks)
b) State the mechanism of action and toxicity effects of Aminoglycosides. (5 marks)
c) State the mechanism of action and toxicity effects of Tetracyclines. (5 marks)
d) Define urinary antiseptics and state 3 notable examples with their mechanisms. (5 marks)`,
    model_answer: `6b) Aminoglycosides – MOA and toxicity

Mechanism of Action:
• Inhibit bacterial protein synthesis (bactericidal)
• Act on bacterial 30S ribosomal subunit
• Distort mRNA translation of genetic code
• Prevent formation of normal complex required to initiate protein synthesis

Toxicity (all dose-related, higher risk in elderly):
• Ototoxicity (hearing loss, vertigo)
• Nephrotoxicity
• Neuromuscular blockade → paralysis and fatal respiratory arrest
• Hypersensitivity reactions

6c) Tetracyclines – MOA and toxicity

Mechanism of Action:
• Bind specifically to 30S ribosomes
• Block binding of transfer RNA (tRNA) to mRNA-ribosome complex
• Inhibit protein synthesis (bacteriostatic)

Toxicity:
• GI upset (anorexia, nausea, vomiting, flatulence, diarrhoea)
• Superinfection (Candida albicans, Clostridium difficile)
• Hypersensitivity reactions (skin rash, exfoliative dermatitis)
• Photosensitivity (phototoxic dermatitis)
• Deposition in teeth and bones → brown staining of teeth (both deciduous and permanent), stunted growth
• Renal damage (nephrogenic diabetes insipidus with demeclocycline)
• Metabolic effects (fatty degeneration of liver with excessive doses)
• Contraindicated in pregnancy, lactation, peptic ulcer, hepatic disease

6d) Urinary antiseptics – definition and 3 examples

Definition:
• Oral agents that exert antibacterial activity in the urine
• Have little or no systemic antibacterial effect
• Usefulness limited to lower urinary tract infections

Three examples:
• Nitrofurantoin
• Methenamine mandelate
• Methenamine hippurate`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 6,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Chemotherapy",
    question_text: `a) Explain what is responsible for the toxic effects of Paracetamol and its treatment. (5 marks)
b) List the adverse effects of oral contraceptives. (5 marks)
c) State the mechanism of action of Albendazole and its clinical uses. (5 marks)
d) State the mechanism of action of Praziquantel and its adverse effects. (5 marks)`,
    model_answer: `7b) Albendazole – MOA and clinical uses

Mechanism of Action:
• Benzimidazole carbamate
• Inhibits microtubule synthesis (binds to β-tubulin)
• Larvicidal and ovicidal effects

Clinical uses:
• Ascariasis, trichuriasis, hookworm, pinworm (400mg single dose)
• Hydatid disease (drug of choice – 400mg twice daily with meals for 1 month or more)
• Neurocysticercosis (drug of choice – 400mg twice daily for 21 days)
• Cutaneous larva migrans, visceral larva migrans
• Intestinal capillariasis, gnathostomiasis, taeniasis, trichinosis, clonorchiasis
• Microsporidial infections

7c) Praziquantel – MOA and clinical uses

Mechanism of Action:
• Increases permeability of trematode and cestode cell membranes to calcium
• Results in paralysis, dislodgement, and death

Clinical uses (drug of choice for):
• Schistosomiasis (all species – S. mansoni, S. haematobium, S. japonicum)
• Clonorchiasis, opisthorchiasis, paragonimiasis
• Taeniasis and diphyllobothriasis
• Neurocysticercosis (though albendazole now preferred)
• Hymenolepsis nana (drug of choice)
• Fasciolopsiasis, metagonimiasis

7d) Ivermectin – MOA and clinical uses

Mechanism of Action:
• Intensifies gamma-aminobutyric acid (GABA)-mediated transmission in peripheral nerves
• Paralyzes nematodes and arthropods
• Microfilaricidal (does not effectively kill adult Onchocerca worms but blocks release of microfilariae for months)

Clinical uses:
• Onchocerciasis (drug of choice – 150 mcg/kg single oral dose)
• Strongyloidiasis (drug of choice – 200 mcg/kg once daily for 2 days)
• Scabies and lice
• Wuchereria bancrofti (in combination with diethylcarbamazine and albendazole)
• Cutaneous larva migrans`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 7,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Antimicrobials",
    question_text: `a) List the first-line drugs for tuberculosis and state their adverse effects. (5 marks)
b) State the mechanism of action of Isoniazid and how resistance develops. (5 marks)
c) State the mechanism of action of Ethambutol and its dose-related adverse effect. (5 marks)
d) State the mechanism of action of Pyrazinamide and its adverse effects. (5 marks)`,
    model_answer: `8a) Classification of penicillins (5 groups with examples)

Group | Examples
Group I: Penicillinase-sensitive | Benzylpenicillin (penicillin G), procaine penicillin, benzathine penicillin, phenoxymethylpenicillin (penicillin V)
Group II: Penicillinase-resistant | Oxacillin, cloxacillin, dicloxacillin, methicillin
Group III: Broad-spectrum | Amoxicillin, ampicillin, bacampicillin, cyclacillin
Group IV: Extended-spectrum (antipseudomonal) | Azlocillin, carbenicillin, mezlocillin, piperacillin, ticarcillin
Group V: Amidopenicillin | Amidinocillin

8b) Penicillins – MOA and mechanisms of resistance

Mechanism of Action:
• β-lactam antibiotics inhibit normal synthesis of bacterial cell wall
• Selectively inhibit synthesis of mucopeptide in bacterial cell wall of susceptible multiplying bacteria

Mechanisms of resistance:
• Elaboration of β-lactamases (penicillinases) – split the β-lactam ring, rendering penicillin inactive
• Modification of target penicillin-binding proteins (PBP) – basis of methicillin resistance in staphylococci and penicillin resistance in pneumococci and enterococci
• Impaired penetration – occurs in gram-negative species due to impermeable outer cell wall membrane
• Efflux pump – transports some β-lactam antibiotics from periplasm back across outer membrane

8c) Adverse effects of penicillins

• Hypersensitivity reactions (most common)
• Direct toxicity – neurotoxicity (CNS irritation, convulsions, coma)
• Superinfection of oropharynx with Candida albicans
• Hyperkalaemia and hypernatraemia with fluid retention
• Diarrhoea (common with oral formulations)
• Acute interstitial nephritis
• Blood dyscrasias (haemolytic anaemia, thrombocytopenia, leukopenia – rare)

8d) Cephalosporins – classification by generation with examples and antibacterial spectrum

Generation | Examples | Antibacterial Spectrum
1st generation | Cefaclor, cephalexin, cefadroxil, cephradine, cephalothin, cefazolin | Appreciable activity against gram-positive bacteria; modest activity against gram-negative
2nd generation | Cefamandole, cefoxitin, cefuroxime, cefonicid, ceforanide | Increased activity against gram-negative (less than 3rd generation)
3rd generation | Cefotaxime, ceftizoxime, ceftriaxone, cefoperazone, ceftazidime, cefotetan | Much more active against Enterobacteriaceae; less active against gram-positive cocci than 1st generation. Subgroup (cefoperazone, ceftazidime) active against Pseudomonas aeruginosa
4th generation | Cefepime | Extended spectrum
5th generation | Ceftaroline, ceftobiprole | Active against MRSA`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 8,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Antibiotics",
    question_text: `a) Classify penicillins into 5 groups with one example each. (5 marks)
b) State the mechanism of action of penicillins and mechanisms of bacterial resistance. (5 marks)
c) List the adverse effects of penicillins. (5 marks)
d) Classify cephalosporins by generation with one example each and state their antibacterial spectrum. (5 marks)`,
    model_answer: `9a) Dapsone – MOA and adverse effects

Mechanism of Action:
• Structurally related to sulfonamides
• Inhibits dihydropteroate synthase in folate synthesis pathway
• Bacteriostatic for M. leprae

Adverse effects:
• Haemolysis (especially in patients with G6PD deficiency)
• Methemoglobinemia
• Peripheral neuropathy
• GI intolerance (nausea, vomiting)
• Fever
• Pruritus and rash
• In lepromatous leprosy: erythema nodosum leprosum (immune-mediated inflammatory reaction – suppressed by thalidomide)

9b) Clofazimine – MOA and characteristic adverse effect

Mechanism of Action:
• Phenazine dye
• May involve binding to DNA
• Redox properties may lead to generation of cytotoxic oxygen radicals
• Bactericidal to M. leprae

Characteristic adverse effect:
• Pink to brownish-black discolouration of the skin (patients must be informed beforehand)
• Also appears in conjunctiva
• GI effects (common)
• Eosinophilic enteritis (rare, may require surgery)
• Has anti-inflammatory and anti-immune activities (suppresses erythema nodosum leprosum)

9c) Drug of choice for Leprosy and rationale for combination therapy

Drugs: Dapsone + Rifampin + Clofazimine (WHO regimen for multibacillary leprosy)

Rationale for combination therapy:
• Resistance can emerge in large populations of M. leprae (especially lepromatous leprosy) if low doses of a single agent are given
• Combination therapy prevents development of drug resistance

9d) Niclosamide – mechanism of action

• Inhibits oxidative phosphorylation OR
• Stimulates ATPase activity
• Results in rapid killing of adult tapeworms (not ova)
• Minimally absorbed from GIT – neither drug nor metabolites recovered from blood or urine`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 9,
    lecturer: "Dr. Asika",
    topic_area: "Cardiovascular Pharmacology",
    question_text: `a) State the indication, mechanism of action, and contraindication of Digoxin. (5 marks)
b) Write short notes on: (i) Neutropenia (ii) Serotonin (iii) Kinin (iv) Ergot Alkaloids. (5 marks)
c) State and explain the rationale for the use of Aldosterone antagonists in heart failure. (5 marks)
d) State the mechanism of action of Chlorhexidine and adverse effects of biguanides. (5 marks)`,
    model_answer: `12c) Chlorhexidine – MOA and adverse effects of biguanides

Mechanism of Action (Chlorhexidine):
• Antiseptic/disinfectant agent
• Disrupts bacterial cell membrane
• Not related to gluconeogenesis (that is metformin)

Adverse effects of biguanides (Metformin):
• Gastrointestinal disturbances (nausea, vomiting, diarrhoea)
• Lactic acidosis (rare but serious)
• May interfere with vitamin B12 absorption (long-term use)
• Weight loss

12d) Glucagon – MOA and clinical uses

Mechanism of Action:
• Binds to specific receptors on liver cells (first 6 amino acids of N-terminal)
• Gs protein-linked increase in adenylyl cyclase activity
• Increases cAMP production
• Facilitates catabolism of stored glycogen
• Increases gluconeogenesis and ketogenesis
• Raises blood glucose at expense of stored hepatic glycogen

Clinical uses:
• Emergency treatment of severe hypoglycaemia in type 1 diabetes (when unconsciousness precludes oral feeding and IV glucose not possible)
• Endocrine diagnosis (tests of pancreatic β-cell secretory reserve – measuring C-peptide)
• Beta-blocker poisoning (reverses cardiac effects – increases cAMP in heart)
• Radiology of the bowel (relaxes intestine for X-ray visualisation)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 10,
    lecturer: "Dr. Asika",
    topic_area: "Endocrine Pharmacology",
    question_text: `a) Explain the mechanism of action, pharmacokinetics, and adverse effects of Insulin. (5 marks)
b) List the types of insulin preparations with onset and duration. (5 marks)
c) State the endocrine effects of insulin on liver, muscle, and adipose tissue. (5 marks)
d) State the complications of insulin therapy. (5 marks)`,
    model_answer: `11a) Insulin – MOA, PK, adverse effects

Mechanism of Action:
• Stimulates glucose uptake through translocation of GLUT4-containing storage vesicles to plasma membrane
• Increases intracellular glucose-6-phosphate production
• Enables net glycogen synthesis

Pharmacokinetics:
• Administered subcutaneously (standard) or intravenously
• Cannot be given orally (peptide – digested in GIT)

Adverse effects:
• Hypoglycaemia (most common and serious)
• Lipodystrophy (atrophy of subcutaneous fatty tissue at injection site)
• Weight gain
• Local injection site reactions

11b) Types of insulin preparations with onset and duration

Type | Examples | Appearance | Onset | Duration
Rapid-acting | Insulin aspart, glulisine, lispro | Clear | 4-20 minutes | 3-5 hours
Short-acting | Insulin regular | Clear | 15 minutes | 17-24 hours
Intermediate-acting | Insulin NPH (Humulin-N, Novolin ge NPH) | Cloudy | 1-3 hours | Up to 18 hours
Long-acting | Insulin detemir, glargine | Clear | 90 minutes | 16-24 hours
Ultra long-acting | Insulin degludec, glargine (U300) | Clear | 90 minutes | 30-42 hours

11c) Endocrine effects of insulin

On Liver:
• Reverses catabolic features of insulin deficiency
• Inhibits glycogenolysis
• Inhibits conversion of amino acids to glucose
• Inhibits conversion of fatty acids and amino acids to ketoacids
• Promotes glucose storage as glycogen
• Increases triglyceride synthesis and VLDL formation

On Muscle:
• Increases protein synthesis
• Increases amino acid transport
• Increases glycogen synthesis
• Increases ribosomal protein synthesis
• Increases glucose transport
• Induces glycogen synthase and inhibits phosphorylase

On Adipose Tissue:
• Increases triglyceride storage
• Lipoprotein lipase is induced and activated to hydrolyse triglycerides from lipoproteins
• Glucose transport into cells provides glycerol phosphate for esterification of fatty acids
• Intracellular lipase is inhibited by insulin

11d) Complications of insulin therapy

• Hypoglycaemia
• Lipodystrophy (atrophy of subcutaneous fatty tissue at injection site)
• Weight gain
• Local injection site reactions`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 11,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Antiretrovirals & Oncology",
    question_text: `a) What is HAART? List 5 classes of antiretroviral agents with 2 examples each. (5 marks)
b) Outline the pharmacological treatment options in neoplastic diseases. (5 marks)
c) Write short notes on the adverse effects of Local Anaesthetics. (5 marks)
d) Outline the treatment strategies for an infant with Clostridium botulism toxicity. (5 marks)`,
    model_answer: `20a) Erythropoietin – MOA and adverse effects

Mechanism of Action:
• Stimulates erythroid proliferation and differentiation
• Interacts with erythropoietin receptors on red cell progenitors
• Induces release of reticulocytes from bone marrow

Adverse effects:
• Hypertension
• Thromboembolic events (stroke)
• Allergic reactions to erythropoietin-stimulating agents (ESAs)

20c) Desmopressin – mechanism and use

Mechanism of Action:
• Synthetic analogue of vasopressin (ADH)
• Long-acting
• Minimal pressor activity
• Antidiuretic-to-pressor ratio 4000× that of vasopressin
• Modified at position 1 with D-amino acid at position 8

Clinical uses:
• Diabetes insipidus (central)
• Nocturnal enuresis
• Coagulopathy in Haemophilia A and von Willebrand disease

20d) Conivaptan and Tolvaptan – mechanisms

Conivaptan:
• Nonpeptide vasopressin receptor antagonist
• High affinity for both V1a and V2 receptors
• Given intravenously
• Used for hyponatremia or acute heart failure

Tolvaptan:
• Nonpeptide vasopressin receptor antagonist
• 30 times higher affinity for V2 than for V1 receptors
• Given orally
• Used for hyponatremia`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 12,
    lecturer: "Dr. Okoroukwu",
    topic_area: "Neuropharmacology",
    question_text: `a) State the contraindications of Opioids. (5 marks)
b) State the mechanism of action of Niclosamide. (5 marks)
c) List the CNS side effects of Levodopa + Carbidopa therapy and state 3 drug interactions. (5 marks)
d) List the causes and types of drug interactions. (5 marks)`,
    model_answer: `9d) Niclosamide – mechanism of action

• Inhibits oxidative phosphorylation OR
• Stimulates ATPase activity
• Results in rapid killing of adult tapeworms (not ova)
• Minimally absorbed from GIT – neither drug nor metabolites recovered from blood or urine`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 13,
    lecturer: "Dr. Anele",
    topic_area: "Antimicrobials",
    question_text: `a) List the first-line antituberculosis drugs and state their mechanisms of action. (5 marks)
b) State the mechanism of action of Ethambutol and why it is contraindicated in young children. (5 marks)
c) State the mechanism of action of Dapsone and its adverse effects. (5 marks)
d) State the mechanism of action of Clofazimine and its characteristic adverse effect. (5 marks)`,
    model_answer: `9a) Dapsone – MOA and adverse effects

Mechanism of Action:
• Structurally related to sulfonamides
• Inhibits dihydropteroate synthase in folate synthesis pathway
• Bacteriostatic for M. leprae

Adverse effects:
• Haemolysis (especially in patients with G6PD deficiency)
• Methemoglobinemia
• Peripheral neuropathy
• GI intolerance (nausea, vomiting)
• Fever
• Pruritus and rash
• In lepromatous leprosy: erythema nodosum leprosum (immune-mediated inflammatory reaction – suppressed by thalidomide)

9b) Clofazimine – MOA and characteristic adverse effect

Mechanism of Action:
• Phenazine dye
• May involve binding to DNA
• Redox properties may lead to generation of cytotoxic oxygen radicals
• Bactericidal to M. leprae

Characteristic adverse effect:
• Pink to brownish-black discolouration of the skin (patients must be informed beforehand)
• Also appears in conjunctiva
• GI effects (common)
• Eosinophilic enteritis (rare, may require surgery)
• Has anti-inflammatory and anti-immune activities (suppresses erythema nodosum leprosum)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 14,
    lecturer: "Prof. Clinton",
    topic_area: "Cardiovascular & General Pharmacology",
    question_text: `a) Classify antihypertensive drugs stating 2 examples of each class. (5 marks)
b) List 6 steps involved in prescription writing and describe 3 of them. (5 marks)
c) Define environmental toxicity and write short notes on: (i) Pesticides (ii) Insecticides. (5 marks)
d) State the mechanism of action of Acetazolamide and its clinical use. (5 marks)`,
    model_answer: `10d) Acetazolamide – MOA in glaucoma

Mechanism of Action:
• Carbonic anhydrase inhibitor
• Reduces aqueous humour production
• Decreases intraocular pressure`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 15,
    lecturer: "Dr. Ekeke",
    topic_area: "Heavy Metal Toxicity",
    question_text: `a) State the treatment of Lead poisoning with specific antidotes and doses. (5 marks)
b) State the treatment of Mercury poisoning and why Dimercaprol is contraindicated in methyl mercury poisoning. (5 marks)
c) State the treatment of Arsenic poisoning. (5 marks)
d) State the antidote for Thallium poisoning and its mechanism. (5 marks)`,
    model_answer: `5a) Treatment of Lead poisoning

In symptomatic children:
• Dimercaprol 75 mg/m² every 4 hours IM for 1 day
• Then calcium edetic acid (EDTA) for another 3 days

General:
• Lead deposited in bones
• Acute infections may mobilise lead → acute encephalopathy

5b) Treatment of Mercury poisoning

Acute poisoning:
• Gastric lavage or emesis
• Catharsis (purgative)
• Dimercaprol IM (most useful if given within 2 hours)
• Raw white of egg in water or milk (precipitant) or activated charcoal

Chronic poisoning:
• Dimercaprol is drug of choice

Important contraindication:
• Dimercaprol is contraindicated in methyl mercury poisoning – it may increase brain concentration of methyl mercury

Other:
• Acetylpenicillamine (oral) – as effective as and less toxic than dimercaprol
• Haemodialysis hastens removal of dimercaprol-mercury complex

5c) Treatment of Arsenic poisoning

• Bowel irrigation: Whole bowel irrigation with polyethylene glycol
• Chelation therapy: Dimercaprol started immediately
• Management of renal complications (in acute arsine exposure with haemolytic anaemia)

5d) Antidote for Thallium poisoning and its mechanism

Antidote: Prussian Blue

Mechanism:
• Exchanges potassium for thallium in the gastrointestinal tract
• Enhances thallium excretion
• Used with haemodialysis and supportive care`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 16,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Lactation & Pituitary",
    question_text: `a) State the mechanism of milk ejection (let-down reflex) including hormones involved. (5 marks)
b) List inducers of lactation and state the side effects of Metoclopramide. (5 marks)
c) List inhibitors of lactation and state the mechanism of Cabergoline. (5 marks)
d) State the mechanism of action of Octreotide and its clinical uses. (5 marks)`,
    model_answer: `15a) Mechanism of milk ejection (let-down reflex)

• Suckling by baby stimulates paraventricular and supraoptic nuclei in hypothalamus
• Signals sent to posterior pituitary to produce oxytocin
• Oxytocin stimulates contraction of myoepithelial cells surrounding alveoli
• Increased pressure causes milk to flow through duct system and be released through nipple
• This reflex can be conditioned by baby's cry, suckling, or even mother's thoughts
• Enhanced by oxytocin; inhibited by stress or anxiety

15b) Inducers of lactation and side effects of Metoclopramide

Inducers:
• Metoclopramide
• Domperidone
• Human growth hormone (HGH)
• Thyrotropin-releasing hormone (TRH)
• Oxytocin
• Prolactin

Side effects of Metoclopramide (dose-dependent):
• Anxiety
• Diarrhoea
• Depression
• Headache
• Restlessness
• Fatigue

15c) Inhibitors of lactation and MOA of Cabergoline

Inhibitors (all inhibit prolactin):
• Dopamine agonists: Levodopa, Bromocriptine, Apomorphine, Clonidine, Cabergoline
• MAO inhibitors: Selegiline
• Diethylstilbesterol (DES) – no longer used (carcinogen)

Mechanism of action of Cabergoline:
• Ergot derivative
• Potent dopamine D2 receptor agonist
• Frequently used as first-line agent for prolactinomas
• Higher affinity for D2 receptors than bromocriptine
• Less severe side effects and more convenient dosing (0.5 mg weekly)`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 17,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Ocular Pharmacology",
    question_text: `a) State the mechanism of action of Pilocarpine and its ocular effects. (5 marks)
b) State the mechanism of action of Timolol and its use in glaucoma. (5 marks)
c) State the adverse effects of topical glucocorticoids in the eye. (5 marks)
d) State the mechanism of action of Acetazolamide in glaucoma. (5 marks)`,
    model_answer: `10a) Pilocarpine – MOA and ocular effects

Mechanism of Action:
• Cholinergic agonist (muscarinic M3 receptor)
• Causes contraction of iris sphincter muscle

Ocular effects:
• Miosis (pupillary constriction) – NOT cycloplegia
• Used in glaucoma to reduce intraocular pressure

10b) Timolol – MOA and use in glaucoma

Mechanism of Action:
• Non-selective β-adrenergic antagonist (β1 + β2 blocker)
• Reduces aqueous humour production by ciliary epithelium

Use in glaucoma:
• Reduces intraocular pressure
• Available as 0.25% and 0.5% solution and gel

10c) Adverse effects of topical glucocorticoids in the eye

• Development of posterior subcapsular cataracts
• Secondary infections
• Secondary open-angle glaucoma
• Raised intraocular pressure (IOP)

10d) Acetazolamide – MOA in glaucoma

Mechanism of Action:
• Carbonic anhydrase inhibitor
• Reduces aqueous humour production
• Decreases intraocular pressure`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 18,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Antihelminths",
    question_text: `a) State the drug of choice for Onchocerciasis and its mechanism of action. (5 marks)
b) State the drug of choice for Schistosomiasis and its mechanism of action. (5 marks)
c) State the drug of choice for Hydatid disease and its mechanism of action. (5 marks)
d) State the mechanism of action of Ivermectin and its clinical uses. (5 marks)`,
    model_answer: `14a) Drug of choice for Onchocerciasis – MOA

Drug: Ivermectin

Mechanism of Action:
• Intensifies GABA-mediated transmission in peripheral nerves
• Paralyzes nematodes and arthropods
• Microfilaricidal (does not kill adult worms but blocks release of microfilariae for months)

14b) Drug of choice for Schistosomiasis – MOA

Drug: Praziquantel

Mechanism of Action:
• Increases permeability of trematode cell membranes to calcium
• Results in paralysis, dislodgement, and death

14c) Drug of choice for Hydatid disease – MOA

Drug: Albendazole

Mechanism of Action:
• Inhibits microtubule synthesis (benzimidazole)
• Larvicidal effects in hydatid disease

14d) Mebendazole – MOA

Mechanism of Action:
• Inhibits microtubule synthesis (parent drug is active form)
• Kills hookworm, Ascaris, and Trichuris eggs
• Efficacy varies with GI transit time, intensity of infection, and parasite strain`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 19,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Dermatologic Pharmacology",
    question_text: `a) Classify dermatologic vehicles and state which is best for acute inflammation with oozing. (5 marks)
b) State the mechanism of action of Topical Corticosteroids and their adverse effects. (5 marks)
c) State the mechanism of action of Benzoyl peroxide in acne vulgaris. (5 marks)
d) State the mechanism of action of Minoxidil and its use. (5 marks)`,
    model_answer: `17c) Minoxidil – mechanism and use

Classification: Trichogenic agent (enhances hair growth)

Use: Reverses terminal scalp hair loss associated with androgenetic alopecia

Mechanism of action: Unknown

Note: Vertex balding more responsive than frontal balding. Cessation of treatment leads to hair loss in 4-6 months. Effect is not permanent.

17d) Antifungal agents – topical and oral

Topical:
• Azole derivatives: clotrimazole, econazole, oxiconazole, ketoconazole, sulconazole, sertaconazole
• Ciclopirox olamine
• Allylamines: naftifine, terbinafine
• Butenafine hydrochloride
• Nystatin, amphotericin B

Oral:
• Azole derivatives: fluconazole, itraconazole, ketoconazole
• Griseofulvin
• Terbinafine`,
    total_marks: 20,
  },
  {
    course: "Pharmacology",
    question_number: 20,
    lecturer: "Dr. Ogbuagu",
    topic_area: "Paediatric Pharmacology",
    question_text: `a) State the Young's Rule for calculating paediatric drug doses with an example. (5 marks)
b) State the Clark's Rule for calculating paediatric drug doses with an example. (5 marks)
c) State the Body Surface Area Rule for calculating paediatric drug doses. (5 marks)
d) List the pharmacokinetic differences in neonates compared to adults (absorption, distribution, metabolism, excretion). (5 marks)`,
    model_answer: `Young's Rule:
• Child dose = (Age / (Age + 12)) × Adult dose
• Example: For a 6-year-old child with adult dose of 500mg: (6 / (6 + 12)) × 500 = (6/18) × 500 = 166.7mg

Clark's Rule:
• Child dose = (Weight in kg / 70) × Adult dose
• Example: For a child weighing 20kg with adult dose of 500mg: (20/70) × 500 = 142.9mg

Body Surface Area Rule:
• Child dose = (Child BSA / 1.73) × Adult dose
• BSA calculated using Mosteller formula: BSA (m²) = √([Height(cm) × Weight(kg)] / 3600)

Pharmacokinetic differences in neonates:

Absorption:
• Gastric pH is higher (less acidic) at birth
• Delayed gastric emptying
• Reduced intestinal motility

Distribution:
• Higher total body water content (75% vs 60% in adults)
• Lower plasma protein binding
• More permeable blood-brain barrier

Metabolism:
• Immature hepatic enzyme system
• Reduced glucuronidation capacity
• Slower drug metabolism

Excretion:
• Reduced renal blood flow
• Lower glomerular filtration rate
• Reduced tubular secretion and reabsorption`,
    total_marks: 20,
  },
];
