import TypesCabinets from "@/app/components/reabilitation/TypesCabinets";
// import BoardSlider from "../components/reabilitation/BoardSlider";
import PriceTable from "../components/reabilitation/PriceTable";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <TypesCabinets />
      {/* <BoardSlider /> */}
      <PriceTable />
      <Footer />
    </main>
  );
}
