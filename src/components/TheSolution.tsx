"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TheSolution() {
  return (
    <>
      <section className="border-medium-gray relative z-10 mx-auto w-full max-w-7xl border border-y-0 pt-12 sm:pt-16 lg:pt-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pb-12">
          <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
            <div className="mb-2 flex grow flex-col items-start gap-2">
              <motion.div
                className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-primary size-2"></div>
                <span className="text-sm text-[#666666]/60">The Solution</span>
              </motion.div>

              <motion.h2
                className="sm:text-4.5xl text-3xl text-black sm:max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A <span className="text-primary">smarter layer</span> for the{" "}
                last stretch
              </motion.h2>
            </div>

            <motion.p
              className="max-w-xl text-base text-[#939290]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              See couriers move through stairs, lifts, and doors inside a
              building. Every step becomes defensible evidence.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="relative overflow-hidden pb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/the-solution.svg"
            alt="Solution"
            width={1280}
            height={720}
            className="h-auto w-full"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
            priority
          />
        </motion.div>
      </section>
    </>
  );
}
