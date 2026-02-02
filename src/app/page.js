import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <HeroSection />
      </main>
    </>
  );
}
