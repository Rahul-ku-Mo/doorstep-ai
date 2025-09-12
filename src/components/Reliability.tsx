"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeader } from "./shared";

export default function Reliability() {
  return (
    <Container className="flex flex-col border-y-0 border-zinc-800">
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:p-12 lg:pt-20 lg:pr-0 lg:pb-0">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start gap-2">
            <SectionHeader
              tag="Reliability"
              title={
                <>
                  Built on strong <span className="text-primary">foundations</span> for
                </>
              }
            />
            <motion.div
              className="flex items-center justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: "0 8px 20px rgba(97, 218, 251, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer rounded-xl p-2 hover:bg-blue-50"
              >
                <Image
                  src="./react-icon.svg"
                  alt="react"
                  width={48}
                  height={48}
                />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                  boxShadow: "0 8px 20px rgba(66, 165, 245, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer rounded-xl p-2 hover:bg-blue-50"
              >
                <Image
                  src="./flutter.svg"
                  alt="flutter"
                  width={48}
                  height={48}
                />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: "0 8px 20px rgba(76, 175, 80, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer rounded-xl p-2 hover:bg-green-50"
              >
                <Image
                  src="./android.svg"
                  alt="android"
                  width={48}
                  height={48}
                />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: -5,
                  boxShadow: "0 8px 20px rgba(158, 158, 158, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer rounded-xl p-2 hover:bg-gray-50"
              >
                <Image src="./ios.svg" alt="ios" width={48} height={48} />
              </motion.div>
              <div className="flex cursor-pointer items-center underline underline-offset-2 relative top-3 text-[#666666]">
                SDK Documentation
                <ArrowUpRight className="size-4" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full max-w-md">
              <div className="divide-medium-gray/30 divide-y">
                <motion.div
                  className="group flex cursor-pointer flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between"
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(248, 250, 252, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-medium text-black transition-colors duration-200 group-hover:text-blue-600 sm:w-1/3">
                    Safe Rollouts.
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Scale confidently with controlled pilots and quick
                    adjustments.
                  </p>
                </motion.div>
                <motion.div
                  className="border-t-medium-gray group flex cursor-pointer flex-col gap-2 border-t-2 py-5 sm:flex-row sm:items-start sm:justify-between"
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(248, 250, 252, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-medium text-black transition-colors duration-200 group-hover:text-blue-600 sm:w-1/3">
                    Observability
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Track trends, spot bottlenecks, and measure performance.
                  </p>
                </motion.div>
                <motion.div
                  className="border-y-medium-gray group flex cursor-pointer flex-col gap-2 border-y-2 py-5 sm:flex-row sm:items-start sm:justify-between"
                  whileHover={{
                    x: 5,
                    backgroundColor: "rgba(248, 250, 252, 0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-medium text-black transition-colors duration-200 group-hover:text-blue-600 sm:w-1/3">
                    Fraud Prevention
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Evidence-backed data reduces false claims.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="bg-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/reliability.png"
            width={600}
            height={480}
            alt="Reliability"
            className="h-auto w-full max-w-xl lg:max-w-none"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
        </motion.div>
      </div>

      <motion.div
        className="h-full w-full px-6 py-10 text-center text-black sm:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="cursor-default transition-colors duration-200 hover:text-blue-600"
        >
          Backed by research by PhD team from MIT — 30+ indoor-nav patents & 50+
          publications.
        </motion.p>
      </motion.div>
    </Container>
  );
}
