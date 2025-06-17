import Questions from "@/app/components/questions/Questions";
import Links from "@/app/components/questions/Links";
import Rules from "@/app/components/questions/Rules";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <Questions />
      <Links />
      <Rules />
      <Footer />
    </main>
  );
}
