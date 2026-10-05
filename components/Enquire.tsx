"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { classes, site, states } from "@/lib/data";

const field =
  "w-full rounded-xl border border-ink/20 bg-white px-4 py-3.5 text-base text-ink outline-none transition focus:border-ink focus:ring-4 focus:ring-marigold/50";

export default function Enquire() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const phoneOk = /^[6-9]\d{9}$/.test(phone);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") || "").trim()) next.name = "Enter the student's or parent's name.";
    if (!phoneOk) next.phone = "Enter a 10-digit Indian mobile number.";
    else if (!verified) next.phone = "Verify your number with the OTP.";
    if (!fd.get("class")) next.class = "Choose a class.";
    if (!fd.get("state")) next.state = "Choose your state.";
    if (!fd.get("consent")) next.consent = "Please agree to continue.";
    setErrors(next);
    // Demo only: wire this up to the admissions CRM / API route.
    if (!Object.keys(next).length) setDone(true);
  }

  return (
    <section id="enquire" aria-labelledby="enquire-heading" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <h2 id="enquire-heading" className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">Enquire Now!</h2>
          <h3 className="mt-10 font-display text-2xl font-bold">Contact Us.</h3>
          <address className="mt-4 space-y-3 text-lg not-italic text-ink/85">
            <p>
              <a className="font-semibold underline decoration-marigold decoration-4 underline-offset-4" href={`tel:${site.helpline}`}>
                Admission Helpline No. {site.helplineDisplay}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a className="hover:underline" href={site.mapsUrl}>
                Tulas International School {site.address}
              </a>
            </p>
            <p>
              Landline No.{" "}
              {site.landlines.map((l, i) => (
                <span key={l}>
                  <a className="hover:underline" href={`tel:${l}`}>{l}</a>
                  {i < site.landlines.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </address>
          <iframe
            title="Map to Tulas International School"
            src={site.mapEmbed}
            loading="lazy"
            className="mt-8 h-64 w-full rounded-3xl border-0 grayscale transition hover:grayscale-0 sm:h-80"
          />
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-ink/10 sm:p-10">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-96 flex-col items-center justify-center text-center"
                role="status"
              >
                <motion.svg viewBox="0 0 52 52" className="h-20 w-20" aria-hidden>
                  <circle cx="26" cy="26" r="24" fill="#F6B800" />
                  <motion.path
                    d="M14 27 l8 8 l16 -18"
                    fill="none"
                    stroke="#0E2147"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </motion.svg>
                <p className="mt-6 font-display text-3xl font-extrabold">Enquiry received</p>
                <p className="mt-2 max-w-xs text-ink/70">The TIS admissions team will call you on +91 {phone}.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate exit={{ opacity: 0 }} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-semibold">Name</label>
                  <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} />
                  {errors.name && <p className="mt-1 text-sm text-red-700">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-semibold">Mobile number</label>
                  <div className="flex gap-2">
                    <span className="flex items-center rounded-xl border border-ink/20 bg-mist px-4 font-semibold">+91</span>
                    <input
                      id="phone"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value.replace(/\D/g, ""));
                        setOtpSent(false);
                        setVerified(false);
                      }}
                      className={field}
                      aria-invalid={!!errors.phone}
                    />
                    <button
                      type="button"
                      disabled={!phoneOk || verified}
                      onClick={() => setOtpSent(true)}
                      className="shrink-0 rounded-xl bg-ink px-4 font-semibold text-white transition enabled:hover:bg-ridge disabled:opacity-40"
                    >
                      {otpSent ? "Resend" : "Send OTP"}
                    </button>
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-700">{errors.phone}</p>}
                </div>

                <AnimatePresence>
                  {otpSent && !verified && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="otp" className="mb-1.5 block font-semibold">Enter OTP</label>
                      <div className="flex gap-2">
                        <input
                          id="otp"
                          inputMode="numeric"
                          maxLength={6}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                          className={field}
                        />
                        <button
                          type="button"
                          disabled={otp.length < 4}
                          onClick={() => setVerified(true)}
                          className="shrink-0 rounded-xl bg-marigold px-4 font-bold text-ink transition enabled:hover:bg-ink enabled:hover:text-white disabled:opacity-40"
                        >
                          Verify OTP
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {verified && <p className="text-sm font-semibold text-pine">Number verified.</p>}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="class" className="mb-1.5 block font-semibold">Class</label>
                    <select id="class" name="class" defaultValue="" className={field} aria-invalid={!!errors.class}>
                      <option value="" disabled>Select Class</option>
                      {classes.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    {errors.class && <p className="mt-1 text-sm text-red-700">{errors.class}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className="mb-1.5 block font-semibold">State</label>
                    <select id="state" name="state" defaultValue="" className={field} aria-invalid={!!errors.state}>
                      <option value="" disabled>Select State</option>
                      {states.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    {errors.state && <p className="mt-1 text-sm text-red-700">{errors.state}</p>}
                  </div>
                </div>

                <div>
                  <label className="flex items-start gap-3 text-sm leading-snug text-ink/80">
                    <input type="checkbox" name="consent" className="mt-0.5 h-5 w-5 accent-ink" />
                    I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun
                  </label>
                  {errors.consent && <p className="mt-1 text-sm text-red-700">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-ink py-4 font-display text-lg font-bold text-white transition hover:-translate-y-0.5 hover:bg-ridge"
                >
                  Enquire Now
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
