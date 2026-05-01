import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleanstay | Edinburgh's Most Reliable Airbnb Cleaning Service",
  description:
    "Professional Airbnb and short-term rental cleaning in Edinburgh. Fast turnovers, spotless results, fully insured. Get a free quote today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
