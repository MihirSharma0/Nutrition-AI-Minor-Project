import React from 'react';

const FeaturedArticle = () => {
    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-10 sm:mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Editor's Pick</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Featured Research</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row hover:border-primary/50 transition-colors duration-500 group cursor-pointer">
                <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[400px]">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l" 
                        alt="Featured Article" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#080b12] to-transparent opacity-80"></div>
                </div>
                <div className="lg:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-[#080b12]">
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold uppercase tracking-wider text-white/50">
                        <span className="text-primary">Clinical Studies</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>8 Min Read</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                        The Microbiome Connection: How Gut Bacteria Dictates Weight Loss Plateaus
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        New research indicates that the diversity of your gut microbiome is a stronger predictor of long-term weight loss success than caloric restriction alone. Learn how to feed your flora.
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb" alt="Author" className="w-12 h-12 rounded-full object-cover border border-white/20" />
                        <div>
                            <div className="text-white font-bold text-sm">Dr. Elena Rostova</div>
                            <div className="text-white/40 text-xs">Chief Algorithmic Biologist</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticle;
