import React, { useState } from 'react'

// Import your Township Eats screenshots
import loginImg from '../assets/LoginPage.png'
import cartImg from '../assets/CartPage.png'
import payfastImg from '../assets/PaymentPayfast.png'

// Import your HR Management screenshots
import dashboardImg from '../assets/dashboardPage.png'
import leaveApplicationsImg from '../assets/leaveApplications.png'
import leaveReqPageImg from '../assets/leaveReqPage.png'

const projects = [
  {
    id: 1,
    title: "Township Eats",
    description: "A full-stack food ordering platform built for local township businesses. I built the entire backend including authentication, payment integration with PayFast, and real-time order management. (Live hosting with Vercel and Render in progress)",
    tags: ["Vue.js", "Vite", "Node.js", "Express", "MySQL", "PayFast", "JWT"],
    repoLink: "https://github.com/sandiliviwe04/TownshipsEats-App",
    images: [
      { 
        src: loginImg,
        description: "Login page with JWT authentication - Passwords are hashed and stored in MySQL database" 
      },
      { 
        src: cartImg,
        description: "Shopping cart - Cart items and quantities update in real-time in MySQL database" 
      },
      { 
        src: payfastImg,
        description: "PayFast payment integration - Sandbox mode with PayFast JS library and ITN email notifications" 
      }
    ]
  },
  {
    id: 2,
    title: "HR Management System",
    description: "A full-stack HR management platform built for tracking employees, leave requests, attendance, and performance. I worked on both frontend and backend in a team. The app features real-time calendar updates and complete leave management. (Live hosting with Vercel and Render in progress)",
    tags: ["Vue.js", "Vite", "Node.js", "Express", "MySQL", "Bootstrap", "Low Code CSS"],
    repoLink: "https://github.com/marcofisher21-svg/Group-12-repo/tree/main",
    images: [
      { 
        src: dashboardImg,
        description: "Dashboard - Real-time overview of employees, leave requests, attendance tracking, and performance metrics. The calendar displays leave requests in real-time and everything syncs with MySQL database." 
      },
      { 
        src: leaveApplicationsImg,
        description: "Leave Application Form - Employees can submit leave requests with full name, entitlement, date range, session type, attachments, and reason. All data is stored in MySQL." 
      },
      { 
        src: leaveReqPageImg,
        description: "Leave Requests Overview - View all pending and approved leave requests. Managers can approve or deny requests. All status updates sync to MySQL database and reflect on the dashboard calendar." 
      }
    ]
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Data visualization dashboard with real-time analytics and interactive charts. (Live hosting with Vercel and Render in progress)",
    tags: ["Next.js", "Chart.js", "Tailwind CSS", "D3.js"],
    repoLink: "#",
    images: [
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Project+Gamma+Image+1", description: "Project Gamma description 1" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Project+Gamma+Image+2", description: "Project Gamma description 2" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Project+Gamma+Image+3", description: "Project Gamma description 3" }
    ]
  }
]

function Projects() {
  const handleRepoClick = (repoLink) => {
    window.open(repoLink, '_blank')
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projects</h1>
      
      {projects.map((project, index) => (
        <ProjectSection 
          key={project.id} 
          project={project} 
          index={index} 
          onRepoClick={handleRepoClick}
        />
      ))}
    </div>
  )
}

function ProjectSection({ project, index, onRepoClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    setIsOverlayVisible(false)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    setIsOverlayVisible(false)
  }

  const goToImage = (idx) => {
    setCurrentImageIndex(idx)
    setIsOverlayVisible(false)
  }

  // Handle hover for desktop
  const handleMouseEnter = () => {
    setIsOverlayVisible(true)
  }

  const handleMouseLeave = () => {
    setIsOverlayVisible(false)
  }

  // Handle tap for mobile
  const handleImageTap = () => {
    setIsOverlayVisible(!isOverlayVisible)
  }

  const isEven = index % 2 === 0
  
  // Different slide directions for each carousel image
  const getSlideDirection = (imageIndex) => {
    const directions = [
      'translate-x-[-100%]',
      'translate-x-[100%]',
      'translate-y-[-100%]',
      'translate-y-[100%]'
    ]
    return directions[imageIndex % directions.length]
  }

  const currentDirection = getSlideDirection(currentImageIndex)

  return (
    <div className={`py-8 md:py-16 ${!isEven ? 'bg-[#1F1F2E] -mx-4 md:-mx-8 px-4 md:px-8 rounded-xl' : ''}`}>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 items-center`}>
        {/* Project Info */}
        <div className="flex-1">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">{project.title}</h2>
          <p className="text-white/70 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="tech-pill text-xs md:text-sm">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <button 
              onClick={() => onRepoClick(project.repoLink)} 
              className="btn-primary text-sm md:text-base"
            >
              GitHub
            </button>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="flex-1 w-full">
          <div 
            className="relative bg-[#2D2D4A] rounded-xl overflow-hidden border border-white/15 shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.images[currentImageIndex].src}
                alt={project.images[currentImageIndex].description}
                className="w-full h-56 sm:h-64 md:h-80 object-cover cursor-pointer"
                onClick={handleImageTap}
              />
              
              {/* Subtle dark tint overlay */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              
              {/* Slide-in Description Box */}
              <div 
                className={`
                  absolute inset-0 flex items-center justify-center text-center p-4 md:p-6
                  transition-all duration-700 ease-out
                  ${isOverlayVisible 
                    ? 'transform translate-x-0 translate-y-0 opacity-100' 
                    : `transform ${currentDirection} opacity-0`
                  }
                `}
              >
                <div className="w-full h-full bg-black/70 backdrop-blur-sm rounded-lg flex items-center justify-center p-6 md:p-8">
                  <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                    {project.images[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Left Arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all text-sm md:text-base backdrop-blur-sm z-10"
            >
              ◀
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all text-sm md:text-base backdrop-blur-sm z-10"
            >
              ▶
            </button>
            
            {/* Dot Indicators */}
            <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToImage(idx)}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-purple-400 w-4 md:w-6' 
                      : 'bg-white/40 w-1.5 md:w-2 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
