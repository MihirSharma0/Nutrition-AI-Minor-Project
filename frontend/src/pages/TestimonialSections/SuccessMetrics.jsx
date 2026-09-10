import React from 'react';

const SuccessMetrics = () => {
    const metrics = [
        { label: "Average Fat Loss (12 Wks)", value: "14.2 lbs", icon: "monitor_weight", color: "text-primary" },
        { label: "User Retention Rate", value: "92%", icon: "group", color: "text-[#38bdf8]" },
        { label: "Reported Energy Increase", value: "+45%", icon: "bolt", color: "text-[#a3e635]" }
    ];

    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-6 sm:p-10 md:p-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16 text-center relative z-10">System-Wide Impact</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0">
                            <span className={`material-symbols-outlined text-4xl mb-6 ${metric.color}`}>{metric.icon}</span>
                            <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">{metric.value}</div>
                            <div className="text-white/60 text-sm font-bold uppercase tracking-widest">{metric.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessMetrics;
