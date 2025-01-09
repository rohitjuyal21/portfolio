import { SKILLS } from "@/config/constants";
import React from "react";
import Badge from "./ui/badge";

export default function Skills() {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">Skills</h4>
      <ul className="flex flex-wrap gap-2">
        {SKILLS.map(({ name, icon: Icon }) => (
          <li key={name}>
            <Badge>
              <div>
                <Icon size={12} />
              </div>
              <span className="text-xs font-medium">{name}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
