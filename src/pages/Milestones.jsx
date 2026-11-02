import React from 'react';
import { Link } from 'react-router-dom';
import { milestones } from '../data/site.js';
import { docsForMilestone, groupAnchor } from '../lib/documents.js';

// Deliverable buttons for a milestone, read from `documents` in site.js.
function DeliverableActions({ id }) {
  const docs = docsForMilestone(id);
  const presentation = docs.find((d) => d.id.endsWith('presentation') && d.url);
  const anyAvailable = docs.some((d) => d.status === 'available');
  return (
    <>
      {presentation && (
        <a href={presentation.url} target="_blank" rel="noreferrer" className="doc-btn primary">
          View presentation ↗
        </a>
      )}
      {docs.length > 0 && (
        <Link to={`/docs?ms=${groupAnchor(id)}`} className="doc-btn">
          All {docs.length} {docs.length === 1 ? 'document' : 'documents'} →
        </Link>
      )}
      {!anyAvailable && <span className="ms-deliverable-tag">Upcoming</span>}
    </>
  );
}

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
                    <span className="ms-deliverable-name">{m.deliverable}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <DeliverableActions id={m.id} />
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
