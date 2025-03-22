"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  testimonial: string
  image: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
  autoSlideInterval?: number
}

export default function TestimonialSlider({ testimonials, autoSlideInterval = 5000 }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)

    return () => clearInterval(timer)
  }, [currentIndex, isPaused, autoSlideInterval])

  return (
    <div
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-card rounded-lg p-8 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative h-20 w-20 shrink-0 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{testimonials[currentIndex].name}</h3>
                <p className="text-muted-foreground italic">"{testimonials[currentIndex].testimonial}"</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-darkGray/80 backdrop-blur-sm z-10 hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-darkGray/80 backdrop-blur-sm z-10 hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Siguiente</span>
      </Button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-5" : "bg-muted-foreground/30"
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

