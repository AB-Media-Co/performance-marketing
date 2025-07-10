import React from 'react';
import { Plus, MessageCircle, Palette } from 'lucide-react';

export default function BonusAddonSection() {
    const addons = [
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp Automation Flows",
            price: "+₹30K",
            description: "Automated messaging sequences and customer engagement flows"
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Festive LP Design",
            price: "+₹25K",
            description: "Custom landing page design for seasonal campaigns"
        }
    ];

    return (
        <div className="bg-white  p-8 px-6 lg:px-20  mx-auto">
            <div className=" space-y-6">

                {addons.map((addon, index) => (
                    <div key={index} className="border border-gray-200  rounded-lg p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                                <div className="p-2 bg-black rounded-lg text-white">
                                    {addon.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black text-lg">
                                        {addon.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {addon.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xl font-bold text-black">
                                    {addon.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}