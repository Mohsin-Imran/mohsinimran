import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ClientLoader from "./ClientLoader"

export const metadata: Metadata = {
  title: "Mohsin Portfolio",
  description: "Personal Portfolio of Mohsin Memon",
  icons: {
    icon: "/images/profile.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans bg-black text-white ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ClientLoader>{children}</ClientLoader>
        <Analytics />
      </body>
    </html>
  )
}
