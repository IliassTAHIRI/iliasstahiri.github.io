import React from 'react'

const RelatedPosts = ({ posts }) => {
  if (!posts || posts.length === 0) return null
  return (
    <div className="related-posts">
      <h3 className="related-posts-title">Related posts</h3>
      <div className="related-posts-grid">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="related-post-card">
            <span className="related-post-date">{post.date}</span>
            <span className="related-post-title">{post.title}</span>
            <span className="related-post-excerpt">{post.excerpt}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
