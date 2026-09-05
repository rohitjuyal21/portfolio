import { PROJECTS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { Badge } from "./ui/badge";
import { GithubIcon } from "lucide-react";

export default function Projects() {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">My Projects</h4>
      <ul className="grid sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <li key={index} className="relative">
            <div className="border rounded-xl bg-muted/40 p-4 flex flex-col h-full space-y-2">
              <div className="h-12 w-12 relative rounded-full overflow-hidden">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  sizes="100%"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{project.name}</h4>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-muted-foreground"
                      >
                        <GithubIcon size={16} />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-muted-foreground"
                      >
                        <SlGlobe />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-xs flex-1 mb-2 sm:mb-4 mt-1 sm:mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1 mt-auto">
                  {project.tech.map((item, index) => (
                    <li key={index}>
                      <Badge
                        variant="secondary"
                        className="font-medium text-[10px] px-2"
                      >
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
