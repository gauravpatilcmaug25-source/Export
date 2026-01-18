import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductScroller from '../components/ProductScroller'; // New Component
import { ArrowRight, Leaf, Globe, ShieldCheck, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-white">
            <HeroSlider />

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-sm font-bold text-green-600 tracking-widest uppercase mb-3 animate-fade-in-up">Welcome to VR AGRICO</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 animate-fade-in-up">Serving India's Finest Produce Globally</h3>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16 animate-fade-in-up">
                        "To be recognized worldwide as a trusted exporter of high-quality Indian agricultural produce, delivering a diversified portfolio of fruits, cereals, pulses, spices, and animal feed to global markets."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Globe className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Global Reach</h3>
                            <p className="text-slate-600">Exporting premium quality produce to international markets with efficiency.</p>
                        </div>
                        <div className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Quality Assured</h3>
                            <p className="text-slate-600">Committed to delivering India's premium produce with highest quality standards.</p>
                        </div>
                        <div className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Leaf className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-slate-900">Sustainable Practices</h3>
                            <p className="text-slate-600">Empowering farmers and promoting sustainable agricultural practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Scroller (Replaces Static Buttons) */}
            <ProductScroller />

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/products/home/partner_bg.webp"
                        alt="Agriculture"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-green-900/80 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Connect with VR AGRICO</h2>
                    <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Join us in bringing the best of Indian agriculture to the world.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                        <Link to="/contact">
                            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-xl active:scale-95 flex items-center gap-2">
                                Contact Us <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center gap-8 text-white/70">
                        <a href="https://www.linkedin.com/company/vr-agrico/" className="hover:text-white hover:scale-110 transition-all"><Linkedin size={32} /></a>
                        <a href="https://www.facebook.com/share/17o94WJjj6/" className="hover:text-white hover:scale-110 transition-all"><Facebook size={32} /></a>
                        <a href="https://www.instagram.com/vr_agrico?igsh=MTZ4MTJkZ21ibGpzNw==" className="hover:text-white hover:scale-110 transition-all"><Instagram size={32} /></a>
                    </div>
                </div>
            </section>
        </div>
    );
}