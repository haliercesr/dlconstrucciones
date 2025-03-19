"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AutoTextSliderProps {
  texts: string[]
  interval?: number
  className?: string
}

export default function AutoTextSlider({ texts, interval = 4000, className = "" }: AutoTextSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Set up the interval to change the text
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, interval)

    // Clean up the interval on component unmount
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-xl md:text-2xl text-white mb-8 max-w-3xl"
        >
          {texts[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

