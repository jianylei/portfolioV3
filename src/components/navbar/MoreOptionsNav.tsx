import { ChevronDown, User } from 'lucide-react'
import { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/Dropdown-Menu'
import LogIn from './LogIn'
import ThemeToggle from './ThemeToggle'

interface MoreOptionsNavProps {}

const MoreOptionsNav: FC<MoreOptionsNavProps> = ({}) => {
  const toBeRendered = [ThemeToggle, LogIn]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex p-1 items-center dark:text-gray text-gray">
        <User />
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white dark:bg-[rgb(50,50,50)] [&>*:last-child]:border-0 dark:border-[rgb(45,45,45)]"
        align="end">
        {toBeRendered.map((Component, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="text-slate-800 font-medium p-0 dark:text-slate-50 border-b
             border-slate-200 dark:border-[rgb(45,45,45)] dark:focus:bg-[rgb(60,60,60)]">
              <Component />
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreOptionsNav
