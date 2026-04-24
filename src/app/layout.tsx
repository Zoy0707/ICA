import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: '<meta name="google-site-verification" content="of8U4HofWREi0Im5SZOhD30OLvHeIcDGYCvNBLba3KI" />'
  },
  metadataBase: new URL("https://YOUR-PROJECT.vercel.app"),
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
  openGraph: {
    title: "UoM Engineering & IT Innovation Competition 2026",
    description:
      "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
    url: "https://YOUR-PROJECT.vercel.app",
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
