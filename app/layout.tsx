import Header from "@/components/header"
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

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
      <body className={`${raleway.className} `}>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}