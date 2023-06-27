'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import AboutContent from './AboutContent'

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="relative mx-auto flex h-full max-w-full flex-col
        items-center justify-evenly overflow-hidden px-10 text-left">
        <h3 className="text-2xl uppercase tracking-[20px] text-slate-600 dark:text-gray-default">
          About
        </h3>

        <AboutContent />
      </motion.div>
    </section>
  )
}

export default AboutSection
