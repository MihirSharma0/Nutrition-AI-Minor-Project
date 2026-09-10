import React from 'react';

const AppointmentManagement = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold font-hero-display tracking-tight text-white">Schedule</h1>
                <button className="bg-[#a5d391] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer">
                    Update Availability
                </button>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                
                {/* Calendar Header */}
                <div className="p-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-3 bg-[#080b12]/80">
                    <div className="flex items-center gap-4">
                        <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </button>
                        <h2 className="text-xl font-bold font-hero-display whitespace-nowrap">October 2026</h2>
                        <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors shrink-0">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <button className="bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">Day</button>
                        <button className="bg-[#a5d391] text-black px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-[0_0_15px_rgba(165,211,145,0.3)]">Week</button>
                        <button className="bg-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">Month</button>
                    </div>
                </div>

                {/* Calendar Grid (Mockup for Week View) */}
                <div className="overflow-x-auto custom-scrollbar">
                    <div className="min-w-[700px]">
                        <div className="grid grid-cols-7 border-b border-white/10 bg-[#080b12]/50">
                            {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17', 'Sun 18'].map((day, idx) => (
                                <div key={idx} className="p-4 text-center border-r border-white/5 last:border-r-0">
                                    <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{day.split(' ')[0]}</div>
                                    <div className={`text-lg font-bold ${idx === 0 ? 'text-[#a5d391]' : 'text-white'}`}>{day.split(' ')[1]}</div>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-[600px] overflow-y-auto custom-scrollbar">

                            {/* Time Column Marker Mockups */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-white/10 flex flex-col text-right pr-2 text-[10px] text-white/30 font-bold">
                                <div className="h-[60px] flex items-end justify-end pb-1">09:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">10:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">11:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">12:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">13:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">14:00</div>
                                <div className="h-[60px] flex items-end justify-end pb-1">15:00</div>
                            </div>

                            {/* Events Mockup */}
                            <div className="ml-16 relative w-full h-full">

                                {/* Event 1 */}
                                <div className="absolute top-[60px] left-[0%] w-[14.28%] h-[60px] p-1">
                                    <div className="bg-[#a5d391]/20 border border-[#a5d391]/40 w-full h-full rounded-xl p-2 overflow-hidden hover:bg-[#a5d391]/30 transition-colors cursor-pointer border-l-4 border-l-[#a5d391]">
                                        <div className="text-[10px] font-bold text-[#a5d391]">10:00 - Baseline</div>
                                        <div className="text-[9px] text-white/70">Marcus C.</div>
                                    </div>
                                </div>

                                {/* Event 2 */}
                                <div className="absolute top-[300px] left-[0%] w-[14.28%] h-[60px] p-1">
                                    <div className="bg-[#a5d391]/20 border border-[#a5d391]/40 w-full h-full rounded-xl p-2 overflow-hidden hover:bg-[#a5d391]/30 transition-colors cursor-pointer border-l-4 border-l-[#a5d391]">
                                        <div className="text-[10px] font-bold text-[#a5d391]">14:00 - Adj</div>
                                        <div className="text-[9px] text-white/70">Sarah J.</div>
                                    </div>
                                </div>

                                {/* Event 3 - Pending */}
                                <div className="absolute top-[450px] left-[0%] w-[14.28%] h-[60px] p-1">
                                    <div className="bg-red-500/20 border border-red-500/40 w-full h-full rounded-lg p-2 overflow-hidden hover:bg-red-500/30 transition-colors cursor-pointer border-l-4 border-l-red-500 flex flex-col justify-center items-center group">
                                        <span className="material-symbols-outlined text-red-400 text-sm mb-1 group-hover:hidden">warning</span>
                                        <div className="text-[9px] font-bold text-red-300 group-hover:hidden">Override (442)</div>
                                        <div className="hidden group-hover:flex w-full justify-around">
                                            <button className="text-[#a5d391] hover:text-white"><span className="material-symbols-outlined text-sm">check</span></button>
                                            <button className="text-white/50 hover:text-white"><span className="material-symbols-outlined text-sm">close</span></button>
                                        </div>
                                    </div>
                                </div>

                                {/* Event 4 - Next Day */}
                                <div className="absolute top-[120px] left-[14.28%] w-[14.28%] h-[60px] p-1">
                                    <div className="bg-[#a5d391]/20 border border-[#a5d391]/40 w-full h-full rounded-xl p-2 overflow-hidden hover:bg-[#a5d391]/30 transition-colors cursor-pointer border-l-4 border-l-[#a5d391]">
                                        <div className="text-[10px] font-bold text-[#a5d391]">11:00 - Review</div>
                                        <div className="text-[9px] text-white/70">Elena R.</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentManagement;
