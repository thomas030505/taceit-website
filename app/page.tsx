import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import ITPortfolio from "@/components/ITPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Properties />
        <ITPortfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
