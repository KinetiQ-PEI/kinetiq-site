import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Milestones from './pages/Milestones';
import Docs from './pages/Docs';
import { MinutesList, MinuteDetail } from './pages/Minutes';
import Calendar from './pages/Calendar';

const pages = [
  { path: '/', label: 'Home', end: true },
  { path: '/team', label: 'Team' },
  { path: '/milestones', label: 'Milestones' },
  { path: '/calendar', label: 'Calendar' },
  { path: '/docs', label: 'Documentation' },
  { path: '/minutes', label: 'Minutes' },
];

function TopNav() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch { return 'light'; }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <header className="top">
      <NavLink to="/" className="logo">KINET<span>IQ</span></NavLink>
      <button className="btn-icon" id="menu" style={{ display: 'none' }} onClick={() => setMenuOpen(o => !o)}>Menu</button>
      <nav id="nav" className={menuOpen ? 'open' : ''}>
        {pages.map(p => (
          <NavLink
            key={p.path}
            to={p.path}
            end={p.end}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {p.label}
          </NavLink>
        ))}
        <button className="btn-icon" aria-label="Toggle light/dark theme" onClick={toggleTheme}>
          Theme
        </button>
      </nav>
    </header>
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
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
