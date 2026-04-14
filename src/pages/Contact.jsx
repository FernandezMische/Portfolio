import React from 'react'

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-1">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contact Me</h1>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Your Name"
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
            />
            <input 
              type="email" 
              placeholder="Your Email"
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message"
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base resize-none"
            ></textarea>
            <button type="submit" className="btn-primary text-sm md:text-base">Send Message</button>
          </form>
        </div>
        
        <div className="flex-1">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 md:mb-4">Connect with me</h3>
          <div className="space-y-3 md:space-y-4">
            <p className="text-white/70 text-sm md:text-base break-all">📧 mische@example.com</p>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base break-all"
            >
              🔗 LinkedIn: linkedin.com/in/yourusername
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base break-all"
            >
              🐙 GitHub: github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact