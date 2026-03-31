import { highlightsContent } from "@/data/event";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Highlights
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Why this competition is worth joining
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            A clear competition journey, strong institutional positioning, and a
            practical format designed for collaboration, visibility, and real
            momentum.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {highlightsContent.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-slate-900 shadow-sm">
                +
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

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6 md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Final Day
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              {highlightsContent.finalDayTitle}
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {highlightsContent.finalDayDescription}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {highlightsContent.finalDayItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
