import React, { useState } from 'react';
import { Check, ArrowRight, TrendingUp, Target, Shield, Calendar, Package, RotateCcw, Star } from 'lucide-react';

// Array to hold the content for each card
const servicesData = [
    {
        title: "AOV above ₹1,500",
        description: "Simulated photo editing scene",
        imageUrl: "/path/to/creative-studio-image.jpg", // replace with actual image path
        content: "Creative Studio content here",
    },
    {
        title: "Revenue ₹1.5Cr+/month",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
    {
        title: "60%+ sales from ads",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
    {
        title: "Plans to scale ₹15–₹25L ad spend in Oct–Dec",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
    {
        title: "Q4-heavy brands: Diwali, Black Friday, X-Mas",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
    {
        title: "Fulfillment: 3PL / in-house with <20% COD fraud",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
    {
        title: "Return Rate <25%",
        description: "Chart visualization for CPA and Spend",
        imageUrl: "/path/to/paid-acquisition-image.jpg",
        content: "Paid Acquisition content here",
    },
];


const ServicesCards = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
            <div className="px-6  lg:px-20 mx-auto ">
                {/* Enhanced Header */}
                <div className="mb-16 border-t-2 pt-6 mt-4 text-start">
                    <h1 className="text-2xl font-semibold text-[#131314] mb-4">
                        ▲ Ideal Brand Profile
                    </h1>
                </div>

                {/* Enhanced Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {servicesData.map((service, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${hoveredCard === idx ? 'scale-105' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Image Section */}
                            <div className="h-[380px] bg-gradient-to-br from-gray-800 to-[#131314] relative overflow-hidden">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="absolute inset-0 object-cover w-full h-full rounded-t-3xl opacity-90"
                                />
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'
                                    }`}></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <p className="text-black text-xl font-semibold leading-relaxed">
                                            {service.title}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className={`ml-4 transition-all duration-300 ${hoveredCard === idx ? 'translate-x-2' : 'translate-x-0'
                                        }`}>
                                        <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#131314]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#131314] rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 rounded-full border border-white transform -translate-x-32 -translate-y-32"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-white transform translate-x-48 translate-y-48"></div>
                    </div>

                    <div className="relative z-10">

                        <p className="text-gray-300 mb-8 text-5xl max-w-5xl mx-auto">
                            Not sure if you qualify? Book a consult and we’ll evaluate your festive potential..
                        </p>

                        <div className="flex  gap-4 justify-center items-center">
                            <button className="bg-white text-[#131314] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 shadow-lg flex items-center">
                                Book Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCards;