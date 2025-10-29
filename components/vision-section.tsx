"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Users, Building, Award, MapPin, Heart, Lightbulb, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function VisionSection() {
  const { language } = useLanguage()
  return (
    <section
      id="vision"
      className="bg-gradient-to-br from-background via-muted/30 to-background py-16 px-8"
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 luxury-fade-up">
            <div className="flex items-center justify-center gap-3">
              <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg premium-hover">
                <Eye className="h-8 w-8 text-white" />
              </div>
            <Badge variant="secondary" className="text-base px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Our Vision
            </Badge>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight">
              Our Vision
            </h2>
          </div>

          {/* Main Vision Statement */}
          <Card className="max-w-5xl mx-auto glass-card shadow-xl premium-slide-left">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center mb-8">
                A World United in Peace and Brotherhood
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                SEWAS Universal Federation envisions a world united in peace and brotherhood. Our vision is to establish global harmony by bringing together influential leaders and change-makers from diverse sectors to create a global movement that transcends boundaries, cultivates universal brotherhood, and establishes enduring world peace for present and future generations.
              </p>
            </CardContent>
          </Card>

          {/* Vision Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Global Celebrities</h3>
                <p className="text-sm text-muted-foreground">Leveraging their reach to inspire collective action</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Business Leaders</h3>
                <p className="text-sm text-muted-foreground">Mobilizing resources for sustainable impact</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Professional Artists</h3>
                <p className="text-sm text-muted-foreground">Harnessing creativity to bridge cultural divides</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Political Leaders</h3>
                <p className="text-sm text-muted-foreground">Fostering policy frameworks that promote peace</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sports Icons</h3>
                <p className="text-sm text-muted-foreground">Uniting communities through universal sports</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sustainable Contributors</h3>
                <p className="text-sm text-muted-foreground">Engaging committed individuals for lasting change</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MissionSection() {
  const { language } = useLanguage()
  return (
    <section
      id="mission"
      className="bg-gradient-to-br from-muted/20 via-background to-muted/30 py-16 px-8"
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 luxury-fade-up">
            <div className="flex items-center justify-center gap-3">
              <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-full shadow-lg premium-hover">
                <Target className="h-8 w-8 text-white" />
              </div>
              <Badge
                variant="secondary"
                className="text-base px-4 py-2 bg-secondary/10 text-secondary border-secondary/20"
              >
                Our Mission
              </Badge>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight">
              Our Mission
            </h2>
          </div>

          {/* Mission Statement */}
          <Card className="max-w-5xl mx-auto glass-card shadow-xl premium-slide-right">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center mb-8">
                Ensuring Fundamental Human Necessities for All
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                SEWAS Universal Federation is committed to ensuring that no individual, anywhere in the world, is deprived of fundamental human necessities. We dedicate ourselves to tireless efforts in bridging these critical gaps, working across borders and cultures to create a world where basic human rights are not privileges, but guaranteed realities for every person.
              </p>
            </CardContent>
          </Card>

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
  return (
    <section
      id="about-us"
      className="bg-gradient-to-br from-background via-muted/20 to-background py-16 px-8"
    >
      <div className="w-full">
        <div className="text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 luxury-fade-up">
            <div className="flex items-center justify-center gap-3">
              <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg premium-hover">
                <Award className="h-8 w-8 text-white" />
              </div>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-accent/10 text-accent border-accent/20">
                About Us
              </Badge>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold gradient-text">
              SEWAS Universal Federation
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A beacon of hope for humanity, dedicated to addressing critical global challenges and fostering sustainable solutions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-start max-w-6xl mx-auto">
            {/* Our Story */}
            <Card className="text-left glass-card shadow-xl premium-slide-left">
              <CardContent className="p-10 space-y-6">
                <h3 className="font-serif text-3xl font-bold text-foreground">A Beacon of Hope for Humanity</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  <p>
                    In today's global landscape, humanity faces unprecedented challenges that threaten the fabric of our collective existence. Terrorism, armed conflicts, economic inflation, rising illiteracy, inadequate healthcare infrastructure, widespread malnutrition, environmental degradation, systemic corruption, escalating violence, and human trafficking have proliferated across all corners of the world. Millions of lives have been adversely affected by these multifaceted crises.
                  </p>
                  <p>
                    Amidst these pressing contemporary challenges, SEWAS Universal Federation emerges as a beacon of hope for humanity. Our organization is dedicated to addressing these critical issues and fostering sustainable solutions that restore dignity, security, and prosperity to communities worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Global Challenges Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8">Challenges We Address</h3>
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
                <Card key={challenge} className="glass-card premium-hover card-slide-in stagger-child">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <Card className="glass-card shadow-xl luxury-fade-up max-w-5xl mx-auto">
            <CardContent className="p-10">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center mb-6">
                "Working across borders and cultures to create a world where basic human rights are guaranteed realities for every person."
              </blockquote>
              <p className="text-center text-muted-foreground">
                SEWAS Universal Federation - Restoring dignity, security, and prosperity worldwide
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
