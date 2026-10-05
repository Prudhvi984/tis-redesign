import Awards from "@/components/Awards";
import Enquire from "@/components/Enquire";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MotionProvider from "@/components/MotionProvider";
import Personalities from "@/components/Personalities";
import Rankings from "@/components/Rankings";
import Reviews from "@/components/Reviews";
import Sports from "@/components/Sports";
import Stats from "@/components/Stats";
import Voices from "@/components/Voices";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <MotionProvider>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Stats />
        <Sports />
        <Rankings />
        <Voices />
        <Personalities />
        <Awards />
        <Reviews />
        <Enquire />
      </main>
      <Footer />
    </MotionProvider>
  );
}
