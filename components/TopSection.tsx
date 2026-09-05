import { SOCIAL_LINKS } from "@/config/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function TopSection() {
  return (
    <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 sm:items-center">
      <div className="w-16 h-16 sm:w-[108px] sm:h-[108px] rounded-lg overflow-hidden">
        <Image
          src="/me.png"
          alt="me"
          width={200}
          height={200}
          className="object-cover w-full h-full scale-[1.4] translate-y-5 translate-x-0.5"
        />
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Hi, I&apos;m <span className="text-sky-500">Rohit</span>
        </h1>
        <p className="font-medium text-muted-foreground">
          Full-Stack Developer
        </p>
        <div className="pt-1 flex items-center gap-2">
          <Button asChild size="sm">
            <a href="/resume.pdf" download="Rohit-Resume.pdf">
              Resume
            </a>
          </Button>
          <ul className="flex flex-wrap">
            {SOCIAL_LINKS.map((link, index) => (
              <li key={index}>
                <Button
                  asChild
                  size="icon"
                  variant="ghost"
                  className="[&_svg]:size-5"
                >
                  <Link href={link.url} target="_blank">
                    <link.icon />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
