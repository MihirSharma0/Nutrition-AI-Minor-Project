import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const GlobalLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="w-full flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default GlobalLayout;
