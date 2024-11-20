import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lightbox-Kit",
  description:
    "An image lightbox component for React. Simple, responsive, and customizable for your web applications.",
  keywords:
    "React, lightbox, image gallery, React component, UI component, image viewer, lightbox-kit",
  authors: [
    {
      name: "Zxk-Afz",
      url: "https://github.com/zxk-afz", 
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://lightbox-kit.vercel.app/",
    title: "Lightbox-Kit",
    description:
      "An image lightbox component for React. Simple, responsive, and customizable for your web applications.",
    images: [
      {
        url: "../assets/lightbox.png",
        width: 800,
        height: 600,
        alt: "Lightbox-Kit preview",
      },
    ],
    siteName: "Lightbox-Kit",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Lightbox-Kit",
    description: "An image lightbox component for React.",
    images: [
      {
        url: "../assets/lightbox.png",
        width: 800,
        height: 600,
        alt: "Lightbox-Kit preview",
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "./favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
