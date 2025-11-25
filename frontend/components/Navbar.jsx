"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import Switch from "@/components/ui/Switch";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="font-semibold text-lg text-slate-100">
        Fullstack Dashboard
      </Link>

      <div className="flex gap-6 items-center">
        <div className="scale-75">
          <Switch checked={theme === "light"} onChange={toggleTheme} />
        </div>

        {user ? (
          <>
            <span className="text-sm text-slate-300">
              {user.name || user.email}
            </span>
            <button
              onClick={logout}
              className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-600 text-sm text-white transition-colors"
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}
