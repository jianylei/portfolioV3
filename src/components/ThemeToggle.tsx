'use client'

import { MoonStar, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeToggle = ({}) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  console.log('system: ' + systemTheme)
  console.log('theme: ' + theme)

  return (
    <div
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className="flex w-full h-full p-2 pb-1">
      {theme == 'dark' ? (
        <SunMoon className="w-5 h-5 mr-2" />
      ) : (
        <MoonStar className="w-5 h-5 mr-2" />
      )}

      {theme == 'dark' ? 'Light Mode' : 'Dark Mode'}
    </div>
  )
}

export default ThemeToggle
