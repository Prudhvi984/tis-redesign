"use client";

import { motion } from "framer-motion";
import { sports, sportsCopy } from "@/lib/data";
import Img from "./Img";

export default function Sports() {
  return (
    <section id="sports" aria-labelledby="sports-heading" className="bg-marigold py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <h2 id="sports-heading" className="font-display text-7xl font-extrabold leading-none tracking-tight text-ink sm:text-9xl">
            {sportsCopy.heading}
          </h2>
          <div className="max-w-md text-ink">
            <p className="font-display text-2xl font-bold leading-snug">{sportsCopy.line1}</p>
            <p className="mt-2 text-lg font-medium">{sportsCopy.line2}</p>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {sports.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1.5 : -1.5 }}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-3xl bg-white p-4 text-center shadow-sm"
            >
              <Img src={s.img} alt="" className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
              <span className="font-display text-lg font-bold">{s.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
