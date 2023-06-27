'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import Skill from './Skill'

interface SkillsSectionProps {}

const SkillsSection: FC<SkillsSectionProps> = ({}) => {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="relative mx-auto flex h-full max-w-full flex-col
        items-center justify-evenly overflow-hidden px-10 text-left">
        <h3 className="text-2xl uppercase tracking-[20px] text-slate-600 dark:text-gray-default">
          Skills
        </h3>

        <div className="mt-28 grid grid-cols-4 gap-5">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </section>
  )
}

export default SkillsSection
