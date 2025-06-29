import Texts from "@/app/components/content/Texts";
import Video from "@/app/components/content/Video";
import Footer from "@/app/components/general/Footer";
import SmallHeader from "../components/general/SmallHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bg">
      <SmallHeader />
      <Texts />
      <Video />
      <Footer />
    </main>
  );
}
