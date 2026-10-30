import Hero from "@/components/Hero";
import Familien from "@/components/Familien";
import Prosjekter from "@/components/Prosjekter";
import Kontakt from "@/components/Kontakt";
import Footer01 from "@/components/ui/footer-01";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Familien />
        <Prosjekter />
        <Kontakt />
      </main>
      <Footer01 />
    </>
  );
}
