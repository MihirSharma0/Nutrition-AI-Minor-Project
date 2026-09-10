import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getDashboardUrl } from '../utils/roleUtils';

const NAV_ITEMS = ['Home', 'About', 'Services', 'Pricing', 'Recipes', 'Blog'];

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsMenuOpen(false);
    };

    return (
        <div className="fixed top-4 left-4 right-4 z-50 pointer-events-none">
            <nav className="mx-auto max-w-7xl bg-[#080b12]/80 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-3xl overflow-hidden shadow-2xl pointer-events-auto">
                <div className="flex justify-between items-center px-5 sm:px-8 py-4">
                    <Link to="/" className="font-headline-lg text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_rgba(177,224,157,0.8)]"></span>
                        AI Nutrition
                    </Link>
                    <div className="hidden md:flex items-center gap-6 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                        {NAV_ITEMS.map(item => {
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
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/contact" className="hidden lg:block text-white/70 text-sm hover:text-white transition-colors font-medium">Contact</Link>

                        {user ? (
                            <>
                                <Link
                                    to={getDashboardUrl(user?.role)}
                                    className="cursor-pointer bg-white/10 text-white px-5 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="cursor-pointer bg-red-500/80 text-white px-5 py-2 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(239,68,68,0.4)] border border-red-400/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:bg-red-500 transition-all hover:-translate-y-0.5"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="cursor-pointer bg-gradient-to-r from-primary/60 to-primary/40 text-white px-6 py-2 rounded-full text-sm font-medium shadow-[0_0_20px_rgba(64,104,50,0.4)] border border-primary-container/40 hover:shadow-[0_0_30px_rgba(64,104,50,0.8)] hover:border-primary-container/80 transition-all hover:-translate-y-0.5">
                                Login/Sign up
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-white/80 hover:text-white p-2 -mr-2"
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>

                {/* Mobile dropdown panel */}
                <div className={`md:hidden grid transition-all duration-300 ease-in-out ${isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <div className="px-5 pb-6 pt-2 border-t border-white/10 flex flex-col gap-1">
                            {NAV_ITEMS.map(item => {
                                const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                const isActive = location.pathname === path;
                                return (
                                    <Link
                                        key={item}
                                        to={path}
                                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {item}
                                    </Link>
                                )
                            })}
                            <Link to="/contact" className="px-4 py-3 rounded-xl text-base font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all">Contact</Link>

                            <div className="mt-3 flex flex-col gap-3">
                                {user ? (
                                    <>
                                        <Link
                                            to={getDashboardUrl(user?.role)}
                                            className="cursor-pointer bg-white/10 text-white px-5 py-3 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all text-center"
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="cursor-pointer bg-red-500/80 text-white px-5 py-3 rounded-full text-sm font-medium border border-red-400/40 hover:bg-red-500 transition-all"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link to="/login" className="cursor-pointer bg-gradient-to-r from-primary/60 to-primary/40 text-white px-6 py-3 rounded-full text-sm font-medium border border-primary-container/40 transition-all text-center">
                                        Login/Sign up
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
