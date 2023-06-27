import HeroSection from '@/components/HeroSection'
import { Icons } from '@/components/Icons'
import ThemeToggle from '@/components/navbar/ThemeToggle'
import Navbar from '@/components/navbar/Navbar'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ProjectSection from '@/components/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <HeroSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Projects */}
      <ProjectSection />

      {/* About */}
      <AboutSection />

      {/* Skills */}
      {/* Contact */}
    </main>
  )
}
