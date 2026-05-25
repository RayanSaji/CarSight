import { HeroSection } from "@/components/home/HeroSection";
import { ListingInputForm } from "@/components/listing/ListingInputForm";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <div className="space-y-12">
          <HeroSection />
          <ListingInputForm />
        </div>
      </main>
    </div>
  );
}
