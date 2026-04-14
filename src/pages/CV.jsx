import React from 'react'

function CV() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
        <h1 className="text-white text-3xl md:text-4xl font-bold text-center">Your Name</h1>
        <h2 className="text-purple-400 text-lg md:text-xl text-center mt-2 mb-6 md:mb-8">Intern Full-Stack Developer</h2>
        
        <section className="mb-6 md:mb-8">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3 border-b border-white/10 pb-2">Education</h3>
          <p className="text-white/70 text-sm md:text-base">[Your Degree] - [Your University], [Year]</p>
        </section>
        
        <section className="mb-6 md:mb-8">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3 border-b border-white/10 pb-2">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="tech-pill text-xs md:text-sm">JavaScript</span>
            <span className="tech-pill text-xs md:text-sm">TypeScript</span>
            <span className="tech-pill text-xs md:text-sm">Python</span>
            <span className="tech-pill text-xs md:text-sm">React</span>
            <span className="tech-pill text-xs md:text-sm">Node.js</span>
            <span className="tech-pill text-xs md:text-sm">SQL</span>
          </div>
        </section>
        
        <section className="mb-6 md:mb-8">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3 border-b border-white/10 pb-2">Experience</h3>
          <p className="text-white/70 text-sm md:text-base">[Internship/Project Experience] - Add your details here</p>
        </section>
        
        <section className="mb-6 md:mb-8">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2 md:mb-3 border-b border-white/10 pb-2">Certifications</h3>
          <p className="text-white/70 text-sm md:text-base">[Certifications] - Add your details here</p>
        </section>
        
        <div className="text-center mt-6 md:mt-8">
          <button className="btn-secondary text-sm md:text-base">Download PDF</button>
        </div>
      </div>
    </div>
  )
}

export default CV