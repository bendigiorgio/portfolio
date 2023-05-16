import Image from "next/image";

import { Roboto } from "next/font/google";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Logo from "./Logo";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Landing = () => {
  return (
    <section className="relative flex min-h-screen flex-col-reverse px-1 py-3 2xs:px-4">
      <div>
        <h1 className="text-5xl font-semibold 2xs:text-6xl sm:text-7xl lg:text-9xl">
          BEN <br className="flex md:hidden" /> DI GIORGIO
        </h1>
      </div>
      <div className="flex grow flex-col space-y-2 pt-4 sm:pt-0 md:flex-row md:space-y-0">
        <div className="flex h-full basis-1/2 flex-col space-y-3">
          <a href="/" className="w-fit hover:cursor-pointer">
            {/* <Image alt="Smiley Tattoo Logo" src={Logo} width={50} height={50} /> */}
            <Logo className="h-10 w-10 text-primary" />
          </a>
          <p className={`${roboto.className} max-w-lg text-lg text-primary `}>
            An Australian web developer / designer / artist based in Japan.
            Working on new and ambitious projects. I push the boundaries and
            create truly interactive and immersive experiences.
          </p>
          <button className="flex w-fit flex-row items-center space-x-3 rounded-3xl bg-primary px-5 py-1 font-medium text-secondary">
            <span className="whitespace-nowrap">Let's chat</span>
            <ChatBubbleLeftRightIcon className="h-7  w-7" />
          </button>
        </div>
        <div className="relative flex h-full basis-1/2 items-center justify-center pt-10">
          <Logo className="h-96 md:h-[450px] lg:h-[600px] " />
        </div>
      </div>
    </section>
  );
};

export default Landing;
