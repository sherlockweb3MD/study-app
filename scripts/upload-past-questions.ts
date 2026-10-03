import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import { pastQuestions } from "./past-questions-data";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`Uploading ${pastQuestions.length} past questions...\n`);

  const { error } = await supabase
    .from("past_questions")
    .insert(pastQuestions);

  if (error) {
    console.error("Error uploading past questions:", error);
    process.exit(1);
  }

  console.log(`Successfully uploaded ${pastQuestions.length} past questions!`);
}

main().catch(console.error);
