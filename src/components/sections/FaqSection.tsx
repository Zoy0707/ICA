import { faqContent } from "@/data/event";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            A few quick answers to help participants and audience members
            understand the event clearly.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqContent.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-slate-200 bg-slate-50/60 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950">
                <span>{item.question}</span>
                <span className="text-slate-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
