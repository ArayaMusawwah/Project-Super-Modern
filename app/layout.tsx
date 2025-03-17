import type { Metadata } from 'next'
import { Geist, Geist_Mono, Abril_Fatface } from 'next/font/google'
import './tailwind.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const abril = Abril_Fatface({
  variable: '--font-abril',
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio DesignBrata',
  description: 'Portfolio DesignBrata',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abril.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
