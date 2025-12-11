"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Plane, Tv, Heart, Building2, Users, Globe2,
  Briefcase, Leaf, Zap, ArrowRight, Star
} from 'lucide-react';
import Image from 'next/image';

// --- Types ---

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  className: string; // Tailwind grid classes
  image: string; // Background image path
  icon: React.ReactNode;
  modalContent: React.ReactNode;
}

// --- Rich Content Sub-Components ---

const ListOption = ({ title, sub }: { title: string, sub?: string }) => (
  <div className="group flex items-center justify-between p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:border-amber-200 dark:hover:border-amber-900/50">
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">{title}</span>
      {sub && <span className="text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-amber-600/70 font-medium tracking-wider uppercase mt-0.5 transition-colors">{sub}</span>}
    </div>
    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
  </div>
);

// 1. Residential Options
const ResidentialContent = () => (
  <div className="space-y-5">
    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 shadow-lg group">
      <Image
        src="/luxury-mumbai-apartment-building.jpg"
        alt="Luxury Living"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
        <div>
          <p className="text-amber-400 text-[10px] font-bold tracking-widest uppercase mb-1">Exclusive Portfolio</p>
          <h3 className="text-white text-2xl font-serif italic">Curated Living Spaces</h3>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
      {['Luxury Apartments', 'Sky Villas', 'Penthouses', 'Studio Suites', 'Garden Homes', 'Senior Living'].map((item) => (
        <ListOption key={item} title={item} />
      ))}
    </div>
  </div>
);

// 2. Airways Content
const AirwaysContent = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white p-6 rounded-xl shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
        <Plane className="w-32 h-32" />
      </div>
      <h3 className="text-2xl font-serif mb-3 relative z-10">Global Aviation Excellence</h3>
      <p className="text-blue-100 leading-relaxed relative z-10 max-w-lg font-light text-base">
        To provide world-class training that equips aviation professionals with the knowledge, skills, and mindset to excel in their roles.
      </p>
    </div>

    <div>
      <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
        <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Premium Services
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <ListOption title="Flight Ticket Booking" sub="Global Connectivity" />
        <ListOption title="Private Jet Rentals" sub="Exclusive Luxury" />
        <ListOption title="Helicopter Rental" sub="Rapid Transit" />
        <ListOption title="Visa Services" sub="Hassle-free Travel" />
      </div>
    </div>
  </div>
);

