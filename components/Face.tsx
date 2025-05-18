"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Face() {
  const faceRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const rect = faceRef.current?.getBoundingClientRect();

      if (rect) {
        const anchorX = rect?.left + rect?.width / 2;
        const anchorY = rect?.top + rect?.height / 2;

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

        eyeRef.current.forEach((eye) => {
          if (eye) eye.style.transform = `rotate(${angleDeg}deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  const angle = (x1: number, y1: number, x2: number, y2: number) => {
    return (Math.atan2(y1 - y2, x1 - x2) * 180) / Math.PI;
  };

  return (
    <div
      ref={faceRef}
      className="relative flex justify-center items-center h-10 w-10 bg-yellow-400 rounded-full before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1.5 before:w-5 before:h-2.5 before:rounded-b-full before:bg-yellow-950/60 before:transition-all before:duration-300 hover:before:h-0.5 hover:before:rounded-b-none hover:before:bottom-2.5 group overflow-hidden"
    >
      <div className="flex gap-1 -mt-3.5 group-hover:opacity-0">
        <div
          ref={(el) => {
            if (el) eyeRef.current[0] = el;
          }}
          className="w-3 h-3 bg-white rounded-full relative before:absolute before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:right-0 before:top-1/2 before:-translate-y-1/2"
        ></div>
        <div
          ref={(el) => {
            if (el) eyeRef.current[1] = el;
          }}
          className="w-3 h-3 bg-white rounded-full relative before:absolute before:w-1.5 before:h-1.5 before:bg-black before:rounded-full before:right-0 before:top-1/2 before:-translate-y-1/2"
        ></div>
      </div>
      <div className="absolute group-hover:top-1 -top-4 transition-all duration-300">
        <Image src="/thug.png" alt="thug" width={100} height={100} />
      </div>
    </div>
  );
}

export default Face;
