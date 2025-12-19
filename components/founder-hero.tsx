"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function FounderHero() {
    return (
        <section className="relative min-h-screen bg-[#FFFBF5] flex items-center overflow-hidden py-24">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div className="order-2 lg:order-1 space-y-10 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-amber-300 bg-amber-50/50 backdrop-blur-sm">
                                <h2 className="text-amber-800 font-serif tracking-[0.2em] text-xs md:text-sm uppercase font-bold">
                                    || Namo Arihantanam ||
                                </h2>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-gray-900 leading-[1.1] mb-8">
                                Welcome to the <br />
                                <span className="italic text-gray-600 text-3xl md:text-5xl lg:text-6xl">Organization of</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 drop-shadow-sm">
                                    Panditvarya Shree Aswinbhai Shah
                                </span>
                            </h1>

                            <div className="space-y-8 relative">
                                {/* Vertical Accent Line */}
                                <div className="hidden lg:block absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-amber-300 to-transparent rounded-full opacity-50"></div>

                                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed">
                                    A Visionary Guruji Organization pioneering <br className="hidden md:block" />
                                    <span className="font-medium text-amber-700 decoration-amber-200 underline decoration-1 underline-offset-4">Worldwide Jainism Development</span>
                                </p>
                                <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-loose">
                                    Leading the community towards a brighter future through <strong>Multiple Unique Projects</strong> focused on religious preservation, social unity, and lasting economic empowerment.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            >
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-sm font-serif tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                    <span className="relative z-10 flex items-center gap-2">
                                        Explore Our Vision
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Image Side - MAGNIFIED */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Premium Gold Frame Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-200 via-yellow-100 to-amber-400 rounded-lg blur-sm opacity-60"></div>

                            {/* Image Container - SIGNIFICANTLY LARGER */}
                            <div className="relative w-[340px] h-[480px] md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl border-[1px] border-white/50 bg-gray-100">

                                <Image
                                    src="https://i.ibb.co/qYGy8vsz/temp90.jpg"
                                    alt="Panditvarya Shree Aswinbhai Shah"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />

                                {/* Cinematic Overlay at Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Floating Badge - Repositioned & Styled */}
                                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 p-5 rounded-sm shadow-lg">
                                    <p className="text-white font-serif text-xl tracking-wide">Visionary Leader</p>
                                    <div className="h-[1px] w-12 bg-amber-400 my-2"></div>
                                    <p className="text-white/80 text-sm font-light uppercase tracking-widest">5+ Years of Service</p>
                                </div>
                            </div>

                            {/* Background Decorative Graphic */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[0.5px] border-amber-900/10 rounded-full -z-10 hidden lg:block"></div>
                            <div className="absolute -top-10 -left-10 w-48 h-48 border-[0.5px] border-amber-900/10 rounded-full -z-10 hidden lg:block"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
