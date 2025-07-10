import React from 'react';
import { TrendingUp, MessageCircle, TrendingDown } from 'lucide-react';

export default function ResultsSection() {
    return (
        <div className="bg-[#131314] py-20 px-4">
            <div className=" px-6 lg:px-20 mx-auto">
                {/* Header */}
                <div className="text-start mb-12">
                  
                    <h1 className="text-2xl font-semibold text-white mb-4">
                        ▲  Results That Speak for Themselves
                    </h1>
                </div>

                {/* Results Grid - 2x2 Layout */}
                <div className="grid md:grid-cols-2 gap-">
                    {/* First Result */}
                    <div className="text-left">
                        <div className="mb-4">
                            <h3 className="text-5xl  font-semibold text-white mb-2">
                                ₹25L to ₹1.1Cr
                            </h3>
                            <p className="text-lg text-gray-300">
                                Diwali Campaign Teardown in 4 weeks through strategic optimization
                            </p>
                        </div>
                    </div>

                    {/* Second Result */}
                    <div className="text-left">
                        <div className="mb-4">
                            <h3 className="text-5xl  font-semibold text-white mb-2">
                                COD ↓ 43%
                            </h3>
                            <p className="text-lg text-gray-300">
                                Heavily reduced COD fraud through WhatsApp flows and verification
                            </p>
                        </div>
                    </div>

                    {/* Third Result */}
                    <div className="text-left">
                        <div className="mb-4">
                            <h3 className="text-5xl  font-semibold text-white mb-2">
                                3.8X ROAS
                            </h3>
                            <p className="text-lg text-gray-300">
                                Maximized return on ₹22L Black Friday spend through optimization
                            </p>
                        </div>
                    </div>

                    {/* Fourth Result */}
                    <div className="text-left">
                        <div className="mb-4">
                            <h3 className="text-5xl  font-semibold text-white mb-2">
                                1st purchase profitable
                            </h3>
                            <p className="text-lg text-gray-300">
                                Reduced payback period to make DTC profitable on first purchase
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}