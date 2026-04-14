import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A full-stack task management application with user authentication and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    images: [
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Dashboard+View", alt: "Dashboard view", description: "Dashboard view showing task organization" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Create+Task", alt: "Create task", description: "Create new task modal with priority settings" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Activity+Feed", alt: "Activity feed", description: "Real-time activity feed" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=User+Profile", alt: "User profile", description: "User profile and settings page" }
    ]
  },
  {
    id: 2,
    title: "Project Beta",
    description: "E-commerce API and frontend with payment integration and order management system.",
    tags: ["Express", "PostgreSQL", "Stripe", "JWT"],
    images: [
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Product+Listing", alt: "Product listing", description: "Product listing page with filters" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Shopping+Cart", alt: "Shopping cart", description: "Shopping cart and checkout flow" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Payment", alt: "Payment", description: "Payment integration with Stripe" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Order+Confirmation", alt: "Order confirmation", description: "Order confirmation page" }
    ]
  },
  {
    id: 3,
    title: "Project Gamma",
    description: "Data visualization dashboard with real-time analytics and interactive charts.",
    tags: ["Next.js", "Chart.js", "Tailwind CSS", "D3.js"],
    images: [
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Analytics+Dashboard", alt: "Dashboard", description: "Main dashboard with key metrics" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Interactive+Charts", alt: "Charts", description: "Interactive line charts showing trends" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Date+Filter", alt: "Filter", description: "Data filtering and date range selector" },
      { src: "https://placehold.co/600x400/3D3D6B/FFFFFF?text=Export", alt: "Export", description: "Export report modal with PDF option" }
    ]
  }
]

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-16">
      <h1 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Projects</h1>
      
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

function ProjectSection({ project, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const isEven = index % 2 === 0
  
  // Different slide directions for each carousel image - STORED PER IMAGE
  const getSlideDirection = (imageIndex) => {
    const directions = [
      'translate-x-[-100%]',  // from left
      'translate-x-[100%]',   // from right
      'translate-y-[-100%]',  // from top
      'translate-y-[100%]'    // from bottom
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
            <button className="btn-primary text-sm md:text-base">Live Demo</button>
            <button className="btn-secondary text-sm md:text-base">GitHub</button>
          </div>
        </div>
        
        {/* Carousel */}
        <div className="flex-1 w-full">
          <div 
            className="relative bg-[#2D2D4A] rounded-xl overflow-hidden border border-white/15 shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.images[currentImageIndex].src}
                alt={project.images[currentImageIndex].alt}
                className="w-full h-56 sm:h-64 md:h-80 object-cover"
              />
              
              {/* Transparent overlay - very low opacity */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              
              {/* FULL-SIZE slide-in box that appears on hover */}
              <div 
                className={`absolute inset-0 flex items-center justify-center text-center p-4 md:p-6 transition-all duration-700 ease-out ${
                  isHovered ? 'transform translate-x-0 translate-y-0 opacity-100' : `transform ${currentDirection} opacity-0`
                }`}
              >
                <div className="w-full h-full bg-black/70 backdrop-blur-sm rounded-lg flex items-center justify-center p-6 md:p-8">
                  <p className="text-white text-base md:text-lg font-medium leading-relaxed">
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
                  onClick={() => setCurrentImageIndex(idx)}
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