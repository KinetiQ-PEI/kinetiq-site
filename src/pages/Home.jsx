import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { project, flow, goals } from '../data/site.js';
import logoBlack from '../content/logo_black_kinetiq.png';
import logoWhite from '../content/logo_white_kinetiq.png';

/* ── Animated Route Map (soft version) ── */
function SoftRouteMap({ blurAmount }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        filter: `blur(${blurAmount}px)`,
        transition: 'filter 0.1s linear',
        willChange: 'filter',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 520 400"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Route paths: r0=Inception(blue), r1=Elaboration(purple), r2=Construction(amber), r3=Transition(green), r4=extra(blue) */}
          <path id="r0" d="M 60,200 Q 180,80  320,160 T 480,140" />
          <path id="r1" d="M 60,280 Q 200,340 340,240 T 480,280" />
          <path id="r2" d="M 120,60  Q 340,280 440,120" />
          <path id="r3" d="M 60,200 Q 260,200 480,280" />
          <path id="r4" d="M 200,350 Q 300,180 440,200" />
        </defs>

        {/* Soft route lines */}
        <use href="#r0" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.18" strokeLinecap="round" />
        <use href="#r1" fill="none" stroke="#7C3AED" strokeWidth="1.5" opacity="0.16" strokeLinecap="round" />
        <use href="#r2" fill="none" stroke="#B45309" strokeWidth="1.5" opacity="0.16" strokeLinecap="round" />
        <use href="#r3" fill="none" stroke="#15803D" strokeWidth="1.5" opacity="0.14" strokeLinecap="round" />
        <use href="#r4" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.12" strokeLinecap="round" />

        {/* Animated bikes — dots gliding along paths */}
        {[
          { path: '#r0', dur: '8s',  delay: '0s',   color: '#2563EB', r: 5 }, // Inception
          { path: '#r0', dur: '8s',  delay: '4s',   color: '#2563EB', r: 4 },
          { path: '#r1', dur: '11s', delay: '1s',   color: '#7C3AED', r: 5 }, // Elaboration
          { path: '#r1', dur: '11s', delay: '6s',   color: '#7C3AED', r: 4 },
          { path: '#r2', dur: '9s',  delay: '2s',   color: '#B45309', r: 5 }, // Construction
          { path: '#r3', dur: '13s', delay: '0.5s', color: '#15803D', r: 4 }, // Transition
          { path: '#r4', dur: '10s', delay: '3s',   color: '#2563EB', r: 4 },
        ].map((b, i) => (
          <circle key={i} r={b.r} fill={b.color} opacity="0.85"
            style={{ filter: `drop-shadow(0 0 ${b.r + 2}px ${b.color})` }}>
            <animateMotion dur={b.dur} begin={b.delay} repeatCount="indefinite">
              <mpath href={b.path} />
            </animateMotion>
          </circle>
        ))}

        {/* Station hubs — colored by which route they belong to */}
        {[
          { cx: 60,  cy: 200, c: '#2563EB' }, { cx: 320, cy: 160, c: '#2563EB' }, { cx: 480, cy: 140, c: '#2563EB' },
          { cx: 60,  cy: 280, c: '#7C3AED' }, { cx: 340, cy: 240, c: '#7C3AED' }, { cx: 480, cy: 280, c: '#7C3AED' },
          { cx: 120, cy: 60,  c: '#B45309' }, { cx: 440, cy: 120, c: '#B45309' }, { cx: 200, cy: 350, c: '#15803D' },
        ].map((s, i) => (
          <g key={i}>
            <circle cx={s.cx} cy={s.cy} r="9"   fill="var(--surface)" stroke={s.c} strokeWidth="1.5" opacity="0.6" />
            <circle cx={s.cx} cy={s.cy} r="3.5" fill={s.c} opacity="0.7" />
          </g>
        ))}

        {/* Edge fade overlay */}
        <rect width="520" height="400" fill="url(#fade)" />
      </svg>
    </div>
  );
}

/* ── Goal card ── */
function GoalCard({ num, text }) {
  return (
    <li className="goal-card">
      <span className="goal-num">{String(num).padStart(2, '0')}</span>
      <span>{text}</span>
    </li>
  );
}

// Check dynamically for any diagram files dropped into content/diagrams
const diagramFiles = import.meta.glob('../content/diagrams/*.{png,jpg,jpeg,svg,pdf}', { eager: true, import: 'default' });
const diagramList = Object.entries(diagramFiles).map(([path, mod]) => ({
  name: path.split('/').pop(),
  src: mod,
  isPdf: path.endsWith('.pdf'),
}));

