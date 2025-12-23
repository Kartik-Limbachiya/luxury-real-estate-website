"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, ShoppingBag, Users, Plane, Palette, GraduationCap, Scale, Siren, Briefcase, MonitorPlay, HeartPulse } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CommercialServiceContent() {
    const [currentHero, setCurrentHero] = useState(0);

    const heroImages = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80",
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80",
        "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    // List from user's screenshot
    const commercialOptions = [
        { label: "Marriage Bureau", icon: Users, image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80" },
        { label: "Tours & Travel Services", icon: Plane, image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" },
        { label: "Art Classes & Workshops", icon: Palette, image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80" },
        { label: "Training Centers", icon: GraduationCap, image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
        { label: "Legal Advisory Services", icon: Scale, image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80" },
        { label: "Emergency Services", icon: Siren, image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80" },
        { label: "Estate & Placement", icon: Briefcase, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
        { label: "Digital Work Hub", icon: MonitorPlay, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" },
        { label: "Emergency Care", icon: HeartPulse, image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" }
    ];

    const features = [
        {
            title: "SEWAS Jain Mall with Swadeshi Items",
            image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
            alt: "Swadeshi Products",
            description: "Exclusive marketplace for authentic Indian products."
        },
        {
            title: "50% Discount on All Made in India Swadeshi Products",
            image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
            alt: "huge Discount",
            description: "Massive savings for community members."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-12">

            {/* Header */}
            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-indigo-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-[0.2em] border border-indigo-200">
                    <Building2 className="w-4 h-4" />
                    Business Excellence
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS Jain <span className="text-indigo-600 italic">Commercial Mall</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A definitive destination for business excellence, blending commerce with community values and growth.
                    </p>
                </div>
            </div>

            {/* Commercial Options Section */}
            <div className="rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-inner relative overflow-hidden">
                {/* Background Image for Options */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80"
                        alt="Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <ShoppingBag className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-800 font-serif">Commercial Options & Services</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {commercialOptions.map((option, idx) => (
                            <div key={idx} className="group relative overflow-hidden h-28 flex items-center gap-4 p-4 rounded-xl shadow-sm border border-indigo-100/50 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                                {/* Background Image */}
                                <Image
                                    src={option.image}
                                    alt={option.label}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors duration-300" />

                                {/* Content */}
                                <div className="relative z-10 flex items-center gap-4 w-full">
                                    <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-lg group-hover:bg-white/30 transition-colors duration-300 shrink-0">
                                        <option.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="font-bold text-white text-lg leading-tight shadow-black drop-shadow-md">{option.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Commercial Features Grid */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-3/4 mx-auto">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative h-96 flex flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900">
                            {/* Image Background */}
                            <Image
                                src={feature.image}
                                alt={feature.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300">
                                    <ShoppingBag className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-indigo-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* NEW LOCATION: Premium Commercial Spaces Finder Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                {/* Hero Slideshow Area */}
                <div className="relative h-[400px] md:h-[550px] w-full bg-slate-100">
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
                                alt="Premium Commercial Space"
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end pb-8 z-10">
                        <div className="bg-white/95 backdrop-blur-sm px-8 py-4 rounded-t-2xl shadow-lg text-center max-w-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">Premium Commercial Spaces</h2>
                            <p className="text-slate-500 text-sm mt-1">Modern office spaces and business centers with all amenities</p>
                        </div>
                    </div>
                </div>

                {/* Finder Form */}
                <div className="p-8 md:p-10 space-y-8 bg-white">
                    <div className="space-y-4">
                        <Label className="text-base font-bold text-slate-900">Commercial Space</Label>
                        <Select>
                            <SelectTrigger className="w-full h-12 text-base bg-slate-50 border-slate-200 focus:ring-indigo-500">
                                <SelectValue placeholder="Choose Commercial Space" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mall">SEWAS Jain Mall</SelectItem>
                                <SelectItem value="business-center">Business Center</SelectItem>
                                <SelectItem value="office">Office Space</SelectItem>
                                <SelectItem value="showroom">Showroom</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-base font-bold text-slate-900">Special Offers</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="offer1" />
                                <label htmlFor="offer1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    50% Discount on Swadeshi Items
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="offer2" />
                                <label htmlFor="offer2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Made in India Products
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="offer3" />
                                <label htmlFor="offer3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Local Market Access
                                </label>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full bg-slate-900 hover:bg-black text-white h-12 text-lg font-bold rounded-lg transition-all">
                        Find Commercial Services
                    </Button>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-800 hover:to-indigo-700 text-white h-14 px-8 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full md:w-auto">
                    Inquire for Space
                </Button>
                <Button variant="outline" className="h-14 px-8 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-indigo-400 hover:text-indigo-700 hover:bg-indigo-50 transition-all w-full md:w-auto">
                    View Floor Plans
                </Button>
            </div>

        </div>
    )
}
