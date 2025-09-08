"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main CTA Section */}
      <section className="border-medium-gray w-full border">
        {/* Decorative bar above */}
        <div className="flex justify-center">
          {(() => {
            const width = 1152;
            const height = 101;
            const columns = 24; // 48px grid across width
            const gap = width / columns; // 48
            const accentIndices = new Set([1, 2, 18, 19]);
            return (
              <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      stroke={isAccent ? '#1560FF' : '#343A40'}
                      strokeWidth={isAccent ? 11 : 1}
                    />
                  );
                })}
              </svg>
            );
          })()}
        </div>

        <div className="border-medium-gray bg-card mx-auto flex w-full max-w-6xl flex-col border lg:flex-row">
          <div className="flex w-full flex-col gap-8 p-6 sm:p-8 lg:max-w-3xl lg:gap-16 lg:p-12">
            <div className="text-4.5xl text-primary max-w-xl">
              <span className="text-black">
                Scale delivery operations without compromising
              </span>{" "}
              trust or efficiency.
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <div className="flex flex-col items-stretch justify-start gap-3 sm:flex-row sm:items-center sm:gap-2">
              <button className="rounded-full border bg-black px-4 py-1.5 font-medium text-white sm:px-3 sm:py-2">
                Visit Docs
              </button>
              <button className="rounded-full border border-gray-300 bg-transparent px-4 py-3 font-medium text-black sm:px-3 sm:py-2">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
        {/* Decorative bar below */}
        <div className="flex justify-center">
          {(() => {
            const width = 1152;
            const height = 101;
            const columns = 24; // 48px grid
            const gap = width / columns;
            const accentIndices = new Set([8, 9, 22]);
            return (
              <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      stroke={isAccent ? '#1560FF' : '#343A40'}
                      strokeWidth={isAccent ? 11 : 1}
                    />
                  );
                })}
              </svg>
            );
          })()}
        </div>
      </section>

      {/* Navigation Links */}
      <section className="border-x-medium-gray mx-auto max-w-6xl border border-y-0 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            {/* Products */}

            <div className="flex flex-col gap-4">
              <Image src="./Logo.svg" width={180} height={44} alt="Logo" />

              <div className="font-geist-mono w-full max-w-40 text-sm text-[#939290]">
                33 West 17th Street New York, 10011 United States
              </div>

              <div className="border-medium-gray flex w-fit items-center justify-start border border-y-0">
                <Image
                  src="./LinkedIn.svg"
                  width={24}
                  height={24}
                  alt="linkedin"
                  className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                />
                <Image
                  src="./X.svg"
                  width={24}
                  height={24}
                  alt="x"
                  className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                />
                <Image
                  src="./Facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook"
                  className="transition-transform duration-200 hover:scale-110 hover:opacity-80"
                />
              </div>
            </div>
            <div>
              <ul className="space-y-3 text-base">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 underline-offset-4 transition-colors"
                  >
                    <span className="hover:text-black hover:underline">
                      {" "}
                      Careers{" "}
                    </span>
                    <span className="text-primary border-secondary font-geist-mono rounded-full border bg-white px-1 py-0.5 text-[10px] shadow-sm">
                      We&apos;re hiring
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline-offset-4 transition-colors hover:text-black hover:underline"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="underline-offset-4 transition-colors hover:text-black hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="border-medium-gray font-geist-mono mx-auto max-w-6xl border pt-6 pb-3 text-center text-[#939290]">
        © 2025 doorstep.ai. All rights reserved.
      </section>
    </footer>
  );
}
