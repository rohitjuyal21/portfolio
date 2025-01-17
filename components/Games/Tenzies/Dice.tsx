import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";

interface DiceProps {
  value: number;
  onClick: () => void;
  isSelected: boolean;
  isRolling: boolean;
}

export default function Dice({
  value,
  onClick,
  isSelected,
  isRolling,
}: DiceProps) {
  return (
    <motion.div
      onClick={onClick}
      className="size-16 sm:size-24 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer text-2xl sm:text-4xl text-black font-bold relative group z-10 overflow-hidden"
      style={{
        boxShadow:
          "inset 0 5px #e5e7eb, inset 0 -6px #bbb, inset 6px 0 #d7d7d7, inset -6px 0 #d7d7d7",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={
        isRolling && !isSelected ? { scale: 0.2, opacity: 0, rotate: 360 } : {}
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div
        className={clsx(
          "absolute inset-0  rounded-full bg-sky-500 transition duration-300 -z-10",
          isSelected ? "opacity-100 scale-150" : "opacity-0 scale-0 "
        )}
      ></div>
      {value}
    </motion.div>
  );
}
