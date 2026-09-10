import React from 'react';

const ShareYourStoryForm = () => {
    return (
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-white/10 rounded-[3rem] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 pointer-events-none">
                    <span className="material-symbols-outlined text-6xl sm:text-8xl md:text-[10rem] text-primary">rate_review</span>
                </div>

                <h2 className="font-hero-display text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">Share Your Story</h2>
                <p className="text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto relative z-10">
                    Have you completed your initial 12-week protocol? We want to hear how the Aether Convergence has impacted your daily life and biological markers.
                </p>

                <form className="relative z-10 text-left space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Full Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Program Completed</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                                <option value="">Select your protocol...</option>
                                <option value="fat_loss">Fat Loss Accelerator</option>
                                <option value="gut_health">Gut Healing Protocol</option>
                                <option value="performance">Performance Athlete</option>
                                <option value="pcos">PCOS Management</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Your Transformation</label>
                        <textarea 
                            rows="5"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="Tell us about your energy levels, lab results, and overall experience..."
                        ></textarea>
                    </div>

                    <div className="flex items-center gap-4">
                        <button type="button" className="w-full md:w-auto bg-primary text-[#080b12] font-bold px-10 py-4 rounded-xl hover:bg-white transition-colors shadow-lg shadow-primary/20">
                            Submit Story
                        </button>
                        <p className="text-white/40 text-xs hidden md:block">
                            By submitting, you agree to allow us to feature your story anonymously.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ShareYourStoryForm;
