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
    <Card className={`glass-card hover:shadow-lg transition-all duration-500 mobile-card ${
      isExpanded ? 'expanded-card' : ''
    }`}>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <h3 className="text-base md:text-lg font-bold">{name}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm md:text-sm mb-3 md:mb-4">
          {description}
        </p>

        {/* Slideshow Section - Only shown when expanded */}
        {isExpanded && images.length > 0 && (
          <div className="slideshow-container mb-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain transition-opacity duration-500"
                priority={currentImageIndex === 0}
              />
              
              {/* Image counter */}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {currentImageIndex + 1} / {images.length}
              </div>
              
              {/* Navigation dots */}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Manual navigation buttons */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentImageIndex(
                    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
                  )}
                  className="text-xs"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentImageIndex(
                    (currentImageIndex + 1) % images.length
                  )}
                  className="text-xs"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 mobile-button" 
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
              className="mobile-button" 
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
