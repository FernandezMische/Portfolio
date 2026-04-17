import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 text-center">
      {/* Hero Section */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Mische Fernandez
      </h1>
      <p className="text-purple-400 text-xl md:text-2xl font-semibold mb-3">
        Full-Stack Developer
      </p>
      <p className="text-white/60 text-base md:text-lg mb-6">
        Cape Town, South Africa
      </p>
      <p className="text-white/70 text-base md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
        Results-driven full-stack developer specializing in backend development, authentication systems, and payment integration. Building scalable web applications and RESTful APIs.
      </p>
      
      {/* Contact Info Quick Links */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-white/50">
        <span>📧 chefernandez448@gmail.com</span>
        <span>📞 +27 66 421 3810</span>
      </div>
      
      {/* Tech Stack Section */}
      <div className="mb-12">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">Tech Stack</h2>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
          <span className="tech-pill">JavaScript</span>
          <span className="tech-pill">HTML/CSS</span>
          <span className="tech-pill">Tailwind</span>
          <span className="tech-pill">Bootstrap</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
          <span className="tech-pill">Vue.js / Vite</span>
          <span className="tech-pill">ReactJS</span>
          <span className="tech-pill">Node.js</span>
          <span className="tech-pill">Express</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
          <span className="tech-pill">PHP</span>
          <span className="tech-pill">MySQL</span>
          <span className="tech-pill">Python</span>
          <span className="tech-pill">Git</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          <span className="tech-pill">Power BI</span>
          <span className="tech-pill">Tableau</span>
          <span className="tech-pill">APEX Oracle</span>
          <span className="tech-pill">Azure AI</span>
        </div>
      </div>
      
      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/projects" className="btn-primary text-center">View My Work</Link>
        <Link to="/contact" className="btn-secondary text-center">Get In Touch</Link>
      </div>
    </div>
  )
}

export default Home
