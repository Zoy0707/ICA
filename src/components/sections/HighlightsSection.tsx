import { highlightsContent } from "@/data/event";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {highlightsContent.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {highlightsContent.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
              {highlightsContent.intro}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {highlightsContent.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-sm">
                    {item.title.charAt(0)}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                Quick snapshot
              </p>

              <div className="mt-5 grid gap-4">
                {highlightsContent.valueStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-300">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Final Day
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {highlightsContent.finalDayTitle}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
                {highlightsContent.finalDayDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {highlightsContent.finalDayItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
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
