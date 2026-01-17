import React from 'react';
import { ArrowRight, Anchor } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative w-full flex flex-col lg:flex-row min-h-screen lg:min-h-0 lg:h-[80vh] pt-20 lg:pt-0 bg-white">

            {/* Mobile: Image Top (Order 1), Desktop: Image Right (Order 2) */}
            <div className="w-full lg:w-1/2 h-[45vh] lg:h-full order-1 lg:order-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                    src="/hero-ship.png"
                    alt="Global Trade Logistics"
                    loading="lazy"
                    className="w-full h-full object-cover transform lg:scale-105 transition-transform duration-[2s]"
                />
                {/* Mobile fade gradient for smooth text transition */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent lg:hidden z-20"></div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12 lg:py-0 order-2 lg:order-1 bg-white relative z-10">
                <div className="max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
                    <div className="flex items-center gap-2 text-secondary font-bold tracking-wide uppercase text-sm mb-6">
                        <Anchor className="w-5 h-5" />
                        <span>World-Class Logistics</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Powering Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Commerce
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                        Streamline your supply chain with our end-to-end global trade solutions.
                        Reliable, efficient, and built for the modern economy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-95 group">
                            Explore Products
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-slate-600 hover:text-primary hover:bg-blue-50/50 border border-slate-200 hover:border-blue-200 transition-all">
                            Contact Sales
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-slate-400 grayscale opacity-70">
                        {/* Trust badges placeholders */}
                        <div className="h-8 w-24 bg-slate-200 rounded"></div>
                        <div className="h-8 w-24 bg-slate-200 rounded"></div>
                        <div className="h-8 w-24 bg-slate-200 rounded hidden sm:block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
