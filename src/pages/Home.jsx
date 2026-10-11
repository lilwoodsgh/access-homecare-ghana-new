import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import SpecialtyServices from "../components/SpecialtyServices";
import CareCTA from "../components/CareCTA";
import MissionVision from "../components/MissionVision";
import OurTeam from "../components/OurTeam";
import TestimonialsSection from "../components/TestimonialsSection";
import ServiceAreas from "../components/ServiceAreas";
import RecentNews from "../components/RecentNews";
import HowCareWorks from "../components/HowCareWorks";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <AboutSection />
      <SpecialtyServices />
      <HowCareWorks />
      <MissionVision />
      <OurTeam />
      <TestimonialsSection />
      <ServiceAreas />
      <CareCTA />
      <RecentNews />
    </>
  );
}

export default Home;
