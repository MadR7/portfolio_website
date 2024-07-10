import Header from "@/components/header"
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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative min-h-screen pt-28 sm:pt-34`}>
        {/* Responsive SVG Background */}
        <div className="fixed inset-0 z-[-1] w-full h-full overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <rect x="0" y="0" width="1920" height="1080" fill="#FFFFFF"></rect><path d="M0 733L40 716.5C80 700 160 667 240 664.5C320 662 400 690 480 699.7C560 709.3 640 700.7 720 700C800 699.3 880 706.7 960 725.2C1040 743.7 1120 773.3 1200 793.8C1280 814.3 1360 825.7 1440 826.2C1520 826.7 1600 816.3 1680 827C1760 837.7 1840 869.3 1880 885.2L1920 901L1920 0L1880 0C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z" fill="#273246"></path><path d="M0 427L40 448.5C80 470 160 513 240 551.8C320 590.7 400 625.3 480 618.2C560 611 640 562 720 531.5C800 501 880 489 960 504.8C1040 520.7 1120 564.3 1200 586.7C1280 609 1360 610 1440 577.8C1520 545.7 1600 480.3 1680 470C1760 459.7 1840 504.3 1880 526.7L1920 549L1920 0L1880 0C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z" fill="#222c3e"></path><path d="M0 424L40 399.7C80 375.3 160 326.7 240 308.5C320 290.3 400 302.7 480 340C560 377.3 640 439.7 720 445.8C800 452 880 402 960 399C1040 396 1120 440 1200 439.3C1280 438.7 1360 393.3 1440 357.8C1520 322.3 1600 296.7 1680 282.7C1760 268.7 1840 266.3 1880 265.2L1920 264L1920 0L1880 0C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z" fill="#1e2636"></path><path d="M0 152L40 166.7C80 181.3 160 210.7 240 234.3C320 258 400 276 480 269.3C560 262.7 640 231.3 720 204C800 176.7 880 153.3 960 150.3C1040 147.3 1120 164.7 1200 198.8C1280 233 1360 284 1440 277.2C1520 270.3 1600 205.7 1680 174.2C1760 142.7 1840 144.3 1880 145.2L1920 146L1920 0L1880 0C1840 0 1760 0 1680 0C1600 0 1520 0 1440 0C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0L0 0Z" fill="#19212f"></path>          
            
            </svg>
        </div>
        {children}
        <Header />
      </body>
    </html>
  )
}
