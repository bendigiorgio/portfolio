"use client";
import { useNavbarStore } from "@/stores/navbarStore";
import { motion } from "framer-motion";
import { Carousel } from "@mantine/carousel";
const Design = () => {
  const toggleNav = useNavbarStore((state) => state.toggleNavbar);
  return (
    <motion.section
      onViewportEnter={() => toggleNav(true)}
      className="min-h-screen"
    >
      <div className="flex flex-col pt-32 xl:flex-row">
        <h1 className="whitespace-nowrap text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl">
          WEB DESIGN
        </h1>
        <p className="max-w-lg text-sm text-soft-peach-50/80 sm:max-w-xl lg:text-base xl:self-end">
          Designing with the end user and brand in mind, I make experiences that
          aren&apos;t just satisfying to view but also accentuate the
          brand&apos;s identity.
        </p>
      </div>

      <div>
        <Carousel></Carousel>
      </div>
    </motion.section>
  );
};

export default Design;
