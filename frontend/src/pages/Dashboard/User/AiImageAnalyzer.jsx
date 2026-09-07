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
        <div>
            <h1 className="text-3xl font-bold font-hero-display mb-6 text-accent-orange">AI Food Analyzer</h1>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <form onSubmit={analyzeImage} className="space-y-4">
                    <div>
                        <label className="block text-white/70 mb-2">Provide an image URL of your food:</label>
                        <input 
                            type="url" 
                            value={imageUrl} 
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="https://example.com/my-salad.jpg"
                            required
                            className="w-full bg-black/20 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 outline-none focus:border-accent-orange"
                        />
                    </div>
                    {imageUrl && (
                        <div className="mt-4 flex justify-center">
                            <img src={imageUrl} alt="Food preview" className="max-h-48 rounded-xl object-cover border border-white/20" onError={(e) => e.target.style.display='none'}/>
                        </div>
                    )}
                    <button type="submit" disabled={loading || !imageUrl} className="px-6 py-3 bg-accent-orange hover:bg-orange-600 disabled:bg-orange-800 text-white font-semibold rounded-lg transition-colors">
                        {loading ? 'Analyzing...' : 'Analyze Food'}
                    </button>
                </form>
            </div>

            {analysis && (
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-xl font-semibold mb-4 text-accent-orange">Analysis Results</h2>
                    <div className="whitespace-pre-wrap text-white/80 leading-relaxed">
                        {analysis}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AiImageAnalyzer;
