import BrandLogo from "@/components/ui/BrandLogo";
import { brandAssets, organiserContent } from "@/data/event";

export default function OrganiserSection() {
  return (
    <section id="organiser" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <BrandLogo
              name={brandAssets.icaLogo.name}
              shortName={brandAssets.icaLogo.shortName}
              src={brandAssets.icaLogo.src}
            />

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {organiserContent.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {organiserContent.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              {organiserContent.description}
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              {organiserContent.summaryCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                    {card.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-300">
                {organiserContent.supportTitle}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200 md:text-base">
                {organiserContent.supportDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {organiserContent.supportBadges.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
