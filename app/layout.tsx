import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Al Fathir Attaullah — Front End Developer",
  description:
    "Portfolio website Muhammad Al Fathir Attaullah, siswa Rekayasa Perangkat Lunak (Front End Development) SMK Telkom Malang. Temukan proyek, keahlian, dan pengalaman saya di sini.",
  keywords: [
    "Muhammad Al Fathir Attaullah",
    "Front End Developer",
    "SMK Telkom Malang",
    "Portfolio",
    "Web Developer Indonesia",
    "Rekayasa Perangkat Lunak",
  ],
  authors: [{ name: "Muhammad Al Fathir Attaullah" }],
  openGraph: {
    title: "Muhammad Al Fathir Attaullah — Front End Developer",
    description:
      "Portfolio siswa RPL SMK Telkom Malang yang antusias di bidang Front End Development. Lihat proyek SITU, NeonRent, dan karya lainnya.",
    url: "https://alfathirattaullah.vercel.app",
    siteName: "Al Fathir Portfolio",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Al Fathir Attaullah — Front End Developer",
    description:
      "Portfolio siswa RPL SMK Telkom Malang yang antusias di bidang Front End Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
