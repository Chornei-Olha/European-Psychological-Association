import HeroSection from "../components/code/HeroSection";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <HeroSection />
      <Footer />
    </main>
  );
}
