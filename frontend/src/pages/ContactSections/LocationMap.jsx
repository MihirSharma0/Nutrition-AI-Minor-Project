import React from 'react';

const LocationMap = () => {
    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-10 sm:mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Headquarters</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Global Clinics</h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-6 sm:p-8 md:p-12 overflow-hidden relative">
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative group border border-white/10">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l" 
                        alt="Map" 
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] to-transparent"></div>
                    
                    {/* Location Markers */}
                    <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_20px_#a3e635]"></div>
                    <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_20px_#a3e635]"></div>
                    <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-[#38bdf8] rounded-full animate-pulse shadow-[0_0_20px_#38bdf8]"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">New York HQ</h3>
                            <p className="text-white/60 text-sm sm:text-base">One World Trade Center, Suite 4500<br/>New York, NY 10007</p>
                        </div>
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#080b12] transition-colors flex items-center gap-2 shrink-0">
                            <span className="material-symbols-outlined text-sm">directions</span>
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
