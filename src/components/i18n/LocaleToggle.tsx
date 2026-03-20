'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function LocaleToggle() {
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations('Ui')

  const languages = [
    { code: 'pt-br', label: 'Português', flag: '🇧🇷' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ]

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; samesite=lax`
    router.refresh()
  }

  const currentLanguage = languages.find((lang) => lang.code === locale)

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        className="h-9 w-auto gap-2 border-input bg-transparent px-3"
        aria-label={t('localeToggle.ariaLabel')}
        title={t('localeToggle.title')}
        suppressHydrationWarning
      >
        <SelectValue>
          <div className="flex items-center gap-2">
            <span className="text-base">{currentLanguage?.flag}</span>
            <span className="hidden text-sm sm:inline">{currentLanguage?.label}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span>{language.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
