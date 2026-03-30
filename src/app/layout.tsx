import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELITE LEGAL CONSULTANCY",
  description:
    "Professional legal consultancy website for ELITE LEGAL CONSULTANCY in Aizawl, Mizoram.",
  icons: {
    icon: "/Elite_official_logo.jpeg",
    shortcut: "/Elite_official_logo.jpeg",
    apple: "/Elite_official_logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
