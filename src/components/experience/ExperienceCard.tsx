import { FC } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/Accordion'
import ExperienceHeader from './ExperienceHeader'
import ExperienceContent from './ExperienceContent'

interface ExperienceCardProps {}

const ExperienceCard: FC<ExperienceCardProps> = ({}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="h-full w-full border-0 bg-slate-200 px-5 opacity-60 transition-opacity
      duration-200 hover:opacity-100 dark:bg-[#292929]">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger>
          <div className="h-full w-full">
            <ExperienceHeader />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ExperienceContent />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ExperienceCard
