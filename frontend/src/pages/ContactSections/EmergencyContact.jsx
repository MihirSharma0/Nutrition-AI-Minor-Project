import React from 'react';

const EmergencyContact = () => {
    return (
        <section className="py-12 max-w-4xl mx-auto px-8 relative z-20 mb-24">
            <div className="bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-12 h-12 bg-[#ef4444]/20 rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#ef4444]">medical_services</span>
                </div>
                <div>
                    <h4 className="text-[#ef4444] font-bold mb-1">Medical Disclaimer</h4>
                    <p className="text-white/60 text-sm">
                        Our services are for nutritional optimization and chronic condition management via diet. In case of a medical emergency, severe allergic reaction, or immediate physical distress, please contact 911 or visit your nearest emergency room immediately.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EmergencyContact;
