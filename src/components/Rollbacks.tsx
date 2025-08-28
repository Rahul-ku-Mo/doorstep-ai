"use client";

import { Clock10Icon } from "lucide-react";
import Image from "next/image";
export default function Rollbacks() {
  return (
    <div className="flex gap-16 flex-col border border-zinc-800 p-12 w-full max-w-xl">
     
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock10Icon className="size-4" />
          <h2 className="text-base font-light text-zinc-200">
            Instant Rollbacks
          </h2>
        </div>

      
        <div className="text-xl tracking-tighter max-w-sm text-zinc-400">
          <span className="text-2xl font-bold text-white">
          Go ahead, deploy on Friday.
          </span>
          Safely manage releases with automated deployments and instant
          rollbacks.
        </div>
      </div>

     
      <div className="bg-transparent">
        <Image
          src={"/vercel-last.png"}
          width={500}
          height={500}
          alt="rollback"
        />
      </div>
    </div>
  );
}
