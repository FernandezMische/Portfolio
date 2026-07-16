import React from 'react'
import profileImg from '../assets/MyProfile.png'

function About() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const pdfUrl = '/MISCHE FERNANDEZ CV.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'MISCHE FERNANDEZ CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24">
      {/* Profile Section - Centered at top */}
      <div className="flex flex-col items-center mb-12">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-purple-500/50 mb-4">
          <img 
            src={profileImg} 
            alt="Mische Fernandez"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-bold">About Me</h1>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Left Column - Main Bio & Journey */}
        <div className="space-y-5">
          <div className="bg-[#1F1F2E] rounded-xl p-5 border border-white/10">
            <h3 className="text-purple-400 text-lg font-semibold mb-2">Who I Am</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              I am currently an intern team lead at Life Choices, where I manage a team of developers while still coding from time to time. I am creative, curious, and enjoy solving problems through practical software solutions.
            </p>
          </div>

          <div className="bg-[#1F1F2E] rounded-xl p-5 border border-white/10">
            <h3 className="text-purple-400 text-lg font-semibold mb-2">My Journey into Code</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              My coding journey began while I was still in college, and it grew from curiosity into a real passion for building useful digital experiences. I started with SQL and data analytics, then expanded into full-stack and mobile development.
            </p>
          </div>

          <div className="bg-[#1F1F2E] rounded-xl p-5 border border-white/10">
            <h3 className="text-purple-400 text-lg font-semibold mb-2">Currently Learning</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              I am currently enjoying cross-platform application development, while also growing my skills in C# and .NET.
            </p>
          </div>

          <div className="bg-[#1F1F2E] rounded-xl p-5 border border-white/10">
            <h3 className="text-purple-400 text-lg font-semibold mb-2">Fun Fact</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              ☕ I love turning coffee into code
            </p>
          </div>
        </div>

        {/* Right Column - Skills & Education */}
        <div className="space-y-5">
          

          <div className="bg-[#1F1F2E] rounded-xl p-5 border border-white/10">
            <h3 className="text-purple-400 text-lg font-semibold mb-3">Certifications & Education</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                Full-Stack Web Development | Life Choices Academy (2025–2026)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                Higher Certificate: Digital Marketing | IIE Rosebank College NQF5 (2023)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                Introduction to Cybersecurity | Cisco
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                Introduction to Data Science | Cisco
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                IBM Cloud Essentials | IBM
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▹</span>
                Microsoft Azure AI Fundamentals - AI-900 <span className="text-yellow-500 text-xs">(in progress)</span>
              </li>
            </ul>
          </div>

          {/* Download CV Button */}
          <div className="flex justify-center pt-4">
            <button 
              onClick={handleDownloadCV}
              className="btn-primary text-sm md:text-base"
            >
              📄 Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
