import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

const locales = ['pt-br', 'ja'] as const

function isLocale(value: string): value is (typeof locales)[number] {
  return (locales as readonly string[]).includes(value)
}

export default getRequestConfig(async () => {
  const store = await cookies()
  const cookieLocale = store.get('locale')?.value
  const locale = cookieLocale && isLocale(cookieLocale) ? cookieLocale : 'pt-br'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
