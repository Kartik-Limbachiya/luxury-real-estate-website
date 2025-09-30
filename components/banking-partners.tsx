"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building } from "lucide-react"

export function BankingPartnersSection() {
  return (
    <section className="py-12">
      <div className="w-full px-6 md:px-10">
        <Card className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-amber-200 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/30" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-200/40 to-orange-200/20 rounded-full blur-3xl" />
          <CardHeader className="relative z-10">
            <CardTitle className="text-center text-2xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Building className="w-6 h-6 text-amber-600" />
              70 Banks + 40 Finance Companies
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden py-4">
                <div className="bank-marquee-track">
                  {[
                    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/State_Bank_of_India_logo.svg", alt: "SBI" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/HDFC_Bank_Logo.svg", alt: "HDFC Bank" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/1/10/ICICI_Bank_Logo.svg", alt: "ICICI Bank" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Axis_Bank_logo.svg", alt: "Axis Bank" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kotak_Mahindra_Bank_logo.svg", alt: "Kotak" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/IDFC_FIRST_Bank_logo.svg", alt: "IDFC First" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/PNB_Logo.svg", alt: "PNB" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bank_of_Baroda_logo.svg", alt: "Bank of Baroda" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Bajaj_Finserv_logo.svg", alt: "Bajaj Finserv" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tata_Capital_Logo.svg", alt: "Tata Capital" },
                  ]
                    .concat([
                      { src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/State_Bank_of_India_logo.svg", alt: "SBI" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/HDFC_Bank_Logo.svg", alt: "HDFC Bank" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/1/10/ICICI_Bank_Logo.svg", alt: "ICICI Bank" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Axis_Bank_logo.svg", alt: "Axis Bank" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Kotak_Mahindra_Bank_logo.svg", alt: "Kotak" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/IDFC_FIRST_Bank_logo.svg", alt: "IDFC First" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/PNB_Logo.svg", alt: "PNB" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bank_of_Baroda_logo.svg", alt: "Bank of Baroda" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Bajaj_Finserv_logo.svg", alt: "Bajaj Finserv" },
                      { src: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tata_Capital_Logo.svg", alt: "Tata Capital" },
                    ])
                    .map((p, idx) => (
                      <div key={idx} className="flex items-center justify-center px-3">
                        <img src={p.src} alt={p.alt} className="h-9 md:h-12 w-auto object-contain" />
                      </div>
                    ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes bankMarqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .bank-marquee-track { display: flex; gap: 2.5rem; width: max-content; animation: bankMarqueeScroll 28s linear infinite; }
              `}</style>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default BankingPartnersSection

