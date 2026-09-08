import React, { useState } from 'react';
import api from '../../../api/axios';

const AiDietGenerator = () => {
    const [goals, setGoals] = useState('');
    const [allergies, setAllergies] = useState('');
    const [plan, setPlan] = useState('');
    const [loading, setLoading] = useState(false);

    const generatePlan = async (e) => {
        e.preventDefault();
        setLoading(true);
        setPlan('');

        try {
            const response = await api.post('/ai/diet-plan', { goals, allergies });
            setPlan(response.data.plan);
        } catch (error) {
            console.error("Error generating plan", error);
            setPlan("Failed to generate diet plan. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">AI Diet Plan Generator</h1>
            
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 mb-8 shadow-xl">
                <form onSubmit={generatePlan} className="space-y-6">
                    <div>
                        <label className="block text-[#a5d391] text-xs font-bold uppercase tracking-widest mb-2">What are your health goals?</label>
                        <input 
                            type="text" 
                            value={goals} 
                            onChange={e => setGoals(e.target.value)}
                            placeholder="e.g. Lose 5kg in 2 months, build muscle..."
                            required
                            className="w-full bg-[#080b12]/80 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 outline-none focus:border-[#a5d391]/50 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-[#a5d391] text-xs font-bold uppercase tracking-widest mb-2">Any allergies or dietary restrictions?</label>
                        <input 
                            type="text" 
                            value={allergies} 
                            onChange={e => setAllergies(e.target.value)}
                            placeholder="e.g. Vegan, Gluten-free, Peanut allergy..."
                            className="w-full bg-[#080b12]/80 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 outline-none focus:border-[#a5d391]/50 transition-colors"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="px-8 py-4 bg-[#a5d391] hover:bg-white disabled:opacity-50 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer">
                        {loading ? 'Generating Plan...' : 'Generate My Diet Plan'}
                    </button>
                </form>
            </div>

            {plan && (
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-xl">
                    <h2 className="text-xl font-bold mb-4 text-[#a5d391] font-hero-display">Your Personalized Plan</h2>
                    <div className="whitespace-pre-wrap text-white/80 leading-relaxed font-body-md">
                        {plan}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiDietGenerator;
