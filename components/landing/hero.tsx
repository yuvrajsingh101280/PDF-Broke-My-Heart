import { motion } from "framer-motion";
import GradientBackground from "../ui/gradient-background";
export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <GradientBackground />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold leading-tight max-w-3xl"
      >
        All Your PDF Tools In One Beautiful Place
      </motion.h1>

      <p className="text-zinc-400 mt-6 max-w-xl">
        Merge, split, compress and convert PDFs instantly. Fast, private and
        open source.
      </p>

      <button className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
        Start Using Tools
      </button>
    </section>
  );
};
