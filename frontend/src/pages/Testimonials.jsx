import React from 'react';
import Starfield from '../components/Starfield';
import VideoTestimonials from './TestimonialSections/VideoTestimonials';
import SuccessMetrics from './TestimonialSections/SuccessMetrics';
import BeforeAfterGallery from './TestimonialSections/BeforeAfterGallery';
import ShareYourStoryForm from './TestimonialSections/ShareYourStoryForm';

const Testimonials = () => {
    const reviews = [
        {
            name: "Alexander Vance",
            metric: "+32% Deep Sleep",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20",
            content: "Before the Protocol, my energy crashed at 3 PM daily. The AI detected a micronutrient deficiency linked to my REM cycles. Within two weeks of following the generated dynamic recipes, the fatigue vanished entirely."
        },
        {
            name: "Dr. Sarah Lin",
            metric: "-14% Body Fat",
            color: "text-[#38bdf8]",
            bg: "bg-[#38bdf8]/10",
            border: "border-[#38bdf8]/20",
            content: "As a physician, I was skeptical of 'AI diets'. But the precision here is medical-grade. It correlates my continuous glucose monitor data with my meals to perfectly flatten my insulin spikes."
        },
        {
            name: "James Holden",
            metric: "Peak VO2 Max",
            color: "text-[#a3e635]",
            bg: "bg-[#a3e635]/10",
            border: "border-[#a3e635]/20",
            content: "Training for ultra-marathons destroys your metabolism if you aren't careful. The predictive trajectory modeling allowed me to carb-load dynamically based on my exact resting heart rate."
        },
        {
            name: "Elena Rodriguez",
            metric: "Optimized Baseline",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20",
            content: "The culinary synthesis is mind-blowing. I literally tell the app what's in my fridge, and it gives me a Michelin-star level recipe that perfectly fits my macros for the day."
        }
    ];

    return (
        <div className="relative pt-32 pb-24 flex flex-col w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full relative z-10">

                {/* Header */}
                <div className="text-center mb-16 sm:mb-24">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-primary"></span>
                        <span className="font-label-caps text-label-caps text-primary uppercase font-bold tracking-widest">Subject Outcomes</span>
                        <span className="w-8 h-px bg-primary"></span>
                    </div>
                    <h1 className="font-hero-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        The data <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#38bdf8] italic">speaks</span> <br/>for itself.
                    </h1>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.07)] group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{review.name}</h3>
                                    <div className={`inline-flex items-center px-3 py-1 rounded-full ${review.bg} ${review.border} border`}>
                                        <span className={`text-xs font-bold uppercase tracking-widest ${review.color}`}>{review.metric}</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-white/20 text-5xl group-hover:text-white/40 transition-colors">format_quote</span>
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed">
                                "{review.content}"
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Banner */}
                <div className="mt-20 sm:mt-32 bg-gradient-to-r from-primary/10 to-[#38bdf8]/10 border border-white/10 rounded-[3rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuARlPSdCdeTilSSltYT8o_EWLoUdxgGM0pAxy7iNyezkvglxmJgPkLDfM6iFjppOiWOTvuZffrRBlNIZRw_fPbClMvFOLDeFwKeig8RqDPRxWVakb4ayBFsLsMMfVo4NvlFhOVebtozAg1DOtjS8rIzQTR7-xYHiOYg86AqGzQBZs5eZOeNLSuXqfBjsgoZxyR_UQ7c65Ncv2dRR9KYLlv6R4aosenNkNLMkWUg3E7hFA0KTuNBg3Sb')] opacity-10 mix-blend-screen bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to optimize your biology?</h2>
                        <button className="bg-white text-[#080b12] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            Begin the Onboarding
                        </button>
                    </div>
                </div>

                {/* Appended New Sections */}
                <SuccessMetrics />
                <VideoTestimonials />
                <BeforeAfterGallery />
                <ShareYourStoryForm />
            </div>
        </div>
    );
};

export default Testimonials;
