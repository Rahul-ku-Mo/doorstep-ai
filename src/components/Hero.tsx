"use client";

import Image from "next/image";
import { motion, useReducedMotion, MotionConfig } from "framer-motion";
import { Button } from "./shared";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <section className="relative h-[100dvh] w-full overflow-hidden pt-12">
      {/* Hero Content */}
      <div className="border-medium-gray relative z-20 mx-auto flex min-h-full max-w-[1152px] items-end border border-x border-y-0 px-4 py-8 pb-12 sm:items-center sm:px-6 lg:px-8">
        <motion.div
          className="relative z-20 flex max-w-xl flex-col gap-2 text-left sm:mx-auto motion-safe:transform-gpu"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="decoration-medium-gray mb-2 flex items-center gap-1 underline decoration-dashed underline-offset-4"
            variants={itemVariants}
          >
            <div className="bg-primary size-2"></div>
            <span className="font-geist-mono text-[13px] text-[#666666]/60 uppercase">
              Doorstep AI
            </span>
          </motion.div>
          {/* Main Heading */}
          <motion.div
            className="sm:text-5.5xl relative z-20 text-3xl font-normal"
            variants={itemVariants}
          >
            Track every delivery <br />
            <span className="">down to the </span>
            <span className="text-primary">doorstep</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex min-h-0 flex-wrap-reverse gap-4 pt-4 sm:min-h-12 sm:flex-nowrap sm:pt-8"
          >
            <Button variant="primary" className="mr-8 ">
              View the Dashboard
            </Button>
            <motion.p className="text-accent relative z-20 max-w-md border-l-2 border-l-[#d9d9d0] pl-8 text-left sm:max-w-72">
              Doorstep tracks parking, entrance, floor, and dropoff - giving
              teams precise visibility into every delivery.
            </motion.p>
          </motion.div>
        </motion.div>
      

        <div className="absolute inset-0 hidden h-full w-full bg-[url(/grid-tablet.svg)] bg-center bg-no-repeat md:flex"></div>

        <div className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent sm:hidden"></div>
      </div>

      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.1 
        }}
      >
        <Image
          src="/hero.svg"
          fill={true}
          alt="Hero"
          className="z-10 h-full w-full object-cover object-left md:object-center"
          sizes="100vw"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmFmYWZhIi8+Cjwvc3ZnPgo="
        />
      </motion.div>

      {/* Gradient Overlay */}
      </section>
    </MotionConfig>
  );
}