/* ── Main page ── */
export default function Home() {
  const heroRef = useRef(null);
  const [blur, setBlur] = useState(0);
  const [showArchModal, setShowArchModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const heroH = rect.height || 600;
      const progress = Math.min(scrolled / (heroH * 0.6), 1);
      setBlur(progress * 6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main style={{ maxWidth: '100%', padding: 0 }}>

      {/* ── HERO ── */}
      <div ref={heroRef} className="hero-split">
        {/* Left: brand + intro */}
        <div className="hero-left">
          <div className="hero-inner">
            <p className="hero-eyebrow">{project.course} · {project.academicYear} · {project.university}</p>
            <h1 className="hero-brand">
              <img src={logoBlack} alt="KinetiQ" className="hero-logo hero-logo-light" />
              <img src={logoWhite} alt="KinetiQ" className="hero-logo hero-logo-dark" />
            </h1>
            <p className="hero-slogan">{project.tagline}</p>
            <div className="btns" style={{ marginBottom: 0 }}>
              <Link className="btn" to="/team">Meet the team</Link>
              <Link className="btn alt" to="/milestones">Milestones</Link>
              <Link className="btn alt" to="/calendar">Calendar</Link>
            </div>
          </div>
        </div>

        {/* Right: animated map */}
        <div className="hero-right">
          <SoftRouteMap blurAmount={blur} />
        </div>
      </div>

      <div className="home-body">
        <section className="how-it-works-section">
          <div className="how-it-works-header">
            <div>
              <span className="section-label">How it works</span>
              <h2>End-to-end data pipeline</h2>
              <p className="flow-desc">
                Real-time sensor telemetry is collected via edge MQTT brokers and streamed into Apache Kafka.<br />
                Extensible modules process events to power the operator back-office and mobile rider apps.
              </p>
            </div>
            <button
              type="button"
              className="btn alt arch-trigger-btn"
              onClick={() => setShowArchModal(true)}
              aria-label="View system architecture"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              View architecture
            </button>
          </div>
          <ol className="flow">{flow.map((f) => <li key={f}>{f}</li>)}</ol>
        </section>

        <section>
          <span className="section-label">Objectives</span>
          <h2>What we're building</h2>
          <ul className="goal-list">
            {goals.map((g, i) => <GoalCard key={g} num={i + 1} text={g} />)}
          </ul>
        </section>
      </div>

      {/* ── Architecture Modal ── */}
      {showArchModal && (
        <div className="modal-backdrop" onClick={() => setShowArchModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-label" style={{ marginBottom: '0.25rem' }}>Lifecycle architecture · MS2</span>
                <h2 style={{ margin: 0, fontSize: '1.4rem' }}>KINETIQ Architecture</h2>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowArchModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              {diagramList.length > 0 ? (
                <div className="arch-diagram-gallery">
                  {diagramList.map((d) => (
                    <div key={d.name} className="arch-diagram-item">
                      {d.isPdf ? (
                        <div className="arch-pdf-preview">
                          <p>Architecture document: <strong>{d.name}</strong></p>
                          <a href={d.src} target="_blank" rel="noreferrer" className="btn primary sm">
                            Open PDF ↗
                          </a>
                        </div>
                      ) : (
                        <img src={d.src} alt="KINETIQ System Architecture" className="arch-img" />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="arch-preview-card">
                  <div className="arch-diagram-blueprint">
                    <div className="arch-node sources">
                      <span className="arch-node-tag">SOURCES</span>
                      <strong>ESP32 Sensors & Simulators</strong>
                      <span className="arch-node-sub">Publish telemetry over MQTT</span>
                    </div>
                    <div className="arch-node ingestion">
                      <span className="arch-node-tag">INGESTION</span>
                      <strong>MQTT Broker & Kafka</strong>
                      <span className="arch-node-sub">MQTT Source Connector feeds Apache Kafka, the event backbone</span>
                    </div>
                    <div className="arch-node realtime">
                      <span className="arch-node-tag arch-tag-realtime">REAL-TIME PATH</span>
                      <strong>Processing & Live Feed</strong>
                      <span className="arch-node-sub">Telemetry Processing · WebSocket Service · InfluxDB sink</span>
                    </div>
                    <div className="arch-node operational">
                      <span className="arch-node-tag arch-tag-operational">OPERATIONAL PATH</span>
                      <strong>Core API & Fleet Management</strong>
                      <span className="arch-node-sub">Spring Boot · ML and BI modules · Keycloak</span>
                    </div>
                    <div className="arch-node clients">
                      <span className="arch-node-tag">CLIENTS</span>
                      <strong>Web Back-office & Rider App</strong>
                      <span className="arch-node-sub">React · Flutter, through the API Gateway</span>
                    </div>
                  </div>

                  <div className="arch-strip">
                    <span className="arch-strip-chip">Data layer: InfluxDB (time series) · PostgreSQL + PostGIS (fleet, zones)</span>
                    <span className="arch-strip-chip">All services run in Docker containers</span>
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <Link to="/docs" className="btn alt sm" onClick={() => setShowArchModal(false)}>
                View Documentation & Deliverables →
              </Link>
              <button type="button" className="btn sm" onClick={() => setShowArchModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
