import { ChevronDown, User } from 'lucide-react'
import { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/DropdownMenu'
import LogIn from './LogIn'
import ThemeToggle from './ThemeToggle'

interface MoreOptionsNavProps {}

const MoreOptionsNav: FC<MoreOptionsNavProps> = ({}) => {
  const toBeRendered = [ThemeToggle, LogIn]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center p-1 text-gray-default dark:text-gray-default">
        <User />
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white dark:border-[rgb(45,45,45)] dark:bg-[rgb(50,50,50)] [&>*:last-child]:border-0"
        align="end">
        {toBeRendered.map((Component, index) => {
          return (
            <DropdownMenuItem
              key={index}
              className="border-b border-slate-200 p-0 font-medium text-slate-800
             dark:border-[rgb(45,45,45)] dark:text-slate-50 dark:focus:bg-[rgb(60,60,60)]">
              <Component />
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreOptionsNav
