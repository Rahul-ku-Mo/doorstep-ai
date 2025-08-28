"use client";

import Image from "next/image";
import { Terminal, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="flex flex-col lg:flex-row justify-center mx-auto">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className="flex gap-8 lg:gap-16 flex-col border border-zinc-800 p-6 sm:p-8 lg:p-12 w-full lg:max-w-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="size-4" />
              <h2 className="text-base font-light text-zinc-200">
                Git-connected Deploys
              </h2>
            </div>

            <div className="text-lg sm:text-xl tracking-tighter max-w-sm text-zinc-400">
              <span className="text-xl sm:text-2xl font-bold text-white">
                From localhost to https, in seconds.
              </span>
              <br />
              Deploy from Git or your CLI.
            </div>
          </div>

          <div className="bg-transparent overflow-hidden">
            <Image
              src={"/deploy.png"}
              width={500}
              height={500}
              alt="deploy"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-16 flex-col border border-zinc-800 lg:border-l-0 border-t-0 lg:border-t p-6 sm:p-8 lg:p-12 w-full lg:max-w-xl">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <h2 className="text-base font-light text-zinc-200">
                Collaborative Pre-production
              </h2>
            </div>

            <div className="text-lg sm:text-xl tracking-tighter max-w-sm text-zinc-400">
              <span className="text-xl sm:text-2xl font-bold text-white">
                Every deploy is remarkable.
              </span>
              Chat with your team on real, production-grade UI, not just
              designs.
            </div>
          </div>

          <div className="bg-transparent overflow-hidden">
            <Image
              src={"/message.png"}
              width={500}
              height={500}
              alt="message"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
