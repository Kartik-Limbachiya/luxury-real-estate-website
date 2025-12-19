"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, GraduationCap, Building2, FileText, Utensils, Wifi, Globe, BookOpen, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export function EducationServiceContent() {
    const [universityType, setUniversityType] = useState<string>("");

    const features = [
        {
            title: "180 International University Tie-ups & Branches",
            image: "https://spsu.ac.in//wp-content/uploads/2022/08/international.jpg",
            alt: "Global Partnerships"
        },
        {
            title: "Hostel Facilities Available",
            image: "https://3.imimg.com/data3/KI/ET/MY-11537384/hostel-facility-500x500.png",
            alt: "Premium Hostel Accommodation"
        },
        {
            title: "6 Month Ration with Documentation",
            image: "https://img.freepik.com/free-photo/top-view-food-donation-box_23-2149182037.jpg?semt=ais_incoming&w=740&q=80",
            alt: "Nutritional Support"
        },
        {
            title: "Paperless Admission Process",
            image: "https://knowledge-hub.com/wp-content/uploads/2021/08/Digitalizing-the-admission-process.jpg",
            alt: "Digital Admission",
            imageClass: "object-fill"
        },
        {
            title: "Scholarship Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrUvN6Pf1_lkavqm1elIIeEc0bE1VHNizbQ&s",
            alt: "Merit Scholarships",
            imageClass: "object-fill"
        },
        {
            title: "International University Programs",
            image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/06/Global-Programs-at-Chitkara.png",
            alt: "International Education"
        },
        {
            title: "Domestic University Programs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsKC43I5M4CgbZJoa5aP2HWmeMZaLaPPyUg&s",
            alt: "National Excellence"
        },
        {
            title: "Skill Development Centre",
            image: "https://www.sathyabama.ac.in/sites/default/files/inline-images/IMG_9719.jpg",
            alt: "Skill Development"
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-indigo-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-900 font-bold text-xs uppercase tracking-[0.2em] border border-indigo-200">
                    <GraduationCap className="w-4 h-4" />
                    Future Ready
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-indigo-600 italic">Education Options</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        World-class educational infrastructure designed to nurture the next generation of global leaders.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative h-96 flex flex-col justify-end overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900">
                            {/* Image Background */}
                            <Image
                                src={feature.image}
                                alt={feature.alt}
                                fill
                                className={`${feature.imageClass || 'object-cover'} transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100`}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/50 transition-all duration-500" />

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
                                            Feature {idx + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-serif leading-snug group-hover:text-amber-200 transition-colors">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Section */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* University Partnerships */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Globe className="w-6 h-6 text-amber-600" />
                            <h3 className="text-xl font-bold text-slate-900">University Partnerships</h3>
                        </div>
                        <Select value={universityType} onValueChange={setUniversityType}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-amber-500">
                                <SelectValue placeholder="Choose University Partnerships" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="international">180+ International Universities</SelectItem>
                                <SelectItem value="domestic">Domestic Universities</SelectItem>
                                <SelectItem value="vocational">Vocational Institutes</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-slate-500 text-sm italic">
                            Select from our extensive network of global educational partners.
                        </p>
                    </div>

                    {/* Special Benefits */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                            <h3 className="text-xl font-bold text-slate-900">Special Benefits</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "180 International Tie-ups",
                                "Paperless Admission",
                                "Scholarship Available",
                                "Hostel Facility"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-50 transition-colors border border-transparent hover:border-amber-100">
                                    <Checkbox id={`benefit${i}`} className="data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600 w-5 h-5" />
                                    <label htmlFor={`benefit${i}`} className="text-base font-medium leading-none cursor-pointer text-slate-700">
                                        {benefit}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row gap-6">
                    <Button className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        Find Education Services
                    </Button>
                    <Button variant="outline" className="md:w-auto h-14 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all">
                        Back to Categories
                    </Button>
                </div>

            </div>
        </div>
    )
}
