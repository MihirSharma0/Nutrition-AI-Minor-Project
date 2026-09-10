import React from 'react';

const BenefitsPersonalizedNutrition = () => {
    const benefits = [
        "Metabolic Optimization based on your DNA",
        "Hormonal Balance through targeted macro ratios",
        "Improved Gut Microbiome diversity",
        "Accelerated Athletic Recovery",
        "Reduced Systemic Inflammation",
        "Sustainable, non-restrictive eating patterns"
    ];

    return (
        <section className="py-16 sm:py-24 md:py-section-gap relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#a5d391] font-bold tracking-widest uppercase text-sm mb-4 block">The Science of You</span>
                    <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-white mb-6">Benefits of Personalized Nutrition</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                        Generic diets fail because they ignore your unique biology. Discover what happens when your nutrition is engineered specifically for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-[#a5d391]/20 flex items-center justify-center shrink-0 mt-1">
                                <span className="material-symbols-outlined text-[#a5d391] text-sm">done</span>
                            </div>
                            <p className="text-white/80 font-medium leading-relaxed">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BenefitsPersonalizedNutrition;
