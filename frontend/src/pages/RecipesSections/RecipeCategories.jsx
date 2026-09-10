import React, { useState } from 'react';

const RecipeCategories = () => {
    const categories = [
        { name: "High-Protein", icon: "fitness_center", active: true },
        { name: "Keto Formulations", icon: "water_drop", active: false },
        { name: "Plant-Based", icon: "eco", active: false },
        { name: "Low-FODMAP", icon: "microbiology", active: false },
        { name: "Pre/Post Workout", icon: "sprint", active: false },
        { name: "Cognitive Boost", icon: "psychology_alt", active: false }
    ];

    const [active, setActive] = useState("High-Protein");

    return (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-8 relative z-20 border-t border-white/5 mt-16">
            <h3 className="text-center text-white/40 font-bold uppercase tracking-widest text-sm mb-8">Filter by Protocol</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {categories.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(cat.name)}
                        className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${active === cat.name ? 'bg-primary text-[#080b12] shadow-[0_0_20px_rgba(163,230,53,0.3)]' : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'}`}
                    >
                        <span className="material-symbols-outlined text-[18px]">{cat.icon}</span>
                        {cat.name}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default RecipeCategories;
