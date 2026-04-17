import React from 'react'

function About() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link to the PDF file
    const pdfUrl = '/MISCHE FERNANDEZ CV 2026.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'MISCHE FERNANDEZ CV 2026.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Left Column - About Content */}
        <div className="flex-1">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Me</h1>
          
          <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            Results-driven full-stack developer and top achiever at Life Choices Academy, with specialised 
            expertise in backend development, authentication systems, and payment integration. Passionate 
            about building scalable web applications and RESTful APIs using modern JavaScript frameworks, 
            server-side technologies and responsible AI.
          </p>
          
          <p className="text-white/70 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            I combine technical proficiency in frontend frameworks (Vue/Vite, React) and backend tools 
            (Node.js, Express, PHP, SQL) with strong problem-solving abilities. I thrive in collaborative, 
            team environments delivering production-ready full-stack solutions.
          </p>
          
          <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">Currently learning:</h3>
          <ul className="list-disc list-inside text-white/70 mb-4 md:mb-6 space-y-1 text-sm md:text-base">
            <li>Advanced Cloud Computing (Azure AI Fundamentals - AI-900 certified)</li>
            <li>Cybersecurity Fundamentals (Cisco Certified)</li>
            <li>Data Science & Analytics (IBM Cloud Essentials, Data Science with Cisco)</li>
          </ul>
          
          <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">Fun fact:</h3>
          <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6">
            I went from creating weekly social media calendars as a waiter to building secure payment 
            gateways and authentication systems as a full-stack developer!
          </p>
        </div>
        
        {/* Right Column - Download CV Button Only (no profile photo) */}
        <div className="w-full md:w-auto md:min-w-[200px] flex justify-center">
          <button 
            onClick={handleDownloadCV}
            className="btn-primary text-sm md:text-base w-full md:w-auto"
          >
            📄 Download CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
