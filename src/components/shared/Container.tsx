"use client";

import { ReactNode } from "react";
import CornerPlus from "./CornerPlus";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  hasBorder?: boolean;
  hasCornerPlus?: boolean;
  borderPosition?: "all" | "x" | "y" | "top" | "bottom" | "left" | "right" | "none";
}

const borderClasses = {
  all: "border",
  x: "border-x",
  y: "border-y", 
  top: "border-t",
  bottom: "border-b",
  left: "border-l",
  right: "border-r",
  none: ""
};

export default function Container({
  children,
  className = "",
  hasBorder = true,
  hasCornerPlus = false,
  borderPosition = "all"
}: ContainerProps) {
  const borderClass = hasBorder ? `border-medium-gray ${borderClasses[borderPosition]}` : "";
  
  return (
    <section className={`relative mx-auto w-full max-w-[1152px] ${borderClass} ${className}`}>
      {hasCornerPlus && (
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <CornerPlus position="top-left" />
          <CornerPlus position="top-right" />
        </div>
      )}
      {children}
    </section>
  );
}
