'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import { LocaleToggle } from '@/components/i18n/LocaleToggle'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

import { Nav } from './nav/Nav'

const Header = () => {
  const t = useTranslations('Header')

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="sticky top-0 z-50 flex scroll-mt-24 items-center justify-between bg-background/80 px-4 py-4 backdrop-blur-2xl lg:px-0"
    >
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between">
        <Link href="/#home" title={t('logoTitle')}>
          <Image
            src="/imgs/logo.webp"
            alt={t('logoAlt')}
            width={40}
            height={40}
            sizes="40px"
            quality={75}
            priority
            className="h-10 w-10 duration-500 ease-in-out hover:scale-125 hover:brightness-125"
          />
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleToggle />
          <Nav />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
