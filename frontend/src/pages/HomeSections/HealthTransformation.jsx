import React from 'react';

const HealthTransformation = () => {
    return (
        <section className="py-16 sm:py-24 md:py-section-gap max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="bg-white border border-outline-variant/30 shadow-2xl rounded-[3rem] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-6 sm:p-10 md:p-20 flex flex-col justify-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Health Transformation</span>
                        <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-on-background mb-6 leading-tight">
                            Your Evolution <br/>Starts Here.
                        </h2>
                        <p className="text-on-background/70 text-lg leading-relaxed mb-10">
                            Witness real, measurable changes in your energy levels, body composition, and cognitive function. Our AI-driven approach guarantees a transformation that traditional dieting simply cannot match.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 border border-primary/20">
                                    <span className="material-symbols-outlined text-primary">trending_up</span>
                                </div>
                                <div>
                                    <h4 className="text-on-background font-bold text-lg">Increased Vitality</h4>
                                    <p className="text-on-background/60 text-sm">Optimize your mitochondrial function for sustained energy.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 border border-primary/20">
                                    <span className="material-symbols-outlined text-primary">psychology_alt</span>
                                </div>
                                <div>
                                    <h4 className="text-on-background font-bold text-lg">Mental Clarity</h4>
                                    <p className="text-on-background/60 text-sm">Eliminate brain fog through precise nutrient partitioning.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative min-h-[400px] lg:min-h-full">
                        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 bg-white/80 backdrop-blur-md border border-outline-variant/30 shadow-xl p-4 sm:p-6 rounded-2xl flex items-center gap-3 sm:gap-6">
                            <div>
                                <div className="text-on-background/50 text-xs font-bold tracking-wider uppercase mb-1">Success Rate</div>
                                <div className="text-xl sm:text-3xl font-black text-on-background">94.2%</div>
                            </div>
                            <div className="w-px h-10 bg-outline-variant/30"></div>
                            <div>
                                <div className="text-on-background/50 text-xs font-bold tracking-wider uppercase mb-1">Avg. Time</div>
                                <div className="text-xl sm:text-3xl font-black text-primary">12 Wks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HealthTransformation;
