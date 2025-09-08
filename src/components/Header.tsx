"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="border-x-medium-gray mx-auto max-w-6xl border border-y-0 px-4 pb-12 sm:px-6 lg:px-8 pt-2">
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
            <button className="border-border-gray flex items-center justify-center gap-1 rounded-full border border-x border-y-0 bg-white px-4 py-1.5 text-base text-black shadow-sm transition-colors">
              SDK Documentation
              <ArrowUpRight className="size-4.5" />
            </button>
            <button className="rounded-full border bg-black px-4 py-2 text-[15px] text-white">
              Get a Demo
            </button>

            {/* Mobile menu button */}
            <button
              className="p-1 text-gray-300 hover:text-white sm:p-2 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
