"use client"

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Clock, Calendar } from 'lucide-react'

export function DevelopmentSchedule() {
    return (
        <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 border-orange-200 mb-12 shadow-xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/30"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-amber-300/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-red-200/40 to-orange-300/30 rounded-full blur-2xl"></div>

            <CardContent className="relative z-10 p-8 md:p-12 text-center">
                <div className="mb-8">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-4 px-4 py-1 text-sm">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Project Timeline
                    </Badge>
                    <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent font-serif">
                        Development Schedule
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className="text-3xl font-bold text-red-600 mb-2 font-serif group-hover:scale-105 transition-transform">Mar 31, 2026</div>
                        <div className="flex items-center justify-center gap-2 text-red-800 font-bold uppercase text-sm tracking-wider mb-2">
                            <Clock className="w-4 h-4" />
                            Online Booking Deadline
                        </div>
                        <div className="text-red-500 text-xs font-semibold">Last Date to Book</div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className="text-3xl font-bold text-orange-600 mb-2 font-serif group-hover:scale-105 transition-transform">24-30 Months</div>
                        <div className="flex items-center justify-center gap-2 text-orange-800 font-bold uppercase text-sm tracking-wider">
                            <Calendar className="w-4 h-4" />
                            Completion per City
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                        <div className="text-3xl font-bold text-orange-600 mb-2 font-serif group-hover:scale-105 transition-transform">Dec 31, 2030</div>
                        <div className="flex items-center justify-center gap-2 text-orange-800 font-bold uppercase text-sm tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            Full Project Completion
                        </div>
                    </div>
                </div>

                <p className="text-orange-800 mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-4 font-semibold text-sm md:text-base border border-orange-100/50 inline-block">
                    Complete life facilities from birth to death • Book directly where you want to live
                </p>
            </CardContent>
        </Card>
    )
}
