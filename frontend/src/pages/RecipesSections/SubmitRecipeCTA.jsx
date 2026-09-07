import React from 'react';

const SubmitRecipeCTA = () => {
    return (
        <section className="py-24 max-w-5xl mx-auto px-8 relative z-20">
            <div className="bg-[#080b12] border border-[#a3e635]/20 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(163,230,53,0.05)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                
                <span className="material-symbols-outlined text-6xl text-primary mb-6">science</span>
                <h2 className="font-hero-display text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Contribute to the Matrix</h2>
                <p className="text-white/60 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                    Have you discovered a hyper-optimized macro ratio in your own kitchen? Submit your culinary formulation to our AI for analysis and potential inclusion in the global database.
                </p>

                <button className="bg-primary text-[#080b12] font-bold px-10 py-5 rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(163,230,53,0.2)]">
                    Initiate Submission Protocol
                </button>
            </div>
        </section>
    );
};

export default SubmitRecipeCTA;
