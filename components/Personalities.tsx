"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { leaders, personalities } from "@/lib/data";
import { CarouselControls, useCarousel } from "./Carousel";
import Img from "./Img";

const INITIAL_LEADERS = 6;
const hoverOnly = "[@media(hover:hover)]"; // touch tablets keep the text visible below the photo

export default function Personalities() {
  const { ref, scrollBy } = useCarousel<HTMLDivElement>();
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? leaders.people : leaders.people.slice(0, INITIAL_LEADERS);

  return (
    <section aria-labelledby="personalities-heading" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-4 sm:px-6">
        <div>
          <h2
            id="personalities-heading"
            className="max-w-2xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl"
          >
            {personalities.heading}
          </h2>
          <p className="mt-4 text-lg text-ink/70">{personalities.sub}</p>
        </div>
        <CarouselControls label="personality" onScroll={scrollBy} tone="onLight" />
      </div>

      <div
        ref={ref}
        role="region"
        aria-label="Influential personalities"
        tabIndex={0}
        className="no-scrollbar mt-10 snap-x snap-mandatory overflow-x-auto pb-4"
      >
        <ul className="flex w-max gap-4 px-4 sm:gap-6 sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {personalities.people.map((p) => (
            <li key={p.name} className="group w-[78vw] max-w-sm shrink-0 snap-start sm:w-80">
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist">
                  <Img
                    src={p.img}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption
                    className={`absolute inset-x-0 bottom-0 hidden translate-y-full bg-ink/95 p-4 text-sm leading-snug text-white transition-transform duration-500 ${hoverOnly}:block ${hoverOnly}:group-hover:translate-y-0 ${hoverOnly}:group-focus-within:translate-y-0`}
                  >
                    {p.role}
                  </figcaption>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{p.name}</h3>
                <p className={`mt-1 text-sm leading-snug text-ink/65 ${hoverOnly}:hidden`}>({p.role})</p>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:mt-28 sm:px-6">
        <div className="rounded-[2rem] bg-ridge p-6 text-white sm:p-12">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{leaders.heading}</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {shown.map((l) => (
                <motion.li
                  key={l.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border-t border-white/25 pt-3"
                >
                  <p className="font-display text-lg font-bold">{l.name}</p>
                  <p className="text-sm leading-snug text-white/75">({l.role})</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="mt-8 rounded-full bg-marigold px-6 py-3 font-bold text-ink transition-colors hover:bg-white"
          >
            {showAll ? "Show fewer leaders" : `Show all ${leaders.people.length} leaders`}
          </button>
        </div>
      </div>
    </section>
  );
}
