import { organiserContent } from "@/data/event";

export default function OrganiserSection() {
  return (
    <section id="organiser" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {organiserContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {organiserContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {organiserContent.description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              {organiserContent.host.label}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              {organiserContent.host.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              {organiserContent.host.description}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              {organiserContent.organiser.label}
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
              {organiserContent.organiser.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 md:text-base">
              {organiserContent.organiser.description}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Community Support
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {organiserContent.supporters.map((supporter) => (
              <div
                key={supporter.name}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-950">
                  {supporter.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {supporter.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-slate-600">
            {organiserContent.morePartnersNote}
          </p>
        </div>
      </div>
    </section>
  );
}
