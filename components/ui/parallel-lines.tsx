import clsx from "clsx";
import React from "react";

interface ParallelLinesProps {
  className?: string;
  children: React.ReactNode;
}

export default function ParallelLines({
  className,
  children,
}: ParallelLinesProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden before:absolute before:h-px before:top-0 before:bg-gradient-to-r before:from-sky-500 before:to-transparent before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition-all before:duration-300 after:absolute after:h-px after:bottom-0 after:bg-gradient-to-l after:from-sky-500  after:to-transparent after:w-full after:translate-x-full hover:after:translate-x-0 after:transition-all after:duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
