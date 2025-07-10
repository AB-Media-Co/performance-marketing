import React from 'react';
import { CheckCircle, TrendingUp, Target, Calendar, MessageCircle, Sparkles } from 'lucide-react';

export default function AuditDeliverablesUI() {
    const sections = [
        {
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop&crop=center",
            title: "Meta + Google + Amazon ROAS ceiling check",
            description: "Identify maximum return potential across all platforms.",
            icon: <Target className="w-6 h-6" />
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&crop=center",
            title: "Creative fatigue analysis",
            description: "Pinpoint when your ads stop converting effectively.",
            icon: <TrendingUp className="w-6 h-6" />
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop&crop=center",
            title: "Offer stack & LTV mapping",
            description: "Optimize your product mix for maximum lifetime value. ",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop&crop=center",

            icon: <Calendar className="w-6 h-6" />,
            title: "Funnel calendar & campaign map",
            description: "Strategic roadmap for seasonal optimization"
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop&crop=center",

            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp + remarketing strategy",
            description: "Multi-channel approach to recover lost customers"
        }
    ];



    return (
        <div className="bg-gray-50 min-h-screen">
       

            <div className=" px-6 lg:px-20 text-start">
                <h1 className="text-2xl border-t-2 pt-6 font-semibold text-[#131314] mb-4">
                    ▲  WHAT MAKES US UNIQUE
                </h1>
            </div>

            {/* Main Content */}
            <div className="px-6 lg:px-20 mx-auto  py-12">
                {/* Three Column Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Image Container */}
                            <div className="h-96 bg-gray-200 overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start space-x-3 mb-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                                            <div className="text-white">
                                                {section.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-black leading-tight">
                                        {section.title}
                                    </h2>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Bottom CTA */}
                <div className="relative">
                    <div className="bg-gradient-to-r from-gray-800 via-[#131314] to-gray-800 rounded-2xl p-8 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex justify-center mb-4">
                                <Sparkles className="w-12 h-12 text-white animate-pulse" />
                            </div>
                            <p className="text-white mb-8 text-4xl max-w-5xl mx-auto font-medium leading-relaxed">
                                You'll know exactly what's capping your ROAS and how to break past it this festive season.
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-100"></div>
                        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full opacity-25 animate-pulse delay-200"></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse delay-300"></div>
                        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-15 animate-pulse delay-500"></div>
                        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse delay-700"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}