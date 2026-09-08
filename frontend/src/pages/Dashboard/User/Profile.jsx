import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">Subject Profile</h1>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 mb-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <img 
                        src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || user?.username || 'User')}&background=a5d391&color=000`} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#080b12] outline outline-2 outline-[#a5d391]/50 shadow-2xl"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-1 font-hero-display">{user?.name || user?.username || 'Valued Member'}</h2>
                        <div className="text-white/50 text-sm mb-4">{user?.email || 'user@nutrimunch.com'}</div>
                        <button className="border border-[#a5d391]/30 text-[#a5d391] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#a5d391] hover:text-black transition-all cursor-pointer shadow-[0_0_15px_rgba(165,211,145,0.2)]">
                            Update Identity
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Metabolic Age</label>
                        <div className="bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white">28 Years <span className="text-xs text-[#a5d391] font-normal ml-2">(-4 from chronological)</span></div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Primary Goal</label>
                        <select className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Hypertrophy (Muscle Gain)</option>
                            <option>Lipid Oxidation (Fat Loss)</option>
                            <option>Cognitive Optimization</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Activity Level</label>
                        <select className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Sedentary (Algorithm Controlled)</option>
                            <option>Active (3-4x/week)</option>
                            <option>Elite Athlete</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Dietary Restrictions</label>
                        <input type="text" defaultValue="Gluten-Free, Dairy-Free" className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button className="px-6 py-3 rounded-2xl font-bold text-white/50 hover:text-white transition-colors cursor-pointer">Cancel</button>
                <button className="bg-[#a5d391] text-black px-8 py-3.5 rounded-2xl font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer">Save Parameters</button>
            </div>
        </div>
    );
};

export default Profile;
