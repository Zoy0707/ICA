import Container from "@/components/layout/Container";
import BrandLogo from "@/components/ui/BrandLogo";
import { brandAssets, eventMeta, navItems } from "@/data/event";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#top" className="min-w-0">
          <BrandLogo
            name={brandAssets.icaLogo.name}
            shortName={brandAssets.icaLogo.shortName}
            src={brandAssets.icaLogo.src}
            compact
            hideTextOnMobile
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#logo-strip"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 md:inline-flex"
          >
            Trusted by
          </a>

          <a
            href={eventMeta.primaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium !text-white transition hover:opacity-90 hover:!text-white"
          >
            {eventMeta.primaryCta.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
