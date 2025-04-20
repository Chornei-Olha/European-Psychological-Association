// import Header from "@/app/components/general/Header";
import HeroSection from "@/app/components/general/HeroSection";
import UnderHero from "@/app/components/general/UnderHero";
import TwoColumnSection from "./components/general/TwoColumnSection";
import Questions from "@/app/components/general/Questions";
import BoardSlider from "@/app/components/general/BoardSlider";
import VideoColumnSection from "./components/general/VideoColumnSection";
import TypesCabinets from "./components/general/TypesCabinets";
import ContactForm from "./components/general/ContactForm";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "./components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader className="block md:hidden" />
      <HeroSection />
      <UnderHero />
      <TwoColumnSection />
      <Questions />
      <BoardSlider />
      <VideoColumnSection />
      <TypesCabinets />
      <ContactForm />
      <Footer />
    </main>
  );
}
