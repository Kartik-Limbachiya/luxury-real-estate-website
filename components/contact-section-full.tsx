"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSectionFull() {
    return (
        <section className="py-20 bg-white min-h-screen">
            <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#E68A00] tracking-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Get in touch with us for inquiries, support, or to learn more about our services
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto">

                    {/* Left Column: Contact Info & Business Hours */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 9930609108</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">contact@800sewas.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-[#FF6B00] rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">800 Cities • 29 States • 7 Union Territories</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
                            <div className="space-y-4 text-gray-600">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Send Message Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors bg-gray-50/50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors bg-gray-50/50"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors bg-gray-50/50"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    placeholder="Your Message"
                                    rows={6}
                                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] outline-none transition-colors bg-gray-50/50 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button" // preventing submit for this demo
                                className="w-full py-4 bg-[#FF6B00] text-white font-bold rounded-xl hover:bg-[#E66000] transition-colors shadow-lg shadow-orange-500/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
