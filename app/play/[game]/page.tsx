import Animate from "@/components/Animate";
import RockPaperScissors from "@/components/Games/RockPaperScissors/RockPaperScissors";
import Tenzies from "@/components/Games/Tenzies/Tenzies";
import TicTacToe from "@/components/Games/TicTacToe/TicTacToe";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ game: string }>;
}) {
  const { game } = await params;

  return (
    <Animate classname="w-full">
      <div className="flex-1 flex flex-col items-center justify-center">
        {game === "tic-tac-toe" && <TicTacToe />}
        {game === "tenzies" && <Tenzies />}
        {game === "rock-paper-scissors" && <RockPaperScissors />}
      </div>
    </Animate>
  );
}
