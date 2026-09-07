import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="py-section-gap max-w-container-max mx-auto px-edge-margin text-center min-h-[50vh] flex flex-col items-center justify-center">
            <h1 className="font-hero-display text-[4rem] text-error mb-4">404</h1>
            <p className="text-on-surface-variant/80 mb-8 text-xl">Page not found</p>
            <Link to="/" className="bg-primary-container text-on-primary-container px-7 py-3 rounded-full font-nav-link font-bold hover:scale-105 transition-transform">
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
