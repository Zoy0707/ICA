import BrandLogo from "@/components/ui/BrandLogo";
import { brandAssets, organiserContent } from "@/data/event";

export default function OrganiserSection() {
  return (
    <section id="organiser" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          {organiserContent.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
          {organiserContent.title}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Hosted by */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {organiserContent.hostedByLabel}
            </p>
            <div className="mt-4">
              <BrandLogo
                name={brandAssets.feitLogo.name}
                shortName={brandAssets.feitLogo.shortName}
                src={brandAssets.feitLogo.src}
              />
            </div>
          </div>

          {/* Organised by — logo only */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {organiserContent.organisedByLabel}
            </p>
            <div className="mt-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {brandAssets.icaLogo.src ? (
                <img
                  src={brandAssets.icaLogo.src}
                  alt={brandAssets.icaLogo.name}
                  className="h-full w-full object-contain p-2"
                />
              ) : (
                <span className="text-sm font-semibold text-slate-900">
                  {brandAssets.icaLogo.shortName}
                </span>
              )}
            </div>
          </div>

          {/* Community supporters */}
          <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {organiserContent.supportersLabel}
            </p>
            <div className="mt-4 space-y-3">
              {brandAssets.supporterLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <BrandLogo
                    name={logo.name}
                    shortName={logo.shortName}
                    src={logo.src}
                    compact
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor CTA */}
        <div className="mt-5 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-white">
                {organiserContent.sponsorTitle}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                {organiserContent.sponsorDescription}
              </p>
            </div>
            <a
              href={organiserContent.sponsorButtonHref}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              {organiserContent.sponsorButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
