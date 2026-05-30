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
  metadataBase: new URL("https://www.craftinglab.co"),
  title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
  description:
    "CRAFTING LAB - Online marketing services by experienced professionals. Build strong brands through creative content and data analytics.",
  icons: {
    icon: "/assets/brand/logo-icon.svg",
  },
  openGraph: {
    title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
    description:
      "Online marketing services by experienced professionals. Build strong brands through creative content and data analytics.",
    url: "https://www.craftinglab.co",
    siteName: "CRAFTING LAB",
    images: [
      {
        url: "/assets/brand/og-image.webp",
        width: 1200,
        height: 630,
        alt: "CRAFTING LAB - Digital Marketing Agency",
        type: "image/webp",
      },
    ],
    locale: "th_TH",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRAFTING LAB - Race Your Life, Lead Your Brand Forward",
    description:
      "Online marketing services by experienced professionals. Build strong brands through creative content and data analytics.",
    images: ["/assets/brand/og-image.webp"],
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
        className={`${outfit.variable} ${syncopate.variable} ${lineSeedSansTH.variable} ${pbio.variable} antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        {children}
        {modal}
      </body>
    </html>
  );
}
