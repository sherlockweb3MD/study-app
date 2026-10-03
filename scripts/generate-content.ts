import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

interface PastQuestion {
  id: string;
  question_number: number;
  topic_area: string;
  question_text: string;
  model_answer: string;
}

// Extract key facts from text for MCQ generation
function extractKeyFacts(text: string): string[] {
  const facts: string[] = [];
  
  // Extract sentences with key information
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
  
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    // Look for sentences with numbers, drug names, or key terms
    if (/\d|mg|kg|%|first-line|drug of choice|mechanism|MOA|contraindication|adverse|treatment|inhibits|blocks|binds/i.test(trimmed)) {
      facts.push(trimmed);
    }
  }
  
  return facts.slice(0, 5);
}

// Extract drug names from text
function extractDrugNames(text: string): string[] {
  const drugPatterns = [
    /[A-Z][a-z]+(?:idine|azole|mycin|cillin|statin|pril|sartan|olol|idine|azole|parin|azole|vir|azole|idine|azole|mycin|cillin|statin|pril|sartan|olol|idine|azole|mycin|cillin|statin|pril|sartan|olol|idine|azole)/g,
    /(?:Metformin|Insulin|Aspirin|Paracetamol|Ibuprofen|Amoxicillin|Penicillin|Ciprofloxacin|Azithromycin|Omeprazole|Atorvastatin|Losartan|Amlodipine|Metoprolol|Warfarin|Heparin|Prednisolone|Dexamethasone|Hydrocortisone|Salbutamol|Theophylline|Montelukast|Omeprazole|Ranitidine|Metronidazole|Fluconazole|Acyclovir|Oseltamivir|Rifampin|Isoniazid|Ethambutol|Pyrazinamide|Dapsone|Clofazimine|Chloroquine|Artemisinin|Ivermectin|Albendazole|Praziquantel|Niclosamide|Pyrantel|Diethylcarbamazine|Pentamidine|Metronidazole|Tinidazole|Iodoquinol|Paromomycin|Nitrofurantoin|Methenamine|Trimethoprim|Sulfamethoxazole|Chloramphenicol|Tetracycline|Doxycycline|Gentamicin|Tobramycin|Amikacin|Vancomycin|Clindamycin|Erythromycin|Clarithromycin|Azithromycin|Doxycycline|Minocycline|Tigecycline|Linezolid|Daptomycin|Colistin|Polymyxin|Nystatin|Amphotericin|Fluconazole|Itraconazole|Ketoconazole|Terbinafine|Griseofulvin|Flucytosine|Caspofungin|Micafungin|Anidulafungin|Acyclovir|Valacyclovir|Famciclovir|Ganciclovir|Oseltamivir|Zanamivir|Ribavirin|Interferon|Lamivudine|Tenofovir|Abacavir|Zidovudine|Efavirenz|Nevirapine|Rilpivirine|Ritonavir|Lopinavir|Darunavir|Atazanavir|Dolutegravir|Raltegravir|Elvitegravir|Maraviroc|Enfuvirtide|Ledipasvir|Sofosbuvir|Simeprevir|Daclatasvir|Hydroxychloroquine|Quinine|Mefloquine|Primaquine|Pyrimethamine|Proguanil|Atovaquone|Artesunate|Artemether|Lumefantrine|Halofantrine|Tafenoquine|Miltefosine|Amphotericin|Benznidazole|Nifurtimox|Suramin|Melarsoprol|Eflornithine|Pentamidine|Stibogluconate|Sodium stibogluconate|Miltefosine|Paromomycin|Amphotericin|Benznidazole|Nifurtimox|Suramin|Melarsoprol|Eflornithine|Pentamidine|Stibogluconate|Sodium stibogluconate|Miltefosine|Paromomycin)/g,
  ];
  
  const drugs = new Set<string>();
  for (const pattern of drugPatterns) {
    const matches = text.match(pattern);
    if (matches) {
      matches.forEach(m => drugs.add(m));
    }
  }
  
  return Array.from(drugs).slice(0, 10);
}

