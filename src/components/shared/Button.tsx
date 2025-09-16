"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "default";
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
  outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
  default: "border border-gray-300 bg-black text-white hover:bg-[#000000]",
  ghost: "border-none !px-0"
};

const sizeVariants = {
  sm: "h-8 px-3 py-1 text-xs",
  md: "h-10 px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm",
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
  const baseClasses = "group relative inline-flex cursor-pointer items-center justify-center rounded-none font-normal text-1.5xl whitespace-nowrap transition-all ease-linear font-geist-mono uppercase";
  
  return (
    <button
      className={cn(
        baseClasses,
        buttonVariants[variant],
        sizeVariants[size],
        {
          'opacity-50 cursor-not-allowed': disabled
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative flex items-center gap-2">
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
