"use client";

import Link from "next/link";
import Didymus_TextLogo from "../../Didymus-TextLogo/Didymus-TextLogo";

export default function SignupDetailsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1b2437] text-white">
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight">
            <Didymus_TextLogo />
          </span>
        </Link>

        <div className="text-sm text-white">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Create your account
        </h1>
        <p className="text-gray-600 text-base mb-6">
          Enter your details below to finish setting up your account.
        </p>

        <form className="w-full max-w-md space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>
      </main>
    </div>
  );
}
