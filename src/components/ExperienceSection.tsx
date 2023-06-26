'use client'

import { motion } from 'framer-motion'
import { FC } from 'react'
import ExperienceCard from './ExperienceCard'

interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = ({}) => {
  return (
    <section id="experience" className="snap-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-default text-2xl">
          Experience
        </h3>

        <div className="w-full flex justify-center p-10 mt-[150px] xl:mt-[100px]">
          {/* overflow-x-scroll space-x-5 snap-x snap-mandatory */}
          <ExperienceCard />
        </div>
      </motion.div>
    </section>
  )
}

export default ExperienceSection
