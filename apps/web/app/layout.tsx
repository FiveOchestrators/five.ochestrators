import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AmbientBackground } from "./ambient-background";

export const metadata: Metadata = {
  title: "Five.Ochestrators",
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
      <body><AmbientBackground />{children}</body>
    </html>
  );
}
