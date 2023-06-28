import AboutSection from '@/components/about/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/skills/SkillsSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <HeroSection />

      <div className="flex flex-col space-y-32">
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  )
}
