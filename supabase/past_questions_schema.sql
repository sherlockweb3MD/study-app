-- Past Exam Questions Table
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.past_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course TEXT NOT NULL,
  question_number INTEGER NOT NULL,
  lecturer TEXT,
  topic_area TEXT NOT NULL,
  question_text TEXT NOT NULL,
  model_answer TEXT NOT NULL,
  total_marks INTEGER NOT NULL DEFAULT 20,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS
ALTER TABLE public.past_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Paid users can read past_questions"
  ON public.past_questions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.id = auth.uid() AND users.is_paid = true
    )
  );

CREATE POLICY "Admin can insert past_questions"
  ON public.past_questions FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = 'your-admin-email@example.com');

CREATE POLICY "Admin can update past_questions"
  ON public.past_questions FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'your-admin-email@example.com');

CREATE POLICY "Admin can delete past_questions"
  ON public.past_questions FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'your-admin-email@example.com');
