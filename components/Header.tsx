"use client";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";
import Face from "./Face";
import Link from "next/link";
// import { IoGameControllerOutline } from "react-icons/io5";
// import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  // const pathname = usePathname();

  return (
    <header className="flex justify-between items-center ">
      <Link href="/">
        <Face />
      </Link>
      <div className="flex gap-4 items">
        {/* {pathname === "/" && (
          <Link
            href="/play"
            className="flex gap-2 items-center text-sm pb-1 text-muted-foreground hover:text-foreground transition duration-300 hover:text relative overflow-hidden before:absolute before:h-px before:bottom-0 before:bg-gradient-to-r before:from-sky-500 before:to-transparent before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition-all before:duration-300"
          >
            <IoGameControllerOutline className="text-base" />
            Play
          </Link>
        )} */}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <RxSun className="hidden dark:block" />
          <RxMoon className=" block dark:hidden" />
        </Button>
      </div>
    </header>
  );
}
