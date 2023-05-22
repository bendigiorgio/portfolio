"use client";
import { useNavbarStore } from "@/stores/navbarStore";
import { motion, useScroll, useTransform } from "framer-motion";
import { Carousel } from "@mantine/carousel";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Blackbox Tattoo",
    image: "/mockups/blackboxMockup.png",
    description: "t",
    stack: {
      frontend: ["React", "Tailwindcss"],
      backend: ["Nextjs", "Zustand", "Prisma", "Nextauth", "Sanity", "Stripe"],
    },
  },
  {
    title: "Maison Di Giorgio",
    image: "/mockups/maisonMockup.png",
    description: "t",
    stack: {
      frontend: ["React", "Tailwindcss", "Framer Motion"],
      backend: ["Nextjs", "Zustand"],
    },
  },
  {
    title: "Shukkin",
    image: "/mockups/shukkinMockup.png",
    description: "A roster management web application for small businesses.",
    stack: {
      frontend: ["React", "Tailwindcss", "Mantine"],
      backend: [
        "Nextjs",
        "Zustand",
        "Prisma",
        "Nextauth",
        "Postgresql",
        "Stripe",
      ],
    },
  },
  {
    title: "Darkly Labs",
    image: "/logoPng.png",
    description: "t",
    stack: {
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
    },
  },
  {
    title: "Spotify Clone",
    image: "/logoPng.png",
    description: "t",
    stack: {
      frontend: ["React", "Tailwindcss"],
      backend: ["Nextjs", "Recoil", "Prisma", "Nextauth", "Spotify API"],
    },
  },
];

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
  const cardRotation = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    [0, 0, 180]
  );
  const cardScaleX = useTransform(scrollYProgress, [0, 0.59, 0.61], [1, 1, -1]);
  const [cardFlipped, setCardFlipped] = useState(false);
  useEffect(() => {
    function updateCard() {
      if (scrollYProgress.get() > 0.6) {
        setCardFlipped(true);
      } else {
        setCardFlipped(false);
      }
    }
    const unsubscribe = scrollYProgress.on("change", updateCard);
    return () => {
      unsubscribe();
    };
  }, []);

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
            {projects.map((project) => (
              //flips to reveal stack
              <Carousel.Slide>
                <motion.div
                  style={{ rotateY: cardRotation, scaleX: cardScaleX }}
                  className="relative flex h-[498px] w-[450px] flex-col "
                >
                  <div className="relative h-full w-full bg-white">
                    {cardFlipped ? (
                      <div className="h-full overflow-hidden">
                        <h3 className="pl-3 pt-3 text-5xl font-medium uppercase text-black">
                          Stack
                        </h3>
                        <div className="mt-4 flex h-full w-full flex-row ">
                          <div className="flex h-full basis-1/2 flex-col space-y-1 border-r text-center">
                            <h4 className="text-xl font-medium text-black/70">
                              Backend
                            </h4>
                            {project.stack.backend.map((tool) => (
                              <div key={tool} className="text-black/60">
                                {tool}
                              </div>
                            ))}
                          </div>
                          <div className="flex h-full basis-1/2 flex-col space-y-1 text-center ">
                            <h4 className="text-xl font-medium text-black/70">
                              Frontend
                            </h4>
                            {project.stack.frontend.map((tool) => (
                              <div className="text-black/60">{tool}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Image
                        className="object-contain"
                        width={450}
                        height={450}
                        src={project.image}
                        alt={project.title}
                      />
                    )}
                  </div>
                  <h3 className="text-5xl font-medium uppercase">
                    {project.title}
                  </h3>
                </motion.div>
              </Carousel.Slide>
            ))}
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
