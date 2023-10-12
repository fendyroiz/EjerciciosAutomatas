
import { Header } from './componentes/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AUTOMATAS',
  description: 'FINITE-AUTOMATAS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header/>
        {children}</body>
    </html>
  )
}