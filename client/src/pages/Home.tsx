import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DirectorMessage from "@/components/sections/DirectorMessage";
import Courses from "@/components/sections/Courses";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <DirectorMessage />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
