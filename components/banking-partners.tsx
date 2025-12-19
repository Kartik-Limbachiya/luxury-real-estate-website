"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building } from 'lucide-react'

// Bank logo data provided by user
const BANK_LOGOS = [
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
];

export function BankingPartners() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 border-amber-200 mb-12 shadow-xl w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 to-orange-100/30"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-200/40 to-orange-200/20 rounded-full blur-3xl"></div>

      <CardHeader className="relative z-10 pb-0">
        <CardTitle className="text-center text-2xl bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent flex items-center justify-center gap-2 font-serif">
          <Building className="w-6 h-6 text-amber-600" />
          Banking Partners
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pt-4">
        <div className="text-center space-y-4">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
            70 Banks + 40 Finance Companies
          </div>
          <p className="text-lg text-amber-800 font-medium">Private, National, International partnerships</p>

          {/* Partner marquee */}
          <div className="mt-8 rounded-xl border border-amber-200 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="relative py-6">
              <div className="bank-marquee-track">
                {/* Triple duplication for smooth infinite scroll */}
                {[...BANK_LOGOS, ...BANK_LOGOS, ...BANK_LOGOS].map((bank, idx) => (
                  <div key={idx} className="flex items-center justify-center px-4 md:px-8 opacity-100 min-w-[120px] md:min-w-[160px]">
                    <img
                      src={bank.src}
                      alt={bank.alt}
                      className="h-10 md:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            <style jsx>{`
              @keyframes bankMarqueeScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
              }
              .bank-marquee-track {
                display: flex;
                width: max-content;
                animation: bankMarqueeScroll 40s linear infinite;
                will-change: transform;
              }
              .bank-marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
