import JudgeImageWithFallback from "@/components/judges/JudgeImageWithFallback";
import { judgesContent } from "@/data/event";

const JUDGE_IMAGE_FALLBACK = "/judges/placeholder.jpeg";

type AdditionalJudgeCardProps = {
  name: string;
  subtitle: string;
  badge?: string;
  imageSrc?: string;
};

function AdditionalJudgeCard({
  name,
  subtitle,
  badge,
  imageSrc = "",
}: AdditionalJudgeCardProps) {
  const src =
    imageSrc && imageSrc.trim().length > 0 ? imageSrc : JUDGE_IMAGE_FALLBACK;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
        <JudgeImageWithFallback
          src={src}
          alt={name}
          className="h-full w-full object-cover"
          fallbackSrc={JUDGE_IMAGE_FALLBACK}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold tracking-tight text-slate-950">
          {name}
        </h3>
        <p className="mt-2 whitespace-pre-line text-sm leading-snug text-slate-600">
          {subtitle}
        </p>
        {badge ? (
          <p className="mt-3 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
            {badge}
          </p>
        ) : null}
      </div>
    </article>
  );
}

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
          <JudgeImageWithFallback
            src={imageSrc}
            alt={name}
            className="h-64 w-full rounded-[1.25rem] object-cover"
            fallbackSrc={JUDGE_IMAGE_FALLBACK}
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

        <div className="mt-3 space-y-0.5">
          {title.split("\n").map((line, i) => (
            <p key={i} className="text-sm leading-6 text-slate-600">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">
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

        {judgesContent.judges.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {judgesContent.judges.map((judge) => (
              <JudgeCard key={judge.name} {...judge} />
            ))}
          </div>
        ) : null}

        <div
          className={
            judgesContent.judges.length > 0
              ? "mt-12 border-t border-slate-200 pt-10"
              : "mt-10"
          }
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {judgesContent.additionalJudges.map((judge) => (
              <AdditionalJudgeCard
                key={judge.name}
                name={judge.name}
                subtitle={judge.subtitle}
                badge={judge.badge}
                imageSrc={judge.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
