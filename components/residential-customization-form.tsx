"use client"

import React, { useState } from 'react'
import { Filter, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const EMI_OPTIONS = ["60 months", "120 months", "240 months"];
const FACILITIES_OPTIONS = [
    "Fully Furnished",
    "Electronics Included",
    "Utensils Provided",
    "6-Month Ration",
    "Solar System",
    "Insurance Coverage",
];

export function ResidentialCustomizationForm() {
    const [emiSelection, setEmiSelection] = useState<string>("");
    const [facilitiesSelection, setFacilitiesSelection] = useState<string[]>([]);

    const handleFacilityChange = (option: string, checked: boolean) => {
        if (checked) {
            setFacilitiesSelection(prev => [...prev, option]);
        } else {
            setFacilitiesSelection(prev => prev.filter(item => item !== option));
        }
    };

    return (
        <div className="w-full bg-white border-t border-slate-100 py-12">
            <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-amber-600 font-bold tracking-wider uppercase text-sm">Customize Your Plan</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">Tailor Your Dream Home</h3>
                </div>

                <Card className="p-8 shadow-xl border-slate-200 bg-white">
                    <div className="space-y-8">
                        {/* EMI Options */}
                        <div className="space-y-3">
                            <h5 className="font-bold text-slate-900 text-lg">EMI Options</h5>
                            <Select
                                value={emiSelection}
                                onValueChange={setEmiSelection}
                            >
                                <SelectTrigger className="w-full md:w-1/3">
                                    <SelectValue placeholder="Choose EMI Options" />
                                </SelectTrigger>
                                <SelectContent>
                                    {EMI_OPTIONS.map((option) => (
                                        <SelectItem key={option} value={option}>
                                            {option}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Facilities */}
                        <div className="space-y-3">
                            <h5 className="font-bold text-slate-900 text-lg">Facilities</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {FACILITIES_OPTIONS.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`facility-${option}`}
                                            checked={facilitiesSelection.includes(option)}
                                            onCheckedChange={(checked) => handleFacilityChange(option, checked as boolean)}
                                        />
                                        <label
                                            htmlFor={`facility-${option}`}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-700 hover:text-amber-600 transition-colors"
                                        >
                                            {option}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Selection Summary */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-3">
                            <h6 className="font-bold text-sm flex items-center gap-2 text-slate-900 uppercase tracking-wide">
                                <Filter className="h-4 w-4 text-amber-500" />
                                Your Residential Selection
                            </h6>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="text-sm">
                                    <span className="font-bold text-slate-700 block mb-1">EMI Plan:</span>
                                    <span className="text-slate-600 bg-white px-2 py-1 rounded border border-slate-200 inline-block">
                                        {emiSelection || "Not selected"}
                                    </span>
                                </div>
                                <div className="text-sm">
                                    <span className="font-bold text-slate-700 block mb-1">Selected Facilities:</span>
                                    <span className="text-slate-600">
                                        {facilitiesSelection.length > 0
                                            ? facilitiesSelection.join(", ")
                                            : "None selected"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-slate-100">
                            <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                                Find Residential Services
                            </Button>
                            <Button variant="outline" className="h-12 px-8 border-slate-300 hover:bg-slate-50 hover:text-slate-900 font-medium">
                                Back to Categories
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
