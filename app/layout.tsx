import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Corexa Labs | Building the Core of Innovation & Excellence',
  description: 'Corexa Labs',
  generator: 'Corexa Labs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Default meta tags, can be overridden in pages */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
