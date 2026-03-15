"use client";

import { motion } from "framer-motion";

export default function Demo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h2 className="text-4xl font-bold">See It In Action</h2>

      <p className="text-zinc-400 mt-4">
        Drag and drop your file and let the magic happen.
      </p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-12 border border-white/10 rounded-3xl p-16 bg-white/5 backdrop-blur-xl"
      >
        <p className="text-zinc-400">Drag & Drop your PDF here</p>
      </motion.div>
    </section>
  );
}
