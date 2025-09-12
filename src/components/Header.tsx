"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="border-x-medium-gray mx-auto max-w-7xl border border-y-0 px-4 pt-2 pb-10 sm:px-6 lg:px-8">
        <div className="flex h-9 items-center justify-between sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo.svg"
                alt="Doorstep.ai"
                width={180}
                height={42}
                className="hidden h-auto w-auto sm:block"
              />

              <Image
                src="/mobile-logo.svg"
                alt="Doorstep.ai"
                width={36}
                height={36}
                className="block h-auto w-auto sm:hidden"
              />
            </div>
          </motion.div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.button
              className="border-border-gray group hidden h-10 items-center justify-center gap-1 rounded-full border border-x border-y-0 bg-white px-4 py-1.5 text-base text-black shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md md:flex"
              whileHover={{
                scale: 1.05,
                y: -1,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="flex items-center gap-1"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                SDK Documentation
                <motion.div
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="size-4.5 transition-colors duration-200 group-hover:text-blue-600" />
                </motion.div>
              </motion.span>
            </motion.button>

            <motion.button
              className="h-10 rounded-full border border-black bg-black px-3 py-1.5 text-sm text-white transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:shadow-lg sm:px-4 sm:py-2 sm:text-[15px]"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            >
              <motion.span whileHover={{ x: 1 }} transition={{ duration: 0.2 }}>
                Get a Demo
              </motion.span>
            </motion.button>

            {/* Mobile menu button */}
          </div>
        </div>
      </div>
    </header>
  );
}
