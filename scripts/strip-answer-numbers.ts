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

function stripNumberingPrefixes(text: string): { cleaned: string; count: number } {
  let count = 0;
  const lines = text.split("\n");
  const result = lines.map((line) => {
    // Match patterns like "1a)", "17b)", "5c)", "2d)", "1.", "2.", "a)", "b)", etc.
    // at the start of the line (possibly after whitespace)
    const match = line.match(/^(\s*)(\d+[a-d]\)|\d+\.|\d+\)|[a-d]\))\s*/);
    if (match) {
      count++;
      return line.replace(match[0], match[1]);
    }
    return line;
  });
  return { cleaned: result.join("\n"), count };
}

async function main() {
  console.log("Fetching past questions from Supabase...\n");

  const { data: questions, error } = await supabase
    .from("past_questions")
    .select("id, question_number, model_answer")
    .eq("course", "Pharmacology");

  if (error) {
    console.error("Error fetching questions:", error);
    process.exit(1);
  }

  console.log(`Found ${questions?.length || 0} questions\n`);

  let totalFixed = 0;
  let recordsWithFixes = 0;

  for (const q of questions || []) {
    const { cleaned, count } = stripNumberingPrefixes(q.model_answer);

    if (count > 0) {
      const { error: updateError } = await supabase
        .from("past_questions")
        .update({ model_answer: cleaned })
        .eq("id", q.id);

      if (updateError) {
        console.error(`Error updating question ${q.question_number}:`, updateError);
      } else {
        totalFixed += count;
        recordsWithFixes++;
        console.log(`Fixed question ${q.question_number}: ${count} prefix(es) removed`);
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Records with fixes: ${recordsWithFixes}`);
  console.log(`Total prefixes removed: ${totalFixed}`);
  console.log(`Done!`);
}

main().catch(console.error);
