import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-base font-sans text-primary antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
