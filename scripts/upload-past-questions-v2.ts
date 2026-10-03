import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { newPastQuestions } from "./past-questions-data-v2";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`Uploading ${newPastQuestions.length} new past questions...\n`);

  const { error } = await supabase
    .from("past_questions")
    .insert(newPastQuestions);

  if (error) {
    console.error("Error uploading past questions:", error);
    process.exit(1);
  }

  console.log(`Successfully uploaded ${newPastQuestions.length} new past questions!`);
  console.log("\nQuestion numbers:", newPastQuestions.map((q) => q.question_number).join(", "));
}

main().catch(console.error);
