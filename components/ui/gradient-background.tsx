import React from "react";
import { motion } from "framer-motion";
const GradientBackground = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -120, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[150px] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 150, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-pink-500/30 blur-[150px] rounded-full"
        />
      </div>
    </>
  );
};

export default GradientBackground;
