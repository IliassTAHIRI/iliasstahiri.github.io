// src/components/Navbar.jsx
import React, { useState } from 'react'

const primaryLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
]

const moreLinks = [
  { href: '/til', label: 'TIL' },
  { href: '/research', label: 'Research' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/non-tech', label: 'Non-Tech' },
  { href: '/perspectives', label: 'Perspectives' },
]

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo">Iliass Tahiri</a>

        {/* Desktop nav */}
        <div className="nav-links">
          {primaryLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
          ))}
          <div className="nav-dropdown">
            <button
              className="nav-link nav-more-btn"
              onClick={() => setMoreOpen((o) => !o)}
              aria-expanded={moreOpen}
            >
              More ▾
            </button>
            {moreOpen && (
              <div className="nav-dropdown-menu">
                {moreLinks.map((link) => (
                  <a key={link.href} href={link.href} className="nav-dropdown-item">{link.label}</a>
                ))}
              </div>
            )}
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          {[...primaryLinks, ...moreLinks].map((link) => (
            <a key={link.href} href={link.href} className="nav-mobile-link"
               onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// Inline dark mode toggle
const DarkModeToggle = () => {
  const toggle = () => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
  return (
    <button className="nav-theme-btn" onClick={toggle} aria-label="Toggle dark mode">
      <span className="theme-icon-sun">☀</span>
      <span className="theme-icon-moon">☾</span>
    </button>
  )
}

export default Navbar
