"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-16 text-center"
      >
        {/* glow overlay */}
        <div className="absolute inset-0 opacity-30 blur-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400" />

        <div className="relative z-10">
          <h2 className="text-4xl font-bold leading-tight">
            Stop Fighting With PDFs
          </h2>

          <p className="mt-4 text-zinc-200 max-w-xl mx-auto">
            Merge, split, compress and convert PDFs instantly in your browser.
            No uploads. No limits. Completely open source.
          </p>

          <Link href="/tools">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-10 py-4 rounded-xl bg-black text-white font-semibold shadow-lg"
            >
              Try Tools Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
