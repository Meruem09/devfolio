import React from 'react'
import { cn } from '@/lib/utils';
import { Hackathons } from '../../types/hackathons'

export default function HackathonItem(hackathons: Hackathons) {
  const { start, end } = hackathons.period;
  return (
    <li className={cn("relative flex gap-6 pb-10 last:pb-0")}>
      {/* Timeline Icon + Line */}
      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div className="z-10 w-10 h-10 rounded-full bg-white border border-zinc-300 flex items-center justify-center">
          <img
            src={hackathons.image}
            alt="hackathon logo"
            className="w-8 h-8 rounded-full object-contain"
          />
        </div>

        {/* Vertical Line */}
        <div className="absolute top-10 bottom-0 w-px bg-zinc-200" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1">
        {/* Date */}
        <div className="text-xs text-zinc-500">
          {start} - {end}
        </div>

        {/* Title */}
        <div className="font-semibold text-base">
          {hackathons.title}
        </div>

        {/* Location */}
        <div className={cn("text-sm ")}>{hackathons.location}</div>

        {/* Description */}
        <div className="text-sm text-zinc-500 mb-5">
          {hackathons.description}
        </div>
      </div>
    </li>
  )
}
