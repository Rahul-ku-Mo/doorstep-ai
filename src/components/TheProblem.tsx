"use client";

import Image from "next/image";
import { MessageSquare, Package, Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function TheProblem() {
  return (
    <>
      <section className="border-medium-gray relative z-10 mx-auto w-full max-w-7xl border border-t-0">
        <motion.svg
          className="absolute -top-2 -left-[8.5px] z-50 size-4 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <path d="M12 5v14M5 12h14" />
        </motion.svg>
        <motion.svg
          className="absolute -top-2 -right-[8.5px] z-50 h-4 w-4 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <path d="M12 5v14M5 12h14" />
        </motion.svg>

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pt-20">
            <div className="flex w-full items-start justify-between gap-4 flex-col lg:flex-row lg:items-center">
            <div className="mb-2 flex flex-col items-start gap-2">
              <motion.div 
                className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-primary size-2"></div>
                <span className="text-sm text-[#666666]/60">The Challenge</span>
              </motion.div>

              <motion.h2 
                className="sm:text-4.5xl text-3xl text-black sm:max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                The <span className="text-primary">problem</span> with last-mile
                 delivery
              </motion.h2>
            </div>

            <motion.p 
              className="max-w-xl text-base text-[#939290]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Beyond the doorstep, visibility ends — making it easy for false
              claims to slip through and cost providers billions.
            </motion.p>
          </div>
        </div>

        <motion.div 
          className="border-medium-gray relative border border-x-0 border-b-0 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
           <Image 
              src="/problem.svg" 
              alt="Problem" 
              width={1280} 
              height={720}
              className="w-full h-auto"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
              priority
            />
        </motion.div>
      </section>
    </>
  );
}
