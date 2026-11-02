import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { overview, commPlan, resources, isPlaceholder } from '../data/site.js';
import { documentGroups, docsForMilestone, groupAnchor } from '../lib/documents.js';

const STATUS_LABEL = { available: 'Available', 'in-revision': 'In revision', upcoming: 'Upcoming' };

function SectionCard({ id, title, children }) {
  return (
    <section className="doc-section" id={id}>
      <div className="doc-section-header"><h2>{title}</h2></div>
      {children}
    </section>
  );
}

function DocIcon({ doc }) {
  if (!doc.url) {
    return (
      <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, var(--amber) 12%, transparent)', color: 'var(--amber)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>
    );
  }
  if (doc.type === 'PNG') {
    return (
      <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, #7c3aed 12%, transparent)', color: '#7c3aed' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      </div>
    );
  }
  if (doc.id.endsWith('presentation')) {
    return (
      <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, #3b82f6 12%, transparent)', color: '#3b82f6' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>
    );
  }
  return (
    <div className="doc-file-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    </div>
  );
}

function DocCard({ doc }) {
  const links = (doc.links ?? []).filter((l) => !isPlaceholder(l.href));
  return (
    <div className="doc-file-card">
      <div className="doc-file-info">
        <DocIcon doc={doc} />
        <div className="doc-file-meta">
          <div className="doc-file-title">{doc.title}</div>
          {doc.description && <div className="doc-file-desc">{doc.description}</div>}
          <div className="doc-file-tags">
            <span className={`doc-file-tag ${doc.status}`}>{STATUS_LABEL[doc.status]}</span>
            {doc.type && <span className="doc-file-tag">{doc.type}</span>}
            {doc.size && <span className="doc-file-tag">{doc.size}</span>}
            {doc.pages && <span className="doc-file-tag">{doc.pages} {doc.pages === 1 ? 'page' : 'pages'}</span>}
          </div>
        </div>
      </div>
      {doc.url && (
        <div className="doc-file-actions">
          <a href={doc.url} target="_blank" rel="noreferrer" className="doc-btn primary">
            {doc.type === 'PNG' ? 'View diagram ↗' : 'View PDF ↗'}
          </a>
          <a href={doc.url} download={doc.downloadName} className="doc-btn">
            Download
          </a>
          {links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="doc-btn">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function groupTitle(g) {
  return `${g.id === 'FINAL' ? 'Final' : g.id} · ${g.label}`;
}

export default function Docs() {
  const { search } = useLocation();

  // /docs?ms=ms2 scrolls to that milestone group. Deferred one frame so it runs
  // after the app-level scroll-to-top on route change.
  useEffect(() => {
    const target = new URLSearchParams(search).get('ms');
    if (!target) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(target.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [search]);

  return (
    <main className="docs-main">
      <header className="pagehead">
        <h1>Documentation</h1>
        <p>Project overview, specifications, deliverables, communication plan and resources in one place.</p>
      </header>

      {documentGroups.map((g) => {
        const docs = docsForMilestone(g.id);
        return (
          <SectionCard key={g.id} id={groupAnchor(g.id)} title={groupTitle(g)}>
            <div className="doc-group-meta">
              <span className="meeting-chip muted">{g.phase}</span>
              <span className="meeting-chip muted">{g.dates}</span>
              <span className={`doc-file-tag ${g.status === 'delivered' ? 'available' : ''}`}>
                {g.status === 'delivered' ? 'Delivered' : 'Upcoming'}
              </span>
            </div>
            {g.note && <p className="doc-group-note">{g.note}</p>}
            {docs.length > 0 && (
              <div className="doc-file-list">
                {docs.map((d) => <DocCard key={d.id} doc={d} />)}
              </div>
            )}
          </SectionCard>
        );
      })}

      <SectionCard title="Project overview">
        <div className="overview-body">
          <p><strong>Context.</strong> {overview.context}</p>
          <p><strong>Problem.</strong> {overview.problem}</p>
          <p><strong>Expected results.</strong> {overview.expectedResults}</p>
          <p className="overview-more">Full objectives list on the <Link to="/">home page</Link>.</p>
        </div>
      </SectionCard>

      <SectionCard title="Communication plan">
        <div className="meeting-list">
          {commPlan.map((r) => (
            <div className="meeting-row" key={r.meeting}>
              <div className="meeting-row-name">{r.meeting}</div>
              <div className="meeting-row-meta"><span className="meeting-chip">{r.when}</span><span className="meeting-chip muted">{r.who}</span></div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Project resources">
        <div className="info-card-grid">
          {resources.map((r) => (
            <div key={r.name} className="info-card">
              <div className="info-card-label">{r.name}</div>
              {r.link && r.link.startsWith('/') ? (
                <Link to={r.link} className="info-card-badge">{r.linkLabel}</Link>
              ) : (
                <a href={r.link} target="_blank" rel="noreferrer" className="info-card-badge">Open</a>
              )}
            </div>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
