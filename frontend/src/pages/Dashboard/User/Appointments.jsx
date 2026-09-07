import React from 'react';

const Appointments = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold font-hero-display">Consultations</h1>
                <button className="bg-primary text-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white transition-colors">
                    Initialize Booking
                </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-lg font-bold font-hero-display text-white/70">Upcoming Link</h2>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-[#080b12] border border-primary/20 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center">
                        <div className="bg-[#0a0d16] border border-white/10 rounded-2xl p-4 text-center min-w-[100px]">
                            <div className="text-primary font-bold text-xs uppercase tracking-widest mb-1">OCT</div>
                            <div className="text-3xl font-bold">15</div>
                            <div className="text-white/40 text-xs mt-1">14:00 EST</div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="font-bold text-xl mb-1">Metabolic Baseline Review</h3>
                            <p className="text-white/60 text-sm mb-4">Dr. Elena Rostova will review your recent CGM data and adjust the macro generation algorithm.</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">videocam</span> Join Channel
                                </button>
                                <button className="border border-white/20 text-white/50 px-4 py-2 rounded-lg text-xs font-bold hover:text-white transition-colors">
                                    Reschedule
                                </button>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-lg font-bold font-hero-display text-white/70 mt-12">Historical Logs</h2>
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                        {[1, 2, 3].map((item, idx) => (
                            <div key={idx} className={`p-6 flex items-center justify-between ${idx !== 2 ? 'border-b border-white/5' : ''} hover:bg-white/5 transition-colors cursor-pointer`}>
                                <div>
                                    <div className="font-bold mb-1">Initial AI Protocol Setup</div>
                                    <div className="text-sm text-white/50">Sep 28, 2026 • 45m Session</div>
                                </div>
                                <span className="material-symbols-outlined text-white/30">chevron_right</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="bg-[#0a0d16] border border-white/10 rounded-3xl p-6 sticky top-24">
                        <h3 className="font-bold mb-4">Assigned Node</h3>
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb" alt="Doctor" className="w-16 h-16 rounded-full object-cover border border-primary/30" />
                            <div>
                                <div className="font-bold">Dr. Elena Rostova</div>
                                <div className="text-white/40 text-xs">Algorithmic Biologist</div>
                            </div>
                        </div>
                        <button className="w-full border border-white/20 text-white px-4 py-3 rounded-xl text-sm font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-sm">chat</span> Direct Message
                        </button>
                        <p className="text-xs text-white/40 text-center">Avg response time: 2 hours</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
