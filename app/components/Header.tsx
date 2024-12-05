"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 h-[80px] md:px-24 md:h-[100px]">
      {/* Logo */}
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Site Logo"
        width={100}
        height={40}
        className="md:w-[134px] md:h-[50px]"
      />

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-10">
        <Link href="/blogs" className="font-redHat text-sm font-regular">
          BLOGS
        </Link>
        <Link href="/about" className="font-redHat text-sm font-regular">
          ABOUT
        </Link>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-[80px] left-0 w-full bg-white p-4 flex flex-col items-start space-y-4 md:hidden">
          <Link
            href="/blogs"
            className="font-redHat text-sm font-regular"
            onClick={() => setMenuOpen(false)}
          >
            BLOGS
          </Link>
          <Link
            href="/about"
            className="font-redHat text-sm font-regular"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
        </nav>
      )}
    </header>
  );
}
