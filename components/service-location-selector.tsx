"use client"

import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Share2, Printer, RotateCcw } from "lucide-react"
import { states, getDistrictsForState, StateName } from "@/lib/location-data"

export function ServiceLocationSelector() {
    const [selectedState, setSelectedState] = useState<StateName | "">("")
    const [selectedCity, setSelectedCity] = useState<string>("")

    const cities = selectedState ? getDistrictsForState(selectedState as StateName) : []

    const handleReset = () => {
        setSelectedState("")
        setSelectedCity("")
    }

    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-bold text-amber-600 font-serif mb-4">Service Categories</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                    Select your location from 800 cities across 29 states and 7 union territories. Explore our comprehensive services across Religious, Residential, Commercial, Education, Medical, and Social categories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Step 1: Select State */}
                <div className="border border-amber-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-amber-700 font-bold mb-4 flex items-center gap-2">
                        Step 1: Select State
                    </h3>
                    <Select value={selectedState} onValueChange={(value) => { setSelectedState(value as StateName); setSelectedCity("") }}>
                        <SelectTrigger className="w-full border-slate-200 text-slate-600">
                            <SelectValue placeholder="Choose State" />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            {states.map(state => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Step 2: Select City */}
                <div className="border border-amber-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-amber-700 font-bold mb-4 flex items-center gap-2">
                        Step 2: Select City
                    </h3>
                    <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
                        <SelectTrigger className="w-full border-slate-200 text-slate-600">
                            <SelectValue placeholder={selectedState ? "Choose City" : "Select State First"} />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                            {cities.map(city => (
                                <SelectItem key={city} value={city}>{city}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50 gap-2">
                    <Share2 className="w-4 h-4" /> Share Selection
                </Button>
                <Button variant="outline" className="border-amber-200 text-amber-700 hover:bg-amber-50 gap-2">
                    <Printer className="w-4 h-4" /> Print
                </Button>
                <Button variant="outline" onClick={handleReset} className="border-amber-200 text-amber-700 hover:bg-amber-50 gap-2">
                    <RotateCcw className="w-4 h-4" /> Reset All
                </Button>
            </div>
        </div>
    )
}
