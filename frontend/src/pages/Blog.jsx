import React from 'react';
import Starfield from '../components/Starfield';
import FeaturedArticle from './BlogSections/FeaturedArticle';
import CategoriesFilter from './BlogSections/CategoriesFilter';
import Pagination from './BlogSections/Pagination';
import NewsletterSignup from './BlogSections/NewsletterSignup';

const Blog = () => {
    const articles = [
        {
            category: "Algorithmic Biology",
            date: "OCT 12, 2026",
            title: "Mapping the Microbiome to Neural Network Latency",
            excerpt: "How gut bacteria density directly influences the predictive accuracy of generative dietary models.",
            author: "Dr. Elena Rostova",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l",
            featured: true
        },
        {
            category: "System Updates",
            date: "OCT 05, 2026",
            title: "Aether Engine v2.4 Release Notes",
            excerpt: "Introducing 15ms real-time latency adjustments for continuous glucose monitor integrations.",
            author: "Marcus Chen",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1AIb88EtGsaDT67Bs1oUgkS5rK8JusRcj0qe2qk4ydl65aRa-fgFIe3Og0O7KdSDssEDKTJoxmMm1tWF05oLw0d_Q044JejnNFQSuu6bI8mQme42twS2bMhcvoSzdUdIPPDne4DKXqUt--BL5RwjSbHfbWCr7xhlYzmWUf-19GgHO0ADNucL9oSeYguAwFlSRACjRCOHRG2q-2E_ojPRhNBa2VHN64pxEyvVjQZAmwG58EgpQLlKp",
            featured: false
        },
        {
            category: "Culinary Synth",
            date: "SEP 28, 2026",
            title: "Molecular Gastronomy via Binary Data",
            excerpt: "Translating heart rate variability drops into complex umami flavor profiles for optimal adrenal recovery.",
            author: "Sarah Jenkins",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb",
            featured: false
        }
    ];

    return (
        <div className="relative pt-32 pb-24 flex flex-col w-full">
            {/* Ambient Starfield Background */}
            <Starfield />
            
            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-[#a3e635]"></span>
                        <span className="font-label-caps text-label-caps text-[#a3e635] uppercase font-bold tracking-widest">Knowledge Base</span>
                        <span className="w-8 h-px bg-[#a3e635]"></span>
                    </div>
                    <h1 className="font-hero-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        The Convergence <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a3e635] italic">Log</span>.
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Insights, research papers, and technical patch notes from the frontier of algorithmic metabolic engineering.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {articles.map((article, index) => (
                        <div 
                            key={index}
                            className={`group cursor-pointer ${article.featured ? 'md:col-span-12 flex flex-col md:flex-row' : 'md:col-span-6 flex flex-col'} bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-[#a3e635]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(163,230,53,0.1)]`}
                        >
                            <div className={`overflow-hidden relative ${article.featured ? 'md:w-1/2 min-h-[400px]' : 'h-64 w-full'}`}>
                                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                                <div className={`absolute inset-0 ${article.featured ? 'bg-gradient-to-t md:bg-gradient-to-r' : 'bg-gradient-to-t'} from-[#080b12] via-[#080b12]/50 to-transparent`}></div>
                            </div>
                            
                            <div className={`p-10 flex flex-col justify-center ${article.featured ? 'md:w-1/2 -mt-20 md:mt-0 relative z-10' : '-mt-16 relative z-10'}`}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-[#a3e635]/10 text-[#a3e635] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{article.category}</span>
                                    <span className="text-white/40 text-xs font-bold tracking-widest">{article.date}</span>
                                </div>
                                <h2 className={`font-bold mb-4 ${article.featured ? 'text-4xl' : 'text-2xl'}`}>{article.title}</h2>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">{article.excerpt}</p>
                                
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-white/40 text-sm font-medium">{article.author}</span>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#a3e635] group-hover:text-[#a3e635] transition-colors">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <button className="text-white/60 hover:text-white px-8 py-4 border border-white/10 hover:border-white/30 rounded-full font-bold tracking-widest uppercase text-sm transition-all flex items-center gap-2 group">
                        <span className="material-symbols-outlined text-sm animate-bounce group-hover:animate-none">expand_more</span>
                        Load More Records
                    </button>
                </div>

                {/* Appended New Sections */}
                <CategoriesFilter />
                <FeaturedArticle />
                <Pagination />
                <NewsletterSignup />
            </div>
        </div>
    );
};

export default Blog;
