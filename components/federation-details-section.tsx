"use client"

import { Shield, TrendingUp, BookOpen, HeartPulse, Wheat, Leaf, Scale, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

export function FederationDetailsSection() {
    const challenges = [
        { icon: AlertTriangle, label: "Terrorism & Armed Conflicts" },
        { icon: TrendingUp, label: "Economic Inflation" },
        { icon: BookOpen, label: "Rising Illiteracy" },
        { icon: HeartPulse, label: "Healthcare Crisis" },
        { icon: Wheat, label: "Widespread Malnutrition" },
        { icon: Leaf, label: "Environmental Degradation" },
        { icon: Scale, label: "Systemic Corruption" },
        { icon: Shield, label: "Human Trafficking" },
    ]

    return (
        <section className="py-20 bg-white overflow-hidden w-full">
            <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20 space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
                            <Shield className="w-6 h-6" /> {/* Placeholder for the ribbon icon in screenshot */}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#E68A00] tracking-tight mb-12">
                        SEWAS Universal Federation
                    </h1>

                    <div className="text-3xl md:text-5xl text-black font-medium leading-relaxed w-full mx-auto text-center px-4 tracking-tight">
                        <span className="font-serif">A</span> <span className="inline-block px-3 py-1 border-2 border-[#4169E1] text-[#4169E1] rounded-lg mx-1 bg-white border-dotted font-bold">beacon of hope</span> for humanity, dedicated to addressing <br className="hidden lg:block" />
                        <span className="inline-block px-3 py-1 border-2 border-[#FF6B00] text-[#FF6B00] rounded-lg mx-1 bg-white border-dotted font-bold mt-2 md:mt-0">critical global challenges</span> and fostering <span className="inline-block px-3 py-1 border-2 border-[#00C853] text-[#00C853] rounded-lg mx-1 bg-white border-dotted font-bold mt-2 md:mt-0">sustainable solutions.</span>
                    </div>
                </div>

                {/* Understanding the Crisis */}
                <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.05)] p-8 md:p-12 mb-20 border border-gray-100/50 w-full">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Understanding the Crisis</h2>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            In today's global landscape, humanity faces unprecedented challenges that threaten the fabric of our collective existence. Terrorism, armed conflicts, economic inflation, rising illiteracy, inadequate healthcare infrastructure, widespread malnutrition, environmental degradation, systemic corruption, escalating violence, and human trafficking have proliferated across all corners of the world.
                        </p>
                        <p>
                            Amidst these pressing contemporary challenges, SEWAS Universal Federation emerges as a beacon of hope for humanity. Our organization is dedicated to addressing these critical issues and fostering sustainable solutions that restore dignity, security, and prosperity to communities worldwide.
                        </p>
                    </div>
                </div>

                {/* Challenges We Address */}
                <div className="mb-20 w-full">
                    <h2 className="text-3xl font-bold text-center mb-12 font-serif text-black">Challenges We Address</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        {challenges.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center h-48 justify-center group"
                            >
                                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform">
                                    <Shield className="w-6 h-6" /> {/* Using Shield as generic base, relying on label context */}
                                </div>
                                <h3 className="font-semibold text-gray-800 text-sm md:text-base">{item.label}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quote Section */}
                <div className="bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] p-10 md:p-16 text-center border border-gray-100 w-full">
                    <blockquote className="text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-normal mb-8">
                        "Working across borders and cultures to create a world where basic human rights are guaranteed realities for every person."
                    </blockquote>
                    <p className="text-gray-900 font-bold text-sm md:text-base uppercase tracking-wider mt-4">
                        SEWAS Universal Federation - Restoring dignity, security, and prosperity worldwide
                    </p>
                </div>

            </div>
        </section>
    )
}
