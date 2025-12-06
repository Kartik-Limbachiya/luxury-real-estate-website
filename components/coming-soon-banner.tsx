"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, MapPin } from "lucide-react"
import { Confetti, type ConfettiRef } from "@/components/ui/confetti"

// --- Internal Component: SEWAS Text Effect ---
function SewasTextInteractive() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const confettiRef = useRef<ConfettiRef>(null)

  const letters = [
    {
      char: "S",
      rest: "un",
      full: "Sun",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      description: "Radiance",
      confettiColor: "#FFD700", // Gold
      shape: "circle",
    },
    {
      char: "E",
      rest: "arth",
      full: "Earth",
      gradient: "from-green-400 via-emerald-600 to-teal-700",
      description: "Foundation",
      confettiColor: "#228B22", // Forest Green
      shape: "square",
    },
    {
      char: "W",
      rest: "ater",
      full: "Water",
      gradient: "from-blue-400 via-cyan-500 to-blue-700",
      description: "Purity",
      confettiColor: "#00BFFF", // Deep Sky Blue
      shape: "circle",
    },
    {
      char: "A",
      rest: "ir",
      full: "Air",
      gradient: "from-slate-200 via-gray-400 to-slate-600",
      description: "Freedom",
      confettiColor: "#A9A9A9", // Dark Gray
      shape: "star",
    },
    {
      char: "S",
      rest: "ky",
      full: "Sky",
      gradient: "from-sky-300 via-blue-400 to-indigo-600",
      description: "Limitless",
      confettiColor: "#87CEEB", // Sky Blue
      shape: "circle",
    },
  ]

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    // Fire confetti for the specific letter
    confettiRef.current?.fire({
      particleCount: 20,
      spread: 60,
      origin: { y: 0.6 }, // Approximate vertical center of text
      colors: [letters[index].confettiColor],
      shapes: [letters[index].shape as "circle" | "square" | "star"],
      scalar: 1.2,
      drift: 0,
      ticks: 100,
    })
  }

  return (
    <div className="relative flex flex-col items-center justify-center py-8">
      {/* Invisible Confetti Canvas Controller */}
      <div className="absolute inset-0 pointer-events-none">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          manualstart={true}
        />
      </div>

      <div className="flex flex-wrap justify-center items-baseline gap-1 sm:gap-2 md:gap-4 select-none z-10">
        {letters.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center justify-center cursor-pointer group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-baseline">
              {/* Main Letter - Always Visible */}
              <motion.span
                className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-b ${item.gradient} bg-clip-text text-transparent`}
                animate={{
                  scale: hoveredIndex === index ? 1.15 : 1,
                  filter: hoveredIndex === index ? "brightness(1.2)" : "brightness(1)",
                  textShadow:
                    hoveredIndex === index
                      ? "0px 0px 30px rgba(255,255,255,0.4)"
                      : "0px 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {item.char}
              </motion.span>

              {/* Expanding Text - Only Visible on Hover */}
              <motion.span
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent overflow-hidden whitespace-nowrap`}
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: hoveredIndex === index ? "auto" : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                  marginLeft: hoveredIndex === index ? 2 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} // Smooth easeOut
              >
                {item.rest}
              </motion.span>
            </div>

            {/* Description Label - Floating Below */}
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute -bottom-8 md:-bottom-12 text-xs sm:text-sm font-medium tracking-widest text-white/80 uppercase whitespace-nowrap"
                >
                  {item.description}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// --- Main Exported Component ---
export function ComingSoonBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Hydration Fix: Only render complex interactive components after mount
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Architectural images for the background
  const bannerImages = [
    {
      src: "/luxury-mumbai-apartment-building.jpg",
      location: "Mumbai, Maharashtra",
      title: "Elevated Living Standards",
    },
    {
      src: "/modern-residential-tower-mumbai.jpg",
      location: "Thane, Maharashtra",
      title: "Sustainable Architecture",
    },
    {
      src: "/luxury-pune-residential-complex.jpg",
      location: "Pune, Maharashtra",
      title: "Community Centric Design",
    },
    {
      src: "/modern-luxury-building-architecture.jpg",
      location: "Ahmedabad, Gujarat",
      title: "Modern Jain Infrastructure",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [bannerImages.length])

  // Prevent hydration mismatch by rendering a simple loader or empty state initially
  if (!isMounted) {
    return (
      <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black flex items-center justify-center">
        <div className="animate-pulse text-white/20 text-xl font-serif">Loading 800 SEWAS Nagri...</div>
      </section>
    )
  }

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      {/* 1. Background Slideshow */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${bannerImages[currentImageIndex].src}')` }}
          />
          {/* Professional Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-6 w-full"
        >
          {/* Tagline */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-8 sm:w-12 bg-amber-500/60" />
            <span className="text-amber-400 tracking-[0.2em] text-[10px] sm:text-xs md:text-sm font-medium uppercase">
              The Jainism of Universe
            </span>
            <div className="h-[1px] w-8 sm:w-12 bg-amber-500/60" />
          </div>

          {/* Interactive SEWAS Text Component */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white tracking-tight leading-none">
              800
            </h1>
            
            {/* The Magic Hover Component */}
            <SewasTextInteractive />
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                Nagri
              </span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mt-4">
            Building <strong>1,024 Homes per City</strong> across India.
            <span className="block mt-2 text-gray-400 text-sm sm:text-base">
              A Project by SEWAS Universal Federation
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12">
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector("#about-us")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="min-w-[180px] h-12 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] border-none"
            >
              Explore Vision
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#project")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="min-w-[180px] h-12 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm rounded-sm font-medium transition-all duration-300"
            >
              View Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 3. Bottom Information Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <motion.div
            key={`loc-${currentImageIndex}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <MapPin className="h-4 w-4 text-amber-500" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">
              {bannerImages[currentImageIndex].location} —{" "}
              <span className="text-amber-100/70">{bannerImages[currentImageIndex].title}</span>
            </span>
          </motion.div>

          <div className="flex items-center gap-2">
            {bannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  idx === currentImageIndex ? "w-8 bg-amber-500" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoonBanner;