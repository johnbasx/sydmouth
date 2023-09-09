import Navbar from '@/components/navbar'
import './static/globals.css'
import type { Metadata } from 'next'
import { Baloo_2 } from 'next/font/google'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Sydmouth House - by Yaipha 🪵',
  description:
    'Sydmouth House -by Yaipha. Custom furniture and interior design setups with a sense or artistic visualisation.',
}

const myFont = Baloo_2({
  subsets: ['latin'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <link rel="icon" href="/static/favicon.ico" sizes="any" />
      <link
        rel="apple-touch-icon"
        href="/static/apple-touch-icon.png"
        type="image"
        sizes="180x180"
      />
      <body className="bg-tallow-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
