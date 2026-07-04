import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, AlertTriangle, CheckSquare, IndianRupee, Target } from 'lucide-react';

const UpstrailMark = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" fill="#0F0F0F"/>
    <path d="M8 8v10a7 7 0 0014 0V8" stroke="#F7F4EF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    formData.append("access_key", "4c57de63-6faa-4aac-b552-41ae5259a976");
    const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwRiafpYdJ2bqziphk2UMJ5VU4GH56I6GrLtvnBz_w2Jr_gUDVPZHN1XmQ44gLUIBFtyQ/exec";
    const WEB3FORMS_URL = "https://api.web3forms.com/submit";
    try {
      fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", body: formData })
        .catch(err => console.error("Sheet log failed:", err));
      const response = await fetch(WEB3FORMS_URL, { method: "POST", body: formData });
      if (response.ok) {
        setFormStatus('success');
        setTimeout(() => { setIsModalOpen(false); setFormStatus('idle'); }, 3000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#F7F4EF', color: '#0F0F0F' }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav style={{ backgroundColor: 'rgba(247,244,239,0.92)', borderBottom: '1px solid #D8D3CB' }}
        className="fixed top-0 w-full z-50 backdrop-blur-sm py-4 px-8 md:px-14 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <UpstrailMark />
          <span className="text-xs font-black tracking-[0.2em] uppercase" style={{ color: '#0F0F0F' }}>Upstrail</span>
        </div>
        <div className="hidden md:flex gap-10">
          <a href="#platform" className="text-xs font-bold tracking-widest uppercase transition-colors"
            style={{ color: '#8A8478' }}
            onMouseEnter={e => e.target.style.color='#0F0F0F'}
            onMouseLeave={e => e.target.style.color='#8A8478'}>Platform</a>
          <a href="#proof" className="text-xs font-bold tracking-widest uppercase transition-colors"
            style={{ color: '#8A8478' }}
            onMouseEnter={e => e.target.style.color='#0F0F0F'}
            onMouseLeave={e => e.target.style.color='#8A8478'}>Case Study</a>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs font-black tracking-widest uppercase px-5 py-2.5 transition-all duration-200"
          style={{ border: '1px solid #0F0F0F', color: '#0F0F0F', backgroundColor: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor='#0F0F0F'; e.currentTarget.style.color='#F7F4EF'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#0F0F0F'; }}
        >
          Request Demo
        </button>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#208DFC' }}></span>
            <span className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: '#8A8478' }}>
              Advanced Planning &amp; Scheduling
            </span>
          </div>

          <h1 className="font-black uppercase leading-none tracking-tighter mb-12"
            style={{ fontSize: 'clamp(3.2rem, 9.5vw, 8.5rem)', lineHeight: 0.88 }}>
            The backbone<br />
            of your<br />
            <span style={{ color: '#208DFC' }}>bottomline.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start"
            style={{ borderTop: '1px solid #D8D3CB', paddingTop: '2rem' }}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#8A8478' }}>
              Upstrail bridges deep supply chain expertise with cutting-edge software engineering.
              We deliver out-of-the-box optimization engines and fulfillment dashboards built
              for rapid deployment, intelligent decisions with minimal implementation effort.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="shrink-0 flex items-center gap-3 text-sm font-black tracking-wide px-7 py-4 transition-colors duration-200"
              style={{ backgroundColor: '#0F0F0F', color: '#F7F4EF' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor='#208DFC'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor='#0F0F0F'}
            >
              Request a Demo <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0F0F0F', borderTop: '1px solid #0F0F0F', borderBottom: '1px solid #0F0F0F' }}
        className="py-10 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
          style={{ borderLeft: '1px solid #2a2a2a' }}>
          {[
            { label: 'OTIF Rate',         value: '96.4%', note: 'Tier-1 Deployment' },
            { label: 'Volume Fill Rate',  value: '98.1%', note: 'Rolling 90-day avg' },
            { label: 'Est. Total Spend',  value: '₹14.2M', note: 'Q3 Planning Horizon' },
            { label: 'Solve Time',        value: '4.2s',  note: 'Optimal convergence' },
          ].map((s) => (
            <div key={s.label} className="px-6 md:px-10 py-4"
              style={{ borderRight: '1px solid #2a2a2a' }}>
              <div className="text-[9px] font-black tracking-[0.2em] uppercase mb-3" style={{ color: '#555' }}>
                {s.label}
              </div>
              <div className="font-mono font-bold tabular-nums leading-none mb-2"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F7F4EF' }}>
                {s.value}
              </div>
              <div className="text-[10px] font-mono" style={{ color: '#555' }}>{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DASHBOARD MOCKUP ────────────────────────────────────── */}
      <section id="platform" className="py-20 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-6" style={{ color: '#8A8478' }}>
            Live Platform Preview
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ border: '1px solid #D8D3CB', overflow: 'hidden' }}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3"
              style={{ backgroundColor: '#EDEBE5', borderBottom: '1px solid #D8D3CB' }}>
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-xs font-mono" style={{ color: '#8A8478' }}>
                app.upstrail.com / executive-summary
              </span>
            </div>

            {/* Dashboard body — matches app-studio look */}
            <div className="p-6 md:p-8 flex flex-col gap-6" style={{ backgroundColor: '#eef1f5' }}>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-black tracking-[0.15em] uppercase" style={{ color: '#1b2330' }}>
                  Executive Summary
                </h3>
                <div className="text-xs font-mono px-3 py-1.5 rounded"
                  style={{ border: '1px solid #dde2e9', backgroundColor: '#ffffff', color: '#67707e' }}>
                  Q3 Planning Horizon
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Target size={16} style={{ color: '#6366f1' }} />, label: 'OTIF Rate',         val: '96.4%', tag: 'Healthy',  tagColor: '#1f7a55', tagBg: '#e6f4ee' },
                  { icon: <IndianRupee size={16} style={{ color: '#1f7a55' }} />, label: 'Est. Total Spend', val: '₹14.2M', tag: 'Budget',  tagColor: '#1f7a55', tagBg: '#e6f4ee' },
                  { icon: <CheckSquare size={16} style={{ color: '#2563eb' }} />, label: 'Volume Fill Rate', val: '98.1%', tag: null,      tagColor: '', tagBg: '' },
                  { icon: <AlertTriangle size={16} style={{ color: '#c23a2e' }} />, label: 'Total Shortages', val: '1,204', tag: null,      tagColor: '', tagBg: '' },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-5 rounded-md"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #dde2e9', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded" style={{ backgroundColor: '#f5f7fa', border: '1px solid #dde2e9' }}>
                        {kpi.icon}
                      </div>
                      {kpi.tag && (
                        <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded"
                          style={{ backgroundColor: kpi.tagBg, color: kpi.tagColor }}>
                          {kpi.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] font-black tracking-[0.15em] uppercase mb-1" style={{ color: '#67707e' }}>
                      {kpi.label}
                    </p>
                    <h4 className="text-2xl font-black tabular-nums" style={{ color: '#1b2330', fontFamily: 'var(--font-mono)' }}>
                      {kpi.val}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Fake area chart */}
              <div className="p-5 rounded-md" style={{ backgroundColor: '#ffffff', border: '1px solid #dde2e9', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase mb-4" style={{ color: '#67707e' }}>
                  Cumulative Supply vs Demand
                </p>
                <svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100px' }}>
                  {/* grid */}
                  {[30,60,90].map(y => (
                    <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#f1f5f9" strokeWidth="1"/>
                  ))}
                  {/* Demand area */}
                  <path d="M0,95 L80,85 L160,70 L240,65 L320,55 L400,48 L480,42 L560,38 L560,120 L0,120 Z"
                    fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5"/>
                  {/* Supply area */}
                  <path d="M0,100 L80,88 L160,72 L240,58 L320,45 L400,35 L480,25 L560,18 L560,120 L0,120 Z"
                    fill="#eef2ff" stroke="#6366f1" strokeWidth="2"/>
                  {/* x-axis labels */}
                  {['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'].map((m,i) => (
                    <text key={m} x={i*80+4} y={117} fontSize="8" fill="#94a3b8">{m}</text>
                  ))}
                  {/* legend */}
                  <circle cx="440" cy="10" r="4" fill="#6366f1"/>
                  <text x="448" y="14" fontSize="9" fill="#67707e">Supply</text>
                  <circle cx="490" cy="10" r="4" fill="#cbd5e1"/>
                  <text x="498" y="14" fontSize="9" fill="#67707e">Demand</text>
                </svg>
              </div>

              {/* Table */}
              <div className="rounded-md overflow-hidden" style={{ backgroundColor: '#ffffff', border: '1px solid #dde2e9', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="px-5 py-3" style={{ borderBottom: '1px solid #dde2e9', backgroundColor: '#f5f7fa' }}>
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase" style={{ color: '#67707e' }}>
                    Detailed Order Fulfillment
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead style={{ backgroundColor: '#f5f7fa', borderBottom: '1px solid #dde2e9' }}>
                      <tr>
                        {['Order ID','Item','Due Date','Status','Outcome','Reason / Trace'].map(h => (
                          <th key={h} className="px-5 py-3 text-[9px] font-black tracking-widest uppercase"
                            style={{ color: '#67707e' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id:'ORD-8921', item:'Brake Caliper Assembly',  date:'2026-03-15', fill:100, filled:500, total:500, status:'Fulfilled', statusColor:'#1f7a55', statusBg:'#e6f4ee', barColor:'#1f7a55', reason:'Planned Successfully' },
                        { id:'ORD-8922', item:'Transmission Housing',     date:'2026-03-16', fill:40,  filled:120, total:300, status:'Partial',   statusColor:'#92680a', statusBg:'#fef3cd', barColor:'#f59e0b', reason:'Insufficient Material' },
                        { id:'ORD-8923', item:'Steering Column',          date:'2026-03-16', fill:0,   filled:0,   total:150, status:'Shortage',  statusColor:'#c23a2e', statusBg:'#fde8e7', barColor:'#c23a2e', reason:'Line Down - Maintenance' },
                      ].map(row => (
                        <tr key={row.id} style={{ borderBottom: '1px solid #dde2e9' }}>
                          <td className="px-5 py-4 font-bold text-xs" style={{ color: '#1b2330', fontFamily: 'var(--font-mono)' }}>{row.id}</td>
                          <td className="px-5 py-4 font-semibold text-xs" style={{ color: '#1b2330' }}>{row.item}</td>
                          <td className="px-5 py-4 text-xs" style={{ color: '#67707e' }}>{row.date}</td>
                          <td className="px-5 py-4">
                            <div className="flex flex-col gap-1">
                              <div className="flex justify-between text-[9px] font-bold" style={{ color: '#67707e' }}>
                                <span>{row.filled}</span><span>{row.total}</span>
                              </div>
                              <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: '#dde2e9' }}>
                                <div className="h-full rounded-full" style={{ width: `${row.fill}%`, backgroundColor: row.barColor }}></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <span className="px-2 py-1 text-[9px] font-bold tracking-wider uppercase rounded"
                              style={{ backgroundColor: row.statusBg, color: row.statusColor }}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-[10px]" style={{ color: '#67707e' }}>{row.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES ────────────────────────────────────────── */}
      <section id="capabilities" className="py-20 px-8 md:px-14"
        style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-20 mb-16 items-end">
            <div>
              <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: '#8A8478' }}>
                Platform
              </div>
              <h2 className="font-black uppercase tracking-tighter leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.9 }}>
                Core<br />Engine
              </h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed self-end" style={{ color: '#8A8478' }}>
              Enterprise-grade planning built for the complexity of real manufacturing operations.
              80% out-of-the-box reliability. 20% precision-fitted to your constraints.
            </p>
          </div>

          <div style={{ borderTop: '1px solid #D8D3CB' }}>
            {[
              {
                num: '01',
                title: 'Ready-to-Deploy APS',
                desc: 'An intelligent engine that manages your complete supply planning process end to end. Minimal configuration. Eliminates 80% of typical supply chain problems immediately upon deployment.'
              },
              {
                num: '02',
                title: 'AI-Integrated Data Management',
                desc: 'Automatically ingest data from your ERP into our database. AI-driven mapping transforms unstructured legacy data into clean, solver-ready inputs — no manual ETL required.'
              },
              {
                num: '03',
                title: 'Fulfillment & Execution',
                desc: 'Transform solver outputs into actionable fulfillment plans. Planners get real-time operational visibility through intuitive executive summaries — not spreadsheets.'
              },
            ].map((cap, i) => (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="grid grid-cols-[48px_1fr] md:grid-cols-[48px_1fr_1fr] gap-6 md:gap-12 py-8"
                style={{ borderBottom: '1px solid #D8D3CB' }}
              >
                <span className="font-mono text-xs font-bold pt-1" style={{ color: '#D8D3CB' }}>{cap.num}</span>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight">{cap.title}</h3>
                <p className="text-sm leading-relaxed col-start-2 md:col-start-3" style={{ color: '#8A8478' }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / CASE STUDY ──────────────────────────────────── */}
      <section id="proof" className="py-20 px-8 md:px-14"
        style={{ backgroundColor: '#0F0F0F', color: '#F7F4EF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-14" style={{ color: '#555' }}>
            Case Study — Tier 1 Automotive
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            <div>
              <h2 className="font-black uppercase tracking-tighter leading-none mb-8"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.9 }}>
                OTIF improved<br />by 6% for clients.
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#8A8478' }}>
                We partnered with a Tier-1 manufacturing enterprise to deploy a full-scale
                intelligent planning solution. 70% out-of-the-box. 30% custom-fitted.
                A result that off-the-shelf software couldn't get close to.
              </p>
              <ul className="space-y-5" style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
                {[
                  'Resolves capacity bottlenecks with automated rollbacks',
                  'Dynamically scales orders based on component availability',
                  'Splits POs across suppliers while enforcing capacity limits',
                ].map(item => (
                  <li key={item} className="flex items-start gap-4 text-sm" style={{ color: '#8A8478' }}>
                    <span className="font-mono font-black shrink-0 mt-0.5" style={{ color: '#208DFC' }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Terminal */}
            <div className="relative p-6 font-mono text-sm overflow-hidden flex flex-col"
              style={{ backgroundColor: '#0d1117', border: '1px solid #2a2a2a', minHeight: '360px' }}>
              <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: '1px solid #2a2a2a' }}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs" style={{ color: '#555' }}>
                  upstrail@solver:~ $ python main.py
                </span>
              </div>
              <div className="flex-1 space-y-2 text-xs leading-relaxed" style={{ color: '#8A8478' }}>
                <p style={{ color: '#60a5fa' }}>INFO: Initializing multi-echelon APS model...</p>
                <p>Loading dataset: 4,502 nodes, 12,890 edges.</p>
                <p>Objective: Minimize (Total Shortage + Production Cost).</p>
                <p className="pt-2" style={{ color: '#f59e0b' }}>WARN: Capacity bottleneck at WorkCenter-B (Transmission).</p>
                <p>Iter 1: Objective = 145,200 | Gap = 12.4%</p>
                <p>Iter 2: Objective = 112,050 | Gap =  8.1%</p>
                <p>Iter 3: Objective =  98,400 | Gap =  3.2%</p>
                <p>Iter 4: Objective =  95,100 | Gap =  0.5%</p>
                <p className="pt-2 font-bold" style={{ color: '#4ade80' }}>SUCCESS: Optimal solution found in 4.2s.</p>
                <p>Exporting fulfillment plan to database...</p>
                <p className="pt-1">
                  <span style={{ color: '#60a5fa' }}>app_server</span> listening on :8000
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-2 h-3 align-middle ml-1"
                    style={{ backgroundColor: '#8A8478' }}
                  />
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0d1117, transparent)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-8 md:px-14" style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <h2 className="font-black uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 0.88 }}>
            Ready to<br />optimize?
          </h2>
          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: '#8A8478' }}>
              Stop relying on generic ERP modules and manual spreadsheets.
              Let's build an engine that actually fits your operation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-3 text-sm font-black tracking-wide px-7 py-4 transition-colors duration-200"
              style={{ backgroundColor: '#208DFC', color: '#F7F4EF' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor='#0F0F0F'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor='#208DFC'}
            >
              Request Demo <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-8 px-8 md:px-14" style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <UpstrailMark />
            <span className="text-xs font-black tracking-[0.2em] uppercase">Upstrail</span>
          </div>
          <span className="text-xs" style={{ color: '#8A8478' }}>
            © {new Date().getFullYear()} Upstrail. All rights reserved.
          </span>
        </div>
      </footer>

      {/* ── MODAL ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(15,15,15,0.6)', backdropFilter: 'blur(4px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg relative overflow-hidden"
              style={{ backgroundColor: '#F7F4EF', border: '1px solid #D8D3CB' }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 transition-colors"
                style={{ color: '#8A8478' }}
                onMouseEnter={e => e.currentTarget.style.color='#0F0F0F'}
                onMouseLeave={e => e.currentTarget.style.color='#8A8478'}
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-10">
                <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: '#8A8478' }}>
                  Get in Touch
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  Let's optimize<br />your operations.
                </h3>
                <p className="text-sm mb-8" style={{ color: '#8A8478' }}>
                  Our engineering team will reach out within one business day.
                </p>

                {formStatus === 'success' ? (
                  <div className="flex items-center gap-3 p-4"
                    style={{ backgroundColor: '#e6f4ee', border: '1px solid #1f7a55' }}>
                    <CheckCircle2 size={20} style={{ color: '#1f7a55' }} />
                    <p className="text-sm font-bold" style={{ color: '#1f7a55' }}>
                      Sent. We'll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value="New Demo Request from Upstrail.com" />
                    <input type="hidden" name="from_name" value="Upstrail Website" />

                    {[
                      { label: 'Name / Company', name: 'name',    type: 'text',  placeholder: 'Rohit Garg @ Manufacturing Pvt Ltd' },
                      { label: 'Work Email',     name: 'email',   type: 'email', placeholder: 'rohit@company.com' },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-xs font-black tracking-widest uppercase mb-2"
                          style={{ color: '#0F0F0F' }}>{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          required
                          placeholder={f.placeholder}
                          className="w-full px-4 py-3 text-sm outline-none transition-colors"
                          style={{ backgroundColor: '#EDEBE5', border: '1px solid #D8D3CB', color: '#0F0F0F' }}
                          onFocus={e => e.target.style.borderColor='#0F0F0F'}
                          onBlur={e => e.target.style.borderColor='#D8D3CB'}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-xs font-black tracking-widest uppercase mb-2"
                        style={{ color: '#0F0F0F' }}>Current Challenges</label>
                      <textarea
                        name="message"
                        required
                        rows="3"
                        placeholder="We're struggling with inventory visibility across plants..."
                        className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none"
                        style={{ backgroundColor: '#EDEBE5', border: '1px solid #D8D3CB', color: '#0F0F0F' }}
                        onFocus={e => e.target.style.borderColor='#0F0F0F'}
                        onBlur={e => e.target.style.borderColor='#D8D3CB'}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 text-sm font-black tracking-widest uppercase transition-colors duration-200 disabled:opacity-50 flex justify-center items-center gap-2"
                      style={{ backgroundColor: '#0F0F0F', color: '#F7F4EF' }}
                      onMouseEnter={e => { if (formStatus !== 'submitting') e.currentTarget.style.backgroundColor='#208DFC'; }}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor='#0F0F0F'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Request Demo'}
                    </button>

                    {formStatus === 'error' && (
                      <p className="text-xs text-center" style={{ color: '#c23a2e' }}>
                        Something went wrong. Please try again.
                      </p>
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
