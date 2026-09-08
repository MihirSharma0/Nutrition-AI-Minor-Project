import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ArrowLeft, Sparkles, Target, TrendingUp, Users, Eye, EyeOff, Shield, Activity, Users as UsersIcon } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import Starfield from '../../components/Starfield';
import { getDashboardUrl } from '../../utils/roleUtils';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState('USER');
    const [error, setError] = useState('');
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = async (tokenResponse) => {
        try {
            const result = await googleLogin(tokenResponse.access_token);
            if (result.success) {
                navigate(getDashboardUrl(result.role));
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Google login failed. Please try again.');
        }
    };

    const loginWithGoogle = useGoogleLogin({
        onSuccess: handleGoogleLoginSuccess,
        onError: () => setError('Google login failed. Please try again.'),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        // We pass email and password, the backend handles the role internally
        const result = await login(email, password);
        if (result.success) {
            navigate(getDashboardUrl(result.role));
        } else {
            setError(result.message);
        }
    };

    const roleContent = {
        USER: {
            title: "User Portal",
            subtitle: "Track, analyze, and optimize your nutrition with AI",
            placeholder: "john@example.com",
            features: [
                { icon: Target, title: "Smart Tracking", desc: "Log meals instantly and let AI calculate your calories" },
                { icon: TrendingUp, title: "Personalized Insights", desc: "Get tailored macro recommendations based on your goals" },
                { icon: UsersIcon, title: "Expert Guidance", desc: "Connect with dietitians to accelerate your progress" }
            ]
        },
        NUTRITIONIST: {
            title: "Nutritionist Portal",
            subtitle: "Empower your clients with AI-driven nutritional tools",
            placeholder: "dr.smith@example.com",
            features: [
                { icon: UsersIcon, title: "Client Management", desc: "Monitor all your clients' progress in one unified dashboard" },
                { icon: Target, title: "Custom Plans", desc: "Create and assign personalized meal plans easily" },
                { icon: Activity, title: "Outcome Tracking", desc: "Analyze adherence and tweak protocols in real-time" }
            ]
        },
        ADMIN: {
            title: "Admin Portal",
            subtitle: "Manage and scale the AI CalorieMeter platform",
            placeholder: "admin@example.com",
            features: [
                { icon: Shield, title: "System Overview", desc: "Monitor platform health, active users, and system metrics" },
                { icon: UsersIcon, title: "User Management", desc: "Handle user roles, permissions, and account statuses" },
                { icon: TrendingUp, title: "Analytics", desc: "Track platform growth, revenue, and engagement trends" }
            ]
        }
    };

    const currentContent = roleContent[activeTab];

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

            <div className="flex flex-col md:flex-row w-full max-w-[1000px] min-h-[600px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden relative z-10 transition-all duration-500">
                
                {/* Left Side - Brand & Features */}
                <div className="w-full md:w-[45%] bg-black/20 text-white p-10 md:p-12 flex flex-col justify-center border-r border-white/5 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-3xl font-bold font-headline-lg mb-4">
                            <Sparkles className="w-8 h-8 text-green-400" />
                            <span>AI CalorieMeter</span>
                        </div>
                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-green-400 font-semibold mb-3">
                            {currentContent.title}
                        </div>
                        <p className="text-lg text-gray-400 mb-10 h-14">
                            {currentContent.subtitle}
                        </p>

                        <div className="space-y-8">
                            {currentContent.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shrink-0">
                                        <feature.icon className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white text-lg mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-400">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-[55%] p-10 md:p-14 flex flex-col justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <h2 className="text-3xl font-headline-lg font-bold text-center text-white mb-2">Welcome Back</h2>
                        <p className="text-center text-gray-400 mb-8">Sign in to your {activeTab === 'USER' ? 'user' : activeTab.toLowerCase()} account</p>
                        
                        {/* Role Tabs */}
                        <div className="flex bg-black/30 p-1.5 rounded-xl mb-8 border border-white/5">
                            {['USER', 'NUTRITIONIST', 'ADMIN'].map((role) => (
                                <button
                                    key={role}
                                    type="button"
                                    onClick={() => setActiveTab(role)}
                                    className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                                        activeTab === role 
                                        ? 'bg-green-500/20 text-green-400 shadow-lg' 
                                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                                    }`}
                                >
                                    {role === 'USER' ? 'User' : role === 'NUTRITIONIST' ? 'Nutritionist' : 'Admin'}
                                </button>
                            ))}
                        </div>

                        {error && (
                            <div className="bg-red-500/20 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                    placeholder={currentContent.placeholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"} 
                                        className="w-full px-4 py-3 pr-12 bg-black/30 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400/50 transition-colors placeholder-gray-600"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold py-3.5 rounded-xl hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all mt-6 text-[15px]"
                            >
                                Sign In as {activeTab === 'USER' ? 'User' : activeTab === 'NUTRITIONIST' ? 'Nutritionist' : 'Admin'}
                            </button>
                        </form>

                        <div className="flex items-center gap-4 my-8">
                            <div className="h-px bg-white/10 flex-1"></div>
                            <span className="text-xs text-gray-500 font-semibold tracking-wider">OR CONTINUE WITH</span>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>

                        <button 
                            type="button"
                            onClick={() => loginWithGoogle()}
                            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white font-semibold text-[15px]"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>

                        <p className="text-center text-sm text-gray-400 mt-8">
                            Don't have an account? <Link to="/register" className="text-green-400 font-bold hover:text-green-300">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
