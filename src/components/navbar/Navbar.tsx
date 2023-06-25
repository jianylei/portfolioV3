'use client'

import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'
import MoreOptionsNav from './MoreOptionsNav'
import { motion } from 'framer-motion'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="sticky top-0 z-[10] p-5">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.4
          }}
          className="flex flex-row items-center">
          <SocialIcon
            url="https://www.linkedin.com/in/jianylei-dev/"
            fgColor="rgb(51 65 85)"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/jianylei"
            fgColor="rgb(51 65 85)"
            bgColor="transparent"
          />
          <div className="flex flex-row items-center cursor-pointer">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="rgb(51 65 85)"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-slate-700">
              Get In Touch
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.4
          }}
          className="flex flex-row items-center">
          <MoreOptionsNav />
        </motion.div>
      </div>
    </header>
  )
}

export default Navbar
