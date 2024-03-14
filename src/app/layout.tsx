import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from './context/authContext'
import { inter } from './fonts/fonts'
import { Footer } from './components/Footer'

export const metadata: Metadata = {
  title: "Luco's store",
  description: 'Tienda fake desarrollada por Rubert Gonzalez.'
}

export const dynamic = 'force-dynamic'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-principal min-h-screen`}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
