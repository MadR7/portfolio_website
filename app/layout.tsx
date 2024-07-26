import Header from "@/components/header"
import './globals.css'
import { Raleway } from 'next/font/google'
import ActiveSectionContextProvider from "@/context/active-section-context"
import { Toaster } from "react-hot-toast"
import Footer from "@/components/footer"
import { ThemeContextProvider } from "@/context/theme-context"
import ThemeSwitch from "@/components/theme-switch"
import ThemeScript from "@/components/themescript"
import { ClerkProvider } from "@clerk/nextjs"


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
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <ThemeScript />
      </head>
      <body className={`${raleway.className} `}>
        <ClerkProvider>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="top-right"/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}