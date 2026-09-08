import React from 'react';

const ClientTestimonials = () => {
    const testimonials = [
        {
            name: "Sarah J.",
            result: "-25 lbs in 4 months",
            quote: "I've tried every diet out there, but this was the first time a program actually adapted to my life rather than forcing me to adapt to it. The AI adjustments were spot on.",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP3nQl8b8LU4xjhNKoFcksaAJAjAhTnIGG2n1OFkuoOSwfz2dP7FAXSAOYxRMQnk-7DuXqJnLBChFdrlYZYn7QRk44BaFOFR2McC9ByzI_n03ycyhSZau2fg6iJK1GAFUkV4y7UukilqbSfJNx3Q8s0FvRM0-MajLqixc-NBO9J64ponXllcmORWHcgIeBm5dZrQfkN2U7pz_JafhB_yLLV-RpZx1y4M7u03vzO6MnM8K3Da2D98Hb"
        },
        {
            name: "Marcus T.",
            result: "Reversed Pre-diabetes",
            quote: "The clinical precision of the meal plans combined with the continuous glucose monitoring integration gave me the exact blueprint I needed to regain control of my health.",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW563tK2alaIdKa-cuEfnJW_382lfBQKNmuA-kMrz16M4r0j_X2E-NwzxGnDRl0tocPS3FptCrFu8YlmyZVNj3JFmfqOmLXYrG0ZwVT8uy224ZUKl3NEzQCmKUTO2msjUepTc_nVcKorAi6FUfm_iG51_uMfIOsUZ6jT5AARtHZZqyjyDau5TLry4qgYRmogxwX3RY3MnDdtrqs7kp4S-dvhaj0IMgdKyGytNOKy-15cE-Ml0DX-bU"
        },
        {
            name: "Elena R.",
            result: "PCOS Symptoms Eliminated",
            quote: "Finally, a team that understands hormonal health. The combination of expert nutritionist support and the AI tracking made balancing my macros completely effortless.",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZLrZKLb7jzMmFQ5c6qGbPfOriSTc2BC_huR3PJJqupenaW5lWxSI7_t5rEsctSs00W6MwL6qe-qHTKrEjUZAEjRruf0uHFev2ubNwTi4kWIBFgSVq9eO-2GXDO-gHwKpeCq41OZyuAkBa0fNoruRCpaRGqXAPY7wcb-m01KQ-q4hj5mEWx3oKu0Jdv0Iv-jfmt0C8yuj48YFkyamuApv5yVIztLtfvuR9f3xAvA3JU1uCRp1uckTy"
        }
    ];

    return (
        <section className="py-section-gap max-w-7xl mx-auto px-8 relative z-20">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
                <h2 className="font-hero-display text-4xl md:text-5xl font-bold text-on-background mb-6">User Transformations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((test, idx) => (
                    <div key={idx} className="bg-white border border-outline-variant/30 shadow-md rounded-[2rem] p-8 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-all hover:shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-on-background">format_quote</span>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <img src={test.avatar} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-outline-variant/20" />
                            <div>
                                <h4 className="text-on-background font-bold">{test.name}</h4>
                                <div className="text-primary text-sm font-semibold">{test.result}</div>
                            </div>
                        </div>
                        <p className="text-on-background/70 leading-relaxed italic relative z-10">"{test.quote}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientTestimonials;
