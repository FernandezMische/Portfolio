import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-[#f8f6f0]/95 backdrop-blur-md border-b border-[#dfe5db] z-50 px-5 md:px-10 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="display-font text-[var(--color-secondary)] text-xl md:text-2xl font-bold">
          MF<span className="text-[var(--color-accent)]">.</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold text-[var(--color-text-muted)]">
          <li><a href="#home" className="hover:text-[var(--color-secondary)] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[var(--color-secondary)] transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-[var(--color-secondary)] transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-[var(--color-secondary)] transition-colors">Contact</a></li>
         
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[var(--color-secondary)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#dfe5db]">
          <ul className="flex flex-col gap-3 pb-2 text-sm font-bold text-[var(--color-text-muted)]">
            <li><a href="#home" className="block hover:text-[var(--color-secondary)] transition-colors py-1" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="block hover:text-[var(--color-secondary)] transition-colors py-1" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="block hover:text-[var(--color-secondary)] transition-colors py-1" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="block hover:text-[var(--color-secondary)] transition-colors py-1" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
