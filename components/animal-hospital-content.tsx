"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Stethoscope, Bird, Dog, Cat, Syringe, Ambulance, Home, CheckCircle2, PawPrint } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function AnimalHospitalContent() {
    const [petType, setPetType] = useState<string>("");

    const services = [
        {
            title: "24/7 Emergency & Trauma Care",
            image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80",
            alt: "Critical Care",
            description: "Round-the-clock emergency support for all species"
        },
        {
            title: "Advanced Veterinary Diagnostics",
            image: "https://plusonevet.com.au/wp-content/uploads/2022/03/Pet-x-ray.jpg",
            alt: "Pet MRI and CT Scan",
            description: "State-of-the-art MRI, CT, and X-Ray facilities"
        },
        {
            title: "Bird & Avian Rescue Wing",
            image: "https://birdsville.net.au/wp-content/uploads/2023/02/re-homed-macaw.jpg",
            alt: "Bird Rescue",
            description: "Specialized care for injured birds and wildlife"
        },
        {
            title: "Holistic & Ayurvedic Vet Care",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0oiklOERu6NqUEqftMUs6F-mpc-qCyMjtWw&s",
            alt: "Natural Treatments",
            description: "Herbal and natural healing therapies"
        },
        {
            title: "Luxury Pet Ward & Boarding",
            image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&q=80",
            alt: "Pet Accommodation",
            description: "Comfortable recovery suites and boarding"
        },
        {
            title: "Mobile Veterinary Ambulance",
            image: "https://th-i.thgim.com/public/incoming/uz7tqy/article68586387.ece/alternates/LANDSCAPE_1200/Animal%20Husbandry%203.jpg",
            alt: "Vet Ambulance",
            description: "Doorstep emergency response unit"
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Header */}
            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-green-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-bold text-xs uppercase tracking-[0.2em] border border-green-200">
                    <Heart className="w-4 h-4 fill-current" />
                    Compassionate Care
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-green-600 italic">Animal Hospital</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Compassionate, world-class care ensuring the well-being of every living being with state-of-the-art facilities.
                    </p>
                </div>
            </div>

            {/* Quote / Mission */}
            <div className="bg-green-50 rounded-2xl p-8 md:p-10 text-center border border-green-100 italic text-green-800 font-serif text-xl md:text-2xl shadow-inner max-w-5xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 opacity-10 rotate-12">
                    <PawPrint className="w-full h-full text-green-800" />
                </div>
                &quot;The greatness of a nation and its moral progress can be judged by the way its animals are treated.&quot;
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative h-auto md:h-96 min-h-[300px] flex flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900">
                            {/* Image Background */}
                            <Image
                                src={service.image}
                                alt={service.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300">
                                    <Stethoscope className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
                                            Feature {idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-serif leading-snug group-hover:text-green-200 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Selection & Action Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-teal-500 to-green-500"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Patient Type Selection */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Dog className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-slate-900">Patient Category</h3>
                        </div>
                        <Select value={petType} onValueChange={setPetType}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-green-500">
                                <SelectValue placeholder="Select Animal Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="canine">Canine (Dogs)</SelectItem>
                                <SelectItem value="feline">Feline (Cats)</SelectItem>
                                <SelectItem value="avian">Avian (Birds)</SelectItem>
                                <SelectItem value="large">Large Animal (Cattle/Equine)</SelectItem>
                                <SelectItem value="exotic">Exotic & Wildlife</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-slate-500 text-sm italic">
                            Specialized doctors available for each species.
                        </p>
                    </div>

                    {/* Quick Facilities */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Home className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl font-bold text-slate-900">Facilities Required</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: "Ambulance Pickup", icon: Ambulance },
                                { label: "Vaccination", icon: Syringe },
                                { label: "Grooming & Spa", icon: Cat }, // Using Cat icon as generic pet/grooming proxy or similar
                                { label: "Shelter Admission", icon: Home }
                            ].map((service, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 group">
                                    <Checkbox id={`req${i}`} className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 w-5 h-5" />
                                    <label htmlFor={`req${i}`} className="text-base font-medium leading-none cursor-pointer text-slate-700 flex items-center gap-2">
                                        <service.icon className="w-4 h-4 text-slate-400 group-hover:text-green-500" />
                                        {service.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6">
                    <Button className="flex-1 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        Book Appointment / Rescue
                    </Button>
                    <Button variant="outline" className="md:w-auto h-14 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-green-400 hover:text-green-700 hover:bg-green-50 transition-all">
                        Back to Categories
                    </Button>
                </div>

            </div>
        </div>
    )
}
