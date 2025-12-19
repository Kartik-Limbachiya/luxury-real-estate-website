"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Stethoscope, Activity, Cross, User, Clock, ShieldCheck, Ambulance, Pill, BedDouble } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function MedicalServiceContent() {
    const [facilityType, setFacilityType] = useState<string>("");

    const features = [
        {
            title: "SEWAS Jain Hospital",
            image: "https://ilshospitals.com/wp-content/uploads/2023/10/ILSDumdum-Building512.webp",
            alt: "State-of-the-art Hospital Infrastructure",
            description: "World-class multi-specialty healthcare"
        },
        {
            title: "Ayurvedic, Homeopathic, Allopathic treatments",
            image: "https://image.slidesharecdn.com/allopathyvshomeopathyvsayurveda-161024174714/75/Allopathy-vs-homeopathy-vs-ayurveda-1-2048.jpg",
            alt: "Holistic Treatment Options",
            description: "Integrated medicine for complete wellness"
        },
        {
            title: "All treatments at minimum rates",
            image: "https://media.istockphoto.com/id/1367679452/photo/reduce-cost.jpg?s=612x612&w=0&k=20&c=M2TLcerMiT8S8jWhgaQcJuk5fOO1xwF8VK4izLy9yzc=",
            alt: "Affordable Healthcare",
            description: "Quality care accessible to everyone"
        },
        {
            title: "Panchakarma and Yoga facilities",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4neOhpIm8gfCuPBrjvWk5tEpbkUpbutinFg&s",
            alt: "Wellness Center",
            description: "Rejuvenation for mind, body, and soul"
        },
        {
            title: "Advanced Diagnostic Centre",
            image: "https://wp04-media.cdn.ihealthspot.com/wp-content/uploads/sites/91/2023/10/iStock-1443435491-1.jpg",
            alt: "High-tech Diagnostics",
            description: "MRI, CT Scan, and Pathology Labs"
        },
        {
            title: "24/7 Critical Care",
            image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
            alt: "Emergency Care",
            description: "Round-the-clock emergency response"
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Header */}
            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-red-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 font-bold text-xs uppercase tracking-[0.2em] border border-red-200">
                    <Heart className="w-4 h-4 fill-current" />
                    Healing Hands
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-red-600 italic">Medical Services</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive healthcare ecosystem blending advanced medical science with holistic healing for complete wellness.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                                    <Activity className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="text-red-300 text-xs font-bold uppercase tracking-widest">
                                            Feature {idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-serif leading-snug group-hover:text-red-100 transition-colors">
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

            {/* Selection & Action Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-blue-500 to-red-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Facility Selection */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2Icon className="w-6 h-6 text-red-600" />
                            <h3 className="text-xl font-bold text-slate-900">Health Facilities</h3>
                        </div>
                        <Select value={facilityType} onValueChange={setFacilityType}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-red-500">
                                <SelectValue placeholder="Choose Facility Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="hospital">SEWAS Jain Hospital</SelectItem>
                                <SelectItem value="diagnostic">Advanced Diagnostic Centre</SelectItem>
                                <SelectItem value="critical">24/7 Critical Care</SelectItem>
                                <SelectItem value="ayurvedic">Ayurvedic & Holistic Center</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-slate-500 text-sm italic">
                            Select the type of medical care you are looking for.
                        </p>
                    </div>

                    {/* Quick Services */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck className="w-6 h-6 text-red-600" />
                            <h3 className="text-xl font-bold text-slate-900">Emergency & Services</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "24x7 Emergency", icon: Ambulance },
                                { label: "Cashless Insurance", icon: ShieldCheck },
                                { label: "In-house Pharmacy", icon: Pill },
                                { label: "ICU & Ventilator", icon: BedDouble }
                            ].map((service, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-100 group">
                                    <Checkbox id={`service${i}`} className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 w-5 h-5" />
                                    <label htmlFor={`service${i}`} className="text-base font-medium leading-none cursor-pointer text-slate-700 flex items-center gap-2">
                                        <service.icon className="w-4 h-4 text-slate-400 group-hover:text-red-500" />
                                        {service.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6">
                    <Button className="flex-1 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        Find Medical Services
                    </Button>
                    <Button variant="outline" className="md:w-auto h-14 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-700 hover:bg-red-50 transition-all">
                        Back to Categories
                    </Button>
                </div>

            </div>
        </div>
    )
}

function Building2Icon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            <path d="M10 6h4" />
            <path d="M10 10h4" />
            <path d="M10 14h4" />
            <path d="M10 18h4" />
        </svg>
    )
}
