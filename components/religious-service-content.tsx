"use client"

import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Flame, User, Square, Circle, DoorOpen, Route, Flower, ArrowRight, Trees, Landmark, Palette, Home, ArrowLeft, Filter } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ReligiousServiceContent() {
    const [facility, setFacility] = useState<string>("Jain Sthanak");
    const [sect, setSect] = useState<string>("Shwetambar");

    const features = [
        {
            title: "SEWAS Jain Temple",
            image: "https://www.nfttworld.com/wp-content/uploads/2024/04/Rajasthan-Jain-Tirth-Tour-in-India-820x565.jpg",
            alt: "Jain Temple Architecture"
        },
        {
            title: "SEWAS Jain Upashray",
            image: "https://knsarchitects.com/wp-content/uploads/2023/12/Jain-Upashray.jpg",
            alt: "Modern Upashray Building"
        },
        {
            title: "SEWAS Jain Sthanak",
            image: "https://content3.jdmagicbox.com/v2/comp/delhi/v3/011pxx11.xx11.220309193440.y7v3/catalogue/jain-sthanak-rishabh-vihar-karkardooma-delhi-jain-temples-t2l1ommbkq.jpg",
            alt: "Peaceful Sthanak Entrance"
        },
        {
            title: "84 Gacch and 4 Sampradaya support",
            image: "https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_Jains_featured.jpg?w=640",
            alt: "Community Support"
        }
    ];

    const sectImages: Record<string, string> = {
        "Shwetambar": "https://jaipurthrumylens.com/wp-content/uploads/2023/02/jinalaya-shwetamber-jain-temple-jaipur-mohanbari-arihant-vatika.jpg",
        "Digambar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoI52UV9ZOP6cPcWj7nhPzvllqdjV-Yg7Xw&s",
        "Sthanakvasi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtOTqRT-M_DnhcGhjsRxr6aAChGls2h2Mqg&s",
        "Terapanth": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9P-F85Hqt2NMxc2KbrH2LuDYokgIXWIWtw&s"
    };

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12 space-y-16">

            {/* Premium Header */}
            <div className="text-center space-y-6 max-w-4xl mx-auto pb-8 border-b border-amber-100">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-[0.2em] border border-amber-200">
                    <Landmark className="w-4 h-4" />
                    Divine Spaces
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                        SEWAS <span className="text-amber-600 italic">Religious Options</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Sacred spaces designed for spiritual harmony and peace, reflecting the divine architecture of Jain heritage.
                    </p>
                </div>
            </div>

            {/* Gudh Rahasyamay - Mystical Spiritual Foundation */}
            {/* Gudh Rahasyamay - Mystical Spiritual Foundation */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" /> {/* Texture if avail, else just subtle */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                    <div className="bg-white/5 backdrop-blur-md border-b border-white/10 p-6 text-center">
                        <h3 className="text-amber-200 font-bold flex items-center justify-center gap-3 text-sm md:text-lg tracking-[0.2em] uppercase">
                            <Sparkles className="w-5 h-5 text-amber-400" />
                            Ancient Shastra-Based Planning
                            <Sparkles className="w-5 h-5 text-amber-400" />
                        </h3>
                    </div>

                    <div className="p-8 md:p-16">
                        <div className="text-center mb-16">
                            <h3 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 drop-shadow-lg">
                                Gudh <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Rahasyamay</span>
                            </h3>
                            <p className="text-purple-200 text-xl font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-amber-500 pl-6 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-6">
                                "The Mystical Spiritual Foundation based on <br className="hidden md:block" />
                                <span className="text-white font-bold">Niti, Niyam, Vidhi, & Vidhan</span>"
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Hom-Havan */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-500 group/card hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover/card:scale-110 transition-transform duration-500 ring-4 ring-orange-900/50">
                                    <Flame className="w-12 h-12 text-white" />
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-white mb-3">Hom-Havan</h4>
                                <p className="text-slate-300 font-medium tracking-wide uppercase text-sm">Sacred Fire Rituals</p>
                            </div>

                            {/* Tap-Jap-Khap */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-500 group/card hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover/card:scale-110 transition-transform duration-500 ring-4 ring-amber-900/50 relative">
                                    <User className="w-12 h-12 text-white" />
                                    <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full border-4 border-indigo-900 animate-pulse" />
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-white mb-3">Tap-Jap-Khap</h4>
                                <p className="text-slate-300 font-medium tracking-wide uppercase text-sm">Austerity & Penance</p>
                            </div>

                            {/* Sacred Geometry */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-500 group/card hover:-translate-y-2">
                                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center mb-8 shadow-lg group-hover/card:scale-110 transition-transform duration-500 ring-4 ring-slate-900/50">
                                    <div className="flex gap-1 items-end">
                                        <Square className="w-6 h-6 text-white" />
                                        <Circle className="w-6 h-6 text-white" />
                                        <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-white border-r-[10px] border-r-transparent"></div>
                                    </div>
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-white mb-3">Sacred Geometry</h4>
                                <p className="text-slate-300 font-medium tracking-wide uppercase text-sm">Geometric Harmony</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 24 Tirthankar Naming System */}
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border border-amber-200 shadow-2xl p-8 md:p-16">
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-amber-400 rounded-tl-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-amber-400 rounded-br-3xl opacity-50" />

                <div className="text-center mb-16 relative z-10">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full border border-amber-200 shadow-lg mb-8">
                        <span className="text-2xl">🕉️</span>
                        <span className="font-bold text-lg text-amber-900 tracking-wide uppercase">Divine Heritage</span>
                        <span className="text-2xl">🕉️</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-serif text-amber-900 mb-6 drop-shadow-sm">
                        24 Tirthankar <span className="text-amber-600">Naming System</span>
                    </h2>
                    <p className="text-amber-800 text-xl font-medium max-w-4xl mx-auto leading-relaxed font-serif italic">
                        "A sacred naming convention honoring Tirthankar birthplaces, parents, symbols, and divine life stories."
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl mx-auto relative z-10">
                    <NamingItem
                        icon={<DoorOpen className="w-6 h-6 text-amber-700" />}
                        title="Main Gates"
                        subtitle="Tirthankar Birthplace"
                        gradient="from-amber-100 to-amber-200"
                    />
                    <NamingItem
                        icon={<Route className="w-6 h-6 text-green-700" />}
                        title="Roads"
                        subtitle="Tirthankars"
                        gradient="from-green-100 to-green-200"
                    />
                    <NamingItem
                        icon={<Flower className="w-6 h-6 text-pink-600" />}
                        title="Gardens"
                        subtitle="Tirthankar Mothers"
                        gradient="from-pink-100 to-pink-200"
                    />
                    <NamingItem
                        icon={<Landmark className="w-6 h-6 text-orange-600" />}
                        title="Streets"
                        subtitle="Tirthankar Fathers"
                        gradient="from-orange-100 to-orange-200"
                    />
                    <NamingItem
                        icon={<ArrowRight className="w-6 h-6 text-blue-600" />}
                        title="Incoming Roads"
                        subtitle="Ganadhar Names"
                        gradient="from-blue-100 to-blue-200"
                    />
                    <NamingItem
                        icon={<ArrowLeft className="w-6 h-6 text-indigo-600" />}
                        title="Outgoing Roads"
                        subtitle="Yaksha Names"
                        gradient="from-indigo-100 to-indigo-200"
                    />
                    <NamingItem
                        icon={<Trees className="w-6 h-6 text-green-600" />}
                        title="Trees"
                        subtitle="Vriksha (Sacred Tree)"
                        gradient="from-emerald-100 to-emerald-200"
                    />
                    <NamingItem
                        icon={<Palette className="w-6 h-6 text-purple-600" />}
                        title="Art Galleries"
                        subtitle="Lanchhan (Symbols)"
                        gradient="from-purple-100 to-purple-200"
                    />
                    <NamingItem
                        icon={<div className="bg-purple-600 text-white w-6 h-6 flex items-center justify-center text-xs font-bold rounded shadow-sm">35</div>}
                        title="Jinalaya"
                        subtitle="Moolnayak Form"
                        gradient="from-violet-100 to-violet-200"
                    />
                    <NamingItem
                        icon={<Home className="w-6 h-6 text-amber-800" />}
                        title="Homes"
                        subtitle="Family Members"
                        gradient="from-yellow-100 to-yellow-200"
                    />
                </div>
            </div>

            <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold p-6 rounded-2xl text-center shadow-xl text-xl hover:scale-[1.01] hover:shadow-2xl transition-all cursor-pointer border-2 border-orange-400/50">
                📖 Life stories of each Tirthankar available on website
            </div>

            {/* Key Religious Features Section */}
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-amber-500 fill-amber-500" />
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                        Key Religious Features:
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature, idx) => (
                        <Card key={idx} className="overflow-hidden border-amber-100 shadow-lg hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500 group bg-white relative">
                            <div className="relative h-[30rem] w-full overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.alt}
                                    fill
                                    className="object-fill group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            </div>
                            <CardContent className="p-6 absolute bottom-0 left-0 w-full z-10 flex flex-col justify-end">
                                <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 origin-bottom-left">
                                    {idx === 3 ? <User className="w-5 h-5 text-amber-400" /> : <Landmark className="w-5 h-5 text-amber-400" />}
                                    <span className="text-amber-200/90 font-medium uppercase tracking-wider text-xs">Feature</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors drop-shadow-md">{feature.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Religious Facility & Preference Form + Summary Container */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-4">
                        <label className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Home className="w-5 h-5 text-amber-600" />
                            Religious Facility
                        </label>
                        <Select value={facility} onValueChange={setFacility}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-amber-500">
                                <SelectValue placeholder="Select Facility" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Jain Temple">Jain Temple</SelectItem>
                                <SelectItem value="Jain Upashray">Jain Upashray</SelectItem>
                                <SelectItem value="Jain Sthanak">Jain Sthanak</SelectItem>
                                <SelectItem value="Prayer Hall">Prayer Hall</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <User className="w-5 h-5 text-amber-600" />
                            Sect Preference
                        </label>
                        <Select value={sect} onValueChange={setSect}>
                            <SelectTrigger className="w-full bg-slate-50 border-slate-200 h-14 text-lg focus:ring-amber-500">
                                <SelectValue placeholder="Select Sect" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Shwetambar">Shwetambar</SelectItem>
                                <SelectItem value="Digambar">Digambar</SelectItem>
                                <SelectItem value="Sthanakvasi">Sthanakvasi</SelectItem>
                                <SelectItem value="Terapanth">Terapanth</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Selected Sect Display */}
                {sect && (
                    <div className="bg-purple-50/50 rounded-2xl p-8 md:p-10 border border-purple-100 text-center space-y-8 animate-in fade-in zoom-in duration-500 mb-12">
                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-bold font-serif text-purple-900">
                                Selected Sect: <span className="text-purple-600 underline decoration-purple-300 underline-offset-4">{sect}</span>
                            </h3>
                            <p className="text-slate-600 text-lg">Experience the divine atmosphere of our {sect} specific facilities</p>
                        </div>

                        <div className="relative h-[45rem] w-full mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-purple-200 group">
                            <Image
                                src={sectImages[sect] || "/placeholder.jpg"}
                                alt={`${sect} Temple`}
                                fill
                                className="object-fill group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-8 left-0 right-0">
                                <span className="bg-white/90 backdrop-blur-md px-8 py-3 rounded-full shadow-lg text-purple-900 font-bold text-lg inline-block">
                                    {sect} Facility View
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg"><Landmark className="w-6 h-6 text-purple-600" /></div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Architecture</h5>
                                    <p className="text-sm text-slate-500">Traditional {sect} style design</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg"><User className="w-6 h-6 text-purple-600" /></div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Community</h5>
                                    <p className="text-sm text-slate-500">Dedicated space for {sect} samaj</p>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm flex items-start gap-4">
                                <div className="bg-purple-100 p-2 rounded-lg"><Sparkles className="w-6 h-6 text-purple-600" /></div>
                                <div>
                                    <h5 className="font-bold text-slate-900">Rituals</h5>
                                    <p className="text-sm text-slate-500">Facilities for {sect} rituals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Selection Summary & Actions */}
                <div className="space-y-8 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <div className="flex items-center gap-3 mb-2 text-slate-900 font-bold text-xl border-b border-slate-200 pb-4">
                        <Filter className="w-6 h-6 text-slate-700" />
                        <h3>Your Religious Selection Summary</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 mb-1 font-medium uppercase tracking-wider">Requested Facility</p>
                            <p className="text-lg font-bold text-slate-900">{facility}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <p className="text-sm text-slate-500 mb-1 font-medium uppercase tracking-wider">Sect Preference</p>
                            <p className="text-lg font-bold text-slate-900">{sect}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 pt-4">
                        <Button className="flex-1 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                            Find Religious Services
                        </Button>
                        <Button variant="outline" className="md:w-auto h-14 text-lg font-bold rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50 transition-all">
                            Back to Categories
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NamingItem({ icon, title, subtitle, gradient }: { icon: React.ReactNode, title: string, subtitle: string, gradient: string }) {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-amber-100 p-6 flex items-center gap-6 shadow-md hover:shadow-2xl hover:shadow-amber-100/40 hover:border-amber-400 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${gradient}`} />

            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm ring-4 ring-white`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold font-serif text-slate-900 text-xl leading-tight group-hover:text-amber-700 transition-colors">{title}</h4>
                <p className="text-amber-900/70 text-sm font-medium mt-1">{subtitle}</p>
            </div>
        </div>
    )
}
