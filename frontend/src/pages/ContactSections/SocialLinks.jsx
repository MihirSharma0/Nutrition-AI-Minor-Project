import React from 'react';

const SocialLinks = () => {
    const socials = [
        { platform: "Instagram", icon: "photo_camera", handle: "@AetherNutrition", color: "hover:text-[#E1306C] hover:border-[#E1306C]" },
        { platform: "Twitter / X", icon: "tag", handle: "@AetherScience", color: "hover:text-[#1DA1F2] hover:border-[#1DA1F2]" },
        { platform: "LinkedIn", icon: "work", handle: "Aether Clinical Nutrition", color: "hover:text-[#0077B5] hover:border-[#0077B5]" },
        { platform: "YouTube", icon: "smart_display", handle: "Aether Biological Models", color: "hover:text-[#FF0000] hover:border-[#FF0000]" }
    ];

    return (
        <section className="py-12 max-w-7xl mx-auto px-8 relative z-20 text-center">
            <h3 className="text-white/40 font-bold uppercase tracking-widest text-sm mb-8">Connect with our Network</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {socials.map((social, idx) => (
                    <a 
                        key={idx} 
                        href="#" 
                        className={`flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-full text-white/70 transition-all duration-300 ${social.color}`}
                    >
                        <span className="material-symbols-outlined text-xl">{social.icon}</span>
                        <span className="font-bold text-sm">{social.platform}</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialLinks;
