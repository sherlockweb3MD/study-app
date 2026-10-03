"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface Flashcard {
  id: string;
  course: string;
  front: string;
  back: string;
}

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function fetchCards() {
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
        .from("flashcards")
        .select("*")
        .eq("course", "Pharmacology");

      if (error) {
        setError("Failed to load flashcards");
        setLoading(false);
        return;
      }

      setCards(data || []);
      setLoading(false);
    }

    fetchCards();
  }, [router, supabase]);

  function nextCard() {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsFlipped(false);
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsFlipped(false);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setIsFlipped(false);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-neutral-500">Loading flashcards...</p>
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

  if (cards.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-neutral-50">
        <p className="text-neutral-500 mb-4">No flashcards available yet.</p>
        <Link href="/dashboard/pharmacology" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
          Go Back
        </Link>
      </div>
    );
  }

  const currentCard = cards[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === cards.length - 1;

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
            <h1 className="text-lg font-bold text-neutral-900">Flashcards</h1>
          </div>
          <span className="text-sm font-medium text-neutral-500">
            {currentIndex + 1} / {cards.length}
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="max-w-lg mx-auto px-4 pt-4">
        <div className="w-full bg-neutral-200 rounded-full h-1.5">
          <div
            className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-6">
        {/* Flashcard */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer select-none mb-6"
        >
          <div className={`bg-white rounded-2xl border-2 p-8 min-h-[200px] flex items-center justify-center text-center shadow-sm transition-all duration-300 ${isFlipped ? "border-primary-300 shadow-md" : "border-neutral-100 hover:shadow-md"}`}>
            <div>
              <p className="text-xs font-semibold text-primary-600 mb-3 uppercase tracking-wide">
                {isFlipped ? "BACK" : "FRONT"} — tap to flip
              </p>
              <p className="text-xl font-semibold text-neutral-900">
                {isFlipped ? currentCard.back : currentCard.front}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={prevCard}
            disabled={isFirst}
            className="flex-1 rounded-xl border-[1.5px] border-neutral-200 bg-white px-4 py-3 text-neutral-700 font-semibold shadow-sm hover:bg-neutral-50 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Previous
          </button>
          {isLast ? (
            <button
              onClick={restart}
              className="flex-1 rounded-xl bg-primary-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
            >
              Restart
            </button>
          ) : (
            <button
              onClick={nextCard}
              className="flex-1 rounded-xl bg-primary-600 px-4 py-3 text-white font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
            >
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
