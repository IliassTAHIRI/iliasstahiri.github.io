import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Research from './pages/Research'
import Publications from './pages/Publications'
import About from './pages/About'
import Now from './pages/Now'
import TIL from './pages/TIL'
import CaseStudies from './pages/CaseStudies'
import Tutorials from './pages/Tutorials'
import NonTech from './pages/NonTech'

function App() {
  const location = useLocation()

  return (
    <div className="app-container">
      <Navbar />
      <main id="content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/now" element={<Now />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Post />} />
            <Route path="/til" element={<TIL />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/non-tech" element={<NonTech />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
