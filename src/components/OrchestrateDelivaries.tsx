"use client";

import { CheckCircle, CircleCheck, DoorClosed } from "lucide-react";
import Image from "next/image";

export default function OrchestrateDelivaries() {
  return (
    <section className="border-x-medium-gray mx-auto w-full max-w-6xl border border-y-0">
      {/* Header */}
      <div className="border-y-medium-gray flex flex-col items-start justify-start gap-4 border border-x-0 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-6 lg:p-12">
        <div className="max-w-xl">
          <div className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4">
            <div className="bg-primary size-2" />
            <span className="text-sm text-[#666666]/60">
              Orchestrate Deliveries
            </span>
          </div>
          <h2 className="text-4.5xl text-black">
            <span className="text-primary">Trace</span> and investigate every
            claim with clarity
          </h2>
        </div>
        <div className="max-w-md text-base text-[#666666] sm:text-lg">
          <p>Tracking stops at the curb.</p>
          <p>Refunds pile up without proof inside the building.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-3 px-6 py-4 sm:px-8 lg:px-12">
        <button className="bg-primary rounded-full px-4 py-2 text-white shadow-sm">
          Entrance
        </button>
        <button className="rounded-full px-4 py-2 text-black">Elevation</button>
        <button className="rounded-full px-4 py-2 text-black">Drop-off</button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-10 p-6 sm:p-8 lg:p-12 lg:flex-row border border-medium-gray border-x-0 border-t-0">
        {/* Left: image with notification overlay */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative">
            <Image
              src="/orchesterate-delivaries.png"
              alt="Building schematic"
              width={578}
              height={578}
              className="h-auto w-full rounded"
            />
            {/* Floating notification card */}
            <div className="border-primary absolute top-6 right-2 z-10 w-[260px] sm:top-10 sm:right-6 sm:w-[300px] md:w-[340px] lg:top-24 lg:left-2/3 lg:right-auto lg:w-[360px] lg:-translate-x-1/2 rounded-md border bg-white/90 p-3 sm:p-4 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <div className="border-accent bg-primary size-8 rounded-full border flex items-center justify-center">
                  <DoorClosed className="size-4.5 text-white" />
                </div>
                <div className="flex-1 text-sm text-black">
                  Driver{" "}
                  <span className="text-primary text-sm font-medium">
                    entered
                  </span>{" "}
                  the building
                  <div className="font-geist-mono mt-1 text-xs text-[#bdbdbd] tracking-tight">
                    500 Memorial Dr, Cambridge, MA
                  </div>
                </div>
                <div className="font-geist-mono text-xs whitespace-nowrap text-[#bdbdbd]">
                  4:56 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: checklist */}
        <div className="w-full lg:w-1/2">
          <h3 className="mb-2 text-xl sm:text-2xl font-medium text-black">
            Verified building Entry
          </h3>
          <p className="mb-4 text-[#666666]">
            Prove that the courier moved inside, not just to the curb.
          </p>

          <ul className="space-y-3">
            {[
              "Detect entry points and log access",
              "Record lobby passage with timestamp",
              "Differentiate inside entry vs. curbside drop",
              "Establish a trusted start of delivery",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CircleCheck className="fill-accent size-4 text-white" />
                <span className="text-[#666666]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
