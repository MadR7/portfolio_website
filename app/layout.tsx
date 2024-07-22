import Header from "@/components/header"
import './globals.css'
import { Raleway } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/footer"

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${raleway.className} `}>
        <div>
          <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right"/>
          </ActiveSectionContextProvider>

          
        </div>
      </body>
    </html>
  )
}