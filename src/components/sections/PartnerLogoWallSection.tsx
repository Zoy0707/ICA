import BrandLogo from "@/components/ui/BrandLogo";
import { partnerWallContent } from "@/data/event";

export default function PartnerLogoWallSection() {
  return (
    <section id="partners" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {partnerWallContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {partnerWallContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {partnerWallContent.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {partnerWallContent.groups.map((group) => (
            <div
              key={group.label}
              className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                {group.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {group.description}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {group.logos.map((logo) => (
                  <div
                    key={`${group.label}-${logo.name}-${logo.placeholder}`}
                    className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <BrandLogo
                      name={logo.name}
                      shortName={logo.shortName}
                      src={logo.src}
                      compact
                    />

                    {!logo.src && (
                      <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                        {logo.placeholder}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
