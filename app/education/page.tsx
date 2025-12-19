import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EducationServiceContent } from "@/components/education-service-content"

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navbar is in RootLayout, but if the previous styling required it here, we might need to check. 
          Actually, RootLayout has Navbar. But looking at religious page, I removed it. 
          Wait, the first file religious/page.tsx had Navbar imports removed in step 1265.
          So, I should NOT include Navbar/Footer here if they are in layout.
          Let's double check layout.tsx.
          Yes, layout.tsx has Header and Footer.
          So I just need to render the content.
      */}
            <div className="pt-24 pb-16">
                <EducationServiceContent />
            </div>
        </div>
    )
}
