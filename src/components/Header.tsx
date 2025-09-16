"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./shared";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background change logic
      setIsScrolled(currentScrollY > 50);

      // Hide/show logic
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50"
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="border-x-medium-gray border-b border-b-medium-gray mx-auto w-full border-x p-4 sm:px-6 lg:px-8 bg-background"
        animate={{
          backgroundColor: isScrolled ? "#fafafa": "#fafafa",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between">
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
          <div className="flex items-center gap-8">
            <Button
              variant="ghost"
              className="hidden sm:flex"
              icon={<ArrowUpRight className="size-4" />}
              iconPosition="left"
            >
              Join the Team
            </Button>
            <Button
              variant="ghost"
              className="hidden sm:flex"
              icon={<ArrowUpRight className="size-4" />}
              iconPosition="left"
            >
              SDK Docs
            </Button>
            <Button
              variant="outline"
              className="!px-3"
              icon={
                <Circle className="fill-primary text-primary bg-secondary size-4 rounded-full px-0.5" />
              }
              iconPosition="left"
            >
              Get a Demo
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
