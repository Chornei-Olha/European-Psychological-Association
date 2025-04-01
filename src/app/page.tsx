import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import UnderHero from "@/app/components/UnderHero";
import { TwoColumnSection } from "./components/TwoColumnSection";
import Questions from "@/app/components/Questions";
import BoardSlider from "@/app/components/BoardSlider";
import Footer from "@/app/components/Footer";
import VideoColumnSection from "./components/VideoColumnSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <Header />
      <HeroSection />
      <UnderHero />
      <TwoColumnSection />
      <Questions />
      <BoardSlider />
      <VideoColumnSection />
      <Footer />
    </main>
  );
}
