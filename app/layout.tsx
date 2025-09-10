import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Ifesinachi Daniel - A full stack developer and blockchain engineer.",
  description: "A full stack developer and blockchain engineer with 3 year experince",
  icons: {
    icon: "https://res.cloudinary.com/ddgiav2pi/image/upload/v1757492210/photo_2025-09-10_09-15-17_y4nufk.jpg",         // for favicon or app icon
    shortcut: "https://res.cloudinary.com/ddgiav2pi/image/upload/v1757492210/photo_2025-09-10_09-15-17_y4nufk.jpg",     // optional
    apple: "https://res.cloudinary.com/ddgiav2pi/image/upload/v1757492210/photo_2025-09-10_09-15-17_y4nufk.jpg",        // for Apple devices
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
