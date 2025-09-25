import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Roboto } from 'next/font/google';

// Configure Roboto
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], // Specify the weights you need
  subsets: ['latin'], // Essential for smaller font bundles
  display: 'swap', // Helps prevent layout shift (CLS)
  variable: '--font-roboto', // Define a CSS variable for Tailwind to use
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant POS and Management System | Ordermatic",
  description: "The best restaurant POS software to manage your restaurant billing, KOTs, inventory, online order, menu, and customers.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
