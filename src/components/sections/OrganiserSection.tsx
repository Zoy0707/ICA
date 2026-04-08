import { brandAssets, organiserContent } from "@/data/event";
import { isCtaLive } from "@/data/ctaLinks";

/** When true, shows Title / Gold / placeholder sponsor tiers. Hidden in UI for now; structure retained. */
const SHOW_SPONSOR_TIER_PLACEHOLDERS = false;

type SupportingLogoItem = {
  name: string;
  shortName: string;
  src: string;
  /** External site; opens in a new tab when set. */
  href?: string;
};

function SupportingLogoRow({
  logos,
  logoClassName = "h-12 w-auto object-contain opacity-95 md:h-14",
}: {
  logos: SupportingLogoItem[];
  logoClassName?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-12 gap-y-6 md:gap-x-14 md:gap-y-7">
      {logos.map((logo) => {
        const image = logo.src ? (
          <img
            src={logo.src}
            alt={logo.name}
            className={logoClassName}
          />
        ) : (
          <span className="text-sm font-semibold tracking-tight text-[#171727]">
            {logo.shortName}
          </span>
        );

        return (
          <div key={logo.name} className="flex items-center">
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                {image}
              </a>
            ) : (
              image
            )}
          </div>
        );
      })}
    </div>
  );
}

function SponsorSlots({
  count,
  label,
  tall = false,
}: {
  count: number;
  label: string;
  tall?: boolean;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={`${label}-${i}`}
          className={`flex items-center justify-center rounded-2xl border border-[#E3E6F0] bg-white/40 px-6 text-center shadow-[0_16px_42px_rgba(23,23,39,0.05)] ${
            tall ? "py-8 sm:col-span-2" : "py-6"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {label} placeholder
          </span>
        </div>
      ))}
    </div>
  );
}

export default function OrganiserSection() {
  const diamondSponsor: SupportingLogoItem[] = [
    {
      name: "AIBUILD",
      shortName: "AIBUILD",
      src: "/logos/aibuild-logo.png",
      href: "https://www.aibuild.com/",
    },
  ];

  const supportingSponsorLogos: SupportingLogoItem[] = [
    {
      name: brandAssets.supporterLogos[1].name,
      shortName: brandAssets.supporterLogos[1].shortName,
      src: "/logos/UoMCAN-logo.png",
      href: "https://uomcan.org/",
    },
    {
      name: "MLAI",
      shortName: "MLAI",
      src: "/logos/mlai-logo.jpeg",
      href: "https://mlai.au/",
    },
    {
      name: brandAssets.supporterLogos[0].name,
      shortName: brandAssets.supporterLogos[0].shortName,
      src: brandAssets.supporterLogos[0].src,
    },
    {
      name: brandAssets.additionalPartners[0].name,
      shortName: brandAssets.additionalPartners[0].shortName,
      src: brandAssets.additionalPartners[0].src,
    },
    {
      name: "Future Mind",
      shortName: "Future Mind",
      src: "",
    },
    {
      name: "GES",
      shortName: "GES",
      src: "/logos/GES-logo.jpg",
      href: "https://globalelite.school/",
    },
  ];

  return (
    <section id="organiser" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
        <h2 className="text-3xl font-semibold tracking-tight text-[#171727] md:text-4xl">
          Sponsors
        </h2>

        <div className="mt-10 space-y-8 md:space-y-9">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#171727]">
              Exclusive Title Sponsor
            </p>
            <div className="mt-4 border-b border-[#E3E6F0] pb-7 md:pb-8">
              <SupportingLogoRow
                logos={diamondSponsor}
                logoClassName="h-24 w-auto object-contain opacity-100 md:h-28 lg:h-32"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#5F6275]">
              Supporting Sponsors
            </p>
            <div className="mt-4">
              <SupportingLogoRow logos={supportingSponsorLogos} />
            </div>
          </div>

          {SHOW_SPONSOR_TIER_PLACEHOLDERS && (
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#5F6275]">
                Sponsor tiers
              </p>

              <div className="mt-6 grid gap-8 lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-1">
                  <p className="text-sm font-semibold tracking-tight text-[#171727]">
                    Title Sponsor
                  </p>
                  <SponsorSlots count={1} label="Title Sponsor" tall />
                </div>

                <div className="space-y-4 lg:col-span-2">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold tracking-tight text-[#171727]">
                        Gold Sponsors
                      </p>
                      <SponsorSlots count={2} label="Gold Sponsor" />
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-semibold tracking-tight text-[#171727]">
                        Supporting Sponsors (placeholders)
                      </p>
                      <div className="grid gap-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={`supporting-${i}`}
                            className="flex items-center justify-center rounded-2xl border border-[#E3E6F0] bg-white/40 px-6 py-5 text-center shadow-[0_16px_42px_rgba(23,23,39,0.05)]"
                          >
                            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#5F6275]">
                              Supporting Sponsor placeholder
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="rounded-[1.75rem] border border-[#E3E6F0] bg-[#F1F2FA] p-6 md:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-semibold text-[#171727]">
                  Interested in sponsoring this event?
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5F6275]">
                  Download our sponsorship package to explore visibility, expo,
                  and partnership opportunities.
                </p>
              </div>
              {isCtaLive(organiserContent.sponsorButtonHref) ? (
                <a
                  href={organiserContent.sponsorButtonHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#6054FF] px-6 py-3 text-sm font-medium !text-white shadow-[0_14px_34px_rgba(96,84,255,0.22)] transition hover:bg-[#622BCF] hover:!text-white"
                >
                  {organiserContent.sponsorButtonLabel}
                </a>
              ) : (
                <span
                  className="inline-flex shrink-0 cursor-not-allowed select-none items-center justify-center rounded-full bg-[#6054FF]/45 px-6 py-3 text-sm font-medium text-white/90 opacity-90 shadow-none"
                  aria-disabled="true"
                >
                  {organiserContent.sponsorButtonLabel}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
