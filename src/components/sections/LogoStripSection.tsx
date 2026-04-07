import BrandLogo from "@/components/ui/BrandLogo";
import { logoStripContent } from "@/data/event";

export default function LogoStripSection() {
  return (
    <section id="logo-strip" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.34fr_1fr] lg:items-center">
          <div className="max-w-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Trusted by
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              Clear institutional and community backing
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              A quick trust layer for the page before users read the rest of the
              event details.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {logoStripContent.map((group) => (
              <div
                key={group.label}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  {group.label}
                </p>

                <div className="mt-4 space-y-3">
                  {group.logos.map((logo) => (
                    <div
                      key={`${group.label}-${logo.name}-${logo.placeholder}`}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                    >
                      <BrandLogo
                        name={logo.name}
                        shortName={logo.shortName}
                        src={logo.src}
                        compact
                      />

                      {!logo.src && (
                        <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-slate-400">
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
      </div>
    </section>
  );
}
