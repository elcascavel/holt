import "./global.css";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: "300",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-ctp-base dark:text-white dark:bg-ctp-base",
        jetBrains.className
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
