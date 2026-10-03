import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { pastQuestions } from "./past-questions-data";
import { newPastQuestions as newPastQuestionsV2 } from "./past-questions-data-v2";
import { newPastQuestionsV3 } from "./past-questions-data-v3";
import { newPastQuestionsV4 } from "./past-questions-data-v4";
import { newPastQuestionsV5 } from "./past-questions-data-v5";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

function formatMarkdownTables(text: string): { formatted: string; tableCount: number } {
  let tableCount = 0;
  const lines = text.split("\n");
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check if this line contains | (potential table row)
    if (line.includes("|")) {
      // Look ahead to find the full block of consecutive | lines
      let j = i;
      while (j < lines.length && lines[j].includes("|")) {
        j++;
      }

      const blockSize = j - i;

      // If we have multiple consecutive | lines, it's a table
      if (blockSize >= 2) {
        // Add the first line (header)
        result.push(lines[i]);
        i++;

        // Insert separator row
        const header = lines[i - 1];
        const colCount = (header.match(/\|/g) || []).length - 1;
        const separator = "|" + "---|".repeat(Math.max(colCount, 1));
        result.push(separator);
        tableCount++;

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

  // Replace tabs with |
  let formatted = result.join("\n");
  formatted = formatted.replace(/\t/g, " | ");

  return { formatted, tableCount };
}

async function main() {
  console.log("=== TASK 2: RESET AND RE-UPLOAD ===\n");

  // Step 1: Delete all records
  console.log("Step 1: Deleting all records from past_questions...");
  const { error: deleteError } = await supabase
    .from("past_questions")
    .delete()
    .gte("id", "00000000-0000-0000-0000-000000000000");

  if (deleteError) {
    console.error("Error deleting records:", deleteError);
    process.exit(1);
  }
  console.log("All records deleted.\n");

  // Step 2: Combine all source data
  console.log("Step 2: Importing data from source files...");
  const allQuestions = [
    ...pastQuestions,
    ...newPastQuestionsV2,
    ...newPastQuestionsV3,
    ...newPastQuestionsV4,
    ...newPastQuestionsV5,
  ];
  console.log(`Total records from sources: ${allQuestions.length}\n`);

  // Step 3: Pre-process markdown tables
  console.log("Step 3: Formatting markdown tables...");
  let totalTablesFormatted = 0;
  const processedQuestions = allQuestions.map((q) => {
    const { formatted, tableCount } = formatMarkdownTables(q.model_answer);
    totalTablesFormatted += tableCount;
    return {
      ...q,
      model_answer: formatted,
    };
  });
  console.log(`Tables formatted: ${totalTablesFormatted}\n`);

  // Step 4: Upload to Supabase
  console.log("Step 4: Uploading to Supabase...");
  const { error: insertError } = await supabase
    .from("past_questions")
    .insert(processedQuestions);

  if (insertError) {
    console.error("Error inserting records:", insertError);
    process.exit(1);
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Records re-uploaded: ${processedQuestions.length}`);
  console.log(`Tables formatted: ${totalTablesFormatted}`);
  console.log(`Done!`);
}

main().catch(console.error);
