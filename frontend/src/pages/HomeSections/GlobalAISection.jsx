import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GlobalAISection = () => {
    const aiFeatures = [
        { title: "Diet Plan Generator", desc: "Instantly create weekly meal plans based on your precise caloric needs and macro goals.", icon: "restaurant" },
        { title: "Food Calorie Scanner", desc: "Snap a photo of your meal and let AI estimate the calories and macronutrients instantly.", icon: "document_scanner" },
        { title: "Recommendation Engine", desc: "Get smart suggestions for snacks and meals when you are under or over your daily targets.", icon: "tips_and_updates" },
        { title: "Grocery List Generator", desc: "Automatically compile an organized shopping list from your active meal plan.", icon: "shopping_cart" },
        { title: "Health Report Generator", desc: "Generate comprehensive PDFs detailing your weekly progress and biometric changes.", icon: "summarize" },
        { title: "Nutrition Chatbot", desc: "Ask complex nutritional questions and get evidence-based answers 24/7.", icon: "forum" },
        { title: "Water Reminder", desc: "Smart hydration alerts adjusted for your activity level and local weather.", icon: "water_drop" },
        { title: "Progress Analyzer", desc: "Identify trends and plateaus before they happen with predictive analytics.", icon: "analytics" },
        { title: "Transformation Tracker", desc: "Visually map your body composition changes with AI-enhanced photo analysis.", icon: "photo_camera" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleWheel = (e) => {
        if (isScrolling) return;
        
        setIsScrolling(true);
        if (e.deltaY > 0) {
            // Scroll down -> next item
            setActiveIndex((prev) => (prev + 1) % aiFeatures.length);
        } else if (e.deltaY < 0) {
            // Scroll up -> previous item
            setActiveIndex((prev) => (prev - 1 + aiFeatures.length) % aiFeatures.length);
        }

        // Prevent rapid firing
        setTimeout(() => {
            setIsScrolling(false);
        }, 600); // match animation duration roughly
    };

    return (
        <section className="py-24 relative z-20 overflow-hidden min-h-[900px] flex items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side: Header & Controls */}
                <div className="text-center lg:text-left mb-16 lg:mb-0">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Premium AI Suite
                    </span>
                    <h2 className="font-hero-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">The Future of Nutrition is Autonomous</h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                        Unlock the full potential of your health journey with our proprietary suite of artificial intelligence tools, designed to remove all friction from diet tracking.
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <button 
                            onClick={() => setActiveIndex((prev) => (prev - 1 + aiFeatures.length) % aiFeatures.length)}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_upward</span>
                        </button>
                        <button 
                            onClick={() => setActiveIndex((prev) => (prev + 1) % aiFeatures.length)}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_downward</span>
                        </button>
                    </div>
                </div>

                {/* Right Side: 3D Infinite Vertical Carousel */}
                <div 
                    className="relative h-[600px] w-full max-w-md mx-auto perspective-[1200px]"
                    onWheel={handleWheel}
                >
                    {/* Removed preserve-3d to fix Safari/WebKit hit testing bugs, forcing zIndex to work reliably */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {aiFeatures.map((feature, idx) => {
                            // Calculate shortest distance in a circular array
                            let distance = (idx - activeIndex + aiFeatures.length) % aiFeatures.length;
                            if (distance > Math.floor(aiFeatures.length / 2)) {
                                distance -= aiFeatures.length;
                            }

                            // Math logic for the 3D visual effect
                            const yOffset = distance * 140; 
                            const zOffset = -Math.abs(distance) * 40; // Reduced depth 
                            const rotateX = distance * -10; 
                            const scale = 1 - Math.abs(distance) * 0.05; 
                            const opacity = Math.max(0.2, 1 - Math.abs(distance) * 0.2); 
                            const zIndex = 20 - Math.abs(distance);
                            
                            return (
                                <motion.div
                                    key={idx}
                                    className={`absolute w-full bg-[#0a0d16]/80 backdrop-blur-xl border ${distance === 0 ? 'border-primary/50 shadow-[0_0_40px_rgba(163,230,53,0.15)]' : 'border-white/10 hover:border-white/30'} rounded-3xl p-6 md:p-8 cursor-pointer`}
                                    onClick={() => {
                                        if (distance === 0) {
                                            setSelectedFeature(feature);
                                        } else {
                                            setActiveIndex(idx);
                                        }
                                    }}
                                    animate={{
                                        y: yOffset,
                                        z: zOffset,
                                        rotateX: rotateX,
                                        scale: scale,
                                        opacity: opacity,
                                        zIndex: zIndex
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        mass: 1
                                    }}
                                    style={{
                                        transformOrigin: "center center"
                                    }}
                                >
                                    <div className="flex items-start gap-6 pointer-events-none">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 ${distance === 0 ? 'bg-primary/20 border border-primary/30' : 'bg-black/50 border border-white/5'}`}>
                                            <span className={`material-symbols-outlined text-2xl transition-colors duration-500 ${distance === 0 ? 'text-primary' : 'text-white/50'}`}>{feature.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${distance === 0 ? 'text-white' : 'text-white/70'}`}>{feature.title}</h3>
                                            <p className={`text-sm leading-relaxed transition-colors duration-500 ${distance === 0 ? 'text-white/70' : 'text-white/40'}`}>
                                                {feature.desc}
                                            </p>
                                            
                                            {/* Explore CTA only visible for active card */}
                                            <div className={`overflow-hidden transition-all duration-500 ${distance === 0 ? 'max-h-20 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                                                <button className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                                    Explore Tool <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>

            {/* Modal Popup for Selected Feature */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedFeature(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#080b12] border border-primary/30 rounded-[3rem] p-8 md:p-12 max-w-xl w-full relative shadow-[0_0_100px_rgba(163,230,53,0.1)] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            
                            <button 
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>

                            <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-3xl flex items-center justify-center mb-8">
                                <span className="material-symbols-outlined text-primary text-4xl">{selectedFeature.icon}</span>
                            </div>

                            <h3 className="font-hero-display text-3xl font-bold text-white mb-4">
                                {selectedFeature.title}
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                {selectedFeature.desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-white transition-colors shadow-[0_0_30px_rgba(163,230,53,0.2)]">
                                    Initialize Tool
                                </button>
                                <button className="flex-1 border border-white/20 text-white font-bold px-8 py-4 rounded-full hover:bg-white/5 transition-colors">
                                    Read Documentation
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GlobalAISection;
