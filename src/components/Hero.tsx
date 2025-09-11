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
        <motion.div 
          className="relative z-20 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 z-10 bg-[#fafafa]/60 hidden sm:block p-4"></div>
          {/* Main Heading */}
          <motion.h1 
            className="relative z-20 mb-2 text-2xl font-medium text-black sm:text-4xl lg:max-w-2xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delivery accuracy, down to
            <div className="inline-flex justify-center gap-2">
              <span className="w-fit text-left">the exact door for</span>
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
                  className="self-start text-left text-blue-600"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.h1>

          <motion.p 
            className="relative z-20 mx-auto my-2 max-w-2xl px-4 text-base text-[#939280] sm:my-4 sm:px-0 sm:text-base lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tools that bring precision to the final stretch of delivery.
            Eliminate confusion, reduce refunds, and deliver with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="relative z-20 flex items-center justify-center gap-2 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="group relative inline-flex cursor-pointer items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-lg transition-all duration-300 hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow:
                  "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.span
                className="relative flex items-center gap-1"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="hidden sm:inline">See the Dashboard</span>
                <span className="sm:hidden">See the Dashboard</span>
              </motion.span>
            </motion.button>

            <motion.button
              className="group relative inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
              whileHover={{
                scale: 1.05,
                y: -1,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="hidden sm:inline">SDK Docs</span>
                <span className="sm:hidden">SDK Docs</span>
                <motion.div
                  whileHover={{ x: 3, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-200 group-hover:text-blue-600" />
                </motion.div>
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

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
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Hero.png"
          fill={true}
          alt="Hero"
          className="object-cover object-center md:object-cover lg:object-center "
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#fafafa]/10 to-[#fafafa] sm:via-[#fafafa]/15 md:via-[#fafafa]/20"></div>
    </section>
  );
}
