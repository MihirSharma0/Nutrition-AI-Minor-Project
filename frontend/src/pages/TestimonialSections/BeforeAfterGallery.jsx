import React, { useState } from 'react';

const BeforeAfterGallery = () => {
    const transformations = [
        {
            name: "Rebecca T.",
            timeline: "16 Weeks",
            before: "210 lbs | 34% BF",
            after: "165 lbs | 22% BF",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLrZKLb7jzMmFQ5c6qGbPfOriSTc2BC_huR3PJJqupenaW5lWxSI7_t5rEsctSs00W6MwL6qe-qHTKrEjUZAEjRruf0uHFev2ubNwTi4kWIBFgSVq9eO-2GXDO-gHwKpeCq41OZyuAkBa0fNoruRCpaRGqXAPY7wcb-m01KQ-q4hj5mEWx3oKu0Jdv0Iv-jfmt0C8yuj48YFkyamuApv5yVIztLtfvuR9f3xAvA3JU1uCRp1uckTy",
            story: "The AI didn't just give me a diet; it gave me an education. I learned exactly how my body responds to carbohydrates, allowing me to enjoy food without fear."
        },
        {
            name: "Marcus J.",
            timeline: "24 Weeks",
            before: "Pre-diabetic | A1C 6.2",
            after: "Optimal | A1C 4.9",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW563tK2alaIdKa-cuEfnJW_382lfBQKNmuA-kMrz16M4r0j_X2E-NwzxGnDRl0tocPS3FptCrFu8YlmyZVNj3JFmfqOmLXYrG0ZwVT8uy224ZUKl3NEzQCmKUTO2msjUepTc_nVcKorAi6FUfm_iG51_uMfIOsUZ6jT5AARtHZZqyjyDau5TLry4qgYRmogxwX3RY3MnDdtrqs7kp4S-dvhaj0IMgdKyGytNOKy-15cE-Ml0DX-bU",
            story: "Completely reversed my metabolic syndrome. The continuous glucose monitor integration made the invisible visible."
        }
    ];

    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-10 sm:mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Visual Proof</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Before & After Gallery</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-6 sm:p-8 md:p-12 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
                    {/* Image Area */}
                    <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden aspect-square border-2 border-white/10 group">
                        <img
                            src={transformations[activeIdx].image}
                            alt="Transformation"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row justify-between gap-2">
                            <div className="bg-black/60 backdrop-blur-md text-white/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider">
                                Before: <span className="text-white">{transformations[activeIdx].before}</span>
                            </div>
                            <div className="bg-primary/20 backdrop-blur-md text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-primary/30 text-xs sm:text-sm font-bold uppercase tracking-wider sm:text-right">
                                After: <span className="text-white">{transformations[activeIdx].after}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">timer</span>
                            <span className="text-primary font-bold uppercase tracking-widest">{transformations[activeIdx].timeline}</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">{transformations[activeIdx].name}</h3>
                        <p className="text-white/70 text-lg leading-relaxed italic border-l-2 border-primary/50 pl-6 mb-10">
                            "{transformations[activeIdx].story}"
                        </p>
                        
                        {/* Controls */}
                        <div className="flex gap-4">
                            {transformations.map((_, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIdx === idx ? 'w-16 bg-primary' : 'w-8 bg-white/20 hover:bg-white/40'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterGallery;
