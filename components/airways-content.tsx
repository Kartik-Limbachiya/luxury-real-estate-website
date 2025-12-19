"use client"

import React from 'react'
import { Plane, Star, Zap, Globe2, ArrowRight } from "lucide-react"
import dynamic from "next/dynamic"

const PDFSlideshow = dynamic(
    () => import("./pdf-slideshow").then((mod) => mod.PDFSlideshow),
    {
        ssr: false,
        loading: () => (
            <div className="h-[500px] w-full flex items-center justify-center bg-slate-100 rounded-2xl animate-pulse">
                <span className="text-slate-400 font-medium">Loading Brochure...</span>
            </div>
        )
    }
)

export function AirwaysContent() {
    const features = [
        {
            id: "f1",
            title: "Flight Booking",
            tagline: "Worldwide Connectivity",
            description: "Book airline tickets without difficulty. Competitive prices and transparent pricing for global destinations.",
            icon: <Plane className="w-5 h-5" />,
            image: "/sewas-airways-flight.png"
        },
        {
            id: "f2",
            title: "Private Jet Rental",
            tagline: "Exclusive Luxury",
            description: "Redefining luxury travel for business or leisure. Experience privacy, comfort, and time-saving efficiency.",
            icon: <Star className="w-5 h-5" />,
            image: "/sewas-airways-jet.png"
        },
        {
            id: "f3",
            title: "Helicopter Rental",
            tagline: "Scenic & Medical",
            description: "Services for weddings, business travel, scenic tours, and emergency medical air ambulance services.",
            icon: <Zap className="w-5 h-5" />,
            image: "/sewas-airways-heli.png"
        },
        {
            id: "f4",
            title: "Visa Services",
            tagline: "Global Access",
            description: "Expert guidance for tourist, business, and student visas with real-time application tracking.",
            icon: <Globe2 className="w-5 h-5" />,
            image: "/sewas-airways-globe.png"
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Header Section */}
            {/* Hero Section */}
            {/* Top Text Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.2em] border border-amber-200 dark:border-amber-700/50">
                    <Plane className="w-4 h-4" />
                    World Class Aviation
                </div>

                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white leading-tight">
                    SEWAS Jain <span className="text-amber-500">Airlines</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Welcome to SEWAS Airways. We are dedicated to empowering aviation professionals and providing world-class travel experiences. From seamless flight bookings to exclusive private jet charters, we ensure your journey is smooth, rewarding, and safe.
                </p>
            </div>

            {/* Visual Hero Image */}
            <div className="relative h-[500px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800">
                <div className="absolute inset-0">
                    <img src="/sewas-airways-flight.png" alt="SEWAS Airways Fleet" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Quote Overlay - Kept minimal visuals */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <div className="max-w-4xl relative">
                        <span className="text-6xl text-amber-400/80 font-serif absolute -top-8 -left-4 leading-none">"</span>
                        <p className="text-2xl md:text-4xl font-serif text-white leading-snug italic drop-shadow-lg pl-8 relative z-10">
                            Where the sky is not the limit, <br className="hidden md:block" />
                            <span className="text-amber-200">but the beginning of your extraordinary journey.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div>
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-8 flex items-center gap-4">
                    <span>Core Services</span>
                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f) => (
                        <div key={f.id} className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500">

                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                                            {f.icon}
                                        </div>
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-amber-300 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/30">
                                            {f.tagline}
                                        </span>
                                    </div>

                                    <h5 className="text-2xl font-bold text-white mb-2 leading-tight">
                                        {f.title}
                                    </h5>
                                    <div className="h-1 w-12 bg-amber-500 rounded-full mb-3 group-hover:w-full transition-all duration-700" />

                                    <p className="text-sm text-slate-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {f.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PDF Slideshow Section */}
            <div className="space-y-8 pt-12 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-3xl font-bold text-center font-serif text-slate-900 dark:text-white">
                    Company Profile & Fleet
                </h2>
                <div className="w-full flex justify-center">
                    <PDFSlideshow pdfUrl="/Sewas%20Infrastructure%20Ltd_Airlines_compressed.pdf" />
                </div>
            </div>

        </div>
    );
};
