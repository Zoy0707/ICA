type SectionPlaceholderProps = {
  id: string;
  title: string;
  description: string;
};

export default function SectionPlaceholder({
  id,
  title,
  description,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Planned Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">{description}</p>
        </div>

        <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
          Build in next phase
        </div>
      </div>
    </section>
  );
}
