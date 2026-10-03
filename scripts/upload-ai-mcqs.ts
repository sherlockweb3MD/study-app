import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { mcqsBatch1 } from "./mcqs-batch-1";
import { mcqsBatch2 } from "./mcqs-batch-2";
import { mcqsBatch3 } from "./mcqs-batch-3";
import { mcqsBatch4 } from "./mcqs-batch-4";
import { mcqsBatch5 } from "./mcqs-batch-5";
import { mcqsBatch6 } from "./mcqs-batch-6";
import { mcqsBatch7 } from "./mcqs-batch-7";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("=== UPLOAD AI-GENERATED MCQs ===\n");

  // Combine all batches
  const allMcqs = [
    ...mcqsBatch1,
    ...mcqsBatch2,
    ...mcqsBatch3,
    ...mcqsBatch4,
    ...mcqsBatch5,
    ...mcqsBatch6,
    ...mcqsBatch7,
  ];

  console.log(`Total AI-generated MCQs: ${allMcqs.length}\n`);

  // Step 1: Delete all existing MCQs
  console.log("Step 1: Deleting existing MCQs...");
  const { error: deleteError } = await supabase
    .from("mcqs")
    .delete()
    .gte("id", "00000000-0000-0000-0000-000000000000");

  if (deleteError) {
    console.error("Error deleting MCQs:", deleteError);
    process.exit(1);
  }
  console.log("  All existing MCQs deleted.\n");

  // Step 2: Insert AI-generated MCQs
  console.log("Step 2: Inserting AI-generated MCQs...");
  const { error: insertError } = await supabase
    .from("mcqs")
    .insert(allMcqs);

  if (insertError) {
    console.error("Error inserting MCQs:", insertError);
    process.exit(1);
  }

  console.log(`  Inserted ${allMcqs.length} MCQs.\n`);

  console.log("=== SUMMARY ===");
  console.log(`Batch 1: ${mcqsBatch1.length} MCQs`);
  console.log(`Batch 2: ${mcqsBatch2.length} MCQs`);
  console.log(`Batch 3: ${mcqsBatch3.length} MCQs`);
  console.log(`Batch 4: ${mcqsBatch4.length} MCQs`);
  console.log(`Batch 5: ${mcqsBatch5.length} MCQs`);
  console.log(`Batch 6: ${mcqsBatch6.length} MCQs`);
  console.log(`Batch 7: ${mcqsBatch7.length} MCQs`);
  console.log(`Total: ${allMcqs.length} MCQs`);
  console.log("Done!");
}

main().catch(console.error);
