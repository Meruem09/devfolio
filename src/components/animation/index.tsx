'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const textRef = useRef<Array<HTMLSpanElement | null>>([])
  const lineRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const letters = textRef.current
    const tl = gsap.timeline({
      onComplete: () => {
        // Step 4: line animation reveal
        gsap.to(lineRef.current, {
          width: '100%',
          duration: 0.5,
          ease: 'ease-in',
          onComplete: () => {
            gsap.to(lineRef.current, {
              height: '100%',
              top: 0,
              duration: 1.2,
              ease: 'power2.inOut',
              onComplete: () => {
                setShow(false)
                onComplete()
              },
            })
          },
        })
      },
    })

    // Step 1: fade out letters
    tl.to(letters, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'back.in(1.2)',
      stagger: 0.05,
    })
      // Step 2: show only R and V
      .set(letters, { display: 'none' })
      .set([letters[0], letters[6]], {
        display: 'inline-block',
        opacity: 1,
        y: 0,
      })
      // Step 3: bring R and V together
.to([letters[0], letters[6]], {
  x: (i) => {
    const width = window.innerWidth
    // Smaller distance on small screens, more on larger
    const distance =
      width < 480 ? 40 : width < 768 ? 60 : 80
    return i === 0 ? distance : -distance
  },
  scale: 1.3,
  duration: 1,
  ease: 'elastic.out(1, 0.5)',
})
  }, [onComplete])

  if (!show) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-center overflow-hidden z-50">
      {/* Responsive text */}
      <div
        className="
          font-bold flex flex-wrap justify-center gap-2
          text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem]
        "
      >
        {'RAHUL VARMA'.split('').map((char, index) => (
          <span
            key={index}
            ref={(el) => { textRef.current[index] = el }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Reveal line */}
      <div
        ref={lineRef}
        className="absolute left-0 top-1/2 h-[2px] bg-white w-0 origin-left"
      ></div>
    </div>
  )
}
