"use client"

import { Users, Globe, Building2, Heart } from "lucide-react"

export function StatisticsSection() {
    const stats = [
        {
            value: "5",
            label: "YEARS LEGACY OF QUALITY & TRUST",
            subText: null
        },
        {
            value: "#1",
            label: "GLOBAL SUSTAINABLE DEVELOPER",
            subText: null
        },
        {
            value: "800+",
            label: "LIVE+ PROJECTS ACROSS INDIA",
            subText: null
        },
        {
            value: "80 Lakhs+",
            label: "SERVING HAPPY SEWAS FAMILIES",
            subText: null
        }
    ]

    return (
        <section className="bg-[#B8860B] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                {stat.value}
                            </h3>
                            <div className="bg-[#AB7F0A] w-full py-2 px-4 rounded-full shadow-inner">
                                <p className="text-xs md:text-sm font-bold tracking-wider text-black/80 uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-[#C69214] p-8 rounded-2xl flex items-center gap-6 shadow-md border border-[#EAC964]/30">
                        <div className="bg-[#FF6B00] p-4 rounded-xl shrink-0">
                            <Users className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-black mb-1">8 to 80 Lakhs SEWAS Families</h4>
                            <p className="text-base font-bold text-black mb-4">Across 29 States & 7 Union Territories</p>
                            <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed">
                                Building communities that bring families together with quality infrastructure and sustainable living solutions.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#C69214] p-8 rounded-2xl flex items-center gap-6 shadow-md border border-[#EAC964]/30">
                        <div className="bg-[#FF6B00] p-4 rounded-xl shrink-0">
                            <Building2 className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-black mb-1">Pan-India Reach</h4>
                            <p className="text-base font-bold text-black mb-4">800 Cities Connected</p>
                            <p className="text-xs md:text-sm text-black/80 font-medium leading-relaxed">
                                Expanding our community network to serve Jain families with religious, residential, and social infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
