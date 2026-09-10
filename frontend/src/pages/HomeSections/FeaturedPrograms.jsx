import React from 'react';

const FeaturedPrograms = () => {
    const programs = [
        {
            title: "Fat Loss Accelerator",
            duration: "12 Weeks",
            desc: "A high-intensity nutritional protocol designed to maximize fat oxidation while preserving lean muscle mass.",
            price: "$199/mo",
            icon: "local_fire_department"
        },
        {
            title: "Gut Healing Protocol",
            duration: "8 Weeks",
            desc: "Eliminate bloating, restore microbiome diversity, and identify food sensitivities through a guided elimination phase.",
            price: "$249/mo",
            icon: "spa",
            featured: true
        },
        {
            title: "Performance Athlete",
            duration: "16 Weeks",
            desc: "Periodized nutrition mapped exactly to your training cycle to enhance endurance, strength, and recovery.",
            price: "$299/mo",
            icon: "sprint"
        }
    ];

    return (
        <section className="py-16 sm:py-24 md:py-section-gap max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Tailored Protocols</span>
                <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-on-background mb-6">Featured Programs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {programs.map((prog, idx) => (
                    <div key={idx} className={`relative rounded-3xl p-8 border ${prog.featured ? 'bg-gradient-to-b from-primary/10 to-transparent border-primary/30 shadow-xl' : 'bg-white border-outline-variant/30 shadow-md'} flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
                        {prog.featured && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <span className="material-symbols-outlined text-4xl text-on-background mb-6">{prog.icon}</span>
                        <h3 className="text-2xl font-bold text-on-background mb-2">{prog.title}</h3>
                        <div className="text-primary font-semibold text-sm mb-4">{prog.duration}</div>
                        <p className="text-on-background/70 mb-8 flex-grow">{prog.desc}</p>
                        <div className="flex items-end justify-between mt-auto pt-6 border-t border-outline-variant/20">
                            <div>
                                <div className="text-on-background/50 text-xs">Starting at</div>
                                <div className="text-2xl font-bold text-on-background">{prog.price}</div>
                            </div>
                            <button className={`w-12 h-12 rounded-full flex items-center justify-center ${prog.featured ? 'bg-primary text-on-primary' : 'bg-surface-variant text-on-background'} hover:scale-110 transition-transform`}>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedPrograms;
