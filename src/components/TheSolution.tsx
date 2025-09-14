"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container, SectionHeader } from "./shared";
import { useState } from "react";

export default function TheSolution() {
  const [hoveredTooltip, setHoveredTooltip] = useState<string | null>(null);

  const tooltipData = [
    {
      id: "building-entrance",
      position: { top: "50%", left: "40%" },
      title: "Entered Building - Main Entrance Lobby",
      timestamp: "2025-15-10 10:30:05 PST",
      icon: "./icons/gate.svg",
    },
    {
      id: "dropped-package",
      position: { top: "62%", left: "26%" },
      title: "Driver dropped off package",
      timestamp: "2025-15-10 10:30:05 PST",
      icon: "./icons/package.svg",
    },

    {
      id: "ascend-floors",
      position: { top: "58%", left: "32%" },
      title: "Driver ascend -4-5 floors",
      timestamp: "2025-15-10 10:30:05 PST",
      icon: "./icons/stairs.svg",
    },
  ];

  return (
    <>
      <Container className="relative z-10 border-y-0 pt-12 sm:pt-16 lg:pt-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-4 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pb-12">
          <SectionHeader
            tag="The Solution"
            title={
              <>
                Power your team with precise{" "}
                <span className="text-primary">drop-off</span> for the
                visibility
              </>
            }
            description="Making sure a driver delivered to the right building and floor is key to accurate refunds and operations."
            layout="row"
          />
        </div>

        <motion.div
          className="relative overflow-hidden px-4 sm:px-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Desktop/Tablet Image - Hidden on mobile */}
            <div className="hidden sm:block">
              <Image
                src="/the-solution.svg"
                alt="Solution"
                width={1280}
                height={720}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1280px"
                priority
              />
            </div>

            {/* Mobile Image - Hidden on desktop/tablet */}
            <Image
              src="/the-solution-phone.svg"
              alt="Solution Mobile"
              width={1280}
              height={720}
              className="block h-auto w-full object-cover sm:hidden"
              sizes="100vw"
              priority
            />

            {/* Interactive Hotspots Overlay - Only on desktop/tablet */}
            <div className="absolute inset-0 hidden sm:block">
              {tooltipData.map((tooltip) => (
                <div
                  key={tooltip.id}
                  className="absolute"
                  style={{
                    top: tooltip.position.top,
                    left: tooltip.position.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Hotspot Trigger */}
                  <motion.div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setHoveredTooltip(tooltip.id)}
                    onMouseLeave={() => setHoveredTooltip(null)}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Blue Circle Indicator */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full">
                      <div className="h-3 w-3 rounded-full bg-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredTooltip === tooltip.id && (
                      <motion.div
                        className="absolute z-50 mt-2 w-80"
                        style={{
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                        }}
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="border-medium-gray rounded-md border bg-white p-4 shadow-xl">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={tooltip.icon}
                              width={24}
                              height={24}
                              alt={tooltip.title}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-primary text-sm font-medium">
                                {tooltip.title}
                              </p>
                              <p className="font-geist-mono text-accent mt-1 text-xs">
                                {tooltip.timestamp}
                              </p>
                            </div>
                          </div>

                          {/* Arrow pointing up */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 transform">
                            <div className="h-3 w-3 translate-y-1 rotate-45 transform border-t border-l border-gray-200 bg-white"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="border-y-medium-gray grid grid-cols-1 gap-4 border border-x-0 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Manual review made easy */}
          <motion.div
            className="border-x-medium-gray bg-card flex flex-col items-start space-y-4 border border-y-0 border-l-0 p-4 sm:bg-transparent"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="./event.svg" width={24} height={24} alt="manual review" />

            <div>
              <h3 className="mb-2 text-lg font-medium text-black">
                Manual review made easy
              </h3>
              <p className="text-accent text-base">
                Give support teams accurate visibility into the last 100m
              </p>
            </div>
          </motion.div>

          {/* Automate workflows */}
          <motion.div
            className="border-x-medium-gray flex flex-col items-start space-y-4 border border-y-0 border-l-0 p-4"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="./door.svg" width={24} height={24} alt="automate" />

            <div>
              <h3 className="mb-2 text-lg font-medium text-black">
                Automate workflows
              </h3>
              <p className="text-accent text-base">
                Enable ops teams to automate claims and fraud resolution
              </p>
            </div>
          </motion.div>

          {/* Smarter route optimization */}
          <motion.div
            className="border-x-medium-gray flex flex-col items-start space-y-4 border border-y-0 border-l-0 p-4"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="./location.svg" width={24} height={24} alt="route optimization" />
            <div>
              <h3 className="mb-2 text-lg font-medium text-black">
                Smarter route optimization
              </h3>
              <p className="text-accent text-base">
                Help dispatchers track dwell times and delivery complexity
              </p>
            </div>
          </motion.div>

          {/* Wayfinding (Coming soon) */}
          <motion.div
            className="border-x-medium-gray flex flex-col items-start space-y-4 border border-y-0 border-l-0 p-4"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Image src="./gear.svg" width={24} height={24} alt="wayfinding" />
            <div>
              <h3 className="mb-2 text-lg font-medium text-black">
                Wayfinding (Coming soon)
              </h3>
              <p className="text-accent text-base">
                Guide drivers from parking to drop-off with precision
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}
