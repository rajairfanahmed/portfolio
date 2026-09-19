import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raja Irfan Ahmed | Full Stack AI Web Apps Developer",
  description: "Portfolio of Raja Irfan Ahmed, Full Stack Developer specializing in AI Web Apps. Explore my projects, skills, and experience.",
  openGraph: {
    title: "Raja Irfan Ahmed | Full Stack AI Web Apps Developer",
    description: "Portfolio of Raja Irfan Ahmed, Full Stack Developer specializing in AI Web Apps.",
    url: "https://rajairfanahmed.com",
    siteName: "Raja Irfan Ahmed Portfolio",
    images: [
      {
        url: "https://github.com/rajairfanahmed.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Irfan Ahmed | Full Stack AI Web Apps Developer",
    description: "Portfolio of Raja Irfan Ahmed, Full Stack Developer specializing in AI Web Apps.",
    images: ["https://github.com/rajairfanahmed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg-base text-text-primary antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeToggle />
          <main className="max-w-7xl mx-auto px-6 md:px-12">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
