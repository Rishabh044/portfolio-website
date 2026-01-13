import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rishabh Hedaoo | Software Engineer',
  description: 'Software Engineer at Overstand Labs (YC W25). IIT BHU graduate specializing in Data Engineering, RAG Systems, and Full-Stack Development.',
  keywords: ['Rishabh Hedaoo', 'Software Engineer', 'Data Engineer', 'IIT BHU', 'Overstand Labs', 'React', 'Python', 'Databricks'],
  authors: [{ name: 'Rishabh Hedaoo' }],
  openGraph: {
    title: 'Rishabh Hedaoo | Software Engineer',
    description: 'Software Engineer at Overstand Labs (YC W25). Building scalable data pipelines and AI systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
