import Header from "@/components/header"
import { Toaster } from "react-hot-toast"
import ThemeSwitch from "@/components/theme-switch"
import ThemeScript from "@/components/themescript"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeScript />
      <Header />
      {children}
      <Toaster position="top-right"/>
      <ThemeSwitch />
    </>
  )
}