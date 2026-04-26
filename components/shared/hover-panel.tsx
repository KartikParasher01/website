"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverPanelProps = {
  children: ReactNode;
  delay?: number;
};

export function HoverPanel({ children, delay = 0 }: HoverPanelProps) {
  return (
    <motion.div
      transition={{ duration: 0.28, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
}
