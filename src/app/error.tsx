'use client'

import { useTranslations } from 'next-intl'
import { FaBug, FaInstagram } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

export default function GlobalError() {
  const t = useTranslations('Error')

  return (
    <div className="flex h-[90vh] flex-col items-center justify-center gap-8">
      <FaBug size={160} className="animate-bounce text-red-700" />
      <h1 className="text-4xl font-bold text-red-600">{t('title')}</h1>
      <p className="max-w-xl text-center text-lg opacity-80">{t('description')}</p>
      <Button asChild className="flex items-center gap-2">
        <a href="https://www.instagram.com/fernando_hiroshi" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {t('instagramCta')}
        </a>
      </Button>
    </div>
  )
}
