// import Header from "@/app/components/Header";
import HeroSection from "@/app/components/about/HeroSection";
import WhiteSection from "@/app/components/about/WhiteSection";
import BlueSection from "../components/about/BlueSection";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <HeroSection />
      <WhiteSection />
      <BlueSection />
      <Footer />
    </main>
  );
}
