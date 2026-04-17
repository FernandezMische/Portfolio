import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 bg-black/40 backdrop-blur-md border-b border-white/10 z-50 px-4 md:px-8 py-3 md:py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Mische Portfolio
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-8">
          <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
          <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
          <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
         
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
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
        <div className="md:hidden mt-3 pt-3 border-t border-white/10">
          <ul className="flex flex-col gap-3 pb-2">
            <li><Link to="/" className="block text-white/80 hover:text-white transition-colors py-1" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block text-white/80 hover:text-white transition-colors py-1" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="block text-white/80 hover:text-white transition-colors py-1" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className="block text-white/80 hover:text-white transition-colors py-1" onClick={() => setIsOpen(false)}>Contact</Link></li>
          
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
