import React from 'react';

const VideoTestimonials = () => {
    const videos = [
        { name: "Michael T.", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUQW1ayK2QptnJC4qRpFZJQfK25SrdzXBlBBKDdfgFsY3fbK5Q9MBP4F2v2a6cli_nEXhYxZdynfefZ9y6wd9ardu7fb6hI4n4NzwrwE4B--Y4wqSMdeuOKZZfTXGlE55PD6O95ZslKGxZFe9jEyC5O4jQKnL_jnYppX1ixe10PJAE_5uvWDiX9c_vA5cz5JtDILmRAtwTwIPmdRfsDOx7e2W8rsEiFw4gzv8YSmBzQ-2grz1UCn8l", tag: "Fat Loss" },
        { name: "Jessica R.", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb", tag: "PCOS Recovery" },
        { name: "David L.", thumb: "https://lh3.googleusercontent.com/aida-public/AB6AXuARlPSdCdeTilSSltYT8o_EWLoUdxgGM0pAxy7iNyezkvglxmJgPkLDfM6iFjppOiWOTvuZffrRBlNIZRw_fPbClMvFOLDeFwKeig8RqDPRxWVakb4ayBFsLsMMfVo4NvlFhOVebtozAg1DOtjS8rIzQTR7-xYHiOYg86AqGzQBZs5eZOeNLSuXqfBjsgoZxyR_UQ7c65Ncv2dRR9KYLlv6R4aosenNkNLMkWUg3E7hFA0KTuNBg3Sb", tag: "Athletic Performance" }
    ];

    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-10 sm:mb-16">
                <span className="text-[#38bdf8] font-bold tracking-widest uppercase text-sm mb-4 block">In Their Own Words</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Video Testimonials</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {videos.map((vid, idx) => (
                    <div key={idx} className="relative rounded-[2rem] overflow-hidden aspect-[4/5] group cursor-pointer border border-white/10 hover:border-[#38bdf8]/50 transition-colors">
                        <img src={vid.thumb} alt={vid.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                            <div className="mb-4">
                                <span className="bg-[#38bdf8]/20 text-[#38bdf8] border border-[#38bdf8]/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                    {vid.tag}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{vid.name}</h3>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all">
                            <span className="material-symbols-outlined text-3xl text-white ml-1">play_arrow</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VideoTestimonials;
