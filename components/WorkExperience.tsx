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
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">Work Experience</h4>
      <ul className="space-y-2">
        {WORK_EXPERIENCE.map((work, index) => (
          <li
            key={index}
            onClick={() => handleActiveIndices(index)}
            className="flex cursor-pointer group relative p-4 bg-muted/50"
          >
            <div className="absolute inset-0">
              <span className="absolute left-0 top-0 h-px w-full bg-sky-500/50 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300"></span>
              <span className="absolute top-0 right-0 w-px h-full bg-sky-500/50 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 delay-300"></span>
              <span className="absolute right-0 bottom-0 h-px w-full bg-sky-500/50 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              <span className="absolute bottom-0 left-0 w-px h-full bg-sky-500/70 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 delay-300"></span>
            </div>

            <div className="bg-white w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-md overflow-hidden border ">
              <Image
                src={work.icon}
                alt={work.company}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="ml-2 sm:ml-4 flex-1 overflow-hidden">
              <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center">
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold flex gap-1 items-center">
                    {work.company}
                    <span
                      className={clsx(
                        activeIndices.includes(index) && "rotate-90",
                        "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
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
                  "transition-all duration-500"
                )}
              >
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                  {work.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
