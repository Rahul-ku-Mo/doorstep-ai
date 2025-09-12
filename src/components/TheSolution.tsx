"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";

export default function TheSolution() {
  return (
    <>
      <Container 
        className="relative z-10 border-y-0 pt-12 sm:pt-16 lg:pt-20"
      >
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pb-12">
          <SectionHeader
            tag="The Solution"
            title={
              <>
                A <span className="text-primary">smarter layer</span> for the last stretch
              </>
            }
            description="See couriers move through stairs, lifts, and doors inside a building. Every step becomes defensible evidence."
            layout="row"
          />
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
      </Container>
    </>
  );
}
