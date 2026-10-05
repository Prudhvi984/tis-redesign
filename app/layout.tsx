import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Boarding School in Dehradun | CBSE Co Ed School India | Tulas International School",
  description:
    "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.",
  openGraph: {
    title: "Boarding School in Dehradun India | Tulas International School",
    description:
      "CBSE-affiliated co-ed boarding school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.",
    siteName: "Tulas International School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400..700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
