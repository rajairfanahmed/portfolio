import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data";

import "./globals.css";

export const metadata: Metadata = {
  title: site.name,
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
      <body className="bg-base font-sans text-primary antialiased">
        <ThemeProvider>
          <ThemeToggle />
          <main className="mx-auto max-w-7xl px-6 md:px-12">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
