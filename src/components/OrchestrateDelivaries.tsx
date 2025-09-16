"use client";

import { DoorClosed, ArrowUp, Package } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container, SectionHeader } from "./shared";
import dynamic from "next/dynamic";
import { LottieRefCurrentProps } from "lottie-react";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full animate-pulse rounded bg-gray-100" />
  ),
});

// Import your Lottie JSON file
import animationData from "@/components/shared/trim-path-animation.json";

export default function OrchestrateDeliveries() {
  const [activeSection, setActiveSection] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

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
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sections.length]);

  // Handle Lottie animation playback
  useEffect(() => {
    if (lottieRef.current) {
      // Define timeframes for each section (in milliseconds)
      const timeframes = [1000, 5000, 10500];
      const targetTime = timeframes[activeSection] || 1000;

      // Jump to specific timeframe and play
      lottieRef.current.goToAndPlay(targetTime, false);
    }
  }, [activeSection]);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  // Handle first load animation completion
  const handleLottieComplete = () => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  };

  return (
    <Container className="border-y-0 px-8 py-20 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="max-w-xl">
          <SectionHeader
            tag="Orchestrate Deliveries"
            title={
              <>
                Delivery event detection with
                <span className="text-primary"> doorstep.ai</span>
              </>
            }
            titleClassName="lg:text-4.5xl text-2xl text-black sm:max-w-lg sm:text-3xl"
          />
        </div>
        <div className="text-accent w-full max-w-sm text-base sm:text-lg">
          Our SDK detects events automatically from the driver&apos;s phone —
          drivers deliver as usual.
        </div>
      </div>

      {/* Animated Tabs */}
      <div className="relative flex flex-col items-start gap-8">
        <div className="flex flex-row flex-wrap gap-2 lg:w-auto lg:flex-col lg:gap-0 absolute z-20 top-6">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => handleSectionClick(index)}
              className={`font-geist-mono relative mb-3 flex items-center gap-2 rounded-lg px-2 py-2 whitespace-nowrap uppercase transition-all duration-200 ${
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
              {/* Animated underline with 4-second duration */}
              <motion.div
                className="bg-primary absolute bottom-0 left-0 h-0.5"
                initial={{ width: 0 }}
                animate={{
                  width: activeSection === index ? "100%" : "0%",
                }}
                transition={{
                  duration: activeSection === index ? 5 : 0.5,
                  ease: activeSection === index ? "linear" : "easeOut",
                }}
              />
            </motion.button>
          ))}
        </div>

        <div className="relative mt-6 flex w-full flex-1 justify-center lg:mt-0 lg:w-auto lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Fade in from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2, // Small delay for better effect
            }}
          >
            <div className="h-auto w-full flex items-center justify-center">
              <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                autoplay={true}
                loop={true}
                onComplete={handleLottieComplete}
                style={{
                  width: "100%",
                  maxWidth: "90%",
                  height: "auto",
                }}
                className="rounded"
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent from-95% to-background" />

            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
