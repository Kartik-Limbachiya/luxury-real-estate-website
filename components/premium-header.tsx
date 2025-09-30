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
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 md:h-20 flex items-center justify-between">
          <Link href="#" className="inline-flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-white/90 shadow premium-shadow">
              <Image src="/sewas-logo.png" alt="SEWAS Logo" width={40} height={40} className="h-10 w-10" />
            </span>
            <span className="hidden sm:block font-black tracking-tight text-xl md:text-2xl gradient-text">
              800 SEWAS City
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#vision" className="hover:text-primary transition">Vision</a>
            <a href="#mission" className="hover:text-primary transition">Mission</a>
            <a href="#about-us" className="hover:text-primary transition">About Us</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex"
              onClick={toggle}
              title="Toggle language"
            >
              {language === "en" ? "A/अ" : "अ/A"}
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg hover:from-amber-600 hover:to-orange-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default PremiumHeader

