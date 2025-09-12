"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const buttonVariants = {
  primary: "border border-blue-600 bg-blue-600 text-white shadow-lg hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl",
  secondary: "border border-gray-200 bg-white/80 text-black backdrop-blur-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
  outline: "border border-gray-300 bg-transparent text-gray-700 hover:border-gray-400 hover:bg-gray-50"
};

const sizeVariants = {
  sm: "h-8 px-3 py-1 text-xs",
  md: "h-10 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base",
  lg: "h-12 px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg"
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  icon,
  iconPosition = "right"
}: ButtonProps) {
  const baseClasses = "group relative inline-flex cursor-pointer items-center justify-center rounded-full font-medium whitespace-nowrap transition-all duration-300";
  const variantClasses = buttonVariants[variant];
  const sizeClasses = sizeVariants[size];

  const hoverAnimation = variant === "primary" 
    ? {
        scale: 1.05,
        y: -2,
        boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
      }
    : {
        scale: 1.05,
        y: -1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : hoverAnimation}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <motion.span
        className="relative flex items-center gap-1"
        whileHover={disabled ? {} : { x: variant === "secondary" ? 3 : 2 }}
        transition={{ duration: 0.2 }}
      >
        {icon && iconPosition === "left" && (
          <motion.div
            whileHover={disabled ? {} : { x: -2, rotate: variant === "secondary" ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
        
        {children}
        
        {icon && iconPosition === "right" && (
          <motion.div
            whileHover={disabled ? {} : { x: 3, rotate: variant === "secondary" ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}
      </motion.span>
    </motion.button>
  );
}
