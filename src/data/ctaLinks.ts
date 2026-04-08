/** Central registration and CTA URLs. Use `isCtaLive` for TBD / coming-soon states. */
export const CTA_LINKS = {
  compete: "https://lnkd.in/gkMAcSXj",
  infoSession: "https://lnkd.in/g9YDKz_R",
  teamUp: "TBD",
  pitchWorkshop: "https://luma.com/yw85rxee",
  audience: "https://luma.com/27lmvnsj",
  sponsorPackage: "/files/ICA-Sponsorship-Package.pdf",
} as const;

export function isCtaLive(href: string): boolean {
  return Boolean(href) && href !== "TBD";
}
