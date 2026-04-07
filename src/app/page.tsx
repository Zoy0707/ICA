import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import AgendaSection from "@/components/sections/AgendaSection";
import FaqSection from "@/components/sections/FaqSection";
import FooterCtaSection from "@/components/sections/FooterCtaSection";
import HeroSection from "@/components/sections/HeroSection";
import HighlightsSection from "@/components/sections/HighlightsSection";
import InfoSessionsSection from "@/components/sections/InfoSessionsSection";
import JudgesSection from "@/components/sections/JudgesSection";
import OrganiserSection from "@/components/sections/OrganiserSection";
import OverviewSection from "@/components/sections/OverviewSection";
import PastEventsSection from "@/components/sections/PastEventsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F8FC] text-[#171727]">
      <Navbar />
      <HeroSection />

      <Container className="space-y-6 py-10 md:space-y-8 md:py-12">
        <InfoSessionsSection />
        <OverviewSection />
        <HighlightsSection />
        <AgendaSection />
        <JudgesSection />
        <PastEventsSection />
        <FaqSection />
        <OrganiserSection />
        <FooterCtaSection />
      </Container>
    </main>
  );
}
