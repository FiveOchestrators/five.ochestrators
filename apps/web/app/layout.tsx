import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five Ochestrators — The Strongest AI Development Team",
  description:
    "Five Ochestrators is an AI-native development team that explores, designs, builds, verifies, and ships as one.",
  icons: {
    icon: "./favicon.svg"
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071317"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
