"use client";

import { motion } from "framer-motion";
import { secret, voices } from "@/lib/data";
import Img from "./Img";

export default function Voices() {
  return (
    <section id="voices" aria-label="Voices from students and parents" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl space-y-20 px-4 sm:space-y-28 sm:px-6">
        {voices.map((v, i) => (
          <article
            key={v.quote}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-ridge/20 lg:aspect-square"
            >
              <Img src={v.img} alt="TIS student" className="h-full w-full object-cover object-top" />
            </motion.div>
            <div>
              <blockquote className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
                “{v.quote}”
              </blockquote>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">{v.body}</p>
            </div>
          </article>
        ))}

        <article className="grid items-center gap-8 rounded-[2rem] bg-ink p-6 text-white sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">{secret.heading}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{secret.body}</p>
            <motion.p
              initial={{ opacity: 0, rotate: -3, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="mt-8 inline-block rounded-full bg-marigold px-6 py-3 font-display text-2xl font-extrabold text-ink"
            >
              {secret.punch}
            </motion.p>
          </div>
          <Img src={secret.img} alt="Students having fun at TIS" className="w-full rounded-3xl object-cover" />
        </article>
      </div>
    </section>
  );
}
