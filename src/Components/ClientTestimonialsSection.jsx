import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MessageSquare, BarChart3, Calendar, TrendingUp } from 'lucide-react';

export default function ClientTestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            quote: "ROAS increased by 340% during Q4 with their scaling system. The automation flows alone saved us 20 hours per week.",
            author: "Sarah M.",
            company: "Premium Skincare Brand",
            role: "Marketing Director",
            revenue: "$2.3M Q4 Revenue",
            roas: "4.2x ROAS"
        },
        {
            quote: "Their offer stack strategy transformed our conversion rates. We went from 2.1% to 7.8% in just 6 weeks.",
            author: "Michael R.",
            company: "Tech Accessories Brand",
            role: "Founder & CEO",
            revenue: "$1.8M Q4 Revenue",
            roas: "5.1x ROAS"
        },
        {
            quote: "The budget pacing system kept our CPA stable even when we 10x'd our spend. Game-changing approach.",
            author: "Jennifer L.",
            company: "Fashion E-commerce",
            role: "Growth Manager",
            revenue: "$4.1M Q4 Revenue",
            roas: "3.8x ROAS"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentTestimonial]);

    const changeTestimonial = (newIndex) => {
        if (newIndex !== currentTestimonial && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentTestimonial(newIndex);
                setTimeout(() => setIsAnimating(false), 50);
            }, 300);
        }
    };

    const nextTestimonial = () => {
        const newIndex = (currentTestimonial + 1) % testimonials.length;
        changeTestimonial(newIndex);
    };

    const prevTestimonial = () => {
        const newIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        changeTestimonial(newIndex);
    };

    return (
        <div className="bg-white text-[#131314]  py-8">
            <div className="px-6 lg:px-20 mx-auto">
                {/* Header */}
                <div className="text-start mb-16">
                    <h1 className="text-2xl border-t-2 pt-6 font-semibold text-[#131314] mb-4">
                        ▲  CLIENT TESTIMONIALS
                    </h1>
                </div>

                {/* Quote Cards Carousel */}
                <div className="mb-16">
                    <div className="relative bg-[#131314] text-white p-8 rounded-lg px-6 lg:px-20 mx-auto overflow-hidden">
                        {/* Background animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-50"></div>
                        
                        {/* Quote Icon with animation */}
                        <Quote className={`w-12 h-12 text-gray-400 mb-4 relative z-10 transition-all duration-500 ${isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} />
                        
                        {/* Main content with fade transition */}
                        <div className={`relative z-10 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                            <p className="text-xl leading-relaxed mb-6 transition-all duration-500">
                                {testimonials[currentTestimonial].quote}
                            </p>
                            
                            <div className="flex justify-between items-center">
                                <div className="transition-all duration-500 delay-100">
                                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].author}</p>
                                    <p className="text-gray-400">{testimonials[currentTestimonial].role}</p>
                                    <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
                                </div>
                                <div className="text-right transition-all duration-500 delay-150">
                                    <p className="text-green-400 text-2xl font-semibold transform hover:scale-105 transition-transform">
                                        {testimonials[currentTestimonial].revenue}
                                    </p>
                                    <p className="text-blue-400 text-2xl font-semibold transform hover:scale-105 transition-transform">
                                        {testimonials[currentTestimonial].roas}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex justify-center mt-8 space-x-4 relative z-10">
                            <button 
                                onClick={prevTestimonial} 
                                className="p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex space-x-2 items-center">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => changeTestimonial(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                                            index === currentTestimonial 
                                                ? 'bg-white scale-125' 
                                                : 'bg-gray-600 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                            <button 
                                onClick={nextTestimonial} 
                                className="p-2 hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-gray-700 w-full">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-5000 ease-linear"
                                style={{ 
                                    width: `${((currentTestimonial + 1) / testimonials.length) * 100}%`,
                                    animation: 'progress 5s linear infinite'
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes progress {
                        0% { width: 0%; }
                        100% { width: 100%; }
                    }
                    
                    .transition-all {
                        transition-property: all;
                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .duration-5000 {
                        transition-duration: 5000ms;
                    }
                `}</style>
            </div>
        </div>
    );
}