"use client";

import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";
import { Building, Settings, Clock } from "lucide-react";
import Image from 'next/image';
import clsx from "clsx";

export default function TheProblem() {
  const features = [
    {
      icon: <Building className="size-4 text-gray-500" />,
      title: "Automatic detection of stairs vs. elevator usage",
    },
    {
      icon: <Settings className="size-4 text-gray-500" />,
      title: "Verification of the floor reached",
      description:
        "Detect vertical movement with proof of how drivers move inside blah implementation blah.",
    },
    {
      icon: <Clock className="size-4 text-gray-500" />,
      title: "Elevation changes are logged with timestamps",
    },
  ];

  return (
    <>
      <Container className="relative z-10 py-12 sm:py-20 !border-b-0">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 px-4 pb-12 sm:px-8 lg:flex-row">
          <SectionHeader
            tag="The Solution"
            title={
              <>
                Power your team with precise{" "}
                <span className="text-primary">drop-off</span> visibility
              </>
            }
            description="Making sure a driver delivered to the right building and floor is key to accurate refunds and operations."
            layout="row"
          />
        </div>

        <motion.div
          className="border-medium-gray relative overflow-hidden border border-x-0 border-b-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 relative border-b border-b-medium-gray">
              {/* Left side - Stats and Features */}
              <div className="flex flex-col gap-32 px-8">
                {/* Large statistic */}
                <motion.div
                  className="border-l-2 border-black pl-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="mb-2 text-6xl font-normal text-black lg:text-7xl">
                    40%
                  </div>
                  <div className="mb-2 text-xl text-black">
                    PODs <span className="text-gray-400">are unreliable</span>
                  </div>
                  <p className="max-w-md text-base text-accent">
                    Detect vertical movement with proof of how drivers move
                    inside.
                  </p>
                </motion.div>

                {/* Feature list */}
                <div className="flex flex-col">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start gap-2 py-4 ${
                        index === 0 
                          ? 'border-b border-b-medium-gray' 
                          : index === features.length - 1 
                          ? 'border-t border-t-medium-gray' 
                          : ''
                      }`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    >
                      <div className="mt-1 text-accent">{feature.icon}</div>
                      <div>
                        <h3 className={clsx("mb-1 text-base font-normal text-accent", index == 1 && "text-black")}>
                          {feature.title}
                        </h3>
                        {feature.description && (
                          <p className="text-sm text-accent">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - Phone mockup */}
              <Image src="/problem.svg" alt="The Problem" width={642} height={750} className="object-contain" />
            </div>
        </motion.div>
      </Container>
    </>
  );
}