// Generate MCQs from past questions
function generateMCQs(pastQuestions: PastQuestion[]): any[] {
  const mcqs: any[] = [];
  
  for (const pq of pastQuestions) {
    const drugs = extractDrugNames(pq.model_answer);
    const facts = extractKeyFacts(pq.model_answer);
    
    // Generate MCQ for each drug found
    for (const drug of drugs.slice(0, 2)) {
      const otherDrugs = drugs.filter(d => d !== drug).slice(0, 3);
      
      if (otherDrugs.length >= 3) {
        const options = [drug, ...otherDrugs.slice(0, 3)];
        // Shuffle options
        const shuffled = options.sort(() => Math.random() - 0.5);
        const correctIndex = shuffled.indexOf(drug);
        const correctAnswer = String.fromCharCode(65 + correctIndex);
        
        mcqs.push({
          course: "Pharmacology",
          question: `Which of the following is mentioned in the context of ${pq.topic_area}?`,
          option_a: shuffled[0],
          option_b: shuffled[1],
          option_c: shuffled[2],
          option_d: shuffled[3],
          correct_answer: correctAnswer,
          explanation: `Based on the past question: "${pq.question_text.split("\n")[0]}" — ${drug} is mentioned in the model answer.`,
        });
      }
    }
    
    // Generate fact-based MCQs
    for (const fact of facts.slice(0, 2)) {
      const words = fact.split(' ').filter(w => w.length > 3);
      if (words.length >= 4) {
        const keyTerm = words.find(w => w.length > 5) || words[0];
        const distractors = [
          `Increased ${keyTerm.toLowerCase()}`,
          `Decreased ${keyTerm.toLowerCase()}`,
          `No effect on ${keyTerm.toLowerCase()}`,
        ];
        
        const options = [`${keyTerm} is the correct answer`, ...distractors];
        const shuffled = options.sort(() => Math.random() - 0.5);
        const correctIndex = shuffled.indexOf(`${keyTerm} is the correct answer`);
        const correctAnswer = String.fromCharCode(65 + correctIndex);
        
        mcqs.push({
          course: "Pharmacology",
          question: `Regarding ${pq.topic_area}: ${fact.substring(0, 80)}...`,
          option_a: shuffled[0],
          option_b: shuffled[1],
          option_c: shuffled[2],
          option_d: shuffled[3],
          correct_answer: correctAnswer,
          explanation: `This is based on the model answer for question ${pq.question_number}: "${fact}"`,
        });
      }
    }
  }
  
  return mcqs.slice(0, 60);
}

// Generate Flashcards from past questions
function generateFlashcards(pastQuestions: PastQuestion[]): any[] {
  const flashcards: any[] = [];
  
  for (const pq of pastQuestions) {
    // Create a concise summary of the model answer
    const answerLines = pq.model_answer.split('\n').filter(l => l.trim().length > 0);
    const summary = answerLines.slice(0, 3).join(' ').substring(0, 200);
    
    flashcards.push({
      course: "Pharmacology",
      front: pq.question_text.split('\n')[0].substring(0, 150),
      back: summary,
    });
  }
  
  return flashcards;
}

async function main() {
  console.log("Fetching past questions from Supabase...\n");
  
  const { data: pastQuestions, error } = await supabase
    .from("past_questions")
    .select("*")
    .eq("course", "Pharmacology")
    .order("question_number", { ascending: true });
  
  if (error) {
    console.error("Error fetching past questions:", error);
    process.exit(1);
  }
  
  console.log(`Found ${pastQuestions?.length || 0} past questions\n`);
  
  // Generate MCQs
  console.log("Generating MCQs...");
  const mcqs = generateMCQs(pastQuestions || []);
  console.log(`Generated ${mcqs.length} MCQs\n`);
  
  // Generate Flashcards
  console.log("Generating Flashcards...");
  const flashcards = generateFlashcards(pastQuestions || []);
  console.log(`Generated ${flashcards.length} flashcards\n`);
  
  // Insert MCQs
  if (mcqs.length > 0) {
    console.log("Inserting MCQs into database...");
    const { error: mcqError } = await supabase.from("mcqs").insert(mcqs);
    if (mcqError) {
      console.error("Error inserting MCQs:", mcqError);
    } else {
      console.log(`Successfully inserted ${mcqs.length} MCQs!`);
    }
  }
  
  // Insert Flashcards
  if (flashcards.length > 0) {
    console.log("Inserting Flashcards into database...");
    const { error: fcError } = await supabase.from("flashcards").insert(flashcards);
    if (fcError) {
      console.error("Error inserting Flashcards:", fcError);
    } else {
      console.log(`Successfully inserted ${flashcards.length} flashcards!`);
    }
  }
  
  console.log("\nContent generation complete!");
}

main().catch(console.error);
