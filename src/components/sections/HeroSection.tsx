import Container from "@/components/layout/Container";
import BrandLogo from "@/components/ui/BrandLogo";
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
      className={`overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-5 ${
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
          className={`flex h-full w-full flex-col justify-between rounded-[1rem] border border-dashed border-slate-300 bg-white/70 p-4 ${
            large ? "min-h-[250px]" : "min-h-[90px]"
          }`}
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              Placeholder
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-900">
              {placeholder}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-base font-semibold tracking-tight text-slate-950">
              {title}
            </p>
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [primaryVisual, ...secondaryVisuals] = heroV2Content.visualCards;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.10),_transparent_24%),linear-gradient(to_bottom,_#ffffff,_#f8fafc)]"
    >
      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-2 shadow-sm backdrop-blur">
              <BrandLogo
                name={brandAssets.icaLogo.name}
                shortName={brandAssets.icaLogo.shortName}
                src={brandAssets.icaLogo.src}
                compact
              />
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              {heroV2Content.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {eventMeta.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {eventMeta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                {eventMeta.date}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                {eventMeta.time}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                {eventMeta.venue}
              </span>
            </div>

            <div className="mt-8 space-y-2 text-sm md:text-base">
              <p className="font-medium text-slate-950">{eventMeta.hostedBy}</p>
              <p className="text-slate-700">{eventMeta.deliveredBy}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={eventMeta.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium !text-white transition hover:opacity-90 hover:!text-white"
              >
                {eventMeta.primaryCta.label}
              </a>

              <a
                href={eventMeta.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {eventMeta.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroV2Content.trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                >
                  <p className="text-sm font-semibold tracking-tight text-slate-950">
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:p-5">
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

              <div className="mt-4 flex flex-col gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-950 px-5 py-4 text-white md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    {heroV2Content.visualHighlight.eyebrow}
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight">
                    {heroV2Content.visualHighlight.title}
                  </p>
                </div>

                <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200">
                  Placeholder visuals for V2
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
