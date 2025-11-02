"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Users, Building, Award, MapPin, Heart, Lightbulb, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { useRef } from "react"

export function VisionSection() {
  const { language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  }

  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  }

  return (
    <section
      id="vision"
      className="bg-gradient-to-br from-background via-muted/30 to-background py-16 px-8"
      ref={heroRef}
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <TimelineContent
              as="div"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex items-center justify-center gap-3"
            >
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg premium-hover">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-primary/10 text-primary border-primary/20">
                Our Vision
              </Badge>
            </TimelineContent>
            
            <TimelineContent
              as="h2"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight"
            >
              Our Vision
            </TimelineContent>
          </div>

          {/* Main Vision Statement with Highlighted Keywords */}
          <div className="max-w-6xl mx-auto">
            <TimelineContent
              as="p"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-2xl md:text-4xl !leading-[150%] font-semibold text-gray-900 mb-8 text-center"
            >
              A{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-600 border-2 border-blue-500 inline-block border-dotted px-2 rounded-md"
              >
                World United
              </TimelineContent>{" "}
              in{" "}
              <TimelineContent
                as="span"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-purple-600 border-2 border-purple-500 inline-block border-dotted px-2 rounded-md"
              >
                Peace
              </TimelineContent>{" "}
              and{" "}
              <TimelineContent
                as="span"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-green-600 border-2 border-green-500 inline-block border-dotted px-2 rounded-md"
              >
                Brotherhood
              </TimelineContent>
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              <Card className="max-w-5xl mx-auto glass-card shadow-xl">
                <CardContent className="p-12">
                  <p className="text-lg text-muted-foreground leading-relaxed text-left">
                    SEWAS Universal Federation envisions a world united in peace and brotherhood. Our vision is to establish global harmony by bringing together influential leaders and change-makers from diverse sectors to create a global movement that transcends boundaries, cultivates universal brotherhood, and establishes enduring world peace for present and future generations.
                  </p>
                </CardContent>
              </Card>
            </TimelineContent>
          </div>

          {/* Vision Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Global Celebrities", desc: "Leveraging their reach to inspire collective action", gradient: "from-primary to-secondary" },
              { icon: Building, title: "Business Leaders", desc: "Mobilizing resources for sustainable impact", gradient: "from-secondary to-accent" },
              { icon: Lightbulb, title: "Professional Artists", desc: "Harnessing creativity to bridge cultural divides", gradient: "from-accent to-primary" },
              { icon: Shield, title: "Political Leaders", desc: "Fostering policy frameworks that promote peace", gradient: "from-primary to-accent" },
              { icon: Heart, title: "Sports Icons", desc: "Uniting communities through universal sports", gradient: "from-secondary to-primary" },
              { icon: Award, title: "Sustainable Contributors", desc: "Engaging committed individuals for lasting change", gradient: "from-accent to-secondary" },
            ].map((pillar, index) => (
              <TimelineContent
                key={pillar.title}
                as="div"
                animationNum={7 + index}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <Card className="group glass-card premium-hover h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                  </CardContent>
                </Card>
              </TimelineContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function MissionSection() {
  const { language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  }

  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  }

  return (
    <section
      id="mission"
      className="bg-gradient-to-br from-muted/20 via-background to-muted/30 py-16 px-8"
      ref={heroRef}
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <TimelineContent
              as="div"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex items-center justify-center gap-3"
            >
              <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-full shadow-lg premium-hover">
                <Target className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="text-base px-4 py-2 bg-secondary/10 text-secondary border-secondary/20"
              >
                Our Mission
              </Badge>
            </TimelineContent>
            
            <TimelineContent
              as="h2"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight"
            >
              Our Mission
            </TimelineContent>
          </div>

          {/* Mission Statement with Highlighted Keywords */}
          <div className="max-w-6xl mx-auto">
            <TimelineContent
              as="p"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-2xl md:text-4xl !leading-[150%] font-semibold text-gray-900 mb-8 text-center"
            >
              Ensuring{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-600 border-2 border-blue-500 inline-block border-dotted px-2 rounded-md"
              >
                Fundamental Human Necessities
              </TimelineContent>{" "}
              for{" "}
              <TimelineContent
                as="span"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-orange-600 border-2 border-orange-500 inline-block border-dotted px-2 rounded-md"
              >
                All
              </TimelineContent>
            </TimelineContent>

            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              <Card className="max-w-5xl mx-auto glass-card shadow-xl">
                <CardContent className="p-12">
                  <p className="text-lg text-muted-foreground leading-relaxed text-left">
                    SEWAS Universal Federation is committed to ensuring that no individual, anywhere in the world, is deprived of fundamental human necessities. We dedicate ourselves to tireless efforts in bridging these critical gaps, working across borders and cultures to create a world where basic human rights are not privileges, but guaranteed realities for every person.
                  </p>
                </CardContent>
              </Card>
            </TimelineContent>
          </div>

          {/* Core Mission Areas */}
          <div className="max-w-6xl mx-auto premium-slide-left">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Comprehensive Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Residential Security", desc: "Safe and dignified housing for all" },
                { icon: Building, title: "Commercial Opportunities", desc: "Economic empowerment and sustainable livelihoods" },
                { icon: Lightbulb, title: "Quality Education", desc: "Accessible learning opportunities for every age and background" },
                { icon: Heart, title: "Healthcare Services", desc: "Comprehensive medical care without barriers" },
                { icon: Users, title: "Social Welfare", desc: "Holistic support systems that uplift communities" },
                { icon: Award, title: "Global Impact", desc: "Working across borders and cultures worldwide" },
              ].map((service, index) => (
                <Card key={service.title} className="group glass-card premium-hover card-slide-in stagger-child">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutUsSection() {
  const { language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  }

  const textVariants = {
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  }

  return (
    <section
      id="about-us"
      className="bg-gradient-to-br from-background via-muted/20 to-background py-16 px-8"
      ref={heroRef}
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <TimelineContent
              as="div"
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex items-center justify-center gap-3"
            >
              <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg premium-hover">
                <Award className="h-8 w-8 text-white" />
              </div>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-accent/10 text-accent border-accent/20">
                About Us
              </Badge>
            </TimelineContent>
            
            <TimelineContent
              as="h2"
              animationNum={1}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="font-serif text-5xl md:text-6xl font-bold gradient-text"
            >
              SEWAS Universal Federation
            </TimelineContent>
          </div>

          {/* Main Content with Highlighted Keywords */}
          <div className="max-w-6xl mx-auto">
            <TimelineContent
              as="p"
              animationNum={2}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-2xl md:text-4xl !leading-[150%] font-semibold text-gray-900 mb-8 text-left"
            >
              A{" "}
              <TimelineContent
                as="span"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-blue-600 border-2 border-blue-500 inline-block border-dotted px-2 rounded-md"
              >
                beacon of hope
              </TimelineContent>{" "}
              for humanity, dedicated to addressing{" "}
              <TimelineContent
                as="span"
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-orange-600 border-2 border-orange-500 inline-block border-dotted px-2 rounded-md"
              >
                critical global challenges
              </TimelineContent>{" "}
              and fostering{" "}
              <TimelineContent
                as="span"
                animationNum={5}
                timelineRef={heroRef}
                customVariants={textVariants}
                className="text-green-600 border-2 border-green-500 inline-block border-dotted px-2 rounded-md"
              >
                sustainable solutions.
              </TimelineContent>
            </TimelineContent>

            {/* Our Story Card */}
            <Card className="text-left glass-card shadow-xl mb-12">
              <CardContent className="p-10 space-y-6">
                <TimelineContent
                  as="h3"
                  animationNum={6}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="font-serif text-3xl font-bold text-foreground"
                >
                  Understanding the Crisis
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={7}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  className="space-y-4 text-muted-foreground leading-relaxed text-base"
                >
                  <p>
                    In today's global landscape, humanity faces unprecedented challenges that threaten the fabric of our collective existence. Terrorism, armed conflicts, economic inflation, rising illiteracy, inadequate healthcare infrastructure, widespread malnutrition, environmental degradation, systemic corruption, escalating violence, and human trafficking have proliferated across all corners of the world.
                  </p>
                  <p>
                    Amidst these pressing contemporary challenges, SEWAS Universal Federation emerges as a beacon of hope for humanity. Our organization is dedicated to addressing these critical issues and fostering sustainable solutions that restore dignity, security, and prosperity to communities worldwide.
                  </p>
                </TimelineContent>
              </CardContent>
            </Card>
          </div>

          {/* Global Challenges Grid */}
          <div className="max-w-6xl mx-auto">
            <TimelineContent
              as="h3"
              animationNum={8}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="text-3xl font-bold text-foreground mb-8"
            >
              Challenges We Address
            </TimelineContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Terrorism & Armed Conflicts",
                "Economic Inflation",
                "Rising Illiteracy",
                "Healthcare Crisis",
                "Widespread Malnutrition",
                "Environmental Degradation",
                "Systemic Corruption",
                "Human Trafficking",
              ].map((challenge, index) => (
                <TimelineContent
                  key={challenge}
                  as="div"
                  animationNum={9 + index}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                >
                  <Card className="glass-card premium-hover h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{challenge}</p>
                    </CardContent>
                  </Card>
                </TimelineContent>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <TimelineContent
            as="div"
            animationNum={17}
            timelineRef={heroRef}
            customVariants={revealVariants}
          >
            <Card className="glass-card shadow-xl max-w-5xl mx-auto">
              <CardContent className="p-10">
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center mb-6">
                  "Working across borders and cultures to create a world where basic human rights are guaranteed realities for every person."
                </blockquote>
                <p className="text-center text-muted-foreground">
                  SEWAS Universal Federation - Restoring dignity, security, and prosperity worldwide
                </p>
              </CardContent>
            </Card>
          </TimelineContent>
        </div>
      </div>
    </section>
  )
}