import React from 'react';
import { Link } from 'react-router-dom';
import { overview, goals, modules, commPlan, resources } from '../data/site.js';
import proposalPdf from '../content/documentation/2027PEI_MariaBike_Proposal.pdf';
import ms1Pdf from '../content/presentations/ms1.pdf';

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
        <h1>Documentation</h1>
        <p>Project overview, specifications, deliverables, communication plan and resources in one place.</p>
      </header>

      <SectionCard title="Project documents & deliverables" icon="📁">
        <div className="doc-file-list">
          {/* Document 1: Proposal */}
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
                <div className="doc-file-title">Project Proposal</div>
                <div className="doc-file-desc">Official PEI 2026/2027 project brief — the mariaBike use case that originated KINETIQ.</div>
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

          {/* Document 2: MS1 Presentation */}
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, #3b82f6 12%, transparent)', color: '#3b82f6' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Milestone 1 Presentation — Lifecycle Objectives</div>
                <div className="doc-file-desc">Lifecycle objectives, project schedule, communication plan, state of the art and deliverables.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag available">Available</span>
                  <span className="doc-file-tag">PDF</span>
                  <span className="doc-file-tag">9.0 MB</span>
                  <span className="doc-file-tag">Inception · MS1</span>
                  <span className="doc-file-tag">Canva</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <a href={ms1Pdf} target="_blank" rel="noreferrer" className="doc-btn primary">
                View PDF ↗
              </a>
              <a href={ms1Pdf} download="KINETIQ_Milestone_1_Presentation.pdf" className="doc-btn">
                Download
              </a>
              <a href="https://canva.link/e717fmo77xzgope" target="_blank" rel="noreferrer" className="doc-btn">
                Canva Slides ↗
              </a>
            </div>
          </div>

          {/* Document 3: MS2 Architecture */}
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, #7c3aed 12%, transparent)', color: '#7c3aed' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Milestone 2 — Lifecycle Architecture & Diagrams</div>
                <div className="doc-file-desc">Event-driven architecture specification, Kafka/MQTT pipeline, InfluxDB telemetry and component integration.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag" style={{ background: 'color-mix(in srgb, #7c3aed 15%, transparent)', color: '#7c3aed', borderColor: 'color-mix(in srgb, #7c3aed 30%, transparent)' }}>In Elaboration</span>
                  <span className="doc-file-tag">Elaboration · MS2</span>
                  <span className="doc-file-tag">13–20 Oct 2026</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <Link to="/" className="doc-btn primary">
                View Architecture Flow
              </Link>
            </div>
          </div>

          {/* Document 4: MS3 Accessibility & Usability */}
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, var(--amber) 12%, transparent)', color: 'var(--amber)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Milestone 3 — Accessibility & Usability Evaluation</div>
                <div className="doc-file-desc">Usability testing protocol, WCAG accessibility audit, design system and evaluation report.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag">Upcoming</span>
                  <span className="doc-file-tag">Construction · MS3</span>
                  <span className="doc-file-tag">3–10 Nov 2026</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <Link to="/milestones" className="doc-btn">
                Milestone Details →
              </Link>
            </div>
          </div>

          {/* Document 5: MS4 MVP Demonstration */}
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, var(--amber) 12%, transparent)', color: 'var(--amber)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Milestone 4 — MVP Demonstration & Evaluation</div>
                <div className="doc-file-desc">Working telemetry prototype demonstrated to course supervisors, with peer evaluation report.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag">Upcoming</span>
                  <span className="doc-file-tag">Construction · MS4</span>
                  <span className="doc-file-tag">15–16 Dec 2026</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <Link to="/milestones" className="doc-btn">
                Milestone Details →
              </Link>
            </div>
          </div>

          {/* Document 6: Final Report */}
          <div className="doc-file-card">
            <div className="doc-file-info">
              <div className="doc-file-icon" style={{ background: 'color-mix(in srgb, var(--green) 12%, transparent)', color: 'var(--green)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="doc-file-meta">
                <div className="doc-file-title">Final Technical Report & STUDENTS@DETI Defence</div>
                <div className="doc-file-desc">Comprehensive project report, poster, demonstration video and public defence.</div>
                <div className="doc-file-tags">
                  <span className="doc-file-tag">Upcoming</span>
                  <span className="doc-file-tag">Transition</span>
                  <span className="doc-file-tag">4 Jun 2027</span>
                </div>
              </div>
            </div>
            <div className="doc-file-actions">
              <Link to="/calendar" className="doc-btn">
                Roadmap Schedule →
              </Link>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Project overview" icon="🚲">
        <div className="overview-body">
          <p><strong>Context.</strong> {overview.context}</p>
          <p><strong>Problem.</strong> {overview.problem}</p>
          <p><strong>Expected results.</strong> {overview.expectedResults}</p>
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

      <SectionCard title="Project resources" icon="📁">
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
