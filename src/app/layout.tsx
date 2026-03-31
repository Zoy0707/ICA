import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UoM Engineering & IT Innovation Competition 2026",
  description:
    "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
