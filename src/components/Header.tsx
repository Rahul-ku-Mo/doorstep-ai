"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// Removed unused imports
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
        className="border-x-medium-gray border-b-medium-gray bg-background mx-auto w-full border-x border-b p-4 sm:px-6 lg:px-8"
        animate={{
          backgroundColor: isScrolled ? "#fafafa" : "#fafafa",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex cursor-pointer items-center justify-between">
          {/* Logo */}
          <motion.div
            onClick={() => (window.location.href = "/")}
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/mobile-logo.svg"
                alt="Doorstep.ai"
                width={36}
                height={36}
                className="block h-auto w-auto"
              />
            </div>
          </motion.div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-8">
            <Button variant="ghost" className="hidden sm:flex">
              <a
                href="/careers"
                className="hover:text-primary transition ease-in"
              >
                Join the team
              </a>
            </Button>
            <Button
              variant="ghost"
              className="hover:text-primary hidden sm:flex"
            >
              <a
                href="https://docs.doorstep.ai/"
                target="_blank"
                className="hover:text-primary transition ease-in"
              >
                SDK Docs
              </a>
            </Button>
            <Button variant="primary" className="text-xs sm:text-sm px-3 sm:px-6">
              <span className="hidden sm:inline">View the Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
