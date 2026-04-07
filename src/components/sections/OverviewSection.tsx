import { highlightsContent, overviewContent } from "@/data/event";

export default function OverviewSection() {
  const standoutItems = highlightsContent.items.slice(0, 3);

  return (
    <section id="overview" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            {overviewContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171727] md:text-4xl">
            {overviewContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5F6275] md:text-lg">
            {overviewContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-[#E3E6F0] bg-[#F1F2FA] p-6">
              <h3 className="text-xl font-semibold tracking-tight text-[#171727]">
                {overviewContent.audienceTitle}
              </h3>

              <div className="mt-5 space-y-3">
                {overviewContent.audience.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_42px_rgba(23,23,39,0.06)]"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#6054FF]" />
                    <p className="text-sm leading-6 text-[#171727] md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#E3E6F0] bg-[#F1F2FA] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
                {highlightsContent.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#171727]">
                {highlightsContent.title}
              </h3>

              <div className="mt-5 grid gap-3">
                {standoutItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E3E6F0] bg-white px-5 py-4 shadow-[0_16px_42px_rgba(23,23,39,0.06)]"
                  >
                    <p className="text-sm font-semibold tracking-tight text-[#171727]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5F6275] md:text-base">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[1.75rem] border border-[#622BCF]/25 bg-[radial-gradient(circle_at_top_right,_rgba(96,84,255,0.24),_transparent_42%),linear-gradient(135deg,_#510A6B,_#171727)] p-6 text-white shadow-[0_26px_70px_rgba(81,10,107,0.18)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                {overviewContent.formatTitle}
              </p>

              <div className="mt-5 space-y-3">
                {overviewContent.participation.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-sm leading-6 text-white/90 md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)]">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
                  {overviewContent.themesTitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#171727]">
                  Four focus areas
                </h3>
              </div>

              <p className="text-sm text-[#5F6275]">
                {overviewContent.themesSubtitle}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {overviewContent.themes.map((theme) => (
                <div
                  key={theme.title}
                  className="rounded-3xl border border-[#E3E6F0] bg-[#F7F8FC] p-5 shadow-[0_16px_42px_rgba(23,23,39,0.05)] transition hover:-translate-y-0.5"
                >
                  <div className="inline-flex rounded-full border border-[#E3E6F0] bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#5F6275]">
                    Theme
                  </div>
                  <h4 className="mt-4 text-xl font-semibold tracking-tight text-[#171727]">
                    {theme.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-[#5F6275] md:text-base">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
