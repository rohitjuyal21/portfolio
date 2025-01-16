import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { motion } from "framer-motion";
const Guide = () => (
  <Popover.Root>
    <Popover.Trigger>
      <button
        className="text-xs rounded-full border px-4 py-1 hover:bg-muted/40"
        aria-label="Update dimensions"
      >
        How to play?
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content align="end" className="bg-background" sideOffset={5}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-[200px] bg-background shadow-md rounded-md border p-2 text-[10px] sm:text-xs"
        >
          Roll the dice until all of them show the same number. Click on a die
          to freeze it at its current value so it doesn&apos;t change in the
          next roll. Keep rolling and holding dice strategically to win the
          game. Have fun! 🎲
        </motion.div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default Guide;
