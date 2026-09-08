import React, { useState } from 'react';

const ClientManagement = () => {
    const clients = [
        { id: "442", name: "David Miller", age: 45, goal: "Diabetes Management", adherence: 82, status: "Critical", lastSync: "10m ago" },
        { id: "891", name: "Sarah Jenkins", age: 29, goal: "Hypertrophy", adherence: 68, status: "Warning", lastSync: "2h ago" },
        { id: "8472", name: "Marcus Chen", age: 32, goal: "Lipid Oxidation", adherence: 94, status: "Optimal", lastSync: "5m ago" },
        { id: "102", name: "Elena Rodriguez", age: 38, goal: "Cognitive Boost", adherence: 91, status: "Optimal", lastSync: "1d ago" },
        { id: "553", name: "James Wilson", age: 51, goal: "Cardio Health", adherence: 88, status: "Good", lastSync: "4h ago" },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const getStatusColor = (status) => {
        switch (status) {
            case 'Critical': return 'text-red-400 bg-red-400/10 border-red-400/20';
            case 'Warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
            case 'Optimal': return 'text-[#a5d391] bg-[#a5d391]/10 border-[#a5d391]/20';
            default: return 'text-white/70 bg-white/5 border-white/10';
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold font-hero-display tracking-tight text-white">User Roster</h1>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-[20px]">search</span>
                        <input 
                            type="text" 
                            placeholder="Search by name or ID..." 
                            className="w-full bg-[#080b12]/80 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#a5d391]/50 transition-colors"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="bg-[#a5d391] text-black font-bold w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white transition-colors shrink-0 shadow-[0_0_15px_rgba(165,211,145,0.3)] cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                    </button>
                </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/[0.02]">
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px]">User</th>
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px]">Protocol / Goal</th>
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px]">Adherence</th>
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px]">AI Status</th>
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px]">Last Biometric Sync</th>
                                <th className="p-5 font-bold text-white/40 uppercase tracking-widest text-[10px] text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {clients.map((client) => (
                                <tr key={client.id} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#a5d391]/20 text-[#a5d391] flex items-center justify-center font-bold text-xs border border-[#a5d391]/30">
                                                {client.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm text-white">{client.name}</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-widest">ID: {client.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="text-sm font-medium">{client.goal}</div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full ${client.adherence >= 85 ? 'bg-[#a5d391]' : client.adherence >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`} 
                                                    style={{ width: `${client.adherence}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs font-bold text-white/70">{client.adherence}%</span>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${getStatusColor(client.status)}`}>
                                            {client.status}
                                        </span>
                                    </td>
                                    <td className="p-5 text-sm text-white/50">
                                        {client.lastSync}
                                    </td>
                                    <td className="p-5 text-right">
                                        <button className="text-[#a5d391] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border border-[#a5d391]/30 hover:bg-[#a5d391] hover:text-black px-3.5 py-1.5 rounded-full cursor-pointer">
                                            View Data
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 font-bold uppercase tracking-widest">
                    <span>Showing 1-5 of 42</span>
                    <div className="flex gap-2">
                        <button className="hover:text-white transition-colors">Prev</button>
                        <button className="text-[#a5d391] hover:text-white transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientManagement;
