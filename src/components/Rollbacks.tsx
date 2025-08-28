"use client";

import { Clock10Icon } from "lucide-react";
import Image from "next/image";
export default function Rollbacks() {
  return (
    <div className="flex gap-8 lg:gap-16 flex-col border border-zinc-800 p-6 sm:p-8 lg:p-12 w-full lg:max-w-xl">
     
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock10Icon className="size-4" />
          <h2 className="text-base font-light text-zinc-200">
            Instant Rollbacks
          </h2>
        </div>

      
        <div className="text-lg sm:text-xl tracking-tighter max-w-sm text-zinc-400">
          <span className="text-xl sm:text-2xl font-bold text-white">
          Go ahead, deploy on Friday.
          </span>
          Safely manage releases with automated deployments and instant
          rollbacks.
        </div>
      </div>

     
      <div className="bg-transparent overflow-hidden">
        <Image
          src="/vercel-last.png"
          width={500}
          height={500}
          alt="rollback"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
