// Imports Nextjs
import type { Metadata } from 'next'

// Google Fonts
import { Inter } from 'next/font/google'

// CSS (GLOBAL)
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monty hall',
  description: 'Monty hall feito com nextjs',
  authors: [{name: "Bruno Mikael Nagel"}],
  keywords: ["monty hall"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
