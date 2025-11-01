"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LocationFilter, type LocationSelection } from "@/components/location-filter"
import { CategorySelector } from "@/components/category-selector-working"
import { VisionSection, MissionSection, AboutUsSection } from "@/components/vision-section"
import { BankingPartnersSection } from "@/components/banking-partners"
import { ImportantDatesSection } from "@/components/important-dates"
import ComingSoonBanner from "@/components/coming-soon-banner"
import { InquiryForm } from "@/components/inquiry-form-working"
import { EmploymentSection } from "@/components/employment-section-working"
import { WarningSection } from "@/components/warning-section"
import { AboutUsSection as NewAboutSection } from "@/components/new-sections"
import { 
  ContactUsSection,
  VisionsSection,
  ProjectSection,
  ServicesSection,
  GallerySection
} from "@/components/new-sections"
import { FileText, Users, Building, Heart, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

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
  const { language, toggle } = useLanguage()

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
        <div className="absolute inset-0 flex items-center bg-gradient-to-t from-background/95 via-background/50 to-transparent z-10">
          <div className="w-full px-4 md:px-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4 md:space-y-6 animate-fade-in-up">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                  <Image src="/sewas-logo.png" alt="SEWAS Logo" width={64} height={64} className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" />
                  <div className="text-center sm:text-left">
                    <h1 className="font-black text-2xl sm:text-3xl md:text-5xl lg:text-7xl gradient-text">SEWAS Nagri</h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-amber-900 mt-1">
                      A Project by SEWAS Universal Federation
                    </p>
                    <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-primary mt-2">
                      {language === "en" ? "THE JAINISM OF UNIVERSE" : "द यूनिवर्स का जैनिज़्म"}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black/80 font-medium text-center sm:text-left">
                  {language === "en" ? "Sun-Earth-Water-Air-Sky" : "सूर्य-पृथ्वी-हवा-पानी-आकाश"}
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2 max-w-xs sm:max-w-md">
                  {[{n:800,l: language === "en"?"Cities":"शहर"}, {n:29,l: language === "en"?"States":"राज्य"}, {n:7,l: language === "en"?"UTs":"संघ प्रदेश"}].map((s) => (
                    <div key={s.l} className="glass-card rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 premium-hover text-center sm:text-left">
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">{s.n}</div>
                      <div className="text-xs sm:text-sm text-black font-medium">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 shadow-lg text-xs sm:text-sm w-full sm:w-auto"
                    onClick={() => {
                      const element = document.getElementById("home")
                      if (element) element.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {language === "en" ? "Get Started" : "शुरू करें"}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={toggle} 
                    title="Toggle language"
                    className="text-xs sm:text-sm w-full sm:w-auto"
                  >
                    A/अ
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 pt-2">
                    {[ 
                      { name: "About Us", icon: Users, target: "about-us" },
                      { name: "Contact Us", icon: FileText, target: "contact-us" },
                      { name: "Visions", icon: TrendingUp, target: "visions" },
                      { name: "Mission", icon: Heart, target: "mission" },
                      { name: "Project", icon: Building, target: "project" },
                    ].map(({ name, icon: Icon, target }) => (
                      <Button
                        key={name}
                        size="lg"
                        className="
                          flex flex-col items-center justify-center min-w-[62px] w-[76px] h-[76px] rounded-xl
                          bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg
                          hover:from-amber-600 hover:to-orange-700 hover:shadow-xl
                          transform hover:scale-105 hover:-translate-y-1
                          font-bold
                          mb-2
                          sm:mb-0
                          px-2 py-2
                        "
                        style={{ marginRight: '8px', marginBottom: '8px' }}
                        onClick={() => {
                          const element = document.getElementById(target)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                      >
                        <Icon className="h-7 w-7 mb-1" />
                        <span className="text-xs md:text-sm mt-1">{name}</span>
                      </Button>
                    ))}
                </div>
              </div>
              <div className="hidden md:block" />
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
    <section ref={sectionRef} className="py-8 md:py-16 bg-gradient-to-r from-yellow-600 to-yellow-700">
  <div className="w-full px-3 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">{counters.legacy}</div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-1 sm:px-2 py-1">
              YEARS LEGACY OF QUALITY & TRUST
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">#1</div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-1 sm:px-2 py-1">
              GLOBAL SUSTAINABLE DEVELOPER
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">{counters.universities}+</div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-1 sm:px-2 py-1">
              LIVE+ PROJECTS ACROSS INDIA
            </div>
          </div>
          <div className="animate-on-scroll luxury-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">
              {Math.floor(counters.families / 1000)}K+
            </div>
            <div className="text-xs sm:text-sm md:text-base font-medium text-black bg-white/20 rounded-lg px-1 sm:px-2 py-1">
              SERVING HAPPY FAMILIES ACROSS INDIA
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 premium-slide-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
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
export function SewasHome() {
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
    <main className="min-h-screen w-full">
      <ComingSoonBanner />
      <PremiumHeroSection />

      <StatisticsSection />

      <section id="home" className="bg-background py-16 px-2 md:px-8 w-full">
        <div className="w-full space-y-12">
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

      <section className="luxury-fade-up" id="partners">
        <BankingPartnersSection />
      </section>

      <section className="luxury-fade-up" id="important-dates">
        <ImportantDatesSection />
      </section>

      {/* New Navigation Sections */}
      {/* With: */}
      <NewAboutSection />
      
      <ContactUsSection />
      
      <VisionsSection />
      
      <section id="mission" className="premium-slide-left">
        <MissionSection />
      </section>
      
      <ProjectSection />
      
      <ServicesSection />
      
      <GallerySection />

      {/* Legacy Sections */}
      <section id="vision" className="image-reveal">
        <VisionSection />
      </section>

      <section id="about-us" className="luxury-fade-up">
        <AboutUsSection />
      </section>
    </main>
  )
}
