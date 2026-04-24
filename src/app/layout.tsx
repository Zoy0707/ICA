import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://competition2026.innovateconnectalliance.org"),
  title: {
    default: "UoM Engineering & IT Innovation Competition 2026",
    template: "%s | ICA",
  },
  description:
    "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
  keywords: [
    "University of Melbourne",
    "FEIT",
    "innovation competition",
    "engineering competition",
    "IT competition",
    "student innovation",
    "ICA",
    "Innovate Connect Alliance",
  ],
  verification: {
    google: "of8U4HofWREi0Im5SZOhD300LvHeIcDGYCvNBLba3KI",
  },
  openGraph: {
    title: "UoM Engineering & IT Innovation Competition 2026",
    description:
      "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
    url: "https://competition2026.innovateconnectalliance.org",
    siteName: "Innovate Connect Alliance",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UoM Engineering & IT Innovation Competition 2026",
    description:
      "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
  },
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
