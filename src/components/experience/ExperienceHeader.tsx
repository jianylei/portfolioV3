import { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/Accordion'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ExperienceHeaderProps {}

const ExperienceHeader: FC<ExperienceHeaderProps> = ({}) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-2">
      {/* opacity-40 hover:opacity-100 */}
      <motion.div
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <Image
          src="/cibc_logo.png"
          alt="CIBC logo"
          width="500"
          height="500"
          className="h-32 w-32 rounded-full object-contain object-center xl:h-[200px] xl:w-[200px]"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Application Developer Co-op</h4>
        <p className="mt-1 text-xl font-bold">CIBC</p>
        <p className="py-5 uppercase text-slate-600 dark:text-gray-300">
          Jan. 2022 - April 2022
        </p>
      </div>
    </div>
  )
}

export default ExperienceHeader
