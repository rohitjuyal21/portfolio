"use client";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";
import Face from "./Face";
import Link from "next/link";
import { IoGameControllerOutline } from "react-icons/io5";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-between items-center ">
      <Face />
      <div className="flex gap-4 items-center">
        <Link
          href="/play"
          className="flex gap-2 items-center text-sm pb-1 text-muted-foreground hover:text-foreground transition duration-300 hover:text relative overflow-hidden before:absolute before:h-px before:bottom-0 before:bg-gradient-to-r before:from-sky-500 before:to-transparent before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition-all before:duration-300"
        >
          <IoGameControllerOutline className="inline-block text-base" />
          Play
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl  relative rounded-full overflow-hidden before:absolute before:inset-0  before:bg-sky-500/70 before:scale-0 hover:before:scale-100 before:origin-top-right before:transition-transform before:duration-300 before:-z-10 after:absolute after:inset-0 after:bg-border after:-z-20"
        >
          <div className="p-2 bg-background rounded-full m-px">
            <RxSun className="hidden dark:block" />
            <RxMoon className=" block dark:hidden" />
          </div>
        </button>
      </div>
    </header>
  );
}
