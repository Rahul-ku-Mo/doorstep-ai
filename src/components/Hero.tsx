"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  MotionConfig,
  Variants,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "./shared";
import { clsx } from "clsx";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  // Door icon animation variants (appear one by one after hero background)
  const doorIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.75 + index * 0.1, // Start after hero background, stagger by 0.2s
        duration: 0.25,
        ease: "easeOut" as const,
      },
    }),
  };

  // Path animation variants (left to right)
  const drawHorizontalPath: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.1; // Small stagger for multiple paths
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.6, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const drawLPathVertical: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.1 + 0.4; // Start after horizontal path completes
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 0.6, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const infoBoxAnimation: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.75, // Appears after L-shaped path completes (0.6 + 0.6 = 1.2s)
        ease: "easeOut",
      },
    },
  };

  // Animation for panels after regular paths (shorter delay)
  const infoBoxAnimationRegular: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.7, // Appears after horizontal path completes (0.6s + 0.1s buffer)
        ease: "easeOut",
      },
    },
  };

  // State for path animation
  const [hoveredDoorIndex, setHoveredDoorIndex] = useState<number | null>(null);
  const [doorPositions, setDoorPositions] = useState<
    Array<{ x: number; y: number }>
  >([]);
  const [panelPosition, setPanelPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const doorRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Door positions data
  const doorData = [
    { className: "absolute top-55 left-50", id: 0 },
    { className: "absolute top-50 right-40", id: 1 },
    { className: "absolute top-100 left-10", id: 2 },
    { className: "absolute bottom-50 left-30", id: 3 },
    { className: "absolute bottom-50 right-20", id: 4 },
    { className: "absolute bottom-5 left-1/2", id: 5 },
  ];

  // Update door positions for path animation
  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const positions = doorRefs.current.map((ref) => {
          if (ref) {
            const doorRect = ref.getBoundingClientRect();
            return {
              x: doorRect.left + doorRect.width / 2 - containerRect.left,
              y: doorRect.top + doorRect.height / 2 - containerRect.top,
            };
          }
          return { x: 0, y: 0 };
        });
        setDoorPositions(positions);
      }
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  // Update panel position when door is hovered
  useEffect(() => {
    const calculatePanelPosition = (doorIndex: number) => {
      if (!containerRef.current || !doorPositions[doorIndex])
        return { x: 0, y: 0 };

      const doorPos = doorPositions[doorIndex];
      const panelWidth = 220; // Approximate panel width
      const panelHeight = 80; // Approximate panel height
      const pathLength = 150; // Length of the horizontal path
      const verticalPathLength = 80; // Length of the vertical path

      // Explicit positioning for each door (desktop-only, no dynamic calculations)
      switch (doorIndex) {
        case 0: // top-50 left-30 - L-shaped path (horizontal right + vertical up)
          return {
            x: doorPos.x + 100 - panelWidth / 2, // Center with the vertical segment
            y: doorPos.y - verticalPathLength - panelHeight - 20, // Above the vertical segment
          };

        case 1: // top-50 right-20 - reverse L-shaped path (horizontal left + vertical up)
          return {
            x: doorPos.x - 100 - panelWidth / 2 + 10, // Center with the vertical segment
            y: doorPos.y - verticalPathLength - panelHeight - 20, // Above the vertical segment
          };

        case 2: // top-70 left-10 - L-shaped path (horizontal right + vertical up)
          return {
            x: doorPos.x + 100 - panelWidth / 2, // Center with the vertical segment
            y: doorPos.y - verticalPathLength - panelHeight - 20, // Above the vertical segment
          };

        case 3: // bottom-50 left-30 - left positioned door (horizontal path)
          console.log(doorPos.y, panelHeight);
          return {
            x: doorPos.x + pathLength + 20, // Right of the path
            y: doorPos.y - panelHeight + 10,
          };

        case 4: // bottom-50 right-0 - right positioned door (horizontal path)
          return {
            x: doorPos.x - pathLength - panelWidth - 20, // Left of the path
            y: doorPos.y - panelHeight + 10,
          };

        case 5: // bottom-5 left-1/2 - center positioned door (vertical path)
          return {
            x: doorPos.x - panelWidth / 2, // Center horizontally with door
            y: doorPos.y - verticalPathLength - panelHeight - 20, // Above the vertical path
          };

        default:
          return { x: 0, y: 0 };
      }
    };

    if (hoveredDoorIndex !== null && doorPositions.length > 0) {
      const newPosition = calculatePanelPosition(hoveredDoorIndex);
      setPanelPosition(newPosition);
    }
  }, [hoveredDoorIndex, doorPositions]);

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <section
        ref={containerRef}
        className="relative h-[100dvh] w-full overflow-hidden pt-12"
      >
        {/* Hero Content */}
        <div className="border-medium-gray relative z-20 mx-auto flex min-h-full items-end border border-x border-y-0 px-4 py-8 pb-12 sm:items-center sm:px-6 lg:px-8">
          <motion.div
            className="relative z-20 flex max-w-xl flex-col gap-2 text-left motion-safe:transform-gpu sm:mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div
              className="decoration-medium-gray mb-2 flex items-center gap-1 underline decoration-dashed underline-offset-4"
              variants={itemVariants}
            >
              <div className="bg-primary size-2"></div>
              <span className="font-geist-mono text-[13px] text-[#666666]/60 uppercase">
                Doorstep AI
              </span>
            </motion.div>
            {/* Main Heading */}
            <motion.div
              className="sm:text-5.5xl relative z-20 text-3xl font-normal"
              variants={itemVariants}
            >
              Track every delivery <br />
              <span className="">down to the </span>
              <span className="text-primary">doorstep</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex min-h-0 flex-wrap-reverse gap-4 pt-4 sm:min-h-12 sm:flex-nowrap sm:pt-8"
            >
              <Button variant="primary" className="mr-8">
                View the Dashboard
              </Button>
              <motion.p className="text-accent relative z-20 max-w-md border-l-2 border-l-[#d9d9d0] pl-8 text-left sm:max-w-72">
                Doorstep tracks parking, entrance, floor, and dropoff - giving
                teams precise visibility into every delivery.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated Door Icons */}
          <div>
            {doorData.map((door, index) => (
              <motion.div
                key={door.id}
                ref={(el) => {
                  doorRefs.current[index] = el;
                }}
                className={`${door.className} z-30 cursor-pointer`}
                variants={doorIconVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                onMouseEnter={() => setHoveredDoorIndex(index)}
                onMouseLeave={() => setHoveredDoorIndex(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/door-hero.svg"
                  alt={`door-hero-${index}`}
                  width={56}
                  height={56}
                  className="drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
          <div className="to-background absolute inset-0 z-10 bg-linear-to-b from-transparent sm:hidden"></div>
        </div>

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 h-full w-full"
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <Image
            src="/hero.svg"
            fill={true}
            alt="Hero"
            className="z-10 h-full w-full object-cover object-left md:object-center"
            sizes="100vw"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmFmYWZhIi8+Cjwvc3ZnPgo="
          />
        </motion.div>

        {/* SVG Path Overlay - Dynamic Path Animation */}
        {hoveredDoorIndex !== null && doorPositions.length > 0 && (
          <svg className="pointer-events-none absolute top-0 left-0 z-40 h-full w-full overflow-visible">
            {/* Different path types based on door index */}
            {[0, 1, 2].includes(hoveredDoorIndex) ? (
              /* L-shaped Path for index 0: horizontal right then vertical up */
              <>
                {/* Horizontal segment (left to right) */}
                <motion.line
                  x1={
                    hoveredDoorIndex === 1
                      ? doorPositions[hoveredDoorIndex]?.x - 18 || 0
                      : doorPositions[hoveredDoorIndex]?.x + 17 || 0
                  }
                  y1={doorPositions[hoveredDoorIndex]?.y || 0}
                  x2={
                    hoveredDoorIndex === 1
                      ? (doorPositions[hoveredDoorIndex]?.x || 0) - 100
                      : (doorPositions[hoveredDoorIndex]?.x || 0) + 100
                  }
                  y2={doorPositions[hoveredDoorIndex]?.y || 0}
                  stroke="#1560ff"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  strokeLinecap="square"
                  fill="none"
                  custom={0}
                  variants={drawHorizontalPath}
                  initial="hidden"
                  animate="visible"
                />
                {/* Vertical segment (bottom to top) */}
                <motion.line
                  x1={
                    hoveredDoorIndex === 1
                      ? (doorPositions[hoveredDoorIndex]?.x || 0) - 100
                      : (doorPositions[hoveredDoorIndex]?.x || 0) + 100
                  }
                  y1={doorPositions[hoveredDoorIndex]?.y || 0}
                  x2={
                    hoveredDoorIndex === 1
                      ? (doorPositions[hoveredDoorIndex]?.x || 0) - 100
                      : (doorPositions[hoveredDoorIndex]?.x || 0) + 100
                  }
                  y2={(doorPositions[hoveredDoorIndex]?.y || 0) - 80}
                  stroke="#1560ff"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  strokeLinecap="square"
                  custom={1}
                  fill="none"
                  variants={drawLPathVertical}
                  initial="hidden"
                  animate="visible"
                />
              </>
            ) : hoveredDoorIndex === 1 ? (
              /* Reverse L-shaped Path for index 1: horizontal left then vertical up */
              <>
                {/* Horizontal segment (right to left) */}
                <motion.line
                  x1={doorPositions[hoveredDoorIndex]?.x - 18 || 0}
                  y1={doorPositions[hoveredDoorIndex]?.y || 0}
                  x2={(doorPositions[hoveredDoorIndex]?.x || 0) - 100}
                  y2={doorPositions[hoveredDoorIndex]?.y || 0}
                  stroke="#1560ff"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  strokeLinecap="square"
                  fill="none"
                  custom={0}
                  variants={drawHorizontalPath}
                  initial="hidden"
                  animate="visible"
                />
                {/* Vertical segment (bottom to top) */}
                <motion.line
                  x1={(doorPositions[hoveredDoorIndex]?.x || 0) - 100}
                  y1={doorPositions[hoveredDoorIndex]?.y || 0}
                  x2={(doorPositions[hoveredDoorIndex]?.x || 0) - 100}
                  y2={(doorPositions[hoveredDoorIndex]?.y || 0) - 80}
                  stroke="#1560ff"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                  strokeLinecap="square"
                  fill="none"
                  custom={1}
                  variants={drawLPathVertical}
                  initial="hidden"
                  animate="visible"
                />
              </>
            ) : hoveredDoorIndex === 5 ? (
              /* Vertical Path for bottom center door */
              <motion.line
                x1={doorPositions[hoveredDoorIndex]?.x || 0}
                y1={doorPositions[hoveredDoorIndex]?.y - 18 || 0}
                x2={doorPositions[hoveredDoorIndex]?.x || 0}
                y2={(doorPositions[hoveredDoorIndex]?.y || 0) - 80}
                stroke="#1560ff"
                strokeWidth="2"
                strokeDasharray="8,4"
                strokeLinecap="square"
                fill="none"
                custom={0}
                variants={drawHorizontalPath}
                initial="hidden"
                animate="visible"
              />
            ) : (
              /* Horizontal Path - for doors 3, 4 */
              <motion.line
                x1={
                  hoveredDoorIndex === 3
                    ? doorPositions[hoveredDoorIndex]?.x + 17 || 0
                    : doorPositions[hoveredDoorIndex]?.x - 18 || 0
                }
                y1={doorPositions[hoveredDoorIndex]?.y || 0}
                x2={
                  // Left positioned door (3): path goes right
                  hoveredDoorIndex === 3
                    ? (doorPositions[hoveredDoorIndex]?.x || 0) + 150
                    : // Right positioned door (4): path goes left
                      (doorPositions[hoveredDoorIndex]?.x || 0) - 150
                }
                y2={doorPositions[hoveredDoorIndex]?.y || 0}
                stroke="#1560ff"
                strokeWidth="2"
                strokeDasharray="8,4"
                strokeLinecap="square"
                fill="none"
                custom={0}
                variants={drawHorizontalPath}
                initial="hidden"
                animate="visible"
              />
            )}
          </svg>
        )}

        {/* Information Panel */}
        {hoveredDoorIndex !== null && doorPositions.length > 0 && (
          <motion.div
            className={clsx(
              "bg-background absolute z-50 min-w-fit p-1.5",
              [0, 1].includes(hoveredDoorIndex)
                ? `top-[${panelPosition.y}px] left-[${panelPosition.x}px]`
                : `top-[${panelPosition.y}px] left-[${panelPosition.x}px]`,
            )}
            style={{
              left: `${panelPosition.x + 20}px`,
              top: `${panelPosition.y + 40}px`,
            }}
            variants={
              [0, 1, 2].includes(hoveredDoorIndex)
                ? infoBoxAnimation
                : infoBoxAnimationRegular
            }
            initial="hidden"
            animate="visible"
          >
            {/* Corner Brackets */}
            {/* Top Left */}
            <div className="absolute -top-1 -left-1 h-4 w-4">
              <div className="bg-primary absolute top-0 left-0 h-0.5 w-3"></div>
              <div className="bg-primary absolute top-0 left-0 h-3 w-0.5"></div>
            </div>

            {/* Top Right */}
            <div className="absolute -top-1 -right-1 h-4 w-4">
              <div className="bg-primary absolute top-0 right-0 h-0.5 w-3"></div>
              <div className="bg-primary absolute top-0 right-0 h-3 w-0.5"></div>
            </div>

            {/* Bottom Left */}
            <div className="absolute -bottom-1 -left-1 h-4 w-4">
              <div className="bg-primary absolute bottom-0 left-0 h-0.5 w-3"></div>
              <div className="bg-primary absolute bottom-0 left-0 h-3 w-0.5"></div>
            </div>

            {/* Bottom Right */}
            <div className="absolute -right-1 -bottom-1 h-4 w-4">
              <div className="bg-primary absolute right-0 bottom-0 h-0.5 w-3"></div>
              <div className="bg-primary absolute right-0 bottom-0 h-3 w-0.5"></div>
            </div>

            <>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/frame.svg"
                  alt="gate"
                  width={16}
                  height={16}
                />
                <div className="text-primary font-geist-mono text-sm font-light uppercase">
                  Entered Building
                </div>
              </div>
              <span className="text-accent font-geist-mono text-xs">
                {" "}
                2025-15-10 10:30:05 PST
              </span>
            </>
          </motion.div>
        )}

        {/* Gradient Overlay */}
      </section>
    </MotionConfig>
  );
}
