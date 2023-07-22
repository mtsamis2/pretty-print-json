import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ title, description, children }) {
  return (
    <>
    <head>
      <title>{title}</title>
      <meta name="description" content={description}/>
    </head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  )
}
