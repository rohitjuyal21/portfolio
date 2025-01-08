import { SKILLS } from "@/config/constants";
import React from "react";

export default function Skills() {
  return (
    <div className="space-y-1">
      <h4 className="font-semibold text-lg">Skills</h4>
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="relative group flex gap-1 items-center px-1.5 py-0.5 bg-foreground text-background"
          >
            <div className="absolute inset-0">
              <span className="block absolute bg-blue-500 h-px w-[calc(100%+8px)] top-0 left-1/2 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="block absolute bg-blue-500 w-px h-[calc(100%+8px)] right-0 top-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
              <span className="block absolute bg-blue-500 h-px w-[calc(100%+8px)] bottom-0 left-1/2 -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="block absolute bg-blue-500 w-px h-[calc(100%+8px)] left-0 top-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
            </div>
            <div>
              <Icon size={12} />
            </div>
            <span className="text-xs font-medium">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
