import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialButtons from "@/components/social-buttons"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DL Construcciones - Servicios de construcción de calidad",
  description:
    "Empresa líder en construcción y servicios constructivos. Ofrecemos soluciones de calidad para proyectos residenciales y comerciales.",
  openGraph: {
    title: "DL Construcciones - Servicios de construcción de calidad",
    description:
      "Empresa líder en construcción y servicios constructivos. Ofrecemos soluciones de calidad para proyectos residenciales y comerciales.",
    url: "https://dlconstrucciones.com",
    siteName: "DL Construcciones",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DL Construcciones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <SocialButtons />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'