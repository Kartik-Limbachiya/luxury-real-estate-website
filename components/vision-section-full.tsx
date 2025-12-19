"use client"

import { Users, Building2, Lightbulb, Shield, Heart, Zap, Eye } from "lucide-react"
import { motion } from "framer-motion"

export function VisionSectionFull() {
    const categories = [
        { icon: Users, label: "Global Celebrities", desc: "Leveraging their reach to inspire collective action" },
        { icon: Building2, label: "Business Leaders", desc: "Mobilizing resources for sustainable impact" },
        { icon: Lightbulb, label: "Professional Artists", desc: "Harnessing creativity to bridge cultural divides" },
        { icon: Shield, label: "Political Leaders", desc: "Fostering policy frameworks that promote peace" },
        { icon: Heart, label: "Sports Icons", desc: "Uniting communities through universal sports" },
        { icon: Zap, label: "Sustainable Contributors", desc: "Engaging committed individuals for lasting change" },
    ]

    return (
        <section className="py-20 bg-white min-h-screen">
            <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-black rounded-full flex items-center justify-center text-white shadow-lg">
                                <Eye className="w-8 h-8" />
                            </div>
                            <span className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-semibold uppercase tracking-widest text-sm shadow-sm">Our Vision</span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#D97706] tracking-tight mb-8">
                        Our Vision
                    </h1>

                    <div className="text-3xl md:text-5xl text-black font-medium leading-relaxed w-full mx-auto text-center px-4 tracking-tight">
                        <span className="font-serif">A</span> <span className="inline-block px-3 py-1 border-2 border-[#4169E1] text-[#4169E1] rounded-lg mx-1 bg-white border-dotted font-bold">World United</span> in <span className="inline-block px-3 py-1 border-2 border-[#A855F7] text-[#A855F7] rounded-lg mx-1 bg-white border-dotted font-bold">Peace</span> and <span className="inline-block px-3 py-1 border-2 border-[#16A34A] text-[#16A34A] rounded-lg mx-1 bg-white border-dotted font-bold">Brotherhood</span>
                    </div>
                </div>

                {/* Description Box */}
                <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.05)] p-8 md:p-12 mb-20 border border-gray-100/50 w-full">
                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl text-center">
                        SEWAS Universal Federation envisions a world united in peace and brotherhood. Our vision is to establish global harmony by bringing together influential leaders and change makers from diverse sectors to create a global movement that transcends boundaries, cultivates universal brotherhood, and establishes enduring world peace for present and future generations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {categories.map((item, index) => (
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
        </section>
    )
}
