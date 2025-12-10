"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

// MediaItemType defines the structure of a media item
export interface MediaItemType {
    id: number;
    type: 'video' | 'image';
    title: string;
    desc: string;
    url: string;
    span: string; // Tailwind class for grid span (e.g., "col-span-2 row-span-2")
    icon?: React.ElementType; // Optional icon component
}

// MediaItem component renders either a video or image based on item.type
const MediaItem = ({ item, className, onClick }: { item: MediaItemType, className?: string, onClick?: () => void }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting);
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return;

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play();
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve;
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                // Autoplay usually blocked without user interaction
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden group`}>
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                        <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`${className} relative overflow-hidden group`}>
             <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onClick={onClick}
                loading="lazy"
                decoding="async"
            />
        </div>
       
    );
};

interface GalleryModalProps {
    selectedItem: MediaItemType;
    isOpen: boolean;
    onClose: () => void;
    onSelect: (item: MediaItemType) => void;
    mediaItems: MediaItemType[];
    setSelectedItem: (item: MediaItemType) => void;
}

const GalleryModal = ({ selectedItem, isOpen, onClose, onSelect, setSelectedItem, mediaItems }: GalleryModalProps) => {
    if (!isOpen) return null;

    const Icon = selectedItem.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-background rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
                {/* Media Section */}
                <div className="w-full md:w-2/3 h-64 md:h-auto bg-black relative">
                     <MediaItem item={selectedItem} className="w-full h-full" />
                     {/* Navigation overlay for mobile */}
                     <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 md:hidden">
                        {mediaItems.map((item) => (
                             <button
                                key={item.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedItem(item);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${selectedItem.id === item.id ? 'bg-white w-4' : 'bg-white/50'}`}
                             />
                        ))}
                     </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-between bg-card">
                    <div className="space-y-6">
                        <div className="flex items-start justify-between">
                             <div>
                                 <h2 className="text-2xl md:text-3xl font-bold font-serif gradient-text flex items-center gap-2">
                                    {Icon && <Icon className="w-6 h-6 text-orange-500" />}
                                    {selectedItem.title}
                                 </h2>
                                 <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-600 mt-2 rounded-full" />
                             </div>
                             <button
                                onClick={onClose}
                                className="p-2 hover:bg-muted rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                            {selectedItem.desc}
                        </p>
                        
                        <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-100 dark:border-amber-900/50">
                            <p className="text-sm font-medium text-amber-800 dark:text-amber-200 flex items-center gap-2">
                                <ArrowRight className="w-4 h-4" />
                                Click below to view services
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button 
                            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/20"
                            onClick={() => onSelect(selectedItem)}
                        >
                            Explore {selectedItem.title}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title: string
    description: string
    onCategorySelect: (category: string) => void
}

export const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({ 
    mediaItems, 
    title, 
    description,
    onCategorySelect 
}) => {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <div className="w-full">
            <AnimatePresence mode="wait">
                 {/* BENTO GRID LAYOUT */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layoutId={`media-${item.id}`}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer ${item.span} group shadow-md hover:shadow-xl transition-shadow duration-300 border border-white/20`}
                            onClick={() => !isDragging && setSelectedItem(item)}
                            variants={{
                                hidden: { y: 20, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 25,
                                        delay: index * 0.05
                                    }
                                }
                            }}
                            whileHover={{ scale: 1.02, zIndex: 10 }}
                            // Drag functionality retained as requested, though usually rare for navigation
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.1}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                        >
                            <MediaItem
                                item={item}
                                className="absolute inset-0 w-full h-full"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <motion.div
                                    initial={{ y: 10, opacity: 0.8 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        {item.icon && React.createElement(item.icon, { className: "w-5 h-5 text-orange-400" })}
                                        <h3 className="text-white text-lg md:text-xl font-bold font-serif tracking-wide shadow-black drop-shadow-md">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-white/80 text-xs md:text-sm line-clamp-2 font-medium">
                                        {item.desc}
                                    </p>
                                    
                                    <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 mt-3 transition-all duration-500" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* MODAL VIEW */}
            <AnimatePresence>
                {selectedItem && (
                    <GalleryModal
                        selectedItem={selectedItem}
                        isOpen={!!selectedItem}
                        onClose={() => setSelectedItem(null)}
                        onSelect={(item) => {
                            setSelectedItem(null);
                            onCategorySelect(item.title);
                        }}
                        setSelectedItem={setSelectedItem}
                        mediaItems={mediaItems}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};