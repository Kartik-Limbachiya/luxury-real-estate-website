"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Building2,
  Home,
  Store,
  GraduationCap,
  Heart,
  Users,
  Filter,
  Shield,
  TrendingUp,
  Award,
  Building,
  Sparkles,
  Zap,
  DollarSign,
  Cross,
  ShoppingBag,
  Truck,
} from "lucide-react"
import type { LocationSelection } from "@/components/location-filter"

interface CategorySelectorProps {
  locationSelection: LocationSelection
  onCategoryChange?: (category: string, subcategory: string, options: any) => void
}

export type ServiceCategory = "Religious" | "Residential" | "Commercial" | "Education" | "Medical" | "Social"

const categoryIcons = {
  Religious: Building2,
  Residential: Home,
  Commercial: Store,
  Education: GraduationCap,
  Medical: Heart,
  Social: Users,
}

const religiousFeatureImages = {
  "SEWAS Jain Temple":
    "https://www.nfttworld.com/wp-content/uploads/2024/04/Rajasthan-Jain-Tirth-Tour-in-India-820x565.jpg",
  "SEWAS Jain Upashray": "https://knsarchitects.com/wp-content/uploads/2023/12/Jain-Upashray.jpg",
  "SEWAS Jain Sthanak":
    "https://content3.jdmagicbox.com/v2/comp/delhi/v3/011pxx11.xx11.220309193440.y7v3/catalogue/jain-sthanak-rishabh-vihar-karkardooma-delhi-jain-temples-t2l1ommbkq.jpg",
  "84 Gacch and 4 Sampradaya support":
    "https://www.pewresearch.org/wp-content/uploads/2021/08/FT_21.08.17_Jains_featured.jpg?w=640",
}

const sectImages = {
  Shwetambar:
    "https://jaipurthrumylens.com/wp-content/uploads/2023/02/jinalaya-shwetamber-jain-temple-jaipur-mohanbari-arihant-vatika.jpg",
  Digambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHoI52UV9ZOP6cPcWj7nhPzvllqdjV-Yg7Xw&s",
  Sthanakvasi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtOTqRT-M_DnhcGhjsRxr6aAChGls2h2Mqg&s",
  Terapanth: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9P-F85Hqt2NMxc2KbrH2LuDYokgIXWIWtw&s",
}

