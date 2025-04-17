import HeroSection from "../components/education/HeroSection";
import EducationSection from "../components/education/EducationSection";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <HeroSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
