import clsx from "clsx";
import React from "react";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative group flex gap-1 items-center px-1.5 py-0.5 bg-muted text-xs font-medium",
        className
      )}
    >
      <div className="absolute inset-0">
        <span className="block absolute bg-sky-500/50 h-px w-[calc(100%+8px)] top-0 left-1/2 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        <span className="block absolute bg-sky-500/50 w-px h-[calc(100%+8px)] right-0 top-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
        <span className="block absolute bg-sky-500/50 h-px w-[calc(100%+8px)] bottom-0 left-1/2 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        <span className="block absolute bg-sky-500/50 w-px h-[calc(100%+8px)] left-0 top-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
      </div>
      {children}
    </div>
  );
}
