import React, { useState } from 'react';

const CategoriesFilter = () => {
    const categories = ["All Articles", "Clinical Studies", "Nutrition Science", "AI & Tech", "Success Stories", "Recipes"];
    const [active, setActive] = useState("All Articles");

    return (
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-8 relative z-20 border-b border-white/5">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {categories.map((cat, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActive(cat)}
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest transition-all ${active === cat ? 'bg-primary text-[#080b12]' : 'bg-white/5 text-white hover:bg-white/10'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CategoriesFilter;
