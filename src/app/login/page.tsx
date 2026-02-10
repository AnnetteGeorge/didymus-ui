"use client";

import Link from "next/link";
import Didymus_TextLogo from "../Didymus-TextLogo/Didymus-TextLogo";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1b2437] text-white">
      {/* ===== HEADER ===== */}
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
        {/* Logo Section */}

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            <Didymus_TextLogo />
          </span>
        </Link>

        {/* Right Section */}
        <div className="text-sm text-white">
          New to Didymus?{" "}
          <Link
            href="Signup/details"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-2xl md:text-3xl ">
          Enter your email address to sign in
        </h1>

        <form className="w-full max-w-md mt-6 space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          We’ve emailed you a quick access link to log in.
        </p>
      </main>
    </div>
  );
}
