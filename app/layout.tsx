import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Murtaza Ahmed | Full Stack Developer',
  description: 'Created with v0',
   generator: 'v0.dev',
   icons: {
    icon: "/favicon.ico",
    apple: "/assests/mypic.png",
    shortcut: "/favicon-16x16.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="myPic-icon" href="/assests/mypic.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
