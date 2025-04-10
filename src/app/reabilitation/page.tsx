import TypesCabinets from "@/app/components/reabilitation/TypesCabinets";
import BoardSlider from "../components/reabilitation/BoardSlider";
import Footer from "@/app/components/general/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <TypesCabinets />
      <BoardSlider />
      <Footer />
    </main>
  );
}
