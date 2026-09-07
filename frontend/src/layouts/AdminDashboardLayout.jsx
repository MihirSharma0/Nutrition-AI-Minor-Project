import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const AdminDashboardLayout = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Using a rose/red accent for the admin portal to distinguish it
    const accentColor = "text-rose-400";
    const accentBg = "bg-rose-400";
    const accentBgLight = "bg-rose-400/10";
    const accentBorder = "border-rose-400/20";
    const accentShadow = "shadow-[0_0_15px_rgba(251,113,133,0.15)]";

    const navItems = [
        { name: "System Core", path: "/dashboard/admin", icon: "dashboard" },
        { name: "User Management", path: "/dashboard/admin/users", icon: "manage_accounts" },
        { name: "Dietitian Nodes", path: "/dashboard/admin/dietitians", icon: "badge" },
        { name: "Blog CMS", path: "/dashboard/admin/blogs", icon: "article" },
        { name: "Global Recipes", path: "/dashboard/admin/recipes", icon: "restaurant_menu" },
        { name: "Transactions", path: "/dashboard/admin/payments", icon: "payments" },
        { name: "Analytics", path: "/dashboard/admin/analytics", icon: "analytics" }
    ];

    return (
        <div className="min-h-screen bg-[#080b12] text-white flex font-body-md selection:bg-rose-500/30 selection:text-rose-200">
            
            {/* Sidebar (Desktop) */}
            <aside className="hidden lg:flex flex-col w-72 bg-[#0a0d16] border-r border-white/5 relative z-20">
                <div className="p-8 border-b border-white/5 relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-32 h-32 ${accentBg} blur-[80px] -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none`}></div>
                    <Link to="/" className="text-xl font-hero-display font-bold flex items-center gap-2 text-white relative z-10">
                        <span className={`material-symbols-outlined ${accentColor} text-2xl`}>admin_panel_settings</span>
                        Aether <span className="font-normal italic text-white/50">Admin</span>
                    </Link>
                    <div className="mt-2 text-[10px] font-bold text-white/30 uppercase tracking-widest relative z-10">System Override</div>
                </div>

                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item, idx) => {
                        const isActive = location.pathname === item.path || (location.pathname === '/dashboard/admin' && item.path === '/dashboard/admin');
                        return (
                            <Link 
                                key={idx} 
                                to={item.path}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? `${accentBgLight} ${accentColor} border ${accentBorder} ${accentShadow}` : 'text-white/50 hover:bg-white/5 hover:text-white border border-transparent'}`}
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
                        Terminate Session
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
                        <h2 className="text-xl font-bold font-hero-display tracking-wide hidden sm:block">Aether <span className={`${accentColor} italic`}>Admin</span></h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-white/50 hover:text-white transition-colors bg-white/5 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30">
                            <span className="material-symbols-outlined text-sm">notifications</span>
                            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#0a0d16]"></span>
                        </button>
                        
                        <div className="flex items-center gap-3 pl-6 border-l border-white/10 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <div className={`text-sm font-bold text-white group-hover:${accentColor} transition-colors`}>System Admin</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">God Mode</div>
                            </div>
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=f43f5e&color=fff" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-white/20 group-hover:border-rose-400 transition-colors" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Pages Output */}
                <div className="flex-grow p-6 lg:p-12 overflow-x-hidden relative">
                    <div className={`absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none z-0`}></div>
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
                                const isActive = location.pathname === item.path || (location.pathname === '/dashboard/admin' && item.path === '/dashboard/admin');
                                return (
                                    <Link 
                                        key={idx} 
                                        to={item.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? `${accentBgLight} ${accentColor}` : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
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

export default AdminDashboardLayout;