const categoryData = {
  Religious: {
    description: "84 गच्छ एवं 4 संप्रदाय के जैन आलय उपाश्रय स्थानक",
    features: [
      { icon: Building2, text: "SEWAS Jain Temple" },
      { icon: Home, text: "SEWAS Jain Upashray" },
      { icon: Building2, text: "SEWAS Jain Sthanak" },
      { icon: Users, text: "84 Gacch and 4 Sampradaya support" },
    ],
    subcategories: {
      "Religious Facility": {
        type: "select",
        options: ["Jain Temple", "Jain Upashray", "Jain Sthanak", "Prayer Hall"],
      },
      "Sect Preference": {
        type: "select",
        options: ["Shwetambar", "Digambar", "Sthanakvasi", "Terapanth"],
      },
    },
  },
  Residential: {
    description: "Complete housing solutions with all facilities included",
    features: [
      { icon: Home, text: "2 BHK: 540 sq ft Super Built-up Area" },
      { icon: Home, text: "3 BHK: 720 sq ft Super Built-up Area" },
      { icon: Zap, text: "100% Solar System - No Electricity Bills" },
      { icon: DollarSign, text: "0% Down Payment, 100% Bank Loan" },
      { icon: TrendingUp, text: "60/120/240 Monthly EMI Options" },
      { icon: Shield, text: "20-Year Rental Guarantee" },
      { icon: Home, text: "Fully Furnished with Electronics & Utensils" },
      { icon: Shield, text: "Family Insurance ₹10 Lakh to ₹1 Crore" },
      { icon: ShoppingBag, text: "6-Month Ration Supply Included" },
    ],
    buildingStructure: {
      "Per Floor": "32 Homes",
      "Per Building": "8 Floors = 256 Homes",
      "Per Complex": "4 Buildings = 1,024 Homes",
    },
    subcategories: {
      "Property Type": {
        type: "select",
        options: ["2BHK (540 sqft)", "3BHK (720 sqft)"],
      },
      "EMI Options": {
        type: "select",
        options: ["₹60/month", "₹120/month", "₹240/month"],
      },
      Facilities: {
        type: "checkbox",
        options: [
          "Fully Furnished",
          "Electronics Included",
          "Utensils Provided",
          "6-Month Ration",
          "Solar System",
          "Insurance Coverage",
        ],
      },
    },
  },
  Commercial: {
    description: "Business and commercial spaces with Swadeshi focus",
    features: [
      { icon: ShoppingBag, text: "SEWAS Jain Mall with Swadeshi Items" },
      { icon: DollarSign, text: "50% Discount on Swadeshi Products" },
      { icon: Building, text: "Business Centers & Office Spaces" },
      { icon: Truck, text: "Transportation to Local Markets" },
    ],
    subcategories: {
      "Commercial Space": {
        type: "select",
        options: ["SEWAS Jain Mall", "Business Center", "Office Space", "Showroom"],
      },
      "Special Offers": {
        type: "checkbox",
        options: ["50% Discount on Swadeshi Items", "Made in India Products", "Local Market Access"],
      },
    },
  },
  Education: {
    description: "Educational institutions and services with international partnerships",
    features: [
      { icon: GraduationCap, text: "180 International University Tie-ups & Branches" },
      { icon: Award, text: "Paperless Admission Process" },
      { icon: Home, text: "Hostel Facilities Available" },
      { icon: DollarSign, text: "Scholarship Programs" },
      { icon: ShoppingBag, text: "6-Month Ration with Documentation" },
    ],
    subcategories: {
      "University Partnerships": {
        type: "select",
        options: ["International University Programs", "Domestic University", "Skill Development Center"],
      },
      "Special Benefits": {
        type: "checkbox",
        options: ["180 International Tie-ups", "Paperless Admission", "Scholarship Available", "Hostel Facility"],
      },
    },
  },
  Medical: {
    description: "Comprehensive healthcare with traditional and modern treatments",
    features: [
      { icon: Cross, text: "SEWAS Jain Hospital" },
      { icon: Heart, text: "SEWAS Jain Animal Hospital" },
      { icon: Cross, text: "Ayurvedic, Homeopathic, Allopathic treatments" },
      { icon: Heart, text: "Panchakarma and Yoga facilities" },
      { icon: DollarSign, text: "All treatments at minimum rates" },
    ],
    subcategories: {
      "Treatment Type": {
        type: "checkbox",
        options: ["Ayurvedic", "Homeopathic", "Allopathic", "Panchakarma", "Yoga"],
      },
      "Facility Type": {
        type: "select",
        options: ["Human Hospital", "Animal Hospital", "Both"],
      },
    },
  },
  Social: {
    description: "Community spaces for social, religious and national events",
    features: [
      { icon: Building, text: "SEWAS Jain Social Hall" },
      { icon: Award, text: "Event Management Services" },
      { icon: Users, text: "Community Gathering Spaces" },
      { icon: Sparkles, text: "Social, Religious & National Events" },
    ],
    subcategories: {
      "Facility Type": {
        type: "select",
        options: ["Social Hall", "Community Center", "Event Space"],
      },
      "Event Types": {
        type: "checkbox",
        options: ["Social Events", "Religious Ceremonies", "National Celebrations", "Community Gatherings"],
      },
    },
  },
}

