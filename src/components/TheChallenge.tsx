"use client";

import Image from "next/image";
import { CheckCircle, Square, AlertTriangle, TrendingUp } from "lucide-react";

export default function TheChallenge() {
  return (
    <>
      <section className="border-medium-gray relative z-10 mx-auto w-full max-w-6xl border pt-20">
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
        <div className="flex items-start justify-between gap-6 p-6 sm:p-8 lg:p-12 lg:pb-20">
          <div className="max-w-md">
            <div className="decoration-medium-gray mb-2 flex items-center gap-2 underline decoration-dashed underline-offset-4">
              <div className="bg-primary size-2" />
              <span className="text-sm text-[#666666]/60">The Challenge</span>
            </div>
            <h2 className="text-4.5xl text-black">
              The problem with <br />
              <span className="text-primary">last-mile delivery</span>
            </h2>
            <div className="mt-5 space-y-2">
              <div className="font-medium text-black">
                Fraud hides in delivery blind spots
              </div>
              <p className="max-w-xl text-[#666666]">
                Beyond the doorstep, visibility ends — making it easy for false
                claims to slip through and cost providers billions.
              </p>
            </div>

            <div className="mt-4 grid flex-1 grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
              <Bullet
                icon={<Square className="size-4 text-black" />}
                label="No in-building proof"
              />
              <Bullet
                icon={<AlertTriangle className="size-4 text-black" />}
                label="False claims slip"
              />
              <Bullet
                icon={<TrendingUp className="size-4 text-black" />}
                label="Disputes escalate"
              />
              <Bullet
                icon={<TrendingUp className="size-4 text-black" />}
                label="Refunds spiral out"
              />
            </div>
          </div>

          {/* Right side image + badge */}
          <div className="relative hidden w-full max-w-lg flex-1 items-start justify-end lg:flex">
            <Image
              src="/the-challenge.svg"
              alt="Refund and support flow"
              width={640}
              height={480}
              className="relative z-10 h-auto w-full rounded"
            />
          </div>
        </div>

        {/* stats */}
        <div className="absolute bottom-0 flex flex-col gap-8 px-6 pb-10 sm:px-8 lg:flex-row lg:px-12 lg:pb-20">
          <div className="flex flex-1 items-end justify-start gap-12">
            <Stat value="40%" caption="POD photos lack context" />
            <Stat value="2x" caption="Refunds without visibility" />
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        {(() => {
          const width = 1152;
          const height = 101;
          const columns = 24; // 48px grid across width
          const gap = width / columns; // 48
          const accentIndices = new Set([1, 2, 18, 19]);
          return (
            <svg
              width={width}
              height={height}
              viewBox={`0 0 ${width} ${height}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: columns + 1 }, (_, i) => {
                const x = Math.round(i * gap) + 0.5;
                const isAccent = accentIndices.has(i);
                return (
                  <line
                    key={i}
                    opacity={0.1}
                    x1={x}
                    y1={0.818359}
                    x2={x}
                    y2={100.818}
                    stroke={isAccent ? "#1560FF" : "#343A40"}
                    strokeWidth={isAccent ? 11 : 1}
                  />
                );
              })}
            </svg>
          );
        })()}
      </div>
    </>
  );
}

function Bullet({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="border-medium-gray/60 flex h-6 w-6 items-center justify-center rounded border bg-white">
        {icon}
      </div>
      <span className="text-black">{label}</span>
    </div>
  );
}

function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <div>
      <div className="font-geist-mono text-7xl font-medium text-black">
        {value}
      </div>
      <div className="text-[#666666]">{caption}</div>
    </div>
  );
}
