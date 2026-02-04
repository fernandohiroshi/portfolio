'use client'

import { useTranslations } from 'next-intl'
import { FaSkullCrossbones } from 'react-icons/fa'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <div className="flex h-[90vh] animate-pulse flex-col items-center justify-center">
      <FaSkullCrossbones size={240} className="animate-bounce text-red-700" />
      <h1 className="mt-8 text-center text-4xl">{t('title')}</h1>
    </div>
  )
}
