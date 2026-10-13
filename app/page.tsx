import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import HowWeWork from "@/components/HowWeWork";
import Honoring from "@/components/Honoring";
import Specialties from "@/components/Specialties";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";
import SiteEnhancements from "@/components/SiteEnhancements";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <WhoWeHelp />
        <QuoteBanner />
        <Expertise />
        <HowWeWork />
        <Honoring />
        <Specialties />
        <AppointmentCTA />
      </main>
      <Footer />
      <SiteEnhancements />
    </>
  );
}
