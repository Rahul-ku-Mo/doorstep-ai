"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main CTA Section */}
      <section className="border-medium-gray w-full border">
        {/* Decorative bar above */}
        <Image
          src="/top.svg"
          width={1280}
          height={101}
          alt="top"
          className="mx-auto"
        />

        <div className="border-medium-gray bg-card mx-auto flex w-full max-w-7xl flex-col border lg:flex-row">
          <div className="flex w-full flex-col gap-6 p-6 sm:p-8 lg:max-w-3xl lg:gap-16 lg:p-12">
            <motion.div
              className="sm:text-4.5xl text-primary max-w-xl text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-black">
                Scale delivery operations without compromising
              </span>{" "}
              trust or efficiency.
            </motion.div>
          </div>
          <div className="flex items-center justify-center px-6 pb-8 lg:px-0 lg:pb-0 lg:mx-auto">
            <motion.div
              className="flex items-center justify-start gap-2 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                className="rounded-full border border-black bg-black px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:border-gray-800 hover:bg-gray-800 hover:shadow-xl whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Visit Docs
                </motion.span>
              </motion.button>
              <motion.button
                className="rounded-full border border-gray-300 bg-white/80 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-black backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  y: -1,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <motion.span
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  Talk to an Expert
                </motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* Decorative bar below */}
        <Image
          src="/bottom.svg"
          width={1280}
          height={101}
          alt="bottom"
          className="mx-auto"
        />
      </section>

      {/* Navigation Links */}
      <section className="border-x-medium-gray mx-auto max-w-7xl border border-y-0 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-10">
            {/* Products */}

            <div className="flex flex-col gap-4">
              <Image src="/Logo.svg" width={180} height={44} alt="Logo" />

              <div className="font-geist-mono w-full max-w-40 text-sm text-[#939290]">
                33 West 17th Street New York, 10011 United States
              </div>

              <div className="border-medium-gray flex w-fit items-center justify-start gap-1 border border-y-0">
              <Image
                    src="./LinkedIn.svg"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                      <Image src="./X.svg" width={24} height={24} alt="x" />
                  <Image
                    src="./Facebook.svg"
                    width={24}
                    height={24}
                    alt="facebook"
                  />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ul className="space-y-3 text-base">
                <li>
                  <motion.a
                    href="#"
                    className="group flex items-center gap-1.5 underline-offset-4 transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="transition-all duration-200 group-hover:text-black group-hover:underline">
                      {" "}
                      Careers{" "}
                    </span>
                    <motion.span
                      className="text-primary border-secondary font-geist-mono rounded-full border bg-white px-1 py-0.5 text-[10px] shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      We&apos;re hiring
                    </motion.span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#"
                    className="inline-block underline-offset-4 transition-colors hover:text-black hover:underline"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    Documentation
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#"
                    className="inline-block underline-offset-4 transition-colors hover:text-black hover:underline"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    Contact
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-medium-gray font-geist-mono mx-auto max-w-7xl border pt-6 pb-3 text-center text-[#939290]">
        © 2025 doorstep.ai. All rights reserved.
      </section>
    </footer>
  );
}
