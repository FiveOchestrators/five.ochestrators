import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five.Ochstrators — The Strongest AI Development Team",
  description:
    "Five.Ochstrators is an AI-native development team that explores, designs, builds, verifies, and ships as one.",
  icons: {
    icon: "./favicon.svg"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#193536"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
