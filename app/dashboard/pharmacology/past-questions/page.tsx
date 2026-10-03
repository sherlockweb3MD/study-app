"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PastQuestion {
  id: string;
  course: string;
  question_number: number;
  lecturer: string | null;
  topic_area: string;
  question_text: string;
  model_answer: string;
  total_marks: number;
  structured_answer: {
    entityA: string | null;
    entityB: string | null;
    rows: {
      feature: string;
      optionA: string;
      optionB: string;
    }[];
  } | null;
}

function ComparisonCard({ data }: { data: NonNullable<PastQuestion["structured_answer"]> }) {
  return (
    <div className="space-y-3">
      {/* Entity headers */}
      {data.entityA && data.entityB && (
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1 text-center py-2 rounded-lg bg-primary-50 border border-primary-100">
            <span className="text-sm font-bold text-primary-700">{data.entityA}</span>
          </div>
          <div className="flex-1 text-center py-2 rounded-lg bg-neutral-50 border border-neutral-200">
            <span className="text-sm font-bold text-neutral-600">{data.entityB}</span>
          </div>
        </div>
      )}

      {/* Feature rows */}
      {data.rows.map((row, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <div className="bg-neutral-50 px-4 py-2 border-b border-neutral-100">
            <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
              {row.feature}
            </span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-neutral-100">
            <div className="px-4 py-3">
              <p className="text-sm text-neutral-700">{row.optionA}</p>
            </div>
            <div className="px-4 py-3">
              <p className="text-sm text-neutral-700">{row.optionB}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PastQuestionsPage() {
  const [questions, setQuestions] = useState<PastQuestion[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<PastQuestion[]>([]);
  const [topics, setTopics] = useState<string[]>([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
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
        .from("past_questions")
        .select("*")
        .eq("course", "Pharmacology")
        .order("question_number", { ascending: true });

      if (error) {
        console.error("Failed to load questions:", error);
      } else {
        setQuestions(data || []);
        setFilteredQuestions(data || []);

        const uniqueTopics = [...new Set((data || []).map((q) => q.topic_area))];
        setTopics(uniqueTopics);
      }

      setLoading(false);
    }

    fetchQuestions();
  }, [router, supabase]);

  useEffect(() => {
    let result = questions;

    if (selectedTopic) {
      result = result.filter((q) => q.topic_area === selectedTopic);
    }

    setFilteredQuestions(result);
  }, [selectedTopic, questions]);

  function toggleAnswer(id: string) {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
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
          <h1 className="text-lg font-bold text-neutral-900">Theory & Past Questions</h1>
        </div>

        {/* Topic Filter */}
        <div className="space-y-2">
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="w-full rounded-xl border-[1.5px] border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 focus:border-primary-500 focus:outline-none focus:shadow-glow transition-all duration-200 appearance-none"
          >
            <option value="">All Topics</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {selectedTopic && (
            <button
              onClick={() => setSelectedTopic("")}
              className="text-xs text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>
      </header>

      {/* Content - Continuous Scroll */}
      <main className="max-w-lg mx-auto px-4 py-6 pb-20">
        <p className="text-xs text-neutral-500 mb-4 px-1">
          {filteredQuestions.length} question{filteredQuestions.length !== 1 ? "s" : ""} found
        </p>

        <div className="space-y-6">
          {filteredQuestions.map((q) => {
            const isExpanded = expandedIds.has(q.id);

            return (
              <div key={q.id} className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                {/* Question Section */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                      {q.topic_area}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {q.total_marks} marks
                    </span>
                  </div>
                  <p className="text-sm text-neutral-800 whitespace-pre-line leading-relaxed">
                    {q.question_text}
                  </p>
                </div>

                {/* Reveal Button */}
                <div className="px-5 pb-4">
                  <button
                    onClick={() => toggleAnswer(q.id)}
                    className={`w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isExpanded
                        ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100"
                    }`}
                  >
                    {isExpanded ? "Hide Answer" : "Reveal Answer"}
                  </button>
                </div>

                {/* Answer Section - Expands below */}
                {isExpanded && (
                  <div className="border-t border-neutral-100 bg-success-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 bg-success-600 rounded-full" />
                      <h3 className="text-xs font-semibold text-success-600 uppercase tracking-wide">
                        Model Answer
                      </h3>
                    </div>
                    {q.structured_answer ? (
                      <ComparisonCard data={q.structured_answer} />
                    ) : (
                      <div className="prose prose-sm max-w-none prose-headings:text-neutral-800 prose-p:text-neutral-700 prose-li:text-neutral-700 prose-strong:text-neutral-800 prose-hr:border-neutral-200">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {q.model_answer}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-neutral-500 font-medium">No questions found</p>
            <p className="text-sm text-neutral-400 mt-1">Try adjusting your filter</p>
          </div>
        )}
      </main>
    </div>
  );
}
