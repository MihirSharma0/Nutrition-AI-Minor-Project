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
        <div className="flex flex-col h-[75vh] bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-6 lg:p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#a5d391]/10 border border-[#a5d391]/30 flex items-center justify-center text-[#a5d391]">
                    <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                    <h1 className="text-2xl font-bold font-hero-display tracking-tight text-white">Nutrition AI Chatbot</h1>
                    <p className="text-xs text-white/50">Personalized algorithmic dietary consultation.</p>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
                {messages.length === 0 && (
                    <div className="text-center text-white/50 my-auto py-16">
                        <span className="material-symbols-outlined text-5xl text-[#a5d391] mb-3 animate-pulse">forum</span>
                        <p className="font-bold text-white text-lg">Hello! I'm your AI Nutrition Assistant.</p>
                        <p className="text-sm text-white/60 mt-1 max-w-md mx-auto">Ask me anything about your custom diet, daily macros, calories, or bio-optimization strategies.</p>
                    </div>
                )}
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[75%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-[#a5d391] text-black font-medium rounded-br-none shadow-lg' : 'bg-[#080b12]/80 border border-white/10 text-white/90 rounded-bl-none shadow-md'}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-[#080b12]/80 border border-white/10 text-[#a5d391] p-4 rounded-2xl rounded-bl-none animate-pulse flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm animate-spin">sync</span> AI is formulating response...
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={sendMessage} className="flex gap-3">
                <input 
                    type="text" 
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask about your nutrition goals..."
                    className="flex-1 bg-[#080b12]/80 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 outline-none focus:border-[#a5d391]/50 transition-colors"
                />
                <button type="submit" disabled={loading || !input.trim()} className="bg-[#a5d391] hover:bg-white disabled:opacity-50 text-black px-6 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer">
                    Send
                </button>
            </form>
        </div>
    );
};

export default AiChat;
