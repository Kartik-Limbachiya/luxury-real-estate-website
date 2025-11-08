"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, CreditCard, ShoppingCart, FileText, ShieldAlert, Users } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WarningSection() {
  const { language } = useLanguage()
  const warnings = [
    {
      icon: ShieldAlert,
      title: "SAVADHAN ! FRAUD WARNING",
      description: "⚠️ SEWAS ने किसी एजेंट को नहीं नियुक्त किया है. केवल सीधा बैंक लेनदेन करें",
      translation: "⚠️ SEWAS has NOT appointed any agents. Do direct bank transactions ONLY",
      color: "bg-red-100 border-red-600 text-red-900",
      isMainWarning: true,
    },
    {
      icon: Users,
      title: "Female-Only Property Registration",
      description: "संपत्ति केवल महिलाओं के नाम पर पंजीकृत होगी (माता/पत्नी/बहन/बेटी)",
      translation: "Property registered ONLY in female names (Mother/Wife/Sister/Daughter)",
      color: "bg-pink-50 border-pink-300 text-pink-900",
      isMainWarning: false,
    },
    {
      icon: Home,
      title: "Immediate Eviction Policy",
      description: "गैरवर्तूंक, गैरकानूनी कार्यप्रवृत्ति करनेवाले को घर तुरंत खाली करवा देंगे",
      translation: "Immediate home eviction for non-compliant or illegal activities",
      color: "bg-red-50 border-red-200 text-red-800",
      isMainWarning: false,
    },
    {
      icon: CreditCard,
      title: "Bank EMI Policy",
      description: "बैंक के तीन किस्त से ज्यादा किस्त न भरने पर घर तुरंत खाली करवा देंगे",
      translation: "Immediate eviction for bank installments exceeding three months",
      color: "bg-orange-50 border-orange-200 text-orange-800",
      isMainWarning: false,
    },
    {
      icon: ShoppingCart,
      title: "No Selling Policy",
      description: "घर की सभी चीज आप बेच नहीं सकते",
      translation: "Cannot sell any household items during loan period",
      color: "bg-yellow-50 border-yellow-200 text-yellow-800",
      isMainWarning: false,
    },
    {
      icon: FileText,
      title: "Name Transfer Policy",
      description: "100% रकम बैंक में जमा होने के बाद ही आपके नाम ट्रांसफर होगा",
      translation: "Name transfer only after 100% amount deposited in bank",
      color: "bg-red-50 border-red-200 text-red-800",
      isMainWarning: false,
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="w-full px-6 md:px-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertTriangle className="h-10 w-10 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-red-700">
              {language === "en" ? "Important Policies" : "महत्वपूर्ण नीतियाँ"}
            </h2>
          </div>
          <p className="text-red-600 font-semibold text-base md:text-lg">
            {language === "en" ? "Please read the following policies carefully" : "कृपया निम्नलिखित नीतियों को ध्यान से पढ़ें"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {warnings.map((warning, index) => (
            <Card 
              key={index} 
              className={`${warning.color} border-3 shadow-lg hover:shadow-xl transition-all ${
                warning.isMainWarning ? 'md:col-span-2 lg:col-span-3 border-4 border-red-600' : 'border-2'
              }`}
            >
              <CardHeader className={warning.isMainWarning ? "pb-4" : "pb-3"}>
                <div className="flex items-center gap-3">
                  <warning.icon className={warning.isMainWarning ? "h-10 w-10 text-red-600" : "h-6 w-6"} />
                  <CardTitle className={warning.isMainWarning 
                    ? "text-xl md:text-2xl lg:text-3xl font-black text-red-600 uppercase" 
                    : "text-base md:text-lg font-bold"
                  }>
                    {warning.isMainWarning ? (
                      <span className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block">
                        {warning.title}
                      </span>
                    ) : (
                      warning.title
                    )}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className={warning.isMainWarning ? "pt-0 pb-6" : "pt-0"}>
                <div className="space-y-4">
                  <p className={warning.isMainWarning 
                    ? "text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-red-900" 
                    : "text-base md:text-lg lg:text-xl font-bold leading-relaxed"
                  }>
                    {warning.description}
                  </p>
                  <p className={warning.isMainWarning 
                    ? "text-lg md:text-xl lg:text-2xl font-semibold italic text-red-800" 
                    : "text-sm md:text-base lg:text-lg font-medium italic"
                  }>
                    {warning.translation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-red-200 border-2 border-red-600 rounded-lg p-6 max-w-4xl mx-auto shadow-xl">
            <p className="text-red-900 font-bold text-base md:text-lg lg:text-xl">
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