import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';

const DietitianManagement = () => {
    const [dietitians, setDietitians] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDietitians();
    }, []);

    const fetchDietitians = async () => {
        try {
            const response = await api.get('/admin/dietitians');
            setDietitians(response.data);
        } catch (error) {
            console.error("Error fetching dietitians", error);
        } finally {
            setLoading(false);
        }
    };

    const verifyDietitian = async (id) => {
        try {
            await api.put(`/admin/dietitians/${id}/verify`);
            fetchDietitians();
        } catch (error) {
            console.error("Error verifying dietitian", error);
        }
    };

    const deleteDietitian = async (id) => {
        if(window.confirm("Are you sure you want to delete this dietitian?")) {
            try {
                await api.delete(`/admin/users/${id}`);
                setDietitians(dietitians.filter(d => d.id !== id));
            } catch (error) {
                console.error("Error deleting dietitian", error);
            }
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6">Dietitian Management</h1>
            {loading ? (
                <p>Loading dietitians...</p>
            ) : (
                <div className="overflow-x-auto bg-white/5 rounded-xl border border-white/10 p-4">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10 text-white/60">
                                <th className="p-3">ID</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dietitians.map(dietitian => (
                                <tr key={dietitian.id} className="border-b border-white/5">
                                    <td className="p-3">{dietitian.id}</td>
                                    <td className="p-3">{dietitian.firstName} {dietitian.lastName}</td>
                                    <td className="p-3">{dietitian.email}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded text-sm ${dietitian.verified ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                            {dietitian.verified ? 'Verified' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="p-3 text-right">
                                        {!dietitian.verified && (
                                            <button onClick={() => verifyDietitian(dietitian.id)} className="text-accent-blue hover:text-blue-300 mr-4">
                                                Verify
                                            </button>
                                        )}
                                        <button onClick={() => deleteDietitian(dietitian.id)} className="text-red-400 hover:text-red-300">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {dietitians.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-white/50">No dietitians found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default DietitianManagement;
