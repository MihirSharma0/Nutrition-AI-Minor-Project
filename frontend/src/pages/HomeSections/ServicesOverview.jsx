import React from 'react';

const ServicesOverview = () => {
    const services = [
        {
            title: 'Weight Management',
            desc: 'Achieve your optimal body composition through metabolic balancing and sustainable caloric control.',
            icon: 'monitor_weight'
        },
        {
            title: 'Clinical Nutrition',
            desc: 'Specialized dietary protocols for managing PCOS, Diabetes, and other chronic health conditions.',
            icon: 'medical_services'
        },
        {
            title: 'Sports Performance',
            desc: 'Fuel your athletic endeavors with precise macronutrient timing and targeted supplementation.',
            icon: 'fitness_center'
        },
        {
            title: 'Gut Health Restoration',
            desc: 'Heal your microbiome and resolve digestive issues through personalized elimination protocols.',
            icon: 'water_drop'
        }
    ];

    return (
        <section className="py-section-gap relative overflow-hidden z-20">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Services Overview</span>
                        <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-on-background mb-6">Comprehensive Nutritional Solutions</h2>
                        <p className="text-on-background/70 text-lg leading-relaxed">
                            From chronic disease management to elite athletic performance, our specialized protocols are tailored to your unique biological signature.
                        </p>
                    </div>
                    <button className="text-on-background border border-outline-variant/50 hover:border-primary hover:text-primary px-8 py-4 rounded-full font-semibold transition-all whitespace-nowrap">
                        View All Services
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white shadow-xl shadow-black/5 border border-outline-variant/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/50 transition-all cursor-pointer">
                            <div className="w-20 h-20 bg-surface rounded-2xl flex items-center justify-center shrink-0 border border-outline-variant/30 group-hover:scale-110 transition-transform duration-500">
                                <span className="material-symbols-outlined text-4xl text-on-background/70 group-hover:text-primary transition-colors">{service.icon}</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-on-background mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-on-background/70 leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                            <div className="ml-auto hidden md:block">
                                <span className="material-symbols-outlined text-on-background/30 text-3xl group-hover:text-primary transition-colors group-hover:translate-x-2 duration-300">arrow_forward</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
