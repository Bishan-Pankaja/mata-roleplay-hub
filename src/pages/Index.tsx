
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServerInfo } from "@/components/ServerInfo";
import { RulesSection } from "@/components/RulesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServerInfo />
        <RulesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