// --- Slideshow Component ---
const SlideshowBackground = ({
  images,
  interval = 3000,
  fit = "cover"
}: {
  images: string[],
  interval?: number,
  fit?: "cover" | "contain"
}) => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Slideshow"
            fill
            className={`transition-transform duration-1000 ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

// 3. Network Content
const NetworkContent = () => {
  // Generate image arrays
  const tvImages = Array.from({ length: 47 }, (_, i) => `/TEMP${146 + i}.jpg`); // 146-192
  const animImages = Array.from({ length: 46 }, (_, i) => `/TEMP${100 + i}.jpg`); // 100-145

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* TV Serial Production Card */}
      <div className="relative group overflow-hidden rounded-xl h-72 md:h-96 cursor-pointer shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
        <SlideshowBackground images={tvImages} interval={4000} fit="cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

        {/* Content - Bottom Aligned */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col gap-2 mb-1">
              <div className="self-start p-2 bg-amber-500 rounded-lg text-white shadow-lg">
                <Tv className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white shadow-black drop-shadow-md leading-tight">TV Serial Production</h3>
            </div>
            <p className="text-slate-200 text-xs font-medium pl-0.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Creating Timeless Stories</p>
            <div className="h-1 w-12 group-hover:w-full bg-amber-500 rounded-full transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* Animation Studios Card */}
      <div className="relative group overflow-hidden rounded-xl h-72 md:h-96 cursor-pointer shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
        <SlideshowBackground images={animImages} interval={4000} fit="cover" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

        {/* Content - Bottom Aligned */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-col gap-2 mb-1">
              <div className="self-start p-2 bg-amber-500 rounded-lg text-white shadow-lg">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-white shadow-black drop-shadow-md leading-tight">Animation Studios</h3>
            </div>
            <p className="text-slate-200 text-xs font-medium pl-0.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">World-class Visual Effects & Animation</p>
            <div className="h-1 w-12 group-hover:w-full bg-amber-500 rounded-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

// 4. Infinity Life Content
const InfinityContent = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-4 mb-6 p-5 bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30">
      <div className="p-3 bg-amber-500 rounded-lg text-white shadow-lg shadow-amber-500/20">
        <Heart className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Infinity Life Organization</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Holistic Ecosystem for Modern Living</p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      <ListOption title="825 Jain Temple & Sthanak" sub="Religious" />
      <ListOption title="800 University" sub="Education" />
      <ListOption title="800 Hospital" sub="Medical" />
      <ListOption title="800 Commercial Malls" sub="Commercial" />
      <ListOption title="800 Social Halls" sub="Social" />
    </div>
  </div>
);

// 6. Save Free Campaign Content
const SaveFreeCampaignContent = () => {
  const [activeTab, setActiveTab] = useState<'SAVE' | 'FREE' | 'CAMPAIGN'>('CAMPAIGN');

  const tabs = [
    { id: 'SAVE', color: 'bg-emerald-600', hoverBg: 'hover:bg-emerald-50', activeBorder: 'border-emerald-500', icon: <Leaf className="w-3.5 h-3.5" /> },
    { id: 'FREE', color: 'bg-rose-600', hoverBg: 'hover:bg-rose-50', activeBorder: 'border-rose-500', icon: <Zap className="w-3.5 h-3.5" /> },
    { id: 'CAMPAIGN', color: 'bg-blue-600', hoverBg: 'hover:bg-blue-50', activeBorder: 'border-blue-500', icon: <Briefcase className="w-3.5 h-3.5" /> }
  ] as const;

  return (
    <div className="h-full flex flex-col">
      <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-lg mb-4 border border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-md transition-all duration-300 ${activeTab === tab.id
              ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white transform scale-100 ring-1 ring-black/5'
              : `text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transform scale-95 hover:bg-white/50 dark:hover:bg-slate-700/50`
              }`}
          >
            <span className={`p-0.5 rounded-full ${activeTab === tab.id ? tab.color + ' text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
              {tab.icon}
            </span>
            {tab.id}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'SAVE' && (
              <div className="grid grid-cols-2 gap-2.5">
                {['GIRLS', 'CHILD', 'ANIMAL', 'TREE', 'FUEL'].map(i => (
                  <div key={i} className="p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-lg text-center text-sm font-bold text-emerald-700 dark:text-emerald-300 shadow-sm hover:shadow-md transition-shadow cursor-default">{i}</div>
                ))}
              </div>
            )}
            {activeTab === 'FREE' && (
              <div className="grid grid-cols-2 gap-2.5">
                {['POLLUTION', 'CRIME', 'VIOLENCE', 'CORRUPTION', 'INJUSTICE'].map(i => (
                  <div key={i} className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-lg text-center text-sm font-bold text-rose-700 dark:text-rose-300 shadow-sm hover:shadow-md transition-shadow cursor-default">{i}</div>
                ))}
              </div>
            )}
            {activeTab === 'CAMPAIGN' && (
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/50">
                  <h5 className="font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2 text-xs uppercase tracking-wide">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Focus Areas
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {['EDUCATION', 'MEDICAL', 'SOCIAL', 'HOME PRODUCT'].map(i => (
                      <span key={i} className="px-2.5 py-0.5 bg-white dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full text-[10px] font-semibold text-blue-700 dark:text-blue-200 shadow-sm">{i}</span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <h6 className="font-bold text-slate-800 dark:text-slate-200 border-b-2 border-slate-100 dark:border-slate-800 pb-1.5 mb-2 text-xs uppercase tracking-wide">Digital Work</h6>
                    <ul className="space-y-2">
                      {['Content Writing', 'Graphic Design', 'Video Editing'].map(item => (
                        <li key={item} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-bold text-slate-800 dark:text-slate-200 border-b-2 border-slate-100 dark:border-slate-800 pb-1.5 mb-2 text-xs uppercase tracking-wide">Professional</h6>
                    <ul className="space-y-2">
                      {['Accountant', 'Legal Advisor', 'Data Entry'].map(item => (
                        <li key={item} className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          {item}
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
  );
};

// --- Modal Component ---
const GalleryModal = ({ selectedItem, onClose }: { selectedItem: BentoItem, onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${selectedItem.id}`}
        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Mobile Close Button - Floating over Image */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md shadow-lg border border-white/20 transition-all md:hidden"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full md:w-5/12 relative h-48 md:h-auto bg-slate-900">
          {selectedItem.id === 'network' ? (
            <SlideshowBackground
              images={Array.from({ length: 93 }, (_, i) => `/TEMP${100 + i}.jpg`)}
              interval={2000}
              fit="cover"
            />
          ) : selectedItem.image ? (
            <Image
              src={selectedItem.image}
              alt={selectedItem.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center text-white/20">
              {selectedItem.icon}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-black/80" />

          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-amber-400 border border-white/20 shadow-xl">
              {selectedItem.icon}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 leading-tight text-white">{selectedItem.title}</h2>
              <p className="text-amber-300/90 text-xs font-bold tracking-widest uppercase">{selectedItem.subtitle}</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-7/12 flex flex-col flex-1 min-h-0 md:h-full bg-white dark:bg-slate-950 relative">
          {/* Desktop Close Button - In Header */}
          <div className="hidden md:flex justify-end p-4 absolute top-0 right-0 z-20">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8 custom-scrollbar pt-12 md:pt-14">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 font-serif border-l-4 border-amber-500 pl-5 italic bg-amber-50/50 dark:bg-amber-900/10 py-3 rounded-r-lg">
                "{selectedItem.description}"
              </p>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
                {selectedItem.modalContent}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Bento Grid ---

const CustomBentoGallery = () => {
  const [selectedItem, setSelectedItem] = useState<BentoItem | null>(null);

  // Mapping images from uploaded files with Fallbacks
  const items: BentoItem[] = [
    {
      id: 'infrastructure',
      title: 'SEWAS Infrastructure',
      subtitle: 'Residential Excellence',
      description: 'Experience the pinnacle of architectural excellence. Our residential projects redefine luxury with sustainable community living and world-class amenities.',
      className: 'col-span-1 md:col-span-2 row-span-2',
      image: '/luxury-mumbai-apartment-building.jpg',
      icon: <Building2 className="w-7 h-7" />,
      modalContent: <ResidentialContent />
    },
    {
      id: 'airways',
      title: 'SEWAS Airways',
      subtitle: 'Global Aviation',
      description: 'Connecting the world with premium aviation services, from private jet charters to specialized crew training.',
      className: 'col-span-1 row-span-1',
      image: '/modern-architectural-design.png',
      icon: <Plane className="w-6 h-6" />,
      modalContent: <AirwaysContent />
    },
    {
      id: 'network',
      title: 'SEWAS Network',
      subtitle: 'Media & Arts',
      description: 'A hub for creativity, featuring state-of-the-art animation studios and television production houses.',
      className: 'col-span-1 row-span-1',
      image: '/temp60.png',
      icon: <Tv className="w-6 h-6" />,
      modalContent: <NetworkContent />
    },
    {
      id: 'universal',
      title: 'Universal Federation',
      subtitle: 'Global Community',
      description: 'Jainism multiple unique project organization Registration & World Wide Branches of Jainism SEWAS with SEWAS Universal Sangh.',
      className: 'col-span-1 md:col-span-2 row-span-1',
      image: '/community-living-spaces.jpg',
      icon: <Globe2 className="w-6 h-6" />,
      modalContent: (
        <div className="flex flex-col items-center justify-center py-10 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mb-4">
            <Globe2 className="w-10 h-10 text-amber-600 dark:text-amber-500" />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white">Uniting Communities Globally</h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm text-base leading-relaxed">
            A federation dedicated to unifying branches worldwide, fostering cooperation, and implementing unique global projects.
          </p>
        </div>
      )
    },
    {
      id: 'infinity',
      title: 'Infinity Life Org.',
      subtitle: 'Holistic Ecosystem',
      description: 'A comprehensive ecosystem encompassing religious, educational, medical, commercial, and social institutions.',
      className: 'col-span-1 md:col-span-2 row-span-1',
      image: '/green-sustainable-building.jpg',
      icon: <Heart className="w-6 h-6" />,
      modalContent: <InfinityContent />
    },
    {
      id: 'save-free',
      title: 'Save Free Campaign',
      subtitle: 'Social Impact',
      description: 'Empowering society through targeted campaigns focusing on environmental preservation, social justice, and employment opportunities.',
      className: 'col-span-1 md:col-span-1 row-span-1',
      image: '/green-sustainable-building.jpg',
      icon: <Leaf className="w-6 h-6" />,
      modalContent: <SaveFreeCampaignContent />
    },
    {
      id: 'peace',
      title: 'Peace Unity Forum',
      subtitle: 'Harmony',
      description: 'Fostering global peace and unity through dialogue and community engagement.',
      className: 'col-span-1 md:col-span-1 row-span-1',
      image: '/luxury-pune-residential-complex.jpg',
      icon: <Users className="w-6 h-6" />,
      modalContent: (
        <div className="flex flex-col items-center justify-center h-full py-8 space-y-3">
          <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
            <Users className="w-7 h-7 text-slate-400" />
          </div>
          <p className="text-base font-medium text-slate-500 dark:text-slate-400">Community initiatives coming soon.</p>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[url('/public/placeholder.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              The <span className="text-amber-600 dark:text-amber-500 italic relative">
                SEWAS
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-500/30 rounded-full" />
              </span> Ecosystem
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              Explore our diverse verticals, from luxury infrastructure to global social welfare initiatives, all united under one vision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px] gap-4 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
              onClick={() => setSelectedItem(item)}
              className={`
                ${item.className} 
                group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-500
                border border-white/20 dark:border-slate-800
              `}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-slate-800 z-0" />
                {item.id === 'network' ? (
                  <SlideshowBackground
                    images={Array.from({ length: 93 }, (_, i) => `/TEMP${100 + i}.jpg`)}
                    interval={2000}
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              {/* Gradient Overlay - Stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-500 mix-blend-overlay" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white z-10">
                <div className="self-end p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white/90 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-500 transform group-hover:rotate-6 shadow-lg">
                  {item.icon}
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold leading-tight mb-2 drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="h-1 w-6 group-hover:w-16 bg-amber-500 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <GalleryModal
              selectedItem={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomBentoGallery;