
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
        <div>
        <div className='bg-blue-400 p-2  font-bold font-serif text-purple-400'>
           <h1 className='py-5 text-center text-white'>Automatas Finitos Deterministas</h1>
       </div>
          
       <Header/>
        </div>
        <main className='flex-grow p-4'>
              {children}
            </main>
        
        </body>
    </html>
  )
}