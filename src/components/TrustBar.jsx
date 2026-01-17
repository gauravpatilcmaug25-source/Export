import React from 'react';
import { Award, Leaf, ShieldCheck, Globe } from 'lucide-react';

export default function TrustBar() {
    return (
        <section className="bg-white border-t border-slate-100 py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

                    <div className="flex items-center gap-3 group">
                        <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
                            <Award className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-slate-900 text-sm">APEDA Registered</h4>
                            <p className="text-slate-500 text-xs">Govt Recognized</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                        <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-slate-900 text-sm">Top Quality</h4>
                            <p className="text-slate-500 text-xs">ISO Certified</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                        <div className="p-3 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-colors">
                            <Leaf className="w-8 h-8 text-orange-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-slate-900 text-sm">MSME Certified</h4>
                            <p className="text-slate-500 text-xs">Small Enterprise</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group">
                        <div className="p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
                            <Globe className="w-8 h-8 text-purple-600" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-slate-900 text-sm">Global Standards</h4>
                            <p className="text-slate-500 text-xs">HACCP Compliant</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
