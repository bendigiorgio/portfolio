import Artwork from "@/components/Artwork";

import DesignNew from "@/components/DesignNew";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="text-primary flex max-w-full flex-col bg-secondary">
      <Landing />
      <DesignNew />
      <Artwork />
    </main>
  );
}
