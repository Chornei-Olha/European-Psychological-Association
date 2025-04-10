import Questions from "@/app/components/questions/Questions";
import Rules from "@/app/components/questions/Rules";
import Footer from "@/app/components/general/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <Questions />
      <Rules />
      <Footer />
    </main>
  );
}
