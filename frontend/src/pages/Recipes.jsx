import React from 'react';
import Starfield from '../components/Starfield';
import RecipeCategories from './RecipesSections/RecipeCategories';
import SubmitRecipeCTA from './RecipesSections/SubmitRecipeCTA';

const Recipes = () => {
    const recipes = [
        {
            name: "Neural Broth v4.2",
            type: "Recovery",
            time: "45m",
            macros: { p: "24g", c: "12g", f: "8g" },
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLrZKLb7jzMmFQ5c6qGbPfOriSTc2BC_huR3PJJqupenaW5lWxSI7_t5rEsctSs00W6MwL6qe-qHTKrEjUZAEjRruf0uHFev2ubNwTi4kWIBFgSVq9eO-2GXDO-gHwKpeCq41OZyuAkBa0fNoruRCpaRGqXAPY7wcb-m01KQ-q4hj5mEWx3oKu0Jdv0Iv-jfmt0C8yuj48YFkyamuApv5yVIztLtfvuR9f3xAvA3JU1uCRp1uckTy",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            name: "Kinetic Synthesis Bowl",
            type: "Pre-load",
            time: "15m",
            macros: { p: "32g", c: "65g", f: "14g" },
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb",
            color: "text-[#38bdf8]",
            bg: "bg-[#38bdf8]/10",
            border: "border-[#38bdf8]/20"
        },
        {
            name: "REM Cycle Extract",
            type: "Sleep aid",
            time: "5m",
            macros: { p: "4g", c: "8g", f: "12g" },
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW563tK2alaIdKa-cuEfnJW_382lfBQKNmuA-kMrz16M4r0j_X2E-NwzxGnDRl0tocPS3FptCrFu8YlmyZVNj3JFmfqOmLXYrG0ZwVT8uy224ZUKl3NEzQCmKUTO2msjUepTc_nVcKorAi6FUfm_iG51_uMfIOsUZ6jT5AARtHZZqyjyDau5TLry4qgYRmogxwX3RY3MnDdtrqs7kp4S-dvhaj0IMgdKyGytNOKy-15cE-Ml0DX-bU",
            color: "text-[#a3e635]",
            bg: "bg-[#a3e635]/10",
            border: "border-[#a3e635]/20"
        }
    ];

    return (
        <div className="relative pt-32 pb-24 flex flex-col w-full">
            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-primary"></span>
                        <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-widest">Synthetic Culinary</span>
                        <span className="w-8 h-px bg-primary"></span>
                    </div>
                    <h1 className="font-hero-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Generated <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a3e635] italic">sustenance</span>.
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore example outputs from our Culinary Synth engine, designed to hyper-optimize macronutrient delivery without sacrificing gastronomic complexity.
                    </p>
                </div>

                {/* Recipes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <div 
                            key={index} 
                            className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.07)] group cursor-pointer flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={recipe.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" alt={recipe.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/20 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-[#080b12]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span className="text-xs font-bold">{recipe.time}</span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex-grow flex flex-col relative z-10 -mt-10">
                                <div className={`inline-flex items-center self-start px-3 py-1 rounded-full ${recipe.bg} ${recipe.border} border mb-4 backdrop-blur-md`}>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${recipe.color}`}>{recipe.type}</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-6">{recipe.name}</h3>
                                
                                <div className="mt-auto grid grid-cols-3 gap-4">
                                    <div className="bg-[#080b12]/50 border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">PRO</div>
                                        <div className="font-bold">{recipe.macros.p}</div>
                                    </div>
                                    <div className="bg-[#080b12]/50 border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">CARB</div>
                                        <div className="font-bold">{recipe.macros.c}</div>
                                    </div>
                                    <div className="bg-[#080b12]/50 border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">FAT</div>
                                        <div className="font-bold">{recipe.macros.f}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Appended New Sections */}
                <RecipeCategories />
                <SubmitRecipeCTA />
            </div>
        </div>
    );
};

export default Recipes;
