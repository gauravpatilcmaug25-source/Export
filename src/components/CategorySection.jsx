import React from 'react';
import { products } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

export default function CategorySection() {
    return (
        <section id="products" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Our Sectors</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Industries We Serve
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Comprehensive solutions tailored to the unique demands of global industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                    {product.title}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                                    {product.description}
                                </p>
                                <span className="inline-block text-sm font-semibold text-primary group-hover:underline cursor-pointer">
                                    View Products
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 hover:border-primary/30 transition-all">
                        View All Categories
                    </button>
                </div>
            </div>
        </section>
    );
}
