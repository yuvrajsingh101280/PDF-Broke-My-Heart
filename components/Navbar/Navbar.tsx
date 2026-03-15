"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import MegaMenu from "../landing/mega-menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="text-lg font-bold tracking-tight flex items-center gap-2"
        >
          💔
          <span>PDF Broke My Heart</span>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <Link href="/tools/compress" className="hover:text-white transition">
            Compress PDF
          </Link>

          <Link href="/tools/merge" className="hover:text-white transition">
            Merge PDF
          </Link>

          <Link href="/tools/split" className="hover:text-white transition">
            Split PDF
          </Link>

          <Link
            href="/tools/pdf-to-image"
            className="hover:text-white transition"
          >
            PDF → Image
          </Link>

          {/* Mega Menu */}

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-white transition">
              More Tools
              <ChevronDown size={16} />
            </button>

            {open && <MegaMenu />}
          </div>
        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">
          {/* Desktop Auth */}

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl px-6 py-6 space-y-4">
          <Link
            href="/tools/compress"
            className="block text-sm hover:text-white"
          >
            Compress PDF
          </Link>

          <Link href="/tools/merge" className="block text-sm hover:text-white">
            Merge PDF
          </Link>

          <Link href="/tools/split" className="block text-sm hover:text-white">
            Split PDF
          </Link>

          <Link
            href="/tools/pdf-to-image"
            className="block text-sm hover:text-white"
          >
            PDF → Image
          </Link>

          <div className="border-t border-white/10 pt-4 space-y-3">
            <Link
              href="/login"
              className="block text-sm text-zinc-400 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="block text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
