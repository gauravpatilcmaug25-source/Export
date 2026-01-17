import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-900 text-slate-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2 text-white group">
                            <Leaf className="w-6 h-6 text-green-500 group-hover:text-green-400 transition-colors" />
                            <span className="text-xl font-bold uppercase tracking-tight">VR AGRICO</span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Serving India's finest produce globally. Your trusted partner for Fruits, Vegetables, and Spices.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                            <li><Link to="/products/vegetables" className="hover:text-green-400 transition-colors">Products</Link></li>
                            <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Products */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Products</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/products/vegetables" className="hover:text-green-400 transition-colors">Vegetables</Link></li>
                            <li><Link to="/products/fruits" className="hover:text-green-400 transition-colors">Fruits</Link></li>
                            <li><Link to="/products/spices" className="hover:text-green-400 transition-colors">Spices</Link></li>
                            <li><Link to="/products/pulses" className="hover:text-green-400 transition-colors">Pulses</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact Details</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <span>
                                    Shop No.1, 1039, State Highway 26,<br />
                                    Girnare, Nashik-422203
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-green-500 shrink-0" />
                                <span>+91 9309358623</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-green-500 shrink-0" />
                                <span>vragrico93@gmail.com</span>
                            </li>
                            <div className="flex gap-4 pt-2">
                                <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-green-500 transition-colors"><Facebook size={20} /></a>
                                <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                                <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                            </div>
                        </ul>
                    </div>

                </div>

                <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
                    <p>&copy; {currentYear} VR AGRICO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
