"use client";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function Analytics() {
  return (
    <div className="flex gap-8 lg:gap-16 flex-col border border-zinc-800 p-6 sm:p-8 lg:p-12 w-full max-w-6xl">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-4" />
          <h2 className="text-base font-light text-zinc-200">Observability</h2>
        </div>

        <div className="text-lg sm:text-xl tracking-tighter max-w-sm text-zinc-400">
          <span className="text-xl sm:text-2xl font-bold text-white">
            Route-aware observability.
          </span>
          Monitor and Analyze the Performance and traffic of your projects
        </div>
      </div>

      <div className="bg-transparent overflow-hidden">
        <Image
          src="/analytics-large-light.avif"
          width={980}
          height={500}
          alt="analytics"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
