import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Iliass Tahiri. Built as a living research notebook.</p>
        <p><a href="/rss.xml" className="mono-link" aria-label="RSS Feed">RSS</a></p>
      </div>
    </footer>
  )
}

export default Footer
