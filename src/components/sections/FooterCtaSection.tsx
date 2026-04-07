import { footerContent } from "@/data/event";

export default function FooterCtaSection() {
  return (
    <section id="footer-cta" className="scroll-mt-24">
      <div className="rounded-[2rem] border border-[#622BCF]/25 bg-[radial-gradient(circle_at_top_left,_rgba(96,84,255,0.22),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(85,205,230,0.10),_transparent_46%),linear-gradient(135deg,_#510A6B,_#171727)] p-8 text-white shadow-[0_34px_96px_rgba(81,10,107,0.22)] md:p-10 lg:p-12">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/70">
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
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#171727] shadow-[0_16px_42px_rgba(0,0,0,0.22)] transition hover:bg-[#F1F2FA]"
            >
              {footerContent.primaryCta.label}
            </a>

            <a
              href={footerContent.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              {footerContent.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10 border-t border-white/12 pt-8">
            <p className="text-sm text-white/65">
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
