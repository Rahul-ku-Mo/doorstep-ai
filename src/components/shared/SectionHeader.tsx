"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string | React.ReactNode;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  layout?: "default" | "row";
}

export default function SectionHeader({
  tag,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  layout = "default",
}: SectionHeaderProps) {
  const containerClasses = layout === "row" 
    ? "flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center"
    : "flex flex-col items-start gap-2";

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="mb-2 flex grow flex-col items-start gap-2">
        <motion.div
          className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary size-2"></div>
          <span className="text-sm text-[#666666]/60 font-geist-mono uppercase">{tag}</span>
        </motion.div>

        <motion.h2
          className={`sm:text-4.5xl text-3xl font-normal text-black sm:max-w-lg ${titleClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      </div>

      {description && layout === "row" && (
        <motion.p
          className={`max-w-sm text-base text-accent sm:text-lg ${descriptionClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}

      {description && layout === "default" && (
        <motion.p
          className={`max-w-sm text-base text-accent sm:text-lg ${descriptionClassName}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
