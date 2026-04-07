import { faqContent } from "@/data/event";

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-[#E3E6F0] bg-white p-6 shadow-[0_22px_64px_rgba(23,23,39,0.06)] md:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5F6275]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171727] md:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5F6275] md:text-lg">
            A few quick answers to help participants and audience members
            understand the event clearly.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqContent.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-[#E3E6F0] bg-[#F1F2FA] p-5 shadow-[0_16px_42px_rgba(23,23,39,0.05)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#171727]">
                <span>{item.question}</span>
                <span className="text-[#622BCF] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6275] md:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
