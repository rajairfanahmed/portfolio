import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { FloatingDock } from "@/components/floating-dock";
import { TransitionWrapper } from "@/components/transition-wrapper";
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
          <div className="fixed right-6 top-6 z-50 md:right-12">
            <ThemeToggle />
          </div>
          <FloatingDock />
          <TransitionWrapper>{children}</TransitionWrapper>
          <InteractionScore />
        </ThemeProvider>
      </body>
    </html>
  );
}
