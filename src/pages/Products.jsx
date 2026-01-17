import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productData } from '../data/products';
import { Leaf } from 'lucide-react';

export default function Products() {
    const { category } = useParams();

    // Default to vegetables if no category or invalid category
    const activeCategory = (category && productData[category]) ? category : 'vegetables';
    const data = productData[activeCategory];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            {/* Category Banner */}
            <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
                <img
                    src={data.banner}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg capitalize">{data.title}</h1>
                    <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Category Navigation */}
            <div className="bg-gradient-to-r from-white via-green-50 to-white border-b border-green-200 sticky top-16 z-30 shadow-lg overflow-x-auto no-scrollbar">
                <div className="max-w-7xl mx-auto px-4 flex gap-3 md:justify-center py-6 min-w-max">
                    {Object.keys(productData)
                        .filter(cat => !productData[cat].isDropdownOnly)
                        .map((cat) => (
                        <Link
                            key={cat}
                            to={`/products/${cat}`}
                            className={`px-7 py-3 rounded-xl text-base font-bold capitalize transition-all duration-300 whitespace-nowrap flex items-center gap-2 transform hover:scale-105 ${activeCategory === cat
                                ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg shadow-green-600/40 ring-2 ring-green-400'
                                : 'bg-white text-slate-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 border-2 border-green-200/50 hover:border-green-400 shadow-md hover:shadow-lg'
                                }`}
                        >
                            <Leaf size={18} className={activeCategory === cat ? 'text-white' : 'text-green-600'} />
                            {cat.replace(/([A-Z])/g, ' $1').trim()}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {data.products.map((product, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        <Leaf size={16} className="text-green-400" /> Premium Quality
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-700 transition-colors">{product.name}</h3>
                                <p className="text-slate-500 text-sm">Export Quality</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
