"use client";
import Image from "next/image";

export default function AIGateway() {
  return (
    <div className="flex gap-8 lg:gap-16 flex-col border border-zinc-800 p-6 sm:p-8 lg:p-12 w-full lg:max-w-xl lg:border-r-0">
      {/* AI Gateway Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 2L14 8L8 14L2 8L8 2Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M8 6L10 8L8 10L6 8L8 6Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-base font-light text-zinc-200">
            Vercel AI Gateway
          </h2>
        </div>

        <div className="text-lg sm:text-xl tracking-tighter max-w-sm text-zinc-400">
          <span className="text-xl sm:text-2xl font-bold text-white">
            Deploy AI in seconds.
          </span>
          Access all major models through a single, unified interface and shared
          AI credit wallet.
        </div>
      </div>

      {/* AI Gateway Visual */}
      <div className="bg-transparent rounded-2xl p-4 sm:p-6 lg:p-8 overflow-hidden">
        <Image
          src="/ai-gateway-full-dark.svg"
          width={500}
          height={500}
          alt="AI Gateway"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
