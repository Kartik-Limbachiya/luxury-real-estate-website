"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"

export function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { language, toggle } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition " +
        (scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-black/5 shadow-sm"
          : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="h-14 md:h-20 flex items-center justify-between">
          <Link href="#" className="inline-flex items-center gap-2 md:gap-3">
            <span className="inline-flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-md bg-white/90 shadow premium-shadow">
              <Image src="/sewas-logo.png" alt="SEWAS Logo" width={32} height={32} className="h-6 w-6 md:h-8 md:w-8" />
            </span>
            <span className="font-black tracking-tight text-sm md:text-xl lg:text-2xl gradient-text">
              800 SEWAS City
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#vision" className="hover:text-primary transition">Vision</a>
            <a href="#mission" className="hover:text-primary transition">Mission</a>
            <a href="#about-us" className="hover:text-primary transition">About Us</a>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex text-xs md:text-sm"
              onClick={toggle}
              title="Toggle language"
            >
              {language === "en" ? "A/अ" : "अ/A"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PremiumHeader

