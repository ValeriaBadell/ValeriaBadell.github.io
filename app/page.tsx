import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="wrap">
          <Stats />
          <Experience />
          <Stack />
          <About />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
