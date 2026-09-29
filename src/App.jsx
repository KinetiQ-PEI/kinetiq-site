import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Milestones from './pages/Milestones';
import Docs from './pages/Docs';
import { MinutesList, MinuteDetail } from './pages/Minutes';
import Calendar from './pages/Calendar';
import logoBlack from './content/logo_black_kinetiq.png';
import logoWhite from './content/logo_white_kinetiq.png';

const pages = [
  { path: '/', label: 'Home', end: true },
  { path: '/team', label: 'Team' },
  { path: '/milestones', label: 'Milestones' },
  { path: '/calendar', label: 'Calendar' },
  { path: '/docs', label: 'Documentation' },
  { path: '/minutes', label: 'Minutes' },
];

function IconSun() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function TopNav() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch { return 'light'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  // Close menu on route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <header className="top">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={logoBlack} alt="KinetiQ" className="nav-logo nav-logo-light" />
          <img src={logoWhite} alt="KinetiQ" className="nav-logo nav-logo-dark" />
        </NavLink>

        <div className="header-nav-group">
          <nav id="nav" className={menuOpen ? 'open' : ''}>
            {pages.map(p => (
              <NavLink
                key={p.path}
                to={p.path}
                end={p.end}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {p.label}
              </NavLink>
            ))}
          </nav>

          <div className="top-actions">
            <button
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <IconMoon /> : <IconSun />}
            </button>

            <button
              type="button"
              className={`burger-btn ${menuOpen ? 'open' : ''}`}
              id="menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

function AppFooter() {
  return (
    <footer>KINETIQ — Projeto em Engenharia Informática 2026/2027, University of Aveiro</footer>
  );
}

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/milestones" element={<Milestones />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/minutes" element={<MinutesList />} />
        <Route path="/minutes/:slug" element={<MinuteDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
