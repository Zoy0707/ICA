import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://competition2026.innovateconnectalliance.org"),
  title: {
    default: "UoM Engineering & IT Innovation Competition 2026",
    template: "%s | ICA",
  },
  description:
    "A university-backed innovation competition hosted by University of Melbourne FEIT and organised by Innovate Connect Alliance (ICA). Open to students, graduates, and young professionals in engineering, technology, AI, sustainability, and entrepreneurship. Final Pitch Day: 9 May 2026, Market Hall, University of Melbourne. AUD $1,000 cash prize.",
  keywords: [
    "University of Melbourne",
    "FEIT",
    "innovation competition",
    "engineering competition",
    "IT competition",
    "student innovation",
    "ICA",
    "Innovate Connect Alliance",
    "AI competition",
    "entrepreneurship",
    "sustainability",
    "pitch competition",
    "Melbourne 2026",
    "UoM competition",
  ],
  verification: {
    google: "of8U4HofWREi0Im5SZOhD30OLvHeIcDGYCvNBLba3KI"
  },
  openGraph: {
    title: "UoM Engineering & IT Innovation Competition 2026",
    description:
      "Compete in Melbourne's university-backed innovation challenge. Open to students, graduates & young professionals. Final Pitch Day: 9 May 2026 at Market Hall, UoM. AUD $1,000 prize.",
    url: "https://competition2026.innovateconnectalliance.org",
    siteName: "Innovate Connect Alliance",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UoM Engineering & IT Innovation Competition 2026",
    description:
      "Compete in Melbourne's university-backed innovation challenge. Open to students, graduates & young professionals. Final Pitch Day: 9 May 2026 at Market Hall, UoM. AUD $1,000 prize.",
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
