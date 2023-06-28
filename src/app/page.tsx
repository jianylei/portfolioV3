'use client'

import AboutSection from '@/components/about/AboutSection'
import ContactSection from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/skills/SkillsSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'
import Link from 'next/link'
import { ChevronUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from '@mantine/hooks'

export default function Home() {
  const [show, setShow] = useState<boolean>(false)
  const initRef = useRef<HTMLElement>(null)
  const [isMounted, setIsmounted] = useState<boolean>(false)

  const { ref, entry } = useIntersection({
    root: initRef.current,
    threshold: 1
  })

  useEffect(() => {
    setIsmounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      if (entry?.isIntersecting) {
        console.log('123123123')
        setShow(false)
      } else setShow(true)
    }
  }, [entry, setShow])

  return (
    <main className="flex min-h-screen flex-col">
      <div ref={ref} />
      <HeroSection />

      <div className="flex flex-col space-y-32">
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>

      {show ? (
        <Link href="#hero">
          <footer className="fixed bottom-5 left-0 z-[999] w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <div
                className="rounded-full border border-slate-200  bg-slate-100 text-slate-400 shadow transition
              duration-300 hover:scale-125 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] dark:border-gray-default
              dark:bg-[rgb(36,36,36)] dark:text-gray-default dark:hover:border-[#F7AB0A]/40 dark:hover:text-[#F7AB0A]">
                <ChevronUp className="h-7 w-7 cursor-pointer rounded-full" />
              </div>
            </div>
          </footer>
        </Link>
      ) : null}
    </main>
  )
}
