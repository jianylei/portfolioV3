import { FC } from 'react'
import BackgroundCircle from './BackgroundCircle'

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section id="hero">
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircle />
        <h1>Hi, My Name's Jian</h1>
      </div>
    </section>
  )
}

export default HeroSection
