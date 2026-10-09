import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Technology } from "@/components/Technology";
import { Platform } from "@/components/Platform";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Technology />
        <Platform />
        <Careers />
      </main>
      <Footer />
    </>
  );
}
