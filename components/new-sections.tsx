"use client"

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useRef } from "react";
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Eye, 
  Heart, 
  Building, 
  Church, 
  Tv, 
  Award, 
  Mountain, 
  Users2, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  HandHeart, 
  Settings,
  Camera,
  Video,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import { ExpandableServiceCard } from "@/components/expandable-service-card"
import { serviceImages } from "@/lib/service-images"

export function AboutUsSection() {
  return (
    <section id="about-us" className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 mobile-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-4 md:mb-6 mobile-heading">About Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mobile-subheading">
            Learn about our journey, values, and commitment to serving Jain communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="glass-card rounded-xl p-4 md:p-6 mobile-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Our Story</h3>
                  <p className="text-muted-foreground">6+ Years of Excellence</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Founded with a vision to serve Jain communities across India, SEWAS Nagri has grown from a small 
                initiative to a pan-India infrastructure development company serving 60,000+ families across 800 cities.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-3">
                <p className="text-xs text-amber-900 font-bold">
                  "कोई भी जैन बिना घर और रोजगार नहीं रहना चाहिए" - अश्विन शाह
                </p>
                <p className="text-xs text-amber-700 italic mt-1">
                  "No Jain should live without home and livelihood" - Ashwin Shah
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Our Values</h3>
                  <p className="text-muted-foreground">Core Principles</p>
                </div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Sustainable Development
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Community First Approach
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Quality & Trust
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  Innovation & Excellence
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image 
                src="/luxury-mumbai-apartment-building.jpg" 
                alt="800 SEWAS City Building" 
                width={600} 
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ContactUsSection() {
  return (
    <section id="contact-us" className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background mobile-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-4 md:mb-6 mobile-heading">Contact Us</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mobile-subheading">
            Get in touch with us for inquiries, support, or to learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+91 9930609108</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@800sewas.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">800 Cities • 29 States • 7 Union Territories</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionsSection() {
  return (
    <section id="visions" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">Visions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our vision for the future of Jain communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pan-India Presence</h3>
              <p className="text-muted-foreground">
                Expanding our reach to serve Jain communities in all 800 cities across India, 
                ensuring no community is left behind.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable Development</h3>
              <p className="text-muted-foreground">
                Building eco-friendly, sustainable communities that respect nature and 
                promote green living practices.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Unity</h3>
              <p className="text-muted-foreground">
                Fostering strong bonds within Jain communities through shared spaces, 
                cultural centers, and social infrastructure.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export function ProjectSection() {
  return (
    <section id="project" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our ongoing and completed projects across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Mumbai Residential Complex", status: "Completed", image: "/luxury-mumbai-apartment-building.jpg" },
            { name: "Pune Community Center", status: "Ongoing", image: "/luxury-pune-residential-complex.jpg" },
            { name: "Chennai Jain Temple", status: "Planning", image: "/modern-architectural-design.png" },
          ].map((project, index) => (
            <Card key={index} className="glass-card overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm">
                  A comprehensive development project serving the local Jain community with 
                  modern amenities and sustainable living solutions.
                </p>
                <Button className="mt-4 w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const services = [
    { 
      name: "Religious", 
      icon: Church, 
      description: "Temples, religious centers, and spiritual infrastructure",
      images: serviceImages.religious
    },
    { 
      name: "TV Channel", 
      icon: Tv, 
      description: "Media and broadcasting services for community outreach",
      images: serviceImages.tvChannel
    },
    { 
      name: "Award", 
      icon: Award, 
      description: "Recognition and awards for community excellence",
      images: serviceImages.award
    },
    { 
      name: "Jain Tirth", 
      icon: Mountain, 
      description: "Pilgrimage sites and religious tourism infrastructure",
      images: serviceImages.jainTirth
    },
    { 
      name: "Sangh", 
      icon: Users2, 
      description: "Community organizations and social groups",
      images: serviceImages.sangh
    },
    { 
      name: "Organizations", 
      icon: Building, 
      description: "Institutional buildings and organizational spaces",
      images: serviceImages.organizations
    },
    { 
      name: "Jago Jaino Jago", 
      icon: Heart, 
      description: "Community awakening and awareness programs",
      images: serviceImages.jagoJainoJago
    },
    { 
      name: "Residential", 
      icon: Home, 
      description: "Housing solutions and residential complexes",
      images: serviceImages.residential
    },
    { 
      name: "Commercial", 
      icon: Briefcase, 
      description: "Business centers and commercial spaces",
      images: serviceImages.commercial
    },
    { 
      name: "Educational", 
      icon: GraduationCap, 
      description: "Schools, colleges, and educational institutions",
      images: serviceImages.educational
    },
    { 
      name: "Medical", 
      icon: Stethoscope, 
      description: "Hospitals, clinics, and healthcare facilities",
      images: serviceImages.medical
    },
    { 
      name: "Social", 
      icon: HandHeart, 
      description: "Social welfare and community service programs",
      images: serviceImages.social
    },
    { 
      name: "General", 
      icon: Settings, 
      description: "General infrastructure and utility services",
      images: [] // No images for General, will redirect directly
    },
  ]

  const handleToggleCard = (serviceName: string) => {
    setExpandedCard(expandedCard === serviceName ? null : serviceName)
  }

  const handleRedirectToServices = () => {
    const element = document.querySelector("#home")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 mobile-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black gradient-text mb-4 md:mb-6 mobile-heading">Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mobile-subheading">
            Comprehensive services for Jain communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ExpandableServiceCard
              key={index}
              name={service.name}
              icon={service.icon}
              description={service.description}
              images={service.images}
              isExpanded={expandedCard === service.name}
              onToggle={() => handleToggleCard(service.name)}
              onRedirectToServices={handleRedirectToServices}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our photo and video galleries showcasing our projects and community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Photo Gallery */}
          <div id="gallery-photo" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Photo Gallery</h3>
                <p className="text-muted-foreground">Project photos and community events</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "/luxury-mumbai-apartment-building.jpg",
                "/luxury-pune-residential-complex.jpg",
                "/modern-architectural-design.png",
                "/luxury-construction-quality.jpg"
              ].map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <Image 
                    src={image} 
                    alt={`Gallery photo ${index + 1}`} 
                    width={300} 
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
            <Button className="w-full" variant="outline">
              View All Photos
            </Button>
          </div>

          {/* Video Gallery */}
          <div id="gallery-video" className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Video className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Video Gallery</h3>
                <p className="text-muted-foreground">Project videos and testimonials</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Project Walkthrough Video</p>
                </div>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Community Testimonials</p>
                </div>
              </div>
            </div>
            <Button className="w-full" variant="outline">
              View All Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
