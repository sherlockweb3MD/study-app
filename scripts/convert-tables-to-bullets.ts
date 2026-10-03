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

function convertFlattenedTableToBullets(text: string): { converted: string; count: number } {
  let count = 0;
  
  // Split into lines and process
  const lines = text.split("\n");
  const result: string[] = [];
  
  for (const line of lines) {
    // Check if this line contains | characters (flattened table)
    if (line.includes("|")) {
      // Split by | and clean up
      const parts = line.split("|").map(p => p.trim()).filter(p => p.length > 0);
      
      // Remove separator parts (---)
      const cleanParts = parts.filter(p => !p.match(/^-+$/));
      
      if (cleanParts.length >= 3) {
        // 3-column table: first column is the row label, next 2 are values
        // The first row is the header (e.g., "Feature | COX-1 | COX-2")
        // Subsequent rows are data (e.g., "Expression | Constitutive | Inducible")
        
        // Check if this is a header row (contains "Feature" or similar)
        if (cleanParts[0].toLowerCase() === "feature" || cleanParts[0].toLowerCase() === "drug" || cleanParts[0].toLowerCase() === "class" || cleanParts[0].toLowerCase() === "generation" || cleanParts[0].toLowerCase() === "type" || cleanParts[0].toLowerCase() === "phase" || cleanParts[0].toLowerCase() === "group" || cleanParts[0].toLowerCase() === "hormone" || cleanParts[0].toLowerCase() === "poison" || cleanParts[0].toLowerCase() === "category" || cleanParts[0].toLowerCase() === "structure" || cleanParts[0].toLowerCase() === "location") {
          // This is a header row, skip it or use it as context
          // We'll use the column headers as context for the data rows
          result.push(`**${cleanParts[1]} vs ${cleanParts[2]}**`);
          count++;
        } else {
          // Data row: first column is the label, next 2 are values
          const label = cleanParts[0];
          const value1 = cleanParts[1];
          const value2 = cleanParts[2];
          
          result.push(`**${label}**`);
          result.push(`- ${value1}`);
          result.push(`- ${value2}`);
          result.push("");
          count++;
        }
      } else if (cleanParts.length === 2) {
        // 2-column table: first column is label, second is value
        const label = cleanParts[0];
        const value = cleanParts[1];
        
        result.push(`**${label}**`);
        result.push(`- ${value}`);
        result.push("");
        count++;
      } else if (cleanParts.length >= 4) {
        // 4+ column table: first column is label, rest are values
        const label = cleanParts[0];
        const values = cleanParts.slice(1);
        
        result.push(`**${label}**`);
        for (const val of values) {
          result.push(`- ${val}`);
        }
        result.push("");
        count++;
      } else {
        // Fallback: just clean the pipes
        result.push(cleanParts.join(" - "));
        count++;
      }
    } else {
      result.push(line);
    }
  }
  
  return { converted: result.join("\n"), count };
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
    const { converted, count } = convertFlattenedTableToBullets(q.model_answer);

    if (count > 0) {
      const { error: updateError } = await supabase
        .from("past_questions")
        .update({ model_answer: converted })
        .eq("id", q.id);

      if (updateError) {
        console.error(`Error updating question ${q.question_number}:`, updateError);
      } else {
        totalFixed += count;
        recordsWithFixes++;
        console.log(`Fixed question ${q.question_number}: ${count} table(s) converted`);
      }
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Records with fixes: ${recordsWithFixes}`);
  console.log(`Total tables converted: ${totalFixed}`);
  console.log(`Done!`);
}

main().catch(console.error);
