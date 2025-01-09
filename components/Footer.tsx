import { FOOTER_NAV } from "@/config/constants";
import Link from "next/link";
import React from "react";
import { BiCopyright } from "react-icons/bi";

function Footer() {
  return (
    <footer className="flex justify-between items-center pt-16">
      <Link
        href="/"
        className="text-sm flex gap-1 items-center font-medium text-muted-foreground"
      >
        <BiCopyright />
        Rohit
      </Link>
      <div className="flex gap-3">
        {FOOTER_NAV.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="text-lg font-medium text-muted-foreground"
          >
            <link.icon />
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
