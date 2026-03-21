import React from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/now', label: 'Now' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/blog', label: 'Blog' },
  { href: '/til', label: 'TIL' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tutorials', label: 'Tutorials' },
  { href: '/non-tech', label: 'Non-Tech' }
]

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-logo">Iliass Tahiri</a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
