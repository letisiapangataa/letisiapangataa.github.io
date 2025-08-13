import { ReactNode } from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <span className="text-l font-bold text-blue-600 hover:text-blue-800 cursor-pointer">
                  Letisia&apos;s Technical Notebook
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="https://www.linkedin.com/in/letisiapangataa/" target='_blank'>
                <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  LinkedIn
                </span>
              </Link>
              <Link href="https://github.com/letisiapangataa" target='_blank'>
                <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  GitHub
                </span>
              </Link>
               <Link href="mailto:lpangataa@outlook.com" target="_blank">
                <span className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  Email
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-sm text-center text-gray-500">
            <p>&copy; 2025 Letisia Pangata&apos;a. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
