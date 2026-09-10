import React from 'react';

const Pagination = () => {
    return (
        <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 relative z-20 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <button className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                    <span className="material-symbols-outlined text-[18px] sm:text-[24px]">chevron_left</span>
                </button>

                {[1, 2, 3, '...', 8].map((page, idx) => (
                    <button
                        key={idx}
                        className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base font-bold transition-colors ${page === 1 ? 'bg-primary text-[#080b12]' : page === '...' ? 'bg-transparent text-white/40 cursor-default' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                    >
                        {page}
                    </button>
                ))}

                <button className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[18px] sm:text-[24px]">chevron_right</span>
                </button>
            </div>
        </section>
    );
};

export default Pagination;
