"use client";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex justify-end">
      <div>
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
