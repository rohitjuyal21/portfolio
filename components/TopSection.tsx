import { SOCIAL_LINKS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ParallelLines from "./ui/parallel-lines";

export default function TopSection() {
  return (
    <div className="flex gap-6 items-center">
      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden">
        <Image
          src="/me.png"
          alt="me"
          width={200}
          height={200}
          className="object-cover w-full h-full scale-125 translate-y-2.5 translate-x-0.5"
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Hi, I&apos;m <span className="text-sky-500">Rohit</span>
        </h1>
        <p className="sm:text-xl font-bold text-muted-foreground">
          I&apos;m a Frontend Developer
        </p>
        <ul className="flex gap-2 flex-wrap pt-2">
          {SOCIAL_LINKS.map((link, index) => (
            <li key={index}>
              <Link href={link.url} target="_blank">
                <ParallelLines>
                  <div className="flex gap-1 items-center p-1">
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={16}
                      height={16}
                    />
                    <span className="font-medium text-sm">{link.name}</span>
                  </div>
                </ParallelLines>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
