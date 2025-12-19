"use client"

import { Home, Building2, Lightbulb, Heart, Users, Globe, Target } from "lucide-react"
import { motion } from "framer-motion"

export function MissionSectionFull() {
    const approaches = [
        { icon: Home, label: "Residential Security", desc: "Safe and dignified housing for all" },
        { icon: Building2, label: "Commercial Opportunities", desc: "Economic empowerment and sustainable livelihoods" },
        { icon: Lightbulb, label: "Quality Education", desc: "Accessible learning opportunities for every age and background" },
        { icon: Heart, label: "Healthcare Services", desc: "Comprehensive medical care without barriers" },
        { icon: Users, label: "Social Welfare", desc: "Holistic support systems that uplift communities" },
        { icon: Globe, label: "Global Impact", desc: "Working across borders and cultures worldwide" },
    ]

    return (
        <section className="py-20 bg-white min-h-screen">
            <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full flex items-center justify-center text-gray-600 shadow-md">
                                <Target className="w-8 h-8" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#D97706] tracking-tight mb-8">
                        Our Mission
                    </h1>

                    <div className="text-3xl md:text-5xl text-black font-medium leading-relaxed w-full mx-auto text-center px-4 tracking-tight">
                        Ensuring <span className="inline-block px-3 py-1 border-2 border-[#4169E1] text-[#4169E1] rounded-lg mx-1 bg-white border-dotted font-bold">Fundamental Human Necessities</span> for <span className="inline-block px-3 py-1 border-2 border-[#FF6B00] text-[#FF6B00] rounded-lg mx-1 bg-white border-dotted font-bold">All</span>
                    </div>
                </div>

                {/* Description Box */}
                <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.05)] p-8 md:p-12 mb-20 border border-gray-100/50 w-full">
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-center">
                        SEWAS Universal Federation is committed to ensuring that no individual, anywhere in the world, is deprived of fundamental human necessities. We dedicate ourselves to tireless efforts in bridging these critical gaps, working across borders and cultures to create a world where basic human rights are not privileges, but guaranteed realities for every person.
                    </p>
                </div>

                {/* Approach Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif text-black">Our Comprehensive Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {approaches.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group h-full justify-center"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-800 rounded-full flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.label}</h3>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xs">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
