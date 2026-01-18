import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../data/products';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductScroller = () => {
    // Get featured products only
    const getFeaturedProducts = () => {
        let featured = [];
        Object.entries(productData).forEach(([category, data]) => {
            // Check if user requested to hide Dairy Products (or check data structure)
            // User said: "Ensure Dairy Products remains only in the Navbar dropdown and hidden from the main product list."
            // Assuming "Featured Products" section is part of "main product list" in terms of visibility?
            // Usually "Featured" picks items specifically marked as isFeatured. 
            // I should check validity. 
            // In products.js, dairyProducts has isDropdownOnly: true. 

            if (data.isDropdownOnly) return;

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
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full bg-slate-50 py-16 relative group/section">
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
                <p className="text-slate-600 mt-2">Discover our premium range available for export</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative">

                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-green-600 hover:border-green-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-green-600 hover:border-green-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                    className="px-1 py-4" // Padding for shadow
                >
                    {featuredProducts.map((product, idx) => (
                        <SwiperSlide key={idx} className="h-auto">
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1">
                                {/* Product Image */}
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 shadow-sm flex items-center gap-1">
                                        <Star size={12} fill="currentColor" /> Featured
                                    </div>

                                    {/* Quick overlay effect */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                </div>

                                {/* Product Details */}
                                <div className="p-5 flex flex-col items-center text-center flex-grow justify-between relative bg-white">
                                    <div className="w-full">
                                        <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
                                        <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider font-medium">{product.categoryTitle}</p>
                                    </div>

                                    {/* Replace <Link> with <a> for external WhatsApp redirection */}
                                    <a
                                        href="https://wa.me/message/BE7TRK66BFMSP1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full mt-auto"
                                    >
                                        <button className="w-full text-sm font-bold text-green-600 border border-green-200 px-6 py-2.5 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-green-600 shadow-sm hover:shadow-md">
                                            Know More <ArrowRight size={16} />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductScroller;
