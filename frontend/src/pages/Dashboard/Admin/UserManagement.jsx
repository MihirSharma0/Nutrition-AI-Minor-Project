import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/admin/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteUser = async (id) => {
        if(window.confirm("Are you sure you want to delete this user?")) {
            try {
                await api.delete(`/admin/users/${id}`);
                setUsers(users.filter(u => u.id !== id));
            } catch (error) {
                console.error("Error deleting user", error);
            }
        }
    };

    const changeRole = async (id, newRole) => {
        try {
            await api.put(`/admin/users/${id}/role`, { role: newRole });
            fetchUsers();
        } catch (error) {
            console.error("Error updating role", error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6">User Management</h1>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <div className="overflow-x-auto bg-white/5 rounded-xl border border-white/10 p-4">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10 text-white/60">
                                <th className="p-3">ID</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-white/5">
                                    <td className="p-3">{user.id}</td>
                                    <td className="p-3">{user.firstName} {user.lastName}</td>
                                    <td className="p-3">{user.email}</td>
                                    <td className="p-3">
                                        <select 
                                            value={user.role} 
                                            onChange={(e) => changeRole(user.id, e.target.value)}
                                            className="bg-black/20 border border-white/20 rounded p-1 text-white"
                                        >
                                            <option value="USER">User</option>
                                            <option value="DIETITIAN">Dietitian</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
                                    </td>
                                    <td className="p-3 text-right">
                                        <button onClick={() => deleteUser(user.id)} className="text-red-400 hover:text-red-300">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
