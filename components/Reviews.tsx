"use client";

import { collabs, parents, reviews } from "@/lib/data";
import { CarouselControls, useCarousel } from "./Carousel";
import Img from "./Img";

export default function Reviews() {
  const { ref, scrollBy } = useCarousel<HTMLDivElement>();

  return (
    <section aria-labelledby="parents-heading" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 id="parents-heading" className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
          {parents.heading}
        </h2>
        <blockquote className="mt-8 max-w-4xl font-display text-2xl font-semibold leading-snug sm:text-4xl">
          <span aria-hidden className="mr-2 text-6xl leading-none text-marigold sm:text-8xl">“</span>
          {parents.quote}
        </blockquote>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {parents.videos.map((src, i) => (
            <li key={src} className="overflow-hidden rounded-3xl bg-ink">
              <video
                src={src}
                controls
                preload="none"
                playsInline
                aria-label={`Parent video ${i + 1}`}
                className="aspect-video w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>

      <div aria-labelledby="google-reviews-heading" role="region" className="mt-20 bg-ink py-16 text-white sm:mt-28 sm:py-24">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-4 sm:px-6">
          <h3 id="google-reviews-heading" className="font-display text-3xl font-extrabold sm:text-5xl">
            Google Reviews
          </h3>
          <CarouselControls label="review" onScroll={scrollBy} tone="onDark" />
        </div>
        <div
          ref={ref}
          role="region"
          aria-label="Google reviews"
          tabIndex={0}
          className="no-scrollbar mt-10 snap-x snap-mandatory overflow-x-auto pb-2"
        >
          <ul className="flex w-max gap-4 px-4 sm:gap-6 sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            {reviews.map((r) => (
              <li
                key={r.name}
                className="flex w-[85vw] max-w-sm shrink-0 snap-start flex-col justify-between rounded-3xl bg-white p-6 text-ink transition-transform duration-300 hover:-translate-y-1.5 sm:w-96"
              >
                <blockquote className="text-base leading-relaxed">{r.text}</blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <Img src={r.img} alt="" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-display font-bold">{r.name}</p>
                    <p className="text-sm text-ink/60">{r.rel}</p>
                  </div>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:mt-28 sm:px-6">
        <h3 className="font-display text-5xl font-extrabold sm:text-7xl">
          {collabs.count}+ <span className="text-ridge">{collabs.label}</span>
        </h3>
        <ul className="mt-10 grid grid-cols-3 items-center gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {collabs.logos.map((src) => (
            <li key={src} className="flex h-24 items-center justify-center rounded-2xl bg-white p-3">
              <Img
                src={src}
                alt="Collaboration partner logo"
                className="max-h-full max-w-full object-contain grayscale transition hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
