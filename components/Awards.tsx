"use client";

import { motion } from "framer-motion";
import { awards, tour } from "@/lib/data";
import Img from "./Img";

export default function Awards() {
  return (
    <section aria-labelledby="awards-heading" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="awards-heading" className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">{awards.heading}</h2>
            <p className="mt-3 max-w-md text-lg text-ink/75">{awards.sub}</p>
          </div>
          <a
            href="https://tis.edu.in/"
            className="rounded-full border-2 border-ink px-6 py-3 font-bold transition hover:bg-ink hover:text-white"
          >
            {awards.cta}
          </a>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {awards.images.map((src, i) => (
            <motion.li
              key={src}
              initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0 : i ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="overflow-hidden rounded-3xl bg-white p-3 shadow-lg shadow-ink/10"
            >
              <Img src={src} alt="TIS award" className="w-full rounded-2xl object-cover" />
            </motion.li>
          ))}
        </ul>

        <a
          href={tour.href}
          className="group relative mt-16 flex min-h-72 items-center overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:mt-24 sm:min-h-96 sm:p-14"
        >
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -right-16 top-1/2 w-[22rem] -translate-y-1/2 opacity-90 sm:right-8 sm:w-[28rem]"
          >
            <Img src={tour.img} alt="" className="w-full" />
          </motion.div>
          <div className="relative">
            <p className="font-semibold text-marigold">{tour.kicker}</p>
            <p className="mt-2 font-display text-5xl font-extrabold leading-none sm:text-8xl">{tour.heading}</p>
            <span className="mt-8 inline-flex rounded-full bg-marigold px-6 py-3 font-bold text-ink transition group-hover:bg-white">
              Take the virtual tour
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
