import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/global.css'

const THEME_KEY = 'theme'

const Navbar = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const stored = window.localStorage.getItem(THEME_KEY)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const nextTheme = stored || (prefersDark ? 'dark' : 'light')
        document.documentElement.setAttribute('data-theme', nextTheme)
        setTheme(nextTheme)
    }, [])

    const toggleTheme = () => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', nextTheme)
        window.localStorage.setItem(THEME_KEY, nextTheme)
        setTheme(nextTheme)
    }

    return (
        <nav className="nav">
            <div className="container nav-inner">
                <Link to="/" className="nav-logo">Iliass Tahiri</Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/research" className="nav-link">Research</Link>
                    <Link to="/publications" className="nav-link">Publications</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                </div>
                <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
