import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Using FormSubmit.co - free email service (no backend needed)
    // This sends emails to your address without requiring a server
    const form = e.target
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formsubmit.co/chefernandez448@gmail.com', {
        method: 'POST',
        body: formData
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-20">
        {/* Left Column - Contact Form */}
        <div className="flex-1">
          <p className="section-kicker mb-4">Start a conversation</p>
          <h1 className="display-font text-[var(--color-secondary)] text-4xl md:text-6xl font-bold leading-tight mb-5">Have a good<br /><span className="text-[var(--color-accent)]">idea?</span></h1>
          <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-sm">Tell me what you are building, what is not working, or what you would like to explore together.</p>
          
          {submitStatus === 'success' && (
            <div className="bg-[var(--color-card-alt)] border border-[var(--color-primary)] text-[var(--color-secondary)] px-4 py-3 mb-6 text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-[#f5dfd7] border border-[var(--color-accent)] text-[#934d3c] px-4 py-3 mb-6 text-sm">
              ✗ Something went wrong. Please try again or email me directly.
            </div>
          )}
          
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 md:p-4 border border-[#cbd5ca] bg-white text-[var(--color-text)] placeholder-[#9ba79b] focus:outline-none focus:border-[var(--color-secondary)] transition-colors text-sm md:text-base"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 md:p-4 border border-[#cbd5ca] bg-white text-[var(--color-text)] placeholder-[#9ba79b] focus:outline-none focus:border-[var(--color-secondary)] transition-colors text-sm md:text-base"
            />
            <textarea 
              name="message"
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="p-3 md:p-4 border border-[#cbd5ca] bg-white text-[var(--color-text)] placeholder-[#9ba79b] focus:outline-none focus:border-[var(--color-secondary)] transition-colors text-sm md:text-base resize-none"
            ></textarea>
            
            {/* Hidden fields for FormSubmit.co */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New message from your Portfolio!" />
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out! I'll get back to you as soon as possible." />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`btn-primary text-sm md:text-base ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        {/* Right Column - Connect with me */}
        <div className="bg-[var(--color-secondary)] p-7 md:p-10 text-[#f8f6f0] self-start">
          <p className="section-kicker mb-4 text-[var(--color-primary)]">Find me here</p>
          <h3 className="display-font text-3xl md:text-4xl font-bold mb-8">Connect with me</h3>
          <div className="space-y-5">
            <p className="text-[#dce8d4] text-sm md:text-base break-all">
              📧 chefernandez448@gmail.com
            </p>
            <p className="text-[#dce8d4] text-sm md:text-base break-all">
              📞 +27 66 421 3810
            </p>
            <a 
              href="https://www.linkedin.com/in/mische-fernandez-046006294/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-[var(--color-primary)] hover:text-white transition-colors text-sm md:text-base break-all"
            >
              🔗 LinkedIn: linkedin.com/in/mische-fernandez-046006294/
            </a>
            <a 
              href="https://github.com/FernandezMische" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-[var(--color-primary)] hover:text-white transition-colors text-sm md:text-base break-all"
            >
              🐙 GitHub: github.com/FernandezMische
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
