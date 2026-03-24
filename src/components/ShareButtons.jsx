import React from 'react'

const ShareButtons = ({ title, url }) => {
  const encoded = encodeURIComponent(url)
  const titleEncoded = encodeURIComponent(title)

  return (
    <div className="share-buttons">
      <span className="share-label">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-linkedin"
      >
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${titleEncoded}&url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="share-btn share-twitter"
      >
        Twitter
      </a>
    </div>
  )
}

export default ShareButtons
