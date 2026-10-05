"use client";

import { useState } from "react";

/** Plain <img> that hides itself if the remote asset fails, so layouts never show broken icons. */
export default function Img({
  src,
  alt,
  className,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span aria-hidden className={className} style={{ background: "rgba(14,33,71,.08)", display: "block" }} />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} loading={loading} decoding="async" onError={() => setFailed(true)} />;
}
