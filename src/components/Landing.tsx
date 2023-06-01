"use client";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { useNavbarStore } from "@/stores/navbarStore";
import { HiOutlineDocumentText } from "react-icons/hi";
const Landing = () => {
  const toggleLogo = useNavbarStore((state) => state.toggleLogo);
  return (
    <motion.section
      id="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex min-h-screen flex-col-reverse"
    >
      <div>
        <h1
          className={`mb-14 font-inter text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl`}
        >
          BEN <br className="flex md:hidden" /> DI GIORGIO
        </h1>
      </div>
      <div className="flex grow flex-col space-y-2 pt-4 sm:pt-0 md:flex-row md:space-y-0">
        <motion.div
          onViewportEnter={() => toggleLogo(false)}
          onViewportLeave={() => toggleLogo(true)}
          className="flex h-full basis-1/2 flex-col space-y-3"
        >
          <a href="/" className="w-fit hover:cursor-pointer">
            <Logo className="h-10 w-10" />
          </a>
          <p className={` max-w-lg text-lg`}>
            An Australian web developer / designer / artist based in Japan.
            Working on new and ambitious projects. I push the boundaries and
            create truly interactive and immersive experiences.
          </p>
          <div className="flex flex-row space-x-4">
            <button className="flex w-fit flex-row items-center space-x-3 rounded-3xl bg-soft-peach-50 px-5 py-1 font-medium text-secondary hover:bg-soft-peach-50/70">
              <span className="whitespace-nowrap">Let&apos;s chat</span>
              <ChatBubbleLeftRightIcon className="h-7  w-7" />
            </button>
            <a
              href="/Benjamin_DiGiorgio_Resume.pdf"
              download
              className="flex w-fit flex-row items-center space-x-3 rounded-3xl bg-soft-peach-50 px-5 py-1 font-medium text-secondary hover:bg-soft-peach-50/70"
            >
              <span className="whitespace-nowrap">Resume</span>
              <HiOutlineDocumentText className="h-7  w-7" />
            </a>
          </div>
        </motion.div>
        <div className="relative flex h-full basis-1/2 items-center justify-center pt-10">
          <Logo className="h-96 md:h-[450px] lg:h-[600px] " />
        </div>
      </div>
    </motion.section>
  );
};

export default Landing;
