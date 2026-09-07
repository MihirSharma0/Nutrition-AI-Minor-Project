import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ArrowLeft, Sparkles, Target, TrendingUp, Users } from 'lucide-react';
import Starfield from '../../components/Starfield';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'USER',
        credentials: '',
        specialization: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        const result = await register(formData);
        if (result.success) {
            setSuccess('Registration successful! Please verify your account.');
            setTimeout(() => navigate(`/verify-otp?email=${encodeURIComponent(formData.email)}`), 2000);
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-4 md:p-8 font-body-md overflow-hidden relative">
            <Starfield />
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md cursor-pointer"
            >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
            </button>

            <div className="flex flex-col md:flex-row w-full max-w-[1000px] min-h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden relative z-10">

                {/* Left Side - Brand & Features */}
                <div className="w-full md:w-[45%] bg-black/20 text-white p-10 md:p-12 hidden md:flex flex-col justify-center border-r border-white/5">
                    <div className="flex items-center gap-2 text-3xl font-bold font-headline-lg mb-4">
                        <Sparkles className="w-8 h-8 text-green-400" />
                        <span>AI CalorieMeter</span>
                    </div>
                    <p className="text-lg text-gray-400 mb-12">
                        Track, analyze, and optimize your nutrition with AI
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                                <Target className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg mb-1">Smart Tracking</h3>
                                <p className="text-sm text-gray-400">Log meals instantly and let AI calculate your calories</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg mb-1">Personalized Insights</h3>
                                <p className="text-sm text-gray-400">Get tailored macro recommendations based on your goals</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
                                <Users className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg mb-1">Expert Guidance</h3>
                                <p className="text-sm text-gray-400">Connect with dietitians to accelerate your progress</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-[55%] p-10 bg-transparent flex flex-col justify-center my-auto">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-3xl font-headline-lg font-bold text-center text-white mb-2">Create Account</h2>
                        <p className="text-center text-gray-400 mb-6">Join us to start your journey</p>

                        {error && <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-xl mb-6 text-sm">{error}</div>}
                        {success && <div className="bg-green-500/20 border border-green-500/50 text-green-200 p-3 rounded-xl mb-6 text-sm">{success}</div>}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">First Name</label>
                                    <input
                                        type="text" name="firstName"
                                        className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                        onChange={handleChange} required
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">Last Name</label>
                                    <input
                                        type="text" name="lastName"
                                        className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                        onChange={handleChange} required
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                                <input
                                    type="email" name="email"
                                    className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                    onChange={handleChange} required
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                                <input
                                    type="password" name="password" minLength="6"
                                    className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                    onChange={handleChange} required
                                    placeholder="••••••••"
                                />
                            </div>
                            
                            {formData.role === 'NUTRITIONIST' && (
                                <>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Credentials / Qualifications</label>
                                        <input
                                            type="text" name="credentials"
                                            className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                            onChange={handleChange} required
                                            placeholder="e.g., MS, RD, CDN"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">Specialization</label>
                                        <input
                                            type="text" name="specialization"
                                            className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                            onChange={handleChange} required
                                            placeholder="e.g., Sports Nutrition"
                                        />
                                    </div>
                                </>
                            )}
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Account Type</label>
                                <select
                                    name="role"
                                    className="w-full px-4 py-2.5 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors appearance-none"
                                    onChange={handleChange} required
                                    value={formData.role}
                                >
                                    <option value="USER" className="bg-[#080b12]">User</option>
                                    <option value="NUTRITIONIST" className="bg-[#080b12]">Nutritionist</option>
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all mt-4 text-[15px]">
                                Sign Up
                            </button>
                        </form>

                        <div className="mt-6 text-center text-gray-400 text-sm">
                            Already have an account? <Link to="/login" className="text-green-400 font-bold hover:text-green-300">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
