import AboutSection from '@/components/about/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/skills/SkillsSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'
import Link from 'next/link'
import { Icons } from '@/components/Icons'
import { ChevronUp } from 'lucide-react'

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
        <Link href="#hero">
          <footer className="fixed bottom-5 left-0 z-[999] w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div
                className="rounded-full border border-slate-200  bg-slate-100 text-slate-400 shadow transition
                duration-300 hover:scale-125 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]
                dark:border-gray-default dark:bg-[rgb(36,36,36)] dark:text-gray-default dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]">
                <ChevronUp className="h-7 w-7 cursor-pointer rounded-full" />
              </div>
            </div>
          </footer>
        </Link>
      </div>
    </main>
  )
}
