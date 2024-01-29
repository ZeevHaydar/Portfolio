import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: "400"}); 
const poppinsBold = Poppins({ subsets: ['latin'], weight: "700"}); 

export const metadata: Metadata = {
  title: 'Nazhif Haidar',
  description: 'Nazhif Haidar\'s Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
