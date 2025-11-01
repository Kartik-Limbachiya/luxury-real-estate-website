"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function LuxuryFooter() {
  const navigationSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about-us" },
        { name: "Contact Us", href: "#contact-us" },
        { name: "Visions", href: "#visions" },
        { name: "Mission", href: "#mission" },
        { name: "Project", href: "#project" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Religious", href: "#religious" },
        { name: "TV Channel", href: "#tv-channel" },
        { name: "Award", href: "#award" },
        { name: "Jain Tirth", href: "#jain-tirth" },
        { name: "Sangh", href: "#sangh" },
        { name: "Organizations", href: "#organizations" },
        { name: "Jago Jaino Jago", href: "#jago-jaino-jago" },
        { name: "Residential", href: "#residential" },
        { name: "Commercial", href: "#commercial" },
        { name: "Educational", href: "#educational" },
        { name: "Medical", href: "#medical" },
        { name: "Social", href: "#social" },
        { name: "General", href: "#general" },
      ]
    },
    {
      title: "Gallery",
      links: [
        { name: "Photo", href: "#gallery-photo" },
        { name: "Video", href: "#gallery-video" },
      ]
    }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/40 to-background border-t">
      <div className="absolute inset-0 pointer-events-none premium-shadow" />
      <div className="w-full px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-3">
              <Image src="/sewas-logo.png" alt="SEWAS" width={48} height={48} className="rounded" />
              <div>
                <div className="font-black text-xl gradient-text">SEWAS Nagri</div>
                <div className="font-medium text-xs text-gray-600">A Project by SEWAS Universal Federation</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              THE JAINISM OF UNIVERSE — Complete housing and life facilities for Jain communities across India.
            </p>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-md bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 border border-amber-200">
                Trusted Developer
              </span>
              <span className="inline-flex items-center rounded-md bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 border border-emerald-200">
                Sustainable Living
              </span>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9930609108</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@800sewas.com</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-3">Follow</h5>
              <div className="flex items-center gap-3">
                <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted">
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} SEWAS Universal Federation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LuxuryFooter

