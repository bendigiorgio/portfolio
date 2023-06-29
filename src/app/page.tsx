import DesignNew from "@/components/DesignNew";
import Expertise from "@/components/Expertise";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex w-screen max-w-full flex-col overflow-hidden bg-background text-foreground">
      <Landing />
      <DesignNew />
      <Expertise />
    </main>
  );
}
