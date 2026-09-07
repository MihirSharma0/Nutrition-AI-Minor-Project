import React from 'react';

const DashboardHome = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8">System Overview</h1>
            
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between">
                    <div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Today's Macros</div>
                        <div className="text-2xl font-bold">1,850 / <span className="text-primary">2,100</span> kcal</div>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                        <span className="material-symbols-outlined text-primary">local_fire_department</span>
                    </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between">
                    <div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Adherence Score</div>
                        <div className="text-2xl font-bold">94% <span className="text-xs text-green-400 font-normal">+2% this week</span></div>
                    </div>
                    <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-full flex items-center justify-center border border-[#38bdf8]/20">
                        <span className="material-symbols-outlined text-[#38bdf8]">task_alt</span>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between">
                    <div>
                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Next Consultation</div>
                        <div className="text-lg font-bold">Oct 15, 2026</div>
                        <div className="text-sm text-white/50">Dr. Elena Rostova</div>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                        <span className="material-symbols-outlined text-purple-400">video_camera_front</span>
                    </div>
                </div>
            </div>

            {/* AI Insights & Alerts */}
            <h2 className="text-xl font-bold font-hero-display mb-6">Generative Insights</h2>
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-3xl p-6 mb-12 flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary mt-1 animate-pulse">memory</span>
                <div>
                    <h3 className="font-bold text-white mb-2">Algorithm Adjustment</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                        Your Oura ring data indicates a 15% drop in Deep Sleep over the past 3 days. The AI has automatically increased your evening carbohydrate allocation by 25g and suggested the <strong>"REM Cycle Extract"</strong> recipe for tonight to promote recovery.
                    </p>
                    <button className="mt-4 bg-primary text-black font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:bg-white transition-colors">
                        View Updated Plan
                    </button>
                </div>
            </div>
            
            {/* Quick Actions Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h3 className="font-bold mb-6">Today's Protocol</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-[#0a0d16] border border-white/5 rounded-2xl">
                            <span className="material-symbols-outlined text-white/30">light_mode</span>
                            <div className="flex-grow">
                                <div className="text-sm font-bold">Breakfast</div>
                                <div className="text-xs text-white/50">Kinetic Synthesis Bowl</div>
                            </div>
                            <span className="material-symbols-outlined text-primary cursor-pointer">check_circle</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-2xl">
                            <span className="material-symbols-outlined text-primary">wb_sunny</span>
                            <div className="flex-grow">
                                <div className="text-sm font-bold text-primary">Lunch</div>
                                <div className="text-xs text-primary/70">Neural Broth v4.2</div>
                            </div>
                            <span className="material-symbols-outlined text-white/20 cursor-pointer hover:text-white">radio_button_unchecked</span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h3 className="font-bold mb-6">Biometric Sync Status</h3>
                    <ul className="space-y-4">
                        <li className="flex justify-between items-center pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-xs">watch</span> Oura Ring
                            </div>
                            <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">Synced 2m ago</span>
                        </li>
                        <li className="flex justify-between items-center pb-4 border-b border-white/5">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-xs">monitor_heart</span> Apple Health
                            </div>
                            <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">Synced 10m ago</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <div className="flex items-center gap-3 text-sm">
                                <span className="material-symbols-outlined text-xs">bloodtype</span> CGM (Dexcom)
                            </div>
                            <span className="text-xs text-[#ef4444] font-bold bg-[#ef4444]/10 px-2 py-1 rounded">Disconnected</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default DashboardHome;
