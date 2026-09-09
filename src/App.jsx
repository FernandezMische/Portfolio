import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') !== 'light'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className={`site-shell ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navbar isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode((current) => !current)} />
        <main>
          <section id="home" className="scroll-mt-24">
            <Home />
          </section>
          <section id="about" className="scroll-mt-24 section-sage">
            <About />
          </section>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-24 section-sage">
            <Contact />
          </section>
        </main>
        <footer className="site-footer">
          <p>© 2026 Mische Fernandez</p>
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/mische-fernandez-046006294/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/FernandezMische" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </div>
        </footer>
    </div>
  )
}

export default App
