"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function ComingSoonBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const projectImages = [
    "/temp50.jpg",
    "/temp51.jpg",
    "/temp52.jpg",
    "/temp53.jpg",
    "/temp54.jpg",
    "/temp55.jpg",
    "/temp56.jpg",
    "/temp57.jpg",
    "/temp58.jpg",
    "/temp59.jpg",
    "/temp60.jpg",
    "/temp61.jpg",
    "/temp62.jpg",
    "/temp63.jpg",
    "/temp64.jpg",
    "/temp65.jpg",
    "/temp66.jpg",
    "/temp67.jpg",
    "/temp68.jpg",
    "/temp69.jpg",
    "/temp70.jpg",
    "/temp71.jpg",
    "/temp72.jpg",
    "/temp73.jpg",
    "/temp74.jpg",
    "/temp75.jpg",
    "/temp76.jpg",
    "/temp77.jpg",
    "/temp78.jpg",
    "/temp79.jpg",
    "/temp80.jpg",
    "/temp81.jpg",
    "/temp82.jpg",
    "/temp83.jpg",
    "/temp84.jpg",
    "/temp85.jpg",
    "/temp86.jpg",
    "/temp87.jpg",
    "/temp88.jpg",
    "/temp89.jpg",
    "/temp90.jpg",
  ]

  useEffect(() => {
    // Start slideshow immediately
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length)
    }, 3000) // Change every 3 seconds
    return () => clearInterval(interval)
  }, [projectImages.length])

  return (
    <section className="relative h-screen overflow-hidden bg-gray-100">
      {/* Full-width slideshow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={projectImages[currentImageIndex]}
          alt={`Project ${currentImageIndex + 1}`}
          className="w-full h-full object-contain transition-opacity duration-1000"
          style={{
            imageRendering: 'crisp-edges',
            objectPosition: 'center',
            backgroundColor: '#f8f9fa'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Slideshow Overlay Content */}
      <div className="absolute top-8 left-8 z-10">
        <Badge className="bg-black/50 text-white border-white/20 text-sm px-3 py-1 backdrop-blur-sm">
          <Clock className="h-4 w-4 mr-2" />
          SEWAS Nagri
        </Badge>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 z-10 text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-1 sm:mb-2 drop-shadow-lg">
          SEWAS Nagri - 800 Cities
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 drop-shadow-md mb-1">
          A Project by SEWAS Universal Federation
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-80 drop-shadow-md">
          Launching across India - Stay tuned!
        </p>
      </div>
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-10">
        <div className="bg-black/50 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
          {currentImageIndex + 1} / {projectImages.length}
        </div>
      </div>
      {/* Navigation dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {projectImages.slice(0, 10).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex % 10 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default ComingSoonBanner
