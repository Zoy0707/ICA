import { agendaContent } from "@/data/event";

export default function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {agendaContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {agendaContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {agendaContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              {agendaContent.timelineTitle}
            </h3>

            <div className="mt-6 space-y-4">
              {agendaContent.timeline.map((item) => (
                <div
                  key={`${item.step}-${item.title}`}
                  className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-5 md:p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
                        {item.step}
                      </div>

                      <div className="max-w-xl">
                        <h4 className="text-xl font-semibold tracking-tight text-slate-950">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {item.format}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm">
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                {agendaContent.submissionTitle}
              </p>

              <div className="mt-5">
                <h4 className="text-lg font-semibold text-slate-950">
                  Draft submission
                </h4>
                <div className="mt-3 space-y-3">
                  {agendaContent.submissionRequirements.draft.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-slate-950">
                  Final submission
                </h4>
                <div className="mt-3 space-y-3">
                  {agendaContent.submissionRequirements.final.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Shortlisting
              </p>
              <h4 className="mt-3 text-lg font-semibold text-slate-950">
                {agendaContent.shortlisting.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                {agendaContent.shortlisting.description}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                {agendaContent.pricingTitle}
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {agendaContent.pricing.competitor.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {agendaContent.pricing.competitor.description}
                    </p>
                  </div>

                  <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">
                    {agendaContent.pricing.competitor.price}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">
                  {agendaContent.pricing.audience.title}
                </h4>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                    {agendaContent.pricing.audience.earlyBird}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
                    {agendaContent.pricing.audience.regular}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p>{agendaContent.pricing.audience.earlyBirdDeadline}</p>
                  <p>{agendaContent.pricing.audience.regularDeadline}</p>
                  <p className="text-amber-300">
                    {agendaContent.pricing.audience.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
