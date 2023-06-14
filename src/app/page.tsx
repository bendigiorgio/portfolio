import DesignNew from "@/components/DesignNew";
import Expertise from "@/components/Expertise";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="text-primary flex w-screen max-w-full flex-col overflow-hidden bg-secondary">
      <Landing />
      <DesignNew />
      <Expertise />

      {/* <Projects /> */}
    </main>
  );
}
