import { FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import { ChevronDown, LogIn, MoonStar, User } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'

interface MoreOptionsNavProps {}

const MoreOptionsNav: FC<MoreOptionsNavProps> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex p-1 items-center text-slate-700">
        <User />
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-slate-700 font-medium p-0">
          <ThemeToggle />
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-slate-700 font-medium p-0">
          <div className="flex p-2 pb-1">
            <LogIn className="w-5 h-5 mr-2" />
            Log In
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreOptionsNav
