"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, CreditCard, ShoppingCart, FileText } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WarningSection() {
  const { language } = useLanguage()
  const warnings = [
    {
      icon: Home,
      title: "Immediate Eviction Policy",
      description: "गैरवर्तूंक, गैरकानूनी कार्यप्रवृत्ति करनेवाले को घर तुरंत खाली करवा देंगे",
      translation: "Immediate home eviction for non-compliant or illegal activities",
      color: "bg-red-50 border-red-200 text-red-800",
    },
    {
      icon: CreditCard,
      title: "Bank EMI Policy",
      description: "बैंक के तीन किस्त से ज्यादा किस्त न भरने पर घर तुरंत खाली करवा देंगे",
      translation: "Immediate eviction for bank installments exceeding three months",
      color: "bg-orange-50 border-orange-200 text-orange-800",
    },
    {
      icon: ShoppingCart,
      title: "No Selling Policy",
      description: "घर की सभी चीज आप बेच नहीं सकते",
      translation: "Cannot sell any household items during loan period",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
    },
    {
      icon: FileText,
      title: "Name Transfer Policy",
      description: "100% रकम बैंक में जमा होने के बाद ही आपके नाम ट्रांसफर होगा",
      translation: "Name transfer only after 100% amount deposited in bank",
      color: "bg-red-50 border-red-200 text-red-800",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="w-full px-6 md:px-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-red-700">
              {language === "en" ? "Important Policies" : "महत्वपूर्ण नीतियाँ"}
            </h2>
          </div>
          <p className="text-red-600 font-medium">
            {language === "en" ? "Please read the following policies carefully" : "कृपया निम्नलिखित नीतियों को ध्यान से पढ़ें"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {warnings.map((warning, index) => (
            <Card key={index} className={`${warning.color} border-2 shadow-lg hover:shadow-xl transition-shadow`}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <warning.icon className="h-6 w-6" />
                  <CardTitle className="text-sm font-bold">{warning.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <p className="text-sm font-semibold leading-relaxed">{warning.description}</p>
                  <p className="text-xs opacity-80 italic">{warning.translation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-red-800 font-semibold text-sm">
              {language === "en"
                ? "⚠️ These policies are strictly enforced for the safety and security of all residents"
                : "⚠️ सभी निवासियों की सुरक्षा और हित के लिए ये नीतियाँ सख्ती से लागू की जाती हैं"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
