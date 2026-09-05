"use client";
import { WORK_EXPERIENCE } from "@/config/constants";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { CaretRight } from "@phosphor-icons/react";

export default function WorkExperience() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleActiveIndices = (index: number) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="space-y-2">
      <h4 className="font-semibold sm:text-lg">Work Experience</h4>
      <div className="flex relative">
        <div className="h-full w-0.5 bg-muted absolute rounded-full"></div>
        <div className="space-y-5">
          {WORK_EXPERIENCE.map((work, index) => (
            <div
              key={index}
              onClick={() => handleActiveIndices(index)}
              className="flex cursor-pointer group relative ml-4"
            >
              <div className="absolute w-2 h-2 bg-muted-foreground rounded-full top-0 -left-[19px]"></div>
              <div className="bg-white w-[44px] h-[44px] flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden border ">
                <Image
                  src={work.icon}
                  alt={work.company}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold flex gap-1 items-center">
                      {work.company}
                      <span
                        className={clsx(
                          activeIndices.includes(index) && "rotate-90",
                          "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300",
                        )}
                      >
                        <CaretRight
                          weight="bold"
                          className="size-2.5 sm:size-3"
                        />
                      </span>
                    </h5>
                    <p className="text-xs text-muted-foreground">{work.role}</p>
                  </div>
                  <div className="text-xs sm:text-sm mt-1 sm:mt-0">
                    {work.startDate} - {work.endDate}
                  </div>
                </div>
                <div
                  className={clsx(
                    activeIndices.includes(index)
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0",
                    "transition-all duration-500",
                  )}
                >
                  <p className="mt-2 text-xs text-muted-foreground">
                    {work.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
