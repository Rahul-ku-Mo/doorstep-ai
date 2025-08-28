"use client";

import { GitBranch, Globe, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-16">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center relative z-20">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-zinc-100 mb-2">
            Build and deploy on the AI Cloud.
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 my-6 sm:my-8 leading-relaxed px-4 sm:px-0">
            Vercel provides the developer tools and cloud infrastructure to
            build, scale, and secure a faster, more personalized web.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <button className="group relative cursor-pointer inline-flex items-center justify-center px-6 sm:px-4 py-3 sm:py-4 text-sm sm:text-base font-medium text-black bg-white rounded-full transition-all duration-200 hover:shadow-xl w-full sm:w-auto">
              <svg
                className="w-5 h-5 mr-3 transition-transform duration-200 group-hover:scale-110"
                viewBox="0 0 74 64"
                fill="currentColor"
              >
                <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
              </svg>
              <span className="hidden sm:inline">Start Deploying</span>
              <span className="sm:hidden">Deploy</span>
            </button>

            <button className="px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-base border border-zinc-800 font-medium text-white bg-black rounded-full transition-all duration-200 w-full sm:w-auto">
              Get a Demo
            </button>
          </div>
        </div>

        {/* Animated Triangle Logo */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center px-4">
          <div className="relative z-20">
            {/* Rainbow gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 via-orange-400 to-red-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            {/* Triangle */}
            <svg
              className="relative size-32 sm:size-40 lg:size-48 transition-transform duration-500 hover:scale-110"
              viewBox="0 0 1200 700"
              fill="none"
            >
              <path
                fill="currentColor"
                className="text-white"
                d="M485 650.4h230L600 451.21z"
              />
              <path
                stroke="currentColor"
                className="text-white"
                strokeWidth="2"
                d="M715 650.4 L600 451.21 L485 650.4"
              />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0">
          <div className="grid grid-cols-12 md:grid-cols-16 lg:grid-cols-20 xl:grid-cols-24 gap-0 w-full h-full z-10">
            {Array.from({ length: 480 }, (_, i) => (
              <div
                key={i}
                className="aspect-square border border-zinc-800/40 bg-transparent hover:bg-zinc-900/20 transition-colors duration-300"
                
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="my-12 sm:my-16 text-center flex flex-col items-center justify-center relative z-20 px-4">
        <span className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight inline-flex gap-1.5 items-center flex-wrap justify-center">
          Develop with your favorite tools
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
        </span>
        <div className="flex flex-col items-center">
          <div className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight inline-flex gap-1.5 items-center flex-wrap justify-center">
            Launch globally, instantly
            <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight inline-flex gap-1.5 items-center flex-wrap justify-center">
            Keep pushing <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        </div>
      </div>
    </section>
  );
}
