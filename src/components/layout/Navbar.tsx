import Container from "@/components/layout/Container";
import { eventMeta, navItems } from "@/data/event";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase"
        >
          ICA Event
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={eventMeta.primaryCta.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          {eventMeta.primaryCta.label}
        </a>
      </Container>
    </header>
  );
}
