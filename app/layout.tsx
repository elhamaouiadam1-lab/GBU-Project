import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

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
      <body className="bg-[#0A0A0C] text-gray-200 font-sans antialiased selection:bg-emerald-500/30 overflow-x-hidden">
        
        <div className="min-h-screen flex flex-col relative">
          {/* Your glowing backgrounds */}
          <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />
          
          <main className="relative z-10 container mx-auto px-4 py-12 md:py-24 max-w-6xl flex-grow">
            {children}
          </main>
        </div>
        
        {/* Vercel Analytics tracking script */}
        <Analytics />
      </body>
    </html>
  )
}
