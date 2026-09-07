import React from 'react';
import { Line } from 'react-chartjs-2';

// Reusing ChartJS registration from ProgressTracking in a real app, 
// here we rely on the component mounting order or standard imports
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const DietitianReports = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                label: 'Avg Cohort Adherence (%)',
                data: [72, 78, 85, 84, 88, 88],
                borderColor: '#818cf8', // indigo-400
                backgroundColor: 'rgba(129, 140, 248, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#080b12',
                pointBorderColor: '#818cf8',
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
                bodyColor: '#818cf8',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
            }
        },
        scales: {
            y: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: 'rgba(255,255,255,0.5)' },
                min: 60,
                max: 100
            },
            x: {
                grid: { display: false },
                ticks: { color: 'rgba(255,255,255,0.5)' }
            }
        }
    };

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold font-hero-display mb-8">Clinical Analytics</h1>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 mb-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-xl font-bold mb-1">Roster Adherence Trends</h2>
                        <p className="text-white/50 text-sm">Aggregate protocol compliance across your 42 active clients.</p>
                    </div>
                    <button className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest border border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition-colors">
                        Export CSV
                    </button>
                </div>
                
                <div className="h-[300px] w-full">
                    <Line data={data} options={options} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h3 className="font-bold mb-6 text-indigo-400 font-hero-display text-lg">Generate Cohort Report</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Client Subset</label>
                            <select className="w-full bg-[#0a0d16] border border-white/10 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500/50 text-white transition-colors">
                                <option>All Active Clients</option>
                                <option>Diabetes Management Cohort</option>
                                <option>Hypertrophy Cohort</option>
                                <option>Critical Status Clients</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">Metrics to Include</label>
                            <div className="grid grid-cols-2 gap-2">
                                <label className="flex items-center gap-2 cursor-pointer bg-[#0a0d16] p-3 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <input type="checkbox" defaultChecked className="accent-indigo-500" />
                                    <span className="text-xs font-bold text-white/70">Avg Adherence</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer bg-[#0a0d16] p-3 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <input type="checkbox" defaultChecked className="accent-indigo-500" />
                                    <span className="text-xs font-bold text-white/70">Macro Shifts</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer bg-[#0a0d16] p-3 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <input type="checkbox" defaultChecked className="accent-indigo-500" />
                                    <span className="text-xs font-bold text-white/70">CGM Spikes</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer bg-[#0a0d16] p-3 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <input type="checkbox" className="accent-indigo-500" />
                                    <span className="text-xs font-bold text-white/70">HRV Trends</span>
                                </label>
                            </div>
                        </div>
                        <button type="button" className="w-full bg-indigo-500 text-white font-bold py-4 rounded-xl mt-4 hover:bg-indigo-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            <span className="material-symbols-outlined text-xl">assessment</span>
                            Compile Report
                        </button>
                    </form>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                    <h3 className="font-bold mb-6 text-indigo-400 font-hero-display text-lg">System Insights</h3>
                    <div className="space-y-6">
                        <div className="border-l-2 border-indigo-500 pl-4">
                            <h4 className="font-bold text-sm mb-1 text-white">Algorithmic Efficiency</h4>
                            <p className="text-xs text-white/50 leading-relaxed">
                                The generative AI successfully managed 92% of client diet permutations this week without requiring human clinical override.
                            </p>
                        </div>
                        <div className="border-l-2 border-red-500 pl-4">
                            <h4 className="font-bold text-sm mb-1 text-white">Anomaly Detection Rate</h4>
                            <p className="text-xs text-white/50 leading-relaxed">
                                Continuous Glucose Monitors flagged 14 severe spikes across the cohort. 12 were auto-corrected by lowering carb ratios; 2 require your review.
                            </p>
                        </div>
                        <div className="border-l-2 border-green-400 pl-4">
                            <h4 className="font-bold text-sm mb-1 text-white">Adherence Improvements</h4>
                            <p className="text-xs text-white/50 leading-relaxed">
                                Clients assigned to the "Cognitive Boost" protocol showed a 5% increase in plan adherence compared to last month.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DietitianReports;
