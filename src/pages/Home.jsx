import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 text-center">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Intern Full-Stack Developer
      </h1>
      <p className="text-white/70 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
        Building scalable web applications with modern technologies
      </p>
      
      <div className="mb-10 md:mb-16">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 md:mb-6">Tech Stack</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <span className="tech-pill">JavaScript</span>
          <span className="tech-pill">TypeScript</span>
          <span className="tech-pill">Python</span>
          <span className="tech-pill">SQL</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <span className="tech-pill">React</span>
          <span className="tech-pill">Node.js</span>
          <span className="tech-pill">Express</span>
          <span className="tech-pill">Next.js</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <span className="tech-pill">Git</span>
          <span className="tech-pill">Docker</span>
          <span className="tech-pill">VS Code</span>
          <span className="tech-pill">Vercel</span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/projects" className="btn-primary text-center">View Projects</Link>
        <Link to="/contact" className="btn-secondary text-center">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home