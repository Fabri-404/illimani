import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { MissionVision } from "@/components/sections/MissionVision";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Projects />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
