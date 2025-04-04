"use client";

import React, { useEffect, useState } from "react";

interface Choice {
  name: string;
  icon: string;
  beats: string;
}

const choices = [
  {
    name: "rock",
    icon: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    icon: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    icon: "✌️",
    beats: "paper",
  },
];

export default function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [winner, setWinner] = useState<"USER" | "COMP" | "DRAW" | null>(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleUserChoice = (choice: Choice) => {
    if (isPlaying) return;
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);
  };

  useEffect(() => {
    if (userChoice && computerChoice) {
      setIsPlaying(true);

      setTimeout(() => {
        if (userChoice.beats === computerChoice.name) {
          setWinner("USER");
          setUserScore((prevScore) => prevScore + 1);
        } else if (computerChoice.beats === userChoice.name) {
          setWinner("COMP");
          setComputerScore((prevScore) => prevScore + 1);
        } else {
          setWinner("DRAW");
        }
        setIsPlaying(false);
      }, 1500);
    }
  }, [userChoice, computerChoice]);

  return (
    <div className="font-pressStart w-full">
      <h1 className="text-3xl sm:text-4xl font-bold mb-20 text-center">
        {!isPlaying && winner
          ? winner === "USER"
            ? "You Win!"
            : winner === "COMP"
            ? "You Lose!"
            : winner === "DRAW"
            ? "It's a Draw!"
            : ""
          : ""}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-xl mb-4 font-bold">You</h2>
            <h4 className="font-semibold">Score: {userScore}</h4>
          </div>
          <div className="text-7xl sm:text-8xl rotate-90  scale-x-[-1] group">
            {isPlaying ? (
              <div className="animate-shake">✊</div>
            ) : (
              <div>{userChoice ? userChoice.icon : "✊"}</div>
            )}
          </div>
        </div>
        <div className="text-center">
          <div className="mb-12">
            <h2 className="text-xl mb-4">Comp</h2>
            <h4 className="font-semibold">Score: {computerScore}</h4>
          </div>
          <div className="text-7xl sm:text-8xl -rotate-90">
            {isPlaying ? (
              <div className="animate-shake">✊</div>
            ) : computerChoice ? (
              computerChoice.icon
            ) : (
              "✊"
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 mt-20 justify-center">
        {choices.map((choice) => (
          <div
            key={choice.name}
            onClick={() => handleUserChoice(choice)}
            className="bg-muted flex items-center justify-center rounded-full text-4xl sm:text-5xl size-20 sm:size-24 cursor-pointer relative  before:absolute before:-inset-1.5 before:bg-sky-500/50 before:rounded-full before:scale-0 before:-z-10 hover:before:scale-100 before:transition-all before:duration-300"
          >
            {choice.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
