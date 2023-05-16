"use client";
import useScrollDirection from "@/hooks/useScrollDirection";

import { AnimatePresence, motion } from "framer-motion";
import { useNavbarStore } from "@/stores/navbarStore";
import Logo from "./Logo";

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const navToggle = useNavbarStore();

  return (
    <>
      <AnimatePresence>
        {scrollDirection === "up" && navToggle.active && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-0 z-50 flex w-screen flex-row justify-between px-4 pt-4 mix-blend-difference"
          >
            <div>
              {navToggle.logoActive && (
                <a
                  href="/"
                  className="flex w-fit flex-row items-center text-white hover:cursor-pointer"
                >
                  <Logo className="h-12 w-12 text-white" />

                  <h3 className="ml-2 hidden text-lg font-semibold md:block">
                    BEN DI GIORGIO
                  </h3>
                </a>
              )}
            </div>
            <div
              className={`mr-3 grid grid-cols-2 grid-rows-4 gap-x-14 gap-y-1 text-right font-sans text-sm text-white ${
                !navToggle.logoActive && "hidden md:grid"
              }`}
            >
              <a className="" href="">
                DESIGN
              </a>
              <a className="text-left" href="">
                bendigiorgio@gmail.com
              </a>
              <a className="" href="">
                DEVELOPMENT
              </a>
              <a className="text-left" href="">
                +81 80 9434 7288
              </a>
              <a className="" href="">
                ARTWORK
              </a>
              <a className="col-start-1" href="">
                CONTACT
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
