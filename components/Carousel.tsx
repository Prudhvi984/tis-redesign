"use client";

import { useCallback, useRef } from "react";

/** Ref + imperative paging for a native scroll-snap track (no JS layout work per frame). */
export function useCarousel<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
  }, []);
  return { ref, scrollBy };
}

const tones = {
  onLight: "border-ink/25 hover:bg-ink hover:text-white",
  onDark: "border-white/40 hover:bg-marigold hover:text-ink",
} as const;

export function CarouselControls({
  label,
  onScroll,
  tone,
}: {
  label: string;
  onScroll: (dir: 1 | -1) => void;
  tone: keyof typeof tones;
}) {
  return (
    <div className="flex gap-2">
      {([-1, 1] as const).map((dir) => (
        <button
          key={dir}
          type="button"
          onClick={() => onScroll(dir)}
          aria-label={`${dir === 1 ? "Next" : "Previous"} ${label}`}
          className={`flex h-12 w-12 items-center justify-center rounded-full border text-xl transition-colors ${tones[tone]}`}
        >
          <span aria-hidden>{dir === 1 ? "›" : "‹"}</span>
        </button>
      ))}
    </div>
  );
}
