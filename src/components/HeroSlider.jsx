import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: "/assets/products/vegetables/banner.webp",
        title: "Serving India's Finest Produce Globally",
        subtitle: "Fresh Vegetables sourced directly from Indian farms.",
        cta: "Explore Vegetables",
        link: "/products/vegetables"
    },
    {
        id: 2,
        image: "/assets/products/fruits/banner.webp",
        title: "Premium Quality, Global Standards",
        subtitle: "Exporting the sweetest and juiciest fruits worldwide.",
        cta: "Discover Fruits",
        link: "/products/fruits"
    },
    {
        id: 3,
        image: "/assets/products/spices/banner.webp",
        title: "Authentic Indian Spices",
        subtitle: "The aroma and taste of India, delivered to your doorstep.",
        cta: "View Spices",
        link: "/products/spices"
    },
    {
        id: 4,
        image: "/assets/products/pulses/banner.webp",
        title: "Nutritious Pulses & Grains",
        subtitle: "High-quality pulses and cereals for a healthy world.",
        cta: "See Pulses",
        link: "/products/pulses"
    }
];


export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-[600px] lg:h-[85vh] overflow-hidden bg-slate-900 group">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

                    <img
                        src={slide.image}
                        alt={slide.title}
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchpriority={index === 0 ? "high" : "auto"}
                        className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s]"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center z-20">
                        <div className="max-w-7xl mx-auto px-4 w-full">
                            <div className={`max-w-3xl transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                                <div className="inline-block px-4 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-green-400 text-sm font-medium mb-6 uppercase tracking-wider">
                                    VR AGRICO Exports
                                </div>
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl font-light">
                                    {slide.subtitle}
                                </p>
                                <div className="flex gap-4">
                                    <Link to={slide.link}>
                                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-green-900/50 flex items-center gap-2">
                                            {slide.cta} <ArrowRight size={20} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-green-700 transition-all md:opacity-0 group-hover:opacity-100 border border-white/20"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-green-700 transition-all md:opacity-0 group-hover:opacity-100 border border-white/20"
            >
                <ChevronRight size={32} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-green-500 w-10' : 'bg-white/40 w-2 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
