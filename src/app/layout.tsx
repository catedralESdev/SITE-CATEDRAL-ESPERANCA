import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catedral da Esperança',
  description: 'Romanos 8:28',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
