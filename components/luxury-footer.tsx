"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function LuxuryFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Universal Sangh", href: "/universal-sangh" },
      { name: "Jain Shasan Prabhavna", href: "/jain-shasan-prabhavna" },
      { name: "Jaino Jago", href: "/jaino-jago" },
      { name: "Happy Peace Unity", href: "/happy-peace-unity" },
      { name: "Save Free Campaign", href: "/save-free-campaign" },
    ],
    facilities: [
      { name: "Jain Airlines", href: "/airlines" },
      { name: "TV Channel", href: "/tv-channel" },
      { name: "Animal Hospital", href: "/animal-hospital" },
      { name: "Jain University", href: "/education" },
      { name: "Jain Hospital", href: "/medical" },
    ],
    realEstate: [
      { name: "SEWAS Nagri (Residential)", href: "/residential" },
      { name: "Commercial Mall", href: "/commercial" },
      { name: "Jain Temple", href: "/religious" },
      { name: "Social Hall", href: "/social" },
      { name: "Awards", href: "/awards" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Mission & Vision", href: "/mission" },
      { name: "Ecosystem Highlights", href: "/sewas-ecosystem-highlights" },
      { name: "Contact Us", href: "/contact-us" },
    ]
  };

  return (
    <footer className="relative bg-[#0f172a] text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white/10 rounded-xl p-2 border border-white/10 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <Image src="/sewas-logo.png" alt="SEWAS" width={48} height={48} className="object-contain w-full h-full" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-white tracking-wide">SEWAS Nagri</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">Universal Federation</div>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed text-sm pr-4">
              A revolutionary ecosystem uniting 800 cities, 29 states, and 7 union territories under the banner of "The Jainism of Universe". Providing complete housing and life facilities with 0% down payment.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Headquarters: Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>+91 9930609108</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>contact@800sewas.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              Services
              <span className="h-px flex-1 bg-slate-800"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-400 transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              Facilities
              <span className="h-px flex-1 bg-slate-800"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.facilities.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-400 transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              Real Estate
              <span className="h-px flex-1 bg-slate-800"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.realEstate.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-400 transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-6 flex items-center gap-2">
              Company
              <span className="h-px flex-1 bg-slate-800"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-amber-400 transition-all duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} SEWAS Universal Federation. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 group">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LuxuryFooter
