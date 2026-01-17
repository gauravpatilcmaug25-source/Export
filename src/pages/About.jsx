import React from 'react';
import { Target, Leaf } from 'lucide-react';

export default function About() {
    return (
        <div className="pt-0 bg-white">
            {/* Simple Header */}
            <div className="relative h-[400px] w-full overflow-hidden bg-slate-900 flex items-center justify-center">
                <img
                    src="/assets/products/about/header.webp"
                    alt="Agricultural Field"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">About VR AGRICO</h1>
                    <p className="text-xl max-w-2xl mx-auto text-slate-200">
                        Building a brand that reflects quality and customer satisfaction.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="space-y-16">
                    {/* Vision */}
                    <div className="text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                            <p className="text-slate-700 text-lg leading-relaxed italic">
                                "To be a globally trusted exporter of indias finest agricultural produce also being a diversified agricultural powerhouse offering fruits, cereals , pulses, spices,and animal feed that meet the evolving needs of international buyers."
                            </p>
                        </div>
                    </div>

                    {/* Mission / Commitment */}
                    <div className="text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Leaf className="w-10 h-10 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-2 h-full bg-green-500"></div>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                "At VR AGRICO, we are committed to empowering farmers, delivering INDIAS premium produce to international markets, and building a brand that reflects quality, and customer satisfaction. Through sustainable practices, modern branding, and trustworthy partnerships, we aim to position Indian agriculture on the world stage."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
