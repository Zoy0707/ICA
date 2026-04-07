import { overviewContent } from "@/data/event";

function ThemeIcon({ kind }: { kind: string }) {
  const className = "h-6 w-6 text-[#622BCF]";
  switch (kind) {
    case "ai":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3v2M12 19v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "climate":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3a7 7 0 1 0 7 7h-2a5 5 0 1 1-5-5V3z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11v6M9 14h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "city":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 21h18M5 21V10l4-2v13M9 21V7l4-2v16M13 21V11l4 2v8M17 21V9l3 1v11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24">
      <div className="space-y-6">
        {/* Why Join — concise highlight section */}
        <div className="rounded-[2rem] border border-[#E3E6F0] bg-[#F7F8FC] p-6 shadow-[0_18px_48px_rgba(23,23,39,0.05)] md:p-8 lg:p-10">
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {overviewContent.whyJoinHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E3E6F0] bg-white p-5 shadow-[0_12px_28px_rgba(23,23,39,0.04)]"
              >
                <p className="text-sm font-semibold tracking-tight text-[#171727]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5F6275]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Competition theme — unchanged structure */}
        <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
              {overviewContent.competitionThemeEyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#171727] md:text-3xl">
              {overviewContent.competitionThemeTitle}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5F6275] md:text-base">
              {overviewContent.competitionThemeIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {overviewContent.themes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-3xl border border-[#E3E6F0] bg-[#F7F8FC] p-5 shadow-[0_16px_42px_rgba(23,23,39,0.05)] transition hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E3E6F0] bg-white shadow-sm">
                  <ThemeIcon kind={theme.icon} />
                </div>
                <h4 className="mt-4 text-lg font-semibold tracking-tight text-[#171727]">
                  {theme.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-[#5F6275]">
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
