"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(6).fill(1);
  const cols = new Array(12).fill(1);

  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex h-full w-full items-center justify-center",
        className,
      )}
      {...rest}
    >
      <div className="grid h-full max-h-full w-full max-w-7xl grid-cols-12 grid-rows-6">
        {rows.map((_, i) =>
          cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `oklch(95% 0 0)`,
                transition: { duration: 0.1 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`cell-${i}-${j}`}
              className="relative border-r border-b border-secondary transition-colors duration-200 hover:border-secondary/50 bg-transparent"
             
            ></motion.div>
          )),
        )}
      </div>
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
