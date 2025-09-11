import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheChallenge from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import Reliability from "@/components/Reliability";
import OrchestrateDelivaries from "@/components/OrchestrateDelivaries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <TheChallenge />
      <TheSolution />
      <OrchestrateDelivaries />
      <Reliability />
      <Footer />
    </main>
  );
}
