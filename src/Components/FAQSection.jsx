import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "We don't run Amazon ads.",
      answer: "That's completely fine - Amazon ads are optional. We focus on your existing channels and identify the highest-impact opportunities first."
    },
    {
      question: "We're scaling but only ₹2.5L/mo right now.",
      answer: "We accept clients at this level with audit approval. Our strategies are designed to scale with your growth trajectory."
    },
    {
      question: "Is this just strategy or will you execute?",
      answer: "We're a full-service performance partner post-audit. We don't just create strategies - we implement, optimize, and deliver results."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg py-8 px-6 lg:px-20 mx-auto">
      <div className="text-start mb-8">
    
        <h1 className="text-2xl border-t-2 pt-6 font-semibold text-[#131314] mb-4">
          ▲  FAQ
        </h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <span className="font-semibold text-black pr-4">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}