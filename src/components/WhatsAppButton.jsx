import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "919012345678"; // Replace with actual number if provided separate from the message link
    // User provided: https://wa.me/message/BE7TRK66BFMSP1 -> This is a short link. 
    // We can use the link directly.
    const whatsappLink = "https://wa.me/message/BE7TRK66BFMSP1";

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
            <MessageCircle className="w-8 h-8 text-white fill-current relative z-10" />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>
        </a>
    );
}
