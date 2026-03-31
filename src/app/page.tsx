import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import AgendaSection from "@/components/sections/AgendaSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterCtaSection from "@/components/sections/FooterCtaSection";
import FormSection from "@/components/sections/FormSection";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import JudgesSection from "@/components/sections/JudgesSection";
import OrganiserSection from "@/components/sections/OrganiserSection";
import OverviewSection from "@/components/sections/OverviewSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,_#ffffff,_#f8fafc)] text-slate-900">
      <Navbar />
      <HeroSection />

      <Container className="space-y-6 py-16 md:space-y-8 md:py-20">
        <OverviewSection />
        <HighlightsSection />
        <AgendaSection />
        <JudgesSection />
        <FormSection />
        <FaqSection />
        <OrganiserSection />
        <FooterCtaSection />
      </Container>
    </main>
  );
}
