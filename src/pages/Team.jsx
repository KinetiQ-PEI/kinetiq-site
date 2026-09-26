import React from 'react';
import { team, advisors, partners } from '../data/site.js';
import { isPlaceholder } from '../data/site.js';

/* ── Social icon SVGs ── */
const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M0 3.75C0 2.784.784 2 1.75 2h20.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 22.25 22H1.75A1.75 1.75 0 0 1 0 20.25ZM1.75 3.5a.25.25 0 0 0-.25.25v.93l10.5 7.5 10.5-7.5v-.93a.25.25 0 0 0-.25-.25Zm20.5 3.32-9.91 7.079a.75.75 0 0 1-.88 0L1.5 6.82v13.43c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25Z" />
  </svg>
);

function MemberLink({ href, title, children }) {
  if (href) {
    return (
      <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
        className="member-link" title={title}>
        {children}
      </a>
    );
  }
  return (
    <span className="member-link member-link--empty" title={`${title} (to add)`} aria-disabled="true">
      {children}
    </span>
  );
}

function MemberCard({ member }) {
  const gh = member.github && !isPlaceholder(member.github) ? member.github : null;
  const li = member.linkedin && !isPlaceholder(member.linkedin) ? member.linkedin : null;
  const em = member.email && !isPlaceholder(member.email) ? `mailto:${member.email}` : null;

  return (
    <article className="member">
      <div className="ph">{!isPlaceholder(member.photo) ? <img src={member.photo} alt={member.name} /> : member.name[0]}</div>
      <h3>{member.name}</h3>
      <span className="tag">Student</span>
      <div className="member-links">
        <MemberLink href={gh} title="GitHub"><IconGitHub /></MemberLink>
        <MemberLink href={li} title="LinkedIn"><IconLinkedIn /></MemberLink>
        <MemberLink href={em} title="Email"><IconMail /></MemberLink>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <main>
      <header className="pagehead">
        <h1>The Team</h1>
      </header>
      <div className="team">{team.map((m) => <MemberCard key={m.name} member={m} />)}</div>
      <div className="cols">
        <div>
          <h2>Advisors</h2>
          {advisors.map((n) => <div className="row" key={n}><h3>{n}</h3><span className="tag">Advisor</span></div>)}
        </div>
        <div>
          <h2>Partners</h2>
          {partners.map((p) => <div className="row" key={p.name}><h3>{p.name}</h3><span className="tag">{p.role}</span></div>)}
        </div>
      </div>
    </main>
  );
}
