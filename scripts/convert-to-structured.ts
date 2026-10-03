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

interface StructuredAnswer {
  entityA: string | null;
  entityB: string | null;
  rows: {
    feature: string;
    optionA: string;
    optionB: string;
  }[];
}

function detectAndConvertToStructured(modelAnswer: string): StructuredAnswer | null {
  const lines = modelAnswer.split("\n");
  
  // Pattern 1: Bold headers with bullet points
  // **Feature Name**
  // - Entity A: value
  // - Entity B: value
  const boldHeaderPattern = /^\*\*(.+)\*\*$/;
  const bulletPattern = /^-\s+(.+):\s+(.+)$/;
  
  let entityA: string | null = null;
  let entityB: string | null = null;
  const rows: { feature: string; optionA: string; optionB: string }[] = [];
  
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Check for bold header
    const headerMatch = line.match(boldHeaderPattern);
    if (headerMatch) {
      const feature = headerMatch[1];
      i++;
      
      // Look for bullet points under this header
      const entities: { name: string; value: string }[] = [];
      while (i < lines.length) {
        const bulletLine = lines[i].trim();
        const bulletMatch = bulletLine.match(bulletPattern);
        if (bulletMatch) {
          entities.push({ name: bulletMatch[1], value: bulletMatch[2] });
          i++;
        } else if (bulletLine === "") {
          i++;
          if (i < lines.length && lines[i].trim().match(bulletPattern)) {
            continue;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      
      if (entities.length === 2) {
        rows.push({
          feature,
          optionA: entities[0].value,
          optionB: entities[1].value,
        });
        
        // Try to extract entity names from first row
        if (!entityA && !entityB) {
          entityA = entities[0].name;
          entityB = entities[1].name;
        }
      }
      continue;
    }
    
    // Pattern 2: Pipe-separated table with 3 columns
    // Feature | Entity A | Entity B
    // Label   | Value A  | Value B
    if (line.includes("|")) {
      const parts = line.split("|").map(p => p.trim()).filter(p => p.length > 0);
      if (parts.length >= 3) {
        // Check if this is a header row
        if (parts[0].toLowerCase() === "feature" || parts[0].toLowerCase() === "name") {
          // Extract entity names from header
          if (!entityA && !entityB) {
            entityA = parts[1];
            entityB = parts[2];
          }
          i++;
          continue;
        }
        
        // Data row
        rows.push({
          feature: parts[0],
          optionA: parts[1],
          optionB: parts[2],
        });
        i++;
        continue;
      }
    }
    
    i++;
  }
  
  if (rows.length > 0) {
    return { entityA, entityB, rows };
  }
  
  return null;
}

async function main() {
  console.log("=== CONVERT TO STRUCTURED ANSWERS ===\n");

  // Fetch all records
  console.log("Fetching records from Supabase...");
  const { data: questions, error } = await supabase
    .from("past_questions")
    .select("id, question_number, topic_area, model_answer")
    .eq("course", "Pharmacology");

  if (error) {
    console.error("Error fetching questions:", error);
    process.exit(1);
  }

  console.log(`Found ${questions?.length || 0} questions\n`);

  let convertedCount = 0;

  for (const q of questions || []) {
    const structured = detectAndConvertToStructured(q.model_answer);

    if (structured) {
      const { error: updateError } = await supabase
        .from("past_questions")
        .update({ structured_answer: structured })
        .eq("id", q.id);

      if (updateError) {
        console.error(`Error updating question ${q.question_number}:`, updateError);
      } else {
        convertedCount++;
        console.log(`Converted question ${q.question_number} (${q.topic_area}): ${structured.rows.length} rows`);
        if (structured.entityA && structured.entityB) {
          console.log(`  Entities: ${structured.entityA} vs ${structured.entityB}`);
        }
      }
    }
  }

  console.log(`\n=== SUMMARY ===`);
  console.log(`Records converted: ${convertedCount}`);
  console.log(`Done!`);
}

main().catch(console.error);
