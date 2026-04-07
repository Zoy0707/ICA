import { infoSessionsContent } from "@/data/event";
import { isCtaLive } from "@/data/ctaLinks";

type SessionCardProps = {
  badge: string;
  title: string;
  date: string;
  time: string;
  format: string;
  description: string;
  registerHref: string;
  registerLinkPlaceholder: string;
};

function SessionCard({
  badge,
  title,
  date,
  time,
  format,
  description,
  registerHref,
  registerLinkPlaceholder,
}: SessionCardProps) {
  const hasRealLink = isCtaLive(registerHref);

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
          {badge}
        </div>

        <div className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Team-Up
        </div>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
        {description}
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Date
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-950">{date}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Time
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-950">{time}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Format
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-950">{format}</p>
        </div>
      </div>

      <div className="mt-6">
        {hasRealLink ? (
          <a
            href={registerHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium !text-white transition hover:opacity-90 hover:!text-white"
          >
            Register for this session
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-slate-950/80 px-6 py-3 text-sm font-medium text-white opacity-80"
          >
            Coming Soon
          </button>
        )}

        {!hasRealLink && registerLinkPlaceholder ? (
          <p className="mt-3 text-xs leading-5 text-slate-500">
            Placeholder link: {registerLinkPlaceholder}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function InfoSessionsSection() {
  return (
    <section id="info-sessions" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              {infoSessionsContent.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              {infoSessionsContent.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              {infoSessionsContent.description}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                {infoSessionsContent.helperTitle}
              </p>

              <div className="mt-4 space-y-3">
                {infoSessionsContent.helperPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50/70 px-4 py-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                    <p className="text-sm leading-6 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {infoSessionsContent.sessions.map((session) => (
              <SessionCard key={session.badge} {...session} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
