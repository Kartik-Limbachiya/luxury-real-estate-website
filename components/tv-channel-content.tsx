"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Tv, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// --- Slideshow Component ---
const SlideshowBackground = ({
    images,
    interval = 3000,
    fit = "cover"
}: {
    images: string[],
    interval?: number,
    fit?: "cover" | "contain"
}) => {
    const [index, setIndex] = useState(0);

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent parent click
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent parent click
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="absolute inset-0 w-full h-full bg-slate-900 group/slideshow">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={images[index]}
                            alt={`Slideshow image ${index + 1}`}
                            fill
                            className={`transition-transform duration-1000 ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20" />

            {/* Manual Controls - Visible on Hover */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover/slideshow:opacity-100 transition-opacity hover:bg-black/50 z-20"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white opacity-0 group-hover/slideshow:opacity-100 transition-opacity hover:bg-black/50 z-20"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover/slideshow:opacity-100 transition-opacity z-20">
                {index + 1} / {images.length}
            </div>
        </div>
    );
};

// 3. Network Content
const NetworkContent = () => {
    // Generate image arrays
    const tvImages = Array.from({ length: 47 }, (_, i) => `/TEMP${146 + i}.jpg`); // 146-192
    const animImages = Array.from({ length: 46 }, (_, i) => `/TEMP${100 + i}.jpg`); // 100-145

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 md:px-6">
            {/* TV Serial Production Card */}
            <div className="relative group overflow-hidden rounded-[2rem] h-[500px] md:h-[750px] shadow-2xl hover:shadow-3xl transition-all border border-slate-200 dark:border-slate-800">
                <SlideshowBackground images={tvImages} interval={4000} fit="cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 pointer-events-none" />

                {/* Content - Bottom Aligned */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-col gap-3 mb-2">
                            <div className="self-start p-3 bg-amber-500 rounded-xl text-white shadow-lg">
                                <Tv className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white shadow-black drop-shadow-md leading-tight">TV Serial Production</h3>
                        </div>
                        <p className="text-slate-200 text-lg font-medium pl-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Creating Timeless Stories</p>
                        <div className="h-1.5 w-16 group-hover:w-full bg-amber-500 rounded-full transition-all duration-700" />
                    </div>
                </div>
            </div>

            {/* Animation Studios Card */}
            <div className="relative group overflow-hidden rounded-[2rem] h-[500px] md:h-[750px] shadow-2xl hover:shadow-3xl transition-all border border-slate-200 dark:border-slate-800">
                <SlideshowBackground images={animImages} interval={4000} fit="cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 pointer-events-none" />

                {/* Content - Bottom Aligned */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 pointer-events-none">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex flex-col gap-3 mb-2">
                            <div className="self-start p-3 bg-amber-500 rounded-xl text-white shadow-lg">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white shadow-black drop-shadow-md leading-tight">Animation Studios</h3>
                        </div>
                        <p className="text-slate-200 text-lg font-medium pl-1 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">World-class Visual Effects & Animation</p>
                        <div className="h-1.5 w-16 group-hover:w-full bg-amber-500 rounded-full transition-all duration-700" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export function TvChannelContent() {
    return (
        <div className="py-12 space-y-12">

            {/* Header */}
            <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 font-bold text-xs uppercase tracking-[0.2em] border border-amber-200 dark:border-amber-700/50">
                    <Tv className="w-4 h-4" />
                    Entertainment Network
                </div>

                <h1 className="text-4xl md:text-6xl font-serif text-slate-900 dark:text-white leading-tight">
                    SEWAS Jain <span className="text-amber-500">TV Channel</span>
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    Bringing stories to life through world-class production and cutting-edge animation.
                </p>
            </div>

            {/* Premium Key Features Section - Top Placement */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
                <div className="relative rounded-[3rem] bg-slate-100 dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Original Stories", desc: "Exclusive cultural content.", image: "/TEMP146.jpg" },
                            { title: "4K Ultra HD", desc: "Crystal clear cinematic quality.", image: "/TEMP100.jpg" },
                            { title: "Global Reach", desc: "Streaming worldwide 24/7.", image: "/sewas-airways-globe.png" },
                            { title: "Family First", desc: "Safe, inspiring content.", image: "/save-child.png" }
                        ].map((feature, i) => (
                            <div key={i} className="group relative p-8 h-auto md:h-96 flex flex-col justify-end overflow-hidden rounded-2xl border border-white/20 hover:border-amber-500 transition-all duration-500 hover:-translate-y-1 shadow-lg">
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay for Vibrancy + Legibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 group-hover:via-black/40 transition-all duration-500" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md mb-4 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                                        <Zap className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">{feature.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <NetworkContent />

            {/* Premium Key Features Section Removed - Moving to Top */}
        </div>
    )
}
