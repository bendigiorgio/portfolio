"use client";
import { useNavbarStore } from "@/stores/navbarStore";
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel } from "@mantine/carousel";
import Card from "./Card";
import { useRef } from "react";
const Design = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleNav = useNavbarStore((state) => state.toggleNavbar);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const opacityDev = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const yPosDes = useTransform(scrollYProgress, [0, 0.525, 0.75], [0, 0, -255]);

  const yPosDev = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0, -255]);

  return (
    <motion.section
      ref={sectionRef}
      onViewportEnter={() => toggleNav(true)}
      className="relative h-[300vh] w-full"
    >
      <motion.div
        style={{ y: yPosDes }}
        className="sticky top-0 flex flex-col pt-32 xl:flex-row"
      >
        <h1 className="whitespace-nowrap font-inter text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl">
          WEB DESIGN
        </h1>
        <p className="max-w-lg text-sm text-soft-peach-50/80 sm:max-w-xl lg:text-base xl:self-end">
          Designing with the end user and brand in mind, I make experiences that
          aren&apos;t just satisfying to view but also accentuate the
          brand&apos;s identity.
        </p>
      </motion.div>
      <motion.div style={{ y: yPosDev }} className="sticky top-1/3">
        <div className="mt-10 flex w-full grow items-center">
          <Carousel
            className="flex h-full w-full max-w-full items-center justify-center"
            align="start"
            loop
            height={"498px"}
            slideGap={"md"}
            slideSize={"25%"}
          >
            <Carousel.Slide>
              <Card
                description="t"
                image="/logoPng.png"
                title="Blackbox Tattoo"
                stack={{
                  frontend: ["React", "Tailwindcss"],
                  backend: [
                    "Nextjs",
                    "Zustand",
                    "Prisma",
                    "Nextauth",
                    "Sanity",
                    "Stripe",
                  ],
                }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Card
                description="t"
                image="/logoPng.png"
                title="Maison Di Giorgio"
                stack={{
                  frontend: ["React", "Tailwindcss", "Framer Motion"],
                  backend: ["Nextjs", "Zustand"],
                }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Card
                description="A roster management web application for small businesses."
                image="/logoPng.png"
                title="Shukkin"
                stack={{
                  frontend: ["React", "Tailwindcss", "Mantine"],
                  backend: [
                    "Nextjs",
                    "Zustand",
                    "Prisma",
                    "Nextauth",
                    "Postgresql",
                    "Stripe",
                  ],
                }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Card
                description="t"
                image="/logoPng.png"
                title="Darkly Labs"
                stack={{
                  frontend: ["React", "Tailwindcss", "Mantine"],
                  backend: [
                    "Nextjs",
                    "Zustand",
                    "Prisma",
                    "Nextauth",
                    "Postgresql",
                    "Graphql",
                    "Wordpress",
                  ],
                }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Card
                description="t"
                image="/logoPng.png"
                title="Spotify Clone"
                stack={{
                  frontend: ["React", "Tailwindcss"],
                  backend: [
                    "Nextjs",
                    "Recoil",
                    "Prisma",
                    "Nextauth",
                    "Spotify API",
                  ],
                }}
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: opacityDev, y: yPosDev }}
        className={`sticky top-0 flex grow flex-col-reverse justify-end pt-32  mix-blend-difference xl:flex-row`}
      >
        <p className="max-w-lg text-right text-sm text-soft-peach-50/80 sm:max-w-xl lg:text-base xl:self-end">
          Using the latest technology
        </p>
        <h1 className="whitespace-nowrap font-inter text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl">
          DEVELOPMENT
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default Design;
