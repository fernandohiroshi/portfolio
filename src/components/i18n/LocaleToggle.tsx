'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function LocaleToggle() {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('Ui')

  const nextLocale = locale === 'ja' ? 'pt-br' : 'ja'

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      aria-label={t('localeToggle.ariaLabel')}
      title={t('localeToggle.title')}
      onClick={() => {
        document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`
        router.refresh()
      }}
      suppressHydrationWarning
    >
      <span className="text-sm leading-none">{nextLocale === 'ja' ? '🇯🇵' : '🇧🇷'}</span>
    </Button>
  )
}
