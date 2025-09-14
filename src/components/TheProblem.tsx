"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";

export default function TheProblem() {
  return (
    <>
      <Container className="relative z-10 border-t-0" hasCornerPlus={true}>
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-4 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pt-20">
          <SectionHeader
            tag="The Challenge"
            title={
              <>
                Unreliable GPS. Failed PODs.{" "}
                <span className="text-primary">Endless</span> disputes. delivery
              </>
            }
            description="GPS is a black box indoors, and POD photos don’t tell the full story - leaving claims to pile up."
            layout="row"
          />
        </div>

        <motion.div
          className="border-medium-gray relative overflow-hidden border border-x-0 border-b-0"
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
            className="hidden h-auto w-full sm:block"
            sizes="(max-width: 1024px) 100vw, 1280px"
            priority
          />

          {/* Mobile View */}
          <Image
            src="/mobile-view-phone.svg"
            alt="Problem illustration mobile"
            width={1280}
            height={720}
            className="block h-auto w-full p-4 sm:hidden"
            sizes="100vw"
            priority
          />

          <div className="mx-auto flex max-w-sm flex-col p-4 text-base font-medium sm:hidden">
            <div className="text-black">
              Fraud hides in delivery blind spots
            </div>
            <span className="text-accent">
              Beyond the doorstep, visibility ends — making it easy for false
              claims to slip through and cost providers billions.
            </span>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
