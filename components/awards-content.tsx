"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Medal, Crown, UserCheck, HeartHandshake, Sparkles, ScrollText, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function AwardsContent() {
    const [currentHero, setCurrentHero] = useState(0);

    // User provided direct image links
    const heroImages = [
        "https://i.ibb.co/PGRdrjXs/temp76.jpg",
        "https://i.ibb.co/6cDPn2X0/temp91.jpg",
        "https://i.ibb.co/27Kf9yrm/temp75.jpg",
        "https://i.ibb.co/35WB0tdP/temp80.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentHero((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentHero((prev) => (prev - 1 + heroImages.length) % heroImages.length);

    const categories = [
        {
            title: "Social Impact Award",
            icon: HeartHandshake,
            description: "Recognizing outstanding contributions to societal welfare and community upliftment.",
            image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80"
        },
        {
            title: "Business Excellence",
            icon: Trophy,
            description: "Honoring innovative business practices and ethical entrepreneurship.",
            image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&q=80"
        },
        {
            title: "Community Service",
            icon: UserCheck,
            description: "Celebrating selfless dedication to serving the community and its members.",
            image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
        },
        {
            title: "Cultural Heritage",
            icon: ScrollText,
            description: "Preserving and promoting our rich traditions and values for future generations.",
            image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80"
        },
        {
            title: "Youth Achiever",
            icon: Star,
            description: "Spotlighting young talents who are making waves in various fields.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
        },
        {
            title: "Lifetime Achievement",
            icon: Crown,
            description: "A tribute to lifelong dedication and exemplary service to the Samaj.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Hero Section - Text First, Then Slideshow */}
            <div className="space-y-10">
                {/* Text Header (Above Image) */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="bg-amber-400 text-black hover:bg-amber-500 mb-4 px-4 py-1.5 text-base font-bold uppercase tracking-wider">Excellence & Honor</Badge>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight text-slate-900 mb-6">
                            SEWAS Jain <span className="text-amber-500">Awards</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
                            Celebrating the visionaries, the givers, and the changemakers of our community.
                        </p>
                        <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold h-14 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105">
                            Nominate Someone <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Hero Slideshow (Below Text) */}
                <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[600px] shadow-2xl group border-4 border-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentHero}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={heroImages[currentHero]}
                                alt="Awards Ceremony"
                                fill
                                className="object-fill"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-amber-500/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-amber-500/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer z-20">
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {heroImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentHero(idx)}
                                className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentHero ? "w-8 bg-amber-400" : "w-2 bg-white/50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Medal className="w-10 h-10 text-amber-600" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Recognizing Legacy</h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        The SEWAS Jain Awards are instituted to identify, recognize, and honor the gems of our society. It is more than just an accolade; it is a celebration of the spirit of 'Sewa' (Service) and excellence that drives our community forward.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-amber-600">50+</span>
                            <span className="text-sm font-medium text-slate-600">Annual Awards</span>
                        </div>
                        <div className="w-px bg-amber-200" />
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-amber-600">₹1 Cr+</span>
                            <span className="text-sm font-medium text-slate-600">Prize Pool</span>
                        </div>
                        <div className="w-px bg-amber-200" />
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-amber-600">Global</span>
                            <span className="text-sm font-medium text-slate-600">Recognition</span>
                        </div>
                    </div>
                </div>
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 bg-white">
                    <Image
                        src="https://i.ibb.co/jvR52vMQ/temp88.jpg"
                        alt="Awards Trophy"
                        fill
                        className="object-fill"
                    />
                </div>
            </div>

            {/* Award Categories */}
            <div className="space-y-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center font-serif text-slate-900">Award Categories</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <Card key={idx} className="group overflow-hidden border-none shadow-lg bg-slate-900 text-white relative h-[400px]">
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            <CardContent className="absolute bottom-0 p-8 w-full z-10 transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="mb-4 bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <category.icon className="w-6 h-6 text-black" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-serif group-hover:text-amber-400 transition-colors">{category.title}</h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-balance">
                                    {category.description}
                                </p>
                                <div className="h-1 w-12 bg-amber-500 rounded-full group-hover:w-full transition-all duration-500" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-amber-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <Sparkles className="w-full h-full text-white" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif">Know someone deserving?</h2>
                    <p className="text-lg md:text-xl text-amber-100">
                        Nominations for the current year are open. Help us find the hidden gems of our community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button className="bg-white text-amber-700 hover:bg-slate-100 font-bold h-14 px-10 text-lg rounded-full shadow-lg">
                            Submit Nomination
                        </Button>
                        <Button variant="outline" className="border-2 border-amber-200 text-amber-100 hover:bg-amber-700 hover:text-white font-bold h-14 px-10 text-lg rounded-full">
                            View Guidelines
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
