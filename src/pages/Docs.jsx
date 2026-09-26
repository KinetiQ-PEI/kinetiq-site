import React from 'react';
import { Link } from 'react-router-dom';
import { overview, goals, modules, commPlan, resources, roles, deliverables, isPlaceholder } from '../data/site.js';

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
        <p>Project overview, plans, roles, tasks and deliverables in one place. Items marked "to add" are still being defined.</p>
      </header>

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

      <SectionCard title="Roles and activities" icon="👤">
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

      <SectionCard title="Reports and presentations" icon="📄">
        <div className="deliverable-list">
          {deliverables.map((d) => (
            <div key={d.ms} className="deliverable-row">
              <span className="deliverable-ms">{d.ms}</span>
              <span className="deliverable-name">{d.name}</span>
              <span className="deliverable-link">to add</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </main>
  );
}
