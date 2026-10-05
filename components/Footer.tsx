import { footerLinks, site, socials } from "@/lib/data";
import Img from "./Img";

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="inline-block rounded-2xl bg-white px-4 py-2">
            <Img src={site.footerLogo} alt={site.name} className="h-14 w-auto" />
          </div>
          <address className="mt-6 space-y-2 not-italic text-white/80">
            <p className="font-display text-xl font-bold text-white">{site.name}</p>
            <p><a className="hover:text-marigold" href={site.mapsUrl}>{site.address}</a></p>
            <p>
              Landline No.{" "}
              {site.landlines.map((l, i) => (
                <span key={l}>
                  <a className="hover:text-marigold" href={`tel:${l}`}>{l}</a>
                  {i < site.landlines.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p>
              <a className="hover:text-marigold" href={`tel:${site.helpline}`}>Admission Helpline No. {site.helpline}</a>
            </p>
            <p><a className="hover:text-marigold" href={`mailto:${site.email}`}>{site.email}</a></p>
          </address>
          <ul className="mt-6 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-block rounded-full border border-white/30 px-4 py-2 text-sm font-semibold transition hover:bg-marigold hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-start">
          {footerLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-white/80 transition hover:text-marigold">{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/15 px-4 py-6 text-center text-sm text-white/60 sm:px-6">
        Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
      </div>
    </footer>
  );
}
