import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';

const BrandProfileQualification = () => {
    const qualifiedCriteria = [
        "AOV above ₹1,500",
        "Revenue ₹1.5Cr+/month",
        "60%+ sales from ads",
        "Plans to scale ₹15–₹25L ad spend in Oct–Dec",
        "Q4-heavy brands: Diwali, Black Friday, X-Mas",
        "Fulfillment: 3PL / in-house with <20% COD fraud",
        "Return Rate <25%"
    ];

    const nonQualifiedCriteria = [
        "AOV below ₹1,000",
        "Revenue under ₹50L/month",
        "Less than 30% sales from ads",
        "No plans for significant ad spend scaling",
        "Seasonal patterns don't align with Q4",
        "High COD fraud rates (>30%)",
        "Return Rate >40%"
    ];

    return (
        <div className=" px-6 lg:px-20 mx-auto space-y-6 p-8 bg-gray-50 min-h-screen">
            <div className="text-start mb-12">
                {/* <h1 className="text-4xl font-bold text-gray-800 mb-4">Brand Profile Assessment</h1>
                <p className="text-lg text-gray-600">Filter traffic, build exclusivity, repel wrong fits.</p> */}

                <h1 className="text-2xl  font-semibold text-[#131314] mb-4">
                    ▲  Brand Profile Assessment
                </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Ideal Brand Profile - Left Side */}
                <div className="bg-white relative rounded-2xl shadow-xl p-8 border-l-4 border-green-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>


                    <div className="flex items-center mb-6">
                        <div className="bg-green-100 p-3 rounded-full mr-4">
                            <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Ideal Brand Profile</h2>
                    </div>

                    <div className="space-y-4">
                        {qualifiedCriteria.map((criterion, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-2xl hover:bg-gray-100  transition-colors">

                                <div className="bg-green-100 p-1 rounded-full ">
                                    <Check className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">{criterion}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-green-100 rounded-lg">
                        <p className="text-green-800 font-semibold text-center">
                            ✨ Perfect fit for our festive scaling program!
                        </p>
                    </div>
                </div>

                {/* Non-Ideal Brand Profile - Right Side */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-400 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                    <div className="flex items-center mb-6">
                        <div className="bg-red-100 p-3 rounded-full mr-4">
                            <X className="w-8 h-8 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Not a Good Fit</h2>
                    </div>

                    <div className="space-y-4">
                        {nonQualifiedCriteria.map((criterion, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                {/* <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" /> */}
                                <div className="bg-red-100 p-1 rounded-full ">
                                    <X className="w-4 h-4 text-red-600" />
                                </div>
                                <span className="text-gray-700 font-medium">{criterion}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-red-100 rounded-lg">
                        <p className="text-red-800 font-semibold text-center">
                            🚫 May not be ready for our program yet
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
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
    );
};

export default BrandProfileQualification;