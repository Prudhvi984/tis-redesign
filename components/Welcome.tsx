"use client";

import { motion } from "framer-motion";
import { gallery, welcome } from "@/lib/data";
import Img from "./Img";

export default function Welcome() {
  const loop = [...gallery, ...gallery];
  return (
    <section id="about" aria-labelledby="welcome-heading" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <h2 id="welcome-heading" className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
          {welcome.heading}
        </h2>
        <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/80">
          <p>{welcome.body}</p>
          <p>{welcome.join}</p>
          <p className="text-ink/60">{welcome.explore}</p>
        </div>
      </div>

      {/* Life at TIS: endless photo strip */}
      <div id="life" className="mt-16 overflow-hidden sm:mt-24" aria-label="Life at TIS">
        <div className="flex w-max animate-marquee-slow gap-4 hover:[animation-play-state:paused]">
          {loop.map((g, i) => (
            <motion.figure
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative shrink-0 overflow-hidden rounded-3xl bg-mist ${
                i % 2 ? "h-64 w-56 sm:h-80 sm:w-72" : "h-72 w-64 sm:h-96 sm:w-80"
              } self-end`}
              aria-hidden={i >= gallery.length}
            >
              <Img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
            </motion.figure>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-4xl px-4 text-center font-display text-2xl font-semibold leading-snug sm:px-6 sm:text-4xl">
        {welcome.established}
      </p>
    </section>
  );
}
