"use client";

import { useNavbarStore } from "@/stores/navbarStore";
import { motion } from "framer-motion";
import { useRef } from "react";

import {
  SiNextdotjs,
  SiPrisma,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import BlackBoxMockup from "../../public/mockups/blackboxMockup.png";
import ShukkinMockup from "../../public/mockups/shukkinMockup.png";
import MaisonMockup from "../../public/mockups/maisonMockup.png";
import SanityLogo from "./SanityLogo";
import MotionProjectCard from "./ProjectCard";

const DesignNew = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleNav = useNavbarStore((state) => state.toggleNavbar);

  const sectionVariants = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      onViewportEnter={() => toggleNav(true)}
      className="relative min-h-screen w-full overflow-hidden py-36"
    >
      <div className="m-auto flex w-fit flex-col items-center space-x-3 md:flex-row">
        <div className="flex h-full flex-col space-y-3 self-start md:w-24">
          <h1 className="flex flex-row font-inter text-6xl font-semibold uppercase text-harvest-gold md:w-24 md:text-8xl">
            <span className="origin-bottom-left md:-translate-y-24 md:rotate-90">
              Design
            </span>
            <span className="mx-3 flex md:hidden">/</span>
          </h1>
          <h1 className="flex flex-row pb-7 font-inter text-6xl font-semibold uppercase text-harvest-gold md:hidden">
            <span className="flex md:hidden">Development</span>
          </h1>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 md:w-9/12 xl:min-w-fit"
        >
          {/* BlackBox */}
          <MotionProjectCard
            custom={-500}
            variants={cardVariants}
            title="Blackbox Tattoo"
            description="An independant tattoo artist based in Fukuoka, Japan."
            image={BlackBoxMockup}
            stack={[
              <SiTypescript className="h-7 w-7" key={"icon1"} />,
              <SiNextdotjs className="h-7 w-7" key={"icon2"} />,
              <SiPrisma className="h-7 w-7" key={"icon3"} />,
              <SiStripe className="h-7 w-7" key={"icon4"} />,
              <SanityLogo className="h-7 w-7" key="icon5" />,
              <SiTailwindcss className="h-7 w-7" key={"icon6"} />,
            ]}
            key="blackbox"
          />
          {/* Shukkin */}
          <MotionProjectCard
            custom={500}
            variants={cardVariants}
            title="Shukkin"
            description="A simple, no fluff shift management application for small businesses."
            image={ShukkinMockup}
            stack={[
              <SiTypescript className="h-7 w-7" key={"icon7"} />,
              <SiNextdotjs className="h-7 w-7" key={"icon8"} />,
              <SiSupabase className="h-7 w-7" key={"icon9"} />,
              <SiPrisma className="h-7 w-7" key={"icon10"} />,
              <SiStripe className="h-7 w-7" key={"icon11"} />,
              <SiTailwindcss className="h-7 w-7" key={"icon12"} />,
            ]}
            direction="right"
            key="shukkin"
          />

          {/* Maison Di */}
          <MotionProjectCard
            custom={-500}
            variants={cardVariants}
            title="Maison Di Giorgio"
            description="My design agency"
            image={MaisonMockup}
            stack={[
              <SiTypescript className="h-7 w-7" key={"icon13"} />,
              <SiNextdotjs className="h-7 w-7" key={"icon14"} />,
              <SiTailwindcss className="h-7 w-7" key={"icon15"} />,
            ]}
          />
        </motion.div>
        <div className=" hidden h-full self-end md:flex md:w-24">
          <h1 className="flex font-inter  text-8xl font-semibold uppercase text-harvest-gold md:w-24">
            <span className="origin-top-left md:-translate-y-[633px] md:translate-x-24 md:rotate-90">
              Development
            </span>
          </h1>
        </div>
      </div>
    </motion.section>
  );
};

export default DesignNew;
