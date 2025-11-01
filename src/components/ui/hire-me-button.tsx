'use client'

import React from 'react'
import { cn } from '@/lib/utils'
export default function HireMeButton() {

    const OpenEmail = () => {
        window.location.href = 'mailto:vrahul.engineer@gmail.com'
    }

  return (
    <div className={cn("border-l pl-3")}>
    <button className={cn("hire-me-btn text-[14px] text-blue-600 hover:text-zinc-500 hover:cursor-pointer")} onClick={()=>OpenEmail() }>
        Hire Me
    </button>
    </div>
  )
}
