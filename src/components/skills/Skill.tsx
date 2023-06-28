import Image from 'next/image'
import { FC } from 'react'

interface SkillProps {}

const Skill: FC<SkillProps> = ({}) => {
  return (
    <div className="group relative flex cursor-pointer">
      <div>
        <Image
          src="/cibc_logo.png"
          alt="cibc"
          height="500"
          width="500"
          className="h-20 w-20 rounded-full border border-slate-200 object-contain shadow filter transition duration-300
          ease-in-out group-hover:grayscale dark:border-gray-default md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32"
        />
      </div>

      <div
        className="absolute z-0 h-20 w-20 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-slate-700
        group-hover:opacity-95 dark:group-hover:bg-white dark:group-hover:opacity-75 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-xs font-semibold text-white opacity-100 dark:text-black md:text-sm lg:text-base xl:text-lg">
            TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
