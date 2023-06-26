import { FC } from 'react'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const nav = ['about', 'experience', 'skills', 'projects']
  return (
    <section id="hero" className="snap-center">
      <div
        className="h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden">
        <BackgroundCircle />
        <Image
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="/programmer.png"
          alt="profile"
          height="300"
          width="300"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-slate-600 dark:text-gray-500 pb-2 tracking-[15px]">
            Software Developer
          </h2>

          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            Hi, My Name's Jian
          </h1>

          <div className="pt-5">
            {nav.map((item, index) => {
              return (
                <Link href={`#${item}`} key={index}>
                  <button
                    className="px-6 py-2 uppercase text-sm tracking-widest
                    text-slate-600 dark:text-gray-500 transition-all hover:text-[#D4AF37] dark:hover:text-[#F7AB0A]/40">
                    {item}
                  </button>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
