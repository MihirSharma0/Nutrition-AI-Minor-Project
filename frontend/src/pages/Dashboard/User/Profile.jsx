import React from 'react';

const Profile = () => {
    return (
        <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold font-hero-display mb-8">Subject Profile</h1>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb" 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#080b12] outline outline-2 outline-primary/30"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-1">Marcus Chen</h2>
                        <div className="text-white/50 text-sm mb-4">node-alpha@aetherconvergence.ai</div>
                        <button className="border border-white/20 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                            Update Identity
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Metabolic Age</label>
                        <div className="bg-[#0a0d16] border border-white/5 px-4 py-3 rounded-xl font-bold">28 Years <span className="text-xs text-primary font-normal ml-2">(-4 from chronological)</span></div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Primary Goal</label>
                        <select className="w-full bg-[#0a0d16] border border-white/5 px-4 py-3 rounded-xl font-bold appearance-none outline-none focus:border-primary/50">
                            <option>Hypertrophy (Muscle Gain)</option>
                            <option>Lipid Oxidation (Fat Loss)</option>
                            <option>Cognitive Optimization</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Activity Level</label>
                        <select className="w-full bg-[#0a0d16] border border-white/5 px-4 py-3 rounded-xl font-bold appearance-none outline-none focus:border-primary/50">
                            <option>Sedentary (Algorithm Controlled)</option>
                            <option>Active (3-4x/week)</option>
                            <option>Elite Athlete</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Dietary Restrictions</label>
                        <input type="text" defaultValue="Gluten-Free, Dairy-Free" className="w-full bg-[#0a0d16] border border-white/5 px-4 py-3 rounded-xl font-bold outline-none focus:border-primary/50" />
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-4">
                <button className="px-6 py-3 rounded-xl font-bold text-white/50 hover:text-white transition-colors">Cancel</button>
                <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-primary transition-colors">Save Parameters</button>
            </div>
        </div>
    );
};

export default Profile;
