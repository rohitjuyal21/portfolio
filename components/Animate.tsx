"use client";
import { AnimatePresence, motion } from "framer-motion";

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Animate({ children, delay = 0 }: AnimateProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0, y: 10, filter: "blur(10px)" }}
        animate={{ height: "100%", opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
