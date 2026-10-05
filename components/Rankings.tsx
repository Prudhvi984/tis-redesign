import { rankings } from "@/lib/data";

/** Static server component: hover is pure CSS, so it costs no client JS. */
export default function Rankings() {
  return (
    <section id="rankings" aria-label="Rankings" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-3xl bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r) => (
            <li
              key={`${r.rank}-${r.where}`}
              className="flex min-h-72 flex-col justify-between bg-paper p-6 text-ink transition-colors duration-300 hover:bg-ink hover:text-white sm:p-8"
            >
              <span className="font-display text-8xl font-extrabold leading-none tracking-tighter text-ridge">
                {r.rank}
              </span>
              <div>
                <p className="font-display text-2xl font-bold">{r.where}</p>
                <p className="mt-2 text-base leading-snug opacity-75">{r.what}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
