"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface MCQ {
  id: string;
  course: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string | null;
}

export default function MCQPage() {
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function fetchQuestions() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      const { data: profile } = await supabase
        .from("users")
        .select("is_paid")
        .eq("id", user.id)
        .single();

      if (!profile?.is_paid) {
        router.push("/dashboard");
        return;
      }

      const { data, error } = await supabase
        .from("mcqs")
        .select("*")
        .eq("course", "Pharmacology");

      if (error) {
        setError("Failed to load questions");
        setLoading(false);
        return;
      }

      setQuestions(data || []);
      setLoading(false);
    }

    fetchQuestions();
  }, [router, supabase]);

  function handleAnswer(answer: string) {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setShowExplanation(true);
    if (answer === questions[currentIndex].correct_answer) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-neutral-500">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-neutral-50">
        <div className="rounded-xl bg-error-50 border border-error-100 px-4 py-3 text-sm text-error-700 mb-4">
          {error}
        </div>
        <Link href="/dashboard/pharmacology" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
          Go Back
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-neutral-50">
        <p className="text-neutral-500 mb-4">No questions available yet.</p>
        <Link href="/dashboard/pharmacology" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
          Go Back
        </Link>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const isCorrect = selectedAnswer === currentQ.correct_answer;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100 px-4 py-4">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/pharmacology"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-lg font-bold text-neutral-900">MCQ Quiz</h1>
          </div>
          <span className="text-sm font-medium text-neutral-500">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="w-full bg-neutral-200 rounded-full h-1.5">
          <div
            className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Score */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
            Score: {score}/{questions.length}
          </span>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm mb-5">
          <h2 className="text-lg font-semibold text-neutral-900 leading-relaxed">
            {currentQ.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-5">
          {(["A", "B", "C", "D"] as const).map((letter) => {
            const option = currentQ[`option_${letter.toLowerCase()}` as keyof MCQ] as string;
            const isSelected = selectedAnswer === letter;
            const isCorrectAnswer = currentQ.correct_answer === letter;

            let style = "bg-white border-neutral-200 hover:border-primary-300 hover:shadow-sm";
            if (selectedAnswer) {
              if (isCorrectAnswer) {
                style = "bg-success-50 border-success-500 shadow-sm";
              } else if (isSelected) {
                style = "bg-error-50 border-error-500 shadow-sm";
              } else {
                style = "bg-white border-neutral-200 opacity-50";
              }
            }

            return (
              <button
                key={letter}
                onClick={() => handleAnswer(letter)}
                disabled={!!selectedAnswer}
                className={`w-full rounded-xl border-[1.5px] p-4 text-left transition-all duration-200 ${style}`}
              >
                <span className="font-semibold text-neutral-900 mr-2">{letter}.</span>
                <span className="text-neutral-600">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && currentQ.explanation && (
          <div className={`rounded-xl p-4 mb-5 border ${isCorrect ? "bg-success-50 border-success-100" : "bg-warning-50 border-warning-100"}`}>
            <p className="text-sm font-semibold text-neutral-900 mb-1">
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </p>
            <p className="text-sm text-neutral-600">{currentQ.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {selectedAnswer && (
          <button
            onClick={isLast ? restart : nextQuestion}
            className="w-full rounded-xl bg-primary-600 px-4 py-3.5 text-white font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
          >
            {isLast ? "Restart Quiz" : "Next Question"}
          </button>
        )}
      </main>
    </div>
  );
}
