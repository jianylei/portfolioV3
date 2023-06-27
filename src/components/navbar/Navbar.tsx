'use client'

import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'
import MoreOptionsNav from './MoreOptionsNav'
import { motion } from 'framer-motion'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 bg-slate-100 p-5 pb-2 dark:bg-[rgb(36,36,36)]">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between overflow-hidden">
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
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/jianylei"
            fgColor="gray"
            bgColor="transparent"
          />
          <div className="flex cursor-pointer flex-row items-center">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="hidden uppercase text-gray-default md:inline-flex">
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
