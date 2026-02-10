import Link from "next/link";
import { useState } from "react";
import Didymus_TextLogo from "../src/app/Didymus-TextLogo/Didymus-TextLogo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrayerOpen, setIsPrayerOpen] = useState(false);

  return (
    <nav className="bg-[#1b2437] text-white p-4 w-full relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Didymus_TextLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="#home" className="hover:text-gray-200">
            Home
          </Link>
          <Link href="#about-us" className="hover:text-gray-200">
            About Us
          </Link>

          {/* Prayer Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsPrayerOpen(true)}
            onMouseLeave={() => setIsPrayerOpen(false)}
          >
            <button className="hover:text-gray-200 flex items-center gap-1">
              Prayer ↓
            </button>
            {isPrayerOpen && (
              <div className="absolute top-full left-0 mt-2 w-44 bg-white text-[#1b2437] rounded-lg shadow-lg overflow-hidden">
                <Link
                  href="/prayer/morning"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Morning Prayer
                </Link>
                <Link
                  href="/prayer/daily"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Daily Prayer
                </Link>
                <Link
                  href="/prayer/night"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Night Prayer
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href="#features"
            className="border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-[#1b2437]"
          >
            Download the app
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#1b2437] font-semibold px-4 py-1 rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#1b2437] p-4 rounded-lg">
          <Link href="#home" className="block py-2 hover:text-gray-200">
            Home
          </Link>
          <Link href="#about-us" className="block py-2 hover:text-gray-200">
            About Us
          </Link>

          {/* Mobile Prayer Dropdown */}
          <div>
            <button
              className="w-full text-left flex justify-between py-2 hover:text-gray-200"
              onClick={() => setIsPrayerOpen(!isPrayerOpen)}
            >
              Prayer {isPrayerOpen ? "↑" : "↓"}
            </button>
            {isPrayerOpen && (
              <div className="pl-4 mt-1">
                <Link
                  href="/prayer/morning"
                  className="block py-1 hover:text-gray-200"
                >
                  Morning Prayer
                </Link>
                <Link
                  href="/prayer/daily"
                  className="block py-1 hover:text-gray-200"
                >
                  Daily Prayer
                </Link>
                <Link
                  href="/prayer/night"
                  className="block py-1 hover:text-gray-200"
                >
                  Night Prayer
                </Link>
              </div>
            )}
          </div>

          <Link href="#features" className="block py-2 hover:text-gray-200">
            Download the app
          </Link>
          <Link href="/login" className="block py-2 hover:text-gray-200">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
