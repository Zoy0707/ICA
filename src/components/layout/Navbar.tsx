import Container from "@/components/layout/Container";
import { brandAssets, eventMeta, navItems } from "@/data/event";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E6F0]/80 bg-white/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a
          href="https://innovateconnectalliance.org/"
          target="_blank"
          rel="noreferrer"
          className="min-w-0"
        >
          <img
            src={brandAssets.icaLogo.src}
            alt={brandAssets.icaLogo.name}
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#5F6275] transition hover:text-[#171727]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={eventMeta.primaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#6054FF] px-5 py-2.5 text-sm font-medium !text-white shadow-[0_10px_26px_rgba(96,84,255,0.22)] transition hover:bg-[#622BCF] hover:!text-white"
          >
            {eventMeta.primaryCta.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
