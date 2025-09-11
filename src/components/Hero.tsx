"use client";

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = ["Packages", "Food", "Everything"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  // Animation variants for smooth transitions
  const wordVariants = {
    initial: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: 20,
      scale: 1.05,
    },
  };

  const subheadingVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -15,
    },
  };

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Hero Content */}
      <div className="border-medium-gray relative mx-auto max-w-7xl border border-x px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-56">
        <div className="relative z-20 mx-auto max-w-2xl text-center">
          <div className="absolute inset-0 z-10 bg-[#fafafa]/60"></div>
          {/* Main Heading */}
          <h1 className="relative z-20 mb-2 text-3xl font-medium text-black sm:text-4xl lg:text-5xl max-w-2xl mx-auto">
            Delivery accuracy, down to
            <br />
            <div className="flex gap-2 justify-center w-full">
              <span className="text-left">the exact door for</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-blue-600 self-start text-left"
                >
          
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          <p className="relative z-20 mx-auto my-6 max-w-2xl px-4 text-base text-gray-600 sm:my-8 sm:px-0 sm:text-base lg:text-xl">
            Tools that bring precision to the final stretch of delivery.
            Eliminate confusion, reduce refunds, and deliver with confidence.
          </p>

          {/* CTA Buttons */}
          <motion.div className="relative z-20 flex flex-wrap items-center justify-center gap-4 px-4">
            <motion.button
              className="group relative inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-xl"
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="hidden sm:inline">Book a Demo</span>
              <span className="sm:hidden">Demo</span>
            </motion.button>

            <motion.button
              className="flex items-center justify-center rounded-full px-4 py-2 text-base font-medium transition-all duration-200 hover:text-blue-600"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Explore AI Agents
              <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div
            className="grid w-full grid-cols-11 gap-0"
            style={{ aspectRatio: "11/6" }}
          >
            {Array.from({ length: 66 }, (_, i) => (
              <div
                key={i}
                className="aspect-square border border-zinc-800/20 bg-transparent transition-all duration-300 hover:border-zinc-800/60 hover:bg-zinc-900/10"
              />
            ))}
          </div>

          {/* Corner plus marks */}
          <svg
            className="absolute -top-2 -left-[8.5px] z-50 size-4 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg
            className="absolute -top-2 -right-[8.5px] z-50 h-4 w-4 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>

      {/* Background Image */}
      <Image
        src="/Hero.png"
        fill={true}
        alt="Hero"
        className="object-contain md:object-cover"
      />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#fafafa]/20 to-[#fafafa]"></div>
    </section>
  );
}
