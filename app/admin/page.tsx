"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

interface UserProfile {
  id: string;
  email: string;
  is_paid: boolean;
  pass_expiry_date: string | null;
  created_at: string;
}

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "your-admin-email@example.com";

export default function AdminPage() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // TEMP: Debug log for admin email verification
  console.log("[ADMIN DEBUG] NEXT_PUBLIC_ADMIN_EMAIL =", process.env.NEXT_PUBLIC_ADMIN_EMAIL);
  console.log("[ADMIN DEBUG] user.email will be logged after auth check");

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      if (user.email !== ADMIN_EMAIL) {
        router.push("/dashboard");
        return;
      }

      setIsAdmin(true);
      await fetchUsers();
    }

    checkAdmin();
  }, [router, supabase]);

  async function fetchUsers() {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Failed to load users");
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  }

  async function togglePaid(userId: string, currentStatus: boolean) {
    const { error } = await supabase
      .from("users")
      .update({ is_paid: !currentStatus })
      .eq("id", userId);

    if (error) {
      alert("Failed to update user");
    } else {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, is_paid: !currentStatus } : u
        )
      );
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

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

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-100 px-4 py-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-neutral-900">AcmeMed Admin</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-neutral-500 hover:text-neutral-700 font-medium transition-colors"
          >
            Log Out
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-1">
            User Management
          </h2>
          <p className="text-sm text-neutral-500">
            Manage user access and subscriptions
          </p>
        </div>

        {error && (
          <div className="rounded-xl bg-error-50 border border-error-100 px-4 py-3 text-sm text-error-700 mb-4">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl border border-neutral-100 p-4 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-neutral-900">{user.email}</p>
                <p className="text-sm text-neutral-500">
                  Joined: {new Date(user.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => togglePaid(user.id, user.is_paid)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  user.is_paid
                    ? "bg-success-100 text-success-700 hover:bg-success-200"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {user.is_paid ? "Paid" : "Free"}
              </button>
            </div>
          ))}
        </div>

        {users.length === 0 && (
          <p className="text-neutral-500 text-center py-8">No users found.</p>
        )}
      </main>
    </div>
  );
}
