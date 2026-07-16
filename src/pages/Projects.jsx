import React, { useState } from 'react'

// Import your Township Eats screenshots
import loginImg from '../assets/LoginPage.png'
import cartImg from '../assets/CartPage.png'
import payfastImg from '../assets/PaymentPayfast.png'

// Import your HR Management screenshots
// import dashboardImg from '../assets/dashboardPage.png'
// import leaveApplicationsImg from '../assets/leaveApplications.png'
// import leaveReqPageImg from '../assets/leaveReqPage.png'

// Import your Oracle APEX screenshot
import oracleApexImg from '../assets/oracleApex.png'
import AppRecord from '../assets/AppRecord.mp4'
import goVideo from '../assets/go.mp4'

const projects = [
  
  {
    id: 2,
    title: "FuturePath",
    description: "A Flutter app for job opportunities and courses, built with Supabase and role-based authentication.",
    tags: [ "supabase", "flutter", "native development"],
    repoLink: "https://github.com/lcs-cohort-17/FuturePath-Employment-Hub/tree/phoenix/qa-uiux/sprint2-navmerge",
    liveLink: AppRecord,
    images: [
      { 
        src: AppRecord,
        type: "video",
        description: "FuturePath app recording - Job opportunities, courses, and role-based access in the Flutter app."
      }
    ]
  },

  {
    id: 1,
    title: "Township Eats",
    description: "A full-stack food ordering platform built for local township businesses. I built the entire backend including authentication, payment integration with PayFast, and real-time order management. The app is fully hosted on Vercel (frontend), Render (backend), and TiDB (AWS) for the database.",
    tags: ["Vue.js", "Vite", "Node.js", "Express", "TiDB (AWS)", "PayFast", "JWT", "Vercel", "Render"],
    repoLink: "https://github.com/sandiliviwe04/TownshipsEats-App",
    liveLink: "https://townships-eats-app.vercel.app/",
    images: [
      { 
        src: loginImg,
        description: "Login page with JWT authentication - Passwords are hashed and stored in TiDB database on AWS" 
      },
      { 
        src: cartImg,
        description: "Shopping cart - Cart items and quantities update in real-time in TiDB database on AWS" 
      },
      { 
        src: payfastImg,
        description: "PayFast payment integration - Sandbox mode with PayFast JS library and ITN email notifications" 
      }
    ]
  },

  {
    id: 3,
    title: "Oracle APEX Data Analysis",
    description: "Data analysis and visualization project on OT enterprise systems using Oracle APEX. I performed comprehensive analysis and created interactive visualizations to provide insights into enterprise operations.",
    tags: ["Oracle APEX", "SQL", "Data Analysis", "Data Visualization", "OT Enterprise Systems"],
    repoLink: "#",
    liveLink: "https://www.loom.com/share/ca839763ca27402aaa0731a8d7626e90",
    images: [
      { 
        src: oracleApexImg,
        description: "Oracle APEX dashboard - Data analysis and visualizations on OT enterprise systems showing key metrics, trends, and operational insights." 
      }
    ]
  },

  {
    id: 4,
    title: "Go Card",
    description: "A Flutter NFC app that lets Golden Arrow commuters load trips onto their GA clip card directly from their phone, reducing kiosk queues and making transit top-ups faster and easier.",
    tags: ["Flutter", "NFC", "Mobile", "Transit"],
    repoLink: "https://github.com/FernandezMische/card_loader",
    liveLink: goVideo,
    images: [
      {
        src: goVideo,
        type: "video",
        description: "Go Card app recording - NFC mobile-to-card interaction for loading transit trips onto a GA clip card."
      }
    ]
  }
]

function Projects() {
  const handleRepoClick = (repoLink) => {
    if (repoLink && repoLink !== '#') {
      window.open(repoLink, '_blank')
    }
  }

  const handleLiveDemoClick = (liveLink) => {
    if (liveLink) {
      window.open(liveLink, '_blank')
    }
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
          onLiveDemoClick={handleLiveDemoClick}
        />
      ))}
    </div>
  )
}

function ProjectSection({ project, index, onRepoClick, onLiveDemoClick }) {
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

  const handleMouseEnter = () => {
    setIsOverlayVisible(true)
  }

  const handleMouseLeave = () => {
    setIsOverlayVisible(false)
  }

  const handleImageTap = () => {
    setIsOverlayVisible(!isOverlayVisible)
  }

  const isEven = index % 2 === 0
  
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
  const hasLiveDemo = project.liveLink && project.liveLink !== '#'

  return (
    <div className={`py-8 md:py-16 ${!isEven ? 'bg-[#1F1F2E] -mx-4 md:-mx-8 px-4 md:px-8 rounded-xl' : ''}`}>
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 items-center`}>
        <div className="flex-1">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">{project.title}</h2>
          <p className="text-white/70 mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="tech-pill text-xs md:text-sm">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {hasLiveDemo && (
              <button 
                onClick={() => onLiveDemoClick(project.liveLink)} 
                className="btn-primary text-sm md:text-base"
              >
                Live Demo
              </button>
            )}
            <button 
              onClick={() => onRepoClick(project.repoLink)} 
              className="btn-secondary text-sm md:text-base"
            >
              GitHub
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div 
            className="relative bg-[#2D2D4A] rounded-xl overflow-hidden border border-white/15 shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden">
              {project.images[currentImageIndex].type === 'video' ? (
                <video
                  src={project.images[currentImageIndex].src}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover cursor-pointer"
                  onClick={handleImageTap}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img 
                  src={project.images[currentImageIndex].src}
                  alt={project.images[currentImageIndex].description}
                  className="w-full h-56 sm:h-64 md:h-80 object-cover cursor-pointer"
                  onClick={handleImageTap}
                />
              )}
              
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              
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
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all text-sm md:text-base backdrop-blur-sm z-10"
                >
                  â—€
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-purple-500 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-all text-sm md:text-base backdrop-blur-sm z-10"
                >
                  â–¶
                </button>
              </>
            )}
            
            {project.images.length > 1 && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
