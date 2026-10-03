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

function fixMarkdownTables(text: string): { fixed: string; count: number } {
  let count = 0;
  const lines = text.split("\n");
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this line contains | (potential table row)
    if (line.includes("|")) {
      // Look ahead to see if this is a block of consecutive | lines
      let j = i;
      while (j < lines.length && lines[j].includes("|")) {
        j++;
      }

      const blockSize = j - i;

      // If we have multiple consecutive | lines, it's likely a table
      if (blockSize >= 2) {
        // Add the first line (header)
        result.push(lines[i]);
        i++;

        // Check if the second line is already a separator
        if (i < lines.length && lines[i].includes("---")) {
          // Already has separator, just add it
          result.push(lines[i]);
          i++;
        } else {
          // Need to insert a separator
          // Count the number of columns from the header
          const header = lines[i - 1];
          const colCount = (header.match(/\|/g) || []).length - 1;
          const separator = "|" + "---|".repeat(Math.max(colCount, 1));
          result.push(separator);
          count++;
        }

        // Add the rest of the table rows
        while (i < lines.length && lines[i].includes("|")) {
          result.push(lines[i]);
          i++;
        }
      } else {
        // Single | line, just add it
        result.push(line);
        i++;
      }
    } else {
      result.push(line);
      i++;
    }
  }

  // Also replace tabs with |
  let fixed = result.join("\n");
  const tabCount = (fixed.match(/\t/g) || []).length;
  if (tabCount > 0) {
    fixed = fixed.replace(/\t/g, " | ");
    count += tabCount;
  }

  return { fixed, count };
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
    const { fixed, count } = fixMarkdownTables(q.model_answer);

    if (count > 0) {
      const { error: updateError } = await supabase
        .from("past_questions")
        .update({ model_answer: fixed })
        .eq("id", q.id);

      if (updateError) {
        console.error(`Error updating question ${q.question_number}:`, updateError);
      } else {
        totalFixed += count;
        recordsWithFixes++;
        console.log(`Fixed question ${q.question_number}: ${count} table(s) repaired`);
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Records with fixes: ${recordsWithFixes}`);
  console.log(`Total tables repaired: ${totalFixed}`);
  console.log(`Done!`);
}

main().catch(console.error);
