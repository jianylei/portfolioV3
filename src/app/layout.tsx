import Providers from '@/components/Providers'
import Navbar from '@/components/navbar/Navbar'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Jian's Portfolio",
  description: 'Portfolio to showcase previous work and projects'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'antialiase z-0 overflow-scroll overflow-x-hidden scroll-smooth text-slate-800',
        inter.className
      )}>
      <body className="min-h-screen pt-12 antialiased">
        <Providers>
          <Navbar />

          <div className="container mx-auto h-full max-w-7xl pt-12">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
