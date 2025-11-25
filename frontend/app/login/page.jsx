"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success("Login successful!");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-56px)] flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-4 text-slate-200"
        >
          <h2 className="text-2xl font-semibold">Login</h2>

          {error && (
            <p className="text-sm text-red-400 bg-red-950/40 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          <div className="space-y-1">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-blue-500 text-white"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-blue-500 text-white"
              onChange={handleChange}
              value={form.password}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-2"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </main>
    </>
  );
}
