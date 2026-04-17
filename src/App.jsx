import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const interpolateColor = (color1, color2, t) => {
  const hex1 = color1.slice(1)
  const hex2 = color2.slice(1)
  
  const r1 = parseInt(hex1.slice(0, 2), 16)
  const g1 = parseInt(hex1.slice(2, 4), 16)
  const b1 = parseInt(hex1.slice(4, 6), 16)
  
  const r2 = parseInt(hex2.slice(0, 2), 16)
  const g2 = parseInt(hex2.slice(2, 4), 16)
  const b2 = parseInt(hex2.slice(4, 6), 16)
  
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)
  
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

const FloatingCode = () => {
  const codeChars = ['{', '}', '<', '/>', '()', '=>', 'const', 'let', 'if', 'else', 'return', 'function', '[]', '...', '&&', '||', '===', '!==']
  
  const [positions] = useState(() => 
    codeChars.map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
  )
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {codeChars.map((char, i) => (
        <div
          key={i}
          className="absolute text-white opacity-15 font-mono"
          style={{
            left: `${positions[i].left}%`,
            top: `${positions[i].top}%`,
            fontSize: `${positions[i].size}px`,
            animation: `float ${positions[i].duration}s ease-in-out infinite`,
            animationDelay: `${positions[i].delay}s`
          }}
        >
          {char}
        </div>
      ))}
    </div>
  )
}

function App() {
  const [bgColor, setBgColor] = useState('#1A1A2E')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const scrollPercent = maxScroll === 0 ? 0 : scrollY / maxScroll
      
      let newColor
      
      if (scrollPercent < 0.33) {
        const t = scrollPercent / 0.33
        newColor = interpolateColor('#1A1A2E', '#2D2D5E', t)
      } else if (scrollPercent < 0.66) {
        const t = (scrollPercent - 0.33) / 0.33
        newColor = interpolateColor('#2D2D5E', '#5B2C6F', t)
      } else {
        const t = (scrollPercent - 0.66) / 0.34
        newColor = interpolateColor('#5B2C6F', '#1A1A2E', t)
      }
      
      setBgColor(newColor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div 
        style={{ 
          backgroundColor: bgColor,
          transition: 'background-color 0.15s ease',
          position: 'relative',
          minHeight: '100vh'
        }}
      >
        <FloatingCode />
        <Navbar />
        <main style={{ position: 'relative', zIndex: 2 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center py-8 border-t border-white/10 text-white/50 relative z-2 text-sm">
          <p>© 2025 | Built with React + Vite + Tailwind</p>
          <div className="mt-2 space-x-4">
            <a 
              href="https://www.linkedin.com/in/mische-fernandez-046006294/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/FernandezMische" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
