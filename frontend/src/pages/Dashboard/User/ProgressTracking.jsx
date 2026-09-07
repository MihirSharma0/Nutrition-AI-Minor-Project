import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const ProgressTracking = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                label: 'Weight (lbs)',
                data: [195, 192, 189.5, 188, 185, 183],
                borderColor: '#a3e635', // primary color
                backgroundColor: 'rgba(163, 230, 53, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#080b12',
                pointBorderColor: '#a3e635',
                pointBorderWidth: 2,
                pointRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(10, 13, 22, 0.9)',
                titleColor: '#fff',
                bodyColor: '#a3e635',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
            }
        },
        scales: {
            y: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: 'rgba(255,255,255,0.5)' }
            },
            x: {
                grid: { display: false },
                ticks: { color: 'rgba(255,255,255,0.5)' }
            }
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8">Data Analytics</h1>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 mb-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-xl font-bold mb-1">Lipid Oxidation Curve</h2>
                        <p className="text-white/50 text-sm">Trajectory mapped over the last 6 weeks.</p>
                    </div>
                    <select className="bg-[#0a0d16] border border-white/10 px-4 py-2 rounded-lg text-sm font-bold outline-none text-white/70 focus:text-white">
                        <option>Last 6 Weeks</option>
                        <option>Last 3 Months</option>
                        <option>All Time</option>
                    </select>
                </div>
                
                <div className="h-[300px] w-full">
                    <Line data={data} options={options} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                    <h3 className="font-bold mb-6">Metabolic Biomarkers</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/30 text-[20px]">monitor_heart</span>
                                <span className="text-sm">Resting Heart Rate</span>
                            </div>
                            <span className="font-bold text-[#38bdf8]">54 bpm</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/30 text-[20px]">favorite</span>
                                <span className="text-sm">HRV Baseline</span>
                            </div>
                            <span className="font-bold text-primary">82 ms</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/30 text-[20px]">bloodtype</span>
                                <span className="text-sm">Avg Blood Glucose</span>
                            </div>
                            <span className="font-bold text-white">92 mg/dL</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                    <h3 className="font-bold mb-6">Algorithm Adherence</h3>
                    <div className="flex items-center justify-center h-40">
                        {/* A simple CSS circular progress or just big numbers for the mockup */}
                        <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-white/10 border-t-primary">
                            <div className="text-center">
                                <div className="text-3xl font-bold">94%</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold mt-1">Accuracy</div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm text-white/50 mt-4">Your macro tracking has been within 5% of the generative targets for 12 consecutive days.</p>
                </div>
            </div>
        </div>
    );
};

export default ProgressTracking;
