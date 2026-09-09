import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import BootSequence from '@/components/BootSequence'
import ScrollProgress from '@/components/ScrollProgress'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Abdul Samad — Full Stack Developer',
  description:
    'MERN Stack Developer with 1.5+ years of experience building scalable web applications. React, Node.js, TypeScript, MongoDB.',
  keywords: ['Abdul Samad', 'Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'TypeScript'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050505] text-slate-100">
        <BootSequence />
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
