import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="fixed top-4 left-4 right-4 z-50 pointer-events-none">
            <nav className="mx-auto max-w-7xl bg-[#080b12]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
                <div className="flex justify-between items-center px-8 py-4">
                    <Link to="/" className="font-headline-lg text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_rgba(177,224,157,0.8)]"></span>
                        AI Nutrition
                    </Link>
                    <div className="hidden md:flex items-center gap-6 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                        {['Home', 'About', 'Services', 'Pricing', 'Recipes', 'Blog'].map(item => {
                            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                            const isActive = location.pathname === path;
                            return (
                                <Link 
                                    key={item}
                                    to={path} 
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-white shadow-sm' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                                >
                                    {item}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="/contact" className="hidden lg:block text-white/70 text-sm hover:text-white transition-colors font-medium">Contact</Link>
                        <Link to="/login" className="cursor-pointer bg-gradient-to-r from-primary/60 to-primary/40 text-white px-6 py-2 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(64,104,50,0.4)] border border-primary-container/40 hover:shadow-[0_0_30px_rgba(64,104,50,0.8)] hover:border-primary-container/80 transition-all hover:-translate-y-0.5">
                            Login/Sign up
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
