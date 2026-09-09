import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import api from '../../../api/axios';
import { User, Award, CheckCircle, Shield } from 'lucide-react';

const NutritionistProfile = () => {
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    // Form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [credentials, setCredentials] = useState('');
    
    const [message, setMessage] = useState({ text: '', type: '' });

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName || '');
            setLastName(user.lastName || '');
        }
        fetchProfile();
    }, [user]);

    const fetchProfile = async () => {
        try {
            const response = await api.get('/nutritionist/profile');
            const data = response.data;
            setProfile(data);
            setSpecialization(data.specialization || '');
            setCredentials(data.credentials || '');
        } catch (error) {
            console.error("Error fetching nutritionist profile:", error);
            setMessage({ text: 'Failed to load profile details.', type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage({ text: '', type: '' });
        
        try {
            await api.put('/nutritionist/profile', {
                firstName,
                lastName,
                specialization,
                credentials
            });
            setMessage({ text: 'Profile updated successfully!', type: 'success' });
            
            // Re-fetch to confirm
            fetchProfile();
        } catch (error) {
            console.error("Error updating profile:", error);
            setMessage({ text: 'Failed to update profile.', type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a5d391]"></div>
            </div>
        );
    }

    return (
        <div className="flex-1 p-6 lg:p-8 max-w-4xl mx-auto w-full">
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-hero-display flex items-center gap-3">
                    <Shield className="w-8 h-8 text-[#a5d391]" />
                    Professional Profile
                </h1>
                <p className="text-slate-400 text-sm">Manage your public information and credentials.</p>
            </div>
            
            {message.text && (
                <div className={`p-4 rounded-xl mb-6 text-sm flex items-center gap-2 ${
                    message.type === 'success' 
                        ? 'bg-[#a5d391]/10 border border-[#a5d391]/30 text-[#a5d391]' 
                        : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                    {message.type === 'success' ? <CheckCircle className="w-4 h-4" /> : null}
                    {message.text}
                </div>
            )}

            <div className="bg-[#090d16]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 lg:p-8 shadow-2xl">
                <form onSubmit={handleSave} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* First Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
                                <User className="w-3.5 h-3.5" />
                                First Name
                            </label>
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-[#0d121c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-[#a5d391]/60 focus:ring-1 focus:ring-[#a5d391]/20 focus:outline-none transition-all"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
                                <User className="w-3.5 h-3.5" />
                                Last Name
                            </label>
                            <input 
                                type="text" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-[#0d121c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-[#a5d391]/60 focus:ring-1 focus:ring-[#a5d391]/20 focus:outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
                            <Award className="w-3.5 h-3.5" />
                            Specialization
                        </label>
                        <input 
                            type="text" 
                            value={specialization} 
                            onChange={(e) => setSpecialization(e.target.value)}
                            placeholder="e.g. Sports Nutrition, Weight Management"
                            className="w-full bg-[#0d121c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-[#a5d391]/60 focus:ring-1 focus:ring-[#a5d391]/20 focus:outline-none transition-all"
                            required
                        />
                        <p className="text-[10px] text-slate-500 mt-1">Your primary area of expertise.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold tracking-wider uppercase text-slate-400 flex items-center gap-2">
                            <Shield className="w-3.5 h-3.5" />
                            Credentials & Certifications
                        </label>
                        <textarea 
                            value={credentials} 
                            onChange={(e) => setCredentials(e.target.value)}
                            placeholder="e.g. Registered Dietitian (RD), Certified Nutrition Specialist (CNS)"
                            className="w-full h-24 bg-[#0d121c] border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-[#a5d391]/60 focus:ring-1 focus:ring-[#a5d391]/20 focus:outline-none transition-all resize-none"
                        ></textarea>
                        <p className="text-[10px] text-slate-500 mt-1">List your relevant degrees and certifications.</p>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={saving}
                            className="px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest text-black bg-[#a5d391] hover:bg-white active:bg-slate-200 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_0_20px_rgba(165,211,145,0.2)]"
                        >
                            {saving ? 'Saving...' : 'Save Profile'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NutritionistProfile;
