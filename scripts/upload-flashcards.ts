import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { flashcardsBatch1 } from "./flashcards-batch-1";
import { flashcardsBatch2 } from "./flashcards-batch-2";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("=== UPLOAD FLASHCARDS ===\n");

  const allFlashcards = [
    ...flashcardsBatch1,
    ...flashcardsBatch2,
  ];

  console.log(`Total flashcards to upload: ${allFlashcards.length}`);
  console.log(`  Batch 1: ${flashcardsBatch1.length}`);
  console.log(`  Batch 2: ${flashcardsBatch2.length}\n`);

  // Insert flashcards
  console.log("Inserting flashcards into Supabase...");
  const { error: insertError } = await supabase
    .from("flashcards")
    .insert(allFlashcards);

  if (insertError) {
    console.error("Error inserting flashcards:", insertError);
    process.exit(1);
  }

  console.log(`  Inserted ${allFlashcards.length} flashcards.\n`);

  console.log("=== SUMMARY ===");
  console.log(`Batch 1: ${flashcardsBatch1.length} flashcards`);
  console.log(`Batch 2: ${flashcardsBatch2.length} flashcards`);
  console.log(`Total: ${allFlashcards.length} flashcards`);
  console.log("Done!");
}

main().catch(console.error);
