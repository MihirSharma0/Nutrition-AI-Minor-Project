import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import Starfield from '../components/Starfield';
import FeatureComparisonTable from './PricingSections/FeatureComparisonTable';
import PricingFAQ from './PricingSections/PricingFAQ';

const PricingCard = ({ plan, isYearly, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Spotlight gradient tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Tilt calculations
        const width = rect.width;
        const height = rect.height;
        const mouseXLocal = e.clientX - rect.left;
        const mouseYLocal = e.clientY - rect.top;
        
        const xPct = mouseXLocal / width - 0.5;
        const yPct = mouseYLocal / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);

        // Spotlight calculations
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const monthlyPrice = plan.monthlyPrice;
    const yearlyPrice = plan.yearlyPrice;
    const currentPrice = isYearly ? yearlyPrice : monthlyPrice;

    // Framer motion variants
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2 + (index * 0.1)
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
            className={`relative flex flex-col p-8 md:p-10 rounded-[2.5rem] w-full h-full max-w-sm mx-auto backdrop-blur-xl border ${plan.isFeatured ? 'bg-white/10 border-primary/40' : 'bg-white/5 border-white/10'} shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] group`}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${plan.spotlightColor}, transparent 40%)`
                    ),
                }}
            />

            {/* Anti-Gravity Floating Badge for Featured */}
            {plan.isFeatured && (
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    style={{ translateZ: 50 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#38bdf8] text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(163,230,53,0.5)] flex items-center gap-2 border border-white/20 backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4" /> Most Popular
                </motion.div>
            )}

            {/* Content Container (Lifted in 3D) */}
            <div style={{ transform: "translateZ(30px)" }} className="flex flex-col h-full relative z-10">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${plan.textColor}`}>
                            <plan.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    </div>
                    
                    <p className="text-white/50 text-sm mb-6 h-10">{plan.description}</p>
                    
                    <div className="flex items-end gap-2 mb-2">
                        <AnimatePresence mode="wait">
                            <motion.span 
                                key={currentPrice}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${plan.gradientText}`}
                            >
                                ${currentPrice}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-white/40 font-medium mb-1 tracking-wide">/ month</span>
                    </div>
                    {isYearly && <p className="text-primary text-xs font-bold tracking-widest uppercase">Billed Annually</p>}
                </div>

                <motion.ul 
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-4 mb-10 flex-grow"
                >
                    {plan.features.map((feature, i) => (
                        <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${plan.isFeatured ? 'bg-primary/20 border-primary/50 text-primary' : 'bg-white/5 border-white/20 text-white/60'}`}>
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-white/70 text-sm">{feature}</span>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Magnetic Hover CTA */}
                <button className={`relative w-full py-4 rounded-2xl font-bold transition-all duration-300 overflow-hidden group/btn ${plan.isFeatured ? 'bg-primary text-black hover:shadow-[0_0_40px_rgba(163,230,53,0.4)]' : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'}`}>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        {plan.ctaText}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                </button>
            </div>
        </motion.div>
    );
};

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: "Starter",
            icon: Shield,
            monthlyPrice: 0,
            yearlyPrice: 0,
            description: "Begin your journey into metabolic optimization.",
            features: [
                "Basic biometric tracking",
                "Daily calorie target generation",
                "Standard recipe suggestions",
                "Community support forum access"
            ],
            ctaText: "Start Free",
            isFeatured: false,
            gradientText: "from-white to-white/50",
            textColor: "text-white",
            spotlightColor: "rgba(255,255,255,0.05)"
        },
        {
            name: "Pro",
            icon: Zap,
            monthlyPrice: 29,
            yearlyPrice: 24,
            description: "Full integration with your wearable ecosystem.",
            features: [
                "Real-time wearable sync (Oura, Apple, Whoop)",
                "Dynamic macronutrient shifting",
                "Generative AI recipe crafting",
                "Advanced sleep & HRV analysis",
                "Priority node support"
            ],
            ctaText: "Begin Symbiosis",
            isFeatured: true,
            gradientText: "from-primary to-[#38bdf8]",
            textColor: "text-primary",
            spotlightColor: "rgba(163,230,53,0.15)"
        },
        {
            name: "Enterprise",
            icon: Sparkles,
            monthlyPrice: 99,
            yearlyPrice: 79,
            description: "The ultimate tier for professional bio-hackers.",
            features: [
                "Continuous blood glucose sync (CGM)",
                "DNA-based metabolic baseline",
                "1-on-1 algorithmic biologist consultation",
                "Custom ingredient sourcing APIs",
                "Early access to alpha protocols"
            ],
            ctaText: "Achieve Singularity",
            isFeatured: false,
            gradientText: "from-[#38bdf8] to-purple-500",
            textColor: "text-[#38bdf8]",
            spotlightColor: "rgba(56,189,248,0.1)"
        }
    ];

    return (
        <div className="relative bg-[#080b12] min-h-screen pt-32 pb-32 overflow-hidden flex flex-col font-body-md text-white selection:bg-primary-container selection:text-on-primary-container perspective-[2000px]">
            <Starfield />
            
            <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-[#38bdf8]"></span>
                        <span className="font-label-caps text-[#38bdf8] uppercase font-bold tracking-widest drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">Protocol Tiers</span>
                        <span className="w-8 h-px bg-[#38bdf8]"></span>
                    </div>
                    <h1 className="font-hero-display text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Calibrate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#38bdf8] to-purple-500 italic drop-shadow-2xl">evolution</span>.
                    </h1>
                    
                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-6 mt-12">
                        <span className={`font-bold tracking-widest uppercase text-sm transition-colors ${!isYearly ? 'text-white' : 'text-white/40'}`}>Monthly</span>
                        
                        <div 
                            className="w-20 h-10 bg-white/10 border border-white/20 rounded-full relative cursor-pointer flex items-center px-1 shadow-inner"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <motion.div 
                                className="w-8 h-8 bg-gradient-to-br from-primary to-[#38bdf8] rounded-full shadow-[0_0_15px_rgba(163,230,53,0.6)]"
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                style={{ marginLeft: isYearly ? "calc(100% - 2rem)" : "0" }}
                            />
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <span className={`font-bold tracking-widest uppercase text-sm transition-colors ${isYearly ? 'text-white' : 'text-white/40'}`}>Yearly</span>
                            <motion.div 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="bg-primary/20 border border-primary/50 text-primary px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                            >
                                Save 20%
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto pb-20 mt-12 md:mt-16 px-4">
                    {plans.map((plan, index) => (
                        <div key={index} className={`perspective-[1500px] w-full h-full flex transition-transform duration-500 ${plan.isFeatured ? 'md:scale-110 z-10' : 'z-0'}`}>
                            <PricingCard plan={plan} isYearly={isYearly} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Appended New Sections */}
            <FeatureComparisonTable />
            <PricingFAQ />

            {/* Custom Shimmer Animation */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}} />
        </div>
    );
};

export default Pricing;
