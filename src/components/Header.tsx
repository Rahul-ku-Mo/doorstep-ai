"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="border-x-medium-gray mx-auto max-w-6xl border border-y-0 px-4 pt-2 pb-10 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/Logo.svg"
                alt="Doorstep.ai"
                width={180}
                height={42}
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-2">
            <button className="border-border-gray hidden items-center justify-center gap-1 rounded-full border border-x border-y-0 bg-white px-4 py-1.5 text-base text-black shadow-sm transition-colors md:flex">
              SDK Documentation
              <ArrowUpRight className="size-4.5" />
            </button>
            <button className="rounded-full border bg-black px-3 py-1.5 text-sm text-white sm:px-4 sm:py-2 sm:text-[15px]">
              Get a Demo
            </button>

            {/* Mobile menu button */}
          </div>
        </div>
      </div>
    </header>
  );
}
