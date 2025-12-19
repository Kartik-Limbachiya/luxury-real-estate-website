"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"

const APARTMENT_DATA = {
    "2BHK": {
        title: "2BHK (540 sqft) Layout",
        subtitle: "540 sq ft Super Built-up Area",
        images: [
            "https://housing-images.n7net.in/01c16c28/5683ce77646100c035fc7c78d5f8ad06/v0/large/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
            "https://housing-images.n7net.in/01c16c28/bc8a937763a2054153bb30f7b5df45be/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/e81cd2be0923317173f92c0b834f4453/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/536c6d1fb9e9ffce3f4bf486c7beb0f0/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_bathroom_with_bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/cee1f5b5776e5583667b09e99bc2efc1/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_balcony_with_bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/340be56e973534f2d8706bdb262378ca/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
            "https://housing-images.n7net.in/01c16c28/68e77c1b179b46a1bd3f20c9d88abf1c/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
            "https://housing-images.n7net.in/01c16c28/2521e1b6ddcbaffae6b9389273cbccc1/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_bathroom_with_bedroom_two.jpg",
            "https://housing-images.n7net.in/01c16c28/08bfb91cea2ac277071b0860a42e4974/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-kitchen.jpg",
            "https://housing-images.n7net.in/01c16c28/4535b098d691d0d1186e5d5497d38a5b/v0/fs-large/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
        ]
    },
    "3BHK": {
        title: "3BHK (720 sqft) Layout",
        subtitle: "720 sq ft Super Built-up Area",
        images: [
            "https://housing-images.n7net.in/01c16c28/b7e830109ca85d61ccad499c2947c897/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
            "https://housing-images.n7net.in/01c16c28/846a8a292e453d79e2871f84f1cc8259/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/c807d41fc9a5f64806e25c5552aee372/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/6df004b2e8bf11f8ab0bbfd11da0c5e7/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_balcony_with_bedroom_one.jpg",
            "https://housing-images.n7net.in/01c16c28/70baa534e3f472c7ee27e544cfd6942d/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
            "https://housing-images.n7net.in/01c16c28/834f873a8d68afb533e645df2416be8f/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
            "https://housing-images.n7net.in/01c16c28/82b7b5bcffd535658d6bb0d56daa0539/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_three.jpg",
            "https://housing-images.n7net.in/01c16c28/c7a75a575de1bfa58881d26ad98832a9/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_three.jpg",
            "https://housing-images.n7net.in/01c16c28/d4ad152d7620a682317b4c5c40cd1b71/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-kitchen.jpg",
            "https://housing-images.n7net.in/01c16c28/7cb01196fd8c19b45fe6cffae5a58ba0/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
        ]
    }
}

export function ApartmentShowcase() {
    const [selectedType, setSelectedType] = useState<'2BHK' | '3BHK'>('2BHK');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const currentData = APARTMENT_DATA[selectedType];

    // Reset image index when type changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedType]);

    const nextImage = React.useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentData.images.length);
    }, [currentData.images.length]);

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + currentData.images.length) % currentData.images.length);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            nextImage();
        }, 4000); // 4 seconds
        return () => clearInterval(timer);
    }, [nextImage]); // Re-run when nextImage function changes

    return (
        <div className="w-full bg-slate-50 border-t border-b border-slate-200 py-12">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Slideshow Container - Removed overflow-hidden from parent to allow dropdown overflow */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col relative z-0">

                    {/* Image Area */}
                    <div className="relative aspect-video w-full bg-slate-100 rounded-t-2xl overflow-hidden z-0">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={`${selectedType}-${currentImageIndex}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={currentData.images[currentImageIndex]}
                                    alt={`${selectedType} View ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-10">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors transform hover:scale-110 active:scale-95"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-10">
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors transform hover:scale-110 active:scale-95"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                            {currentData.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToImage(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentImageIndex
                                        ? "bg-white w-8 scale-110"
                                        : "bg-white/50 w-2 hover:bg-white/80"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Info Bar - Adjusted Padding and rounded corners */}
                    <div className="bg-white p-4 rounded-b-2xl border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 relative z-20">

                        {/* Property Type Dropdown */}
                        <div className="w-full md:w-auto relative">
                            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">
                                Property Type
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full md:w-64 flex items-center justify-between bg-white border border-slate-200 hover:border-amber-500 text-slate-900 font-bold py-3 px-4 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-100"
                                >
                                    <span className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${selectedType === '2BHK' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                                        {selectedType} ({selectedType === '2BHK' ? '540' : '720'} sqft)
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 5 }}
                                            className="absolute bottom-full left-0 mb-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 origin-bottom"
                                        >
                                            <button
                                                onClick={() => { setSelectedType('2BHK'); setIsDropdownOpen(false); }}
                                                className={`w-full text-left px-4 py-3 hover:bg-amber-50 flex items-center gap-2 font-medium transition-colors border-b border-slate-50 ${selectedType === '2BHK' ? 'text-amber-700 bg-amber-50/50' : 'text-slate-600'}`}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                                2BHK (540 sqft)
                                            </button>
                                            <button
                                                onClick={() => { setSelectedType('3BHK'); setIsDropdownOpen(false); }}
                                                className={`w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center gap-2 font-medium transition-colors ${selectedType === '3BHK' ? 'text-blue-700 bg-blue-50/50' : 'text-slate-600'}`}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                                3BHK (720 sqft)
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Centered Title - Tightened Layout */}
                        <div className="text-center flex-1 order-first md:order-none w-full md:w-auto">
                            <h3 className="text-2xl font-serif font-black text-slate-800 tracking-tight">
                                {currentData.title}
                            </h3>
                            <p className="text-slate-500 text-sm font-medium mt-0">
                                {currentData.subtitle}
                            </p>
                        </div>

                        {/* Balance Element */}
                        <div className="w-full md:w-64 hidden md:block"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}