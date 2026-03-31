import { agendaContent } from "@/data/event";

export default function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Agenda & Key Dates
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            A clear competition journey from sign-up to Final Day
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {agendaContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              Competition timeline
            </h3>

            <div className="mt-6 space-y-4">
              {agendaContent.timeline.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-3xl border border-slate-200 bg-slate-50/70 p-5 md:p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xl">
                      <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                        Step {index + 1}
                      </div>

                      <h4 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium text-slate-500">
                        {item.format}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
                        {item.description}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
                      {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-4 text-sm leading-6 text-blue-900">
              {agendaContent.note}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Submission Requirements
              </p>

              <div className="mt-5">
                <h4 className="text-lg font-semibold text-slate-950">
                  Draft submission
                </h4>
                <div className="mt-3 space-y-3">
                  {agendaContent.submissionRequirements.draft.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                      <p className="text-sm text-slate-700">{item}</p>
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
                      className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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

            <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                Pricing
              </p>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-950">
                      {agendaContent.pricing.competitor.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {agendaContent.pricing.competitor.description}
                    </p>
                  </div>
                  <div className="whitespace-nowrap rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                    {agendaContent.pricing.competitor.price}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                <h4 className="text-lg font-semibold text-slate-950">
                  {agendaContent.pricing.audience.title}
                </h4>

                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900">
                    {agendaContent.pricing.audience.earlyBird}
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900">
                    {agendaContent.pricing.audience.regular}
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p>{agendaContent.pricing.audience.earlyBirdDeadline}</p>
                  <p>{agendaContent.pricing.audience.regularDeadline}</p>
                  <p className="text-amber-700">
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
