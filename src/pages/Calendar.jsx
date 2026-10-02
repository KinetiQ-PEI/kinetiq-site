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
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(9);

  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const prev = () => { if (month === 1) { setYear((y) => y - 1); setMonth(12); } else setMonth((m) => m - 1); };
  const next = () => { if (month === 12) { setYear((y) => y + 1); setMonth(1); } else setMonth((m) => m + 1); };

  const cells = buildGrid(year, month);
  const getEvents = (day) => {
    const key = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return EVENTS[key] || [];
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
          <button className="btn alt" onClick={() => { setYear(2026); setMonth(9); }}>Sep 2026</button>
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

      <section>
        <span className="section-label">Full lifecycle</span>
        <h2>Project roadmap</h2>
        <p>The team's own plan for the whole project, from kick-off to the public defence. Dates are estimates and will move as work progresses.</p>
        <div className="roadmap">
          {ROADMAP.map((g) => (
            <div key={g.phase} className={`rm-phase ${PHASE_CLASS[g.phase]}`}>
              <div className="rm-phase-label"><span className="rm-dot" />{g.phase}</div>
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
          ))}
        </div>
      </section>
    </main>
  );
}
