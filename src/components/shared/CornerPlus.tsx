"use client";

import { motion } from "framer-motion";

interface CornerPlusProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  animated?: boolean;
}

const positionClasses = {
  "top-left": "absolute -top-2 -left-[8.5px] z-50",
  "top-right": "absolute -top-2 -right-[8.5px] z-50", 
  "bottom-left": "absolute -bottom-2 -left-[8.5px] z-50",
  "bottom-right": "absolute -bottom-2 -right-[8.5px] z-50"
};

const animationVariants = {
  "top-left": { opacity: 0, rotate: -90 },
  "top-right": { opacity: 0, rotate: 90 },
  "bottom-left": { opacity: 0, rotate: -90 },
  "bottom-right": { opacity: 0, rotate: 90 }
};

export default function CornerPlus({ 
  position, 
  className = "", 
  animated = true 
}: CornerPlusProps) {
  const positionClass = positionClasses[position];
  
  if (animated) {
    return (
      <motion.svg
        className={`${positionClass} size-4 text-black ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={animationVariants[position]}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <path d="M12 5v14M5 12h14" />
      </motion.svg>
    );
  }

  return (
    <svg
      className={`${positionClass} size-4 text-black ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
