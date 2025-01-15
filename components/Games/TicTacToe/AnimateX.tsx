import React from "react";
import { motion } from "framer-motion";

export default function AnimateX() {
  return (
    <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center relative">
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="absolute w-full h-1 sm:h-2 bg-blue-500"
      ></motion.div>
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: -45 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="absolute w-full h-1 sm:h-2 bg-blue-500"
      ></motion.div>
    </div>
  );
}
