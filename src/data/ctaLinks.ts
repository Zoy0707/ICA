/** Central registration and CTA URLs. Use `isCtaLive` for TBD / coming-soon states. */
export const CTA_LINKS = {
  compete: "https://lnkd.in/gkMAcSXj",
  infoSession: "https://youtu.be/Q8sSMAa4vbw",
  teamUp: "TBD",
  pitchWorkshop: "https://luma.com/yw85rxee",
  audience: "https://luma.com/27lmvnsj",
  sponsorPackage: "/files/ICA-Sponsorship-Package.pdf",
} as const;

export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/company/innovateconnect-alliance",
  instagram: "TBD",
  xiaohongshu: "TBD",
  wechatOrOther: "TBD",
} as const;

export function isCtaLive(href: string): boolean {
  return Boolean(href) && href !== "TBD";
}
