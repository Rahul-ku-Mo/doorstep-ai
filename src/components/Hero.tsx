"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { Button, CornerPlus } from "./shared";
import { Circle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden pt-12">
      {/* Hero Content */}
      <div className="border-medium-gray relative z-20 mx-auto flex min-h-full max-w-[1152px] items-end border border-x border-y-0 px-4 py-8 pb-12 sm:items-center sm:px-6 lg:px-8">
        <motion.div
          className="relative z-20 flex max-w-xl flex-col gap-2 sm:gap-4 text-left sm:mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="decoration-medium-gray flex items-center gap-2 underline decoration-dashed underline-offset-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-primary size-2"></div>
            <span className="font-geist-mono text-sm text-[#666666]/60 uppercase">
              Doorstep
            </span>
          </motion.div>
          {/* Main Heading */}
          <motion.div
            className="sm:text-5.5xl relative z-20 text-3xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Track every delivery <br />
            <span className="">down to the </span>
            <span className="text-primary">doorstep</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex min-h-12 flex-wrap-reverse gap-4 sm:flex-nowrap"
          >
            <Button
              variant="primary"
              icon={<Circle className="size-3 fill-white" />}
              iconPosition="left"
              className="!h-12 !px-3"
            >
              View Dashboard
            </Button>
            <motion.p className="text-accent border-l-primary relative z-20 max-w-md border-l-4 pl-4 text-left">
              Doorstep tracks parking, entrance, floor, and dropoff - giving
              teams precise visibility into every delivery.
            </motion.p>
          </motion.div>
        </motion.div>
        {/* Corner plus marks */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <CornerPlus position="top-left" animated={false} />
          <CornerPlus position="top-right" animated={false} />
        </div>

        <div className="absolute inset-0 hidden h-full w-full bg-[url(/grid-tablet.svg)] bg-center bg-no-repeat md:flex"></div>

        <div className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent sm:hidden"></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/hero.svg"
          fill={true}
          alt="Hero"
          className="z-10 h-full w-full object-cover object-left md:object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* Gradient Overlay */}
    </section>
  );
}
