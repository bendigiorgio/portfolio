"use client";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import { Stepper } from "@mantine/core";
import { useState } from "react";
import { motion } from "framer-motion";

import { MdCheckCircle, MdOutlineDesignServices } from "react-icons/md";
import { GiLightBulb, GiVideoConference } from "react-icons/gi";
import { BiMessage, BiSkipNext } from "react-icons/bi";
import { FaChartBar, FaFileAlt } from "react-icons/fa";
import { IoColorPalette } from "react-icons/io5";
import {
  AiOutlineAntDesign,
  AiOutlineCode,
  AiOutlineEdit,
} from "react-icons/ai";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiLayoutGridFill } from "react-icons/ri";
import { BsArrowsMove, BsCodeSlash } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { TbRosetteNumber1 } from "react-icons/tb";
import MotionStepperCard from "./StepperCard";
import Image from "next/image";

const Expertise = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
      className="flex min-h-screen w-full flex-col items-center space-y-2"
    >
      <motion.div className="relative flex w-full flex-col border-b  p-3 py-8">
        <h3 className="mt-2 text-3xl font-bold uppercase tracking-tight text-gray-200 sm:text-4xl">
          My Process
        </h3>
        <Stepper
          breakpoint="sm"
          className="mt-5 flex flex-row space-x-4 py-8 md:flex-col md:space-x-0"
          color="#ECA400"
          active={active}
          onStepClick={setActive}
        >
          <Stepper.Step
            onClick={() => setActive(0)}
            icon={<MagnifyingGlassCircleIcon className="h-8 w-8" />}
            label={<span className="text-soft-peach-50">Exploration</span>}
            description={<span>Dive into your brand</span>}
          >
            <div className="mt-5 grid grid-flow-row flex-wrap gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <MotionStepperCard
                Icon={FaChartBar}
                title="Brand Analysis"
                description="Comprehensive analysis of the client's brand to understand its values and target audience."
              />
              <MotionStepperCard
                Icon={IoColorPalette}
                title="Moodboard and Color Palette"
                description="Creating a moodboard and selecting a color palette that captures the desired brand aesthetic."
              />
              <MotionStepperCard
                Icon={GiLightBulb}
                title="Direction and Concept Ideas"
                description="Generating unique and innovative concept ideas to guide the design direction."
              />
            </div>
          </Stepper.Step>

          <Stepper.Step
            icon={<MdOutlineDesignServices className="h-8 w-8" />}
            label={<span className="text-soft-peach-50">Initial Designs</span>}
            description={<span>Basic designs</span>}
          >
            <div className="mt-5 grid grid-flow-row flex-wrap gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <MotionStepperCard
                Icon={AiOutlineAntDesign}
                title="Wireframes and Prototypes"
                description="Developing wireframes and interactive prototypes to visualize the layout and functionality."
              />
              <MotionStepperCard
                Icon={RiLayoutGridFill}
                title="Visual Design Mockups"
                description="Designing detailed visual mockups that showcase the final look and feel of the project."
              />
              <MotionStepperCard
                Icon={BsArrowsMove}
                title="Design Iterations"
                description="Iteratively refining and improving the design based on feedback and user testing."
              />
            </div>
          </Stepper.Step>

          <Stepper.Step
            icon={<GiVideoConference className="h-8 w-8" />}
            label={<span className="text-soft-peach-50">Revision</span>}
            description={<span>Let&apos;s talk about it</span>}
          >
            <div className="mt-5 grid grid-flow-row flex-wrap gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <MotionStepperCard
                Icon={BiMessage}
                title="Feedback and Collaboration"
                description="Collaborating with stakeholders to gather feedback and ensure alignment with project goals."
              />

              <MotionStepperCard
                Icon={AiOutlineEdit}
                title="Design Adjustments"
                description="Making necessary adjustments and revisions to enhance the design's visual appeal and usability."
              />

              <MotionStepperCard
                Icon={MdCheckCircle}
                title="Finalizing the Design"
                description="Completing the design, addressing any remaining revisions, and preparing for implementation."
              />
            </div>
          </Stepper.Step>

          <Stepper.Step
            icon={<BiSkipNext className="h-8 w-8" />}
            label={<span className="text-soft-peach-50">Next Steps</span>}
            description={<span>The next stage</span>}
          >
            <div className="mt-5 grid grid-flow-row flex-wrap gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <MotionStepperCard
                Icon={FaFileAlt}
                title="Handoff and Documentation"
                description="Preparing design assets and documentation for smooth handoff to development teams or clients."
              />
              <MotionStepperCard
                Icon={AiOutlineCode}
                title="Development Consultation"
                description="The next step if a customer wishes for me to develop the project is a quick chat about the development process."
              />
              <MotionStepperCard
                Icon={BsCodeSlash}
                title="Development"
                description="Developing the project using the latest technologies and best practices to ensure a high-quality product."
              />
            </div>
          </Stepper.Step>
        </Stepper>
        <div className="flex w-full flex-row items-center justify-center space-x-5 pb-6">
          <button
            onClick={() => {
              if (active >= 1) setActive(active - 1);
            }}
            disabled={active === 0}
            className="hover:text-soft-peach-50/70 disabled:text-soft-peach-50 disabled:opacity-50"
          >
            <SlArrowLeft className="h-8 w-8" />
          </button>
          <span>Stage</span>
          <button
            onClick={() => {
              if (active < 3) setActive(active + 1);
            }}
            disabled={active === 3}
            className="hover:text-soft-peach-50/70 disabled:text-soft-peach-50 disabled:opacity-50"
          >
            <SlArrowRight className="h-8 w-8" />
          </button>
        </div>
      </motion.div>

      <motion.div className="flex w-full flex-col  ">
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
            <svg
              className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-600/50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-600/10">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-byzantium">
                    Backend
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    Building digital backbones
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-200">
                    I specialize in building robust and scalable backend systems
                    using Next.js and Typescript/Javascript. My expertise also
                    extends to Python for specific use cases and integrations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative -ml-12 -mt-12 hidden p-12  lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:overflow-hidden">
              <Image
                width={500}
                height={500}
                className=" max-w-none rounded-xl bg-gray-900 object-cover shadow-xl ring-1 ring-gray-400/10 "
                src="/backend.png"
                alt="backend"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                  <ul role="list" className="mt-8 space-y-8 text-gray-200">
                    <li className="flex gap-x-3">
                      <CloudArrowUpIcon
                        className="mt-1 h-5 w-5 flex-none text-byzantium"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-100">
                          Server-side.
                        </strong>{" "}
                        With a strong understanding of server-side development,
                        I create efficient APIs, handle data storage and
                        retrieval, and implement authentication and
                        authorization systems.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <LockClosedIcon
                        className="mt-1 h-5 w-5 flex-none text-byzantium"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-100">
                          Future-proof.
                        </strong>{" "}
                        I prioritize code maintainability, scalability, and
                        security, ensuring high-quality solutions for complex
                        backend requirements.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-harvest-gold">
                    Frontend
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
                    Design with purpose
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-200">
                    I excel in frontend development using React. I leverage the
                    power of React to build responsive, interactive, and
                    user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative -ml-12 -mt-12 hidden items-center justify-end p-12 lg:col-end-2 lg:row-span-2 lg:row-start-5 lg:flex lg:overflow-hidden">
              <Image
                width={500}
                height={500}
                className=" max-w-none rounded-xl bg-gray-900 object-cover shadow-xl ring-1 ring-gray-400/10 "
                src="/art/1.png"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-6 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-200 lg:max-w-lg">
                  <ul role="list" className="mt-8 space-y-8 text-gray-200">
                    <li className="flex gap-x-3">
                      <CiTimer
                        className="mt-1 h-5 w-5 flex-none text-harvest-gold"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-100">
                          Modern Design.
                        </strong>{" "}
                        I have experience with modern frontend libraries and
                        frameworks, such as Zustand, Nextjs, Tailwindcss, and
                        various UI framerworks, to create seamless user
                        experiences and streamline development workflows.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <TbRosetteNumber1
                        className="mt-1 h-5 w-5 flex-none text-harvest-gold"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-100">
                          Best Practices.
                        </strong>{" "}
                        I&apos;m passionate about crafting clean and reusable
                        code, applying best practices, and staying up to date
                        with the latest frontend technologies and trends.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Expertise;
