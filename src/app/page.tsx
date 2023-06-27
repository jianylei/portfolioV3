import HeroSection from '@/components/HeroSection'
import { Icons } from '@/components/Icons'
import ThemeToggle from '@/components/navbar/ThemeToggle'
import Navbar from '@/components/navbar/Navbar'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <HeroSection />

      <div className="flex flex-col space-y-32">
        {/* Experience */}
        <ExperienceSection />
        {/* Projects */}
        <ProjectSection />
        {/* About */}
        <AboutSection />
      </div>

      {/* Skills */}
      {/* Contact */}
    </main>
  )
}
