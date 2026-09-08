import React from 'react';

const DietPlanBuilder = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">Protocol Builder</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Protocol Engine Override */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 shadow-xl">
                        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-6">
                            <div>
                                <h2 className="text-xl font-bold mb-1 font-hero-display">Target User: David Miller (ID: 442)</h2>
                                <p className="text-white/50 text-sm">Status: Critical • Base Protocol: Diabetes Management</p>
                            </div>
                            <span className="bg-[#a5d391]/20 text-[#a5d391] border border-[#a5d391]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                                Manual Override Active
                            </span>
                        </div>

                        <div className="space-y-8">
                            {/* Macro Targets */}
                            <div>
                                <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-[#a5d391]">Daily Macro Targets</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="bg-[#080b12]/80 border border-white/10 rounded-2xl p-4">
                                        <div className="text-xs text-white/50 mb-1">Total Kcal</div>
                                        <div className="flex items-center gap-2">
                                            <input type="number" defaultValue={2100} className="w-full bg-transparent font-bold text-xl outline-none focus:text-[#a5d391] transition-colors" />
                                            <span className="material-symbols-outlined text-white/30 text-sm">edit</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#080b12]/80 border border-white/10 rounded-2xl p-4">
                                        <div className="text-xs text-white/50 mb-1">Protein (g)</div>
                                        <div className="flex items-center gap-2">
                                            <input type="number" defaultValue={160} className="w-full bg-transparent font-bold text-xl outline-none focus:text-[#a5d391] transition-colors" />
                                            <span className="material-symbols-outlined text-white/30 text-sm">edit</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#080b12]/80 border border-white/10 rounded-2xl p-4">
                                        <div className="text-xs text-white/50 mb-1">Carbs (g)</div>
                                        <div className="flex items-center gap-2">
                                            <input type="number" defaultValue={150} className="w-full bg-transparent font-bold text-xl outline-none focus:text-[#a5d391] transition-colors" />
                                            <span className="material-symbols-outlined text-white/30 text-sm">edit</span>
                                        </div>
                                    </div>
                                    <div className="bg-[#080b12]/80 border border-white/10 rounded-2xl p-4">
                                        <div className="text-xs text-white/50 mb-1">Fats (g)</div>
                                        <div className="flex items-center gap-2">
                                            <input type="number" defaultValue={95} className="w-full bg-transparent font-bold text-xl outline-none focus:text-[#a5d391] transition-colors" />
                                            <span className="material-symbols-outlined text-white/30 text-sm">edit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Generative Recipe Editor */}
                            <div>
                                <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-[#a5d391]">Generative Formulation</h3>
                                <div className="space-y-4">
                                    <div className="bg-[#080b12]/80 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center">
                                        <div className="bg-[#a5d391]/10 text-[#a5d391] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-[#a5d391]/20">
                                            <span className="font-bold">B</span>
                                        </div>
                                        <div className="flex-grow text-center md:text-left">
                                            <div className="font-bold">AI Suggestion: Keto Synthesis Bowl</div>
                                            <div className="text-xs text-white/50">Eggs, Avocado, Spinach, MCT Oil</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="bg-[#a5d391] text-black hover:bg-white transition-colors px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer">
                                                Approve
                                            </button>
                                            <button className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer">
                                                Reject
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-dashed border-white/30 rounded-2xl p-6 text-center cursor-pointer hover:bg-white/10 hover:border-[#a5d391] transition-colors group">
                                        <span className="material-symbols-outlined text-white/30 group-hover:text-[#a5d391] text-3xl mb-2 transition-colors">add_circle</span>
                                        <div className="text-sm font-bold text-white/70 group-hover:text-white">Inject Custom Recipe Override</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Sidebar Tools */}
                <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-xl">
                        <h3 className="font-bold mb-4 flex items-center gap-2 font-hero-display">
                            <span className="material-symbols-outlined text-[#a5d391]">database</span>
                            Ingredient Registry
                        </h3>
                        <div className="relative mb-4">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-[18px]">search</span>
                            <input type="text" placeholder="Search database..." className="w-full bg-[#080b12]/80 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#a5d391]/50 transition-colors" />
                        </div>
                        
                        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                            {["Wild Salmon (100g)", "Avocado (Half)", "Quinoa (Cup)", "Whey Isolate (Scoop)", "Almonds (Oz)"].map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 cursor-grab">
                                    <span className="text-sm">{item}</span>
                                    <span className="material-symbols-outlined text-white/30 text-sm">drag_indicator</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#a5d391]/10 border border-[#a5d391]/20 backdrop-blur-xl rounded-[2.5rem] p-6 text-center shadow-xl">
                        <span className="material-symbols-outlined text-[#a5d391] text-4xl mb-2">send</span>
                        <h4 className="font-bold mb-2 font-hero-display text-lg">Push Protocol</h4>
                        <p className="text-white/60 text-xs mb-4">Transmit the modified algorithmic parameters directly to the user's mobile node.</p>
                        <button className="bg-[#a5d391] text-black font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white transition-colors w-full shadow-[0_0_20px_rgba(165,211,145,0.4)] cursor-pointer">
                            Deploy Overrides
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietPlanBuilder;
