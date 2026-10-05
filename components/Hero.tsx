"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, rankings, site } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskedLine({ text, delay }: { text: string; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const sunY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const backY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const still = { y: 0 };

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-b from-ink via-[#17356b] to-[#2f5a9e] text-white"
    >
      {/* Sun rises behind the ridges on load */}
      <motion.div style={reduce ? still : { y: sunY }} className="pointer-events-none absolute inset-x-0 bottom-0 top-0 -z-10">
        <motion.div
          initial={reduce ? false : { y: 260, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.2, ease, delay: 0.2 }}
          className="absolute bottom-[26%] left-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 rounded-full bg-marigold sm:bottom-[22%] lg:left-[68%]"
          style={{ boxShadow: "0 0 160px 60px rgba(246,184,0,.35)" }}
        />
      </motion.div>

      {/* Ridge layers */}
      <motion.svg
        aria-hidden
        style={reduce ? still : { y: backY }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[52%] w-full will-change-transform"
      >
        <path fill="#3e68ab" opacity=".55" d="M0 230 L110 170 L230 225 L370 110 L510 205 L650 90 L790 200 L930 130 L1070 215 L1210 105 L1340 190 L1440 150 L1440 400 L0 400Z" />
      </motion.svg>
      <motion.svg
        aria-hidden
        style={reduce ? still : { y: midY }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[40%] w-full will-change-transform"
      >
        <path fill="#1d3f7c" d="M0 280 L160 210 L300 270 L460 170 L620 260 L780 160 L940 270 L1100 200 L1260 280 L1440 210 L1440 400 L0 400Z" />
      </motion.svg>
      <motion.svg
        aria-hidden
        style={reduce ? still : { y: frontY }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-px left-0 -z-10 h-[26%] w-full"
      >
        <path fill="#1C4A3B" d="M0 300 Q180 230 360 285 T720 270 T1080 290 T1440 255 L1440 400 L0 400Z" />
      </motion.svg>

      <motion.div
        style={reduce ? still : { y: textY }}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-40 pt-32 sm:px-6 lg:pb-52"
      >
        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-[clamp(3.4rem,12.5vw,10.5rem)]">
          <span className="sr-only">{hero.title}. </span>
          <span aria-hidden>
            <MaskedLine text={hero.tagline[0]} delay={0.35} />
            <MaskedLine text={hero.tagline[1]} delay={0.5} />
          </span>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.1 }}
          className="mt-8 max-w-xl"
        >
          <p className="font-display text-xl font-semibold sm:text-2xl">{hero.title}</p>
          <p className="mt-3 text-lg text-white/85">{hero.lead}</p>
          <p className="mt-2 text-white/75">{hero.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={site.applyUrl}
              className="rounded-full bg-marigold px-7 py-3.5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              Apply now
            </a>
            <a
              href="#enquire"
              className="rounded-full border border-white/50 px-7 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              Enquire now
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Ranking badge, sits on the ridge line */}
      <motion.a
        href="#rankings"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 1.5 }}
        className="absolute bottom-6 left-4 right-4 z-10 mx-auto flex max-w-7xl items-center gap-4 rounded-2xl bg-white/95 p-3 text-ink shadow-xl sm:left-6 sm:right-auto sm:max-w-md sm:p-4"
      >
        <span className="font-display text-4xl font-extrabold text-ridge sm:text-5xl">{rankings[0].rank}</span>
        <span className="text-sm font-semibold leading-snug sm:text-base">{rankings[0].what}</span>
      </motion.a>
    </section>
  );
}
