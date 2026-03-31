import { overviewContent } from "@/data/event";

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A cross-disciplinary challenge built for practical ideas
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {overviewContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              Who should join
            </h3>
            <div className="mt-5 space-y-3">
              {overviewContent.audience.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              Participation format
            </h3>
            <div className="mt-5 space-y-3">
              {overviewContent.participation.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Challenge themes
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Four areas for bold and relevant ideas
              </h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewContent.themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
              >
                <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                  Theme
                </div>
                <h4 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                  {theme.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
