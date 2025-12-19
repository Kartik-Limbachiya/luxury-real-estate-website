"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface ServiceTemplateProps {
    title: string
    subtitle: string
    description: string
    features: string[]
    colorTheme: "amber" | "blue" | "green" | "purple" | "red" | "orange"
    heroImage?: string // Optional for now
}

export function ServiceTemplate({
    title,
    subtitle,
    description,
    features,
    colorTheme,
}: ServiceTemplateProps) {

    const colorClasses = {
        amber: "from-amber-50 to-orange-50 text-amber-900 border-amber-200 bg-amber-100",
        blue: "from-blue-50 to-indigo-50 text-blue-900 border-blue-200 bg-blue-100",
        green: "from-green-50 to-emerald-50 text-green-900 border-green-200 bg-green-100",
        purple: "from-purple-50 to-violet-50 text-purple-900 border-purple-200 bg-purple-100",
        red: "from-red-50 to-rose-50 text-red-900 border-red-200 bg-red-100",
        orange: "from-orange-50 to-amber-50 text-orange-900 border-orange-200 bg-orange-100",
    }

    const theme = colorClasses[colorTheme]

    return (
        <div className="min-h-screen bg-white">
            {/* Header / Hero */}
            <div className={`py-20 px-4 md:px-8 bg-gradient-to-br ${theme.split(" ").slice(0, 2).join(" ")}`}>
                <div className="max-w-4xl mx-auto">
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 hover:bg-white/50 -ml-4">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Button>
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{title}</h1>
                    <p className="text-xl md:text-2xl font-medium opacity-80 mb-6">{subtitle}</p>
                    <p className="text-lg leading-relaxed max-w-2xl">{description}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Key Features</h2>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <Card key={index} className="border-l-4 border-l-current border-r-0 border-t-0 border-b-0 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-4 flex items-start gap-3">
                                        <CheckCircle2 className={`h-6 w-6 shrink-0 ${theme.split(" ")[2]}`} />
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center border border-dashed border-gray-300">
                        <div className="text-center text-gray-400">
                            <p className="mb-2">Image Placeholder</p>
                            <p className="text-sm">Put a relevant {title} image here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
