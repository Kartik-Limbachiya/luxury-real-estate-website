"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function ImportantDatesSection() {
  return (
    <section className="py-12">
      <div className="w-full px-6 md:px-10">
        <Card className="relative overflow-hidden glass-card shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10"></div>
          <CardContent className="relative z-10 p-8 text-center">
            <div className="mb-6">
              <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                <Sparkles className="w-3 h-3 mr-1" /> Important Dates
              </Badge>
              <h3 className="text-3xl font-bold gradient-text">Development Schedule</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-xl shadow-lg premium-hover border-2 border-red-500 bg-red-50">
                <div className="text-2xl font-bold text-red-600 mb-2">Mar 31, 2026</div>
                <div className="text-red-800 font-bold">⏰ ONLINE BOOKING DEADLINE</div>
                <div className="text-xs text-red-600 mt-1">Last Date to Book</div>
              </div>
              <div className="glass-card p-6 rounded-xl shadow-lg premium-hover">
                <div className="text-2xl font-bold text-amber-600 mb-2">24-30 Months</div>
                <div className="text-amber-800 font-medium">Completion per City</div>
              </div>
              <div className="glass-card p-6 rounded-xl shadow-lg premium-hover">
                <div className="text-2xl font-bold text-orange-600 mb-2">Dec 31, 2030</div>
                <div className="text-orange-800 font-medium">Full Project Completion</div>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 glass-card rounded-lg p-4 font-medium">
              Complete life facilities from birth to death • Book directly where you want to live
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ImportantDatesSection

