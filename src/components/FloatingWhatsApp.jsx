import React from 'react';

export default function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/message/BE7TRK66BFMSP1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Effect */}
            <div className="absolute inset-0 animate-ping bg-[#25D366]/40 rounded-full group-hover:bg-[#25D366]/60"></div>

            {/* Main Button */}
            <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-white/20">
                {/* WhatsApp SVG Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <circle cx="9" cy="10" r="1" fill="currentColor"></circle>
                    <circle cx="12" cy="10" r="1" fill="currentColor"></circle>
                    <circle cx="15" cy="10" r="1" fill="currentColor"></circle>
                </svg>
            </div>

            {/* Label Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap hidden md:block border border-white/10 shadow-2xl">
                Message on WhatsApp
            </div>
        </a>
    );
}
