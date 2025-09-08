import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Reliability from "@/components/Reliability";
import OrchestrateDelivaries from "@/components/OrchestrateDelivaries";
import TheChallenge from "@/components/TheChallenge";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <TheChallenge />
      <OrchestrateDelivaries />
      <Reliability />
      <Footer />
    </main>
  );
}
