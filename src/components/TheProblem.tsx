"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";

export default function TheProblem() {
  return (
    <>
      <Container 
        className="relative z-10 border-t-0" 
        hasCornerPlus={true}
      >
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pt-20">
          <SectionHeader
            tag="The Challenge"
            title={
              <>
                The <span className="text-primary">problem</span> with last-mile delivery
              </>
            }
            description="Beyond the doorstep, visibility ends — making it easy for false claims to slip through and cost providers billions."
            layout="row"
          />
        </div>

        <motion.div 
          className="border-medium-gray relative border border-x-0 border-b-0 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Desktop/Tablet View */}
          <Image 
            src="/problem.svg" 
            alt="Problem illustration" 
            width={1280} 
            height={720}
            className="hidden sm:block w-full h-auto"
            sizes="(max-width: 1024px) 100vw, 1280px"
            priority
          />

          {/* Mobile View */}
          <Image 
            src="/mobile-view-phone.svg" 
            alt="Problem illustration mobile" 
            width={1280} 
            height={720}
            className="block sm:hidden w-full h-auto p-4"
            sizes="100vw"
            priority
          />
        </motion.div>
      </Container>
    </>
  );
}
