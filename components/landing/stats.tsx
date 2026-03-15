"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 120000,
    label: "PDFs Processed",
  },
  {
    value: 5000,
    label: "Developers Using",
  },
  {
    value: 30,
    label: "Tools Planned",
  },
  {
    value: 100,
    label: "Open Source",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:bg-white/10 transition"
          >
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              <CountUp end={stat.value} duration={2} />

              {stat.label === "Open Source" ? "%" : "+"}
            </h3>

            <p className="mt-3 text-zinc-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
