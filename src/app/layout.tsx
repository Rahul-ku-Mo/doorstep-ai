import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'


export const metadata: Metadata = {
  title: 'Vercel Clone - Build and deploy on the AI Cloud',
  description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body className={`${GeistSans.variable} ${GeistMono.variable} font-sf`}>{children}</body>
    </html>
  )
}
