"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import Img from "./Img";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 60));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          solid && !open ? "bg-ink/95 backdrop-blur shadow-lg shadow-ink/20" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" aria-label={`${site.name} home`} className="rounded-xl bg-white px-3 py-1.5">
            <Img src={site.logo} alt={site.name} className="h-9 w-auto sm:h-11" loading="eager" />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${site.helpline}`}
              className="hidden text-sm font-semibold text-white/90 hover:text-marigold md:block"
            >
              Admissions helpline {site.helplineDisplay}
            </a>
            <a
              href={site.applyUrl}
              className="rounded-full bg-marigold px-4 py-2.5 text-sm font-bold text-ink transition hover:bg-white sm:px-6"
            >
              Apply now
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="relative z-50 flex h-11 items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink"
            >
              <span className="relative block h-3 w-5">
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
              </span>
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="site-menu"
            aria-label="Main"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 overflow-y-auto bg-ink px-6 pb-10 pt-28 text-white"
          >
            <ul className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2 sm:gap-x-12">
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.05, duration: 0.5 } }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/15 py-4 font-display text-3xl font-semibold transition-colors hover:text-marigold sm:text-4xl"
                  >
                    {item.label}
                    <span className="h-1 w-0 rounded-full bg-marigold transition-all group-hover:w-12" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-7xl text-white/70">
              Call us on{" "}
              <a className="font-semibold text-marigold" href={`tel:${site.helpline}`}>
                {site.helplineDisplay}
              </a>{" "}
              or write to{" "}
              <a className="font-semibold text-marigold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
