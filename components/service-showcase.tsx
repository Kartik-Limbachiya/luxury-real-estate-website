"use client"

import { motion } from "framer-motion"
import { Building, GraduationCap, Heart, Home, Users, Wallet } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
    {
        id: "religious",
        title: "Religious",
        icon: Home,
        color: "bg-amber-100 text-amber-600",
        description: "84 Gacch and 4 Sampradaya support",
        features: [
            "SEWAS Jain Temple (Jinalay)",
            "SEWAS Jain Upashray",
            "SEWAS Jain Sthanak",
            "Community Spiritual Centers"
        ]
    },
    {
        id: "residential",
        title: "Residential",
        icon: Building,
        color: "bg-blue-100 text-blue-600",
        description: "Complete housing solutions with all facilities included",
        features: [
            "2 BHK: 540 sq ft Super Built-up Area",
            "3 BHK: 720 sq ft Super Built-up Area",
            "100% Solar System - No Electricity Bills",
            "0% Down Payment, 100% Bank Loan"
        ]
    },
    {
        id: "commercial",
        title: "Commercial",
        icon: Wallet,
        color: "bg-green-100 text-green-600",
        description: "Business and commercial spaces with Swadeshi focus",
        features: [
            "SEWAS Jain Mall with Swadeshi Items",
            "50% Discount on Swadeshi Products",
            "Business Centers & Office Spaces",
            "Transportation to Local Markets"
        ]
    },
    {
        id: "education",
        title: "Education",
        icon: GraduationCap,
        color: "bg-purple-100 text-purple-600",
        description: "Educational institutions and services with international partnerships",
        features: [
            "180 International University Tie-ups & Branches",
            "Paperless Admission Process",
            "Hostel Facilities Available",
            "Scholarship Programs"
        ]
    },
    {
        id: "medical",
        title: "Medical",
        icon: Heart,
        color: "bg-red-100 text-red-600",
        description: "Comprehensive healthcare with traditional and modern treatments",
        features: [
            "SEWAS Jain Hospital",
            "SEWAS Jain Animal Hospital",
            "Ayurvedic, Homeopathic, Allopathic",
            "Panchakarma and Yoga facilities"
        ]
    },
    {
        id: "social",
        title: "Social",
        icon: Users,
        color: "bg-orange-100 text-orange-600",
        description: "Community spaces for social, religious and national events",
        features: [
            "SEWAS Jain Social Hall",
            "Event Management Services",
            "Community Gathering Spaces",
            "Social, Religious & National Events"
        ]
    }
]

export function ServiceShowcase() {
    return (
        <section className="py-20 bg-gray-50" id="services-showcase">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-amber-600 border-amber-600">Our Ecosystem</Badge>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the diverse pillars of SEWAS Nagri, designed to uplift every aspect of community life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden group">
                                <CardHeader className={`${service.color} p-6`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <service.icon className="h-8 w-8" />
                                        <span className="text-4xl font-black opacity-10 font-serif">{index + 1}</span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 bg-white">
                                    <p className="text-gray-600 mb-6 font-medium">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-700 bg-gray-50 p-2 rounded-md group-hover:bg-amber-50 transition-colors">
                                                <span className="mr-2 text-amber-500 font-bold">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
