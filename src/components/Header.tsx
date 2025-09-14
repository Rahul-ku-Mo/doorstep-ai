"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./shared";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 ">
      <motion.div
        className="border-x-medium-gray mx-auto max-w-7xl border border-y-0 px-4 pt-2 pb-2 sm:px-6 lg:px-8 h-[52px]"
        animate={{
          backgroundColor: isScrolled ? "#fafafa" : "transparent",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-9 items-center justify-between sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo.svg"
                alt="Doorstep.ai"
                width={180}
                height={42}
                className="hidden h-auto w-auto sm:block"
              />

              <Image
                src="/mobile-logo.svg"
                alt="Doorstep.ai"
                width={36}
                height={36}
                className="block h-auto w-auto sm:hidden"
              />
            </div>
          </motion.div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="outline" className="hidden sm:flex">
              SDK Documentation
              <ArrowUpRight className="size-4" />
            </Button>
            

            <Button variant="ghost">Get a Demo</Button>
        
          </div>
        </div>
      </motion.div>
    </header>
  );
}
