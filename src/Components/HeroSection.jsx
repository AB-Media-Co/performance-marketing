import React from 'react';

const HeroSection = () => {
    const content = {
        bgColor: '#131314',
        logoSrc: '/abmlogo.png',
        logoAlt: 'AB Media Logo',
        headline: 'Scale Festive Revenue Without Burning Ad Budget',
        badgeText: 'Limited Slots Available',
        badgeColor: 'bg-green-400',
        description: `For high-AOV D2C brands spending ₹2L+ on Meta/Google, we build offer systems that control ROAS at scale — not just more ad creatives.`,
        ctas: [
            {
                text: 'Book 30-Min Scaling Audit',
                variant: 'primary',
                onClick: () => {/* handle audit booking */ },
            },
            {
                text: 'View Case Studies',
                variant: 'secondary',
                onClick: () => {/* handle view case studies */ },
            },
        ],
        trustedByText: 'Trusted by brands scaling festive revenue to ₹1Cr+ per month',
        logoPlaceholders: [28, 32, 24, 36],
        trustedLogos: [
            { src: '/Brands/8pmnews.png', alt: 'Company 1' },
            { src: '/Brands/emaarindia_logo.jpeg', alt: 'Company 2' },
            { src: '/Brands/kpoint.jpeg', alt: 'Company 3' },
            { src: '/Brands/maska.jpeg', alt: 'Company 4' },
            // { src: '/Brands/davinci.png', alt: 'Company 4' },
        ],
    };

    return (
        <div
            className="text-white relative overflow-hidden"
            style={{ backgroundColor: content.bgColor }}
        >
            {/* grid overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-grid-pattern bg-grid-white/[0.05] bg-[size:40px_40px]" />
            </div>

            {/* logo */}
            <div className="flex justify-center pt-6">
                <img
                    src={content.logoSrc}
                    alt={content.logoAlt}
                    className="h-12 md:h-16"
                />
            </div>

            <div className="mx-auto px-6 lg:px-20 py-10 relative z-10">
                <div className="flex justify-between gap-2 items-start">
                    {/* Left column */}
                    <div className="flex flex-col flex-1 gap-4">
                        <h1 className="text-lg md:text-[52px] font-black leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
                            {content.headline}
                        </h1>
                        <div className="flex w-72 items-center px-4 py-2 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
                            <div
                                className={`w-2 h-2 rounded-full mr-2 animate-pulse ${content.badgeColor}`}
                            />
                            <span className="text-sm text-gray-300">{content.badgeText}</span>
                        </div>

                        {/* Trusted by section */}
                        <div className="pt-8 space-y-4">
                            <p className="text-gray-400 text-sm uppercase tracking-wide font-medium">
                                {content.trustedByText}
                            </p>
                            <div className="flex items-center space-x-8">
                                {content.trustedLogos.map((logo, idx) => (
                                    <img
                                        key={idx}
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="h-14 object-contain rounded-4xl  hover:opacity-100 transition-opacity duration-300"
                                    />
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-8 flex-none max-w-[33rem]">
                        <p className="text-xl lg:text-[24px] text-gray-300 leading-relaxed max-w-2xl font-semibold">
                            {content.description}
                        </p>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                {content.ctas.map((cta, idx) => (
                                    <button
                                        key={idx}
                                        onClick={cta.onClick}
                                        className={`group inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-${cta.variant === 'primary' ? 'bold' : 'semibold'
                                            } transition-all duration-300 transform shadow-2xl ${cta.variant === 'primary'
                                                ? 'bg-white text-black hover:bg-gray-100 hover:shadow-white/20 hover:scale-105'
                                                : 'border-2 border-gray-600 text-white hover:bg-white hover:text-black hover:border-white'
                                            }`}
                                    >
                                        <span className="relative z-10">{cta.text}</span>
                                        <svg
                                            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        {cta.variant === 'primary' && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }
      `}</style>
        </div>
    );
};

export default HeroSection;
