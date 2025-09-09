"use client";

import Image from "next/image";

export default function Reliability() {
  return (
    <section className="border-x-medium-gray mx-auto flex w-full max-w-6xl flex-col border border-y-0 border-zinc-800">
      <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:p-12 lg:pr-0 lg:pb-0">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start gap-2">
            <div className="decoration-medium-gray flex items-center gap-1 underline decoration-dashed underline-offset-4">
              <div className="bg-primary size-3" />
              <span className="text-sm text-[#666666]/60">Reliability</span>
            </div>
            <h2 className="text-3xl sm:text-4.5xl text-black">
              Built on strong <span className="text-primary">foundations</span>{" "}
              for
            </h2>
            <div className="flex items-center justify-start gap-2">
              <Image
                src="./react-icon.svg"
                alt="react"
                width={48}
                height={48}
              />
              <Image src="./flutter.svg" alt="react" width={48} height={48} />
              <Image src="./android.svg" alt="android" width={48} height={48} />
              <Image src="./ios.svg" alt="ios" width={48} height={48} />
            </div>
          </div>

          <div>
            <div className="w-full max-w-md">
              <div className="divide-medium-gray/30 divide-y">
                <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-medium text-black sm:w-1/3">
                    Safe Rollouts.
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Scale confidently with controlled pilots and quick
                    adjustments.
                  </p>
                </div>
                <div className="border-t-medium-gray flex flex-col gap-2 border-t-2 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-medium text-black sm:w-1/3">
                    Observability
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Track trends, spot bottlenecks, and measure performance.
                  </p>
                </div>
                <div className="border-t-medium-gray flex flex-col gap-2 border-t-2 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-medium text-black sm:w-1/3">
                    Fraud Prevention
                  </div>
                  <p className="text-acent sm:w-2/3 text-accent">
                    Evidence-backed data reduces false claims.
                  </p>
                </div>
                <div className="border-y-medium-gray flex flex-col gap-2 border-y-2 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="font-medium text-black sm:w-1/3">
                    No hardware
                  </div>
                  <p className="text-accent sm:w-2/3">
                    Simple setup, no extra hardware required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent">
          <Image
            src="/reliability.png"
            width={600}
            height={480}
            alt="Reliablity"
            className="h-auto w-full max-w-xl lg:max-w-none"
          />
        </div>
      </div>

      <div className="h-full w-full px-6 py-10 text-center text-black sm:p-12">
        Backed by research by PhD team from MIT — 30+ indoor-nav patents & 50+
        publications.
      </div>
    </section>
  );
}
