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
                borderColor: '#a5d391',
                backgroundColor: 'rgba(165, 211, 145, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#080b12',
                pointBorderColor: '#a5d391',
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
                backgroundColor: 'rgba(8, 11, 18, 0.9)',
                titleColor: '#fff',
                bodyColor: '#a5d391',
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
            <h1 className="text-3xl font-bold font-hero-display mb-8 tracking-tight text-white">Data Analytics</h1>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 mb-8 shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                    <div>
                        <h2 className="text-xl font-bold mb-1 font-hero-display">Lipid Oxidation Curve</h2>
                        <p className="text-white/50 text-sm">Trajectory mapped over the last 6 weeks.</p>
                    </div>
                    <select className="bg-[#080b12]/80 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-bold outline-none text-white/70 focus:text-white">
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
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 shadow-xl">
                    <h3 className="font-bold mb-6 font-hero-display text-lg">Metabolic Biomarkers</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-2xl bg-[#080b12]/60 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a5d391] text-[20px]">monitor_heart</span>
                                <span className="text-sm">Resting Heart Rate</span>
                            </div>
                            <span className="font-bold text-[#38bdf8]">54 bpm</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-2xl bg-[#080b12]/60 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a5d391] text-[20px]">favorite</span>
                                <span className="text-sm">HRV Baseline</span>
                            </div>
                            <span className="font-bold text-[#a5d391]">82 ms</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-2xl bg-[#080b12]/60 border border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-[#a5d391] text-[20px]">bloodtype</span>
                                <span className="text-sm">Avg Blood Glucose</span>
                            </div>
                            <span className="font-bold text-white">92 mg/dL</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 lg:p-8 shadow-xl">
                    <h3 className="font-bold mb-6 font-hero-display text-lg">Algorithm Adherence</h3>
                    <div className="flex items-center justify-center h-40">
                        <div className="relative flex items-center justify-center w-32 h-32 rounded-full border-4 border-white/10 border-t-[#a5d391]">
                            <div className="text-center">
                                <div className="text-3xl font-bold font-hero-display">94%</div>
                                <div className="text-[10px] text-[#a5d391] uppercase tracking-widest font-bold mt-1">Accuracy</div>
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
