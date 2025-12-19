"use client"


import React, { useRef, useState, useEffect } from 'react'
import Image from "next/image"
import { Users, FileText, TrendingUp, Heart, Building } from "lucide-react"
import { ServiceLocationSelector } from "@/components/service-location-selector"
import { ResidentialServiceContent } from "@/components/residential-service-content"
import { WarningSection } from "@/components/warning-section"
import { StatisticsSection } from "@/components/statistics-section"

// Inline simple warning component if the imported one isn't perfectly suited or for simplicity
const PolicyWarning = () => (
    <div className="bg-red-50 border-l-4 border-red-500 p-6 mx-auto max-w-7xl my-12 rounded-r-lg">
        <h3 className="text-red-700 font-bold text-lg mb-2">Important Policy Warning</h3>
        <p className="text-red-600">
            SEWAS Nagri projects are strictly subject to federation guidelines. Any violation of residential policies may result in immediate cancellation of allocation. Please read all terms and conditions carefully before proceeding.
        </p>
    </div>
)

export default function ResidentialPage() {
    // Video Logic reused from sewas-home.tsx
    const videoRef = useRef<HTMLIFrameElement>(null)
    const [videoTime, setVideoTime] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoTime((prev) => {
                if (prev >= 169) {
                    if (videoRef.current) {
                        const iframe = videoRef.current
                        const currentSrc = iframe.src
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

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">

            {/* Hero Section with Video Background */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <iframe
                        ref={videoRef}
                        className="w-full h-full object-cover scale-150 pointer-events-none"
                        src="https://www.youtube.com/embed/K0UjE_0la88?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=K0UjE_0la88&start=0"
                        title="800 SEWAS City Background Video"
                        allow="autoplay; encrypted-media"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex items-center bg-gradient-to-t from-background/95 via-background/50 to-transparent z-10">
                    <div className="w-full px-4 md:px-12">
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-4">
                                    <Image src="/sewas-logo.png" alt="SEWAS Logo" width={64} height={64} className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" />
                                    <div className="text-center sm:text-left">
                                        <h1 className="font-black text-2xl sm:text-3xl md:text-5xl lg:text-7xl gradient-text">SEWAS Nagri</h1>
                                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-amber-900 mt-1">
                                            A Project by SEWAS Universal Federation
                                        </p>
                                        <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-amber-600 mt-2">
                                            THE JAINISM OF UNIVERSE
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black/80 font-medium text-center sm:text-left">
                                    Sun-Earth-Water-Air-Sky
                                </p>

                                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2 max-w-xs sm:max-w-md">
                                    {[{ n: 800, l: "Cities" }, { n: 29, l: "States" }, { n: 7, l: "UTs" }].map((s) => (
                                        <div key={s.l} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 text-center sm:text-left shadow-sm">
                                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-600">{s.n}</div>
                                            <div className="text-xs sm:text-sm text-black font-medium">{s.l}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                                    <button
                                        className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white border-0 shadow-lg text-xs sm:text-sm px-4 py-2 rounded-md transition-all sm:w-auto w-full"
                                    >
                                        Get Started
                                    </button>
                                    <button
                                        className="bg-white border text-slate-800 hover:bg-slate-50 text-xs sm:text-sm px-4 py-2 rounded-md transition-all sm:w-auto w-full"
                                    >
                                        A/अ
                                    </button>
                                </div>

                                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 pt-2">
                                    {[
                                        { name: "About Us", icon: Users },
                                        { name: "Contact Us", icon: FileText },
                                        { name: "Visions", icon: TrendingUp },
                                        { name: "Mission", icon: Heart },
                                        { name: "Project", icon: Building },
                                    ].map(({ name, icon: Icon }) => (
                                        <button
                                            key={name}
                                            className="
                                              flex flex-col items-center justify-center min-w-[62px] w-[76px] h-[76px] rounded-xl
                                              bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg
                                              hover:from-amber-600 hover:to-orange-700 hover:shadow-xl
                                              transform hover:scale-105 hover:-translate-y-1 transition-all
                                              font-bold mb-2 sm:mb-0 px-2 py-2"
                                            style={{ marginRight: '8px', marginBottom: '8px' }}
                                        >
                                            <Icon className="h-7 w-7 mb-1" />
                                            <span className="text-xs md:text-sm mt-1">{name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden md:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="relative z-20 bg-white -mt-20 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pt-12">

                {/* Step 0: Statistics Section */}
                <StatisticsSection />

                {/* Step 1 & 2: Location Selector */}
                <ServiceLocationSelector />

                {/* Warning Section */}
                <WarningSection />

                {/* Separator */}
                <div className="max-w-7xl mx-auto px-6"><hr className="border-slate-100" /></div>

                {/* Residential Service Content */}
                <ResidentialServiceContent />

            </div>

        </main>
    )
}
