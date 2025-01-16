"use client";
import React, { useEffect, useState } from "react";
import Dice from "./Dice";
import { AnimatePresence, motion } from "framer-motion";
import Guide from "./Guide";
import WinDialog from "./WinDialog";

export default function Tenzies() {
  const [dice, setDice] = useState(generateNewDice());
  const [rollsCount, setRollsCount] = useState(0);
  const [tenzies, setTenzies] = useState(false);
  const [isWinDialogOpen, setIsWinDialogOpen] = useState(false);

  function generateNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isSelected: false,
        id: i,
      });
    }
    return newDice;
  }

  const handleSelectDice = (id: number) => {
    setDice((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isSelected: !dice.isSelected } : dice
      )
    );
  };

  const handleRollDice = () => {
    if (tenzies) {
      setDice(generateNewDice());
      setRollsCount(0);
      setTenzies(false);
    } else {
      setDice((prevDice) =>
        prevDice.map((dice) =>
          dice.isSelected
            ? dice
            : { ...dice, value: Math.ceil(Math.random() * 6) }
        )
      );
      setRollsCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    const allSelected = dice.every((dice) => dice.isSelected);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((dice) => dice.value === firstValue);

    if (allSelected && allSameValue) {
      if (
        !localStorage.getItem("tenziesBestScore") ||
        rollsCount < parseInt(localStorage.getItem("tenziesBestScore") || "0")
      ) {
        localStorage.setItem("tenziesBestScore", rollsCount.toString());
      }
      setIsWinDialogOpen(true);
      setTenzies(true);
    }
  }, [dice, rollsCount, tenzies]);

  const handleRestartGame = () => {
    setDice(generateNewDice());
    setRollsCount(0);
    setTenzies(false);
    setIsWinDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-xl font-bold flex gap-1">
          Rolls Count:{" "}
          <span className="inline-block relative">
            <AnimatePresence mode="sync">
              <motion.span
                key={rollsCount}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                {rollsCount}
              </motion.span>
            </AnimatePresence>
          </span>
        </h4>
        <Guide />
      </div>
      <div className="grid grid-cols-5 gap-2 sm:gap-4">
        {dice.map((dice) => (
          <Dice
            key={dice.id}
            value={dice.value}
            onClick={() => {
              handleSelectDice(dice.id);
            }}
            isSelected={dice.isSelected}
          />
        ))}
      </div>
      <div className="p-[1.5px] relative overflow-hidden before:absolute before:-inset-8 before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-sky-600 before:to-transparent before:to-90% before:-z-10 before:animate-rotate before:opacity-0 hover:before:opacity-100 rounded-md group active:scale-95">
        <button
          onClick={() => handleRollDice()}
          className="bg-primary text-background py-2 sm:py-3 px-4 sm:px-6 rounded-md font-medium flex items-center justify-center sm:text-lg hover:shadow-md"
        >
          Roll Dice
        </button>
      </div>
      <WinDialog
        score={rollsCount}
        isOpen={isWinDialogOpen}
        onClose={() => setIsWinDialogOpen(false)}
        onRestart={handleRestartGame}
      />
    </div>
  );
}
