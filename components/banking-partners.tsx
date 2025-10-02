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
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9MW8JIxEO1Rhanw8IjGjH0dxnT3m_aSs3Q&s", alt: "SBI Bank" },
                    { src: "https://static.vecteezy.com/system/resources/previews/020/336/362/non_2x/hdfc-logo-hdfc-icon-free-free-vector.jpg", alt: "HDFC Bank" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdyvJLUwKTJh9aUXnW4uIksBaMjQF0hzyYg&s", alt: "ICICI Bank" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnRURYSGEeFVNZfFDO6hCVp21PYzUOIpIHA&s", alt: "Axis Bank" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H04-ddyPX9LLh5TyQjmZIR7H4uKjD0KRtw&s", alt: "Kotak Bank" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwQNR8ZKZL83cz1ko82uXNwNQntCgKukIyg&s", alt: "IDFC First Bank" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPQ5fMxJtJCQJcqr4MADTpacd6PaFiuHHaQ&s", alt: "PNB" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeweIf6g-R8PLiGSKnh-ajtH2gin_6ZrUJxg&s", alt: "Bank of Baroda" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOyb2II2EsR0OLYbVQV-klSbT-JjaSD8GzA&s", alt: "Bajaj Finserv" },
                    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYL5_M_z-oTfrJlknP8AyXXyssPTC085R8Q&s", alt: "Tata Capital" },
                  ]
                    .concat([
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF9MW8JIxEO1Rhanw8IjGjH0dxnT3m_aSs3Q&s", alt: "SBI Bank" },
                      { src: "https://static.vecteezy.com/system/resources/previews/020/336/362/non_2x/hdfc-logo-hdfc-icon-free-free-vector.jpg", alt: "HDFC Bank" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdyvJLUwKTJh9aUXnW4uIksBaMjQF0hzyYg&s", alt: "ICICI Bank" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnRURYSGEeFVNZfFDO6hCVp21PYzUOIpIHA&s", alt: "Axis Bank" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H04-ddyPX9LLh5TyQjmZIR7H4uKjD0KRtw&s", alt: "Kotak Bank" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwQNR8ZKZL83cz1ko82uXNwNQntCgKukIyg&s", alt: "IDFC First Bank" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPQ5fMxJtJCQJcqr4MADTpacd6PaFiuHHaQ&s", alt: "PNB" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeweIf6g-R8PLiGSKnh-ajtH2gin_6ZrUJxg&s", alt: "Bank of Baroda" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOyb2II2EsR0OLYbVQV-klSbT-JjaSD8GzA&s", alt: "Bajaj Finserv" },
                      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmYL5_M_z-oTfrJlknP8AyXXyssPTC085R8Q&s", alt: "Tata Capital" },
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

