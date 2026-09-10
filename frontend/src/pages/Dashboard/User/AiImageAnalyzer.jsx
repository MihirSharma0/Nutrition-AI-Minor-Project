import React, { useState } from 'react';
import api from '../../../api/axios';

const AiImageAnalyzer = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [analysis, setAnalysis] = useState('');
    const [loading, setLoading] = useState(false);

    const analyzeImage = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAnalysis('');

        try {
            const response = await api.post('/ai/analyze-image', { imageUrl });
            setAnalysis(response.data.analysis);
        } catch (error) {
            console.error("Error analyzing image", error);
            setAnalysis("Failed to analyze image. Please check the URL and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">AI Food Scan</h1>
            
            <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 mb-8 shadow-xl">
                <form onSubmit={analyzeImage} className="space-y-6">
                    <div>
                        <label className="block text-[#a5d391] text-xs font-bold uppercase tracking-widest mb-2">Provide an image URL of your food:</label>
                        <input 
                            type="url" 
                            value={imageUrl} 
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="https://example.com/my-salad.jpg"
                            required
                            className="w-full bg-[#080b12]/80 border border-white/10 rounded-2xl p-4 text-white placeholder:text-white/40 outline-none focus:border-[#a5d391]/50 transition-colors"
                        />
                    </div>
                    {imageUrl && (
                        <div className="mt-4 flex justify-center">
                            <img src={imageUrl} alt="Food preview" className="max-h-48 w-full sm:w-auto rounded-2xl object-cover border border-[#a5d391]/30 shadow-lg" onError={(e) => e.target.style.display='none'}/>
                        </div>
                    )}
                    <button type="submit" disabled={loading || !imageUrl} className="px-8 py-4 bg-[#a5d391] hover:bg-white disabled:opacity-50 text-black font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(165,211,145,0.3)] cursor-pointer">
                        {loading ? 'Analyzing...' : 'Analyze Food'}
                    </button>
                </form>
            </div>

            {analysis && (
                <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-xl">
                    <h2 className="text-xl font-bold mb-4 text-[#a5d391] font-hero-display">Analysis Results</h2>
                    <div className="whitespace-pre-wrap text-white/80 leading-relaxed font-body-md">
                        {analysis}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiImageAnalyzer;
