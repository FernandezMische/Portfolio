import React from 'react'
import profileImg from '../assets/MyProfile.jpg'
import Reveal from '../components/Reveal'

function About() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const pdfUrl = '/Mische Fernandez CV (2).pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Mische Fernandez CV (2).pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 items-start">
        <Reveal>
          <p className="section-kicker mb-5">A little about me</p>
          <div className="w-48 h-60 md:w-64 md:h-80 overflow-hidden mb-6 bg-[var(--color-primary)] p-2">
          <img 
            src={profileImg} 
            alt="Mische Fernandez"
            className="w-full h-full object-cover"
          />
          </div>
          <h1 className="display-font text-[var(--color-secondary)] text-4xl md:text-5xl leading-tight font-bold mb-5">A developer who<br /><span className="text-[var(--color-accent)]">stays curious.</span></h1>
          <p className="text-[var(--color-text-muted)] text-sm">Based in Cape Town, South Africa</p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed mb-10 max-w-2xl">
              I am currently an intern team lead at Life Choices, where I manage a team of developers while still coding from time to time. I am creative, curious, and enjoy solving problems through practical software solutions.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 border-t border-[#dfe5db] pt-7">
            <div>
              <h3 className="text-[var(--color-secondary)] font-bold mb-3">My journey</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">I started with SQL and data analytics, then expanded into full-stack and mobile development through a love of making useful digital experiences.</p>
            </div>
            <div>
              <h3 className="text-[var(--color-secondary)] font-bold mb-3">Currently learning</h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">I am growing my skills in cross-platform application development, C#, and .NET.</p>
            </div>
          </div>
          <div className="mt-10 pt-7 border-t border-[#dfe5db]">
            <h3 className="text-[var(--color-secondary)] font-bold mb-4">Certifications & education</h3>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[var(--color-text-muted)] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">01</span>
                Higher Certificate: Digital Marketing | IIE Rosebank College NQF5 (2023)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">02</span>
                Full-Stack Web Development | Life Choices Academy (2025–2026)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">03</span>
                Introduction to Cybersecurity | Cisco
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">04</span>
                Introduction to Data Science | Cisco
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">05</span>
                IBM Cloud Essentials | IBM
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">06</span>
                Microsoft Foundational C# Certification <span className="text-[var(--color-accent)] text-xs">(in progress)</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-start pt-8">
            <button 
              onClick={handleDownloadCV}
              className="btn-primary text-sm md:text-base"
            >
              Download CV <span className="ml-3">↓</span>
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default About
