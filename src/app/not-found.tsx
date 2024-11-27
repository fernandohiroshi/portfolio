'use client'

import { FaSkullCrossbones } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="flex h-[90vh] animate-pulse flex-col items-center justify-center">
      <FaSkullCrossbones size={240} className="animate-bounce text-red-700" />
      <h1 className="mt-8 text-center text-4xl">This page does not exist.</h1>
    </div>
  )
}
