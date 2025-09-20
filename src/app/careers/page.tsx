import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <main className="bg-background min-h-screen w-full">
      <Header />
      <Careers />
      <Footer withBar={false} />
    </main>
  );
}
