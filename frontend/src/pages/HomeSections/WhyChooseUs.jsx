import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: 'verified',
            title: 'Evidence-Based Nutrition',
            description: 'Every recommendation is backed by the latest peer-reviewed nutritional science, ensuring you receive safe and effective guidance.'
        },
        {
            icon: 'health_metrics',
            title: 'Holistic Assessment',
            description: 'We look beyond the scale, analyzing your sleep, stress, and lifestyle factors to create a truly comprehensive health profile.'
        },
        {
            icon: 'support_agent',
            title: 'Continuous Support',
            description: 'Your journey is never solitary. Get dedicated 1-on-1 support and weekly check-ins to navigate plateaus and celebrate wins.'
        },
        {
            icon: 'restaurant',
            title: 'Sustainable Habits',
            description: 'No crash diets or extreme restrictions. We focus on building lifelong dietary habits that seamlessly fit your lifestyle.'
        }
    ];

    return (
        <section className="py-16 sm:py-24 md:py-section-gap max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-16">
                <span className="text-[#a5d391] font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
                <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-white mb-6">Elevating Your Standard of Care</h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                    We combine clinical expertise with compassionate coaching to deliver a transformative health experience that goes beyond temporary fixes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-[#a5d391]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#a5d391]/20 transition-colors">
                            <span className="material-symbols-outlined text-[#a5d391] text-3xl">{feature.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
