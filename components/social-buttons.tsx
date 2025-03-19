"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, MessageCircle, ChevronUp } from "lucide-react"

export default function SocialButtons() {
  const [isVisible, setIsVisible] = useState(false)

  // Show buttons after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
      {/* Social Media Buttons */}
      <div className="flex flex-col gap-2">
        <Button size="icon" variant="default" className="rounded-full bg-green-600 hover:bg-green-700" asChild>
          <a href="https://wa.me/5492213502103" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="default" className="rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90" asChild>
          <a href="https://www.facebook.com/diego.deluca.73594" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </Button>
        {/*<Button size="icon" variant="default" className="rounded-full bg-[#E4405F] hover:bg-[#E4405F]/90" asChild>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </Button>*/}
        <Button size="icon" variant="default" className="rounded-full bg-[#FF0000] hover:bg-[#FF0000]/90" asChild>
          <a
            href="https://youtube.com/@dlconstrucciones"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </Button>
      </div>

      {/* Scroll to Top Button */}
      <Button
        size="icon"
        variant="secondary"
        className="rounded-full mt-2 bg-black/80 hover:bg-black/70 text-white"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  )
}

