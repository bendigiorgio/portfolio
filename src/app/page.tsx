import Artwork from "@/components/Artwork";
import Design from "@/components/Design";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="text-primary flex max-w-full flex-col bg-secondary">
      <Landing />
      <Design />
      <Artwork />
    </main>
  );
}
