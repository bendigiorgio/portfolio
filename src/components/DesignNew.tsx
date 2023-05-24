"use client";
import { useNavbarStore } from "@/stores/navbarStore";
import { motion } from "framer-motion";
import { useRef } from "react";

import {
  SiDocker,
  SiFastapi,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import BlackBoxMockup from "../../public/mockups/blackboxMockup.png";
import ShukkinMockup from "../../public/mockups/shukkinMockup.png";
import MaisonMockup from "../../public/mockups/maisonMockup.png";
import EnhanceMockup from "../../public/mockups/enhanceMockup.png";
import SanityLogo from "./SanityLogo";
import MotionProjectCard from "./ProjectCard";

const DesignNew = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleNav = useNavbarStore((state) => state.toggleNavbar);

  const cardVariants = {
    //esling-disable-next-line
    //@ts-ignore  //! Use only numbers
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
        <div className="flex flex-col space-y-6 md:w-9/12 xl:min-w-fit">
          {/* BlackBox */}
          <MotionProjectCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={-200}
            variants={cardVariants}
            title="Blackbox Tattoo"
            description={
              <>
                An independant tattoo artist based in Fukuoka, Japan. He has a
                very unique style and I used this style as inspiration for the
                overall feel of the website. <br /> He also had the need for an
                online store to sell other goods that he makes, including
                clothing and artwork. The store was built using Sanity.io to
                create a fully custom CMS within the website and Stripe for
                payments.
              </>
            }
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={200}
            variants={cardVariants}
            title="Shukkin"
            description={
              <>
                A simple, no fluff shift management application for small
                businesses. After experiencing how difficult it was to organise
                rosters when I was in managerial positions I sought to create an
                easy to use solution.
                <br />
                My aim was to create a website that is easy to use for not only
                the company making the shift schedule, but also for the
                employees who will be using it.
              </>
            }
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={-200}
            variants={cardVariants}
            title="Maison Di Giorgio"
            description={
              <>
                My design agency. The focus was on using animation to increase
                our potential client&apos;s intrigue and interest in our
                agency/website.
              </>
            }
            image={MaisonMockup}
            stack={[
              <SiTypescript className="h-7 w-7" key={"icon13"} />,
              <SiNextdotjs className="h-7 w-7" key={"icon14"} />,
              <SiTailwindcss className="h-7 w-7" key={"icon15"} />,
            ]}
          />
          <MotionProjectCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={200}
            variants={cardVariants}
            title="Image Enhancer"
            direction="right"
            description={
              <>
                A Python based API which uses machine learning to enhance the
                quality of images. It uses a GAN to generate a new image and can
                be easily hosted using a Docker container.
              </>
            }
            image={EnhanceMockup}
            stack={[
              <SiPython className="h-7 w-7" key={"icon16"} />,
              <SiFastapi className="h-7 w-7" key={"icon17"} />,
              <SiDocker className="h-7 w-7" key={"icon18"} />,
            ]}
          />
        </div>
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
