import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseKey) {
  console.error("ERROR: SUPABASE_SERVICE_ROLE_KEY is not set in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadMCQs() {
  const filePath = path.join(process.cwd(), "mcq.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  console.log(`Found ${records.length} MCQ records`);

  // Map CSV columns to database columns
  const mapped = records.map((r: any) => ({
    course: r.Course,
    question: r.Question,
    option_a: r.Option_A,
    option_b: r.Option_B,
    option_c: r.Option_C,
    option_d: r.Option_D,
    correct_answer: r.Correct_Answer,
    explanation: r.Explanation,
  }));

  const { error } = await supabase.from("mcqs").insert(mapped);

  if (error) {
    console.error("Error uploading MCQs:", error);
  } else {
    console.log(`Successfully uploaded ${mapped.length} MCQs`);
  }
}

async function uploadTheory() {
  const filePath = path.join(process.cwd(), "theory.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  console.log(`Found ${records.length} Theory records`);

  const mapped = records.map((r: any) => ({
    course: r.Course,
    question: r.Question,
    model_answer: r.Model_Answer,
    key_points_to_score: r.Key_Points_To_Score,
  }));

  const { error } = await supabase.from("theory").insert(mapped);

  if (error) {
    console.error("Error uploading Theory:", error);
  } else {
    console.log(`Successfully uploaded ${mapped.length} Theory questions`);
  }
}

async function uploadFlashcards() {
  const filePath = path.join(process.cwd(), "flashcard.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  console.log(`Found ${records.length} Flashcard records`);

  const mapped = records.map((r: any) => ({
    course: r.Course,
    front: r.Front,
    back: r.Back,
  }));

  const { error } = await supabase.from("flashcards").insert(mapped);

  if (error) {
    console.error("Error uploading Flashcards:", error);
  } else {
    console.log(`Successfully uploaded ${mapped.length} Flashcards`);
  }
}

async function main() {
  console.log("Starting CSV upload...\n");

  await uploadMCQs();
  await uploadTheory();
  await uploadFlashcards();

  console.log("\nUpload complete!");
}

main().catch(console.error);
