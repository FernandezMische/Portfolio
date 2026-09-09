import React from 'react'
import Reveal from '../components/Reveal'

function Home() {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-28">
      <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">
        <div className="hero-load">
          <p className="section-kicker mb-5">Full-stack developer · Cape Town</p>
          <h1 className="display-font text-[var(--color-secondary)] text-5xl sm:text-6xl md:text-8xl leading-[0.95] font-bold mb-7">
            Building thoughtful<br /><span className="text-[var(--color-accent)]">digital experiences.</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-base md:text-lg max-w-xl leading-relaxed mb-8">
            I am Mische Fernandez, a developer and team lead who turns thoughtful ideas into practical web and mobile experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View my work <span className="ml-3">↗</span></a>
            <a href="#contact" className="btn-secondary">Let&apos;s talk</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="space-stars space-stars-one"></div>
          <div className="space-stars space-stars-two"></div>
          <div className="space-halo"></div>
          <div className="space-moon">
            <span className="moon-crater moon-crater-one"></span>
            <span className="moon-crater moon-crater-two"></span>
            <span className="moon-crater moon-crater-three"></span>
          </div>
          <div className="hero-art-label">Explore / 2026</div>
        </div>
        <div className="border-t border-[var(--color-primary)] pt-5 lg:mb-2">
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5">A curious builder with a passion for technical problem-solving, clean interfaces, and collaborative work.</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><p className="text-[var(--color-accent)] font-bold">01</p><p className="text-[var(--color-secondary)] font-bold">Web development</p></div>
            <div><p className="text-[var(--color-accent)] font-bold">02</p><p className="text-[var(--color-secondary)] font-bold">Mobile experiences</p></div>
          </div>
        </div>
      </div>

      <Reveal className="mt-24 pt-8 border-t border-[#dfe5db]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="display-font text-[var(--color-secondary)] text-2xl md:text-3xl">Tools I work with</h2>
          <span className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest">Selected stack</span>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <span className="tech-pill">JavaScript</span>
          <span className="tech-pill">Python</span>
          <span className="tech-pill">Tailwind</span>
          <span className="tech-pill">Vue.js / Vite</span>
          <span className="tech-pill">ReactJS</span>
          <span className="tech-pill">Node.js</span>
          <span className="tech-pill">Express</span>
          <span className="tech-pill">PHP</span>
          <span className="tech-pill">MySQL</span>
          <span className="tech-pill">Supabase</span>
          <span className="tech-pill">Git</span>
          <span className="tech-pill">HTML/CSS</span>
          <span className="tech-pill">Flutter</span>
          <span className="tech-pill">Firebase</span>
        </div>
      </Reveal>
    </div>
  )
}

export default Home
