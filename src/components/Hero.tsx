"use client";

import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Hero Content */}
      <div className="border-medium-gray relative mx-auto max-w-6xl border border-x px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-56">
        <div className="relative z-20 mx-auto max-w-2xl text-center">
          {/* Main Heading */}
          <h1 className="mb-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Delivery accuracy, down to
            <br /> the exact door for
            <span className="text-blue-600"> packages|</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto my-6 max-w-2xl px-4 text-base text-gray-600 sm:my-8 sm:px-0 sm:text-base lg:text-xl">
            Tools that bring precision to the final stretch of delivery.
            Eliminate confusion, reduce refunds, and deliver with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 px-4">
            <button className="group relative inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-xl">
              <span className="hidden sm:inline">See the Dashboard</span>
              <span className="sm:hidden">Dashboard</span>
            </button>

            <button className="flex items-center justify-center rounded-full px-4 py-2 text-base font-medium transition-all duration-200 hover:text-blue-600">
              Talk to an Expert
              <ChevronRightIcon className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div
            className="grid w-full grid-cols-11 gap-0"
            style={{ aspectRatio: "11/6" }}
          >
            {Array.from({ length: 66 }, (_, i) => (
              <div
                key={i}
                className="aspect-square border border-zinc-800/20 bg-transparent transition-all duration-300 hover:border-zinc-800/60 hover:bg-zinc-900/10"
              />
            ))}
          </div>

          {/* Corner plus marks */}
          <svg className="absolute -left-[8.5px] -top-2 size-4 text-black z-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <svg className="absolute -right-[8.5px] -top-2 h-4 w-4 text-black z-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        
        </div>



      </div>

      {/* Background Image */}
      <Image src="/Hero.png" fill={true} alt="Hero" className="md:object-cover object-contain" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#fafafa]/20 to-[#fafafa]"></div>
    </section>
  );
}
