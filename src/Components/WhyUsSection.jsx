import React from 'react';

export default function WhyUsSection() {
    return (
        <div className="bg-white text-black  md:py-8">
            <div className=" px-6 lg:px-20 mx-auto">
                {/* Header */}
                <div className="mb-12">
                    {/* <h1 className="text-sm font-medium text-gray-500 mb-2 tracking-wide">• WORKING PROCESS</h1> */}
                    <h1 className="text-2xl  font-semibold text-[#131314] mb-4">
                        ▲  WORKING PROCESS
                    </h1>
                </div>

                {/* Section 01 - Strategy */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* <div className="rounded-lg flex items-center justify-center">
          </div> */}
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        alt="Strategy and Planning"
                        className="object-cover rounded-lg shadow-lg"
                    />

                    <div className="flex flex-col justify-center">
                        <div className="text-6xl font-light text-gray-300 mb-4">01</div>
                        <h2 className="text-3xl font-semibold mb-6">Strategy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            D2C brands don't scale with just more spend — they scale with offer systems that keep ROAS stable even as budgets explode in Q4. Our strategic approach focuses on building sustainable scaling mechanisms that maintain profitability at any spend level.
                        </p>
                    </div>
                </div>

                {/* Section 02 - Offer Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <div className="text-6xl font-light text-gray-300 mb-4">02</div>
                        <h2 className="text-3xl font-semibold mb-6">Offer Stack</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We structure compelling value propositions through primary offer positioning, strategic upsell sequences, optimized bundles, and effective scarcity mechanisms. Each element works together to maximize customer lifetime value while maintaining conversion rates.
                        </p>
                    </div>

                    <div className=" rounded-lg flex items-center justify-center order-1 lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                            alt="Offer Stack Structure"
                            className=" object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 03 - Budget Pacing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className=" rounded-lg flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                            alt="Budget Pacing Analytics"
                            className=" object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="text-6xl font-light text-gray-300 mb-4">03</div>
                        <h2 className="text-3xl font-semibold mb-6">Budget Pacing</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Strategic spend allocation and timing optimization for Q4 scaling preparation. We implement daily budget optimization, channel allocation matrices, and performance threshold monitoring to ensure maximum efficiency across all campaigns.
                        </p>
                    </div>
                </div>

                {/* Section 04 - Creative Cycles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <div className="text-6xl font-light text-gray-300 mb-4">04</div>
                        <h2 className="text-3xl font-semibold mb-6">Creative Cycles</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Dynamic creative testing and optimization through rapid testing protocols, seasonal creative adaptation, performance-based iteration, and strategic asset refresh scheduling. We ensure your creative stays fresh and effective throughout peak seasons.
                        </p>
                    </div>

                    <div className=" rounded-lg flex items-center justify-center order-1 lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71"
                            alt="Creative Design Process"
                            className=" object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Section 05 - Automation Flows */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <div className=" rounded-lg flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0"
                            alt="Automation Systems"
                            className=" object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="text-6xl font-light text-gray-300 mb-4">05</div>
                        <h2 className="text-3xl font-semibold mb-6">Automation Flows</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Seamless customer journey automation through comprehensive mapping, trigger-based sequences, retention automation, and cross-platform integration. We create systems that nurture customers from awareness to advocacy without manual intervention.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}