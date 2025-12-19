"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Target, Shield, Handshake, Award, Network } from "lucide-react"
import Image from "next/image"

export function UniversalSanghContent() {
    const features = [
        {
            title: "Global Federation Network",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            description: "Uniting Jain communities worldwide under a single, powerful federation umbrella."
        },
        {
            title: "Member Directory & Connect",
            icon: Users,
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1768&auto=format&fit=crop",
            description: "A comprehensive digital directory connecting individuals and organizations globally."
        },
        {
            title: "Strategic Unity Initiatives",
            icon: Target,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop",
            description: "Collaborative projects designed to strengthen the social and economic fabric of the community."
        },
        {
            title: "Community Protection",
            icon: Shield,
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1740&auto=format&fit=crop",
            description: "Legal and social support systems to safeguard community interests and rights."
        },
        {
            title: "Global Alliances",
            icon: Handshake,
            image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1746&auto=format&fit=crop",
            description: "Fostering relationships with international bodies for broader impactful representation."
        },
        {
            title: "Excellence Awards",
            icon: Award,
            image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=1740&auto=format&fit=crop", // Using a general celebration/award looking image
            description: "Recognizing and honoring outstanding contributions to society and the nation."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header - Royal Blue Theme */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-blue-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-[0.2em] border border-blue-200">
                    <Network className="w-4 h-4" />
                    Global Federation
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-blue-700 italic">Universal Sangh</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A unified global platform empowering the Jain community through connection, collaboration, and collective leadership.
                    </p>
                </div>
            </div>

            {/* Feature Cards Grid (Poster Style) */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Globe className="w-8 h-8 text-blue-700" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Federation Pillars</h2>
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

                            {/* Gradient Overlay - Blue/Dark Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent group-hover:via-blue-900/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-blue-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-blue-100/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">
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
