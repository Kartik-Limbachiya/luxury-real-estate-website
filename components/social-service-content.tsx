"use client"

import React, { useState } from 'react'
import { Building, Users, Calendar, Sparkles, HeartHandshake, Smile, Search, CheckCircle2, Music } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function SocialServiceContent() {
    const [facilityType, setFacilityType] = useState<string>("");

    const features = [
        {
            title: "SEWAS Jain Social Hall",
            icon: Building,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNyrQ0KofecU3KDFehrzqTVBmjkRD8-Y1tQ&s",
            description: "Grand banquet hall for weddings, community gatherings, and large-scale celebrations."
        },
        {
            title: "Community Gathering Spaces",
            icon: Users,
            image: "https://images.squarespace-cdn.com/content/v1/61d89c9fe365be2bd16d70a0/abeb3399-8ef4-4a1d-a989-7819eb14b19c/charlotte-downtown_1400.jpg",
            description: "Open-air venues and plazas designed for fostering community interaction and unity."
        },
        {
            title: "Event Management Services",
            icon: Calendar,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbupJ3KJp8LCDUWid1TWnp7bDQcvX1R4iOQ&s",
            description: "World-class planning and execution for religious, social, and national events."
        },
        {
            title: "Social, Religious & National Events",
            icon: Sparkles,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToItN1BLt83qOOiVwxCKA_aSNpfjHYvythxvJFpVKS6sbvh-aNajWFPUhhTptjdw2qXJE&usqp=CAU",
            description: "Dedicated spaces and teams for hosting festivals and cultural programs."
        },
        {
            title: "Senior Citizen Clubs",
            icon: HeartHandshake,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6Ya2IJkEQWUdon87IPdwEQxwk91L7aSHNg&s", // Using community center image as proxy
            description: "Recreational areas tailored for the comfort and leisure of our elders."
        },
        {
            title: "Youth Activity Centers",
            icon: Smile,
            image: "https://img.freepik.com/free-photo/youth-word-street-drawing-style-concept_53876-122551.jpg?semt=ais_hybrid&w=740&q=80",
            description: "Engaging spaces for youth development, sports, and creative workshops."
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-orange-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 font-bold text-xs uppercase tracking-[0.2em] border border-orange-200">
                    <Users className="w-4 h-4" />
                    Community Unity
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS Jain <span className="text-orange-600 italic">Social Hall</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Creating vibrant spaces that foster unity, celebration, and social welfare for a connected community life.
                    </p>
                </div>
            </div>

            {/* Feature Cards Grid (Poster Style) */}
            <div className="space-y-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Music className="w-8 h-8 text-orange-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Social Infrastructure</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative h-96 flex flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900">
                            {/* Image Background */}
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay */}
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

            {/* Find Social Services Section (Interactive) */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Facility Type Selection */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Building className="w-6 h-6 text-orange-600" />
                            <h3 className="text-xl font-bold text-slate-900">Facility Type</h3>
                        </div>
                        <Select value={facilityType} onValueChange={setFacilityType}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-orange-500">
                                <SelectValue placeholder="Choose Facility Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="hall">Social Hall</SelectItem>
                                <SelectItem value="center">Community Center</SelectItem>
                                <SelectItem value="space">Event Space</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-slate-500 text-sm italic">
                            Select the type of venue you are looking for.
                        </p>
                    </div>

                    {/* Event Types */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Sparkles className="w-6 h-6 text-orange-600" />
                            <h3 className="text-xl font-bold text-slate-900">Event Types</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Social Events",
                                "Religious Ceremonies",
                                "National Celebrations",
                                "Community Gatherings"
                            ].map((event, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 transition-colors border border-transparent hover:border-orange-100 group">
                                    <Checkbox id={`evt${i}`} className="data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600 w-5 h-5" />
                                    <label htmlFor={`evt${i}`} className="text-base font-medium leading-none cursor-pointer text-slate-700 flex items-center gap-2">
                                        {event}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6">
                    <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        <Search className="w-5 h-5 mr-2" />
                        Find Social Services
                    </Button>
                    <Button variant="outline" className="md:w-auto h-14 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-orange-400 hover:text-orange-700 hover:bg-orange-50 transition-all">
                        Back to Categories
                    </Button>
                </div>
            </div>
        </div>
    )
}
