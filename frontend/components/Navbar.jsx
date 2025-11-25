"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur px-6 py-3 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg">
        Fullstack Dashboard
      </Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="text-sm text-slate-300">
              {user.name || user.email}
            </span>
            <button
              onClick={logout}
              className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-sm hover:text-blue-400">
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
