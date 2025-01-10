import React from "react";

export default function CardBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <span className="absolute top-0 h-px w-full bg-gradient-to-r from-sky-500/50 to-sky-500/0 left-0"></span>
      <span className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-sky-500/50 to-sky-500/0"></span>
      <span className="absolute bottom-0 h-px w-full bg-gradient-to-r  from-sky-500/0 to-sky-500/50 left-0"></span>
      <span className="absolute top-0 right-0 h-full w-px bg-gradient-to-b  from-sky-500/0 to-sky-500/50"></span>

      {children}
    </div>
  );
}
