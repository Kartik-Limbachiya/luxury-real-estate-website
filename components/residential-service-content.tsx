"use client"

import React, { useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from 'framer-motion'
import { ApartmentShowcase } from './apartment-showcase'
import { ResidentialCustomizationForm } from './residential-customization-form'
import { BankingPartners } from './banking-partners'
import { DevelopmentSchedule } from './development-schedule'
import { Zap, DollarSign, Home, Leaf, Building2, Star, Check, TrendingUp, Shield, Calendar, ShieldCheck, Users } from "lucide-react"

export function ResidentialServiceContent() {
    const [activeLayout, setActiveLayout] = useState<'2BHK' | '3BHK'>('2BHK');

    const buildingStats = [
        { label: "Per Floor", value: "32 Homes" },
        { label: "Per Floor", value: "32 Homes" },
        { label: "Per Building", value: "8 Floors", sub: "256 Homes" },
        { label: "Per Complex", value: "4 Buildings", sub: "1,024 Homes" }
    ];

    const features = [
        {
            title: "100% Solar System",
            desc: "No Electricity Bills",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
            icon: <Zap className="w-5 h-5 text-amber-500" />
        },
        {
            title: "0% Down Payment",
            desc: "100% Bank Loan",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
            icon: <DollarSign className="w-5 h-5 text-green-500" />
        },
        {
            title: "Fully Furnished",
            desc: "Electronics & Utensils",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
            icon: <Home className="w-5 h-5 text-blue-500" />
        },
        {
            title: "6-Month Ration",
            desc: "Supply Included",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
            icon: <Leaf className="w-5 h-5 text-emerald-500" />
        }
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12">

            {/* Financial Benefits Section */}
            <div className="mb-12 border border-green-200 bg-green-50/30 rounded-3xl p-6 md:p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 flex items-center justify-center gap-2">
                        <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
                        Financial Benefits
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600"><Shield className="w-6 h-6" /></div>
                        <span className="font-bold text-slate-800">0% Down Payment</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><TrendingUp className="w-6 h-6" /></div>
                        <span className="font-bold text-slate-800">100% Bank Loan</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Star className="w-6 h-6" /></div>
                        <span className="font-bold text-slate-800">20 Year Guarantee</span>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Building2 className="w-6 h-6" /></div>
                        <span className="font-bold text-slate-800">70+40 Banks</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-green-200 p-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-4xl font-bold text-green-600">108</span>
                        <span className="font-medium text-green-800">Total Amenities</span>
                    </div>
                    <div className="h-px md:h-12 w-full md:w-px bg-green-100"></div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-xl font-bold text-blue-600">Government Subsidies</span>
                        <span className="text-sm text-blue-400">Available for Eligible Cases</span>
                    </div>
                    <div className="h-px md:h-12 w-full md:w-px bg-green-100"></div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-lg font-bold text-pink-600">Female Property Registration</span>
                        <span className="text-sm text-pink-400">Mother/Wife/Sister/Daughter</span>
                    </div>
                </div>
            </div>

            <BankingPartners />

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                {/* Left Side: Floor Plan Image */}
                <div className="w-full lg:w-3/5 bg-slate-50 rounded-3xl p-2 border border-slate-100 shadow-2xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-orange-100/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden border border-slate-100">
                        <Image
                            src={activeLayout === '2BHK'
                                ? "https://i.ibb.co/gb7qfYFL/Screenshot-2025-09-16-121548.png"
                                : "https://i.ibb.co/gb7qfYFL/Screenshot-2025-09-16-121548.png"}
                            alt={`${activeLayout} Layout`}
                            fill
                            className="object-contain hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Right Side: Content Details */}
                <div className="w-full lg:w-2/5 space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-black text-slate-900 mb-4 tracking-tight">
                            Residential <span className="text-amber-600">Masterpiece</span>
                        </h1>
                        <p className="text-slate-600 text-lg font-light leading-relaxed">
                            Experience a life of abundance with complete housing solutions and world-class facilities included.
                        </p>
                    </div>

                    {/* Key Highlights List */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors">
                            <Home className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">2 BHK: 540 sq ft</h4>
                                <p className="text-slate-500 font-medium">Super Built-up Area</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-200 transition-colors">
                            <Home className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">3 BHK: 720 sq ft</h4>
                                <p className="text-slate-500 font-medium">Super Built-up Area</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                                <Zap className="w-5 h-5 text-green-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-green-900 text-sm">100% Solar System</h4>
                                    <p className="text-green-700 text-xs">No Electricity Bills</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                                <DollarSign className="w-5 h-5 text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-blue-900 text-sm">0% Down Payment</h4>
                                    <p className="text-blue-700 text-xs">100% Bank Loan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Layout Toggle / Selected Button */}
                    <div className="pt-4">
                        <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-amber-200 hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                            <Star className="w-6 h-6 fill-white" />
                            <span className="text-lg">Premium Selection Confirmed</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Swastik Architecture Section */}
            <div className="mt-20 w-full bg-pink-50/50 rounded-3xl border border-pink-100 p-6 md:p-8 mb-20 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <Building2 className="w-64 h-64 text-purple-900" />
                </div>
                <div className="text-center mb-8 relative z-10">
                    <h3 className="text-xl md:text-3xl font-bold text-purple-900 flex items-center justify-center gap-3 font-serif">
                        <span className="text-3xl">🕉️</span> SEWAS Building Architecture - Swastik Concept
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-pink-100 hover:shadow-md transition-all group">
                        <h4 className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">32 Homes</h4>
                        <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">Per Floor</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-pink-100 hover:shadow-md transition-all group">
                        <h4 className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">8 Floors</h4>
                        <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">Per Building</p>
                        <p className="text-purple-400 text-xs font-semibold mt-1">256 Homes</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center border border-pink-100 hover:shadow-md transition-all group">
                        <h4 className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">4 Buildings</h4>
                        <p className="text-slate-500 font-bold uppercase tracking-wider text-sm">Per Complex</p>
                        <p className="text-purple-400 text-xs font-semibold mt-1">1,024 Homes</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-orange-100 p-4 text-center relative z-10 shadow-sm">
                    <p className="text-sm md:text-lg font-bold text-amber-800 flex flex-col md:flex-row items-center justify-center gap-2">
                        <span>🏢 1 Swastik = 8 Floors = 256 Homes</span>
                        <span className="hidden md:inline text-amber-300">|</span>
                        <span>4 Swastik = 1,024 Homes per City</span>
                    </p>
                    <p className="text-xs md:text-sm text-amber-600 mt-2 font-medium italic">"Sacred architecture combining tradition with modern living"</p>
                </div>
            </div>

            {/* Premium Feature Cards (The "Ace" Section) */}
            <div className="mt-0">
                <div className="text-center mb-12">
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Elevated Living Standards</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 font-serif">Unmatched Privileges</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Solar Card */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                            alt="Solar Panels"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-amber-500/20 backdrop-blur-md rounded-lg w-fit text-amber-400 border border-amber-500/30">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">100% Solar System</h4>
                            <p className="text-gray-300 font-medium text-lg">No Electricity Bills</p>
                        </div>
                    </div>

                    {/* Finance Card */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                            alt="Financial Freedom"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-green-500/20 backdrop-blur-md rounded-lg w-fit text-green-400 border border-green-500/30">
                                <DollarSign className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">0% Down Payment</h4>
                            <p className="text-gray-300 font-medium text-lg">100% Bank Loan</p>
                        </div>
                    </div>

                    {/* Furnished Card */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                            alt="Fully Furnished"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-blue-500/20 backdrop-blur-md rounded-lg w-fit text-blue-400 border border-blue-500/30">
                                <Home className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">Fully Furnished</h4>
                            <p className="text-gray-300 font-medium text-lg">Electronics & Utensils</p>
                        </div>
                    </div>

                    {/* Ration Card */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                            alt="Ration Supply"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-orange-500/20 backdrop-blur-md rounded-lg w-fit text-orange-400 border border-orange-500/30">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">6-Month Ration</h4>
                            <p className="text-gray-300 font-medium text-lg">Supply Included</p>
                        </div>
                    </div>

                    {/* EMI Options Card (New) */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                            alt="EMI Options"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-teal-500/20 backdrop-blur-md rounded-lg w-fit text-teal-400 border border-teal-500/30">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold mb-1 leading-tight">Monthly EMI Options</h4>
                            <p className="text-gray-300 font-medium text-lg">60 / 120 / 240 Months</p>
                        </div>
                    </div>

                    {/* Rental Guarantee Card (New) */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                            alt="Rental Guarantee"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-indigo-500/20 backdrop-blur-md rounded-lg w-fit text-indigo-400 border border-indigo-500/30">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">Rental Guarantee</h4>
                            <p className="text-gray-300 font-medium text-lg">20-Year Assurance</p>
                        </div>
                    </div>

                    {/* Family Insurance Card (New) */}
                    <div className="group relative h-80 w-full overflow-hidden rounded-2xl shadow-lg md:col-span-2 lg:col-span-2">
                        <Image
                            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80"
                            alt="Family Insurance"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                            <div className="mb-2 p-2 bg-pink-500/20 backdrop-blur-md rounded-lg w-fit text-pink-400 border border-pink-500/30">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="text-2xl font-bold mb-1 leading-tight">Comprehensive Family Insurance</h4>
                            <p className="text-gray-300 font-medium text-lg">Coverage from ₹10 Lakh to ₹1 Crore</p>
                        </div>
                    </div>
                </div>
            </div >

            {/* Development Timeline */}
            <DevelopmentSchedule />

            {/* Apartment Slideshow Section */}
            <ApartmentShowcase />

            {/* Customization Form */}
            <ResidentialCustomizationForm />
        </div >
    )
}
