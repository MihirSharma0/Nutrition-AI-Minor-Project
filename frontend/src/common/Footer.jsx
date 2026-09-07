import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-heavy border-t border-white/5 p-edge-margin w-full mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-container-max mx-auto gap-12 py-10">
                <div className="space-y-6 text-center md:text-left">
                    <div className="font-headline-lg text-3xl font-black text-white tracking-tighter flex items-center justify-center md:justify-start gap-2">
                        <span className="w-3 h-3 bg-primary rounded-full"></span>
                        AI Nutrition
                    </div>
                    <p className="font-body-md text-primary-fixed-dim/50 max-w-xs font-medium">Precision performance through Aether Convergence. Elevating human potential via autonomous dietary calibration.</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-10">
                    <div className="flex flex-wrap justify-center gap-10">
                        <Link to="/" className="text-tertiary-fixed-dim/40 font-nav-link text-nav-link hover:text-white transition-colors">Privacy Protocol</Link>
                        <Link to="/" className="text-tertiary-fixed-dim/40 font-nav-link text-nav-link hover:text-white transition-colors">Security Standards</Link>
                        <Link to="/" className="text-tertiary-fixed-dim/40 font-nav-link text-nav-link hover:text-white transition-colors">Biometric Data Policy</Link>
                        <Link to="/" className="text-tertiary-fixed-dim/40 font-nav-link text-nav-link hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p className="text-tertiary-fixed-dim/30 text-[10px] font-label-caps uppercase tracking-[0.4em] font-black">
                        © 2024 AI NUTRITION. ALL SYSTEMS OPERATIONAL.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
