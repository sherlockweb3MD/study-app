import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { newPastQuestionsV4 } from "./past-questions-data-v4";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`Uploading ${newPastQuestionsV4.length} new past questions...\n`);

  const { error } = await supabase
    .from("past_questions")
    .insert(newPastQuestionsV4);

  if (error) {
    console.error("Error uploading past questions:", error);
    process.exit(1);
  }

  console.log(`Successfully uploaded ${newPastQuestionsV4.length} new past questions!`);
  console.log("\nQuestion numbers:", newPastQuestionsV4.map((q) => q.question_number).join(", "));
}

main().catch(console.error);
