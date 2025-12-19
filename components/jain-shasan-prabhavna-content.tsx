"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scroll, Landmark, Mic2, Globe, Heart, BookOpen, Crown } from "lucide-react"
import Image from "next/image"

export function JainShasanPrabhavnaContent() {
    const features = [
        {
            title: "Heritage Preservation",
            icon: Landmark,
            image: "https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/09/A4564-Conservation-and-protection-of-heritage-monuments-in-India..jpg", // Temple/Architecture
            description: "Restoring and conserving ancient Jain temples, manuscripts, and heritage sites."
        },
        {
            title: "Spiritual Education",
            icon: BookOpen,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQCbsIRsom0CtBJRXyoxbreHCh41BQIfBMw&s",
            description: "Global distribution of Agam Sutras and facilitating deep scriptural learning."
        },
        {
            title: "Global Media & Outreach",
            icon: Mic2,
            image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1740&auto=format&fit=crop", // Broadcast/Media
            description: "Broadcasting spiritual discourses and events to a worldwide audience."
        },
        {
            title: "Cultural Processions",
            icon: Crown,
            image: "https://media.assettype.com/freepressjournal/2024-09-22/ay7vjpx6/22J24SA024.jpg?width=1200", // Festival/Crowd
            description: "Grand Shobha Yatras and festivals celebrating Jain philosophy and culture."
        },
        {
            title: "Philanthropic Missions",
            icon: Heart,
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1740&auto=format&fit=crop", // Helping/Charity
            description: "Compassionate service projects reflecting the core value of Jivdaya."
        },
        {
            title: "International Representations",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=1635&auto=format&fit=crop", // UN/International
            description: "Representing Jain principles at global peace summits and religious forums."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header - Crimson/Red Theme */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-rose-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-700 font-bold text-xs uppercase tracking-[0.2em] border border-rose-200">
                    <Scroll className="w-4 h-4" />
                    Heritage & Glory
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS Jain <span className="text-rose-700 italic">Shasan Prabhavna</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Dedicated to the glorification and global propagation of Jain values through culture, service, and heritage preservation.
                    </p>
                </div>
            </div>

            {/* Feature Cards Grid (Poster Style) */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Crown className="w-8 h-8 text-rose-700" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Pillars of Propagation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative h-auto md:h-96 flex flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900">
                            {/* Image Background */}
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay - Rose/Red Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-900/40 to-transparent group-hover:via-rose-900/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-rose-600 group-hover:border-rose-600 transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-rose-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-rose-100/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
