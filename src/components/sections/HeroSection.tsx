"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import { brandAssets, eventMeta, heroV2Content } from "@/data/event";
import { CTA_LINKS } from "@/data/ctaLinks";

function LogoMark({
  src,
  alt,
  shortName,
}: {
  src: string;
  alt: string;
  shortName: string;
}) {
  return (
    <div className="flex items-center">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-24 w-auto object-contain md:h-28"
        />
      ) : (
        <span className="text-sm font-semibold tracking-tight text-[#171727]">
          {shortName}
        </span>
      )}
    </div>
  );
}

export default function HeroSection() {
  const visuals = useMemo(
    () =>
      heroV2Content.visualCards.map((card) => ({
        title: card.title,
        subtitle: card.subtitle,
        src: card.src,
        placeholder: card.placeholder,
      })),
    [],
  );
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);

  useEffect(() => {
    if (visuals.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveVisualIndex((prev) => (prev + 1) % visuals.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [visuals.length]);

  const activeVisual = visuals[activeVisualIndex] ?? visuals[0];
  const quickHighlights = [
    { title: "Live finalist pitches", description: "Watch top teams present in person" },
    {
      title: "Speakers and insights",
      description: "Hear guest perspectives from industry and academia",
    },
    {
      title: "Awards and networking",
      description: "Join the celebration and connect with the community",
    },
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E3E6F0] bg-[radial-gradient(circle_at_top_left,_rgba(96,84,255,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(98,43,207,0.14),_transparent_30%),linear-gradient(to_bottom,_#F7F8FC,_#F1F2FA)]"
    >
      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="flex max-w-3xl flex-col">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#5F6275]">
              {heroV2Content.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#171727] md:text-6xl md:leading-[1.05]">
              {eventMeta.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5F6275] md:text-xl">
              {eventMeta.subtitle}
            </p>

            {/* Meta line */}
            <p className="mt-5 text-sm text-[#5F6275]">
              <span className="font-medium text-[#171727]">
                {eventMeta.date}
              </span>
              {" · "}
              {eventMeta.time}
              {" · "}
              {eventMeta.venue}
              {" · "}
              <span className="italic">{eventMeta.venueSuffix}</span>
            </p>

            <p className="mt-2 text-sm font-medium text-[#171727]">
              {eventMeta.hostedBy}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={eventMeta.primaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#6054FF] px-6 py-3 text-sm font-medium !text-white shadow-[0_14px_34px_rgba(96,84,255,0.24)] transition hover:bg-[#622BCF] hover:!text-white"
              >
                {eventMeta.primaryCta.label}
              </a>

              <a
                href={eventMeta.secondaryCta.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#E3E6F0] bg-white px-6 py-3 text-sm font-medium text-[#171727] shadow-[0_10px_26px_rgba(23,23,39,0.05)] transition hover:border-[#622BCF]/30 hover:bg-[#F1F2FA]"
              >
                {eventMeta.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickHighlights.map((point) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-[#E3E6F0] bg-white/80 p-4 shadow-[0_14px_34px_rgba(23,23,39,0.06)] backdrop-blur"
                >
                  <p className="text-sm font-semibold tracking-tight text-[#171727]">
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5F6275]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex w-full flex-col">
            {/* Institutional logos — audience column, aligned with participant hero */}
            <div className="mb-4 flex items-center gap-6 py-2 md:mb-5">
              <LogoMark
                src={brandAssets.feitLogo.src}
                alt={brandAssets.feitLogo.name}
                shortName={brandAssets.feitLogo.shortName}
              />
              <div className="h-12 w-px bg-[#E3E6F0]" />
              <LogoMark
                src={brandAssets.icaLogo.src}
                alt={brandAssets.icaLogo.name}
                shortName={brandAssets.icaLogo.shortName}
              />
            </div>

            <div className="flex w-full flex-col rounded-[2rem] border border-[#E3E6F0] bg-white/80 p-4 shadow-[0_26px_70px_rgba(23,23,39,0.10)] backdrop-blur md:p-5">
              {/* Visual carousel */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E3E6F0] bg-white shadow-[0_18px_50px_rgba(23,23,39,0.06)]">
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(23,23,39,0.22),_transparent_55%)]" />
                  {activeVisual?.src ? (
                    <img
                      key={`${activeVisual.src}-${activeVisualIndex}`}
                      src={activeVisual.src}
                      alt={activeVisual.title}
                      className="h-[320px] w-full object-cover md:h-[360px]"
                    />
                  ) : (
                    <div className="h-[320px] w-full bg-[#F1F2FA] md:h-[360px]" />
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                    {activeVisual?.title ?? ""}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {activeVisual?.subtitle ?? ""}
                  </p>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveVisualIndex((prev) =>
                        visuals.length ? (prev - 1 + visuals.length) % visuals.length : 0,
                      )
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveVisualIndex((prev) =>
                        visuals.length ? (prev + 1) % visuals.length : 0,
                      )
                    }
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/15"
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>

                <div className="absolute bottom-4 left-5 flex items-center gap-1.5">
                  {visuals.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveVisualIndex(i)}
                      className={`h-1.5 rounded-full transition ${
                        i === activeVisualIndex ? "w-6 bg-white/90" : "w-2.5 bg-white/35"
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Audience CTA card */}
              <div className="mt-4 flex flex-col gap-4 rounded-[1.5rem] border border-[#622BCF]/20 bg-[linear-gradient(135deg,_#510A6B,_#171727)] px-5 py-4 text-white shadow-[0_18px_46px_rgba(81,10,107,0.25)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 max-w-[38ch]">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                      Final Pitch Day · Audience
                    </p>
                    <p className="mt-2 text-lg font-semibold tracking-tight text-white">
                      Watch finalist pitches, awards, and networking.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Register to attend the live showcase and support teams on
                      the day.
                    </p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-right text-xs leading-snug text-white/85">
                    <p className="font-semibold tracking-tight text-white/90">
                      {eventMeta.date}
                    </p>
                    <p className="mt-1 whitespace-nowrap tabular-nums">
                      {eventMeta.time}
                    </p>
                  </div>
                </div>
                <a
                  href={CTA_LINKS.audience}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center self-start whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-medium !text-[#510A6B] shadow-[0_16px_42px_rgba(0,0,0,0.18)] transition hover:bg-[#F1F2FA]"
                >
                  Buy Pitch Day Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
