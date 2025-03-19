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
          <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="default" className="rounded-full bg-[#3b5998] hover:bg-[#2d4373]" asChild>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="default" className="rounded-full bg-[#e4405f] hover:bg-[#d31e40]" asChild>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </Button>
        <Button size="icon" variant="default" className="rounded-full bg-[#ff0000] hover:bg-[#cc0000]" asChild>
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
        className="rounded-full mt-2"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  )
}

