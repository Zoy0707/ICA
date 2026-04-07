import { judgesContent } from "@/data/event";

type JudgeCardProps = {
  name: string;
  title: string;
  expertise: string;
  imageSrc?: string;
  imagePlaceholder: string;
};

function JudgeCard({
  name,
  title,
  expertise,
  imageSrc = "",
  imagePlaceholder,
}: JudgeCardProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-[linear-gradient(to_bottom_right,_#f8fafc,_#ffffff)] p-4">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="h-64 w-full rounded-[1.25rem] object-cover"
          />
        ) : (
          <div className="flex h-64 w-full flex-col justify-between rounded-[1.25rem] border border-dashed border-slate-300 bg-white/80 p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-base font-semibold text-slate-900 shadow-sm">
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Placeholder
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {imagePlaceholder}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">{title}</p>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
            Expertise
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{expertise}</p>
        </div>
      </div>
    </div>
  );
}

export default function JudgesSection() {
  return (
    <section id="judges" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(to_bottom_right,_#ffffff,_#f8fafc)] p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            {judgesContent.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {judgesContent.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            {judgesContent.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {judgesContent.judges.map((judge) => (
            <JudgeCard key={judge.name} {...judge} />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm text-amber-800">
          {judgesContent.note}
        </div>
      </div>
    </section>
  );
}
