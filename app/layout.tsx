import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

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
    >
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
