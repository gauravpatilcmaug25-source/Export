import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventory } from '../data/inventory';
import { ArrowLeft } from 'lucide-react';

export default function ProductCategory() {
    const { id } = useParams();
    const category = inventory.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!category) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
                <Link to="/products" className="text-primary hover:underline">Return to Products</Link>
            </div>
        );
    }

    return (
        <div className="pt-0 bg-gray-50 min-h-screen">
            {/* Hero */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{category.title}</h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2" size={20} /> Back to Categories
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
