// app/components/ClientAnimatedShell.tsx
'use client'
import React, { useState } from 'react'
import IntroAnimation from '.'

export default function ClientAnimatedShell({ children }: { children: React.ReactNode }) {
  const [animationDone, setAnimationDone] = useState(false)

  return (
    <>
      {/* Intro overlay (only before animationDone) */}
      {!animationDone && <IntroAnimation onComplete={() => setAnimationDone(true)} />}

      {/* Main content: hidden until animationDone for smooth reveal */}
      <div
        className={`transition-opacity duration-700 ${animationDone ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {children}
      </div>
    </>
  )
}
