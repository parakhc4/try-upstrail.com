import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, CheckCircle2, ArrowRight, Play, TrendingUp,
} from 'lucide-react';

const UpstrailMark = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" fill="#0F0F0F"/>
    <path d="M8 8v10a7 7 0 0014 0V8" stroke="#F7F4EF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SideNavItem = ({ label, active }) => (
  <div className="flex items-center px-4 py-1.5 text-[11.5px] cursor-pointer"
    style={{
      borderLeft: active ? '2px solid #3b82f6' : '2px solid transparent',
      color: active ? '#1d4ed8' : '#4b5563',
      fontWeight: active ? 600 : 400,
      backgroundColor: active ? '#eff6ff' : 'transparent',
    }}>
    {label}
  </div>
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
        className="fixed top-0 w-full z-50 backdrop-blur-sm py-3 px-5 md:px-14 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center rounded" style={{ backgroundColor: '#000', padding: '5px 6px' }}>
            <img src="/upstraillogo.png" alt="Upstrail" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
          </div>
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
          className="text-[11px] font-black tracking-widest uppercase px-4 py-2 transition-all duration-200"
          style={{ border: '1px solid #0F0F0F', color: '#0F0F0F', backgroundColor: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor='#0F0F0F'; e.currentTarget.style.color='#F7F4EF'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#0F0F0F'; }}
        >
          Request Demo
        </button>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="pt-28 md:pt-40 pb-12 md:pb-16 px-5 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#208DFC' }}></span>
            <span className="text-[10px] font-black tracking-[0.25em] uppercase" style={{ color: '#8A8478' }}>
              Advanced Planning &amp; Scheduling
            </span>
          </div>

          <h1 className="font-black uppercase leading-none tracking-tighter mb-8 md:mb-12"
            style={{ fontSize: 'clamp(3rem, 9.5vw, 8.5rem)', lineHeight: 0.88 }}>
            The backbone<br />
            of your<br />
            <span style={{ color: '#208DFC' }}>bottomline.</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start"
            style={{ borderTop: '1px solid #D8D3CB', paddingTop: '1.5rem' }}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: '#8A8478' }}>
              Upstrail bridges deep supply chain expertise with cutting-edge software engineering.
              We deliver out-of-the-box optimization engines and fulfillment dashboards built
              for rapid deployment, intelligent decisions with minimal implementation effort.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto shrink-0 flex items-center justify-center gap-3 text-sm font-black tracking-wide px-7 py-4 transition-colors duration-200"
              style={{ backgroundColor: '#0F0F0F', color: '#F7F4EF' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor='#208DFC'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor='#0F0F0F'}
            >
              Request a Demo <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>


      {/* ── PLATFORM MOCKUP ─────────────────────────────────────── */}
      <section id="platform" className="py-16 md:py-20 px-5 md:px-14">
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
            <div className="flex items-center gap-2 px-4 py-2.5"
              style={{ backgroundColor: '#EDEBE5', borderBottom: '1px solid #D8D3CB' }}>
              <div className="w-3 h-3 rounded-full bg-red-400 shrink-0"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 shrink-0"></div>
              <span className="ml-3 text-[11px] font-mono truncate" style={{ color: '#8A8478' }}>
                app.upstrail.com / executive-summary
              </span>
            </div>

            {/* App shell */}
            <div className="flex flex-col" style={{ backgroundColor: '#f3f4f6' }}>

              {/* ── Top header bar ──────────────────────────────── */}
              <div className="flex items-center justify-between px-3 shrink-0"
                style={{ height: '46px', backgroundColor: '#0f172a', color: '#cbd5e1' }}>
                {/* Left: logo + breadcrumb */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 shrink-0 px-2 py-1"
                    style={{ backgroundColor: '#000', borderRadius: '4px' }}>
                    <img src="/upstraillogo.png" alt="Upstrail" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                    <div className="hidden md:flex flex-col leading-none">
                      <span className="text-[11px] font-bold" style={{ color: '#f1f5f9' }}>APS Core</span>
                      <span className="text-[9px]" style={{ color: '#64748b' }}>v1.2.1</span>
                    </div>
                  </div>
                  <span className="text-[10px] hidden md:block" style={{ color: '#475569' }}>Workspace /</span>
                  <span className="text-[11px] font-semibold hidden md:block" style={{ color: '#e2e8f0' }}>Executive summary</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded hidden md:block"
                    style={{ backgroundColor: '#1e293b', border: '1px solid #334155', color: '#94a3b8' }}>
                    demo
                  </span>
                </div>
                {/* Right: action buttons */}
                <div className="flex items-center gap-2">
                  <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-medium"
                    style={{ border: '1px solid #334155', color: '#94a3b8', backgroundColor: 'transparent' }}>
                    <TrendingUp size={11} /> Run forecasting
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-semibold"
                    style={{ backgroundColor: '#1d4ed8', color: '#fff' }}>
                    <Play size={10} fill="currentColor" /> Run optimization
                  </button>
                </div>
              </div>

              {/* ── Below header: sidebar + meta panel + content ── */}
              <div className="flex" style={{ minHeight: '480px' }}>

                {/* Sidebar */}
                <aside className="hidden md:flex flex-col shrink-0"
                  style={{ width: '185px', backgroundColor: '#ffffff', borderRight: '1px solid #e5e7eb' }}>
                  <nav className="flex-1 py-3 overflow-hidden">
                    <p className="text-[9px] font-bold uppercase tracking-[.1em] px-4 pt-1 pb-2" style={{ color: '#9ca3af' }}>
                      Workspace
                    </p>
                    <SideNavItem label="Dataset explorer" />
                    <SideNavItem label="Parameters" />

                    <p className="text-[9px] font-bold uppercase tracking-[.1em] px-4 pt-4 pb-2" style={{ color: '#9ca3af' }}>
                      Advanced Planning
                    </p>
                    <div className="flex items-center">
                      <SideNavItem label="Demand planning" />
                      <span className="w-1.5 h-1.5 rounded-full mr-3 shrink-0" style={{ backgroundColor: '#4f46e5' }}></span>
                    </div>
                    <SideNavItem label="Promotions" />
                    <SideNavItem label="SKU rationalization" />
                    <SideNavItem label="FEFO lot planning" />

                    <p className="text-[9px] font-bold uppercase tracking-[.1em] px-4 pt-4 pb-2" style={{ color: '#9ca3af' }}>
                      Results
                    </p>
                    <SideNavItem label="Executive summary" active />
                    <SideNavItem label="Demand fulfillment" />
                    <SideNavItem label="MRP inventory plan" />
                    <SideNavItem label="Capacity calendar" />
                    <SideNavItem label="Machine analytics" />
                    <SideNavItem label="Resource Gantt" />
                    <SideNavItem label="Network graph" />
                    <SideNavItem label="Production plan" />
                    <SideNavItem label="Subcontract plan" />
                    <SideNavItem label="Trace RCA" />
                    <SideNavItem label="Safety stock" />
                    <SideNavItem label="Exception report" />
                  </nav>
                </aside>

                {/* Meta panel */}
                <div className="hidden md:flex flex-col shrink-0"
                  style={{ width: '175px', backgroundColor: '#ffffff', borderRight: '1px solid #e5e7eb', padding: '12px 12px' }}>
                  {/* Last Run */}
                  <div className="rounded p-2.5 mb-3" style={{ border: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <p className="text-[9px] font-bold uppercase tracking-[.08em] mb-2" style={{ color: '#9ca3af' }}>Last Run</p>
                    <p className="text-[12px] font-bold mb-2" style={{ color: '#111827' }}>v3 · 3 Jul, 18:47</p>
                    {[
                      ['Start date', '2026-07-03'],
                      ['Horizon', '30 days'],
                      ['Constrained', 'Yes'],
                      ['Build ahead', 'Yes'],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-[10px] py-0.5">
                        <span style={{ color: '#6b7280' }}>{k}</span>
                        <span className="font-semibold" style={{ color: '#111827' }}>{v}</span>
                      </div>
                    ))}
                    <div className="mt-2 pt-2 space-y-0.5" style={{ borderTop: '1px solid #e5e7eb' }}>
                      <p className="text-[10px]" style={{ color: '#ef4444' }}>▲ 31 orders with shortage</p>
                      <p className="text-[10px]" style={{ color: '#22c55e' }}>✓ 0 capacity violations</p>
                      <p className="text-[10px]" style={{ color: '#9ca3af' }}>→ Solved in 6.87s</p>
                    </div>
                  </div>
                  {/* Versions */}
                  <p className="text-[9px] font-bold uppercase tracking-[.08em] mb-1.5" style={{ color: '#9ca3af' }}>Versions</p>
                  {[
                    { v: 'v3', t: '18:47', r: '79.4%', active: true },
                    { v: 'v2', t: '15:22', r: '79.4%', active: false },
                    { v: 'v1', t: '14:02', r: '100%',  active: false },
                  ].map(row => (
                    <div key={row.v} className="flex justify-between items-center px-2 py-1.5 rounded text-[11px]"
                      style={{
                        backgroundColor: row.active ? '#eff6ff' : 'transparent',
                        color: row.active ? '#1d4ed8' : '#6b7280',
                        fontWeight: row.active ? 600 : 400,
                      }}>
                      <span style={{ fontFamily: 'monospace' }}>{row.v} · {row.t}</span>
                      <span style={{ fontFamily: 'monospace', color: row.active ? '#1d4ed8' : '#9ca3af' }}>{row.r}</span>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col min-w-0 p-4 md:p-5" style={{ backgroundColor: '#f3f4f6' }}>

                  {/* Tabs */}
                  <div className="flex gap-0 mb-4 shrink-0" style={{ borderBottom: '1px solid #e5e7eb' }}>
                    {['Overview', 'Fulfillment', 'Constraint analysis'].map((tab, i) => (
                      <div key={tab} className="px-4 py-2 text-[11px] font-semibold cursor-pointer"
                        style={{
                          borderBottom: i === 0 ? '2px solid #3b82f6' : '2px solid transparent',
                          color: i === 0 ? '#1d4ed8' : '#6b7280',
                          marginBottom: '-1px',
                        }}>
                        {tab}
                      </div>
                    ))}
                  </div>

                  {/* KPI row — no icons, just label + number */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: 'OTIF rate',        val: '96.4%'  },
                      { label: 'Est. total spend',  val: '₹14.2M' },
                      { label: 'Volume fill rate',  val: '98.1%'  },
                      { label: 'Total shortages',   val: '1,204'  },
                    ].map((kpi) => (
                      <div key={kpi.label} className="p-3 md:p-4 rounded"
                        style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                        <p className="text-[10px] mb-1" style={{ color: '#6b7280' }}>{kpi.label}</p>
                        <h4 className="font-bold tabular-nums" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.6rem)', color: '#111827', lineHeight: 1.1 }}>
                          {kpi.val}
                        </h4>
                      </div>
                    ))}
                  </div>

                  {/* Chart + Constraint analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">

                    {/* Area chart */}
                    <div className="md:col-span-2 p-4 rounded flex flex-col"
                      style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                      <p className="text-[11px] font-semibold mb-3" style={{ color: '#111827' }}>Cumulative supply vs demand</p>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="flex items-center gap-1.5 text-[10px]" style={{ color: '#6b7280' }}>
                          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 2"/></svg>
                          Demand
                        </span>
                        <span className="flex items-center gap-1.5 text-[10px]" style={{ color: '#6b7280' }}>
                          <svg width="24" height="8"><line x1="0" y1="4" x2="24" y2="4" stroke="#3b82f6" strokeWidth="2"/></svg>
                          Supply
                        </span>
                      </div>
                      <svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', flex: 1, minHeight: '90px' }}>
                        {[20,50,80].map(y => (
                          <line key={y} x1="30" y1={y} x2="400" y2={y} stroke="#f1f5f9" strokeWidth="1"/>
                        ))}
                        {['80L','60L','40L','20L','0'].map((l,i) => (
                          <text key={l} x="0" y={[20,38,56,74,92][i]} fontSize="7" fill="#9ca3af">{l}</text>
                        ))}
                        {/* Demand dashed */}
                        <path d="M40,85 L105,82 L170,79 L235,75 L300,72 L365,69 L400,67"
                          fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3"/>
                        {/* Supply solid */}
                        <path d="M40,88 L105,85 L170,80 L235,73 L300,64 L365,55 L400,50 L400,100 L40,100 Z"
                          fill="#dbeafe" stroke="none" fillOpacity="0.4"/>
                        <path d="M40,88 L105,85 L170,80 L235,73 L300,64 L365,55 L400,50"
                          fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
                        {['Jul 7','Aug 9','Sep 11','Oct 14','Nov 16','Dec 19','Jan 28'].map((m,i) => (
                          <text key={m} x={40+i*60} y={108} fontSize="7" fill="#9ca3af">{m}</text>
                        ))}
                      </svg>
                    </div>

                    {/* Constraint analysis */}
                    <div className="p-4 rounded flex flex-col"
                      style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}>
                      <p className="text-[11px] font-semibold mb-3" style={{ color: '#111827' }}>Constraint analysis</p>
                      {/* Donut */}
                      <div className="flex justify-center mb-3">
                        <svg viewBox="0 0 90 90" width="90" height="90">
                          {/* Donut segments: 39%, 37%, 24% */}
                          <circle cx="45" cy="45" r="32" fill="none" stroke="#e5e7eb" strokeWidth="14"/>
                          {/* Segment 1: 39% = 140.4deg — indigo */}
                          <circle cx="45" cy="45" r="32" fill="none" stroke="#1e40af" strokeWidth="14"
                            strokeDasharray={`${39*2.01} ${100*2.01}`} strokeDashoffset={`${25*2.01}`}
                            transform="rotate(-90 45 45)"/>
                          {/* Segment 2: 37% — blue */}
                          <circle cx="45" cy="45" r="32" fill="none" stroke="#3b82f6" strokeWidth="14"
                            strokeDasharray={`${37*2.01} ${100*2.01}`} strokeDashoffset={`${-14*2.01}`}
                            transform="rotate(-90 45 45)"/>
                          {/* Segment 3: 24% — light */}
                          <circle cx="45" cy="45" r="32" fill="none" stroke="#bfdbfe" strokeWidth="14"
                            strokeDasharray={`${24*2.01} ${100*2.01}`} strokeDashoffset={`${-51*2.01}`}
                            transform="rotate(-90 45 45)"/>
                          <text x="45" y="42" textAnchor="middle" fontSize="13" fontWeight="700" fill="#111827">96.4%</text>
                          <text x="45" y="53" textAnchor="middle" fontSize="7" fill="#9ca3af">OTIF</text>
                        </svg>
                      </div>
                      {/* Constraint list */}
                      <div className="space-y-2">
                        {[
                          { label: 'Capacity Bottleneck',   n: '16 constraints', pct: '39%', color: '#1e40af' },
                          { label: 'Lead Time Constraint',  n: '15 constraints', pct: '37%', color: '#3b82f6' },
                          { label: 'Other Constraint',      n: '10 constraints', pct: '24%', color: '#bfdbfe' },
                        ].map(c => (
                          <div key={c.label} className="flex items-start gap-2">
                            <div className="w-0.5 rounded-full mt-0.5 shrink-0" style={{ height: '32px', backgroundColor: c.color }}></div>
                            <div>
                              <p className="text-[10px] font-semibold" style={{ color: '#111827' }}>{c.label}</p>
                              <p className="text-[9px]" style={{ color: '#9ca3af' }}>{c.n} ({c.pct})</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES ────────────────────────────────────────── */}
      <section id="capabilities" className="py-16 md:py-20 px-5 md:px-14"
        style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-20 mb-12 md:mb-16 items-end">
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
                className="grid grid-cols-[40px_1fr] md:grid-cols-[48px_1fr_1fr] gap-5 md:gap-12 py-7 md:py-8"
                style={{ borderBottom: '1px solid #D8D3CB' }}
              >
                <span className="font-mono text-xs font-bold pt-1" style={{ color: '#D8D3CB' }}>{cap.num}</span>
                <h3 className="text-base md:text-xl font-black uppercase tracking-tight">{cap.title}</h3>
                <p className="text-sm leading-relaxed col-start-2 md:col-start-3" style={{ color: '#8A8478' }}>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF / CASE STUDY ──────────────────────────────────── */}
      <section id="proof" className="py-16 md:py-20 px-5 md:px-14"
        style={{ backgroundColor: '#0F0F0F', color: '#F7F4EF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-10 md:mb-14" style={{ color: '#555' }}>
            Case Study — Tier 1 Automotive
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <h2 className="font-black uppercase tracking-tighter leading-none mb-6 md:mb-8"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 0.9 }}>
                OTIF improved<br />by 6% for clients.
              </h2>
              <p className="text-base leading-relaxed mb-8 md:mb-10" style={{ color: '#8A8478' }}>
                We partnered with a Tier-1 manufacturing enterprise to deploy a full-scale
                intelligent planning solution. 70% out-of-the-box. 30% custom-fitted.
                A result that off-the-shelf software couldn't get close to.
              </p>
              <ul className="space-y-4 md:space-y-5" style={{ borderTop: '1px solid #2a2a2a', paddingTop: '1.5rem' }}>
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
            <div className="relative p-5 md:p-6 font-mono text-sm overflow-hidden flex flex-col"
              style={{ backgroundColor: '#0d1117', border: '1px solid #2a2a2a', minHeight: '300px' }}>
              <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: '1px solid #2a2a2a' }}>
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
              <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0d1117, transparent)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-5 md:px-14" style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
          <h2 className="font-black uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', lineHeight: 0.88 }}>
            Ready to<br />optimize?
          </h2>
          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="text-sm leading-relaxed max-w-xs md:text-right" style={{ color: '#8A8478' }}>
              Stop relying on generic ERP modules and manual spreadsheets.
              Let's build an engine that actually fits your operation.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full md:w-auto flex items-center justify-center gap-3 text-sm font-black tracking-wide px-7 py-4 transition-colors duration-200"
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
      <footer className="py-6 md:py-8 px-5 md:px-14" style={{ borderTop: '1px solid #D8D3CB' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/upstraillogo.png" alt="Upstrail" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
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
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4"
            style={{ backgroundColor: 'rgba(15,15,15,0.6)', backdropFilter: 'blur(4px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg relative overflow-hidden"
              style={{ backgroundColor: '#F7F4EF', border: '1px solid #D8D3CB', borderBottom: 'none' }}
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

              <div className="p-6 md:p-10">
                <div className="text-[9px] font-black tracking-[0.25em] uppercase mb-4" style={{ color: '#8A8478' }}>
                  Get in Touch
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
                  Let's optimize<br />your operations.
                </h3>
                <p className="text-sm mb-6 md:mb-8" style={{ color: '#8A8478' }}>
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
                      { label: 'Name / Company', name: 'name',  type: 'text',  placeholder: 'Rohit Garg @ Manufacturing Pvt Ltd' },
                      { label: 'Work Email',     name: 'email', type: 'email', placeholder: 'rohit@company.com' },
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
