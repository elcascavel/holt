import "./global.css";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/ui/layout/header";
import Footer from "../components/ui/layout/footer";
import type { Metadata } from "next/types";
import { SITE_URL } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Simão Amaral",
  description: "Simão Amaral's personal website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx("scrollbar min-h-screen", jetBrains.className)}
    >
      <body className="mx-auto bg-drac-nosferatu-900 text-drac-aro-50 flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
        <main className="flex-1 px-0 py-8 md:px-5">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
