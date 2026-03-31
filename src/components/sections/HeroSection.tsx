import Container from "@/components/layout/Container";
import { eventMeta } from "@/data/event";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-200/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.10),_transparent_28%)]" />

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-600 backdrop-blur">
              University-backed innovation competition
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl md:leading-[1.05]">
              {eventMeta.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {eventMeta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                {eventMeta.date}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                {eventMeta.time}
              </span>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
                {eventMeta.venue}
              </span>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-amber-700">
                {eventMeta.venueNote}
              </span>
            </div>

            <div className="mt-8 space-y-2 text-sm md:text-base">
              <p className="font-medium text-slate-900">{eventMeta.hostedBy}</p>
              <p className="text-slate-700">{eventMeta.deliveredBy}</p>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={eventMeta.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {eventMeta.primaryCta.label}
              </a>

              <a
                href={eventMeta.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                {eventMeta.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-sm font-medium text-slate-900">
                Community supporters
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {eventMeta.supporters.map((supporter) => (
                  <span
                    key={supporter}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
                  >
                    {supporter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Key information
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500">
                  Competition registration deadline
                </p>
                <p className="mt-1 text-base font-semibold text-slate-950">
                  {eventMeta.competitionDeadline}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Format</p>
                <p className="mt-1 text-base font-semibold text-slate-950">
                  Open to individuals and teams
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Team formation support</p>
                <p className="mt-1 text-base font-semibold text-slate-950">
                  Available through the Team-Up Info Session
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Final Day</p>
                <p className="mt-1 text-base font-semibold text-slate-950">
                  Live pitches, judges, networking, and showcase
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
