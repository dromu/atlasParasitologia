import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import { Footer } from '../components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atlas de Parasitología',
  description: 'Un atlas interactivo de parásitos intestinales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Atlas de Parasitología</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

