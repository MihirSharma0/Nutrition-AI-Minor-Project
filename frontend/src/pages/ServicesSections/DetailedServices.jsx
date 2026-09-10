import React, { useState } from 'react';

const DetailedServices = () => {
    const services = [
        {
            title: "Weight Loss",
            icon: "monitor_weight",
            overview: "A sustainable, science-backed approach to reducing body fat while preserving lean muscle mass, eliminating the yo-yo diet cycle.",
            benefits: ["Increased metabolic rate", "Improved insulin sensitivity", "Enhanced energy levels", "Better joint health"],
            who: "Individuals struggling with excess weight, plateaus, or looking for a sustainable long-term fat loss solution.",
            process: "Initial biometric scan -> Resting metabolic rate calculation -> Custom deficit protocol -> Weekly AI macro adjustments.",
            results: "Consistent loss of 1-2 lbs of pure fat per week without extreme hunger or energy crashes."
        },
        {
            title: "Weight Gain",
            icon: "fitness_center",
            overview: "Strategic caloric surpluses combined with precise macronutrient timing to build lean muscle mass rather than unwanted adipose tissue.",
            benefits: ["Increased muscular hypertrophy", "Enhanced strength", "Hormonal optimization", "Improved athletic performance"],
            who: "Hardgainers, athletes looking to move up a weight class, or individuals recovering from severe weight loss.",
            process: "Body composition baseline -> Caloric surplus calculation -> Hypertrophy-focused meal timing -> Fortnightly lean mass checks.",
            results: "Steady, measurable increases in lean muscle mass with minimal fat accumulation."
        },
        {
            title: "PCOS Nutrition",
            icon: "water_drop",
            overview: "Specialized clinical protocols designed to manage insulin resistance, reduce inflammation, and restore hormonal balance in women with PCOS.",
            benefits: ["Regulated menstrual cycles", "Reduced androgenic symptoms", "Improved fertility odds", "Stabilized blood glucose"],
            who: "Women diagnosed with Polycystic Ovary Syndrome experiencing irregular cycles, weight gain, or hormonal imbalances.",
            process: "Endocrine blood panel review -> Low glycemic load structuring -> Anti-inflammatory protocol implementation -> Symptom tracking.",
            results: "Significant reduction in PCOS symptoms, natural cycle restoration, and easier weight management."
        },
        {
            title: "Diabetes Management",
            icon: "bloodtype",
            overview: "Medical nutrition therapy focused on stabilizing blood sugar levels, reducing A1C, and minimizing dependency on medications through dietary intervention.",
            benefits: ["Lowered HbA1c levels", "Reduced risk of complications", "Stable daily energy", "Improved cardiovascular health"],
            who: "Individuals diagnosed with Type 1, Type 2, or pre-diabetes seeking better glycemic control.",
            process: "CGM (Continuous Glucose Monitor) integration -> Carbohydrate periodization -> Fiber optimization -> Daily glucose review.",
            results: "Flattened glucose curves, reduced A1C, and improved overall metabolic function."
        },
        {
            title: "Pregnancy Nutrition",
            icon: "pregnant_woman",
            overview: "Comprehensive nutritional support for all three trimesters to ensure optimal fetal development and maternal health, while managing gestational symptoms.",
            benefits: ["Reduced risk of gestational diabetes", "Healthy fetal growth", "Managed maternal weight gain", "Decreased nausea and fatigue"],
            who: "Expecting mothers or women actively planning for conception.",
            process: "Trimester-specific macro adjustments -> Micronutrient supplementation review -> Gestational symptom management -> Postpartum planning.",
            results: "A healthy pregnancy trajectory, optimal nutrient delivery to the fetus, and a smoother postpartum recovery."
        },
        {
            title: "Child Nutrition",
            icon: "child_care",
            overview: "Establishing healthy relationships with food early in life, ensuring proper growth trajectories, and managing childhood obesity or picky eating behaviors.",
            benefits: ["Optimal physical growth", "Enhanced cognitive development", "Strong immune system", "Positive food psychology"],
            who: "Parents seeking nutritional guidance for their infants, toddlers, or adolescents.",
            process: "Growth chart analysis -> Pediatric macro allocation -> Behavior modification strategies -> Family meal integration.",
            results: "Improved eating habits, healthy growth percentiles, and reduced mealtime anxiety."
        },
        {
            title: "Sports Nutrition",
            icon: "sprint",
            overview: "Elite-level periodized nutrition mapped exactly to your training blocks to maximize endurance, strength output, and recovery speed.",
            benefits: ["Maximized glycogen stores", "Accelerated muscle recovery", "Delayed onset of fatigue", "Improved power-to-weight ratio"],
            who: "Competitive athletes, marathoners, bodybuilders, or highly active individuals.",
            process: "Training block analysis -> Pre/Intra/Post-workout nutrition mapping -> Hydration strategy -> Supplementation protocol.",
            results: "Personal best performances, reduced recovery times between sessions, and peak conditioning."
        },
        {
            title: "Gut Health",
            icon: "microbiology",
            overview: "Targeted elimination and reintroduction protocols to heal the gut lining, increase microbiome diversity, and eliminate digestive distress.",
            benefits: ["Elimination of bloating and gas", "Regular bowel movements", "Enhanced nutrient absorption", "Improved mood and immunity"],
            who: "Individuals suffering from IBS, IBD, chronic bloating, acid reflux, or food sensitivities.",
            process: "Symptom journaling -> Monash FODMAP or specialized elimination diet -> Strategic reintroduction -> Microbiome optimization.",
            results: "A symptom-free digestive system, identified trigger foods, and a resilient gut microbiome."
        },
        {
            title: "Heart Health",
            icon: "favorite",
            overview: "Cardioprotective dietary strategies designed to lower LDL cholesterol, reduce triglycerides, and manage hypertension through whole foods.",
            benefits: ["Lowered blood pressure", "Improved lipid panels", "Reduced arterial plaque risk", "Enhanced vascular function"],
            who: "Individuals with high cholesterol, hypertension, a family history of heart disease, or post-cardiac event patients.",
            process: "Lipid panel review -> Sodium and saturated fat auditing -> Mediterranean/DASH hybrid implementation -> Follow-up lab tracking.",
            results: "Normalized blood pressure, improved cholesterol ratios, and a significantly reduced cardiovascular risk profile."
        },
        {
            title: "Lifestyle Disease Management",
            icon: "health_and_safety",
            overview: "Holistic, anti-inflammatory dietary interventions to manage and often reverse chronic conditions rooted in modern lifestyle factors.",
            benefits: ["Reduced systemic inflammation", "Decreased medication reliance", "Improved mobility", "Enhanced quality of life"],
            who: "Individuals dealing with metabolic syndrome, fatty liver disease, gout, or autoimmune conditions.",
            process: "Comprehensive health audit -> Pro-inflammatory food elimination -> Antioxidant rich meal planning -> Sleep and stress integration.",
            results: "Reversal of metabolic markers, reduction in chronic pain, and a profound improvement in daily wellbeing."
        }
    ];

    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 relative z-20">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Specialized Care</span>
                <h2 className="font-hero-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Detailed Clinical Services</h2>
                <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                    Explore our comprehensive range of specialized protocols. Select a service below to view the clinical approach and expected outcomes.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
                {/* Sidebar Navigation */}
                <div className="lg:w-1/3 flex flex-col gap-2 h-[320px] sm:h-[420px] lg:h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {services.map((service, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setActiveIdx(idx)}
                            className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all ${activeIdx === idx ? 'bg-primary/20 border border-primary/30 shadow-[0_0_20px_rgba(64,104,50,0.2)]' : 'hover:bg-white/5 border border-transparent'}`}
                        >
                            <span className={`material-symbols-outlined ${activeIdx === idx ? 'text-primary' : 'text-white/40'}`}>{service.icon}</span>
                            <span className={`font-bold ${activeIdx === idx ? 'text-white' : 'text-white/60'}`}>{service.title}</span>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="lg:w-2/3">
                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 sm:p-8 md:p-12 min-h-[500px] sm:min-h-[600px] relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 p-6 sm:p-12 opacity-5 pointer-events-none">
                            <span className="material-symbols-outlined text-[8rem] sm:text-[12rem] text-white">{services[activeIdx].icon}</span>
                        </div>

                        <div className="relative z-10 flex-grow">
                            <div className="inline-flex items-center gap-3 mb-6">
                                <span className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                    <span className="material-symbols-outlined text-primary">{services[activeIdx].icon}</span>
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white">{services[activeIdx].title}</h3>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Overview</h4>
                                <p className="text-white/80 leading-relaxed text-base sm:text-lg">{services[activeIdx].overview}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                                <div>
                                    <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Key Benefits</h4>
                                    <ul className="space-y-2">
                                        {services[activeIdx].benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-2 text-white/70">
                                                <span className="material-symbols-outlined text-primary text-sm mt-1">check</span>
                                                <span className="text-sm">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Who is it for?</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">{services[activeIdx].who}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 border-t border-white/10 pt-8 mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <div>
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">account_tree</span> Process
                                </h4>
                                <p className="text-white/80 text-sm font-medium">{services[activeIdx].process}</p>
                            </div>
                            <div>
                                <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">emoji_events</span> Expected Results
                                </h4>
                                <p className="text-[#a5d391] text-sm font-bold">{services[activeIdx].results}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedServices;
