import { footerContent } from "@/data/event";

export default function FooterCtaSection() {
  return (
    <section id="footer-cta" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-slate-900 bg-slate-950 p-8 text-white shadow-sm md:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
            {footerContent.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {footerContent.title}
          </h2>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={footerContent.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
            >
              {footerContent.primaryCta.label}
            </a>

            <a
              href={footerContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-white/5"
            >
              {footerContent.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-400">
              {footerContent.contactTitle}
            </p>
            <a
              href={`mailto:${footerContent.contactEmail}`}
              className="mt-2 block text-base font-medium text-white underline-offset-4 hover:underline"
            >
              {footerContent.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
