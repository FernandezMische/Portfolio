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
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column - Contact Form */}
        <div className="flex-1">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6">Contact Me</h1>
          
          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6 text-sm">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
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
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base"
            />
            <textarea 
              name="message"
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="p-3 md:p-4 border border-white/20 rounded-lg bg-[#1F1F2E] text-white placeholder-white/50 focus:outline-none focus:border-purple-500 transition-colors text-sm md:text-base resize-none"
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
        <div className="flex-1">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-3 md:mb-4">Connect with me</h3>
          <div className="space-y-3 md:space-y-4">
            <p className="text-white/70 text-sm md:text-base break-all">
              📧 chefernandez448@gmail.com
            </p>
            <p className="text-white/70 text-sm md:text-base break-all">
              📞 +27 66 421 3810
            </p>
            <a 
              href="https://www.linkedin.com/in/mische-fernandez-046006294/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base break-all"
            >
              🔗 LinkedIn: linkedin.com/in/mische-fernandez-046006294/
            </a>
            <a 
              href="https://github.com/FernandezMische" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-purple-400 hover:text-purple-300 transition-colors text-sm md:text-base break-all"
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
