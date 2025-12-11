"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import Image from "next/image"

interface ServiceImage {
  src: string
  alt: string
}

interface ExpandableServiceCardProps {
  name: string
  icon: React.ComponentType<{ className?: string }>
  description: string
  images: ServiceImage[]
  isExpanded: boolean
  onToggle: () => void
  onRedirectToServices: () => void
}

export function ExpandableServiceCard({
  name,
  icon: Icon,
  description,
  images,
  isExpanded,
  onToggle,
  onRedirectToServices
}: ExpandableServiceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 3 seconds when expanded
  useEffect(() => {
    if (isExpanded && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % images.length
        )
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isExpanded, images.length])

  // Reset image index when card is collapsed
  useEffect(() => {
    if (!isExpanded) {
      setCurrentImageIndex(0)
    }
  }, [isExpanded])

  return (
    <Card className={`glass-card hover:shadow-lg transition-all duration-500 mobile-card ${isExpanded ? 'expanded-card' : ''
      }`}>
      <CardContent className="p-4 md:p-6 relative">
        <div className="relative z-10 flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold">{name}</h3>
        </div>

        <p className="relative z-10 text-muted-foreground text-sm md:text-sm mb-3 md:mb-4">
          {description}
        </p>

        {/* Slideshow Section - Only shown when expanded */}
        {isExpanded && images.length > 0 && (
          <div className="slideshow-container relative z-0 mt-4 mb-4 -mx-4 md:-mx-6">
            <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
              {/* Blurred Background to fill space */}
              <div className="absolute inset-0">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover blur-xl scale-110 opacity-60 dark:opacity-40"
                  priority={currentImageIndex === 0}
                />
              </div>

              {/* Main Image - Contained to show full content without cropping */}
              <div className="absolute inset-0 z-10">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-contain transition-opacity duration-500 drop-shadow-lg"
                  priority={currentImageIndex === 0}
                />
              </div>

              {/* Image counter */}
              <div className="absolute bottom-2 right-2 z-20 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Navigation dots */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 p-1 rounded-full bg-black/20 backdrop-blur-[2px]">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-3' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Manual navigation buttons - Keeping padding */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-2 px-4 md:px-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentImageIndex(
                    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
                  )}
                  className="text-xs h-7"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentImageIndex(
                    (currentImageIndex + 1) % images.length
                  )}
                  className="text-xs h-7"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button
            className="flex-1 mobile-button w-full"
            variant="outline"
            size="sm"
            onClick={onToggle}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" />
                Learn More
              </>
            )}
          </Button>

          {isExpanded && (
            <Button
              className="mobile-button w-full sm:w-auto"
              size="sm"
              onClick={onRedirectToServices}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View All Services
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
