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
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <body className="min-h-screen antialiased">
        <Providers>
          <Navbar />
          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
