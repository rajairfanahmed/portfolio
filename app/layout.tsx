import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteNav } from "@/components/site-nav";
import { InteractionScore } from "@/components/interaction-score";
import { site } from "@/data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajairfanahmed.vercel.app"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.positioning,
  openGraph: {
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.positioning,
    url: "https://rajairfanahmed.vercel.app",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.positioning,
  },
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
      <body className="bg-base font-sans text-primary antialiased">
        <ThemeProvider>
          <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
            <SiteNav />
            <ThemeToggle />
          </header>
          <main className="mx-auto max-w-7xl px-6 md:px-12">{children}</main>
          <InteractionScore />
        </ThemeProvider>
      </body>
    </html>
  );
}
