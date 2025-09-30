import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function LuxuryFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-muted/40 to-background border-t">
      <div className="absolute inset-0 pointer-events-none premium-shadow" />
      <div className="w-full px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <Image src="/sewas-logo.png" alt="SEWAS" width={48} height={48} className="rounded" />
              <span className="font-black text-xl gradient-text">800 SEWAS City</span>
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

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#home" className="hover:text-primary">Home</Link></li>
              <li><Link href="#vision" className="hover:text-primary">Vision</Link></li>
              <li><Link href="#mission" className="hover:text-primary">Mission</Link></li>
              <li><Link href="#about-us" className="hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-XXXXXXXXXX</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@800sewas.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
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

        <div className="mt-10 pt-6 border-t text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} 800 SEWAS Infrastructure Private Limited. All rights reserved.</p>
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

