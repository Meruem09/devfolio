'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TopScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // style safety: ensure transform origin left
    bar.style.transformOrigin = 'left center'
    bar.style.willChange = 'transform'

    let tl: gsap.Timeline | null = null
    let st: ScrollTrigger | null = null
    let updateOnChange: () => void = () => {}
    let cleanupListeners: (() => void) | undefined = undefined

    if (prefersReduced) {
      // If user prefers reduced motion - simply set immediate value on scroll
      const handle = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight
        const progress = height > 0 ? window.scrollY / height : 0
        bar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress))})`
        bar.setAttribute('aria-valuenow', String(Math.round(progress * 100)))
      }
      handle()
      const scrollHandler = () => handle()
      const resizeHandler = () => handle()
      window.addEventListener('scroll', scrollHandler, { passive: true })
      window.addEventListener('resize', resizeHandler)
      updateOnChange = handle
      cleanupListeners = () => {
        window.removeEventListener('scroll', scrollHandler)
        window.removeEventListener('resize', resizeHandler)
      }
    } else {
      // Using ScrollTrigger: scrub maps scroll to animation progress smoothly
      tl = gsap.timeline({
        scrollTrigger: {
          scrub: 0.2, // smoothing
          start: 0,
          end: 'bottom bottom',
          // markers: true // for debugging
        }
      })

      st = tl.scrollTrigger

      tl.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none' // ScrollTrigger's scrub will control easing
        }
      )

      // Update aria on scroll
      const updateAria = () => {
        let progress = 0
        if (tl) {
          progress = tl.progress()
        } else {
          // fallback compute:
          const height = document.documentElement.scrollHeight - window.innerHeight
          const fallback = height > 0 ? window.scrollY / height : 0
          progress = Math.max(0, Math.min(1, fallback))
        }
        bar.setAttribute('aria-valuenow', String(Math.round(progress * 100)))
      }
      const scrollHandler = () => updateAria()
      const resizeHandler = () => updateAria()
      window.addEventListener('scroll', scrollHandler, { passive: true })
      window.addEventListener('resize', resizeHandler)

      updateOnChange = () => {
        ScrollTrigger.refresh()
        if (tl) {
          gsap.set(bar, { scaleX: tl.progress() })
        }
        updateAria()
      }

      cleanupListeners = () => {
        window.removeEventListener('scroll', scrollHandler)
        window.removeEventListener('resize', resizeHandler)
      }

      // initial aria
      updateAria()
    }

    const resizeObserver = new ResizeObserver(updateOnChange)
    resizeObserver.observe(document.body)

    // initial call (redundant in branches but safe)
    updateOnChange()

    return () => {
      resizeObserver.disconnect()
      if (cleanupListeners) {
        cleanupListeners()
      }
      if (st) {
        st.kill()
      }
    }
  }, [prefersReduced])

  return (
    <>
      <div
        aria-hidden="false"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        className="fixed top-0 left-0 right-0 h-[4px] z-50 pointer-events-none"
      >
        <div
          ref={barRef}
          className="h-full origin-left"
          style={{
            transform: 'scaleX(0)',
            background: 'linear-gradient(90deg, #374151 0%, #374151 50%, #374151 100%)',
            boxShadow: '0 4px 20px rgba(100,64,255,0.18)',
            borderBottomLeftRadius: '999px',
            borderBottomRightRadius: '999px',
            transition: 'box-shadow 0.2s',
          }}
        />
      </div>
      <style jsx>{`
        .h-1 { height: 4px; }
        @media (max-width: 640px) {
          .h-1 { height: 6px; }
        }
      `}</style>
    </>
  )
}