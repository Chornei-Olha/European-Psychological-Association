import HeroSection from "../components/education/HeroSection";
import EducationSection from "../components/education/EducationSection";
import Footer from "@/app/components/general/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <HeroSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
