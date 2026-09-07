import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const UserDashboardLayout = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navItems = [
        { name: "Overview", path: "/dashboard/user", icon: "dashboard" },
        { name: "Progress Tracking", path: "/dashboard/user/progress", icon: "monitoring" },
        { name: "Diet Plans", path: "/dashboard/user/diet-plans", icon: "restaurant_menu" },
        { name: "Appointments", path: "/dashboard/user/appointments", icon: "calendar_month" },
        { name: "Reports", path: "/dashboard/user/reports", icon: "lab_profile" },
        { name: "AI Chat", path: "/dashboard/user/ai-chat", icon: "smart_toy" },
        { name: "AI Diet Gen", path: "/dashboard/user/ai-diet", icon: "magic_button" },
        { name: "AI Food Scan", path: "/dashboard/user/ai-image", icon: "center_focus_strong" },
        { name: "Profile", path: "/dashboard/user/profile", icon: "person" }
    ];

    return (
        <div className="min-h-screen bg-[#080b12] text-white flex font-body-md selection:bg-primary-container selection:text-on-primary-container">
            
            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:flex flex-col w-72 bg-[#0a0d16] border-r border-white/5 relative z-20">
                <div className="p-8 border-b border-white/5">
                    <Link to="/" className="text-xl font-hero-display font-bold flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-primary text-2xl">electric_bolt</span>
                        Aether
                    </Link>
                    <div className="mt-2 text-xs font-bold text-white/30 uppercase tracking-widest">User Terminal</div>
                </div>

                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item, idx) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link 
                                key={idx} 
                                to={item.path}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(163,230,53,0.1)]' : 'text-white/50 hover:bg-white/5 hover:text-white border border-transparent'}`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button className="flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[#ef4444] hover:bg-[#ef4444]/10 transition-colors w-full text-left">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        Disconnect
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-grow flex flex-col min-h-screen w-full relative z-10">
                {/* Header */}
                <header className="h-20 bg-[#0a0d16]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 lg:px-12 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button 
                            className="lg:hidden text-white/70 hover:text-white"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                        <h2 className="text-xl font-bold font-hero-display tracking-wide hidden sm:block">Aether <span className="text-primary italic">Sync</span></h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-white/50 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
                        </button>
                        
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">Subject 8472</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Pro Tier Active</div>
                            </div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-white/20 group-hover:border-primary transition-colors" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Pages Output */}
                <div className="flex-grow p-6 lg:p-12 overflow-x-hidden relative">
                    {/* Background effects specific to dashboard */}
                    <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0"></div>
                    <div className="relative z-10 h-full">
                        <Outlet />
                    </div>
                </div>
            </main>

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden flex">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)}></div>
                    <aside className="w-72 bg-[#0a0d16] border-r border-white/10 relative z-10 flex flex-col">
                        <div className="p-6 flex justify-between items-center border-b border-white/10">
                            <span className="text-xl font-hero-display font-bold text-white">Menu</span>
                            <button onClick={() => setIsSidebarOpen(false)} className="text-white/50 hover:text-white">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                            {navItems.map((item, idx) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link 
                                        key={idx} 
                                        to={item.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-primary/10 text-primary' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                                    >
                                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </nav>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default UserDashboardLayout;
