import { FC } from 'react'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const nav = ['experience', 'projects', 'skills', 'about']
  return (
    <section id="hero">
      <div
        className="flex h-screen flex-col items-center justify-center space-y-8
        overflow-hidden text-center">
        <BackgroundCircle />
        <Image
          className="relative mx-auto h-32 w-32 rounded-full object-cover"
          src="/programmer.png"
          alt="profile"
          height="300"
          width="300"
        />
        <div className="z-20">
          <h2 className="pb-2 text-sm uppercase tracking-[15px] text-slate-600 dark:text-gray-default">
            Software Developer
          </h2>

          <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
            Hi, My Name&apos;s Jian
          </h1>

          <div className="pt-5">
            {nav.map((item, index) => {
              return (
                <Link href={`#${item}`} key={index}>
                  <button
                    className="px-6 py-2 text-sm uppercase tracking-widest text-slate-600 transition-all
                    hover:text-[#D4AF37] dark:text-gray-default dark:hover:text-[#F7AB0A]/40">
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
