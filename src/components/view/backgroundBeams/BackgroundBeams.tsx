import React from 'react'

import { BackgroundBeams } from '@/components/ui/aceternity/background-beams-with-collision'

import Box from '../bento/Box'

export function BackgroundBeamsSection() {
  return (
    <Box className="col-span-12 h-full cursor-pointer md:col-span-6">
      <a
        href="https://konbinicode.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <BackgroundBeams className="transition-all duration-300 hover:scale-90">
          <h2 className="relative z-20 animate-pulse text-center font-sans text-4xl font-bold tracking-tight text-black dark:text-white md:text-5xl lg:text-5xl">
            KONBINI CODE <span className="text-pink-500">0.2</span>
          </h2>
        </BackgroundBeams>
      </a>
    </Box>
  )
}
