"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function NotesPage() {
  const [notes, setNotes] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkAccess() {
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

      setLoading(false);
    }

    checkAccess();
  }, [router, supabase]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const res = await fetch("/notes.txt");
        const text = await res.text();
        setNotes(text);
      } catch {
        setNotes("Notes file not found. Please add notes.txt to the public folder.");
      }
    }

    if (!loading) {
      loadNotes();
    }
  }, [loading]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const lines = notes.split("\n");
    const results = lines.filter((line) =>
      line.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results.slice(0, 20));
  }, [searchQuery, notes]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-neutral-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100 px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/dashboard/pharmacology"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-neutral-900">Study Notes</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes..."
            className="w-full rounded-xl border-[1.5px] border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:shadow-glow transition-all duration-200"
          />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-6">
        {searchQuery.trim() ? (
          <div className="space-y-2">
            <p className="text-xs text-neutral-500 mb-3 px-1">
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
            </p>
            {searchResults.map((result, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-neutral-100 p-4 shadow-sm"
              >
                <p className="text-sm text-neutral-700">{result}</p>
              </div>
            ))}
            {searchResults.length === 0 && (
              <div className="text-center py-8">
                <p className="text-neutral-500">No results found</p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm">
            <pre className="whitespace-pre-wrap text-sm text-neutral-700 font-sans leading-relaxed">
              {notes}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
