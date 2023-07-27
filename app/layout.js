import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Json Prettify/Minify Tool - PrettyPrintJson.com',
  description: 'Easily format and beautify your JSON code with this online JSON editor. Features include JSON validation, minify, upload, copy, and download. Perfect for developers and anyone working with JSON data.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5287798851641238" crossorigin="anonymous" strategy='lazyOnload'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}