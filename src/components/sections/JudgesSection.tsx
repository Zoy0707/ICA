import { judgesContent } from "@/data/event";

export default function JudgesSection() {
  return (
    <section id="judges" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Judges
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Meet the confirmed judging panel
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {judgesContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {judgesContent.judges.map((judge) => (
            <div
              key={judge.name}
              className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-base font-semibold text-slate-900 shadow-sm">
                {judge.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                {judge.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {judge.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
          {judgesContent.note}
        </div>
      </div>
    </section>
  );
}
