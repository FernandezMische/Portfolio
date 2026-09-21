import React, { useState } from 'react'

function Navbar({ isDarkMode, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="site-nav sticky top-0 backdrop-blur-md border-b z-50 px-5 md:px-10 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#home" className="display-font text-[var(--color-secondary)] text-xl md:text-2xl font-bold">
          MF<span className="text-[var(--color-accent)]">.</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold text-[var(--color-text-muted)]">
          <li><a href="#home" className="nav-link hover:text-[var(--color-secondary)]">Home</a></li>
          <li><a href="#about" className="nav-link hover:text-[var(--color-secondary)]">About</a></li>
          <li><a href="#projects" className="nav-link hover:text-[var(--color-secondary)]">Projects</a></li>
          <li><a href="#contact" className="nav-link hover:text-[var(--color-secondary)]">Contact</a></li>
         
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span aria-hidden="true">{isDarkMode ? '☼' : '◐'}</span>
        </button>
        <button 
          className="md:hidden -mr-2 p-2 text-[var(--color-secondary)] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
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
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-[#dfe5db]">
          <ul className="flex flex-col gap-3 pb-2 text-sm font-bold text-[var(--color-text-muted)]">
            <li><a href="#home" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</a></li>
          
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
