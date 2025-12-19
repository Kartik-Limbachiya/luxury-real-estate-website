import { NewAboutSection } from "@/components/new-sections"
import { FederationDetailsSection } from "@/components/federation-details-section"

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <NewAboutSection />
            <FederationDetailsSection />
        </main>
    )
}
