import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { project, flow, goals } from '../data/site.js';

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
          {/* Route path defs */}
          <path id="r0" d="M 60,200 Q 180,80  320,160 T 480,140" />
          <path id="r1" d="M 60,280 Q 200,340 340,240 T 480,280" />
          <path id="r2" d="M 120,60  Q 340,280 440,120" />
          <path id="r3" d="M 60,200 Q 260,200 480,280" />
          <path id="r4" d="M 200,350 Q 300,180 440,200" />
        </defs>

        {/* Soft route lines */}
        <use href="#r0" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
        <use href="#r1" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.12" strokeLinecap="round" />
        <use href="#r2" fill="none" stroke="#34D399" strokeWidth="1.5" opacity="0.12" strokeLinecap="round" />
        <use href="#r3" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.10" strokeLinecap="round" />
        <use href="#r4" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.10" strokeLinecap="round" />

        {/* Animated bikes — dots gliding along paths */}
        {[
          { path: '#r0', dur: '8s', delay: '0s', color: 'var(--accent)', r: 5 },
          { path: '#r0', dur: '8s', delay: '4s', color: 'var(--accent)', r: 4 },
          { path: '#r1', dur: '11s', delay: '1s', color: '#60A5FA', r: 5 },
          { path: '#r1', dur: '11s', delay: '6s', color: '#60A5FA', r: 4 },
          { path: '#r2', dur: '9s', delay: '2s', color: '#34D399', r: 5 },
          { path: '#r3', dur: '13s', delay: '0.5s', color: '#60A5FA', r: 4 },
          { path: '#r4', dur: '10s', delay: '3s', color: '#F59E0B', r: 4 },
        ].map((b, i) => (
          <circle key={i} r={b.r} fill={b.color} opacity="0.85"
            style={{ filter: `drop-shadow(0 0 ${b.r + 2}px ${b.color})` }}>
            <animateMotion dur={b.dur} begin={b.delay} repeatCount="indefinite">
              <mpath href={b.path} />
            </animateMotion>
          </circle>
        ))}

        {/* Station hubs */}
        {[
          { cx: 60, cy: 200 }, { cx: 320, cy: 160 }, { cx: 480, cy: 140 },
          { cx: 60, cy: 280 }, { cx: 340, cy: 240 }, { cx: 480, cy: 280 },
          { cx: 120, cy: 60 }, { cx: 440, cy: 120 }, { cx: 200, cy: 350 },
        ].map((s, i) => (
          <g key={i}>
            <circle cx={s.cx} cy={s.cy} r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
            <circle cx={s.cx} cy={s.cy} r="3.5" fill="var(--accent)" opacity="0.7" />
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

/* ── Main page ── */
export default function Home() {
  const heroRef = useRef(null);
  const [blur, setBlur] = useState(0);

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
            <h1 className="hero-title">KINET<span>IQ</span></h1>
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
        <section>
          <span className="section-label">How it works</span>
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
    </main>
  );
}
