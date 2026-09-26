import React from 'react';
import { Link } from 'react-router-dom';
import { overview, goals, modules, commPlan, resources, roles, isPlaceholder } from '../data/site.js';
import proposalPdf from '../content/documentation/2027PEI_MariaBike_Proposal.pdf';

function SectionCard({ title, icon, children }) {
  return (
    <section className="doc-section">
      <div className="doc-section-header">{icon && <span className="doc-section-icon">{icon}</span>}<h2>{title}</h2></div>
      {children}
    </section>
  );
}

export default function Docs() {
  return (
    <main className="docs-main">
      <header className="pagehead">
        <h1>Documentation (Draft)</h1>
        <p>Project overview, documents, plans, roles, tasks and deliverables in one place.</p>
      </header>

      <SectionCard title="Project documents" icon="📁">
        <div className="doc-file-list">
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Project Proposal (mariaBike)</div>
                <div className="doc-file-desc">Official PEI 2026/2027 project specification and requirements proposal.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag available">Available</span>
                  <span className="doc-file-tag">PDF</span>
                  <span className="doc-file-tag">77 KB</span>
                  <span className="doc-file-tag">Inception</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <a href={proposalPdf} target="_blank" rel="noreferrer" className="doc-btn primary">
                View PDF ↗
              </a>
              <a href={proposalPdf} download="2027PEI_MariaBike_Proposal.pdf" className="doc-btn">
                Download
              </a>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Project overview" icon="🚲">
        <div className="overview-body">
          <p><strong>Context.</strong> {overview.context}</p>
          <p><strong>Problem.</strong> {overview.problem}{overview.problemDraft && <span className="badge">Draft</span>}</p>
          <p><strong>Expected results.</strong> {overview.expectedResults}</p>
          <p><strong>Related work.</strong> {overview.relatedWork}{overview.relatedWorkDraft && <span className="badge">Draft</span>}</p>
          <p className="overview-more">Full objectives list on the <Link to="/">home page</Link>.</p>
        </div>
      </SectionCard>

      <SectionCard title="Communication plan" icon="💬">
        <div className="meeting-list">
          {commPlan.map((r) => (
            <div className="meeting-row" key={r.meeting}>
              <div className="meeting-row-name">{r.meeting}</div>
              <div className="meeting-row-meta"><span className="meeting-chip">{r.when}</span><span className="meeting-chip muted">{r.who}</span></div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Project plan and repository" icon="📁">
        <div className="info-card-grid">
          {resources.map((r) => (
            <div key={r.name} className="info-card">
              <div className="info-card-label">{r.name}</div>
              <div className="info-card-sub">Owner: <strong>{r.owner}</strong></div>
              {r.link && r.link.startsWith('/') ? (
                <Link to={r.link} className="info-card-badge">{r.linkLabel}</Link>
              ) : isPlaceholder(r.link) ? (
                <span className="info-card-badge" style={{ '--badge-color': 'var(--muted)' }}>to add</span>
              ) : (
                <a href={r.link} target="_blank" rel="noreferrer" className="info-card-badge">Open</a>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Ongoing roles" icon="👤">
        <div className="role-list">
          {roles.map((r) => (
            <div className="role-pill" key={r.member}>
              <div className="role-pill-avatar">{r.member[0]}</div>
              <div className="role-pill-body">
                <span className="role-pill-name">{r.member}</span>
                <span className="role-pill-role">{r.role}</span>
                <span className="role-pill-act">{r.activities}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Tasks by module" icon="🧩">
        <div className="module-list">
          {modules.map((m) => (
            <div className="module-card" key={m.name}>
              <div className="module-icon">{m.icon}</div>
              <div className="module-body"><div className="module-name">{m.name}</div><div className="module-tasks">{m.tasks}</div></div>
              <span className="module-owner">to assign</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
