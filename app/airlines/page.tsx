"use client"

import { PremiumHeader } from "@/components/premium-header"
import { AirwaysContent } from "@/components/airways-content"
import { LuxuryFooter } from "@/components/luxury-footer"

export default function AirlinesPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-amber-100 selection:text-amber-900">
            <div className="fixed top-0 w-full z-50">
                <PremiumHeader />
            </div>

            <main className="pt-24 pb-20">
                <AirwaysContent />
            </main>

            <div className="relative z-10">
                <LuxuryFooter />
            </div>
        </div>
    )
}
