import Animate from "@/components/Animate";
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
    <Animate>
      <div className="flex-1 flex flex-col items-center justify-center">
        {game === "tic-tac-toe" && <TicTacToe />}
        {game === "tenzies" && <Tenzies />}
      </div>
    </Animate>
  );
}
