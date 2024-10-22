import './globals.css'
import { Raleway } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeContextProvider } from "@/context/theme-context"
import ActiveSectionContextProvider from "@/context/active-section-context"

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Madhav Rapelli',
  description: 'This is my personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={raleway.className}>
        <ClerkProvider>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              {children}
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
