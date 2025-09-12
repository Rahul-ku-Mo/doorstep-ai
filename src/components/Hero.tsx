"use client";

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, CornerPlus } from "./shared";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "deliveries",
    "shipments",
    "consignments",
    "parcels",
    "orders",
  ];

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

  return (
    <section className="relative h-[100vh] overflow-hidden pt-24 sm:pt-28">
      {/* Hero Content */}
      <div className="border-medium-gray relative mx-auto max-w-7xl border border-x px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-56">
        <motion.div
          className="relative z-20 flex max-w-3xl flex-col gap-4 text-left sm:mx-auto sm:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 z-10 hidden bg-[#fafafa]/60 p-4 sm:block"></div>
          {/* Main Heading */}
          <motion.div
            className="lg:text-5.5xl sm:text-4.5xl relative z-20 mx-auto w-full text-2xl font-medium text-black sm:max-w-lg lg:max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Delivery accuracy, down to
            <div className="inline-flex w-full gap-2">
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
          </motion.div>

          <motion.p
            className="relative z-20 text-base text-[#939280] sm:mx-auto sm:max-w-lg sm:px-4 sm:text-base lg:max-w-2xl lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tools that bring precision to the final stretch of delivery. <br />
            Eliminate confusion, reduce refunds, and deliver with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="relative z-20 flex items-center justify-start gap-2 sm:justify-center sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary">See the Dashboard</Button>

            <Button
              variant="secondary"
              icon={
                <ChevronRightIcon className="h-3 w-3 transition-colors duration-200 group-hover:text-blue-600 sm:h-4 sm:w-4" />
              }
            >
              SDK Docs
            </Button>
          </motion.div>
        </motion.div>

        {/* Corner plus marks */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <CornerPlus position="top-left" animated={false} />
          <CornerPlus position="top-right" animated={false} />
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.svg"
          fill={true}
          alt="Hero"
          className="object-cover object-left md:object-cover lg:object-bottom"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#fafafa]/10 to-[#fafafa] sm:via-[#fafafa]/15 md:via-[#fafafa]/20"></div>
    </section>
  );
}
