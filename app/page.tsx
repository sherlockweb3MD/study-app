import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-primary-50 via-white to-neutral-50 px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 mb-2">
          StudyApp
        </h1>
        <p className="text-lg text-neutral-500 mb-10">
          Your ultimate study companion for Pharmacology
        </p>

        <div className="space-y-3">
          <Link
            href="/login"
            className="block w-full rounded-xl bg-primary-600 px-6 py-3.5 text-white font-semibold shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-200"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="block w-full rounded-xl border-[1.5px] border-neutral-200 bg-white px-6 py-3.5 text-neutral-700 font-semibold shadow-sm hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>

        <p className="mt-8 text-xs text-neutral-400">
          93 past questions • MCQ quizzes • Flashcards
        </p>
      </div>
    </div>
  );
}
