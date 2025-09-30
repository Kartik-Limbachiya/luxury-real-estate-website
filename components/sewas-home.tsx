"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LocationFilter, type LocationSelection } from "@/components/location-filter"
import { CategorySelector } from "@/components/category-selector-working"
import { VisionSection, MissionSection, AboutUsSection } from "@/components/vision-section"
import { InquiryForm } from "@/components/inquiry-form-working"
import { EmploymentSection } from "@/components/employment-section-working"
import { WarningSection } from "@/components/warning-section"
import { FileText, Users, Building, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      )
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

function PremiumHeroSection() {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)
  const [videoTime, setVideoTime] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoTime((prev) => {
        if (prev >= 169) {
          // 2:49 = 169 seconds
          // Reset video to beginning
          if (videoRef.current) {
            const iframe = videoRef.current
            const currentSrc = iframe.src
            // Remove any existing time parameter and add t=0
            const newSrc = currentSrc.replace(/[&?]t=\d+/, "") + "&t=0"
            iframe.src = newSrc
          }
          return 0
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Start showing content after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          ref={videoRef}
          className="w-full h-full object-cover scale-150"
          src="https://www.youtube.com/embed/K0UjE_0la88?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=K0UjE_0la88&start=0"
          title="800 SEWAS City Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-background/95 via-background/50 to-transparent z-10">
          <div className="text-center space-y-6 animate-fade-in-up px-4 max-w-4xl">
            {/* Glassmorphism Card */}
            <div className="glass-card rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <h1 className="font-black text-5xl sm:text-6xl md:text-8xl gradient-text text-balance">
                  800 SEWAS City
                </h1>
                <p className="text-2xl md:text-3xl font-bold text-primary">THE JAINISM OF UNIVERSE</p>
                <p className="text-xl md:text-2xl text-secondary font-semibold">सूर्य-पृथ्वी-हवा-पानी-आकाश</p>
                <p className="text-lg md:text-xl text-black font-medium">Sun-Earth-Water-Air-Sky</p>
              </div>

              {/* Premium Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="glass-card rounded-xl p-4 premium-hover">
                  <div className="text-3xl font-bold text-primary">800</div>
                  <div className="text-sm text-black font-medium">Cities</div>
                </div>
                <div className="glass-card rounded-xl p-4 premium-hover">
                  <div className="text-3xl font-bold text-primary">29</div>
                  <div className="text-sm text-black font-medium">States</div>
                </div>
                <div className="glass-card rounded-xl p-4 premium-hover">
                  <div className="text-3xl font-bold text-primary">7</div>
                  <div className="text-sm text-black font-medium">Union Territories</div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 mt-4">
                <p className="text-primary font-semibold text-sm md:text-base">
                  Project by: 800 SEWAS INFRASTRUCTURE PRIVATE LIMITED
                </p>
                <p className="text-xs md:text-sm mt-1 text-primary font-semibold">CMD: MR. ASHWIN R. SHAH</p>
              </div>
            </div>

            {/* Interactive Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                { name: "Home", icon: Building, target: "home" },
                { name: "Vision", icon: TrendingUp, target: "vision" },
                { name: "Mission", icon: Heart, target: "mission" },
                { name: "About Us", icon: Users, target: "about-us" },
              ].map(({ name, icon: Icon, target }) => (
                <Button
                  key={name}
                  size="lg"
                  className="
                    relative overflow-hidden transition-all duration-300 ease-out
                    bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg 
                    hover:from-amber-600 hover:to-orange-700 hover:shadow-xl
                    transform hover:scale-105 hover:-translate-y-1
                  "
                  onClick={() => {
                    const element = document.getElementById(target)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      {showContent && (
        <>
          <div className="absolute top-20 left-10 floating opacity-20">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
          </div>
          <div className="absolute bottom-20 right-10 floating opacity-20" style={{ animationDelay: "1s" }}>
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-primary" />
          </div>
        </>
      )}

      {/* Header now contains the logo; removing duplicate corner logo for cleaner hero */}
    </section>
  )
}

function StatisticsSection() {
  const [counters, setCounters] = useState({ years: 0, families: 0, universities: 0, legacy: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Animate counters
          const duration = 2000
          const steps = 60
          const stepDuration = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            setCounters({
              legacy: Math.floor(6 * progress),
              years: Math.floor(6 * progress),
              families: Math.floor(60000 * progress),
              universities: Math.floor(65 * progress),
            })

            if (step >= steps) clearInterval(timer)
          }, stepDuration)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">{counters.legacy}</div>
            <div className="text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-2 py-1">
              YEARS LEGACY OF QUALITY & TRUST
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">#1</div>
            <div className="text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-2 py-1">
              GLOBAL SUSTAINABLE DEVELOPER
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">{counters.universities}+</div>
            <div className="text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-2 py-1">
              LIVE+ PROJECTS ACROSS INDIA
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl md:text-5xl font-bold text-black mb-2">
              {Math.floor(counters.families / 1000)}K+
            </div>
            <div className="text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-2 py-1">
              SERVING HAPPY FAMILIES ACROSS INDIA
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 premium-slide-left">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/community-living-spaces.jpg"
                alt="Families Served"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-black">60,000+ Families Served</h3>
                <p className="text-black/80">Across 29 States & 7 Union Territories</p>
              </div>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Building communities that bring families together with quality infrastructure and sustainable living
              solutions.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 premium-slide-right">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/modern-luxury-building-architecture.jpg"
                alt="Community Reach"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-black">Pan-India Reach</h3>
                <p className="text-black/80">800 Cities Connected</p>
              </div>
            </div>
            <p className="text-black text-sm leading-relaxed">
              Expanding our community network to serve Jain families with religious, residential, and social
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export function SEWASHomePage() {
  const [locationSelection, setLocationSelection] = useState<LocationSelection>({
    state: "",
    city: "",
    areas: [],
  })
  const [showInquiryForm, setShowInquiryForm] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const isMobile = useIsMobile()

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll(".stagger-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in")
            }, index * 200)
          })
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(
      ".animate-on-scroll, .premium-slide-left, .premium-slide-right, .luxury-fade-up, .image-reveal, .card-slide-in",
    )
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Load selection from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const state = params.get("state") || ""
    const city = params.get("city") || ""

    setLocationSelection({ state, city, areas: [] })
  }, [])

  const handleCategoryChange = (category: string, subcategory: string, options: any) => {
    console.log("Category selection:", { category, subcategory, options })
    setSelectedCategory(category)
  }

  const handleInquirySubmit = (formData: any) => {
    console.log("Inquiry submitted:", formData)
    setShowInquiryForm(false)
  }

  return (
    <main className="min-h-screen">
      <PremiumHeroSection />

      <StatisticsSection />

      <section id="home" className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black gradient-text luxury-fade-up">Service Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed luxury-fade-up stagger-child">
              Select your location from 800 cities across 29 states and 7 union territories. Explore our comprehensive
              services across Religious, Residential, Commercial, Education, Medical, and Social categories.
            </p>
          </div>

          {/* Location Filter */}
          <div className="premium-slide-left">
            <LocationFilter onSelectionChange={setLocationSelection} />
          </div>

          {/* Warning Section */}
          <div className="premium-slide-right">
            <WarningSection />
          </div>

          {/* Category Selector */}
          <div className="luxury-fade-up">
            <CategorySelector locationSelection={locationSelection} onCategoryChange={handleCategoryChange} />
          </div>

          {/* Employment Section */}
          <div className="premium-slide-left">
            <EmploymentSection />
          </div>

          {/* Inquiry Form Toggle */}
          {locationSelection.state && locationSelection.city && (
            <div className="text-center luxury-fade-up">
              <Button
                size={isMobile ? "default" : "lg"}
                onClick={() => setShowInquiryForm(!showInquiryForm)}
                className="flex items-center gap-2 w-full md:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <FileText className="h-4 md:h-5 w-4 md:w-5" />
                {showInquiryForm ? "Hide Inquiry Form" : "Submit Service Inquiry"}
              </Button>
            </div>
          )}

          {/* Inquiry Form */}
          {showInquiryForm && (
            <div className="card-slide-in">
              <InquiryForm
                locationSelection={locationSelection}
                selectedCategory={selectedCategory as any}
                onSubmit={handleInquirySubmit}
              />
            </div>
          )}

          {/* Selection Summary */}
          {locationSelection.state && (
            <Card className="bg-muted/50 premium-slide-right">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-3 text-sm md:text-base">Your Location Selection</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm">
                  <div className="flex flex-col md:block">
                    <span className="font-medium">State:</span>
                    <span className="md:ml-1">{locationSelection.state}</span>
                  </div>
                  <div className="flex flex-col md:block">
                    <span className="font-medium">City:</span>
                    <span className="md:ml-1">{locationSelection.city || "Not selected"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section id="vision" className="image-reveal">
        <VisionSection />
      </section>

      <section id="mission" className="premium-slide-left">
        <MissionSection />
      </section>

      <section id="about-us" className="luxury-fade-up">
        <AboutUsSection />
      </section>
    </main>
  )
}
