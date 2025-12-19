"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { UserAccountDropdown } from "@/components/auth/user-account-dropdown"
import { useAuth } from "@/lib/context/auth-context"
import { useEffect, useState } from "react"
import { Menu, X, ChevronDown, Users, Mail, Eye, Heart, Building, Settings, Camera, Video } from "lucide-react"
import { useRouter } from "next/navigation"

export function PremiumHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { language, toggle } = useLanguage()
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navigationItems = [
    { name: "About Us", href: "/about-us", icon: Users },
    { name: "Mission", href: "/mission", icon: Heart },
    { name: "Vision", href: "/vision", icon: Eye },
    {
      name: "Project",
      icon: Building,
      submenu: [
        { name: "SEWAS Ecosystem highlights", href: "/sewas-ecosystem-highlights" },
        { name: "SEWAS JAIN NAGRI", href: "/residential" },
        { name: "SEWAS JAIN AWARDS", href: "/awards" },
        { name: "SEWAS UNIVERSAL SANGH", href: "/universal-sangh" },
        { name: "SEWAS JAIN AIRLINES", href: "/airlines" },
        { name: "SEWAS JAIN TV CHANNEL", href: "/tv-channel" },
        { name: "SEWAS JAIN TEMPLE", href: "/religious" },
        { name: "SEWAS JAIN UNIVERSITY", href: "/education" },
        { name: "SEWAS JAIN HOSPITAL", href: "/medical" },
        { name: "SEWAS JAIN COMMERCIAL MALL", href: "/commercial" },
        { name: "SEWAS JAIN SOCIAL HALL", href: "/social" },
        { name: "SEWAS ANIMAL HOSPITAL", href: "/animal-hospital" },
        { name: "SEWAS JAIN SHASAN PRABHAVNA", href: "/jain-shasan-prabhavna" },
        { name: "SEWAS JAINO JAGO", href: "/jaino-jago" },
        { name: "SEWAS HAPPY PEACE UNITY", href: "/happy-peace-unity" },
        { name: "SEWAS SAVE FREE CAMPING", href: "/save-free-campaign" },
      ]
    },
    { name: "Contact Us", href: "/contact-us", icon: Mail },
  ]

  const handleNavClick = (href: string, isSubmenu = false) => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)

    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition " +
        (scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-black/5 shadow-sm"
          : "bg-transparent")
      }
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <div className="h-14 md:h-20 flex items-center justify-between">
          <Link href="#" className="inline-flex items-center gap-2 md:gap-3">
            <span className="inline-flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-md bg-white/90 shadow premium-shadow">
              <Image src="/sewas-logo.png" alt="SEWAS Logo" width={32} height={32} className="h-6 w-6 md:h-8 md:w-8" />
            </span>
            <div className="flex flex-col">
              <span className="font-black tracking-tight text-xs md:text-sm lg:text-base gradient-text">
                SEWAS Nagri
              </span>
              <span className="font-medium tracking-tight text-[10px] md:text-xs lg:text-sm text-gray-600">
                A Project by SEWAS Universal Federation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      className="flex items-center gap-1 hover:text-primary transition"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-72 max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition"
                            onClick={() => handleNavClick(subItem.href, true)}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    className="flex items-center gap-1 hover:text-primary transition"
                    onClick={() => handleNavClick(item.href)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex text-xs md:text-sm min-w-[60px] justify-center"
              onClick={toggle}
              title="Toggle language"
            >
              {language === "en" ? "A / अ" : "अ / A"}
            </Button>

            {/* User Account Dropdown */}
            {user ? (
              <UserAccountDropdown />
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild size="sm" className="premium-hover">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 mobile-dropdown">
            <div className="px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        className="w-full text-left px-3 py-2 text-sm font-medium flex items-center justify-between hover:bg-gray-50 rounded"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.name}
                              className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary rounded"
                              onClick={() => handleNavClick(subItem.href, true)}
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className="w-full text-left px-3 py-2 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 rounded"
                      onClick={() => handleNavClick(item.href)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default PremiumHeader

