import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-0 bg-white">
            {/* Header */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-slate-900 opacity-90"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Get in touch with VR AGRICO for all your export requirements.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Vertical Info List */}
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                We are available to answer your queries and discuss business opportunities.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">

                            {/* Item 1 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-green-500/20 transition-all">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <MapPin size={24} className="text-green-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                                    <p className="text-slate-600 text-sm">
                                        Shop No.1, 1039, State Highway 26,<br />
                                        Girnare, Nashik-422203
                                    </p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-green-500/20 transition-all">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Phone size={24} className="text-green-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                    {/* Placeholder Phone */}
                                    <p className="text-slate-600 text-sm">+91 90123 45678</p>
                                </div>
                            </div>

                            {/* Item 3 */}
                            <div className="group flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-green-500/20 transition-all">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Mail size={24} className="text-green-600 group-hover:text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                                    <p className="text-slate-600 text-sm">vragrico93@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 justify-center lg:justify-start">
                                {/* ADD FACEBOOK LINK HERE */}
                                <a href="#" className="p-3 bg-slate-100 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                {/* ADD INSTAGRAM LINK HERE */}
                                <a href="#" className="p-3 bg-slate-100 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                {/* ADD LINKEDIN LINK HERE */}
                                <a href="#" className="p-3 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Google Map - Nashik Girnare */}
                    <div className="lg:w-2/3 h-auto min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                        {/* Placeholder for Map - using generic Google Maps Embed for Nashik */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15003.55767276535!2d73.665!3d20.015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddedc1c6867331%3A0x6b694b2103f7400d!2sGirnare%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="VR AGRICO Location"
                        ></iframe>
                        {/* ADD GOOGLE MAPS IFRAME HERE IF DIFFERENT */}
                    </div>

                </div>
            </div>
        </div>
    );
}
