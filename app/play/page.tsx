import Animate from "@/components/Animate";
import Gaming from "@/components/Gaming";

import React from "react";

export default function page() {
  return (
    <div className="flex flex-1 flex-col items-start justify-start w-full">
      <Animate>
        <Gaming />
      </Animate>
    </div>
  );
}
