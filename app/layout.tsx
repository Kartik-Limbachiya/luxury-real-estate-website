import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { AuthProvider } from "@/lib/context/auth-context"
import { ToastProvider } from "@/components/providers/toast-provider"
import PremiumHeader from "@/components/premium-header"
import LuxuryFooter from "@/components/luxury-footer"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SEWAS Nagri - A Project by SEWAS Universal Federation | THE JAINISM OF UNIVERSE",
  description:
    "SEWAS Nagri - 800 SEWAS Nagri • 29 States • 7 Union Territories. A Project by SEWAS Universal Federation. THE JAINISM OF UNIVERSE - Complete housing solutions for Jain communities with 0% down payment and 100% bank loan.",
  generator: "v0.app",
  keywords: [
    "SEWAS Nagri",
    "SEWAS Universal Federation",
    "800 SEWAS Cities",
    "Jain Community Housing",
    "800 Cities India",
    "0% Down Payment",
    "THE JAINISM OF UNIVERSE",
    "180 International University Tie-ups",
    "Swadeshi Products 50% Discount",
    "Jain Housing Project",
  ],
  authors: [{ name: "SEWAS Universal Federation" }],
  openGraph: {
    title: "SEWAS Nagri - A Project by SEWAS Universal Federation",
    description: "800 Cities • 29 States • 7 Union Territories serving Jain communities with complete life facilities",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" className={`${playfairDisplay.variable} ${sourceSans.variable} w-full min-h-screen bg-background overflow-x-hidden`}>
      <body className="font-sans antialiased w-full min-h-screen bg-background overflow-x-hidden">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <AuthProvider>
              <PremiumHeader />
              <div className="pt-16 md:pt-20 w-full max-w-none">
                <Suspense fallback={null}>{children}</Suspense>
              </div>
              <LuxuryFooter />
            </AuthProvider>
          </ThemeProvider>
        </LanguageProvider>
        <ToastProvider />
        <Analytics />
      </body>
    </html>
  )
}
