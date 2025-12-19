"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Users, TrendingUp, ShieldCheck, GraduationCap, Zap, Sun } from "lucide-react"
import Image from "next/image"

export function JainoJagoContent() {
    const features = [
        {
            title: "Social Awakening",
            icon: Megaphone,
            image: "https://images.squarespace-cdn.com/content/v1/62b8cde7244b1a2e5bcbed08/f0cf2e36-e804-4a28-bb66-5098b5d750f1/1.jpg", // Crowd/Speaker
            description: "A clarion call to unite and address pressing social challenges facing the community."
        },
        {
            title: "Political Awareness",
            icon: Users,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR827rtiC2vPC4X4dKGU9DU2SIJlEFCeTxEMWkvtRGcbQ&s", // Voting/Democracy
            description: "Empowering the community to actively participate in democratic processes and governance."
        },
        {
            title: "Economic Empowerment",
            icon: TrendingUp,
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop", // Meeting/Graph
            description: "Strategies and mentorship to boost entrepreneurship and financial independence."
        },
        {
            title: "Community Safety",
            icon: ShieldCheck,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujvCIQc2Jswz3NOZd9AeRVSHlz-gJEo8Yvg&s", // Safety/Protection
            description: "Building robust networks to ensure the security and well-being of every member."
        },
        {
            title: "Educational Rights",
            icon: GraduationCap,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdp8LfKWYVxmgst97Qs-vMXuLXYHomywpYqw&s", // University/Study
            description: "Advocating for minority rights and maximizing educational opportunities for youth."
        },
        {
            title: "Youth Mobilization",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1738&auto=format&fit=crop", // Active Youth
            description: "Harnessing the boundless energy of the youth to drive positive social change."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header - Orange/Saffron Theme */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-orange-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 font-bold text-xs uppercase tracking-[0.2em] border border-orange-200">
                    <Sun className="w-4 h-4" />
                    Awake & Arise
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-orange-600 italic">Jaino Jago</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Igniting a movement of awareness, unity, and action to secure a prosperous future for the community.
                    </p>
                </div>
            </div>

            {/* Feature Cards Grid (Poster Style) */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Zap className="w-8 h-8 text-orange-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Areas of Awakening</h2>
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

                            {/* Gradient Overlay - Orange/Saffron Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/90 via-orange-900/40 to-transparent group-hover:via-orange-900/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-orange-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-orange-100/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">
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
