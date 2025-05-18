import { motion } from "framer-motion";

export default function TypingDots() {
  const pulseTransition = {
    duration: 0.6,
    repeat: Infinity,
    repeatType: "loop" as const,
    ease: "easeInOut",
  };

  return (
    <div className="flex space-x-1.5 h-2 items-center">
      <motion.div
        className="w-2 h-2 bg-foreground/50 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ ...pulseTransition, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-foreground/50 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ ...pulseTransition, delay: 0.4 }}
      />
      <motion.div
        className="w-2 h-2 bg-foreground/50 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ ...pulseTransition, delay: 0.8 }}
      />
    </div>
  );
}
