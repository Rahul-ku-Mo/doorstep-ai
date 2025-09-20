"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./shared";
import { Circle } from "lucide-react";

export default function Footer({ withBar = false }: { withBar?: boolean }) {
  return (
    <footer className="w-full">
      {/* Main CTA Section */}
    {withBar && (  <section className="border-medium-gray w-full border">
        {/* Decorative bar above */}
        <Image
          src="/top.svg"
          width={1152}
          height={101}
          alt="top"
          className="mx-auto"
        />

        <div className="border-medium-gray bg-card mx-auto flex w-full max-w-[1152px] flex-col items-start justify-center gap-6 border px-4 py-10 sm:items-center lg:flex-row lg:px-8 lg:py-20">
          <motion.div
            className="sm:text-4.5xl text-primary max-w-xl text-left text-3xl font-normal lg:max-w-3xl lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-black">
              Scale delivery operations without compromising
            </span>{" "}
            trust or efficiency.
          </motion.div>
          <div className="flex items-center justify-center">
            <motion.div
              className="flex items-center justify-start gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Button variant="ghost" className="!px-3">
                SDK Docs
              </Button>
              <Button
                iconPosition="left"
                icon={
                  <Circle className="fill-primary bg-secondary size-4 rounded-full p-0.5" />
                }
                variant="outline"
                className="text-accent border-medium-gray"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Decorative bar below */}
        <Image
          src="/top.svg"
          width={1152}
          height={101}
          alt="bottom"
          className="mx-auto"
        />
      </section>)}

      {/* Navigation Links */}
      <section className="border-x-medium-gray mx-auto max-w-[1152px] border border-y-0 px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-10">
          {/* Logo */}
          <div className="flex flex-col gap-4">
            <Image src="/mobile-logo.svg" width={48} height={48} alt="Logo" />
          </div>

          {/* Address and Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="font-geist-mono text-accent w-full max-w-40 text-sm">
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
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-2"
          >
            <a href="/careers" className="text-sm text-black hover:text-primary">
              Careers
            </a>
            <span className="text-sm text-primary">We&apos;re hiring</span>
            <a href="#" className="text-sm text-black hover:text-primary">
              Documentation
            </a>
            <a href="#" className="text-sm text-black hover:text-primary">
              Contact
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-medium-gray font-geist-mono text-accent mx-auto max-w-[1152px] border pt-6 pb-3 text-center text-sm">
        © 2025 doorstep.ai. All rights reserved.
      </section>
    </footer>
  );
}
