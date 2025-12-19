"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, Zap, Briefcase, ChevronRight, ShieldCheck, Heart, Users, Globe } from "lucide-react"
import Image from "next/image"

export function SaveFreeCampaignContent() {
    const [activeTab, setActiveTab] = useState<'SAVE' | 'FREE' | 'CAMPAIGN'>('CAMPAIGN');

    const tabs = [
        { id: 'SAVE', label: 'Mission: SAVE', color: 'bg-emerald-600', hoverBg: 'hover:bg-emerald-50', activeBorder: 'border-emerald-500', icon: <Leaf className="w-5 h-5" /> },
        { id: 'FREE', label: 'Mission: FREE FROM', color: 'bg-rose-600', hoverBg: 'hover:bg-rose-50', activeBorder: 'border-rose-500', icon: <Zap className="w-5 h-5" /> },
        { id: 'CAMPAIGN', label: 'Campaign Work', color: 'bg-blue-600', hoverBg: 'hover:bg-blue-50', activeBorder: 'border-blue-500', icon: <Briefcase className="w-5 h-5" /> }
    ] as const;

    const saveItems = [
        { title: 'GIRLS', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80', desc: 'Empowering future generations', position: 'object-center' },
        { title: 'CHILD', image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=800&q=80', desc: 'Nurturing innocence', position: 'object-left' }, // Aligned left for the child
        { title: 'ANIMAL', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80', desc: 'Protecting wildlife', position: 'object-center' },
        { title: 'TREE', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80', desc: 'Reclaiming green earth', position: 'object-center' },
        { title: 'FUEL', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80', desc: 'Sustainable energy future', position: 'object-center' },
    ];

    const freeItems = [
        { title: 'POLLUTION', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80', desc: 'Breathing pure air', position: 'object-center' },
        { title: 'CRIME', image: 'https://images.unsplash.com/photo-1453945619913-79ec89a82c51?w=800&q=80', desc: 'Building safer societies', position: 'object-center' },
        { title: 'VIOLENCE', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80', desc: 'Promoting peace', position: 'object-center' },
        { title: 'CORRUPTION', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', desc: 'Transparent governance', position: 'object-center' },
        { title: 'INJUSTICE', image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&q=80', desc: 'Equality for all', position: 'object-center' },
    ];

    const campaignDomains = [
        { title: 'EDUCATION', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', desc: 'Knowledge for everyone', position: 'object-center' },
        { title: 'MEDICAL', image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80', desc: 'Health is wealth', position: 'object-center' },
        { title: 'SOCIAL', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', desc: 'Community bonding', position: 'object-center' },
        { title: 'HOME PRODUCT', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80', desc: 'Sustainable living', position: 'object-center' },
    ];

    return (
        <div className="w-full max-w-[95%] mx-auto px-4 md:px-6 py-12">
            <div className="h-full flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 min-h-[700px]">

                {/* Premium Header Region (Updated to match SEWAS Standard) */}
                <div className="text-center space-y-6 pt-12 pb-8 px-4 border-b border-slate-100">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-[0.2em] border border-slate-700 shadow-lg">
                        <Globe className="w-4 h-4" />
                        Global Initiative
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                            SEWAS <span className="text-emerald-600 italic">Save</span> <span className="text-rose-600 italic">Free</span> <span className="text-blue-600 italic">Campaign</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Dedicated to preserving what matters and liberating society from what holds it back.
                        </p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-col md:flex-row gap-4 p-6 bg-slate-50 border-b border-slate-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'SAVE' | 'FREE' | 'CAMPAIGN')}
                            className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 text-sm md:text-base font-bold rounded-xl transition-all duration-300 md:h-16 shadow-sm border ${activeTab === tab.id
                                ? 'bg-white text-slate-900 shadow-md transform scale-105 border-slate-200 ring-1 ring-slate-100'
                                : `bg-slate-100 text-slate-500 hover:text-slate-700 hover:bg-white border-transparent`
                                }`}
                        >
                            <div className={`p-2 rounded-full ${activeTab === tab.id ? tab.color + ' text-white shadow-lg' : 'bg-slate-200 text-slate-400'}`}>
                                {tab.icon}
                            </div>
                            <span className="tracking-wide uppercase">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-50/30">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* SAVE TAB */}
                            {activeTab === 'SAVE' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                                    {saveItems.map((item, idx) => ( // @ts-ignore
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative h-auto md:h-96 min-h-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900"
                                        >
                                            <Image src={item.image} alt={item.title} fill className={`object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 ${item.position || 'object-center'}`} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/40 to-transparent group-hover:via-emerald-900/50 transition-all duration-500"></div>

                                            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-2">
                                                <span className="px-3 py-1 bg-emerald-500/20 backdrop-blur-md rounded-full text-emerald-100 text-xs font-bold border border-emerald-400/30 mb-2 inline-block">SAVE</span>
                                                <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-emerald-200 transition-colors">{item.title}</h3>
                                                <p className="text-emerald-100/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* FREE FROM TAB */}
                            {activeTab === 'FREE' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                                    {freeItems.map((item, idx) => ( // @ts-ignore
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative h-auto md:h-96 min-h-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900"
                                        >
                                            <Image src={item.image} alt={item.title} fill className={`object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 ${item.position || 'object-center'}`} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-900/40 to-transparent group-hover:via-rose-900/50 transition-all duration-500"></div>

                                            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-2">
                                                <span className="px-3 py-1 bg-rose-500/20 backdrop-blur-md rounded-full text-rose-100 text-xs font-bold border border-rose-400/30 mb-2 inline-block">FREE FROM</span>
                                                <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-rose-200 transition-colors">{item.title}</h3>
                                                <p className="text-rose-100/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* CAMPAIGN TAB */}
                            {activeTab === 'CAMPAIGN' && (
                                <div className="max-w-6xl mx-auto space-y-12">

                                    {/* Domain Cards */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-center gap-3 mb-8">
                                            <Briefcase className="w-8 h-8 text-blue-600" />
                                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Strategic Impact Domains</h3>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {campaignDomains.map((item, idx) => ( // @ts-ignore
                                                <motion.div
                                                    key={item.title}
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="group relative h-auto md:h-96 min-h-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 bg-slate-900"
                                                >
                                                    <Image src={item.image} alt={item.title} fill className={`object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100 ${item.position || 'object-center'}`} />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent group-hover:via-blue-900/50 transition-all duration-500"></div>

                                                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start gap-2">
                                                        <h3 className="text-2xl font-bold text-white font-serif leading-snug group-hover:text-blue-200 transition-colors">{item.title}</h3>
                                                        <p className="text-blue-100/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-left w-full">{item.desc}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                        {/* Digital Work */}
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all group">
                                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                                <Zap className="w-7 h-7 text-blue-600" />
                                            </div>
                                            <h6 className="font-bold text-slate-900 text-2xl font-serif mb-6">Digital Ecosystem</h6>
                                            <ul className="space-y-4">
                                                {[
                                                    { name: 'Content Writing', desc: 'Narratives that drive change' },
                                                    { name: 'Graphic Design', desc: 'Visuals that speak volumes' },
                                                    { name: 'Video Editing', desc: 'Stories in motion' }
                                                ].map(item => (
                                                    <li key={item.name} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                                                        <div>
                                                            <div className="font-bold text-slate-800 text-lg">{item.name}</div>
                                                            <div className="text-slate-500 text-sm">{item.desc}</div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Professional Work */}
                                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-amber-100 transition-all group">
                                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                                                <ShieldCheck className="w-7 h-7 text-amber-600" />
                                            </div>
                                            <h6 className="font-bold text-slate-900 text-2xl font-serif mb-6">Professional Services</h6>
                                            <ul className="space-y-4">
                                                {[
                                                    { name: 'Accountant', desc: 'Financial transparency' },
                                                    { name: 'Legal Advisor', desc: 'Justice and compliance' },
                                                    { name: 'Data Entry', desc: 'Structural organization' }
                                                ].map(item => (
                                                    <li key={item.name} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
                                                        <div>
                                                            <div className="font-bold text-slate-800 text-lg">{item.name}</div>
                                                            <div className="text-slate-500 text-sm">{item.desc}</div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
