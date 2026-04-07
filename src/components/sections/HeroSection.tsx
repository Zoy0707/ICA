import Container from "@/components/layout/Container";
import { brandAssets, eventMeta, heroV2Content } from "@/data/event";

type HeroVisualCardProps = {
  title: string;
  subtitle: string;
  src?: string;
  placeholder: string;
  large?: boolean;
};

function HeroVisualCard({
  title,
  subtitle,
  src = "",
  placeholder,
  large = false,
}: HeroVisualCardProps) {
  return (
    <div
      className={`overflow-hidden rounded-[1.5rem] border border-[#E3E6F0] bg-white p-5 shadow-[0_14px_36px_rgba(23,23,39,0.06)] ${
        large ? "min-h-[320px]" : "min-h-[150px]"
      }`}
    >
      {src ? (
        <img
          src={src}
          alt={title}
          className={`h-full w-full rounded-[1rem] object-cover ${
            large ? "min-h-[250px]" : "min-h-[90px]"
          }`}
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col justify-between rounded-[1rem] border border-dashed border-[#E3E6F0] bg-[#F1F2FA] p-4 ${
            large ? "min-h-[250px]" : "min-h-[90px]"
          }`}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#5F6275]">
              Placeholder
            </p>
            <p className="mt-3 text-sm font-semibold text-[#171727]">
              {placeholder}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-base font-semibold tracking-tight text-[#171727]">
              {title}
            </p>
            <p className="mt-1 text-sm text-[#5F6275]">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function LogoBadge({
  src,
  alt,
  shortName,
}: {
  src: string;
  alt: string;
  shortName: string;
}) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E3E6F0] bg-white shadow-[0_10px_22px_rgba(23,23,39,0.06)]">
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-contain p-1" />
      ) : (
        <span className="text-xs font-semibold text-[#171727]">
          {shortName}
        </span>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [primaryVisual, ...secondaryVisuals] = heroV2Content.visualCards;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E3E6F0] bg-[radial-gradient(circle_at_top_left,_rgba(96,84,255,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(98,43,207,0.14),_transparent_30%),linear-gradient(to_bottom,_#F7F8FC,_#F1F2FA)]"
    >
      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            {/* Logo-only brand strip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E3E6F0] bg-white/80 px-3 py-2 shadow-[0_14px_34px_rgba(23,23,39,0.06)] backdrop-blur">
              <LogoBadge
                src={brandAssets.icaLogo.src}
                alt={brandAssets.icaLogo.name}
                shortName={brandAssets.icaLogo.shortName}
              />
              <div className="h-4 w-px bg-[#E3E6F0]" />
              <LogoBadge
                src={brandAssets.feitLogo.src}
                alt={brandAssets.feitLogo.name}
                shortName={brandAssets.feitLogo.shortName}
              />
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-[#5F6275]">
              {heroV2Content.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#171727] md:text-6xl md:leading-[1.05]">
              {eventMeta.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F6275] md:text-xl">
              {eventMeta.subtitle}
            </p>

            {/* Meta line */}
            <p className="mt-5 text-sm text-[#5F6275]">
              <span className="font-medium text-[#171727]">
                {eventMeta.date}
              </span>
              {" · "}
              {eventMeta.time}
              {" · "}
              {eventMeta.venue}
              {" · "}
              <span className="italic">{eventMeta.venueSuffix}</span>
            </p>

            <p className="mt-2 text-sm font-medium text-[#171727]">
              {eventMeta.hostedBy}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={eventMeta.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#6054FF] px-6 py-3 text-sm font-medium !text-white shadow-[0_14px_34px_rgba(96,84,255,0.24)] transition hover:bg-[#622BCF] hover:!text-white"
              >
                {eventMeta.primaryCta.label}
              </a>

              <a
                href={eventMeta.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[#E3E6F0] bg-white px-6 py-3 text-sm font-medium text-[#171727] shadow-[0_10px_26px_rgba(23,23,39,0.05)] transition hover:border-[#622BCF]/30 hover:bg-[#F1F2FA]"
              >
                {eventMeta.secondaryCta.label}
              </a>

              <a
                href={eventMeta.sponsorCta.href}
                className="inline-flex items-center justify-center rounded-full border border-[#E3E6F0] bg-white px-6 py-3 text-sm font-medium text-[#171727] shadow-[0_10px_26px_rgba(23,23,39,0.05)] transition hover:border-[#622BCF]/30 hover:bg-[#F1F2FA]"
              >
                {eventMeta.sponsorCta.label}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroV2Content.trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-[#E3E6F0] bg-white/80 p-4 shadow-[0_14px_34px_rgba(23,23,39,0.06)] backdrop-blur"
                >
                  <p className="text-sm font-semibold tracking-tight text-[#171727]">
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5F6275]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#E3E6F0] bg-white/80 p-4 shadow-[0_26px_70px_rgba(23,23,39,0.10)] backdrop-blur md:p-5">
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <HeroVisualCard
                  title={primaryVisual.title}
                  subtitle={primaryVisual.subtitle}
                  src={primaryVisual.src}
                  placeholder={primaryVisual.placeholder}
                  large
                />
                <div className="grid gap-4">
                  {secondaryVisuals.map((card) => (
                    <HeroVisualCard
                      key={card.placeholder}
                      title={card.title}
                      subtitle={card.subtitle}
                      src={card.src}
                      placeholder={card.placeholder}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 rounded-[1.5rem] border border-[#622BCF]/20 bg-[linear-gradient(135deg,_#510A6B,_#171727)] px-5 py-4 text-white shadow-[0_18px_46px_rgba(81,10,107,0.25)] md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                    {heroV2Content.visualHighlight.eyebrow}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight">
                    {heroV2Content.visualHighlight.title}
                  </p>
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/75">
                  14:00–17:45
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
