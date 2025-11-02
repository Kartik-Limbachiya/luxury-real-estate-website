"use client"

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
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
  Video
} from "lucide-react"
import Image from "next/image"
import { ExpandableServiceCard } from "@/components/expandable-service-card"
import { serviceImages } from "@/lib/service-images"

// NEW ANIMATED ABOUT US SECTION
export function NewAboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section id="about-us" className="py-8 px-4 bg-[#f9f9f9]" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-orange-500 animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-gray-600"
              >
                WHO WE ARE
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-blue-600 hover:border-blue-600 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
              >
                <Facebook className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
              >
                <Instagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-blue-700 hover:border-blue-700 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
              >
                <Linkedin className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-gray-200 bg-white hover:bg-red-600 hover:border-red-600 group rounded-lg flex items-center justify-center cursor-pointer transition-all"
              >
                <Youtube className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
              </TimelineContent>
            </div>
          </div>

          {/* Hero Image with Custom Clip Path */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted-building"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted-building)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                xlinkHref="/luxury-mumbai-apartment-building.jpg"
              />
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-orange-500 font-bold">6+</span>
                <span className="text-gray-600">years of excellence</span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-orange-500 font-bold">60,000+</span>
                <span className="text-gray-600">families served</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-orange-500 font-semibold">800</span>
                <span className="text-gray-600 uppercase">cities</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-orange-500 font-bold">29 States</span>
                <span className="text-gray-600">+ 7 Union Territories</span>
                <span className="text-gray-300 lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-900 mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 3,
                }}
              >
                Building Dreams, Creating Homes for Jain Communities Across India.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-gray-600"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
                  Founded with a vision to serve Jain communities across India, SEWAS Nagri
                  has grown from a small initiative to a pan-India infrastructure development
                  company serving 60,000+ families across 800 cities.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify">
                  Every community deserves a home that reflects their values. We specialize
                  in creating sustainable, quality housing solutions with 0% down payment
                  and 100% bank loan facilities, making homeownership accessible to all.
                </p>
              </TimelineContent>
            </TimelineContent>

            {/* Philosophy Quote */}
            <TimelineContent
              as="div"
              animationNum={12}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="mt-8 p-4 bg-amber-50 border-l-4 border-orange-500 rounded-r-lg"
            >
              <p className="text-gray-700 italic mb-1 sm:text-base text-xs">
                "कोई भी जैन बिना घर और रोजगार नहीं रहना चाहिए"
              </p>
              <p className="text-gray-600 text-sm">
                "No Jain should live without home and livelihood" - Ashwin Shah
              </p>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-orange-500 text-2xl font-bold mb-2"
              >
                SEWAS NAGRI
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-gray-600 text-sm mb-8"
              >
                A Project by SEWAS Universal Federation
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-gray-900 font-medium mb-4 sm:text-base text-sm">
                  Ready to find your dream home in a vibrant Jain community?
                </p>
              </TimelineContent>

              {/* Core Values */}
              <TimelineContent
                as="div"
                animationNum={16}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6 text-left bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-100"
              >
                <h3 className="text-gray-900 font-bold mb-4 text-sm flex items-center gap-2">
                  <span className="w-1 h-4 bg-orange-500 rounded"></span>
                  Our Core Values
                </h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-md border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Sustainable Development</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-md border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Community First</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-md border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Quality & Trust</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-md border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">Innovation</span>
                  </div>
                </div>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={17}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white sm:px-5 px-3 sm:py-3 py-2 rounded-lg cursor-pointer font-semibold sm:text-base text-xs"
              >
                EXPLORE PROJECTS <ArrowRight className="sm:w-5 w-4 sm:h-5 h-4" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// OUR STORY SECTION
export function OurStorySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Our Story */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                <p className="text-gray-600">6+ Years of Excellence</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed">
              Founded with a vision to serve Jain communities across India, SEWAS Nagri
              has grown from a small initiative to a pan-India infrastructure development
              company serving 60,000+ families across 800 cities.
            </p>

            <div className="p-4 bg-amber-50 border-l-4 border-orange-500 rounded-r-lg">
              <p className="text-gray-700 italic mb-1">
                "कोई भी जैन बिना घर और रोजगार नहीं रहना चाहिए"
              </p>
              <p className="text-gray-600 text-sm">
                "No Jain should live without home and livelihood" - Ashwin Shah
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
                <p className="text-gray-600">Core Principles</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Sustainable Development</h3>
                  <p className="text-sm text-gray-600">Building for the future with eco-friendly practices</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community First Approach</h3>
                  <p className="text-sm text-gray-600">Putting Jain community needs at the center</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality & Trust</h3>
                  <p className="text-sm text-gray-600">Delivering excellence in every project</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Innovation & Excellence</h3>
                  <p className="text-sm text-gray-600">Pioneering new solutions in housing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// OLD ABOUT US SECTION (Keep for backwards compatibility)
export function AboutUsSection() {
  return (
    <section id="about-us-old" className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 mobile-section">
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

// CONTACT US SECTION
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

// VISIONS SECTION
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

// PROJECT SECTION
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

// SERVICES SECTION
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
      images: []
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

// GALLERY SECTION
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