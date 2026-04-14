import React from 'react'

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="flex-1">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Me</h1>
          <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            I'm an intern full-stack developer passionate about building scalable web applications. 
            I enjoy solving real-world problems through code and continuously learning new technologies.
          </p>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">Currently learning:</h3>
          <ul className="list-disc list-inside text-white/70 mb-4 md:mb-6 space-y-1 text-sm md:text-base">
            <li>Cloud Computing (AWS/Azure)</li>
            <li>System Design Patterns</li>
            <li>Testing & QA Automation</li>
          </ul>
          <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">Fun fact:</h3>
          <p className="text-white/70 text-sm md:text-base">I love turning coffee into code ☕</p>
        </div>
        
        <div className="text-center w-full md:w-auto">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4 md:mb-6"></div>
          <button className="btn-secondary text-sm md:text-base">Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default About