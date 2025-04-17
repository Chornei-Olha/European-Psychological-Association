import TypesCabinets from "@/app/components/reabilitation/TypesCabinets";
import BoardSlider from "../components/reabilitation/BoardSlider";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <TypesCabinets />
      <BoardSlider />
      <Footer />
    </main>
  );
}
