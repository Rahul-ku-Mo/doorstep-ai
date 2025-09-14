"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  hidden?: boolean;
}

const buttonVariants = {
  primary: "border border-blue-600 bg-blue-600 text-white shadow-lg hover:border-blue-700 hover:bg-blue-700 hover:shadow-xl",
  secondary: "border border-gray-200 bg-white/80 text-black backdrop-blur-sm hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600",
  outline: "border border-gray-300 bg-transparent text-gray-700 hover:border-gray-400 hover:bg-gray-50",
  ghost: "border border-gray-300 bg-black text-white hover:bg-[#000000]"
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
  iconPosition = "right",
  hidden = false
}: ButtonProps) {
  const baseClasses = "group relative inline-flex cursor-pointer items-center justify-center rounded-full font-medium whitespace-nowrap transition-all ease-linear";
  
  return (
    <button
      className={clsx(
        baseClasses,
        buttonVariants[variant],
        sizeVariants[size],
        {
          'opacity-50 cursor-not-allowed': disabled,
          'hidden': hidden
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative flex items-center gap-1">
        {icon && iconPosition === "left" && (
          <div>
            {icon}
          </div>
        )}
        
        {children}
        
        {icon && iconPosition === "right" && (
          <div>
            {icon}
          </div>
        )}
      </span>
    </button>
  );
}
