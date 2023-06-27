'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceHeader from './ExperienceHeader'

interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = ({}) => {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="relative mx-auto flex h-full max-w-full flex-col
        items-center justify-evenly overflow-hidden px-10 text-left">
        <h3 className="pt-24 text-2xl uppercase tracking-[20px] text-slate-600 dark:text-gray-default">
          Experience
        </h3>

        <div className="flex w-full justify-center p-10">
          <ExperienceCard />
        </div>
      </motion.div>
    </section>
  )
}

export default ExperienceSection
