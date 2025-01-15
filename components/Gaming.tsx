import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Gaming() {
  return (
    <div className="space-y-4 sm:space-y-8 flex flex-col flex-1 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Choose a game and have fun!
      </h1>
      <div className="flex flex-wrap gap-4">
        <Link href="/play/tic-tac-toe" className="group">
          <div className="flex flex-col gap-2 p-[1.5px] items-center relative overflow-hidden before:absolute before:-inset-8 before:-z-10 before:bg-[conic-gradient(var(--tw-gradient-stops))] before:from-sky-500 before:to-transparent before:to-20%  group-hover:before:animate-rotate before:opacity-0 group-hover:before:opacity-100">
            <div className="p-3 bg-background flex flex-col items-center justify-center gap-2 z-10 relative border before:absolute before:inset-0 before:bg-muted/30">
              <Image
                src="/games/tic-tac-toe.png"
                alt="Tic Tac Toe"
                width={56}
                height={56}
              />
              <p className="text-xs text-center">Tic Tac Toe</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="text-sm text-muted-foreground flex-1 text-center flex items-center justify-center">
        Will try to add more games...
      </div>
    </div>
  );
}
