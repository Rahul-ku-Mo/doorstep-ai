"use client";

import { DoorClosed, ArrowUp, Package } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OrchestrateDelivaries() {
  const [activeSection, setActiveSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sections = [
    {
      id: "entrance",
      title: "Entrance",
      description: "Prove that the courier moved inside, not just to the curb.",
      features: [
        "Detect entry points and log access",
        "Record lobby passage with timestamp",
        "Differentiate inside entry vs. curbside drop",
        "Establish a trusted start of delivery",
      ],
      notification: {
        icon: <DoorClosed className="size-4.5 text-white" />,
        text: "Driver entered the building",
        address: "500 Memorial Dr, Cambridge, MA",
        time: "4:56 PM",
      },
    },
    {
      id: "elevation",
      title: "Elevation",
      description: "Track vertical movement through stairs and elevators.",
      features: [
        "Monitor floor transitions accurately",
        "Record elevator usage patterns",
        "Track stairway navigation",
        "Verify multi-level access",
      ],
      notification: {
        icon: <ArrowUp className="size-4.5 text-white" />,
        text: "Driver ascended ~4-5 floors",
        address: "Staircase navigation",
        time: "4:59 PM",
      },
    },
    {
      id: "dropoff",
      title: "Drop-off",
      description: "Confirm final delivery location with precise evidence.",
      features: [
        "Verify exact drop-off location",
        "Record final delivery confirmation",
        "Capture delivery completion proof",
        "Document successful handover",
      ],
      notification: {
        icon: <Package className="size-4.5 text-white" />,
        text: "Driver dropped off package",
        address: "In-Building delivery",
        time: "5:09 PM",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveSection((prev) => (prev + 1) % sections.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleSectionClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="border-x-medium-gray bg-card mx-auto w-full max-w-7xl border border-y-0">
      {/* Header */}
      <div className="border-y-medium-gray flex flex-col items-start justify-between gap-4 border border-x-0 border-t-0 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-6 lg:p-12 lg:pt-20">
        <div className="max-w-xl">
          <div className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4">
            <div className="bg-primary size-2" />
            <span className="text-sm text-[#666666]/60">
              Orchestrate Deliveries
            </span>
          </div>
          <h2 className="lg:text-4.5xl text-2xl text-black sm:max-w-lg sm:text-3xl">
            <span className="text-primary">Trace</span> and investigate every
            claim with clarity
          </h2>
        </div>
        <div className="max-w-md text-base text-[#939290] sm:text-lg">
          <p>Tracking stops at the curb.</p>
          <p>Refunds pile up without proof inside the building.</p>
        </div>
      </div>

      {/* Animated Tabs */}
      <div className="relative flex flex-col items-start gap-8 px-4 py-4 sm:px-6 md:px-8 lg:flex-row lg:gap-36 lg:px-12">
        <div className="flex flex-row gap-2 overflow-x-auto lg:w-auto lg:flex-col lg:gap-0">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => handleSectionClick(index)}
              className={`font-geist-mono relative mb-3 flex items-center gap-2 rounded-lg px-2 py-2 whitespace-nowrap uppercase transition-all duration-200 sm:mb-2 ${
                activeSection === index
                  ? "text-black"
                  : "hover:text-primary text-[#666666]/60"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="bg-primary size-3"
                animate={{
                  scale: activeSection === index ? 1.2 : 1,
                  opacity: activeSection === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              />
              {section.title}
              {/* Animated underline with Framer Motion */}
              <motion.div
                className="bg-primary absolute bottom-0 left-0 h-0.5"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: activeSection === index ? "100%" : 0,
                  opacity: activeSection === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
              />
            </motion.button>
          ))}
        </div>

        <div className="relative mt-6 flex w-full flex-1 justify-center lg:mt-0 lg:w-auto lg:justify-start">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src="/building.svg"
              alt="Building schematic"
              width={578}
              height={578}
              className="h-auto w-full max-w-xs rounded sm:max-w-sm lg:max-w-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 578px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
