import { agendaContent } from "@/data/event";

type TimelineItem = {
  step: string;
  date: string;
  title: string;
  format: string;
  description: string;
  registerHref: string;
  registerLabel: string;
  isDeadline: boolean;
};

function TimelineCard({ item }: { item: TimelineItem }) {
  const hasLink = item.registerHref && item.registerLabel;

  return (
    <div className="rounded-[1.75rem] border border-[#E3E6F0] bg-white p-5 shadow-[0_16px_42px_rgba(23,23,39,0.06)] md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold shadow-[0_10px_22px_rgba(23,23,39,0.08)] ${
              item.isDeadline
                ? "border border-[#8BB082]/35 bg-[#8BB082]/15 text-[#171727]"
                : "bg-[#6054FF] text-white"
            }`}
          >
            {item.step}
          </div>

          <div className="max-w-xl">
            <h4 className="text-xl font-semibold tracking-tight text-[#171727]">
              {item.title}
            </h4>
            <p className="mt-1 text-sm font-medium text-[#5F6275]">
              {item.format}
            </p>
            <p className="mt-3 text-sm leading-6 text-[#5F6275] md:text-base">
              {item.description}
            </p>

            {hasLink && (
              <a
                href={item.registerHref}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#6054FF] px-5 py-2 text-sm font-medium !text-white shadow-[0_12px_28px_rgba(96,84,255,0.22)] transition hover:bg-[#622BCF] hover:!text-white"
              >
                {item.registerLabel}
              </a>
            )}

            {item.isDeadline && (
              <span className="mt-4 inline-flex items-center rounded-full border border-[#8BB082]/40 bg-[#8BB082]/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[#171727]">
                Submission Deadline
              </span>
            )}
          </div>
        </div>

        <div className="shrink-0 rounded-full border border-[#E3E6F0] bg-white px-4 py-2 text-sm font-semibold text-[#171727] shadow-[0_10px_22px_rgba(23,23,39,0.05)]">
          {item.date}
        </div>
      </div>
    </div>
  );
}

export default function AgendaSection() {
  return (
    <section id="agenda" className="scroll-mt-24 space-y-5">
      {/* Competition journey */}
      <div className="rounded-[2rem] border border-[#E3E6F0] bg-[#F1F2FA] p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {agendaContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171727] md:text-4xl">
            {agendaContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5F6275] md:text-lg">
            {agendaContent.intro}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {agendaContent.timeline.map((item) => (
            <TimelineCard key={item.step} item={item} />
          ))}
        </div>
      </div>

      {/* Final Pitch Day agenda */}
      <div className="rounded-[2rem] border border-[#622BCF]/25 bg-[radial-gradient(circle_at_top_right,_rgba(96,84,255,0.24),_transparent_42%),linear-gradient(135deg,_#510A6B,_#171727)] p-6 text-white shadow-[0_30px_86px_rgba(81,10,107,0.25)] md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.4fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
              Final Day Programme
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {agendaContent.finalDayAgendaTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              University of Melbourne, Parkville Campus
            </p>
          </div>

          <div className="space-y-3">
            {agendaContent.finalDayAgenda.map((item) => (
              <div
                key={item.time}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
              >
                <div className="w-28 shrink-0">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/55">
                    {item.time}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submission + Pricing */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[2rem] border border-[#E3E6F0] bg-[#F1F2FA] p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] lg:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {agendaContent.submissionTitle}
          </p>

          <div className="mt-5">
            <h4 className="text-lg font-semibold text-[#171727]">
              Draft submission
            </h4>
            <div className="mt-3 space-y-3">
              {agendaContent.submissionRequirements.draft.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_42px_rgba(23,23,39,0.06)]"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#622BCF]" />
                  <p className="text-sm leading-6 text-[#171727]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-[#171727]">
              Final submission
            </h4>
            <div className="mt-3 space-y-3">
              {agendaContent.submissionRequirements.final.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_42px_rgba(23,23,39,0.06)]"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#622BCF]" />
                  <p className="text-sm leading-6 text-[#171727]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#E3E6F0] bg-white p-5 shadow-[0_18px_50px_rgba(23,23,39,0.06)]">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#5F6275]">
              Shortlisting
            </p>
            <h4 className="mt-3 text-base font-semibold text-[#171727]">
              {agendaContent.shortlisting.title}
            </h4>
            <p className="mt-2 text-sm leading-6 text-[#5F6275]">
              {agendaContent.shortlisting.description}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] lg:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {agendaContent.pricingTitle}
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-[#622BCF]/25 bg-[linear-gradient(135deg,_#510A6B,_#171727)] p-5 text-white shadow-[0_20px_60px_rgba(81,10,107,0.18)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {agendaContent.pricing.competitor.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {agendaContent.pricing.competitor.description}
                  </p>
                </div>
                <div className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#171727]">
                  {agendaContent.pricing.competitor.price}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E3E6F0] bg-[#F1F2FA] p-5">
              <h4 className="text-base font-semibold text-[#171727]">
                {agendaContent.pricing.audience.title}
              </h4>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-[#E3E6F0] bg-white px-4 py-3 text-sm font-medium text-[#171727] shadow-[0_12px_28px_rgba(23,23,39,0.05)]">
                  {agendaContent.pricing.audience.earlyBird}
                </div>
                <div className="rounded-2xl border border-[#E3E6F0] bg-white px-4 py-3 text-sm font-medium text-[#171727] shadow-[0_12px_28px_rgba(23,23,39,0.05)]">
                  {agendaContent.pricing.audience.regular}
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-sm text-[#5F6275]">
                <p>{agendaContent.pricing.audience.earlyBirdDeadline}</p>
                <p>{agendaContent.pricing.audience.regularDeadline}</p>
                <p className="text-[#5F6275]">
                  {agendaContent.pricing.audience.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
