"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Users, MapPin, Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function EmploymentSection() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    skills: "",
    jobType: "",
    experience: "",
    location: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Employment inquiry submitted:", formData)
    // Handle form submission
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50/40">
      <div className="w-full px-4 md:px-6 lg:px-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-800 text-center">
              {language === "en" ? "Employment Opportunities" : "रोजगार के अवसर"}
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto border border-amber-200">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-amber-700 leading-relaxed mb-3 md:mb-4">
              {language === "en"
                ? "Want a home in 800 SEWAS City but don't have a job? Tell us your skills and we will try to provide you employment."
                : "800 SEWAS City में घर चाहिए पर नौकरी नहीं है? अपनी स्किल्स बताइए, हम रोजगार देने का प्रयास करेंगे।"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Employment Benefits */}
          <Card className="border-amber-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-700 flex items-center gap-2">
                <Star className="h-5 w-5" />
                Employment Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Users className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-800">Skill-based Matching</p>
                    <p className="text-xs text-amber-700">Jobs based on your expertise</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-semibold text-orange-800">Local Opportunities</p>
                    <p className="text-xs text-orange-700">Work near your home</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Briefcase className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-800">Multiple Industries</p>
                    <p className="text-xs text-amber-700">Various job sectors</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Star className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-amber-800">Career Growth</p>
                    <p className="text-xs text-amber-700">Advancement opportunities</p>
                  </div>
                </div>
              </div>

              {/* Employment Categories */}
              <div className="mt-6">
                <h4 className="font-bold text-amber-900 mb-3">Available Opportunities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { cat: "Digital Work", jobs: ["Content Writing", "Editing & Proofreading", "Graphic Design", "Video Editing", "Social Media Management"] },
                    { cat: "E-commerce", jobs: ["Online Selling", "Marketplace Management", "Product Photography"] },
                    { cat: "Teaching", jobs: ["Online Teaching", "Tuition Classes", "Language Training"] },
                    { cat: "Professional", jobs: ["Accountant", "Data Entry", "Tally Operator", "Legal Advisor"] },
                    { cat: "Creative", jobs: ["Art Classes", "Painting", "Music Teaching", "Dance Classes"] },
                    { cat: "Services", jobs: ["Marriage Bureau", "Event Management", "Tours & Travel"] },
                    { cat: "Training", jobs: ["Computer Training", "Tailoring", "Handicrafts", "Skilled Trades"] },
                    { cat: "Spiritual", jobs: ["Sanskrit Teaching", "Jyotish Classes", "Vastu Consulting"] },
                  ].map((category, idx) => (
                    <div key={idx} className="bg-white border border-amber-200 rounded-lg p-3">
                      <p className="font-bold text-sm text-amber-900 mb-2">{category.cat}:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.jobs.map((job, jdx) => (
                          <span key={jdx} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employment Form */}
          <Card className="border-amber-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-700">{language === "en" ? "Submit Your Skills" : "अपनी स्किल्स भेजें"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="border-amber-200 focus:border-amber-400"
                  />
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>

                <Input
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-amber-200 focus:border-amber-400"
                />

                <Textarea
                  placeholder="Describe your skills and experience"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  className="border-amber-200 focus:border-amber-400 min-h-20"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select value={formData.jobType} onValueChange={(value) => handleInputChange("jobType", value)}>
                    <SelectTrigger className="border-amber-200 focus:border-amber-400">
                      <SelectValue placeholder="Preferred Job Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full Time</SelectItem>
                      <SelectItem value="part-time">Part Time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="border-amber-200 focus:border-amber-400">
                      <SelectValue placeholder="Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fresher">Fresher</SelectItem>
                      <SelectItem value="1-3">1-3 Years</SelectItem>
                      <SelectItem value="3-5">3-5 Years</SelectItem>
                      <SelectItem value="5+">5+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Input
                  placeholder="Preferred Work Location"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="border-amber-200 focus:border-amber-400"
                />

                <Button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
                  Submit Employment Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
