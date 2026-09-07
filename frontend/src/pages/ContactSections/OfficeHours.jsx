import React from 'react';

const OfficeHours = () => {
    return (
        <section className="py-12 max-w-7xl mx-auto px-8 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
                        <span className="material-symbols-outlined text-3xl text-primary">schedule</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">Clinical Hours</h3>
                    <ul className="w-full max-w-sm space-y-4">
                        <li className="flex justify-between items-center text-white/70 border-b border-white/5 pb-2">
                            <span>Monday - Friday</span>
                            <span className="font-bold text-white">8:00 AM - 6:00 PM EST</span>
                        </li>
                        <li className="flex justify-between items-center text-white/70 border-b border-white/5 pb-2">
                            <span>Saturday</span>
                            <span className="font-bold text-white">9:00 AM - 2:00 PM EST</span>
                        </li>
                        <li className="flex justify-between items-center text-white/70">
                            <span>Sunday</span>
                            <span className="font-bold text-primary">AI Support Only</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-[#38bdf8]/10 to-transparent border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l')] opacity-5 bg-cover mix-blend-screen pointer-events-none"></div>
                    <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mb-6 border border-[#38bdf8]/20 relative z-10">
                        <span className="material-symbols-outlined text-3xl text-[#38bdf8]">smart_toy</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 relative z-10">24/7 AI Availability</h3>
                    <p className="text-white/60 mb-6 relative z-10">
                        Our generative coaching matrix is online 24/7 to adjust your macros, answer nutritional queries, and monitor your continuous health data.
                    </p>
                    <button className="bg-[#38bdf8] text-[#080b12] px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors relative z-10">
                        Access AI Portal
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OfficeHours;
