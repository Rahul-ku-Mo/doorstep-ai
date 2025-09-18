import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheChallenge from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import OrchestrateDelivaries from "@/components/OrchestrateDelivaries";
import Footer from "@/components/Footer";
import Integration from "@/components/Integration";

export default function Home() {
  return (
    <main className="bg-background min-h-screen w-full">
      <Header />
      <Hero />
      <TheChallenge />
      <TheSolution />
      <OrchestrateDelivaries />
      <Integration />
      <Footer />
    </main>
  );
}
