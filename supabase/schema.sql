-- ============================================
-- Study App Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  is_paid BOOLEAN NOT NULL DEFAULT false,
  pass_expiry_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- MCQs table
CREATE TABLE IF NOT EXISTS public.mcqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course TEXT NOT NULL,
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer TEXT NOT NULL CHECK (correct_answer IN ('A', 'B', 'C', 'D')),
  explanation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Theory table
CREATE TABLE IF NOT EXISTS public.theory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course TEXT NOT NULL,
  question TEXT NOT NULL,
  model_answer TEXT NOT NULL,
  key_points_to_score TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Flashcards table
CREATE TABLE IF NOT EXISTS public.flashcards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course TEXT NOT NULL,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================
-- Row Level Security (RLS)
-- ============================================

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mcqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flashcards ENABLE ROW LEVEL SECURITY;

-- Users table policies
CREATE POLICY "Users can view own profile"
  ON public.users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admin can view all users"
  ON public.users FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can update is_paid"
  ON public.users FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

-- MCQs policies
CREATE POLICY "Paid users can read mcqs"
  ON public.mcqs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.id = auth.uid() AND users.is_paid = true
    )
  );

CREATE POLICY "Admin can insert mcqs"
  ON public.mcqs FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can update mcqs"
  ON public.mcqs FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can delete mcqs"
  ON public.mcqs FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

-- Theory policies
CREATE POLICY "Paid users can read theory"
  ON public.theory FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.id = auth.uid() AND users.is_paid = true
    )
  );

CREATE POLICY "Admin can insert theory"
  ON public.theory FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can update theory"
  ON public.theory FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can delete theory"
  ON public.theory FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

-- Flashcards policies
CREATE POLICY "Paid users can read flashcards"
  ON public.flashcards FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE users.id = auth.uid() AND users.is_paid = true
    )
  );

CREATE POLICY "Admin can insert flashcards"
  ON public.flashcards FOR INSERT
  TO authenticated
  WITH CHECK (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can update flashcards"
  ON public.flashcards FOR UPDATE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

CREATE POLICY "Admin can delete flashcards"
  ON public.flashcards FOR DELETE
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'personalvodoo@gmail.com');

-- ============================================
-- Trigger: Auto-create user profile on signup
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, is_paid)
  VALUES (NEW.id, NEW.email, true);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
