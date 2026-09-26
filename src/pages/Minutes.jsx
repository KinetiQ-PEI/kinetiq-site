import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { minutes, findMinute } from '../lib/minutes.js';

const pad = (n) => String(n).padStart(2, '0');
function formatDate(date) {
  const d = new Date(`${date}T00:00:00`);
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function MinutesList() {
  return (
    <main>
      <header className="pagehead">
        <h1>Minutes (Draft)</h1>
        <p>
          One Markdown file per meeting, in <code>src/content/minutes</code>. Copy <code>_TEMPLATE.md</code>,
          fill it in, commit — it appears here automatically, newest first.
        </p>
      </header>
      {minutes.length === 0 ? (
        <div className="empty">No minutes yet. The first weekly meeting will show up here.</div>
      ) : (
        <div className="card scroll">
          <table>
            <thead><tr><th>Meeting</th><th>Title</th><th>Date</th><th /></tr></thead>
            <tbody>
              {minutes.map((m) => (
                <tr key={m.slug}>
                  <td>{pad(m.number)}</td>
                  <td>{m.title}</td>
                  <td>{m.date && formatDate(m.date)}</td>
                  <td style={{ textAlign: 'right' }}><Link to={`/minutes/${m.slug}`}>View →</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

export function MinuteDetail() {
  const { slug } = useParams();
  const minute = findMinute(slug);
  if (!minute) {
    return (
      <main>
        <header className="pagehead"><h1>Minute not found</h1><p><Link to="/minutes">Back to minutes</Link></p></header>
      </main>
    );
  }
  const index = minutes.indexOf(minute);
  const newer = minutes[index - 1];
  const older = minutes[index + 1];
  const details = [minute.location, minute.time].filter(Boolean).join(' · ');

  return (
    <main>
      <header className="pagehead">
        <p className="tag">Meeting {pad(minute.number)}</p>
        <h1>{minute.title}</h1>
        <p>{minute.date && formatDate(minute.date)}{details && ` · ${details}`}</p>
      </header>
      <Link to="/minutes">← All minutes</Link>
      <article className="card minute-body">
        <Markdown remarkPlugins={[remarkGfm]}>{minute.body}</Markdown>
      </article>
      {(older || newer) && (
        <nav className="minute-pager">
          {older ? <Link to={`/minutes/${older.slug}`}>← Meeting {pad(older.number)}</Link> : <span />}
          {newer && <Link to={`/minutes/${newer.slug}`}>Meeting {pad(newer.number)} →</Link>}
        </nav>
      )}
    </main>
  );
}
