import { FC } from 'react'
import { SocialIcon } from 'react-social-icons'
import MoreOptionsNav from './MoreOptionsNav'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="sticky top-0 z-[10] p-5">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center">
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
        </div>

        <div className="flex flex-row items-center">
          <MoreOptionsNav />
        </div>
      </div>
    </header>
  )
}

export default Navbar
