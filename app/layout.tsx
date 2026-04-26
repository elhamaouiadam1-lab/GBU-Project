import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'GDP Growth Analysis — GBU Econometrics Case Study 2',
  description:
    'Regression analysis and time series forecasting of GDP growth determinants across 180 monthly observations (2010–2024).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 font-sans">{children}</body>
    </html>
  )
}
