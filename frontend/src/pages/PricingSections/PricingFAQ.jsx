import React, { useState } from 'react';

const PricingFAQ = () => {
    const faqs = [
        { q: "Can I upgrade or downgrade my tier at any time?", a: "Yes, you can change your protocol tier immediately from your user dashboard. Prorated charges or credits will automatically be applied to your account." },
        { q: "Do you offer a trial period for the Pro tier?", a: "All users begin on the Starter tier for free. You can initiate a 7-day trial of the Pro tier directly within the app before committing to a monthly or yearly cycle." },
        { q: "What is the refund policy?", a: "We offer a 14-day money-back guarantee on your first subscription payment if you find the AI outputs do not meet your expectations." },
        { q: "Are continuous glucose monitors (CGMs) included in the Enterprise tier?", a: "The Enterprise tier includes the API integration and software analytics for CGMs. The physical hardware must be acquired separately through a licensed physician." },
    ];

    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-10 sm:mb-16">
                <span className="text-[#38bdf8] font-bold tracking-widest uppercase text-sm mb-4 block">Clarifications</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl font-bold text-white mb-6">Billing & Upgrades</h2>
            </div>
            
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div 
                        key={idx} 
                        className={`border ${openIdx === idx ? 'border-[#38bdf8] bg-[#38bdf8]/5' : 'border-white/10 bg-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                    >
                        <button
                            className="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex justify-between items-center gap-4"
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        >
                            <span className={`font-bold ${openIdx === idx ? 'text-[#38bdf8]' : 'text-white'}`}>{faq.q}</span>
                            <span className={`material-symbols-outlined transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180 text-[#38bdf8]' : 'text-white/40'}`}>
                                expand_more
                            </span>
                        </button>
                        <div className={`px-5 sm:px-8 overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-60 sm:max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-white/60 leading-relaxed">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingFAQ;
