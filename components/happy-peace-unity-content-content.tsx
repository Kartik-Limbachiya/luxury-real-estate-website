"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Flower2, Handshake, Moon, Users, Globe, Smile } from "lucide-react"
import Image from "next/image"

export function HappyPeaceUnityContent() {
    const features = [
        {
            title: "Inner Peace Centers",
            icon: Moon,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJrhcCw5Bd6S23_ZyK0g7Y2tun61_V-LFdA&s", // Yoga/Meditation
            description: "Tranquil spaces dedicated to yoga, meditation, and spiritual rejuvenation."
        },
        {
            title: "Community Harmony",
            icon: Handshake,
            image: "https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=1769&auto=format&fit=crop", // Hands together/Group
            description: "Initiatives fostering deep understanding and unity among diverse community sections."
        },
        {
            title: "Conflict Resolution",
            icon: Users,
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1574&auto=format&fit=crop", // Discussion/Meeting
            description: "Providing amicable, community-led mediation services for dispute resolution."
        },
        {
            title: "Global Peace Summits",
            icon: Globe,
            image: "https://i.ytimg.com/vi/Jx1RHekcpkk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0gfM__glbCnAw2L6Tj8jY0j3TyQ", // Conference/Globe
            description: "Hosting international dialogues to promote tolerance and universal brotherhood."
        },
        {
            title: "Wellness Retreats",
            icon: Flower2,
            image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1740&auto=format&fit=crop", // Nature/Wellness
            description: "Holistic health programs integrating physical, mental, and spiritual well-being."
        },
        {
            title: "Happiness Workshops",
            icon: Smile,
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1740&auto=format&fit=crop", // Laughing/Group
            description: "Interactive sessions to cultivate joy, positivity, and emotional resilience."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header - Teal/Cyan Theme */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-teal-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 font-bold text-xs uppercase tracking-[0.2em] border border-teal-200">
                    <Heart className="w-4 h-4" />
                    Harmony & Wellness
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-teal-600 italic">Happy Peace Unity</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Cultivating a world of inner balance, societal harmony, and universal brotherhood through holistic well-being.
                    </p>
                </div>
            </div>

            {/* Feature Cards Grid (Poster Style) */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Flower2 className="w-8 h-8 text-teal-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Pathways to Peace</h2>
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

                            {/* Gradient Overlay - Teal/Cyan Theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/40 to-transparent group-hover:via-teal-900/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-teal-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-teal-100/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">
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
