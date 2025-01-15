import React from "react";
import { motion } from "framer-motion";
export default function BoardLines() {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-1 h-full absolute left-1/3 bg-muted"
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-1 h-full absolute right-1/3 bg-muted"
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="w-full h-1 absolute top-1/3 bg-muted"
      ></motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="w-full h-1 absolute bottom-1/3 bg-muted"
      ></motion.div>
    </>
  );
}
