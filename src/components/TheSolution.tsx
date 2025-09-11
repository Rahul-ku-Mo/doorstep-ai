"use client";

import Image from "next/image";

export default function TheSolution() {
  return (
    <>
      <section className="border-medium-gray relative z-10 mx-auto w-full max-w-7xl border border-y-0 pt-12 sm:pt-16 lg:pt-20">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:gap-6 lg:p-12 lg:pb-12">
          <div className="flex w-full items-center justify-between gap-4">
            <div className="mb-2 flex flex-col items-start gap-2 grow">
              <div className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4">
                <div className="bg-primary size-2"></div>
                <span className="text-sm text-[#666666]/60">The Solution</span>
              </div>

              <h2 className="sm:text-4.5xl text-3xl text-black">
                A <span className="text-primary">smarter layer</span> for the{" "}
                <br /> last stretch
              </h2>
            </div>

            <p className="max-w-xl text-base text-[#939290]">
              See couriers move through stairs, lifts, and doors inside a
              building. Every step becomes defensible evidence.
            </p>
          </div>
        </div>

        <div className="relative pb-20">
          <Image
            src="/the-solution.svg"
            alt="Solution"
            width={1280}
            height={720}
          />
        </div>
      </section>
    </>
  );
}
