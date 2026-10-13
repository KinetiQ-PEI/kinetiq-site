import React, { useState } from 'react';
import { nearTermEvents as EVENTS, roadmap as ROADMAP } from '../data/site.js';

const PHASE_CLASS = { Inception: 'ph-inception', Elaboration: 'ph-elaboration', Construction: 'ph-construction', Transition: 'ph-transition' };

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function buildGrid(year, month) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const startOffset = (firstDay + 6) % 7;
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function Calendar() {
  const now = new Date();
  const [year, setYear] = useState(() => now.getFullYear());
  const [month, setMonth] = useState(() => now.getMonth() + 1);

  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const prev = () => { if (month === 1) { setYear((y) => y - 1); setMonth(12); } else setMonth((m) => m - 1); };
  const next = () => { if (month === 12) { setYear((y) => y + 1); setMonth(1); } else setMonth((m) => m + 1); };
  const goToToday = () => {
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
  };

  const cells = buildGrid(year, month);
  const getEvents = (day) => {
    const key = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return EVENTS[key] || [];
  };

  // Accordion state: Elaboration is current phase (Oct 2026)
  const [openPhases, setOpenPhases] = useState({
    Inception: false,
    Elaboration: true,
    Construction: false,
    Transition: false,
  });

  const togglePhase = (phase) => {
    setOpenPhases((prev) => ({ ...prev, [phase]: !prev[phase] }));
  };

  const expandAll = () => {
    setOpenPhases({
      Inception: true,
      Elaboration: true,
      Construction: true,
      Transition: true,
    });
  };

  const collapseAll = () => {
    setOpenPhases({
      Inception: false,
      Elaboration: false,
      Construction: false,
      Transition: false,
    });
  };

  const allOpen = Object.values(openPhases).every(Boolean);

  const getPhaseBadge = (phase) => {
    switch (phase) {
      case 'Inception':
        return { label: 'Completed', className: 'rm-badge-completed' };
      case 'Elaboration':
        return { label: 'Current Phase', className: 'rm-badge-current' };
      default:
        return { label: 'Upcoming', className: 'rm-badge-upcoming' };
    }
  };

  return (
    <main style={{ maxWidth: 1100 }}>
      <header className="pagehead">
        <h1>Project Calendar</h1>
        <p>Weekly meetings and course milestones month by month, plus the full lifecycle roadmap below.</p>
      </header>

      <div className="cal-header">
        <h2>{MONTH_NAMES[month - 1]} {year}</h2>
        <div className="cal-nav-btns">
          <button className="btn alt" onClick={prev} aria-label="Previous month">← Prev</button>
          <button className="btn alt" onClick={goToToday}>Today</button>
          <button className="btn alt" onClick={next} aria-label="Next month">Next →</button>
        </div>
      </div>

      <div className="cal-grid-wrap">
        <div className="cal-grid">
          {DAY_NAMES.map((d) => <div key={d} className="day-name">{d}</div>)}
          {cells.map((day, i) => {
            if (!day) return <div key={`empty-${i}`} className="cal-cell empty" />;
            const key = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const events = getEvents(day);
            return (
              <div key={key} className={`cal-cell ${key === today ? 'today' : ''}`}>
                <span className="day-num">{day}</span>
                {events.map((ev, ei) => (
                  <span key={ei} className={`cal-event ${ev.type}`} title={ev.label}>{ev.label}</span>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="cal-legend">
        <div className="cal-legend-item"><span className="cal-legend-dot meeting" />Advisor meeting / team event</div>
        <div className="cal-legend-item"><span className="cal-legend-dot seminar" />Seminar / Holiday</div>
        <div className="cal-legend-item"><span className="cal-legend-dot deadline" />Milestone / Deadline</div>
      </div>

      <section className="roadmap-section">
        <div className="roadmap-header-row">
          <div>
            <span className="section-label">Full lifecycle</span>
            <h2>Project roadmap</h2>
            <p style={{ margin: 0 }}>The team's own plan for the whole project, from kick-off to the public defence.</p>
          </div>
          <div className="roadmap-controls">
            <button
              type="button"
              className="btn alt sm"
              onClick={allOpen ? collapseAll : expandAll}
            >
              {allOpen ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
        </div>

        <div className="roadmap-accordion">
          {ROADMAP.map((g) => {
            const isOpen = !!openPhases[g.phase];
            const badge = getPhaseBadge(g.phase);
            return (
              <div
                key={g.phase}
                className={`rm-accordion-item ${PHASE_CLASS[g.phase]} ${isOpen ? 'open' : 'closed'}`}
              >
                <button
                  type="button"
                  className="rm-accordion-trigger"
                  onClick={() => togglePhase(g.phase)}
                  aria-expanded={isOpen}
                >
                  <div className="rm-trigger-left">
                    <span className="rm-dot" />
                    <span className="rm-phase-title">{g.phase}</span>
                    <span className="rm-items-count">
                      {g.items.length} {g.items.length === 1 ? 'task' : 'tasks'}
                    </span>
                  </div>
                  <div className="rm-trigger-right">
                    <span className={`rm-phase-badge ${badge.className}`}>{badge.label}</span>
                    <span className={`rm-chevron ${isOpen ? 'open' : ''}`} aria-hidden="true">
                      ▼
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="rm-accordion-content">
                    <div className="rm-items">
                      {g.items.map((it) => (
                        <div key={it.block} className="rm-item">
                          <span className="rm-when">{it.when}</span>
                          <h3>{it.block}</h3>
                          <p>{it.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
