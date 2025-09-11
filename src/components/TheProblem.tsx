"use client";

import Image from "next/image";
import { MessageSquare, Package, Download, Eye } from "lucide-react";

export default function TheProblem() {
  return (
    <>
      <section className="border-medium-gray relative z-10 mx-auto w-full max-w-7xl border border-t-0">
        <svg
          className="absolute -top-2 -left-[8.5px] z-50 size-4 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
        <svg
          className="absolute -top-2 -right-[8.5px] z-50 h-4 w-4 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>

        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pt-20">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="mb-2 flex flex-col items-start gap-2">
              <div className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4">
                <div className="bg-primary size-2"></div>
                <span className="text-sm text-[#666666]/60">The Challenge</span>
              </div>

              <h2 className="sm:text-4.5xl text-3xl text-black">
                The <span className="text-primary">problem</span> with last-mile
                <br /> delivery
              </h2>
            </div>

            <p className="max-w-xl text-base text-[#939290]">
              Beyond the doorstep, visibility ends — making it easy for false
              claims to slip through and cost providers billions.
            </p>
          </div>
        </div>

        <div className="border-medium-gray relative border border-x-0 border-b-0">
          <Image src="/problem.svg" alt="Problem" width={1280} height={720} />
        </div>
      </section>
    </>
  );
}
