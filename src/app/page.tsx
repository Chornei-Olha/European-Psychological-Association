// import Header from "@/app/components/general/Header";
import HeroSection from "@/app/components/general/HeroSection";
import News from "./components/general/News";
import UnderHero from "@/app/components/general/UnderHero";
import TwoColumnSection from "./components/general/TwoColumnSection";
import Questions from "@/app/components/general/Questions";
import BoardSlider from "@/app/components/general/BoardSlider";
import BoardSliders from "@/app/components/general/BoardSliders";
import BoardSlider3 from "@/app/components/general/BoardSlider3";
import VideoColumnSection from "./components/general/VideoColumnSection";
// import TypesCabinets from "./components/general/TypesCabinets";
import ContactForm from "./components/general/ContactForm";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "./components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader className="block md:hidden" />
      <HeroSection />
      <News />
      <UnderHero />
      <TwoColumnSection />
      <Questions />
      <BoardSlider />
      <BoardSliders />
      <BoardSlider3 />
      <VideoColumnSection />
      {/* <TypesCabinets /> */}
      <ContactForm />
      <Footer />
    </main>
  );
}
