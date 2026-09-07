import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';

const AdminHome = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/admin/analytics');
                setStats(response.data);
            } catch (error) {
                console.error("Error fetching analytics", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6">System Core Overview</h1>
            {loading ? (
                <p className="text-white/60">Loading stats...</p>
            ) : stats ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg text-white/70">Total Users</h3>
                        <p className="text-4xl font-bold text-accent-green mt-2">{stats.totalUsers}</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg text-white/70">Total Dietitians</h3>
                        <p className="text-4xl font-bold text-accent-blue mt-2">{stats.totalDietitians}</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg text-white/70">Total Appointments</h3>
                        <p className="text-4xl font-bold text-accent-orange mt-2">{stats.totalAppointments}</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-lg text-white/70">Total Revenue</h3>
                        <p className="text-4xl font-bold text-accent-purple mt-2">${stats.totalRevenue}</p>
                    </div>
                </div>
            ) : (
                <p className="text-red-400">Failed to load analytics.</p>
            )}
        </div>
    );
};

export default AdminHome;
