import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Database, Layers, ArrowRight, Activity, CheckCircle2, 
  Target, IndianRupee, CheckSquare, AlertTriangle, X 
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // The function that handles sending the email
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus('submitting');
  
  const formData = new FormData(e.target);
  
  // 1. Fill in your Web3Forms Access Key here
  formData.append("access_key", "4c57de63-6faa-4aac-b552-41ae5259a976"); 

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwRiafpYdJ2bqziphk2UMJ5VU4GH56I6GrLtvnBz_w2Jr_gUDVPZHN1XmQ44gLUIBFtyQ/exec"; 
  const WEB3FORMS_URL = "https://api.web3forms.com/submit";

  try {
    // Fire off the Google Sheet request silently (don't wait for it to finish)
    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    }).catch(err => console.error("Sheet log failed:", err));

    // 2. Submit to Web3Forms and wait for the result to update UI
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setFormStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setFormStatus('idle');
      }, 3000);
    } else {
      const errorData = await response.json();
      console.error("Web3Forms Error:", errorData);
      setFormStatus('error');
    }
  } catch (err) {
    console.error("Submission error:", err);
    setFormStatus('error');
  }
};

  // ... rest of your existing App code
  return (
    <div className="min-h-screen font-sans bg-slate-50 selection:bg-blue-600 selection:text-white text-slate-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
        <img src={reactLogo} alt="Upstrail Logo" className="w-8 h-8" />
        Upstrail
      </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <a href="#platform" className="hover:text-blue-600 transition-colors">Platform</a>
          <a href="#capabilities" className="hover:text-blue-600 transition-colors">Capabilities</a>
          <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
        </div>
<button 
  onClick={() => setIsModalOpen(true)} 
  className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-slate-200 flex items-center gap-2"
>
  Request Demo <ArrowRight size={16} />
</button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-20 px-6 overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-sm font-semibold mb-8 text-blue-700"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            Advanced Planning & Scheduling
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            The Backbone of <br className="hidden md:block" />
            <span className="text-blue-600">your Bottomline.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10"
          >
            Upstrail bridges deep supply chain expertise with cutting-edge software engineering. We deliver out-of-the-box optimization engines and fulfillment dashboards designed for rapid deployment, giving you intelligent decision-making capabilities with minimal implementation effort.
          </motion.p>
        </div>
      </section>

      {/* --- DASHBOARD MOCKUP (Using your actual solver UI) --- */}
      <section className="px-6 pb-24 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden"
        >
          {/* Faux Browser Chrome */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 text-xs font-medium text-slate-400">app.upstrail.com / executive-summary</div>
          </div>
          
          {/* Dashboard Area - Mirrored from your code */}
          <div className="p-6 md:p-8 bg-slate-50 flex flex-col gap-6">
             <div className="flex justify-between items-center">
               <h3 className="text-2xl font-bold text-slate-900">Executive Summary</h3>
               <div className="px-4 py-2 bg-white shadow-sm border border-slate-200 rounded-md text-sm font-medium text-slate-600">Q3 Planning Horizon</div>
             </div>
             
             {/* KPI ROW */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* OTIF Rate */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      <Target size={18} className="text-indigo-500" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-100">Healthy</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">OTIF Rate</p>
                  <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight tabular-nums">96.4%</h4>
                </div>

                {/* Est Total Spend */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      <IndianRupee size={18} className="text-emerald-500" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-100">Budget</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Est. Total Spend</p>
                  <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight tabular-nums">₹14.2M</h4>
                </div>

                {/* Volume Fill Rate */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      <CheckSquare size={18} className="text-blue-500" />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Volume Fill Rate</p>
                  <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight tabular-nums">98.1%</h4>
                </div>

                {/* Total Shortages */}
                <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      <AlertTriangle size={18} className="text-red-500" />
                    </div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">Total Shortages</p>
                  <h4 className="text-2xl font-extrabold text-slate-800 tracking-tight tabular-nums">1,204</h4>
                </div>
             </div>

             {/* FULFILLMENT TABLE */}
             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mt-2">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Detailed Order Fulfillment
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-200 font-black text-slate-400 uppercase tracking-tighter">
                      <tr>
                        <th className="px-6 py-4">Order ID</th>
                        <th className="px-6 py-4">Item</th>
                        <th className="px-6 py-4">Due Date</th>
                        <th className="px-6 py-4 w-48">Status</th>
                        <th className="px-6 py-4 text-center">Outcome</th>
                        <th className="px-6 py-4">Reason / Trace</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-600">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-700">ORD-8921</td>
                        <td className="px-6 py-4 font-sans font-bold text-slate-900">Brake Caliper Assembly</td>
                        <td className="px-6 py-4 text-slate-500">2026-03-15</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[9px] text-slate-400 uppercase font-bold"><span>500</span><span>500</span></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-emerald-500" style={{ width: '100%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase border bg-emerald-50 text-emerald-600 border-emerald-100">Fulfilled</span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 text-[10px]">Planned Successfully</td>
                      </tr>
                      
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-700">ORD-8922</td>
                        <td className="px-6 py-4 font-sans font-bold text-slate-900">Transmission Housing</td>
                        <td className="px-6 py-4 text-slate-500">2026-03-16</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[9px] text-slate-400 uppercase font-bold"><span>120</span><span>300</span></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-amber-400" style={{ width: '40%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase border bg-amber-50 text-amber-600 border-amber-100">Partial</span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 text-[10px]">Insufficient Material</td>
                      </tr>

                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-700">ORD-8923</td>
                        <td className="px-6 py-4 font-sans font-bold text-slate-900">Steering Column</td>
                        <td className="px-6 py-4 text-slate-500">2026-03-16</td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1">
                            <div className="flex justify-between text-[9px] text-slate-400 uppercase font-bold"><span>0</span><span>150</span></div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-red-400" style={{ width: '0%' }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-1 rounded text-[10px] font-bold uppercase border bg-red-50 text-red-600 border-red-100">Shortage</span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 text-[10px]">Line Down - Maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section id="capabilities" className="py-24 bg-white border-y border-slate-200 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">An enterprise-grade planning platform designed for complex manufacturing, combining out-of-the-box reliability with a 20% custom-tailored engine for your unique operational constraints.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ready-to-Deploy APS</h3>
              <p className="text-slate-600 leading-relaxed">
                Intelligent engine that manages your complete supply planning process from start to finish. Requires minimal configuration while taking 80% of typical supply chain problems off your plate.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Integrated Data Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically ingest data from your ERP into our DB. Uses AI-driven mapping to transform unstructured legacy data into clean, solver-ready inputs.
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fulfillment & Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                Transform solver outputs into actionable fulfillment plans. Intuitive executive summaries give planners real-time operational visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROOF OF WORK / CASE STUDY --- */}
      <section id="solutions" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven in the Automotive Sector.</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We partnered with a Tier-1 manufacturing enterprise to deliver a full scale, intelligent planning solution. By bridging our deep supply chain consulting experience with a modern tech stack, we deployed a system that was 70% out-of-the-box and required only 30% customization, delivering a perfect fit that off the shelf software couldn't match
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-blue-400" size={20}/>Resolves capacity bottlenecks with automated rollbacks.</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-blue-400" size={20}/>Dynamically scales orders based on component availability.</li>
              <li className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="text-blue-400" size={20}/>Splits purchase orders across suppliers while enforcing capacity limits.</li>
            </ul>
          </div>
<div className="relative h-[450px] bg-[#0d1117] rounded-xl border border-slate-700 p-6 font-mono text-sm overflow-hidden flex flex-col shadow-2xl">
  {/* Faux Terminal Header */}
  <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
    <div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
    <span className="text-slate-500 ml-2 text-xs">user@upstrail:~/solver_engine $ python main.py</span>
  </div>
  
  {/* Terminal Output */}
  <div className="text-slate-300 flex-1 space-y-2 opacity-90">
    <p className="text-blue-400">INFO: Initializing multi-echelon APS model...</p>
    <p>Loading dataset: 4,502 nodes, 12,890 edges.</p>
    <p>Objective function: Minimize (Total Shortage + Production Cost).</p>
    <p className="text-amber-400 mt-4">WARN: Capacity bottleneck detected at WorkCenter-B (Transmission Assembly).</p>
    <p>Iter 1: Objective = 145,200 | Gap = 12.4%</p>
    <p>Iter 2: Objective = 112,050 | Gap = 8.1%</p>
    <p>Iter 3: Objective = 98,400  | Gap = 3.2%</p>
    <p>Iter 4: Objective = 95,100  | Gap = 0.5%</p>
    <p className="text-emerald-400 mt-4 font-bold">SUCCESS: Optimal solution found in 4.2s.</p>
    <p>Exporting fulfillment plan to database...</p>
    <p className="mt-2">
      <span className="text-blue-400">app_server</span> listening on port 8000
      <motion.span 
        animate={{ opacity: [0, 1, 0] }} 
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-2 h-4 bg-slate-400 inline-block align-middle ml-1"
      />
    </p>
  </div>
  
  {/* Bottom fade effect */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
</div>
        </div>
      </section>
{/* --- BOTTOM CTA --- */}
<section className="py-24 px-6 bg-blue-600 text-white text-center relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
  
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to optimize your supply chain?</h2>
    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
      Stop relying on generic ERP modules and manual spreadsheets. Let's deploy an intelligent custom-like planning engine, tailored to fit your manufacturing realities.
    </p>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2 mx-auto"
      >
        Request Demo <ArrowRight size={20} />
      </button>
  </div>
</section>
      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
  <img src={reactLogo} alt="Upstrail Logo" className="w-6 h-6" />
  Upstrail
</div>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Upstrail. All rights reserved.
          </div>
        </div>
      </footer>
    
    {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Let's optimize your operations.</h3>
                <p className="text-slate-600 mb-6 text-sm">Fill out the form below and our engineering team will reach out.</p>

                {formStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle2 size={24} />
                    <p className="font-semibold">Message sent successfully! We'll be in touch.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value="New Demo Request from Upstrail.com" />
                    <input type="hidden" name="from_name" value="Upstrail Website" />
                    
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Name / Company</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                        placeholder="Rohit Garg @ Manufacturing Pvt Ltd"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Work Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                        placeholder="rohit@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1">Current Challenges</label>
                      <textarea 
                        name="message"
                        required
                        rows="3"
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors resize-none"
                        placeholder="We are struggling with managing inventory.."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Request Demo'}
                    </button>
                    
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm text-center mt-2">Oops! Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


    </div>
  );
}