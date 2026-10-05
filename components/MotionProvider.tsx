"use client";

import { MotionConfig } from "framer-motion";

/** One switch for the whole app: transform/layout animations are skipped when the OS asks for reduced motion. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
