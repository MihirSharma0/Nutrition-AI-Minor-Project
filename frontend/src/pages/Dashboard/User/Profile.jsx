import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import api from '../../../api/axios';

const Profile = () => {
    const { user } = useContext(AuthContext);
    
    const [profile, setProfile] = useState({
        age: '',
        gender: 'Male',
        heightCm: '',
        weightKg: '',
        activityLevel: 'Sedentary',
        goal: 'General Nutrition',
        dietType: 'Non-Vegetarian',
        allergies: '',
        favoriteFoods: '',
        dislikedFoods: '',
        lifestyleClass: 'Middle-Class',
        mealBudget: 'Budget/Affordable'
    });
    
    const [targets, setTargets] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/api/profiles/me');
                if (res.data) {
                    setProfile({
                        age: res.data.age || '',
                        gender: res.data.gender || 'Male',
                        heightCm: res.data.heightCm || '',
                        weightKg: res.data.weightKg || '',
                        activityLevel: res.data.activityLevel || 'Sedentary',
                        goal: res.data.goal || 'General Nutrition',
                        dietType: res.data.dietType || 'Non-Vegetarian',
                        allergies: res.data.allergies || '',
                        favoriteFoods: res.data.favoriteFoods || '',
                        dislikedFoods: res.data.dislikedFoods || '',
                        lifestyleClass: res.data.lifestyleClass || 'Middle-Class',
                        mealBudget: res.data.mealBudget || 'Budget/Affordable'
                    });
                    if (res.data.dailyCaloriesTarget) {
                        setTargets({
                            calories: res.data.dailyCaloriesTarget,
                            protein: res.data.proteinTarget,
                            carbs: res.data.carbsTarget,
                            fats: res.data.fatsTarget,
                            tdee: res.data.tdee,
                            bmr: res.data.bmr
                        });
                    }
                }
            } catch (err) {
                console.error("Failed to load profile", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        // Basic physiological validation
        if (profile.age && profile.age <= 0) {
            setMessage({ type: 'error', text: 'Age must be positive' });
            return;
        }
        if (profile.heightCm && profile.heightCm <= 0) {
            setMessage({ type: 'error', text: 'Height must be positive' });
            return;
        }
        if (profile.weightKg && profile.weightKg <= 0) {
            setMessage({ type: 'error', text: 'Weight must be positive' });
            return;
        }

        setSaving(true);
        setMessage({ type: '', text: '' });
        try {
            const res = await api.put('/api/profiles/me', profile);
            if (res.data && res.data.dailyCaloriesTarget) {
                setTargets({
                    calories: res.data.dailyCaloriesTarget,
                    protein: res.data.proteinTarget,
                    carbs: res.data.carbsTarget,
                    fats: res.data.fatsTarget,
                    tdee: res.data.tdee,
                    bmr: res.data.bmr
                });
            }
            setMessage({ type: 'success', text: 'Profile updated and targets recalculated!' });
        } catch (err) {
            setMessage({ type: 'error', text: 'Failed to update profile' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-white">Loading profile...</div>;
    }

    return (
        <div className="w-full max-w-4xl">
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">Subject Profile</h1>
            
            {message.text && (
                <div className={`p-4 mb-6 rounded-2xl border ${message.type === 'success' ? 'bg-[#a5d391]/10 border-[#a5d391] text-[#a5d391]' : 'bg-red-500/10 border-red-500 text-red-500'}`}>
                    {message.text}
                </div>
            )}

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 mb-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8 pb-8 border-b border-white/10">
                    <img 
                        src={user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || user?.username || 'User')}&background=a5d391&color=000`} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-[#080b12] outline outline-2 outline-[#a5d391]/50 shadow-2xl"
                    />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-1 font-hero-display">{user?.firstName} {user?.lastName}</h2>
                        <div className="text-white/50 text-sm mb-4">{user?.email}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Personal Info */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Age</label>
                        <input type="number" name="age" value={profile.age} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="Years" />
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Gender</label>
                        <select name="gender" value={profile.gender} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Height (cm)</label>
                        <input type="number" name="heightCm" value={profile.heightCm} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="cm" />
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Weight (kg)</label>
                        <input type="number" name="weightKg" value={profile.weightKg} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="kg" />
                    </div>

                    {/* Goals & Activity */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Primary Goal</label>
                        <select name="goal" value={profile.goal} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>General Nutrition</option>
                            <option>Weight Loss</option>
                            <option>Weight Maintenance</option>
                            <option>Muscle Gain</option>
                            <option>Strength-Performance</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Activity Level</label>
                        <select name="activityLevel" value={profile.activityLevel} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Sedentary</option>
                            <option>Lightly Active</option>
                            <option>Moderately Active</option>
                            <option>Very Active</option>
                            <option>Highly Active-Athlete</option>
                        </select>
                    </div>

                    {/* Dietary Preferences */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Diet Type</label>
                        <select name="dietType" value={profile.dietType} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Vegetarian</option>
                            <option>Non-Vegetarian</option>
                            <option>Vegan</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Allergies</label>
                        <input type="text" name="allergies" value={profile.allergies} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="e.g. Milk, Nuts, Gluten" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Favorite Foods</label>
                        <input type="text" name="favoriteFoods" value={profile.favoriteFoods} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="What do you love to eat?" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Disliked Foods</label>
                        <input type="text" name="dislikedFoods" value={profile.dislikedFoods} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white outline-none focus:border-[#a5d391]/50 transition-colors" placeholder="What do you avoid?" />
                    </div>

                    {/* Lifestyle & Budget */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Lifestyle Class</label>
                        <select name="lifestyleClass" value={profile.lifestyleClass} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Middle-Class</option>
                            <option>High-Income Class</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-[#a5d391] mb-2 block">Preferred Meal Budget</label>
                        <select name="mealBudget" value={profile.mealBudget} onChange={handleChange} className="w-full bg-[#080b12]/80 border border-white/10 px-4 py-3.5 rounded-2xl font-bold text-white appearance-none outline-none focus:border-[#a5d391]/50 transition-colors">
                            <option>Budget/Affordable</option>
                            <option>High/Premium</option>
                        </select>
                    </div>
                </div>
            </div>

            {targets && (
                <div className="bg-white/5 backdrop-blur-xl border border-[#38bdf8]/30 rounded-[2.5rem] p-8 mb-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-[#38bdf8]">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.8L18.2 19H5.8L12 5.8z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold font-hero-display mb-6 text-[#38bdf8]">Calculated Nutrition Targets</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#080b12]/80 p-4 rounded-2xl border border-white/10 text-center">
                            <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Calories</div>
                            <div className="text-2xl font-bold text-white">{targets.calories} <span className="text-xs font-normal">kcal</span></div>
                        </div>
                        <div className="bg-[#080b12]/80 p-4 rounded-2xl border border-white/10 text-center">
                            <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Protein</div>
                            <div className="text-2xl font-bold text-[#a5d391]">{targets.protein} <span className="text-xs font-normal">g</span></div>
                        </div>
                        <div className="bg-[#080b12]/80 p-4 rounded-2xl border border-white/10 text-center">
                            <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Carbs</div>
                            <div className="text-2xl font-bold text-[#38bdf8]">{targets.carbs} <span className="text-xs font-normal">g</span></div>
                        </div>
                        <div className="bg-[#080b12]/80 p-4 rounded-2xl border border-white/10 text-center">
                            <div className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Fats</div>
                            <div className="text-2xl font-bold text-yellow-400">{targets.fats} <span className="text-xs font-normal">g</span></div>
                        </div>
                    </div>
                    <div className="mt-4 text-xs text-white/40 text-center">
                        BMR: {Math.round(targets.bmr)} kcal | TDEE: {Math.round(targets.tdee)} kcal
                    </div>
                </div>
            )}

            <div className="flex justify-end gap-4 pb-8">
                <button className="px-6 py-3 rounded-2xl font-bold text-white/50 hover:text-white transition-colors cursor-pointer">Cancel</button>
                <button onClick={handleSave} disabled={saving} className="bg-[#a5d391] text-black px-8 py-3.5 rounded-2xl font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer disabled:opacity-50">
                    {saving ? 'Calculating...' : 'Save Parameters'}
                </button>
            </div>
        </div>
    );
};

export default Profile;
