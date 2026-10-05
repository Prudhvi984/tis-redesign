import { stats } from "@/lib/data";
import CountUp from "./CountUp";
import Img from "./Img";

export default function Stats() {
  return (
    <section aria-label="TIS at a glance" className="bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/15 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group relative flex min-h-56 flex-col justify-between bg-ink p-5 sm:min-h-72 sm:p-8">
              <Img
                src={s.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-25"
              />
              {/* dt before dd in the DOM; flex order puts the number on top visually */}
              <dt className="relative order-2 mt-6 max-w-[14ch] text-base font-semibold text-white/85 sm:text-lg">
                {s.label}
              </dt>
              <dd className="relative order-1 font-display text-6xl font-extrabold tracking-tight text-marigold sm:text-8xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
