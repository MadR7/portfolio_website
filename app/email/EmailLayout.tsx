import ThemeScript from "@/components/themescript"
import { Toaster } from "react-hot-toast"
import ThemeSwitch from "@/components/theme-switch"

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeScript />
      {children}
      <Toaster position="top-right"/>
      <ThemeSwitch />
    </>
  )
}