const FinancialBenefits = () => (
  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 mb-8">
    <h3 className="text-2xl font-bold text-green-800 mb-6 text-center flex items-center justify-center gap-2">
      <TrendingUp className="h-6 w-6" />
      Financial Benefits
    </h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { icon: Shield, title: "0% Down Payment", color: "text-green-600" },
        { icon: TrendingUp, title: "100% Bank Loan", color: "text-blue-600" },
        { icon: Award, title: "20 Year Guarantee", color: "text-orange-600" },
        { icon: Building, title: "70+40 Banks", color: "text-purple-600" },
      ].map((benefit, index) => (
        <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <benefit.icon className={`h-8 w-8 ${benefit.color} mb-2`} />
          <div className="font-bold text-gray-800">{benefit.title}</div>
        </div>
      ))}
    </div>
  </div>
)

const BankingPartners = () => (
  <Card className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200 mb-8 shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/30"></div>
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"></div>

    <CardHeader className="relative z-10">
      <CardTitle className="text-center text-2xl bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
        <Building className="w-6 h-6 text-blue-600" />
        Banking Partners
      </CardTitle>
    </CardHeader>
    <CardContent className="relative z-10">
      <div className="text-center space-y-4">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
          70 Banks + 40 Finance Companies
        </div>
        <p className="text-lg text-blue-700 font-medium">Private, National, International partnerships</p>
        <p className="text-blue-600 bg-white/60 backdrop-blur-sm rounded-lg p-3 inline-block">
          All providing loans to Jain community members
        </p>
      </div>
    </CardContent>
  </Card>
)

const TimelineSection = () => (
  <Card className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 border-orange-200 mb-8 shadow-xl">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/30"></div>
    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-amber-300/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-red-200/40 to-orange-300/30 rounded-full blur-2xl"></div>

    <CardContent className="relative z-10 p-8 text-center">
      <div className="mb-6">
        <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-3">
          <Sparkles className="w-3 h-3 mr-1" />
          Project Timeline
        </Badge>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-700 to-red-600 bg-clip-text text-transparent">
          Development Schedule
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-orange-600 mb-2">Dec 31, 2025</div>
          <div className="text-orange-700 font-medium">Online Booking Deadline</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-red-600 mb-2">24-30 Months</div>
          <div className="text-red-700 font-medium">Completion per City</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <div className="text-2xl font-bold text-orange-600 mb-2">Dec 31, 2030</div>
          <div className="text-orange-700 font-medium">Full Project Completion</div>
        </div>
      </div>

      <p className="text-orange-700 mt-6 bg-white/60 backdrop-blur-sm rounded-lg p-4 font-medium">
        Complete life facilities from birth to death • Book directly where you want to live
      </p>
    </CardContent>
  </Card>
)

