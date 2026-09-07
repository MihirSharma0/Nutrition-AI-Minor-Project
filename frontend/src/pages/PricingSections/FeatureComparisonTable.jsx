import React from 'react';

const FeatureComparisonTable = () => {
    const features = [
        { name: "Daily Calorie Targets", starter: true, pro: true, enterprise: true },
        { name: "Basic Recipe Generation", starter: true, pro: true, enterprise: true },
        { name: "Community Support", starter: true, pro: true, enterprise: true },
        { name: "Wearable Sync (Oura, Whoop)", starter: false, pro: true, enterprise: true },
        { name: "Dynamic Macro Shifting", starter: false, pro: true, enterprise: true },
        { name: "Advanced Sleep Analytics", starter: false, pro: true, enterprise: true },
        { name: "Continuous Glucose Monitor Sync", starter: false, pro: false, enterprise: true },
        { name: "DNA Metabolic Baseline", starter: false, pro: false, enterprise: true },
        { name: "1-on-1 Dietitian Access", starter: false, pro: false, enterprise: true },
    ];

    return (
        <section className="py-24 max-w-6xl mx-auto px-8 relative z-20">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Feature Matrix</span>
                <h2 className="font-hero-display text-4xl font-bold text-white mb-6">Compare Protocols</h2>
            </div>
            
            <div className="bg-[#080b12] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                            <th className="p-6 font-bold text-white/50 uppercase tracking-widest text-sm w-2/5">Capabilities</th>
                            <th className="p-6 font-bold text-center text-white text-lg w-1/5">Starter</th>
                            <th className="p-6 font-bold text-center text-primary text-lg w-1/5 relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                                Pro
                            </th>
                            <th className="p-6 font-bold text-center text-[#38bdf8] text-lg w-1/5">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {features.map((feature, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white/80 font-medium">{feature.name}</td>
                                <td className="p-6 text-center">
                                    {feature.starter ? <span className="material-symbols-outlined text-white/60">check</span> : <span className="material-symbols-outlined text-white/10">remove</span>}
                                </td>
                                <td className="p-6 text-center bg-primary/5">
                                    {feature.pro ? <span className="material-symbols-outlined text-primary">check</span> : <span className="material-symbols-outlined text-white/10">remove</span>}
                                </td>
                                <td className="p-6 text-center">
                                    {feature.enterprise ? <span className="material-symbols-outlined text-[#38bdf8]">check</span> : <span className="material-symbols-outlined text-white/10">remove</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FeatureComparisonTable;
