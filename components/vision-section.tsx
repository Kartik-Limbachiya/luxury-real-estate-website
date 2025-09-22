"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Users, Building, Award, MapPin, Heart, Lightbulb, Shield } from "lucide-react"

export function VisionSection() {
  return (
    <section
      id="vision"
      className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background p-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto">
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
            <h2 className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight">हमारा दृष्टिकोण</h2>
          </div>

          {/* Main Vision Statement */}
          <Card className="max-w-4xl mx-auto glass-card shadow-xl premium-slide-left">
            <CardContent className="p-12">
              <blockquote className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed text-center">
                "विश्व के एक भी जैन को खुद का घर और नौकरी-धंधा के बिना नहीं रहना चाहिए।"
              </blockquote>
              <p className="text-xl text-muted-foreground mt-6 text-center font-medium">
                "No Jain in the world should live without their own home and livelihood."
              </p>
            </CardContent>
          </Card>

          {/* Vision Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Housing for All</h3>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Homes Delivered Across India</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Community Reach</h3>
                <div className="text-4xl font-bold mb-2 text-primary">500+</div>
                <p className="text-muted-foreground">Communities Served Nationwide</p>
              </CardContent>
            </Card>

            <Card className="group glass-card premium-hover premium-slide-right stagger-child">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Vision 2030</h3>
                <div className="text-4xl font-bold mb-2 text-primary">100%</div>
                <p className="text-muted-foreground">Jain Families with Homes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MissionSection() {
  return (
    <section
      id="mission"
      className="min-h-screen bg-gradient-to-br from-muted/20 via-background to-muted/30 p-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto">
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
            <h2 className="font-serif text-5xl md:text-6xl font-bold gradient-text leading-tight">हमारा मिशन</h2>
          </div>

          {/* Mission Statement */}
          <Card className="max-w-5xl mx-auto glass-card shadow-xl premium-slide-right">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed text-center mb-6">
                "800 SEWAS इन्फ्रास्ट्रक्चर प्राइवेट लिमिटेड — पिछले 6 सालों से भारत के गाँव-गाँव में जैनों की ज़रूरियात को समझकर उनको पूरा
                करने का प्रयत्न कर रही है।"
              </blockquote>
              <p className="text-lg text-muted-foreground text-center font-medium">
                "800 SEWAS Infrastructure Private Limited has been striving for the past 6 years to understand and
                fulfill the needs of Jains in every village of India."
              </p>
            </CardContent>
          </Card>

          {/* Mission Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="glass-card premium-hover luxury-fade-up stagger-child">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Years of Service</div>
              </CardContent>
            </Card>
            <Card className="glass-card premium-hover luxury-fade-up stagger-child">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-1 text-primary">28</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </CardContent>
            </Card>
            <Card className="glass-card premium-hover luxury-fade-up stagger-child">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-1 text-primary">180+</div>
                <div className="text-sm text-muted-foreground">Universities</div>
              </CardContent>
            </Card>
            <Card className="glass-card premium-hover luxury-fade-up stagger-child">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </CardContent>
            </Card>
          </div>

          {/* Core Services */}
          <div className="max-w-6xl mx-auto premium-slide-left">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Religious Infrastructure", desc: "Temples, Upashrays, and Sacred Spaces" },
                { icon: Building, title: "Residential Solutions", desc: "Jain-friendly Housing Communities" },
                { icon: Lightbulb, title: "Commercial Spaces", desc: "Business Centers and Markets" },
                { icon: Award, title: "Educational Services", desc: "Schools and University Admissions" },
                { icon: Heart, title: "Medical Facilities", desc: "Healthcare with Jain Values" },
                { icon: Users, title: "Social Centers", desc: "Community Halls and Events" },
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
  return (
    <section
      id="about-us"
      className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto">
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
              800 SEWAS Infrastructure Limited
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dedicated to serving the Jain community across India with comprehensive infrastructure solutions for over
              6 years.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Company Story */}
            <Card className="text-left glass-card shadow-xl premium-slide-left">
              <CardContent className="p-10 space-y-6">
                <h3 className="font-serif text-3xl font-bold text-foreground">Our Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    800 SEWAS Infrastructure Limited was founded with a singular vision: to ensure that no Jain in the
                    world lives without their own home and sustainable livelihood. For over six years, we have been
                    working tirelessly across India's villages and cities.
                  </p>
                  <p>
                    Our comprehensive approach encompasses religious infrastructure, residential solutions, commercial
                    spaces, educational services, medical facilities, and social centers. We specialize in creating
                    tailored solutions that honor Jain values.
                  </p>
                  <p>
                    From establishing Jain temples and upashrays to developing residential complexes with Jain-friendly
                    amenities, we bridge the gap between tradition and contemporary living.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 premium-slide-right">
              <Card className="glass-card premium-hover card-slide-in stagger-child">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">28</div>
                  <div className="text-sm text-muted-foreground">States & UTs Covered</div>
                </CardContent>
              </Card>

              <Card className="glass-card premium-hover card-slide-in stagger-child">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Families Served</div>
                </CardContent>
              </Card>

              <Card className="glass-card premium-hover card-slide-in stagger-child">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </CardContent>
              </Card>

              <Card className="glass-card premium-hover card-slide-in stagger-child">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Communities</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <Card className="glass-card shadow-xl luxury-fade-up">
            <CardContent className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-3">Registered Office</h4>
                  <p className="text-muted-foreground">
                    800 SEWAS Infrastructure Limited
                    <br />
                    Serving Jain Communities
                    <br />
                    Across India Since 2018
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-3">Founded</h4>
                  <p className="text-muted-foreground">
                    2018
                    <br />
                    6+ Years of Dedicated Service
                    <br />
                    to Jain Communities
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground mb-3">Leadership</h4>
                  <p className="text-muted-foreground">
                    Experienced Team of
                    <br />
                    Infrastructure Professionals
                    <br />
                    and Community Leaders
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