const ImageSlideshow = ({
  images,
  interval = 3000,
  fit = "contain",
}: {
  images: string[]
  interval?: number
  fit?: "contain" | "cover"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (!images.length) return null

  return (
    <div className={`relative w-full ${fit === "cover" ? "" : "h-full bg-muted flex items-center justify-center"}`}>
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`Slide ${currentIndex + 1}`}
        className={
          fit === "cover"
            ? "w-full h-auto object-cover transition-opacity duration-500"
            : "max-w-full max-h-full object-contain transition-opacity duration-500"
        }
      />
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const residentialImages = {
  "2BHK": [
    "https://housing-images.n7net.in/01c16c28/5683ce77646100c035fc7c78d5f8ad06/v0/large/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
    "https://housing-images.n7net.in/01c16c28/bc8a937763a2054153bb30f7b5df45be/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/e81cd2be0923317173f92c0b834f4453/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/536c6d1fb9e9ffce3f4bf486c7beb0f0/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_bathroom_with_bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/cee1f5b5776e5583667b09e99bc2efc1/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_balcony_with_bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/340be56e973534f2d8706bdb262378ca/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
    "https://housing-images.n7net.in/01c16c28/68e77c1b179b46a1bd3f20c9d88abf1c/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
    "https://housing-images.n7net.in/01c16c28/2521e1b6ddcbaffae6b9389273cbccc1/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_bathroom_with_bedroom_two.jpg",
    "https://housing-images.n7net.in/01c16c28/08bfb91cea2ac277071b0860a42e4974/v0/fs/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-kitchen.jpg",
    "https://housing-images.n7net.in/01c16c28/4535b098d691d0d1186e5d5497d38a5b/v0/fs-large/2_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
  ],
  "3BHK": [
    "https://housing-images.n7net.in/01c16c28/b7e830109ca85d61ccad499c2947c897/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
    "https://housing-images.n7net.in/01c16c28/846a8a292e453d79e2871f84f1cc8259/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/c807d41fc9a5f64806e25c5552aee372/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/6df004b2e8bf11f8ab0bbfd11da0c5e7/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-attached_balcony_with_bedroom_one.jpg",
    "https://housing-images.n7net.in/01c16c28/70baa534e3f472c7ee27e544cfd6942d/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
    "https://housing-images.n7net.in/01c16c28/834f873a8d68afb533e645df2416be8f/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_two.jpg",
    "https://housing-images.n7net.in/01c16c28/82b7b5bcffd535658d6bb0d56daa0539/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_three.jpg",
    "https://housing-images.n7net.in/01c16c28/c7a75a575de1bfa58881d26ad98832a9/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-bedroom_three.jpg",
    "https://housing-images.n7net.in/01c16c28/d4ad152d7620a682317b4c5c40cd1b71/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-kitchen.jpg",
    "https://housing-images.n7net.in/01c16c28/7cb01196fd8c19b45fe6cffae5a58ba0/v0/fs/3_bhk_apartment-for-sale-razapur_khurd-New+Delhi-living_room.jpg",
  ],
}

const residentialFeatureImages = {
  "100% Solar System - No Electricity Bills":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSzP5ldU6BzgQgNZYmoWOIqOmImIma4g6LQ&s",
  "0% Down Payment, 100% Bank Loan":
    "https://www.grihashakti.com/images/articals/Is-it-possible-to-get-a-Home-Loan-Without-Downpayment-in-india.jpg",
  "60/120/240 Monthly EMI Options":
    "https://www.kotak.com/content/dam/Kotak/Product-Card-Images-Mobile/how-hl-emi-works-card.jpg",
  "20-Year Rental Guarantee":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98o--zRakKzo1pJll17GCP2MgPrzzhJiLLw&s",
  "Fully Furnished with Electronics & Utensils": "https://sharedeasy.club/wp-content/uploads/furnished-apartment.jpg",
  "Family Insurance ₹10 Lakh to ₹1 Crore":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiwdSfoIF1UfYWzJ6wLelwDVYVkEnLOzQKw&s",
  "6-Month Ration Supply Included":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBfeHE3JU5IPnfpQ8xVKof7NpdVnOcKxbVw&s",
}

const commercialImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaQnoAGbqHYt99d5xmI0QB7DTqhdXn4ahWA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKpxbfDBiqgaU92rQ-dImZkCIlwFbCZQgPQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsLxLCTfc0QraSfagIaA8apj4hh5aPQxbnwQ&s",
  "https://media.gettyimages.com/id/578071420/photo/india-mumbai-lower-parel-high-street-phoenix-mall-inside-interior-palladium-shopping.jpg?s=612x612&w=gi&k=20&c=VtAKrdHG2PhtXsnoNbMttCiMYlztFZEVZtwFY9CRk5w=",
  "https://5.imimg.com/data5/JN/TI/MY-6480170/showroom-interior-designing.jpg",
]

const commercialFeatureImages = {
  "SEWAS Jain Mall with Swadeshi Items":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bFDiH3SD7f31Pu-dkiEQe7JFMQHE89yrnA&s",
  "50% Discount on Swadeshi Products":
    "https://www.shutterstock.com/image-vector/15th-august-independence-day-big-260nw-1787370251.jpg",
}

const educationFeatureImages = {
  "180 International University Tie-ups & Branches": "https://spsu.ac.in//wp-content/uploads/2022/08/international.jpg",
  "Hostel Facilities Available": "https://3.imimg.com/data3/KI/ET/MY-11537384/hostel-facility-500x500.png",
  "6-Month Ration with Documentation":
    "https://img.freepik.com/free-photo/top-view-food-donation-box_23-2149182037.jpg?semt=ais_incoming&w=740&q=80",
  "Paperless Admission Process":
    "https://knowledge-hub.com/wp-content/uploads/2021/08/Digitalizing-the-admission-process.jpg",
  "Scholarship Programs":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrUvN6Pf1_lkavqm1elIIeEc0bE1VHNizbQ&s",
  "International University Programs":
    "https://www.chitkara.edu.in/blogs/wp-content/uploads/2024/06/Global-Programs-at-Chitkara.png",
  "Domestic University Programs":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsKC43I5M4CgbZJoa5aP2HWmeMZaLaPPyUg&s",
  "Skill Development Centre": "https://www.sathyabama.ac.in/sites/default/files/inline-images/IMG_9719.jpg",
}

const medicalFeatureImages = {
  "SEWAS Jain Hospital": "https://ilshospitals.com/wp-content/uploads/2023/10/ILSDumdum-Building512.webp",
  "Ayurvedic, Homeopathic, Allopathic treatments":
    "https://image.slidesharecdn.com/allopathyvshomeopathyvsayurveda-161024174714/75/Allopathy-vs-homeopathy-vs-ayurveda-1-2048.jpg",
  "All treatments at minimum rates":
    "https://media.istockphoto.com/id/1367679452/photo/reduce-cost.jpg?s=612x612&w=0&k=20&c=M2TLcerMiT8S8jWhgaQcJuk5fOO1xwF8VK4izLy9yzc=",
  "SEWAS Jain Animal Hospital":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KQYf_Rm89JkvcIc8L7PSjmXXybnmiY4KaA&s",
  "Panchakarma and Yoga facilities":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4neOhpIm8gfCuPBrjvWk5tEpbkUpbutinFg&s",
}

const socialFeatureImages = {
  "SEWAS Jain Social Hall":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNyrQ0KofecU3KDFehrzqTVBmjkRD8-Y1tQ&s",
  "Community Gathering Spaces":
    "https://images.squarespace-cdn.com/content/v1/61d89c9fe365be2bd16d70a0/abeb3399-8ef4-4a1d-a989-7819eb14b19c/charlotte-downtown_1400.jpg",
  "Event Management Services":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbupJ3KJp8LCDUWid1TWnp7bDQcvX1R4iOQ&s",
  "Social, Religious & National Events":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToItN1BLt83qOOiVwxCKA_aSNpfjHYvythxvJFpVKS6sbvh-aNajWFPUhhTptjdw2qXJE&usqp=CAU",
  "Social Hall": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNyrQ0KofecU3KDFehrzqTVBmjkRD8-Y1tQ&s",
  "Community Center": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6Ya2IJkEQWUdon87IPdwEQxwk91L7aSHNg&s",
  "Event Space":
    "https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/1721127305865-H0ZWH3ZSIJEI2Z70CF3G/20210915-110858-OVATION-02944%2B%281%29.jpg",
}

const categoryImages = {
  Religious: "https://www.easemytrip.com/travel/img/khajuraho.jpg",
  Residential: "https://i.ibb.co/gb7qfYFL/Screenshot-2025-09-16-121548.png",
  Commercial: "https://kmhp.in/wp-content/uploads/2020/05/Commercial-Building.jpg",
  Education: "https://images.shiksha.com/mediadata/images/1539689597phpsD5n8S_g.jpg",
  Medical:
    "https://media.istockphoto.com/id/181553727/photo/outpatient-surgery-center.jpg?s=612x612&w=0&k=20&c=TSOFoFo6VWkBLtmvTgcsngxYmn3I677ilQxhoAbzfnE=",
  Social: "https://sewas800.city/image/services/social.png",
}

export function CategorySelector({ locationSelection, onCategoryChange }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [categorySelections, setCategorySelections] = useState<Record<string, any>>({})
  const [hoveredCard, setHoveredCard] = useState<ServiceCategory | null>(null)

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category)
    setCategorySelections({})
  }

  const handleSubcategoryChange = (subcategory: string, value: any) => {
    const newSelections = {
      ...categorySelections,
      [subcategory]: value,
    }
    setCategorySelections(newSelections)

    if (onCategoryChange && selectedCategory) {
      onCategoryChange(selectedCategory, subcategory, newSelections)
    }
  }

  const handleCheckboxChange = (subcategory: string, option: string, checked: boolean) => {
    const currentValues = categorySelections[subcategory] || []
    const newValues = checked ? [...currentValues, option] : currentValues.filter((v: string) => v !== option)

    handleSubcategoryChange(subcategory, newValues)
  }

  const isLocationSelected = locationSelection.state && locationSelection.city

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-200/30 to-orange-300/20 rounded-full blur-2xl"></div>

        <Badge className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-300 relative z-10">
          <Sparkles className="w-3 h-3 mr-1" />
          Premium Services
        </Badge>

        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative z-10">
          Choose Your Service
        </h3>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative z-10">
          {isLocationSelected
            ? `Select a category to explore premium services in ${locationSelection.city}, ${locationSelection.state}`
            : "Please select your location first to view available services"}
        </p>
      </div>

      {isLocationSelected && <FinancialBenefits />}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {(Object.keys(categoryData) as ServiceCategory[]).map((category, index) => {
          const Icon = categoryIcons[category]
          const isSelected = selectedCategory === category
          const isDisabled = !isLocationSelected
          const isHovered = hoveredCard === category

          const gradients = {
            Religious: "from-orange-500 to-amber-600",
            Residential: "from-blue-500 to-indigo-600",
            Commercial: "from-green-500 to-emerald-600",
            Education: "from-purple-500 to-violet-600",
            Medical: "from-red-500 to-pink-600",
            Social: "from-teal-500 to-cyan-600",
          }

          return (
            <div
              key={category}
              className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer ${
                isSelected ? "ring-2 ring-amber-400 shadow-2xl scale-105" : ""
              } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${
                isHovered ? "scale-105 shadow-2xl" : "hover:scale-102"
              }`}
              onClick={() => !isDisabled && handleCategorySelect(category)}
              onMouseEnter={() => setHoveredCard(category)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden bg-white">
                <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center">
                  <img
                    src={categoryImages[category] || "/placeholder.svg"}
                    alt={category}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none" />
                {/* Category Icon in top-right */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category}</h3>
                <p className="text-gray-600 text-sm mb-4">{categoryData[category].description}</p>

                {/* Features with Icons */}
                <div className="grid grid-cols-2 gap-2">
                  {categoryData[category].features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <feature.icon className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="truncate">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {isSelected && (
                  <Badge className="mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Selected
                  </Badge>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Category Details */}
      {selectedCategory && isLocationSelected && (
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {(() => {
                const Icon = categoryIcons[selectedCategory]
                return <Icon className="h-5 w-5" />
              })()}
              {selectedCategory} Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {selectedCategory === "Religious" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-orange-800">Key Religious Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryData.Religious.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted flex items-center justify-center">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={
                                religiousFeatureImages[feature.text as keyof typeof religiousFeatureImages] ||
                                "/placeholder.svg"
                              }
                              alt={feature.text}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2">
                            <feature.icon className="h-5 w-5 text-orange-600" />
                            <span className="font-medium text-gray-800">{feature.text}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {categorySelections["Sect Preference"] && (
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                    <h6 className="font-bold text-lg mb-4 text-purple-800">
                      Selected Sect: {categorySelections["Sect Preference"]}
                    </h6>
                    <div className="flex justify-center">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md">
                        <div className="h-64 overflow-hidden">
                          <img
                            src={
                              sectImages[categorySelections["Sect Preference"] as keyof typeof sectImages] ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt={categorySelections["Sect Preference"]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold text-lg text-black">
                            {categorySelections["Sect Preference"]} Temple
                          </h3>
                          <p className="text-gray-600 text-sm">Traditional architecture and spiritual practices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedCategory === "Residential" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-blue-800">Residential Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(residentialFeatureImages).map(([feature, image]) => (
                      <div
                        key={feature}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={feature}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="font-medium text-black text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {categorySelections["Property Type"] && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                    <h6 className="font-bold text-lg mb-4 text-green-800">
                      Selected: {categorySelections["Property Type"]}
                    </h6>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="bg-muted">
                        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
                          <ImageSlideshow
                            images={
                              categorySelections["Property Type"]?.includes("2BHK")
                                ? residentialImages["2BHK"]
                                : residentialImages["3BHK"]
                            }
                          />
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg text-black">{categorySelections["Property Type"]} Layout</h3>
                        <p className="text-gray-600 text-sm">
                          {categorySelections["Property Type"]?.includes("2BHK")
                            ? "540 sq ft Super Built-up Area"
                            : "720 sq ft Super Built-up Area"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedCategory === "Commercial" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-green-800">Commercial Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(commercialFeatureImages).map(([feature, image]) => (
                      <div
                        key={feature}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={feature}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="font-medium text-black">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-purple-800">Business Centers & Office Spaces:</h6>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <ImageSlideshow images={commercialImages} fit="cover" />
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg text-black">Premium Commercial Spaces</h3>
                      <p className="text-gray-600 text-sm">
                        Modern office spaces and business centers with all amenities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedCategory === "Education" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-purple-800">Educational Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(educationFeatureImages).map(([feature, image]) => (
                      <div
                        key={feature}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={feature}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="font-medium text-black text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedCategory === "Medical" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-red-800">Medical Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(medicalFeatureImages).map(([feature, image]) => (
                      <div
                        key={feature}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={feature}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="font-medium text-black text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedCategory === "Social" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h6 className="font-bold text-lg mb-4 text-teal-800">Social Features:</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(socialFeatureImages).map(([feature, image]) => (
                      <div
                        key={feature}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-muted">
                          <div className="w-full aspect-[16/9] flex items-center justify-center">
                            <img
                              src={image || "/placeholder.svg"}
                              alt={feature}
                              className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="p-4">
                          <span className="font-medium text-black text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {Object.entries(categoryData[selectedCategory].subcategories).map(([subcategory, config]) => (
              <div key={subcategory} className="space-y-3">
                <h5 className="font-medium text-sm text-black">{subcategory}</h5>

                {config.type === "select" && (
                  <Select
                    value={categorySelections[subcategory] || ""}
                    onValueChange={(value) => handleSubcategoryChange(subcategory, value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`Choose ${subcategory}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {config.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {config.type === "checkbox" && (
                  <div className="grid grid-cols-2 gap-3">
                    {config.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${subcategory}-${option}`}
                          checked={(categorySelections[subcategory] || []).includes(option)}
                          onCheckedChange={(checked) => handleCheckboxChange(subcategory, option, checked as boolean)}
                        />
                        <label
                          htmlFor={`${subcategory}-${option}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-black"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Selection Summary */}
            {Object.keys(categorySelections).length > 0 && (
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <h6 className="font-medium text-sm flex items-center gap-2 text-black">
                  <Filter className="h-4 w-4" />
                  Your {selectedCategory} Selection
                </h6>
                {Object.entries(categorySelections).map(([key, value]) => (
                  <div key={key} className="text-sm text-black">
                    <span className="font-medium">{key}:</span>{" "}
                    {Array.isArray(value)
                      ? value.length > 0
                        ? value.join(", ")
                        : "None selected"
                      : value || "Not selected"}
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1">Find {selectedCategory} Services</Button>
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                Back to Categories
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Banking Partners and Timeline sections */}
      {isLocationSelected && (
        <>
          <BankingPartners />
          <TimelineSection />
        </>
      )}

      {/* Help Text */}
      {!isLocationSelected && (
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Select your state and city above to explore available services in your area. Our services are tailored
              specifically for Jain communities across India.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
