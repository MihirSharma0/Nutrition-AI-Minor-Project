import React from 'react';

const NewsletterSignup = () => {
    return (
        <section className="py-24 max-w-5xl mx-auto px-8 relative z-20">
            <div className="bg-gradient-to-br from-primary/10 to-[#38bdf8]/10 border border-white/10 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
                
                <h2 className="font-hero-display text-4xl font-bold text-white mb-4 relative z-10">Stay Optimized</h2>
                <p className="text-white/60 mb-12 max-w-xl mx-auto relative z-10 text-lg">
                    Join 45,000+ readers getting cutting-edge research on algorithmic biology, generative nutrition, and metabolic science delivered weekly.
                </p>

                <form className="relative z-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                    <div className="relative flex-grow">
                        <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-white/40">mail</span>
                        <input 
                            type="email" 
                            className="w-full bg-black/40 border border-white/10 rounded-full pl-16 pr-6 py-5 text-white focus:outline-none focus:border-primary transition-colors"
                            placeholder="Enter your email address..."
                        />
                    </div>
                    <button type="button" className="bg-white text-[#080b12] font-bold px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] shrink-0">
                        Subscribe Now
                    </button>
                </form>
                <p className="text-white/30 text-xs mt-6 relative z-10">
                    No spam. Unsubscribe at any time. Read our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
