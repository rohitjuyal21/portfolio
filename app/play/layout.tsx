import Animate from "@/components/Animate";
import Header from "@/components/Header";
import React from "react";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 sm:space-y-8 flex flex-col flex-1">
      <Animate>
        <Header />
      </Animate>
      <div className="flex-1 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
