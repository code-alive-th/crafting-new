import type { Metadata } from "next";
import { Outfit, Syncopate } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./works/detail.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  preload: false,
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
  preload: false,
});

const fcMinimal = localFont({
  src: [
    {
      path: "../../public/fonts/FC-Minimal/FC Minimal Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/FC-Minimal/FC Minimal Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fc-minimal",
  preload: false,
});

const lineSeedSansTH = localFont({
  src: [
    {
      path: "../../public/fonts/LINE_Seed_Sans_TH/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LINE_Seed_Sans_TH/LINESeedSansTH_W_He.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/LINE_Seed_Sans_TH/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/LINE_Seed_Sans_TH/LINESeedSansTH_W_XBd.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-line-seed-th",
  preload: false,
});

const pbio = localFont({
  src: "../../public/fonts/pbio.ttf",
  variable: "--font-pbio",
});

export const metadata: Metadata = {
  title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
  description:
    "CRAFTING LAB - We provide online marketing services by a team of experienced people. Build a strong brand in the online business world through creative content and data analytics.",
  icons: {
    icon: "/assets/brand/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${syncopate.variable} ${fcMinimal.variable} ${lineSeedSansTH.variable} ${pbio.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
        {modal}
      </body>
    </html>
  );
}
