"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Button, CornerPlus } from "./shared";
import { Boxes } from "./ui/boxes-core";

export default function Hero() {
  return (
    <section className="relative h-[100vh] overflow-hidden pt-24 sm:pt-28">
      {/* Hero Content */}
      <div className="border-medium-gray relative z-20 mx-auto max-w-7xl border border-x px-4 py-8 sm:px-6 lg:px-8 flex items-end sm:items-center min-h-full pb-12">
        <motion.div
          className="relative z-20 flex max-w-lg flex-col gap-4 text-left sm:mx-auto sm:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.div
            className="sm:text-5.5xl relative z-20 text-3xl font-medium sm:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Track every delivery <br />
            <span className="">down to the </span>
            <span className="text-primary">doorstep</span>
          </motion.div>

          <motion.p
            className="relative z-20 text-base text-[#939280] sm:max-w-lg sm:text-base lg:max-w-2xl lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
         Doorstep tracks parking, entrance, floor, and dropoff -
         giving teams precise visibility into every delivery.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="relative z-20 flex items-center justify-start gap-2 sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="primary">View Dashboard</Button>
          </motion.div>
        </motion.div>
        <div className="hidden md:block">
          <Boxes />
        </div>
        {/* Corner plus marks */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <CornerPlus position="top-left" animated={false} />
          <CornerPlus position="top-right" animated={false} />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent to-card sm:hidden"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.svg"
          fill={true}
          alt="Hero"
          className="z-10 object-cover object-left md:object-center lg:object-bottom"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#fafafa]/10 to-[#fafafa] sm:via-[#fafafa]/15 md:via-[#fafafa]/20"></div>
    </section>
  );
}
