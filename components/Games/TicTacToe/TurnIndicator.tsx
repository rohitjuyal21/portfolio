import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TurnIndicator({ turn }: { turn: "X" | "O" }) {
  return (
    <div className="text-3xl font-bold flex gap-2 overflow-hidden">
      <AnimatePresence mode="wait">
        {turn === "X" ? (
          <motion.span
            key="your-turn"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: -40, transition: { duration: 0.3, delay: 0.3 } }}
            transition={{ duration: 0.3 }}
            className="text-blue-600"
          >
            Your
          </motion.span>
        ) : (
          <motion.span
            key="computer-turn"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: -40, transition: { duration: 0.3, delay: 0.3 } }}
            transition={{ duration: 0.3 }}
            className="text-red-600"
          >
            Computer&apos;s
          </motion.span>
        )}
      </AnimatePresence>{" "}
      Turn
    </div>
  );
}
