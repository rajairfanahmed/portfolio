import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { FloatingDock } from "@/components/floating-dock";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajairfanahmed.vercel.app"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.positioning,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-base font-sans text-main antialiased">
        <ThemeProvider>
          <FloatingDock />
          <main className="px-4 pb-28 pt-8 md:px-8 md:pb-12 md:pt-28">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
