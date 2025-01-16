import clsx from "clsx";
import React from "react";

interface DiceProps {
  value: number;
  onClick: () => void;
  isSelected: boolean;
}

export default function Dice({ value, onClick, isSelected }: DiceProps) {
  return (
    <div
      onClick={onClick}
      className="size-16 sm:size-24 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer text-2xl sm:text-4xl text-black font-bold relative group z-10 overflow-hidden"
      style={{
        boxShadow:
          "inset 0 5px #e5e7eb, inset 0 -6px #bbb, inset 6px 0 #d7d7d7, inset -6px 0 #d7d7d7",
      }}
    >
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div
        className={clsx(
          "absolute inset-0  rounded-full bg-sky-500 transition duration-300 -z-10",
          isSelected ? "opacity-100 scale-150" : "opacity-0 scale-0 "
        )}
      ></div>
      {value}
    </div>
  );
}
