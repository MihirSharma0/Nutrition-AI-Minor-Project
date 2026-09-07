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
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6 text-accent-green">AI Diet Plan Generator</h1>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <form onSubmit={generatePlan} className="space-y-4">
                    <div>
                        <label className="block text-white/70 mb-2">What are your health goals?</label>
                        <input 
                            type="text" 
                            value={goals} 
                            onChange={e => setGoals(e.target.value)}
                            placeholder="e.g. Lose 5kg in 2 months, build muscle..."
                            required
                            className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green"
                        />
                    </div>
                    <div>
                        <label className="block text-white/70 mb-2">Any allergies or dietary restrictions?</label>
                        <input 
                            type="text" 
                            value={allergies} 
                            onChange={e => setAllergies(e.target.value)}
                            placeholder="e.g. Vegan, Gluten-free, Peanut allergy..."
                            className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-green"
                        />
                    </div>
                    <button type="submit" disabled={loading} className="px-6 py-3 bg-accent-green hover:bg-green-600 disabled:bg-green-800 text-white font-semibold rounded-lg transition-colors">
                        {loading ? 'Generating Plan...' : 'Generate My Diet Plan'}
                    </button>
                </form>
            </div>

            {plan && (
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-accent-green">Your Personalized Plan</h2>
                    <div className="whitespace-pre-wrap text-white/80 leading-relaxed">
                        {plan}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiDietGenerator;
