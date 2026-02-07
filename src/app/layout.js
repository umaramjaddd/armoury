import { Cinzel, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Foooter"

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-zinc-900 text-white min-h-screen">

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
