import { PROJECTS } from "@/config/constants";
import Image from "next/image";
import React from "react";
import Badge from "./ui/badge";
import CardBorder from "./ui/card-border";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">My Projects</h4>
      <ul className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <li key={index} className="relative bg-background/50">
            <CardBorder>
              <div className="border p-4 flex flex-col h-full space-y-2">
                <div className="h-12 w-12 relative rounded-full overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-xs flex-1 mb-2 sm:mb-4 mt-1 sm:mt-2 text-muted-foreground  hover:line-clamp-none transition-all duration-300 ">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((item, index) => (
                      <li key={index}>
                        <Badge className="text-[10px]">{item}</Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-4">
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-5 overflow-hidden group bg-foreground text-background relative"
                      >
                        <span className="flex gap-1 px-1.5 py-0.5  justify-center items-center text-[10px] font-medium absolute inset-0 translate-x-0 group-hover:translate-x-full transition-all duration-300">
                          <SlGlobe size={12} /> Live
                        </span>
                        <span className="flex gap-1 px-1.5 py-0.5  justify-center items-center text-[10px] font-medium absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-all duration-300">
                          <FiExternalLink size={12} />
                        </span>
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-5 overflow-hidden group bg-foreground text-background relative"
                      >
                        <span className="flex gap-1 px-1.5 justify-center items-center text-[10px] font-medium absolute inset-0 translate-x-0 group-hover:translate-x-full transition-all duration-300">
                          <SiGithub size={12} /> Source
                        </span>
                        <span className="flex gap-1 px-1.5 justify-center items-center text-[10px] font-medium absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-all duration-300">
                          <FiExternalLink size={12} />
                        </span>
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
