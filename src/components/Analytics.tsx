'use client'
import Image from 'next/image'
import { TrendingUp  } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="flex gap-16 flex-col border border-zinc-800 p-12 w-full max-w-6xl justify-between">
   
    <div className="space-y-2 absolute">
      <div className="flex items-center gap-2">
        <TrendingUp className="size-4" />
        <h2 className="text-base font-light text-zinc-200">
          Observability
        </h2>
      </div>

    
      <div className="text-xl tracking-tighter max-w-sm text-zinc-400">
        <span className="text-2xl font-bold text-white">
        Route-aware obeservability.
        </span>
        Monitor and Analysize the Performance and traffic of your projects
      </div>
    </div>

    <div className="bg-transparent">
      <Image
        src={"/analytics-large-light.avif"}
        width={980}
        height={500}
        alt="rollback"
      />
    </div>
  </div>
  )
}
