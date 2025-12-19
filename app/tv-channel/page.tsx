import { TvChannelContent } from "@/components/tv-channel-content"
import { PremiumHeader } from "@/components/premium-header"
import { LuxuryFooter } from "@/components/luxury-footer"

export default function TvChannelPage() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <PremiumHeader />
            <div className="pt-24 pb-12">
                <TvChannelContent />
            </div>
            <LuxuryFooter />
        </main>
    )
}
