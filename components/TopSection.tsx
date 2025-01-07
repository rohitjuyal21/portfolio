import Image from "next/image";
import React from "react";

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
        <h1 className="text-3xl sm:text-5xl font-bold">Hi, I&apos;m Rohit</h1>
        <p className="sm:text-xl font-bold text-muted-foreground">
          I&apos;m a Web Developer
        </p>
      </div>
    </div>
  );
}
