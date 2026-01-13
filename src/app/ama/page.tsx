import { Metadata } from 'next'
import ChatInterface from '@/components/ama/ChatInterface'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AMA | Rishabh Hedaoo',
  description: "Ask me anything about Rishabh's experience, skills, and projects.",
}

export default function AMAPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container-width px-4">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <ChatInterface />
      </div>
    </div>
  )
}
