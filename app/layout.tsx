import Header from "@/components/header"
import WaveBackground from "@/components/wavesBackground"

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Madhav Rapelli | Portfolio',
  description: 'This is just a simple portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-34`}>
        {children}
        <Header />
      </body>
    </html>
  )
}
