import React, { useState } from 'react';
import api from '../../../api/axios';

const AiChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await api.post('/ai/chat', { message: userMessage.content });
            setMessages(prev => [...prev, { role: 'ai', content: response.data.response }]);
        } catch (error) {
            console.error("Error with AI chat", error);
            setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting right now." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[70vh] bg-white/5 rounded-xl border border-white/10 p-4">
            <h1 className="text-2xl font-bold font-hero-display mb-4 text-accent-blue">Nutrition AI Chatbot</h1>
            
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                {messages.length === 0 && (
                    <div className="text-center text-white/50 mt-10">
                        <p>Hello! I'm your AI Nutrition Assistant.</p>
                        <p>Ask me anything about your diet, calories, or healthy habits.</p>
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[70%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-accent-blue text-white rounded-br-none' : 'bg-white/10 text-white/80 rounded-bl-none'}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-white/10 text-white/80 p-3 rounded-xl rounded-bl-none animate-pulse">
                            Thinking...
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={sendMessage} className="flex gap-2">
                <input 
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask about your nutrition goals..."
                    className="flex-1 bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-blue"
                />
                <button type="submit" disabled={loading || !input.trim()} className="bg-accent-blue hover:bg-blue-600 disabled:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Send
                </button>
            </form>
        </div>
    );
};

export default AiChat;
