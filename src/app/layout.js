import Header from '@/components/Header/Navigation/Header/Header'
import '../styles/globals.scss'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marina Bogoda',
  description: 'Marina Bogoda',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
      <div className="main">
        {children}
      </div>
      </body>
    </html>
  )
}
