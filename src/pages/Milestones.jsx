import React from 'react';
import { Link } from 'react-router-dom';
import { milestones } from '../data/site.js';

import ms1Pdf from '../content/presentations/ms1.pdf';

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
              {m.deliverable && (
                <div className="ms-deliverable">
                  <div className="ms-deliverable-label">
                    <span className="ms-deliverable-icon" aria-hidden="true">📄</span>
                    <span className="ms-deliverable-name">{m.deliverable}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {m.id === 'MS1' && (
                      <>
                        <a href={ms1Pdf} target="_blank" rel="noreferrer" className="doc-btn primary">
                          View PDF ↗
                        </a>
                        <a href={ms1Pdf} download="KINETIQ_MS1_Presentation.pdf" className="doc-btn">
                          Download PDF
                        </a>
                      </>
                    )}
                    {m.deliverableLink ? (
                      <a href={m.deliverableLink} target="_blank" rel="noreferrer" className={m.id === 'MS1' ? 'doc-btn' : 'doc-btn primary'}>
                        {m.id === 'MS1' ? 'Canva Slides ↗' : 'View Presentation ↗'}
                      </a>
                    ) : (
                      m.id !== 'MS1' && <span className="ms-deliverable-tag">Upcoming</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
