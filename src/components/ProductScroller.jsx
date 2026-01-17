import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

const ProductScroller = () => {
    const [isPaused, setIsPaused] = useState(false);

    // Get featured products only
    const getFeaturedProducts = () => {
        let featured = [];
        Object.entries(productData).forEach(([category, data]) => {
            data.products.forEach(p => {
                if (p.isFeatured) {
                    featured.push({
                        ...p,
                        category: category,
                        categoryTitle: data.title
                    });
                }
            });
        });
        return featured;
    };

    const featuredProducts = getFeaturedProducts();

    // Duplicate products array for seamless infinite loop
    const doubledProducts = [...featuredProducts, ...featuredProducts];

    return (
        <div className="w-full bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
                <p className="text-slate-600 mt-2">Discover our premium range available for export</p>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div 
                    className="relative overflow-hidden rounded-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Marquee scroller container */}
                    <div 
                        className="flex gap-6 whitespace-nowrap"
                        style={{
                            animation: `marquee 18s linear infinite`,
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {/* Duplicate products for seamless infinite loop */}
                        {doubledProducts.map((product, idx) => (
                            <div 
                                key={`product-${idx}`}
                                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3"
                            >
                                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    {/* Product Image */}
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm flex items-center gap-1">
                                            <Star size={12} fill="currentColor" /> Featured
                                        </div>
                                    </div>
                                    
                                    {/* Product Details */}
                                    <div className="p-5 flex flex-col items-center text-center flex-grow justify-between">
                                        <div>
                                            <h3 className="font-bold text-sm md:text-lg text-slate-900 mb-1">{product.name}</h3>
                                            <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">{product.categoryTitle}</p>
                                        </div>

                                        <Link to={`/products/${product.category}`} className="w-full">
                                            <button className="w-full text-xs md:text-sm font-bold text-green-600 border border-green-200 px-4 md:px-6 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:border-green-500">
                                                View Details <ArrowRight size={14} />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Marquee Animation Keyframes */}
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductScroller;
