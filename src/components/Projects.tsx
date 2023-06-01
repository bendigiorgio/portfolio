import { SiGithub, SiPostgresql, SiPython } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="min-h-screen">
      <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-gray-200 sm:text-4xl">
        Other Projects and Expertise
      </h3>
      <div>
        <h4>Other Languages/Frameworks/Tools</h4>
        <div className="flex flex-row">
          <SiPostgresql className="h-10 w-10" />
          <TbBrandGolang className="h-10 w-10" />
          <SiPython className="h-10 w-10" />
          <SiGithub className="h-10 w-10" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
