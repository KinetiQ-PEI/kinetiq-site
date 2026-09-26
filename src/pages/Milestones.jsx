import React from 'react';
import { Link } from 'react-router-dom';
import { milestones } from '../data/site.js';

export default function Milestones() {
  const now = new Date();
  const nextI = milestones.findIndex((m) => new Date(m.dates[m.dates.length - 1] + 'T23:59') >= now);
  return (
    <main>
      <header className="pagehead">
        <h1>Milestones</h1>
        <p>Four milestones, from lifecycle objectives to a working MVP. Dates follow the course calendar and may change. Full roadmap in the <Link to="/calendar">calendar</Link>.</p>
      </header>
      <ol className="tl">
        {milestones.map((m, i) => (
          <li key={m.id} className={i === nextI ? 'next' : ''}>
            <div className="ms">
              <div className="ms-top"><h3>{m.id}: {m.title}</h3><span className="date">{m.label}</span></div>
              <small>{m.phase} phase{i === nextI ? ', up next' : ''}</small>
              <p>{m.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
