import { PROJECTS } from "@/config/constants";
import Image from "next/image";
import React from "react";
import Badge from "./ui/badge";
import CardBorder from "./ui/card-border";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">My Projects</h4>
      <ul className="grid grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <li key={index} className="relative bg-background/50">
            <CardBorder>
              <div className="border p-4 flex flex-col h-full space-y-2">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-xs flex-1 mb-4 mt-2 text-muted-foreground  hover:line-clamp-none transition-all duration-300 ">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((item, index) => (
                      <li key={index}>
                        <Badge>{item}</Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1 items-center text-xs font-medium relative before:absolute before:h-px before:w-full before:bottom-0 before:bg-gradient-to-r before:from-sky-500 before:to-transparent before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300"
                      >
                        <div className="border-b flex gap-1 items-center pb-0.5">
                          <SlGlobe /> Live
                        </div>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-1 items-center text-xs font-medium relative before:absolute before:h-px before:w-full before:bottom-0 before:bg-gradient-to-r before:from-sky-500 before:to-transparent before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300"
                      >
                        <div className="border-b flex gap-1 items-center pb-0.5">
                          <SiGithub /> Source
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </CardBorder>
          </li>
        ))}
      </ul>
    </div>
  );
}
