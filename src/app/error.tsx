'use client'

import { FaBug, FaInstagram } from 'react-icons/fa'

import { Button } from '@/components/ui/shadcn/button'

export default function GlobalError() {
  return (
    <div className="flex h-[90vh] flex-col items-center justify-center gap-8">
      <FaBug size={160} className="animate-bounce text-red-700" />
      <h1 className="text-4xl font-bold text-red-600">An unexpected error occurred</h1>
      <p className="max-w-xl text-center text-lg opacity-80">
        Something went wrong while loading this page. The site may be under maintenance. Please contact me if the
        problem persists.
      </p>
      <Button asChild className="flex items-center gap-2">
        <a href="https://www.instagram.com/fernando_hiroshi" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Contact via Instagram
        </a>
      </Button>
    </div>
  )
}
