import { FC } from 'react'

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section id="about" className="snap-center">
      <div className="h-screen flex flex-col relative text-center md:text-left">
        About
      </div>
    </section>
  )
}

export default AboutSection
