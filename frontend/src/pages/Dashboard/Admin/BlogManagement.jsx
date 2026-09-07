import React, { useEffect, useState } from 'react';
import api from '../../../api/axios';

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await api.get('/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs", error);
        } finally {
            setLoading(false);
        }
    };

    const addBlog = async (e) => {
        e.preventDefault();
        try {
            await api.post('/blogs', { title, content, imageUrl });
            setTitle('');
            setContent('');
            setImageUrl('');
            fetchBlogs();
        } catch (error) {
            console.error("Error adding blog", error);
        }
    };

    const deleteBlog = async (id) => {
        if(window.confirm("Delete this blog?")) {
            try {
                await api.delete(`/blogs/${id}`);
                fetchBlogs();
            } catch (error) {
                console.error("Error deleting blog", error);
            }
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6">Blog Management</h1>
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 mb-8">
                <h2 className="text-xl mb-4 font-semibold text-white/80">Add New Blog</h2>
                <form onSubmit={addBlog} className="space-y-4">
                    <div>
                        <input type="text" placeholder="Title" required value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-blue" />
                    </div>
                    <div>
                        <input type="text" placeholder="Image URL (optional)" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-blue" />
                    </div>
                    <div>
                        <textarea placeholder="Content" required value={content} onChange={e => setContent(e.target.value)} className="w-full h-32 bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-blue"></textarea>
                    </div>
                    <button type="submit" className="px-6 py-3 bg-accent-blue hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors">Publish Blog</button>
                </form>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white/80">Published Blogs</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-white/50">No blogs published yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {blogs.map(blog => (
                            <div key={blog.id} className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-lg">{blog.title}</h3>
                                    <p className="text-white/60 text-sm line-clamp-2 mt-1">{blog.content}</p>
                                </div>
                                <button onClick={() => deleteBlog(blog.id)} className="text-red-400 hover:text-red-300 ml-4">
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogManagement;
