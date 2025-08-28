"use client";

import Image from "next/image";
import { Terminal, MessageCircle } from "lucide-react";

export default function Features() {
  return (
    <section className="pt-20 bg-black">
      <div className="flex justify-center">
        <div className="flex gap-16 flex-col border border-zinc-800 p-12 w-full max-w-xl">
         
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Terminal className="size-4" />
              <h2 className="text-base font-light text-zinc-200">
                Git-connected Deploys
              </h2>
            </div>

            <div className="text-xl tracking-tighter max-w-sm text-zinc-400">
              <span className="text-2xl font-bold text-white">
                From localhost to https, in seconds.
              </span>
              <br />
              Deploy from Git or your CLI.
            </div>
          </div>

         
          <div className="bg-transparent">
            <Image
              src={"/deploy.png"}
              width={500}
              height={500}
              alt="rollback"
            />
          </div>
        </div>

        <div className="flex gap-16 flex-col border border-zinc-800 p-12 w-full max-w-xl border-l-0">
         
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageCircle className="size-4" />
              <h2 className="text-base font-light text-zinc-200">
                Collaborative Pre-production
              </h2>
            </div>

            <div className="text-xl tracking-tighter max-w-sm text-zinc-400">
              <span className="text-2xl font-bold text-white">
                Every deploy is remarkable.
              </span>
              Chat with your team on real, production-grade UI, not just
              designs.
            </div>
          </div>

    
          <div className="bg-transparent">
            <Image
              src={"/message.png"}
              width={500}
              height={500}
              alt="rollback"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
