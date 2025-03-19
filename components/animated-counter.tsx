"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      startTime = timestamp
      animate(timestamp)
    }

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className={className}>
      <span className="tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    </div>
  )
}

